import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
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
        <div>

            
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
                <div className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto  ">
                    <div className="bg-[#313135] text-white px-8 pb-6  rounded-2xl shadow-lg">

                        {/* <!-- Card header --> */}
                        <div className="text-center mb-6">
                            <div className="mb-2">
                                <FontAwesomeIcon className="-mt-8 inline-flex w-20 h-20" icon={faAddressCard} />

                            </div>
                            <h1 className="text-xl leading-snug font-semibold mb-2 font-[Unbounded]">Pay With Card</h1>
                            <div className="text-sm">
                                Easy and Secure Payment end to end encrypted
                            </div>
                        </div>


                        {/* <!-- Card form --> */}
                        <div>
                            <div className="space-y-4">
                                {/* <!-- Card Number --> */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Card Number <span className="text-red-500">*</span></label>
                                    <input id="card-nr"
                                        className="block bg-transparent outline-none border w-full rounded-xl px-3.5 py-2 shadow-sm placeholder:text-white sm:text-sm/6"
                                        type="text" placeholder="1234 1234 1234 1234" />
                                </div>
                                {/* <!-- Expiry and CVC --> */}
                                <div className="flex space-x-4">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium mb-1">Expiry Date <span className="text-red-500">*</span></label>
                                        <input id="card-expiry"
                                            className="block bg-transparent outline-none border w-full rounded-xl px-3.5 py-2 shadow-sm placeholder:text-white sm:text-sm/6"
                                            type="text" placeholder="MM/YY" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium mb-1">CVC <span className="text-red-500">*</span></label>
                                        <input id="card-cvc"
                                            className="block bg-transparent outline-none border w-full rounded-xl px-3.5 py-2 shadow-sm placeholder:text-white sm:text-sm/6"
                                            type="text" placeholder="CVC" />
                                    </div>
                                </div>
                                {/* <!-- Name on Card --> */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Name on Card <span className="text-red-500">*</span></label>
                                    <input id="card-name"
                                        className="block bg-transparent outline-none border w-full rounded-xl px-3.5 py-2 shadow-sm placeholder:text-white sm:text-sm/6"
                                        type="text" placeholder="John Doe" />
                                </div>
                                {/* <!-- Email --> */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
                                    <input id="card-email"
                                        className="block bg-transparent outline-none border w-full rounded-xl px-3.5 py-2 shadow-sm placeholder:text-white sm:text-sm/6"
                                        type="email" placeholder="john@company.com" />
                                </div>
                            </div>
                            {/* <!-- Form footer --> */}
                            <div className="mt-6">
                                <div className="mb-4">
                                    <button className="btn font-medium text-sm inline-flex items-center justify-center px-3 py-2 rounded-xl leading-5 shadow-sm transition duration-150 ease-in-out w-full">
                                        Pay Now
                                    </button>
                                </div>
                                <div className="text-xs text-gray-500 italic text-center">You be charged $253, including $48 for VAT in Italy</div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>


        </div>
    )
}

export default PaymentRoom