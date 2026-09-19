import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa'; // Using react-icons for the star ratings

const testimonials = [
  {
    name: 'Mr. Rajesh Sharma',
    designation: 'Traveller',
    review: '“Morya Cab service was exceptional! The driver was punctual, the car was clean, and the journey was smooth. Highly recommended.”'
  },
  {
    name: 'Miss. Priya Verma',
    designation: 'Traveller',
    review: '“I had an amazing experience with Morya Cab. The booking process was easy, and the ride was very comfortable. Will use their services again!”'
  },
  {
    name: 'Mr. Amit Patil',
    designation: 'Traveller',
    review: '“Reliable and affordable cab service. The driver was polite, and the overall experience was great. Morya Cab is my go-to travel option now.”'
  }
];

const TestimonialSection = () => {
  return (
    <section className="testi-area overflow-hidden py-5" id="testi-sec">
      <div className="container-fluid p-0">
        <div className="title-area mb-20 text-center">
          <span className="sub-title">Testimonial</span>
          <h2 className="sec-title">What Clients Say About Us</h2>
        </div>
        <div className="slider-area">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              767: { slidesPerView: 2, centeredSlides: true },
              992: { slidesPerView: 2, centeredSlides: true },
              1200: { slidesPerView: 2, centeredSlides: true },
              1400: { slidesPerView: 3, centeredSlides: true },
            }}
            className="th-slider testiSlider1 has-shadow"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="media-body">
                        <h3 className="box-title">{testimonial.name}</h3>
                        <span className="testi-card_desig">{testimonial.designation}</span>
                      </div>
                    </div>
                    <div className="testi-card_review">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>
                  <p className="testi-card_text">{testimonial.review}</p>
                  <div className="testi-card-quote">
                    <img src="/img/icon/testi-quote.svg" alt="quote" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="shape-mockup d-none d-xl-block" data-bottom="-2%" data-right="0%">
        <img src="/img/shape/line2.png" alt="shape" />
      </div>
      <div className="shape-mockup movingX d-none d-xl-block" data-top="30%" data-left="5%">
        <img src="/img/shape/shape_7.png" alt="shape" />
      </div>
    </section>
  );
};

export default TestimonialSection;