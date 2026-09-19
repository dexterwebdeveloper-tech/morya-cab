import React from 'react';

const Counter = () => {
  return (
    <div className="counter-area py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xl-3 counter-card-wrap">
            <div className="counter-card">
              <div className="counter-shape"><span></span></div>
              <div className="media-body">
                <h3 className="box-number"><span className="counter-number">12</span>+</h3>
                <h6 className="counter-title">Years Experience</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 counter-card-wrap">
            <div className="counter-card">
              <div className="counter-shape"><span></span></div>
              <div className="media-body">
                <h3 className="box-number"><span className="counter-number">1000</span>+</h3>
                <h6 className="counter-title">Happy Clients</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 counter-card-wrap">
            <div className="counter-card">
              <div className="counter-shape"><span></span></div>
              <div className="media-body">
                <h3 className="box-number"><span className="counter-number">20</span>+</h3>
                <h6 className="counter-title"> Vehicle Fleet </h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 counter-card-wrap">
            <div className="counter-card">
              <div className="counter-shape"><span></span></div>
              <div className="media-body">
                <h3 className="box-number"><span className="counter-number">1012</span>+</h3>
                <h6 className="counter-title"> Complate Trips</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Mockups */}
        <div className="shape-mockup shape1 d-none d-xl-block" style={{ top: '30%', left: '-15%' }}>
          <img src="/img/shape/shape_1.png" alt="shape" />
        </div>
        <div className="shape-mockup shape2 d-none d-xl-block" style={{ top: '45%', left: '-13%' }}>
          <img src="/img/shape/shape_2.png" alt="shape" />
        </div>
        <div className="shape-mockup shape3 d-none d-xl-block" style={{ top: '32%', left: '-7%' }}>
          <img src="/img/shape/shape_3.png" alt="shape" />
        </div>
        <div className="shape-mockup d-none d-xl-block" style={{ bottom: '-24%', left: '-15%' }}>
          <img src="/img/shape/shape_6.png" alt="shape" />
        </div>
        <div className="shape-mockup jump d-none d-xl-block" style={{ top: '5%', right: '-10%' }}>
          <img src="/img/shape/shape_5.png" alt="shape" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
