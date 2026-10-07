import React from 'react';
import { Helmet } from 'react-helmet';
const ContactInfo = () => {
  return (



<>

<Helmet>
        <title>Pune to Mumbai cab | Call: +91 9371304510</title>
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
                        <h1 className="breadcumb-title">Contact Us</h1>
                    </div>
                </div>
            </div>


    
    <div className="space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Get In Touch</span>
          <h2 className="sec-title">Our Contact Information</h2>
        </div>
        <div className="row gy-4 justify-content-center">
        <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid">
              <div className="about-contact-icon">
                <img src="/img/icon/call.svg" alt="Phone Icon" />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title colorr">Phone Number</h6>
                <p className="about-contact-details-text fw-bold">
                  <a href="tel:+919371304510">+91 9371304510</a>
                </p> 
                <p className="about-contact-details-text fw-bold">
                  <a href="tel:+918379975860">+91 8379975860</a>
                </p>
              </div>
            </div>
          </div>



          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid">
              <div className="about-contact-icon">
                <img src="/img/icon/mail.svg" alt="Mail Icon" />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title colorr">Email Address</h6>
                <p className="about-contact-details-text fw-bold">
                  <a href="mailto:booking@moryacab.com">booking@moryacab.com</a>
                </p>
               
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid style2">
              <div className="about-contact-icon">
                <img src="/img/icon/location-dot2.svg" alt="Location Icon" />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title text-center colorr">Our Address</h6>
                <h6 className="fw-bold text-center">Morya Cab </h6>
                <p className="about-contact-details-text">Gat no. 763 Jai Ganesh Niwas Flat no. 1 Lokhande Wasti Chimbali Pune, Maharashtra</p>
                <p className="about-contact-details-text"> 412105</p>
              </div>
            </div>
          </div>
  
         
        </div>
      </div>
    </div>


    <div className="container-fluid">
        <div className="contact-map style2">
   
<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d382387.639051183!2d73.900641!3d18.673912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c628ae2ec5f9%3A0x8a544100d62851fe!2sMWF2%2BH76%2C%20Alandi%2C%20Pune%2C%20Maharashtra%20412105%2C%20India!5e1!3m2!1sen!2sus!4v1739862714211!5m2!1sen!2sus"
  width="600"
  height="450"
  allowFullScreen=""
  loading="lazy"
  title="Google Map showing location in Alandi, Pune"
/>

        </div>
      </div>
</>
  );
};

export default ContactInfo;
