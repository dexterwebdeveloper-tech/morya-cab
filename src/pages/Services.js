import React from 'react';
import { Helmet } from 'react-helmet';

const Services = () => {
  const destinations = [
    {
      id: 1,
      image: "/images/keyword/3.jpg",
      title: "Pune to Mumbai Taxi",
      listings: "Morya Cab offers a comfortable and reliable taxi service for the Pune to Mumbai trip, ensuring a smooth and hassle-free journey between the two cities.",
      
    },
    {
      id: 2,
      image: "/images/keyword/1.jpg",
      title: "Pune to Shirdi Taxi ",
      listings: "Morya Cab offers a comfortable and reliable taxi service for the Pune to Shirdi trip, ensuring a smooth and hassle-free journey to the holy destination.",
      
    },
    {
      id: 3,
      image: "/images/keyword/5.jpg",
      title: "Pune to Mahabaleshwar Taxi ",
      listings: "Morya Cab offers a comfortable and reliable taxi service for the Pune to Mahabaleshwar trip, ensuring a smooth and scenic journey to the beautiful hill station.",
      
    },
    {
      id: 4,
      image: "/images/keyword/27.jpg",
      title: "Mumbai Airport to Pune Taxi ",
      listings: "Morya Cab offers a comfortable and reliable taxi service for the Mumbai Airport to Pune trip, ensuring a smooth and hassle-free journey to your destination.",
      
    },
    {
      id: 5,
      image: "/images/keyword/10.jpg",
      title: "Pune to Goa Taxi",
      listings: "Morya Cab offers a comfortable and reliable taxi service for the Pune to Goa trip, ensuring a smooth and enjoyable journey to the coastal paradise.",
      
    },
    {
      id: 6,
      image: "/images/keyword/22.jpg",
      title: "Mumbai to Bhimashankar Taxi ",
      listings: "Morya Cab offers a comfortable and reliable taxi service for the Mumbai to Bhimashankar trip, ensuring a smooth and peaceful journey to the sacred temple.",
      
    },
    {
      id: 7,
      image: "/images/kohlapur.jpg",
      title: "Pune to Kohlapur Taxi",
      listings: "Morya Cab offers a comfortable and reliable taxi service for the Pune to Kolhapur trip, ensuring a smooth and hassle-free journey to your destination.",
      
    },
    {
      id: 8,
      image: "/images/keyword/9.jpg",
      title: "Pune to Ashtavinayak Taxi",
      listings: "Morya Cab offers a comfortable and reliable taxi service for the Pune to Ashtavinayak trip, ensuring a smooth and hassle-free journey to your destination.",
      
    },
    {
      id: 9,
      image: "/images/jyotilinga.png",
      title: "Mumbai to Jyotirlinga Darshan ",
      listings: "Morya Cab offers a comfortable and reliable taxi service for the Mumbai to Jyotirlinga Darshan trip, ensuring a smooth and hassle-free journey to your sacred destination.",
      
    }
  ];

  return (


<>
<Helmet>
        <title>Pune to Mumbai cab On rent</title>
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
        <h1 className="breadcumb-title">Services </h1>
        <ul className="breadcumb-menu">
          <li><a href="/">Home</a></li>
          <li>Services </li>
        </ul>
      </div>
    </div>
  </div>

    <section className="position-relative overflow-hidden space" id="destination-sec">
      <div className="container">
        <div className="row gy-4 gx-4">
          {destinations.map((destination) => (
            <div key={destination.id} className="col-xl-4 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img src={destination.image} alt="destination" />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href={destination.link} className='darkcolor'>{destination.title}</a>
                  </h3>
                  <p className="destination-text">{destination.listings}</p>
                  {/* <a href="contact.html" className="th-btn style4 th-icon">Book Now</a> */}
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

export default Services;
