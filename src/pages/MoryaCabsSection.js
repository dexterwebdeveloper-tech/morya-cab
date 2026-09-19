import React from "react";

const MoryaCabsSection = () => {
  return (
    <section className="morya-cabs-section">
      <div className="container">
      <h2 className="colorr fw-bold">Welcome to Morya Cabs - Your Trusted Travel Partner</h2>
        <div className="morya-cabs-content">
          <div className="morya-cabs-image">
            <img src="/images/crysta.webp" alt="Morya Cabs" />
          </div>
          <div className="morya-cabs-text">
          
            <p>
              Experience the best cab services with Morya Cabs! We offer
              comfortable, affordable, and reliable transportation solutions
              tailored to your travel needs. Whether it's an airport transfer,
              a business trip, or an outstation adventure, we've got you
              covered.
            </p>
            <ul className="morya-cabs-services">
              <li>
                <span>✔</span> <strong className="darkcolor">Airport Transfers: </strong> &nbsp;Hassle-free rides to and from the airport.
              </li>
              <li>
                <span>✔</span> <strong className="darkcolor" >City Tours: </strong> &nbsp;Explore the city's top attractions with ease.
              </li>
              <li>
                <span>✔</span> <strong className="darkcolor" >Corporate Travel: </strong>  &nbsp;Reliable transport solutions for businesses.
              </li>
              <li>
                <span>✔</span> <strong className="darkcolor" >Outstation Trips: </strong> Comfortable and safe long-distance journeys.
              </li>
            </ul>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoryaCabsSection;
