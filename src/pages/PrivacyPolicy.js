import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/privacy-policy.css';

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
              <title>Pune to Mumbai cab | Morya Cab | Call: +91 9371304510</title>
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
        <h1 className="breadcumb-title">Privacy Policy</h1>
        <ul className="breadcumb-menu">
          <li><a href="/">Home</a></li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  </div>

      <section id="about" className="jarallax text-light">
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className='text-white'>Privacy Policy</h1>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-policy">
        <div className="container px-0">
          <div className="row g-0">
            <div className="col-12 col-md-7">
              <h3 className="title">Privacy Policy</h3>

              <p>
                At Morya Cab, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines the data we collect, how we use it, and how we protect it.
              </p>

              <div className="section">
                <p className="highlight darkcolor">Information We Collect:</p>
                <p className="highlight darkcolor">1. Personal Information:</p>
                <p>
                  We collect personal details such as name, phone number, email, and payment details to provide seamless cab services.
                </p>

                <p className="highlight darkcolor">2. Usage Data:</p>
                <p>
                  We collect browsing data like IP address, device information, and interaction patterns for website improvement.
                </p>

                <p className="highlight darkcolor">3. Location Data:</p>
                <p>
                  With your consent, we collect location data for accurate ride services and better user experience.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">How We Use Your Information:</p>
                <p className="highlight darkcolor">1. Service Delivery:</p>
                <p>
                  We use your details for booking confirmations, ride tracking, and payment processing.
                </p>

                <p className="highlight darkcolor">2. User Experience Enhancement:</p>
                <p>
                  Data helps us improve our platform, solve issues, and introduce better features.
                </p>

                <p className="highlight darkcolor">3. Communication:</p>
                <p>
                  We send booking details, ride updates, and service notifications via SMS and email.
                </p>

                <p className="highlight darkcolor">4. Marketing & Promotions:</p>
                <p>
                  With your permission, we send special offers, discounts, and service updates.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">Information Sharing:</p>
                <p className="highlight darkcolor">1. Trusted Partners:</p>
                <p>
                  We share relevant data with trusted partners for payment processing and customer support.
                </p>

                <p className="highlight darkcolor">2. Legal Compliance:</p>
                <p>
                  We may disclose information when required by law or to protect our rights and safety.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">Data Security:</p>
                <p>
                  We implement security measures to protect your data but cannot guarantee absolute security against cyber threats.
                </p>

                <p className="highlight darkcolor">Your Rights:</p>
                <p>
                  You can request access, updates, or deletion of your personal data. Opt-out options for marketing communications are available.
                </p>

                <p className="highlight darkcolor">Policy Updates:</p>
                <p>
                  We may update our privacy policy periodically. We encourage you to review it regularly.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>For any privacy concerns, reach out to us:</p>
            <ul>
              <li><b>Phone:</b> <a href="tel:+919371304510">+91 9371304510</a></li>
              <li><b>Email:</b> <a href="mailto:booking@moryacab.com">booking@moryacab.com</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
