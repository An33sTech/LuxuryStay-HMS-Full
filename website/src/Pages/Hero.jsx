import React from 'react'
import background from '../../public/assets/bg.mp4'
import Slider from '../Components/Slider'
import CheckInForm from '../Booking/CheckInForm'

const Hero = () => {
    return (
        <div className="relative">
            
            <video
                autoPlay
                loop
                muted
                className="w-full h-[80vh] object-cover"
            >
                <source
                    src={background}
                    type="video/mp4"
                />
            </video>

            {/* opacity */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Text */}
            <div className="absolute md:top-[20%] sm:top-20 top-10 left-0 right-0 md:px-20 px-4 space-y-5">
                <h1 className='text-4xl max-w-xl mx-auto text-white text-center font-bold tracking-wider font-[Unbounded]'>
                Book Your Luxury Stay, Experience Ultimate Comfort!
                </h1>
                <p className='text-white font-extralight text-center md:text-base text-sm leading-tight'>
                Welcome to Luxury Stays Hotel, where elegance meets comfort in an unforgettable setting.
                </p>
            </div>

            {/* checkinform */}
            <div className="absolute md:top-1/2 left-0 right-0 transform -translate-y-1/2">
                <CheckInForm />
            </div>
            
        </div>
    )
}

export default Hero
