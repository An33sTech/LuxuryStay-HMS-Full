import { faDownload, faReceipt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const PaymentRoom = () => {
    const { reservationId } = useParams();
    const navigate = useNavigate();
    const [reservationDetails, setReservationDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!reservationId) {
            alert('Reservation ID not found!');
            navigate('/');
            return;
        }
        const fetchReservationDetails = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/reservations/${reservationId}`, {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch reservation details.");
                }

                const result = await response.json();
                setReservationDetails(result);
            } catch (error) {
                alert(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReservationDetails();
    }, [reservationId, navigate]);
    if (loading) {
        return <p>Loading reservation details...</p>;
    }
    return (
        <>
            <section className="isolate py-20">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-500 to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    />
                </div>


                {/* <!-- Card body --> */}
                <div className="relative px-8 pb-8 max-w-2xl mx-auto  ">
                    <div className="bg-[#313135] text-white px-8 pb-6  rounded-2xl shadow-lg">

                        {/* <!-- Card header --> */}
                        <div className="text-center mb-6">
                            <div className="mb-2">
                                <FontAwesomeIcon className="-mt-8 inline-flex w-20 h-20" icon={faReceipt} />

                            </div>
                            <h1 className="text-4xl leading-snug font-semibold mb-2 font-[Unbounded]">Booking Details</h1>
                        </div>


                        {/* <!-- Card form --> */}

                        <div className='py-6'>
                            <h2 className="text-2xl font-bold">Hey {reservationDetails.reservation.guest.profile.name},</h2>
                            <p className="text-sm font-extralight mt-2">
                                Your room ({reservationDetails.reservation.room.roomName + ' - ' + reservationDetails.reservation.room.roomNumber}) has been successfully booked! Enjoy a luxurious stay at our hotel. Please bring this
                                invoice receipt with you upon arrival for a smooth check-in experience. We look forward to welcoming you!
                            </p>

                            <div className="border-t border-gray-200 pt-4 mt-4">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-gray-500 text-sm">Payment No.</p>
                                        <strong>{reservationDetails.billing._id}</strong>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-500 text-sm">Payment Date</p>
                                        <strong>{new Date(reservationDetails.billing.issuedAt).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                        })}</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 mt-4 py-4">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-gray-500 text-sm">Client</p>
                                        <strong>{reservationDetails.reservation.guest.profile.name}</strong>
                                        <p className="text-sm">
                                            {/* 989 5th Avenue, New York, 55832 */}
                                            <br />
                                            <a href="mailto:john@email.com" className="text-[#CDB9FF]">
                                                {reservationDetails.reservation.guest.profile.contact.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <table className="w-full border-b border-gray-200 mt-3">
                                <thead>
                                    <tr className="text-left text-gray-500 text-sm uppercase">
                                        <th className="px-0 py-2">Room Name</th>
                                        <th className="px-0 py-2">Persons</th>
                                        <th className="px-0 py-2">Check-in</th>
                                        <th className="px-0 py-2">Check-out</th>
                                        <th className="px-0 py-2 text-right">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-0 py-2">{reservationDetails.reservation.room.roomName}</td>
                                        <td className="px-0 py-2">{reservationDetails.reservation.room.persons}</td>
                                        <td className="px-0 py-2">{new Date(reservationDetails.reservation.checkIn).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                        })}</td>
                                        <td className="px-0 py-2">{new Date(reservationDetails.reservation.checkOut).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                        })}</td>
                                        <td className="px-0 py-2 text-right">{reservationDetails.reservation.totalAmount}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="mt-5">
                                <div className="flex justify-end mt-3">
                                    <h5 className="mr-3 text-lg font-bold">Total:</h5>
                                    <h5 className="text-lg font-bold text-cyan-500">{reservationDetails.reservation.totalAmount}</h5>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Form footer --> */}
                        <div className="mt-6">
                            <div className="mb-4">
                                <button
                                    className="btn font-medium text-sm inline-flex items-center justify-center px-3 py-2 rounded-xl leading-5 shadow-sm transition duration-150 ease-in-out w-full">
                                    <FontAwesomeIcon icon={faDownload} className='mr-2' />
                                    Download
                                </button>
                            </div>
                            <div className="text-xs text-gray-500 italic text-center">Cash payment will be accepted upon arrival.</div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default PaymentRoom