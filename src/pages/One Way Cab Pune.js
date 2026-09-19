
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Onewaycabpune() {



    const cardData =
    {
        keyword: 'One Way Cab Pune  ',
        heading: 'Morya Cabs: One Way Cab Pune  ',
        headingDescription: 'Morya Cabs offers convenient and affordable one-way taxi services from Pune to various destinations. Whether you need to travel to Mumbai, Bangalore, or any other city, our reliable one-way cab service ensures a smooth and comfortable ride without the hassle of return bookings. With professional drivers, well-maintained vehicles, and punctual services, Morya Cabs is your go-to choice for a stress-free one-way journey.',

        top: 'Benefits of Choosing Morya Cabs for One Way Travel:',

"topPlaces": [
    {
        "title": "Karnala Fort",
        "description": "Located just a short drive from Panvel, Karnala Fort is an excellent spot for trekking and nature lovers. The fort offers panoramic views of the surrounding hills and forests, making it a popular weekend getaway. The Karnala Bird Sanctuary nearby adds to the charm, making it a perfect destination for adventure and wildlife enthusiasts."
    },
    {
        "title": "Panvel Lake",
        "description": "Panvel Lake is a scenic spot for picnics and relaxation. Surrounded by lush greenery, it's an ideal place for a peaceful day out, especially during the monsoon season when the area becomes lush and vibrant. Visitors can enjoy a tranquil atmosphere, making it a great escape from the city's hustle and bustle."
    },
    {
        "title": "Sree Ballaleshwar Ashtavinayak Temple",
        "description": "A significant temple dedicated to Lord Ganesha, the Sree Ballaleshwar Temple is part of the Ashtavinayak pilgrimage circuit. The temple is known for its spiritual importance and beautiful surroundings, attracting devotees and tourists alike."
    },
    {
        "title": "Matheran",
        "description": "Matheran is a popular hill station near Panvel, known for its cool climate, scenic viewpoints, and tranquil environment. It's perfect for nature walks, trekking, and relaxing away from the hustle and bustle of city life. The toy train ride adds a nostalgic charm to the visit."
    },
    {
        "title": "Phansad Wildlife Sanctuary",
        "description": "Situated a bit further from Panvel, Phansad Wildlife Sanctuary is home to a variety of flora and fauna. The sanctuary is perfect for wildlife enthusiasts, bird watchers, and those interested in nature trails. It offers a refreshing escape into nature."
    },
    {
        "title": "Rajmachi Fort",
        "description": "A historic fort near Panvel, Rajmachi Fort is a popular trekking destination. Offering stunning views of the Sahyadri range, it’s ideal for adventure lovers and history buffs. The trek through lush greenery makes it a memorable experience."
    },
    {
        "title": "Vashi Bridge",
        "description": "The Vashi Bridge is an iconic landmark connecting Navi Mumbai to the mainland. While not a traditional tourist spot, it offers picturesque views of the surroundings, especially during the evening when the city lights reflect beautifully on the water."
    },
    {
        "title": "Belapur Fort",
        "description": "A historical fort located in Navi Mumbai, close to Panvel, Belapur Fort offers a glimpse into the region’s past. The fort, though in ruins, still attracts history enthusiasts and hikers looking for a mix of adventure and heritage."
    },
    {
        "title": "Elephanta Caves",
        "description": "Though located a bit further from Panvel, the Elephanta Caves, a UNESCO World Heritage Site, are worth a visit. These ancient rock-cut temples dedicated to Lord Shiva showcase incredible artistry and are a must-see for history and culture enthusiasts."
    },
    {
        "title": "Khandala and Lonavala",
        "description": "Khandala and Lonavala are famous hill stations close to Panvel. Known for their lush green landscapes, waterfalls, and pleasant weather, they are great spots for a day trip. Visitors can explore attractions like Bhushi Dam, Tiger Point, and the famous Chikki shops."
    }
],


"services": [
    {
      "name": "Pune to Shirdi Cab One Way",
      "description": "Morya Cab offers reliable one-way taxi services for your trip from Pune to Shirdi. Enjoy a comfortable and peaceful journey with a professional driver."
    },
    {
      "name": "One Way Cab Pune to Mumbai",
      "description": "Traveling from Pune to Mumbai? Book a one-way cab with Morya Cab for a hassle-free, direct ride. Our professional drivers ensure a safe and smooth journey."
    },
    {
      "name": "One Way Cab Pune",
      "description": "Need a one-way cab in Pune? Morya Cab offers convenient one-way rides for various destinations. Choose a reliable, comfortable, and affordable taxi for your one-way journey."
    },
    {
      "name": "One Way Cab Mumbai to Pune",
      "description": "Morya Cab offers one-way taxi services from Mumbai to Pune, ensuring you travel conveniently with no delays. Our drivers are skilled and familiar with the best routes."
    },
    {
      "name": "Mumbai Pune Cab One Way",
      "description": "Choose Morya Cab for a smooth and comfortable one-way ride from Mumbai to Pune. Whether it’s a business or leisure trip, we offer reliable, professional taxi services."
    },
    {
      "name": "Pune to Aurangabad Cab One Way",
      "description": "Morya Cab offers a one-way cab service from Pune to Aurangabad. With comfortable and safe rides, we make sure your trip is stress-free and timely."
    },
    {
      "name": "Pune to Mumbai Taxi One Way",
      "description": "Book a one-way taxi from Pune to Mumbai with Morya Cab. Enjoy a seamless journey with experienced drivers and well-maintained vehicles."
    },
    {
      "name": "One Way Taxi Mumbai to Pune",
      "description": "Morya Cab provides one-way taxi services from Mumbai to Pune. Our services are affordable, quick, and reliable for your convenience."
    },
    {
      "name": "One Way Taxi from Shirdi to Pune",
      "description": "For a smooth one-way ride from Shirdi to Pune, Morya Cab offers convenient taxi services. Travel comfortably with our experienced drivers."
    },
    {
      "name": "One Way Cab from Pune to Kolhapur",
      "description": "Morya Cab offers one-way cab services from Pune to Kolhapur. Whether you're traveling for business or leisure, we provide a comfortable, efficient ride."
    },
    {
      "name": "One Way Cab from Pune to Mahabaleshwar",
      "description": "Choose Morya Cab for a one-way taxi from Pune to Mahabaleshwar. Our experienced drivers ensure a smooth, relaxing journey to this scenic destination."
    },
    {
      "name": "One Way Cab Pune to Kolhapur",
      "description": "Travel from Pune to Kolhapur with ease in a one-way cab from Morya Cab. We provide reliable, professional taxi services with affordable rates."
    },
    {
      "name": "One Way Cab Pune to Aurangabad",
      "description": "For a one-way ride from Pune to Aurangabad, Morya Cab provides safe, comfortable, and affordable taxi services. Our drivers ensure timely arrivals."
    },
    {
      "name": "One Way Car Rental Pune",
      "description": "Morya Cab offers one-way car rentals for your convenience. Rent a car and travel stress-free to your destination from Pune."
    },
    {
      "name": "One Way Drop Taxi Pune",
      "description": "Need a one-way drop from Pune? Morya Cab offers one-way drop taxi services to your desired destination. Book a comfortable and reliable ride with us."
    },
    {
      "name": "One Way Mumbai to Pune",
      "description": "Morya Cab offers reliable one-way taxis for your journey from Mumbai to Pune. Enjoy a smooth ride with our experienced drivers and well-maintained vehicles."
    },
    {
      "name": "Pune to Aurangabad One Way Taxi",
      "description": "Morya Cab offers affordable one-way taxi services from Pune to Aurangabad. Travel comfortably with a professional driver."
    },
    {
      "name": "Pune to Goa One Way Cab",
      "description": "Morya Cab provides convenient one-way cab services from Pune to Goa. Relax and enjoy the ride with our professional and skilled drivers."
    },
    {
      "name": "Pune to Goa One Way Taxi",
      "description": "Looking for a one-way taxi from Pune to Goa? Morya Cab offers affordable, reliable, and comfortable taxi services for your journey."
    },
    {
      "name": "Pune to Goa Taxi Fare One Way",
      "description": "The one-way taxi fare from Pune to Goa with Morya Cab is affordable and transparent. No hidden costs, just a smooth and comfortable ride."
    },
    {
      "name": "Pune to Kolhapur One Way Cab",
      "description": "For a one-way ride from Pune to Kolhapur, Morya Cab offers safe and reliable taxi services. Book your one-way cab with us for a comfortable trip."
    },
    {
      "name": "Pune to Mahabaleshwar One Way Cab",
      "description": "Morya Cab provides one-way taxi services from Pune to Mahabaleshwar. Enjoy a scenic ride with a professional driver and a comfortable vehicle."
    }
  ],


  tableData: [
    ["Pune to Shirdi Cab One Way", "-One Way Cab Pune to Mumbai"],
    ["One Way Cab Pune", "-One Way Cab Mumbai to Pune"],
    ["Mumbai Pune Cab One Way", "-Pune to Aurangabad Cab One Way"],
    ["Pune to Mumbai Taxi One Way", "-One Way Taxi Mumbai to Pune"],
    ["One Way Taxi from Shirdi to Pune", "-One Way Cab from Pune to Kolhapur"],
    ["One Way Cab from Pune to Mahabaleshwar", "-One Way Cab Pune to Kolhapur"],
    ["One Way Cab Pune to Aurangabad", "-One Way Car Rental Pune"],
    ["One Way Drop Taxi Pune", "-One Way Mumbai to Pune"],
    ["Pune to Aurangabad One Way Taxi", "-Pune to Goa One Way Cab"],
    ["Pune to Goa One Way Taxi", "-Pune to Goa Taxi Fare One Way"],
    ["Pune to Kolhapur One Way Cab", "-Pune to Mahabaleshwar One Way Cab"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of punctuality for one-way trips. Whether it’s a solo journey, a business meeting, or a family trip, we ensure timely pickups and drop-offs, so you can focus on your destination without worrying about delays."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet includes a range of well-maintained vehicles that offer maximum comfort for your one-way journey. Choose from sedans, SUVs, or premium cars, all equipped with air conditioning, ample legroom, and plenty of luggage space."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are skilled, experienced, and familiar with the best routes to ensure a smooth journey. They are professional, courteous, and committed to providing a safe and comfortable ride throughout your one-way trip."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing for your one-way trip with no hidden charges. We believe in transparent pricing, ensuring that you know the total cost upfront with no surprises at the end of your journey."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. Our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking to ensure that your one-way trip is both secure and comfortable."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates 24/7, so whether you need a ride during the day or late at night, we’re available to meet your travel needs. Our customer service team is always ready to assist you."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a one-way cab with Morya Cab is easy. You can book your ride through our website or mobile app, or simply contact our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're traveling for business, leisure, or personal reasons, we offer customized travel packages for your one-way journey. Let us know your preferences, and we’ll tailor your trip accordingly."
    }
]
















    }

    const faqData = [
        {
          question: "How can I book a one-way cab from Pune with Morya Cab?",
          answer: "Booking is simple! You can book online via our website or mobile app, or reach out to our customer service team for help."
        },
        {
          question: "Are the drivers experienced for one-way trips?",
          answer: "Yes, all our drivers are experienced in handling long and one-way trips. They are familiar with the best routes to ensure a smooth and safe journey."
        },
        {
          question: "What types of vehicles are available for one-way trips from Pune?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all designed for comfort on long trips."
        },
        {
          question: "How do I pay for my one-way cab rental?",
          answer: "We offer multiple payment options, including cash, credit/debit cards, and online payment via our app, so you can choose your preferred method."
        },
        {
          question: "Can I book a round trip with the one-way cab?",
          answer: "Yes, you can easily arrange a round trip. Just provide us with the details, and we’ll make the necessary arrangements."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges, such as for waiting time or detours, will be communicated to you upfront for complete transparency in pricing."
        },
        {
          question: "Can I hire a one-way cab for sightseeing?",
          answer: "Yes, we offer one-way cabs for sightseeing in Pune or other nearby locations. Let us know your itinerary, and we’ll provide a vehicle for your tour."
        },
        {
          question: "What is the luggage allowance for a one-way cab?",
          answer: "Our vehicles have enough space for standard luggage. If you have excess luggage or special requirements, please inform us when booking, and we’ll make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate one-way trips?",
          answer: "Yes, we provide corporate travel services for one-way trips, offering reliable and comfortable transportation for business meetings or team outings."
        },
        {
          question: "Why should I choose Morya Cab for a one-way trip from Pune?",
          answer: "Morya Cab offers a reliable, comfortable, and affordable one-way travel option with professional drivers, well-maintained vehicles, and transparent pricing, ensuring a seamless journey."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rajesh Iyer',
          role: 'Traveler',
          review: "I used Morya Cab for a one-way trip to Mumbai, and it was a fantastic experience. The car was clean, comfortable, and the driver was professional. I reached on time and had a stress-free journey!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Ms. Priya Joshi',
          role: 'Traveler',
          review: "Booking a one-way cab with Morya Cab was super easy. The vehicle was spacious and perfect for my needs, and the driver was very friendly and punctual. Highly recommended!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        }
      ];
      
      
      
      
      
      







    const contactData = {
        heading: `${cardData.keyword} Contact Number`,
        contactNumbers: [
            "+91 9371304510",
            "+91 8379975860",



        ],
        email: "booking@moryacab.com"
    };


    const Images = [
        {
            place: "/images/keyword/1.jpg",
            text: "Pune to Shirdi Taxi",
            link: "/Pune-to-Shirdi-Taxi"
        },
        {
            place: "/images/keyword/2.jpg",
            text: "Pune to Bhimashankar Taxi",
            link: "/Pune-to-Bhimashankar-Taxi"
        },
        {
            place: "/images/keyword/3.jpg",
            text: "Pune to Mumbai Taxi",
            link: "/Pune-to-Mumbai-Taxi"
        },
        {
            place: "/images/keyword/4.jpg",
            text: "Pune to Lonavala Taxi",
            link: "/Pune-to-Lonavala-Taxi"
        },
        {
            place: "/images/keyword/5.jpg",
            text: "Pune to Mahabaleshwar Taxi",
            link: "/Pune-to-Mahabaleshwar-Taxi"
        },
        {
            place: "/images/keyword/6.jpg",
            text: "Pune to Aurangabad Taxi",
            link: "/Pune-to-Aurangabad-Taxi"
        },
        {
            place: "/images/keyword/7.jpg",
            text: "Pune to Nashik-Trimbakeshwar Taxi",
            link: "/Pune-to-Nashik-Trimbakeshwar-Taxi"
        },
        {
            place: "/images/keyword/8.jpg",
            text: "Pune Car Rental Services",
            link: "/Pune-Car-Rental-Services"
        },
        {
            place: "/images/keyword/9.jpg",
            text: "Pune to Ashtavinayak Taxi",
            link: "/Pune-to-Ashtavinayak-Taxi"
        },
        {
            place: "/images/keyword/10.jpg",
            text: "Pune to Goa Taxi",
            link: "/Pune-to-Goa-Taxi"
        },
        {
            place: "/images/keyword/11.jpg",
            text: "Pune to Solapur Taxi",
            link: "/Pune-to-Solapur-Taxi"
        },
        {
            place: "/images/keyword/12.jpg",
            text: "Pune to Hyderabad Cab",
            link: "/Pune-to-Hyderabad-Cab"
        },
        {
            place: "/images/keyword/13.jpg",
            text: "Pune to Kolhapur Taxi",
            link: "/Pune-to-Kolhapur-Taxi"
        },
        {
            place: "/images/keyword/14.jpg",
            text: "Pune to Bangalore Taxi",
            link: "/Pune-to-Bangalore-Taxi"
        },
        {
            place: "/images/keyword/15.jpg",
            text: "Pune to Indore Taxi",
            link: "/Pune-to-Indore-Taxi"
        },
        {
            place: "/images/keyword/16.jpg",
            text: "Mumbai to Shirdi Taxi",
            link: "/Mumbai-to-Shirdi-Taxi"
        },
        {
            place: "/images/keyword/17.jpg",
            text: "Borivali to Pune Taxi Service",
            link: "/Borivali-to-Pune-Taxi-Service"
        },
        {
            place: "/images/keyword/18.jpg",
            text: "Vasai to Pune Taxi Service",
            link: "/Vasai-to-Pune-Taxi-Service"
        },
        {
            place: "/images/keyword/19.jpg",
            text: "Dombivli to Pune Taxi Services",
            link: "/Dombivli-to-Pune-Taxi-Services"
        },
        {
            place: "/images/keyword/20.jpg",
            text: "Dadar to Shirdi Taxi Service",
            link: "/Dadar-to-Shirdi-Taxi-Service"
        },
        {
            place: "/images/keyword/21.jpg",
            text: "Mumbai to Trimbakeshwar Taxi",
            link: "/Mumbai-to-Trimbakeshwar-Taxi"
        },
        {
            place: "/images/keyword/22.jpg",
            text: "Mumbai to Bhimashankar Taxi",
            link: "/Mumbai-to-Bhimashankar-Taxi"
        },
        {
            place: "/images/keyword/23.jpg",
            text: "Mumbai Central to Pune Taxi",
            link: "/Mumbai-Central-to-Pune-Taxi"
        },
        {
            place: "/images/keyword/24.jpg",
            text: "Thane to Pune Taxi Service",
            link: "/Thane-to-Pune-Taxi-Service"
        },
        {
            place: "/images/keyword/25.jpg",
            text: "Mumbai to Nashik Taxi",
            link: "/Mumbai-to-Nashik-Taxi"
        },
        {
            place: "/images/keyword/26.jpg",
            text: "Mumbai to Lonavala Taxi",
            link: "/Mumbai-to-Lonavala-Taxi"
        },
        {
            place: "/images/keyword/27.jpg",
            text: "Mumbai Airport to Pune Taxi",
            link: "/Mumbai-Airport-to-Pune-Taxi"
        }
    ];


    const images = [
        { src: "/images/our-fleet/3.jpg", alt: "Image 1" },
        { src: "/images/our-fleet/4.jpg", alt: "Image 1" },
        { src: "/images/our-fleet/5.jpg", alt: "Image 1" },
        { src: "/images/our-fleet/7.jpg", alt: "Image 1" },
        { src: "/images/our-fleet/8.jpg", alt: "Image 1" },
        { src: "/images/our-fleet/10.jpg", alt: "Image 1" },
       
    ];


    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "CarRental",
        "name": "One Way Cab Pune",
        "description": "Affordable one-way taxi and cab services from Pune to various destinations like Mumbai, Shirdi, Goa, Kolhapur, and more. Convenient and reliable one-way drop services.",
        "provider": {
          "@type": "Organization",
          "name": "Pune One Way Cabs",
          "url": "https://www.puneonewaycabs.com",
          "telephone": "+91-9999999999",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 15, Pune Central Mall, Pune",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411001",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 2500,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Pune"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "2500",
            "unitCode": "DAY",
            "description": "One-way taxi service from Pune to various destinations"
          }
        },
        "keywords": "One Way Cab Pune, Pune to Shirdi Cab One Way, One Way Cab Pune to Mumbai, One Way Cab Pune, One Way Cab Mumbai to Pune, Mumbai Pune Cab One Way, Pune to Aurangabad Cab One Way, Pune to Mumbai Taxi One Way, One Way Taxi Mumbai to Pune, One Way Taxi from Shirdi to Pune, One Way Cab from Pune to Kolhapur, One Way Cab from Pune to Mahabaleshwar, One Way Cab Pune to Kolhapur, One Way Cab Pune to Aurangabad, One Way Car Rental Pune, One Way Drop Taxi Pune, One Way Mumbai to Pune, Pune to Aurangabad One Way Taxi, Pune to Goa One Way Cab, Pune to Goa One Way Taxi, Pune to Goa Taxi Fare One Way, Pune to Kolhapur One Way Cab, Pune to Mahabaleshwar One Way Cab"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>One Way Cab Pune | Morya Cab| Call: +91 9371304510 </title>
  <meta
    name="description"
    content="Affordable one-way taxi and cab services from Pune to various destinations like Mumbai, Shirdi, Goa, Kolhapur, and more. Convenient and reliable one-way drop services."
  />
  <meta
    name="keywords"
    content="One Way Cab Pune, Pune to Shirdi Cab One Way, One Way Cab Pune to Mumbai, One Way Cab Pune, One Way Cab Mumbai to Pune, Mumbai Pune Cab One Way, Pune to Aurangabad Cab One Way, Pune to Mumbai Taxi One Way, One Way Taxi Mumbai to Pune, One Way Taxi from Shirdi to Pune, One Way Cab from Pune to Kolhapur, One Way Cab from Pune to Mahabaleshwar, One Way Cab Pune to Kolhapur, One Way Cab Pune to Aurangabad, One Way Car Rental Pune, One Way Drop Taxi Pune, One Way Mumbai to Pune, Pune to Aurangabad One Way Taxi, Pune to Goa One Way Cab, Pune to Goa One Way Taxi, Pune to Goa Taxi Fare One Way, Pune to Kolhapur One Way Cab, Pune to Mahabaleshwar One Way Cab"
  />
  <meta property="og:title" content="One Way Cab Pune | Affordable One-Way Taxi Services for Various Destinations" />
  <meta
    property="og:description"
    content="Affordable one-way taxi and cab services from Pune to various destinations like Mumbai, Shirdi, Goa, Kolhapur, and more. Convenient and reliable one-way drop services."
  />
  <meta property="og:url" content="https://www.puneonewaycabs.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.puneonewaycabs.com/images/one-way-cab.jpg" />
  <script type="application/ld+json">
    {JSON.stringify(jsonLD)}
  </script>
</Helmet>

            <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(/img/bg/breadcumb-bg.jpg)' }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">{cardData.keyword}</h1>
                    </div>
                </div>
            </div>


            <section id="about" className="jarallax text-light">
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className='text-white'>{cardData.keyword}</h1>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid" >
                    <div className="row container-fluid">
                        <div className="col-12 col-md-7 ">
                            <img src='/images/keyword/85.jpg' alt='img' />
                            <h3 className="py-1"
                                style={{
                                    color: '#F8911B', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >{cardData.heading} </h3><p className='fw-bold '>{cardData.headingDescription}</p>
                            <div className="">
                                <p className='fw-bold py-3 darkcolor'>{cardData.top}</p>
                                {cardData.topPlaces.map((place, index) => (
                                    <div key={index} className="">
                                        <div
                                            style={{
                                                cursor: 'pointer',
                                                // padding: '10px',
                                                marginBottom: '7px',
                                                borderRadius: '8px',
                                                transition: 'transform 0.2s'
                                            }}

                                        >
                                            <h4 className="mb-1 darkcolor">{place.title}</h4>
                                            <p className="mb-0">{place.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                               style={{
                                    cursor: 'pointer',
                                    // padding: '10px',
                                    marginBottom: '7px',
                                    borderRadius: '8px', // Optional: rounded corners
                                    transition: 'transform 0.2s' // Optional: smooth scaling effect
                                }}
                            >
                                {cardData.services.map((service, index) => (
                                    <div key={index} className=" my-4">
                                        <h4 className="py-1 darkcolor">{service.name}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                ))}
                            </div>

                            <table className="table table-responsive Border-key my-2">
                                <tbody className=' Border-key'>
                                    {cardData.tableData.map((row, rowIndex) => (
                                        <tr className='Border-key ' key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className=' Border-key bluecolor fw-bold' >{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h3 className='pt-md-3'>{cardData.keyword + " Rates"}</h3>
                            <BusRatesTable />

                            <div id="why-choose-section"
                                className=''>
                                {cardData.whychoose.map((item, index) => (
                                    <div key={index}>
                                        <h4 className="py-1 whycolor">{item.WhyChooseheading}</h4>
                                        <p>{item.WhyChoosedescription}</p>
                                    </div>
                                ))}
                            </div>


                            <div className="row twm-faq-section-1 m-b30">


                                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Morya Cabs</h2>
                                        </div>


                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">


                                                <FAQ faqData={faqData} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <TestimonialKeyword testimonialData={testimonialData} />


                            <div className='py-4'>

                                <div className="contact-box Borderr">
                                    <h3>{contactData.heading}</h3>
                                    <p className='text-black'>For booking inquiries or any assistance, please feel free to contact us:</p>
                                    <div className="contact-details">
                                        <p><strong className='darkcolor'>Mobile No:</strong></p>
                                        <ul>
                                            {contactData.contactNumbers.map((number, index) => (
                                                <li key={index}>
                                                    <a href={`tel:${number}`} className="contact-link fw-bold fs-5">
                                                        {number}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <p><strong className='darkcolor'>Email Id: </strong>
                                            <a href={`mailto:${contactData.email}`} className="contact-link">
                                                {contactData.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-4' >
                                            {Images.map((e) => {
    return (
        <div className="box1" key={e.text}>
            <a
                href={e.link} // Use the separate link for each item
                className="d-flex justify-content-around align-items-center"
            >
                <div className="b1">
                    <img src={e.place} alt={e.text} />
                </div>
                <div className="b2">
                    <a href={e.link} className="px-3 colorr">{e.text}</a>
                </div>
            </a>
        </div>
    );
})}


                            <div className="gallery-container">
                                <h2 className="gallery-title">Our Fleets</h2>
                                <div className="gallery-row d-flex flex-wrap">
                                    {images.map((image, index) => (
                                        <div className="gallery-item col-md-4" key={index}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="gallery-image"

                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className=" rounded p-4 shadow-sm Uni_border "
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '3px dotted #0AB4A9',
                                    marginBottom: '7px',
                                    fontWeight: 'bold',
                                }}

                            >
                                <h4 className="pb-3 pt-3 lead fw-bold text-dark">Contact Information</h4>

                                <div className="row">

                                    <div className="col-12 mb-3">
                                        <div className="Small_border  rounded text-center py-2 " style={{ backgroundColor: '#0AB4A9' }}>
                                            <h4 className=" lead fw-semibold whitt text-dark">Phone Numbers</h4>
                                            <i className="bi bi-telephone-fill fs-1 mb-2"></i>
                                            <div className=''>
                                                <a href="tel:+91 9371304510" className="d-block  text-white">+91 9371304510</a>
                                                <a href="tel:+91 8379975860" className="d-block  text-white">+91 8379975860</a>


                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border rounded text-center">
                                            <i className="bi bi-envelope fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#0AB4A9' }}>
                                                <h4 className=" fw-semibold lead whitt text-dark">Email</h4>
                                                <a href="mailto:booking@moryacab.com" className=" text-white d-block">
                                                    booking@moryacab.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border  rounded text-center">
                                            <i className="bi bi-house-fill fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#0AB4A9' }}>
                                                <h4 className=" fw-semibold lead whitt text-dark">Address</h4>
                                                <p className="whit text-white ">
                                                    <i> Morya Cab<br />
                                                    Flat no. 306 Aasra Crystal Hights, Near Union Bank Dehu Phata Alandi Devachi Pune, Maharashtra 412105
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Onewaycabpune;