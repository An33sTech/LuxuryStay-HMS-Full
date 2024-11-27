import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.css';
import { Autoplay } from 'swiper/modules';
import { swiperarray } from '../Components/Data';

const Slider = () => {
  return (
    <div className='md:my-10 my-52'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{

          768: {
            slidesPerView: 4,
          },
          425: {
            slidesPerView: 2,
          },

          0: {
            slidesPerView: 1,
          },
        }}

        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
        className="mySwiper"
      >

        <div>
          {swiperarray.slides.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="border backdrop-blur-sm bg-white bg-opacity-10 text-gray-900 rounded-md w-full p-2">

                <div className="flex gap-5">
                  <div className=''>
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                    />

                  </div>
                  <div className=''>
                    <h1 className='text-left pb-2 font-bold capitalize leading-none text-sm text-white'>{item.name}</h1>
                    <p className='text-left text-sm leading-none text-white font-light '>
                      Indulge in exquisite luxury and comfort at our premier hotel retreat.
                    </p>
                  </div>

                </div>
              </div>

            </SwiperSlide>
          ))}
        </div>

      </Swiper>
    </div>
  )
}

export default Slider