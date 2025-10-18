import React from "react";
import { FaEye, FaTrashAlt, FaMoneyBill } from "react-icons/fa";

const ParcelTable = ({ parcels, onView, onPay, onDelete }) => {
    return (
        <div className="overflow-x-auto bg-base-100 shadow-lg rounded-lg">
            <table className="table w-full">
                {/* Table Head */}
                <thead className="bg-base-200 text-base font-semibold">
                    <tr>
                        <th>#</th>
                        <th>Parcel Type</th>
                        <th>Parcel Name</th>
                        <th>Date & Time</th>
                        <th>Price (৳)</th>
                        <th>Payment Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {parcels?.length > 0 ? (
                        parcels.map((parcel, index) => {
                            const createdAt = new Date(parcel.created_date);
                            const date = createdAt.toLocaleDateString("en-GB");
                            const time = createdAt.toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                            });

                            return (
                                <tr key={parcel._id} className="hover">
                                    <td>{index + 1}</td>

                                    {/* Parcel Type */}
                                    <td >
                                        <span
                                            className={` ${parcel.parcelType === "Document"
                                                ? "badge-info"
                                                : "badge-secondary"
                                                } badge-outline`}
                                        >
                                            {parcel.parcelType}
                                        </span>
                                    </td>

                                    {/* title */}
                                    <td>
                                        <span className="font-semibold text-gray-100">
                                            {parcel.parcelName || 'N/A'}
                                        </span>
                                    </td>

                                    {/* Date & Time */}
                                    <td>
                                        <div className="flex flex-col">
                                            <span>{date}</span>
                                            <span className="text-xs text-gray-500">{time}</span>
                                        </div>
                                    </td>

                                    {/* Price */}
                                    <td>
                                        <span className="font-semibold text-gray-100">
                                            {parcel.totalPrice || 0}
                                        </span>
                                    </td>

                                    {/* Payment Status */}
                                    <td>
                                        <span
                                            className={`badge ${parcel.payment_status === "paid"
                                                ? "badge-success"
                                                : "badge-error"
                                                } badge-outline`}
                                        >
                                            {parcel.payment_status}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="flex items-center gap-3">
                                        <button
                                            onClick={() => onView(parcel)}
                                            className="btn btn-xs btn-info btn-outline flex items-center gap-1"
                                        >
                                            <FaEye /> View
                                        </button>

                                        {parcel.payment_status === "unpaid" && (
                                            <button
                                                onClick={() => onPay(parcel)}
                                                className="btn btn-xs btn-success btn-outline flex items-center gap-1"
                                            >
                                                <FaMoneyBill /> Pay
                                            </button>
                                        )}

                                        <button
                                            onClick={() => onDelete(parcel._id)}
                                            className="btn btn-xs btn-error btn-outline flex items-center gap-1"
                                        >
                                            <FaTrashAlt /> Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center py-4 text-gray-500">
                                No parcels found 😔
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ParcelTable;
