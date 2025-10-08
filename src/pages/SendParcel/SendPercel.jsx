import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SendParcel = () => {
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm();

    const [parcelType, setParcelType] = useState("Document");
    const [senderRegion, setSenderRegion] = useState("");
    const [receiverRegion, setReceiverRegion] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);


    const regions = {
        Dhaka: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Manikganj"],
        Chattogram: ["Chattogram", "Feni", "Cox’s Bazar", "Khagrachhari", "Noakhali"],
        Barisal: ["Barishal", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur"],
        Khulna: ["Khulna", "Jessore", "Satkhira", "Bagerhat", "Kushtia"],
        Rajshahi: ["Rajshahi", "Naogaon", "Natore", "Chapainawabganj", "Pabna"],
        Sylhet: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
        Rangpur: ["Rangpur", "Kurigram", "Lalmonirhat", "Dinajpur"],
        Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
    };


    const calculatePrice = (type, weight, sameRegion) => {
        let price = 0;
        if (type === "Document") {
            price = sameRegion ? 60 : 80;
        } else {
            if (weight <= 3) {
                price = sameRegion ? 110 : 150;
            } else {
                const extra = weight - 3;
                price = sameRegion
                    ? 110 + extra * 40
                    : 150 + extra * 40 + 40;
            }
        }
        return price;
    };

    const generateTrackingID = () => {
        const date = new Date();
        const datePart = date.toISOString().split("T")[0].replace(/-/g, "");
        const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
        return `PCL-${datePart}-${rand}`
    }


    const onSubmit = (data) => {
        const sameRegion = data.senderRegion === data.receiverRegion;
        const weight = parcelType === "Document" ? 0 : parseFloat(data.parcelWeight || 0);
        const total = calculatePrice(parcelType, weight, sameRegion);
        setTotalPrice(total);

        toast.success(`Total Price: ৳${total}`, { duration: 10000 });
        setShowConfirm(true);
    };


    const handlePlaceParcel = async () => {
        const formData = getValues();
        const parcelData = {
            ...formData,
            parcelType,
            totalPrice,
            created_by: user.email,
            payment_status: "unpaid",
            delivery_status: 'not_collected',
            created_date: new Date().toISOString(),
            tracking_id: generateTrackingID(),

        };

        // console.log("📦 Parcel Data:", parcelData);
        await axiosSecure.post('parcels', parcelData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success("Parcel placed successfully!");
                }
            }).catch((err) => {
                console.log(err);
            })

        reset();
        setShowConfirm(false);
        setTotalPrice(0);
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Add Parcel</h2>
            <hr className="mb-6" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Parcel Type */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Enter your parcel details</h3>
                    <div className="flex items-center gap-6 mb-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="parcelType"
                                checked={parcelType === "Document"}
                                onChange={() => setParcelType("Document")}
                                className="radio radio-success"
                            />
                            <span>Document</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="parcelType"
                                checked={parcelType === "Not-Document"}
                                onChange={() => setParcelType("Not-Document")}
                                className="radio"
                            />
                            <span>Not-Document</span>
                        </label>
                    </div>

                    {/* Parcel Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <input
                                {...register("parcelName", { required: "Parcel Name is required" })}
                                type="text"
                                placeholder="Parcel Name"
                                className="input input-bordered w-full"
                            />
                            {errors.parcelName && (
                                <p className="text-red-500 text-sm mt-1">{errors.parcelName.message}</p>
                            )}
                        </div>

                        <div>
                            <input
                                {...register("parcelWeight", {
                                    required:
                                        parcelType === "Not-Document"
                                            ? "Parcel Weight is required"
                                            : false,
                                })}
                                type="number"
                                step="0.1"
                                placeholder="Parcel Weight (KG)"
                                className="input input-bordered w-full"
                                disabled={parcelType === "Document"}
                            />
                            {errors.parcelWeight && (
                                <p className="text-red-500 text-sm mt-1">{errors.parcelWeight.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                <hr />

                {/* Sender & Receiver Section */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Sender */}
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Sender Details</h4>
                        <div className="grid gap-3">
                            <div>
                                <input
                                    {...register("senderName", { required: "Sender Name is required" })}
                                    type="text"
                                    placeholder="Sender Name"
                                    className="input input-bordered w-full"
                                />
                                {errors.senderName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.senderName.message}</p>
                                )}
                            </div>

                            <div>
                                <select
                                    {...register("senderRegion", { required: "Sender Region is required" })}
                                    onChange={(e) => setSenderRegion(e.target.value)}
                                    className="select select-bordered w-full"
                                >
                                    <option value="">Select Region</option>
                                    {Object.keys(regions).map((region) => (
                                        <option key={region}>{region}</option>
                                    ))}
                                </select>
                                {errors.senderRegion && (
                                    <p className="text-red-500 text-sm mt-1">{errors.senderRegion.message}</p>
                                )}
                            </div>

                            <div>
                                <select
                                    {...register("senderWarehouse", { required: "Sender Warehouse is required" })}
                                    className="select select-bordered w-full"
                                >
                                    <option value="">Select Warehouse</option>
                                    {senderRegion &&
                                        regions[senderRegion]?.map((w) => (
                                            <option key={w}>{w}</option>
                                        ))}
                                </select>
                                {errors.senderWarehouse && (
                                    <p className="text-red-500 text-sm mt-1">{errors.senderWarehouse.message}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    {...register("senderAddress", { required: "Sender Address is required" })}
                                    type="text"
                                    placeholder="Address"
                                    className="input input-bordered w-full"
                                />
                                {errors.senderAddress && (
                                    <p className="text-red-500 text-sm mt-1">{errors.senderAddress.message}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    {...register("senderContact", { required: "Sender Contact is required" })}
                                    type="text"
                                    placeholder="Sender Contact No"
                                    className="input input-bordered w-full"
                                />
                                {errors.senderContact && (
                                    <p className="text-red-500 text-sm mt-1">{errors.senderContact.message}</p>
                                )}
                            </div>

                            <textarea
                                {...register("pickupInstruction")}
                                placeholder="Pickup Instruction"
                                className="textarea textarea-bordered w-full"
                            />
                        </div>
                    </div>

                    {/* Receiver */}
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Receiver Details</h4>
                        <div className="grid gap-3">
                            <div>
                                <input
                                    {...register("receiverName", { required: "Receiver Name is required" })}
                                    type="text"
                                    placeholder="Receiver Name"
                                    className="input input-bordered w-full"
                                />
                                {errors.receiverName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.receiverName.message}</p>
                                )}
                            </div>

                            <div>
                                <select
                                    {...register("receiverRegion", { required: "Receiver Region is required" })}
                                    onChange={(e) => setReceiverRegion(e.target.value)}
                                    className="select select-bordered w-full"
                                >
                                    <option value="">Select Region</option>
                                    {Object.keys(regions).map((region) => (
                                        <option key={region}>{region}</option>
                                    ))}
                                </select>
                                {errors.receiverRegion && (
                                    <p className="text-red-500 text-sm mt-1">{errors.receiverRegion.message}</p>
                                )}
                            </div>

                            <div>
                                <select
                                    {...register("receiverWarehouse", { required: "Receiver Warehouse is required" })}
                                    className="select select-bordered w-full"
                                >
                                    <option value="">Select Warehouse</option>
                                    {receiverRegion &&
                                        regions[receiverRegion]?.map((w) => (
                                            <option key={w}>{w}</option>
                                        ))}
                                </select>
                                {errors.receiverWarehouse && (
                                    <p className="text-red-500 text-sm mt-1">{errors.receiverWarehouse.message}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    {...register("receiverAddress", { required: "Receiver Address is required" })}
                                    type="text"
                                    placeholder="Receiver Address"
                                    className="input input-bordered w-full"
                                />
                                {errors.receiverAddress && (
                                    <p className="text-red-500 text-sm mt-1">{errors.receiverAddress.message}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    {...register("receiverContact", { required: "Receiver Contact is required" })}
                                    type="text"
                                    placeholder="Receiver Contact No"
                                    className="input input-bordered w-full"
                                />
                                {errors.receiverContact && (
                                    <p className="text-red-500 text-sm mt-1">{errors.receiverContact.message}</p>
                                )}
                            </div>

                            <textarea
                                {...register("deliveryInstruction")}
                                placeholder="Delivery Instruction"
                                className="textarea textarea-bordered w-full"
                            />
                        </div>
                    </div>
                </div>

                <p className="text-sm text-gray-500">* PickUp Time 4pm - 7pm Approx.</p>

                {!showConfirm ? (
                    <button type="submit" className="btn btn-success text-white">
                        Confirm Booking
                    </button>
                ) : (
                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="btn btn-primary text-white"
                            onClick={handlePlaceParcel}
                        >
                            Place Parcel
                        </button>
                        <button
                            type="button"
                            className="btn btn-error text-white"
                            onClick={() => setShowConfirm(false)}
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default SendParcel;
