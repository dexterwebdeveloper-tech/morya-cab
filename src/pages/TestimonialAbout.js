import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Rahul ',
    role: 'Traveller',
    review:
      '“A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live. The commitment to eco-friendly living.”',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Miss. Priya Desai',
    role: 'Traveller',
    review:
      '“The eco-friendly materials like reclaimed wood and bamboo flooring make every space feel so inviting and warm. I am truly amazed by how well the balance between luxury and sustainability is achieved.”',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 3,
    name: 'Mr. Rahul Verma',
    role: 'Traveller',
    review:
      '“The design is breathtaking! The eco-friendly concept is perfectly integrated, and I feel connected to nature everywhere I look. I can’t wait to return and enjoy this sustainable paradise again.”',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 4,
    name: 'Mr. Amit Sharma',
    role: 'Morya Cab Driver',
    review:
      '“I have been driving for Morya Cab for over 5 years, and it’s been a great experience. The company values eco-friendly solutions, and it feels great to provide such services to our passengers.”',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 5,
    name: 'Miss. Anjali Patel',
    role: 'Morya Cab Passenger',
    review:
      '“I always prefer Morya Cab because of their commitment to sustainability. Their vehicles are eco-friendly and the rides are always comfortable and safe. I feel proud to support such an initiative.”',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
];



const TestimonialAbout = () => {
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
            breakpoints={{
              0: { slidesPerView: 1 },
              767: { slidesPerView: 2, centeredSlides: true },
              992: { slidesPerView: 2, centeredSlides: true },
              1200: { slidesPerView: 2, centeredSlides: true },
              1400: { slidesPerView: 3, centeredSlides: true },
            }}
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
                  {/* <div className="testi-card-quote">
                    <img src={testimonial.quoteIcon} alt="quote" />
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAbout;
