import React from 'react';
import SwiperCore, { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { RxArrowTopRight } from 'react-icons/rx';
import { ServiceData } from '../constant';

// Import Swiper styles and initialize the modules
SwiperCore.use([FreeMode, Pagination]);

const ActiveSlider = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen bg-purple-900'>
      <Swiper 
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15
          }
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className='max-w-[90%] lg:max-w-[80%]'
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className='flex flex-col gap-6 relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px]'>
              <div className='absolute inset-0 bg-cover bg-center'
                style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"></div>
                <div className="relative flex flex-col gap-3">
                  {/* Assuming item.icon is a React component */}
                  {React.createElement(item.icon, { className: "text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" })}
                  <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                  <p className="lg:text-[18px]">{item.content}</p>
                </div>
                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
