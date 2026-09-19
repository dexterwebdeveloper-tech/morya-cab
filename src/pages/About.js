import React from 'react';
import TestimonialAbout from './TestimonialAbout';
import { Helmet } from 'react-helmet';
import Visionn from './Visionn';
const About = () => {
  return (

  <>
   <Helmet>
        <title>Pune to Mumbai Taxi | Reliable and Affordable Taxi Service | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your reliable Pune to Mumbai taxi service with Morya Cabs. We offer one-way, round trip, luxury taxis, and shared cabs for your comfortable journey."
        />
        <meta name="keywords" content="Pune to Mumbai taxi, Pune to Mumbai cab, Pune to Mumbai taxi booking, Pune to Mumbai one-way taxi, Pune to Mumbai round trip, Pune to Mumbai luxury taxi, Pune to Mumbai airport taxi" />
        <meta property="og:title" content="Pune to Mumbai Taxi | Morya Cabs" />
        <meta property="og:description" content="Book affordable and reliable Pune to Mumbai taxi service with Morya Cabs. Choose from one-way, round trip, and luxury taxis for a comfortable ride." />
        <meta property="og:url" content="https://moryacab.com/pune-to-mumbai-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-mumbai-taxi.jpg" />
      </Helmet>

  <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(/img/bg/breadcumb-bg.jpg)' }}>
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">About Us</h1>
          <ul className="breadcumb-menu">
            <li><a href="/">Home</a></li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>

    
    <div className="about-area position-relative overflow-hidden " id="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="img-box3">
              <div className="img1">
                <img src="/images/our-fleet/4.jpg" alt="About" />
              </div>
              {/* <div className="img2">
                <img src="/images/our-fleet/6.jpg" alt="About" />
              </div> */}
              <div className=" movingX">
                <img src="/images/our-fleet/3.jpg" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="ps-xl-4">
              <div className="title-area mb-20">
                <span className="sub-title style1">Welcome To Morya Cab</span>
                <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                We Provide Trusted Cab Services
                </h2>
              </div>
              <p className="pe-xl-5">
              Morya Cab is dedicated to providing seamless, reliable, and comfortable travel experiences, ensuring that every journey is as enjoyable as the destination. Our fleet of well-maintained vehicles, driven by experienced professionals, guarantees a safe and smooth ride, whether you're traveling for business, leisure, or a pilgrimage. At Morya Cab, we prioritize customer satisfaction, offering punctual service, transparent pricing, and personalized travel solutions tailored to your needs.</p>
              <p className="mb-30 pe-xl-5">
              With a wide range of cab services, including outstation trips, airport transfers, and local sightseeing, we cater to solo travelers, families, and corporate groups alike. Our commitment to excellence ensures that every ride with Morya Cab is not just a trip but an experience marked by comfort and convenience. Whether you're planning a weekend getaway, a spiritual journey, or a long-distance road trip, trust Morya Cab to get you there with ease. 🚖✨








              </p>
              <div className="about-item-wrap">
                <div className="about-item style2">
                  <div className="about-item_img">
                    <img src="/img/icon/about_1_1.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Exclusive Trip</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the majority.
                    </p>
                  </div>
                </div>
                <div className="about-item style2">
                  <div className="about-item_img">
                    <img src="/img/icon/about_1_2.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Safety First Always</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the majority.
                    </p>
                  </div>
                </div>
                <div className="about-item style2">
                  <div className="about-item_img">
                    <img src="/img/icon/about_1_3.svg" alt="" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Professional Guide</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the majority.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-35">
                <a href="/contact-us" className="th-btn style3 th-icon">
                  Contact With Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-mockup movingX d-none d-xxl-block" style={{ top: "0%", left: "-18%" }}>
          <img src="/img/shape/shape_2_1.png" alt="shape" />
        </div>
        <div className="shape-mockup jump d-none d-xxl-block" style={{ top: "28%", right: "-15%" }}>
          <img src="/img/shape/shape_2_2.png" alt="shape" />
        </div>
        <div className="shape-mockup spin d-none d-xxl-block" style={{ bottom: "18%", left: "-112%" }}>
          <img src="/img/shape/shape_2_3.png" alt="shape" />
        </div>
        <div className="shape-mockup movixgX d-none d-xxl-block" style={{ bottom: "18%", right: "-12%" }}>
          <img src="/img/shape/shape_2_4.png" alt="shape" />
        </div>
      </div>
    </div>
<Visionn/>
    <TestimonialAbout/>
  
  </>
  );
};

export default About;
