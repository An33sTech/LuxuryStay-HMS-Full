import { useEffect, useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';

const BookRoom = () => {
    const [agreed, setAgreed] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        country: '',
        city: ''
    });
    const [roomPrice, setRoomPrice] = useState("");
    const { roomId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!roomId) {
            alert('Room ID not found!');
            navigate('/');
        }
        const fetchRoomDetails = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/rooms/${roomId}`, {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch room details.");
                }

                const result = await response.json();
                setRoomPrice(result.price);
            } catch (error) {
                alert(error.message);
            }
        };
        fetchRoomDetails();
    }, [roomId, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const checkInFormData = JSON.parse(localStorage.getItem('checkInFormData'));
        if (!checkInFormData) {
            alert('Check-in form data is missing!');
            return;
        }
        
        const payload = {
            guest: formData,
            room: roomId,
            checkIn: checkInFormData.start,
            checkOut: checkInFormData.end,
            services: [],
            totalAmount: roomPrice
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/reservations/reserve-room`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: localStorage.getItem('token')
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                const reservationId = data.reservation._id;
                navigate(`/paymentroom/${reservationId}`);
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Failed to reserve the room');
            }
        } catch (error) {
            console.error(error);
            alert('Error reserving the room.');
        }
    };

    return (
        <div className="isolate px-6 py-24 sm:py-32 lg:px-8 ">
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
            <div className='bg-[#313135] max-w-4xl mx-auto rounded-3xl shadow-2xl'>

                <div className='bg-opacity-90 bg-cyan-800 rounded-tl-3xl rounded-tr-3xl py-5 px-8'>
                    <div className="flex justify-between items-center">

                        <div>
                            <Link to={"/"}>
                                <button className='border rounded-full px-5 py-2'>
                                    <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
                                    Back to Home
                                </button>
                            </Link>
                        </div>

                        <div>
                            <img src={logo} alt="" className='h-20' />
                        </div>

                    </div>
                    <h1 className='text-2xl font-[Unbounded] font-semibold tracking-wider'>CheckOut Your Room For Luxurious Stay</h1>
                </div>

                <div className='p-8'>
                    <h2 className="font-[Unbounded] text-2xl font-semibold">Contact Information</h2>
                    <form className="mt-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                            <div>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder='First Name'
                                    className="block bg-transparent outline-none border w-full rounded-xl px-3.5 py-2 shadow-sm placeholder:text-white sm:text-sm/6"
                                />
                            </div>

                            <div>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder='Last Name'
                                    className="block bg-transparent outline-none border w-full rounded-xl px-3.5 py-2 shadow-sm placeholder:text-white sm:text-sm/6"
                                />
                            </div>

                            <div>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type='number'
                                    onChange={handleChange}
                                    autoComplete="phone"
                                    placeholder='Phone Number'
                                    className="block bg-transparent outline-none border w-full rounded-xl px-3.5 py-2 shadow-sm placeholder:text-white sm:text-sm/6"
                                />
                            </div>

                            <div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                    autoComplete="email"
                                    placeholder='Email Address'
                                    className="block bg-transparent outline-none border w-full rounded-xl px-3.5 py-2 shadow-sm placeholder:text-white sm:text-sm/6"
                                />
                            </div>

                            <div>
                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    onChange={handleChange}
                                    autoComplete="country"
                                    placeholder='Country'
                                    className="block bg-transparent outline-none border w-full rounded-xl px-3.5 py-2 shadow-sm placeholder:text-white sm:text-sm/6"
                                />
                            </div>
                            <div>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    onChange={handleChange}
                                    autoComplete="city"
                                    placeholder='City'
                                    className="block bg-transparent outline-none border w-full rounded-xl px-3.5 py-2 shadow-sm placeholder:text-white sm:text-sm/6"
                                />
                            </div>



                        </div>

                        <div className='pt-5'>
                            <h1 className='font-[Unbounded] text-2xl font-semibold'>Total Price</h1>
                            <p className='py-4 text-lg'>PKR {roomPrice}</p>
                        </div>
                        <Field className="flex gap-x-4 sm:col-span-2">
                            <div className="flex h-6 items-center">
                                <Switch
                                    checked={agreed}
                                    onChange={setAgreed}
                                    className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 data-[checked]:bg-cyan-500"
                                >
                                    <span className="sr-only">Agree to policies</span>
                                    <span
                                        aria-hidden="true"
                                        className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                    />
                                </Switch>
                            </div>
                            <Label className="text-sm/6 ">
                                By continuing, you confirm that you agree to our
                                <a href="#" className="underline text-cyan-500 px-1">
                                    Terms and Conditions
                                </a>
                                and
                                <a href="#" className="underline text-cyan-500 px-1">
                                    Privacy Policy
                                </a>
                                .
                            </Label>
                        </Field>
                        <div className="bg-slate-700 bg-opacity-90 rounded-lg mt-10 p-5">
                            <p>
                                Click Checkout Now to complete your payment.
                                Your booking will be processed and confirmed
                                once payment is successful.
                            </p>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="btn block w-full rounded-xl px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                CheckOut Now
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default BookRoom

