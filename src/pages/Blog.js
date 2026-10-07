import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const destinations = [
 
    {
      id: 2,
      image: "/images/keyword/36.jpg",
      title: "Pune to Sambhajinagar Taxi",
      listings: "Morya Cabs offers a hassle-free Pune to Sambhajinagar Taxi service with comfortable rides at the best prices. Whether you're traveling for business, a family trip, or sightseeing, our well-maintained cabs and professional drivers ensure a smooth journey. Book now for a safe, reliable, and enjoyable travel experience! ",
     
    },
    {
      id: 3,
      image: "/images/keyword/96.jpg",
      title: "Pune to Thane Cab",
      listings: "Morya Cabs offers a comfortable and reliable Pune to Thane Cab service at the best prices. Travel stress-free with our well-maintained cabs and professional drivers. Book now for a smooth and hassle-free journey! 🚖",
     
    },
    {
      id: 6,
      image: "/images/keyword/4.jpg",
      title: "Pune to Lonavala Taxi  ",
      listings: "Morya Cabs offers a safe, reliable, and budget-friendly Pune to Lonavala taxi service. Whether it's a weekend getaway, a business trip, or a one-day excursion, we ensure a comfortable and hassle-free journey.",
     
    },
    {
      id: 7,
      image: "/images/keyword/79.jpg",
      title: "Pune to Ganpatipule Taxi",
      listings: "Morya Cabs provides a reliable Pune to Ganpatipule Taxi service for a smooth and comfortable journey. Enjoy a hassle-free ride with professional drivers and well-maintained cabs. Book now for a safe and enjoyable trip! 🚖",
     
    },
    {
      id: 8,
      image: "/images/keyword/54.jpg",
      title: "Pune to Panchgani Cab",
      listings: "Travel in style and comfort with Morya Cabs. Whether you’re heading for a weekend getaway, a family trip, or a romantic retreat, we ensure a safe, affordable, and hassle-free journey.",
     
    },
    {
        id: 9,
        image: "/images/keyword/34.jpg",
        title: "Mumbai to Mahabaleshwar Taxi  ",
        listings: "  Choose Morya Cabs for a safe, comfortable, and budget-friendly journey. Whether it’s a family trip, weekend getaway, or business travel, we provide the best-in-class cab services with experienced drivers and well-maintained vehicles.",
       
      },
    
  ];

  return (


<>

<Helmet>
        <title>Pune to Mumbai cab On rent | Call: +91 9359401610</title>
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
        <h1 className="breadcumb-title">Blogs  </h1>
        <ul className="breadcumb-menu">
          <li><a href="/">Home</a></li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  </div>

    <section className="position-relative overflow-hidden " id="destination-sec">
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
                    <a href="#" className='darkcolor'>{destination.title}</a>
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

export default Blog;
