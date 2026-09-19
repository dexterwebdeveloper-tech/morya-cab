import React from 'react';

const AboutSection = () => {
  return (
    <div className="about-area position-relative overflow-hidden space" id="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-box1">
              <div className="img1">
                <img src="/images/cab.jpg" alt="About" />
              </div>
              <div className="img2 d-none">
                <img src="/images/cab3.jpg" alt="About" />
              </div>
              <div className="img3 d-none">
                <img src="/images/cab2.jpg" alt="About" />
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="ps-xl-4 ms-xl-2">
              <div className="title-area mb-20 pe-xl-5 me-xl-5">
                <span className="sub-title style1">Let’s Go Together</span>
                <h4 className="sec-title  pe-xl-5 me-xl-5">
                  Plan Your Trip With Morya Cab
                </h4>
               
      

              </div>
              <div class="ashtavinayak-section">
    <h2 className="ashtavinayak-title">Ashtavinayak Darshan</h2>
    <p className="ashtavinayak-text">
        Ashtavinayak Darshan is a revered pilgrimage covering eight sacred temples of Lord Ganesha in Maharashtra. These temples—Moreshwar (Morgaon), Siddhivinayak (Siddhatek), Ballaleshwar (Pali), Varadvinayak (Mahad), Chintamani (Theur), Girijatmaj (Lenyadri), Vighnahar (Ozar), and Mahaganpati (Ranjangaon)—hold immense spiritual significance. 
        Each temple has its own unique history and legend associated with Lord Ganesha, attracting devotees seeking blessings for prosperity, wisdom, and success. 
       
    </p>
</div>
              <div className="about-item-wrap">
                <div className="about-item">
                  <div className="about-item_img">
                    <img src="/img/icon/map3.svg" alt="Map" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Exclusive Trip</h5>
                    <p className="about-item_text">
                    Experience the journey of a lifetime with our Exclusive Trip, offering personalized travel, comfort, and luxury.
                    </p>
                  </div>
                </div>
         
                <div className="about-item">
                  <div className="about-item_img">
                    <img src="/img/icon/guide.svg" alt="Guide" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Professional Driver</h5>
                    <p className="about-item_text">
                    Our professional drivers ensure a safe, smooth, and comfortable ride, providing you with a stress-free journey every time.
                    </p>
                  </div>
                </div>
              </div>




{/* <div className="mt-35">
                <a href="/about" className="th-btn style3 th-icon">
                  Learn More
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="shape-mockup shape1 d-none d-xl-block" data-top="12%" data-left="-16%">
          <img src="/img/shape/shape_1.png" alt="shape" />
        </div>

        <div className="shape-mockup shape2 d-none d-xl-block" data-top="20%" data-left="-16%">
          <img src="/img/shape/shape_2.png" alt="shape" />
        </div>

        <div className="shape-mockup shape3 d-none d-xl-block" data-top="14%" data-left="-10%">
          <img src="/img/shape/shape_3.png" alt="shape" />
        </div>

        <div className="shape-mockup about-shape movingX d-none d-xxl-block" data-bottom="0%" data-right="-11%">
          <img src="/img/normal/about-slide-img.png" alt="shape" />
        </div>

        <div className="shape-mockup about-rating d-none d-xxl-block" data-bottom="50%" data-right="-20%">
          <i className="fa-sharp fa-solid fa-star"></i>
          <span>4.9k</span>
        </div>

        <div className="shape-mockup about-emoji d-none d-xxl-block" data-bottom="25%" data-right="5%">
          <img src="/img/icon/emoji.png" alt="emoji" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
