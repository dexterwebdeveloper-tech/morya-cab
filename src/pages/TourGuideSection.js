import React from 'react';

const guides = [
  {
    id: 1,
    name: '24/7 Customer Support',
    role: 'We are always available to assist you.',
    icon: 'fas fa-phone-volume',  // Phone support icon
  },
  {
    id: 2,
    name: 'Exclusive Offers',
    role: 'Get the best deals on your trips.',
    icon: 'fas fa-gift',  // Gift icon for offers
  },
  {
    id: 3,
    name: 'Secure Travel',
    role: 'Your safety and security are our priority.',
    icon: 'fas fa-lock',  // Lock icon for security
  },
  {
    id: 4,
    name: 'Easy Booking',
    role: 'Book your ride in just a few clicks.',
    icon: 'fas fa-calendar-check',  // Calendar check icon for booking
  },
];


const TourGuideSection = () => {
  return (
    <section
      className="bg-smoke py-3 overflow-hidden"
      style={{ backgroundImage: 'url(/img/bg/team_bg_1.png)' }}
    >
      <div className="container z-index-common">
        <div className="title-area text-center">
          <span className="sub-title">Why Choose Us</span>
        </div>
        <div className="row">
          {guides.map((guide) => (
            <div key={guide.id} className="col-md-3 col-12">
              <div className="th-team team-box">
                <div className="team-img">
                <i className={`fas ${guide.icon} fa-3x colorr`}></i>
                </div>
                <div className="team-content">
                  <div className="media-body">
                    <h3 className="box-title">
                      <a href="/">
                         {guide.name}
                      </a>
                    </h3>
                    <span className="team-desig">{guide.role}</span>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourGuideSection;
