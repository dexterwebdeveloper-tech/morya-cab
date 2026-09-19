import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Modify the component to accept `testimonialData` as a prop
const TestimonialKeyword = ({ testimonialData }) => {
  return (
    <section className="testi-area overflow-hidden space-bottom" id="testi-sec">
      <div className="container-fluid p-0">
        <div className="title-area mb-20 text-center">
          <span className="sub-title">Testimonial</span>
          <h2 className="sec-title">What Clients Say About Us</h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1} // Show only one slide at a time
            className="th-slider testiSlider1 has-shadow"
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testi-card">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="media-body">
                        <h3 className="box-title">{testimonial.name}</h3>
                        <span className="testi-card_desig">{testimonial.role}</span>
                      </div>
                    </div>
                    <div className="testi-card_review">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <p className="testi-card_text">{testimonial.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialKeyword;
