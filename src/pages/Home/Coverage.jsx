import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useRef, useState } from "react";

// ✅ Fix missing default marker icon
const DefaultIcon = L.icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
});
L.Marker.prototype.options.icon = DefaultIcon;

// ✅ Helper to update map view when a district is selected
const ChangeMapView = ({ coords }) => {
    const map = useMap();
    useEffect(() => {
        if (coords) {
            map.setView(coords, 10); // Zoom in on selected
        }
    }, [coords, map]);
    return null;
};

const CoverageMap = () => {
    const center = [23.6850, 90.3563]; // Bangladesh center
    const [districts, setDistricts] = useState([]);
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [selectedCoords, setSelectedCoords] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const popupRefs = useRef([]);

    // ✅ Fetch data from JSON file
    useEffect(() => {
        fetch('/warehouses.json')
            .then(res => res.json())
            .then(data => setDistricts(data));
    }, []);


    useEffect(() => {
        if (search) {
            const match = districts.filter(d =>
                d.district.toLowerCase().includes(search.toLowerCase())
            );
            setFiltered(match);
        } else {
            setFiltered([]);
        }
    }, [search, districts]);


    const handleSelect = (district, index) => {
        setSearch(district.district);
        const coords = [district.latitude, district.longitude];
        setSelectedCoords(coords);
        setActiveIndex(index);


        setTimeout(() => {
            popupRefs.current[index]?.openPopup();
        }, 300);
    };

    return (
        <div className="w-full flex flex-col items-center py-16 px-4  min-h-[calc(100vh-100px)] space-y-6">
            <h2 className="text-2xl font-bold text-center">We are available in 64 districts</h2>

            {/* 🔍 Search Bar */}
            <div className="w-full max-w-2xl px-4 relative z-[1000]">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setSelectedCoords(null);
                        setActiveIndex(null);
                    }}
                    placeholder="Search district..."
                    className="w-full p-3 border rounded shadow"
                />
                {search && filtered.length > 0 && (
                    <ul className="absolute z-50 bg-white w-full shadow rounded border max-h-60 overflow-y-auto mt-1 text-black">
                        {filtered.map((d, i) => {
                            const index = districts.findIndex(dist => dist.district === d.district);
                            return (
                                <li
                                    key={i}
                                    onClick={() => handleSelect(d, index)}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {d.district}, {d.region}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>

            {/* 🗺️ Map Section */}
            <div className="w-full max-w-7xl h-[600px] z-0">
                <MapContainer center={center} zoom={7} style={{ height: "100%", width: "100%" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Zoom on selected district */}
                    <ChangeMapView coords={selectedCoords} />

                    {/* Markers */}
                    {districts.map((district, index) => (
                        <Marker
                            key={index}
                            position={[district.latitude, district.longitude]}
                            ref={(ref) => (popupRefs.current[index] = ref)}
                        >
                            <Popup>
                                <strong>{district.district}</strong><br />
                                {district.city}, {district.region}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default CoverageMap;
