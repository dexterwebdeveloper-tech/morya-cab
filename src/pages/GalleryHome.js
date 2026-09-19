import React from 'react';

const Gallery = () => {
  return (
    <div className="gallery-area d-none d-lg-block">
      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title">Make Your Tour More Pleasure</span>
          <h2 className="sec-title">Recent Gallery</h2>
        </div>
        <div className="row gy-10 gx-10 justify-content-center align-items-center">
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card Borderr">
              <img
                src="/images/our-fleet/5.jpg"
                alt="Interior view of our fleet vehicle"
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-2">
            <div className="gallery-card Borderr">
              <img
                src="/images/our-fleet/3.jpg"
                alt="Side view of a luxury vehicle"
              />
            </div>
            <div className="gallery-card Borderr">
              <img
                src="/images/our-fleet/1.jpg"
                alt="Front view of our fleet car"
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-2">
            <div className="gallery-card box-img global-img">
              <img
                src="/images/cab4.jpg"
                alt="Cab vehicle available for tour"
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-2">
            <div className="gallery-card Borderr">
              <img
                src="/images/our-fleet/4.jpg"
                alt="Modern vehicle in our fleet"
              />
            </div>
            <div className="gallery-card Borderr">
              <img
                src="/images/our-fleet/8.jpg"
                alt="Fleet car parked outdoors"
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-2">
            <div className="gallery-card Borderr">
              <img
                src="https://supremecar.in/wp-content/uploads/2024/12/Kia-Syros-White-Color.png"
                alt="White Kia Syros car"
              />
            </div>
          </div>
        </div>

        <div
          className="shape-mockup d-none d-xl-block"
          style={{ top: '-25%', left: '0%' }}
        >
          <img
            src="/img/shape/line.png"
            alt="Decorative line shape"
          />
        </div>

        <div
          className="shape-mockup movingX d-none d-xl-block"
          style={{ top: '30%', left: '-3%' }}
        >
          <img
            className="gmovingX"
            src="/img/shape/shape_4.png"
            alt="Decorative floating shape"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
