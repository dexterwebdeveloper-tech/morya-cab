import React from 'react';
import { Helmet } from 'react-helmet';

const OurFleet = () => {
  const destinations = [
 
    {
      id: 2,
      image: "/images/our-fleet/3.jpg",
      title: "Swift Desire",
      listings: "The Swift Dzire is a compact sedan offering great fuel efficiency, smooth handling, and a spacious cabin. It's a practical choice for daily commutes and family trips. ",
     
    },
    {
      id: 3,
      image: "/images/our-fleet/5.jpg",
      title: "Ertiga",
      listings: "A stylish and fuel-efficient MUV with spacious seating, ample luggage space, and a smooth drive. Perfect for family trips, business travel, outstation journeys, city rides, and group tours.",
     
    },
    {
      id: 6,
      image: "/images/our-fleet/7.jpg",
      title: "Innova Crysta ",
      listings: "The Toyota Innova Crysta is a premium MPV offering a spacious cabin, powerful engine, and a smooth driving experience. It's perfect for families and long journeys.",
     
    },
    {
      id: 7,
      image: "/images/our-fleet/4.jpg",
      title: "Kia Carens",
      listings: "The Kia Carens is a stylish and versatile MPV with a spacious interior, modern features, and excellent comfort. It's an ideal choice for families looking for both practicality and style.",
     
    },
    {
      id: 8,
      image: "/images/our-fleet/8.jpg",
      title: "Innova Cab",
      listings: "The Innova Cab is a commercial version of the Toyota Innova, offering spacious interiors, comfort, and reliability. It's widely used for taxi services, long trips, and family transportation.",
     
    },
    {
        id: 9,
        image: "/images/our-fleet/10.jpg",
        title: "Tempo Traveller  ",
        listings: " The Tempo Traveller is a spacious and reliable minibus, ideal for group travel. With comfortable seating and ample luggage space, it's perfect for family trips, tours, and events.",
       
      },
    
  ];

  return (


<>

<Helmet>
        <title>Pune to Mumbai cab On rent | Morya Cab | Call: +91 9371304510</title>
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
        <h1 className="breadcumb-title">Our Fleet </h1>
        <ul className="breadcumb-menu">
          <li><a href="/">Home</a></li>
          <li>Our Fleet  </li>
        </ul>
      </div>
    </div>
  </div>

    <section className="position-relative overflow-hidden bg-green" id="destination-sec">
      <div className="container">
        <div className="row gy-4 gx-4">
          {destinations.map((destination) => (
            <div key={destination.id} className="col-xl-4 col-lg-4 col-md-6 ">
              <div className="destination-item th-ani ">
                <div className="destination-item_img global-img">
                  <img src={destination.image} alt="destination" />
                </div>
                <div className="destination-content ">
                  <h3 className="box-title">
                    <a href="" className='darkcolor'>{destination.title}</a>
                  </h3>
                  <p className="destination-text">{destination.listings}</p>
                
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shape-mockup shape1 d-none d-xxl-block" data-bottom="17%" data-right="-9%">
          <img src="/img/shape/shape_1.png" alt="shape" />
        </div>
        <div className="shape-mockup shape2 d-none d-xl-block" data-bottom="8%" data-right="-8%">
          <img src="/img/shape/shape_2.png" alt="shape" />
        </div>
        <div className="shape-mockup shape3 d-none d-xxl-block" data-bottom="15%" data-right="-4%">
          <img src="/img/shape/shape_3.png" alt="shape" />
        </div>
      </div>
    </section>
    
</>
  );
};

export default OurFleet;
