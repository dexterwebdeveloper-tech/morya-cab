

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/autoplay';

const CategorySection = () => {
  return (
    <section
      className=" bg-top-center"
      style={{ backgroundImage: 'url(/img/bg/category_bg_1.png)' }}
    >
      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title">Choose Your preferred Ride!</span>
          <h2 className="sec-title">Lets Go With Us!</h2>
        </div>

        <Swiper
          modules={[Autoplay]} 
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 5 },
          }}
          className="th-slider has-shadow categorySlider"
        >
        

          <SwiperSlide>
            <div className="category-card single">
              <div className="box-img global-img Borderr">
                <img src="/images/our-fleet/3.jpg" alt="Hiking" />
              </div>
              <h3 className="box-title">
                <a href="">Swift Desire</a>
              </h3>
              <p className='fw-bold text-dark'>(4+1)</p>
              
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="category-card single">
              <div className="box-img global-img Borderr">
                <img src="/images/our-fleet/4.jpg" alt="Airbirds" />
              </div>
              <h3 className="box-title">
                <a href="#">Kia Carens</a>
              </h3>
              <p className='fw-bold text-dark'>(6+1)</p>
              
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="category-card single">
              <div className="box-img global-img Borderr">
                <img src="/images/our-fleet/5.jpg" alt="Wildlife" />
              </div>
              <h3 className="box-title">
                <a href="#">Ertiga</a>
              </h3>
              <p className='fw-bold text-dark'>(6+1)</p>
              
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="category-card single">
              <div className="box-img global-img Borderr">
                <img src="/images/our-fleet/7.jpg" alt="Walking" />
              </div>
              <h3 className="box-title">
                <a href="#">Innova Crysta</a>
              </h3>
              <p className='fw-bold text-dark'>(6+1)</p>
              
            </div>
          </SwiperSlide>

         
        </Swiper>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default CategorySection;