
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.css';
import { Autoplay } from 'swiper/modules';
import { slidesview } from './Data';

const SlidesPerView = () => {
  return (
    <div className='my-10'>
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        breakpoints={{

          768: {
            slidesPerView: 8,
          },
          425: {
            slidesPerView: 4,
          },

          0: {
            slidesPerView: 2,
          },
        }}

        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
        className="mySwiper w-full h-full"
      >

        <div>
          {slidesview.map((item) => (
            <SwiperSlide
            className='flex justify-center items-center'
            key={item.name}>
                  <div className=''>
                    <img
                    className='block w-full h-64 object-cover'
                      src={item.imageSrc}
                      alt={item.name}
                    />
                  </div>
            </SwiperSlide>
          ))}
        </div>

      </Swiper>
    </div>
  )
}

export default SlidesPerView
