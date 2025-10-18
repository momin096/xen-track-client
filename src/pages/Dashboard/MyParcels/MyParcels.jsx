import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ParcelTable from "./ParcelTable";
import Loading from "../../Shared/Loading";
import Swal from 'sweetalert2'

const MyParcels = () => {
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure()
    const { data: parcels, isLoading, refetch } = useQuery({
        queryKey: ['my-parcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`parcels?email=${user?.email}`)
            return res.data
        }
    })

    if (isLoading) return <Loading />

    const handleView = (parcel) => {
        console.log("View details:", parcel);
    };

    const handlePay = (parcel) => {
        console.log("Pay clicked:", parcel);
    };

    const handleDelete = (id) => {
        console.log("Delete clicked:", id);
        Swal.fire({
            title: "Are you sure?",
            theme: 'dark',
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`parcels/${id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        theme: 'dark',
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }

            }
        });
    };



    return (
        <div>
            <ParcelTable
                parcels={parcels}
                onView={handleView}
                onPay={handlePay}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default MyParcels;