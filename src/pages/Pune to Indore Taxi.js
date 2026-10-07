
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoindore() {



    const cardData =
    {
        keyword: 'Pune to Indore Taxi    ',
        heading: 'Morya Cabs: Pune to Indore Taxi   ',
        headingDescription: 'Morya Cabs offers seamless, comfortable, and affordable taxi services from Pune to Indore. Whether you are traveling for business, leisure, or a family trip, our well-maintained fleet and professional drivers guarantee a safe and pleasant journey. The distance between Pune and Indore is approximately 550 km, and the journey typically takes around 8 to 10 hours by road. Travel in comfort and style with Morya Cabs, where your convenience is our priority.',

        top: 'Top Places to Visit in Indore with Morya Cabs',

  "topPlaces": [
    {
        "title": "Rajwada Palace",
        "location": "Indore, Madhya Pradesh",
        "description": "Rajwada Palace, a magnificent historical structure in Indore, is an architectural marvel that blends Maratha, Mughal, and French styles. The palace's grandeur and intricate design make it a must-visit for history enthusiasts and culture lovers."
    },
    {
        "title": "Lal Baag Palace",
        "location": "Indore, Madhya Pradesh",
        "description": "Lal Baag Palace is another royal gem in Indore, offering a glimpse of the royal lifestyle of the Holkar dynasty. The palace is surrounded by lush greenery, and its interiors are adorned with vintage furniture and regal decor."
    },
    {
        "title": "Kanch Mandir",
        "location": "Indore, Madhya Pradesh",
        "description": "Kanch Mandir, also known as the Jain Glass Temple, is an exquisite temple dedicated to Lord Mahavir. The temple's walls and ceiling are entirely made of glass, giving it a radiant, ethereal look, making it a serene and spiritual place to visit."
    },
    {
        "title": "Sarafa Bazaar",
        "location": "Indore, Madhya Pradesh",
        "description": "Sarafa Bazaar is famous for its vibrant street food culture and local delicacies. The market is a great place to sample traditional Indore snacks like poha, jalebi, and bhutte ka kees, making it a must-visit for food lovers."
    },
    {
        "title": "Indore Museum",
        "location": "Indore, Madhya Pradesh",
        "description": "The Indore Museum houses a rich collection of sculptures, artifacts, and paintings, offering a deep insight into the region’s history and culture. It’s a great destination for those interested in the art and heritage of Madhya Pradesh."
    },
    {
        "title": "Annapurna Temple",
        "location": "Indore, Madhya Pradesh",
        "description": "Annapurna Temple, dedicated to the Hindu Goddess Annapurna, is one of the most revered temples in Indore. The temple’s serene atmosphere and beautiful architecture make it an important spiritual destination for visitors."
    },
    {
        "title": "Chappal Bazaar",
        "location": "Indore, Madhya Pradesh",
        "description": "Chappal Bazaar is known for its vibrant collection of handmade leather slippers and shoes. If you’re in the mood for shopping and want to pick up a unique souvenir, this market is the perfect spot to explore."
    },
    {
        "title": "Patal Pani Waterfall",
        "location": "Near Indore, Madhya Pradesh",
        "description": "Located on the outskirts of Indore, Patal Pani Waterfall is a picturesque and tranquil spot for nature lovers. The waterfall is surrounded by lush greenery, making it a great place to relax and enjoy the scenic beauty."
    },
    {
        "title": "Ralamandal Wildlife Sanctuary",
        "location": "Near Indore, Madhya Pradesh",
        "description": "Ralamandal Wildlife Sanctuary is located on the outskirts of Indore and is home to various species of flora and fauna. The sanctuary is perfect for wildlife enthusiasts and those who enjoy nature walks and birdwatching."
    },
    {
        "title": "Holkar Cricket Stadium",
        "location": "Indore, Madhya Pradesh",
        "description": "Holkar Cricket Stadium, one of the finest cricket grounds in India, is the home ground for Indore’s cricket team. If you’re a sports fan, catching a match here or even visiting the stadium is a great way to experience the local sports culture."
    }
],


"services": [
    {
        "name": "Pune to Indore Taxi Service",
        "description": "Morya Cab provides reliable and comfortable taxi services from Pune to Indore. Whether you’re traveling for business or leisure, we ensure a smooth and stress-free ride with professional drivers and well-maintained vehicles."
    },
    {
        "name": "Pune to Indore Cab Booking",
        "description": "Booking your Pune to Indore cab with Morya Cab is quick and easy. You can book online or by calling us, ensuring a seamless experience from the moment you reserve your ride."
    },
    {
        "name": "Pune to Indore Car Rental",
        "description": "Morya Cab offers flexible car rental options for your Pune to Indore journey. Choose from our wide range of vehicles, including chauffeur-driven options, to make your trip comfortable and convenient."
    },
    {
        "name": "Pune to Indore One-Way Taxi",
        "description": "For a one-way trip from Pune to Indore, Morya Cab offers affordable one-way taxi services. Travel directly to your destination without any detours, enjoying a hassle-free and efficient ride."
    },
    {
        "name": "Pune to Indore Round Trip Cabs",
        "description": "If you need a round-trip taxi service from Pune to Indore, Morya Cab offers flexible options to fit your schedule. Enjoy the convenience of a return journey in comfort and style."
    },
    {
        "name": "Pune to Indore Luxury Taxi",
        "description": "For a premium travel experience, Morya Cab provides luxury taxi services from Pune to Indore. Enjoy extra comfort, high-end amenities, and a relaxing ride with our luxury vehicles."
    },
    {
        "name": "Pune to Indore Cab Charges",
        "description": "Morya Cab offers transparent and competitive cab charges for your Pune to Indore journey. We believe in clear pricing with no hidden fees, ensuring a fair rate for your trip."
    },
    {
        "name": "Pune to Indore Private Taxi",
        "description": "Travel in comfort and privacy with Morya Cab’s private taxi service from Pune to Indore. Enjoy a dedicated vehicle and driver, ensuring a personalized experience for your journey."
    },
    {
        "name": "Pune to Indore Shared Taxi",
        "description": "For a more budget-friendly option, Morya Cab offers shared taxi services from Pune to Indore. Share your ride with others while still enjoying a safe and comfortable travel experience."
    },
    {
        "name": "Pune to Indore Taxi Price",
        "description": "Morya Cab provides competitive taxi prices for your Pune to Indore trip. Our prices are designed to offer value without compromising on comfort or safety."
    },
    {
        "name": "Pune to Indore Taxi Booking",
        "description": "Booking your Pune to Indore taxi with Morya Cab is easy and convenient. Whether you prefer booking online or over the phone, we offer a simple and efficient process to reserve your ride."
    },
    {
        "name": "Pune to Indore Cab Service",
        "description": "Morya Cab offers reliable and efficient taxi services for your Pune to Indore journey. Our professional drivers and well-maintained vehicles ensure that your trip is comfortable, timely, and hassle-free."
    },
    {
        "name": "Pune to Indore Travel by Taxi",
        "description": "Traveling from Pune to Indore by taxi with Morya Cab guarantees a smooth and enjoyable ride. Our drivers know the best routes to ensure you reach your destination on time, relaxed, and in comfort."
    },
    {
        "name": "Pune to Indore Cab Cost",
        "description": "Morya Cab offers a clear breakdown of the cost for your Pune to Indore cab service. We provide competitive rates without any hidden fees, ensuring transparency throughout your journey."
    },
    {
        "name": "Pune to Indore Drop Taxi",
        "description": "Morya Cab provides direct drop taxi services for your Pune to Indore trip. You can enjoy a smooth and quick ride, with no unnecessary stops along the way."
    },
    {
        "name": "Pune to Indore Taxi Contact Information",
        "description": "For prompt and reliable Pune to Indore taxi services, contact Morya Cab at +91 9371304510. We ensure a comfortable and stress-free journey. Book your Pune to Indore taxi today!"
    }
],


tableData: [
    ["Pune to Indore Taxi Service", "-Pune to Indore Cab Booking"],
    ["Pune to Indore Car Rental", "-Pune to Indore One-Way Taxi"],
    ["Pune to Indore Round Trip Cabs", "-Pune to Indore Luxury Taxi"],
    ["Pune to Indore Cab Charges", "-Pune to Indore Private Taxi"],
    ["Pune to Indore Shared Taxi", "-Pune to Indore Taxi Price"],
    ["Pune to Indore Taxi Booking", "-Pune to Indore Cab Service"],
    ["Pune to Indore Travel by Taxi", "-Pune to Indore Cab Cost"],
    ["Pune to Indore Drop Taxi", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we value your time. Whether you're traveling to Indore for business, leisure, or personal reasons, we ensure punctual pickups and drop-offs, providing you with a seamless and on-time travel experience."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a variety of well-maintained, comfortable vehicles for your journey from Pune to Indore. Enjoy ample legroom, air conditioning, and comfortable seating, making your trip relaxing and enjoyable."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are well-trained, experienced, and skilled in navigating long-distance routes like Pune to Indore. They ensure a smooth, safe, and efficient journey while providing you with professional assistance throughout the trip."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing with no hidden charges. We believe in transparent pricing, ensuring that you get the best value for your money without any surprises along the way."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All our vehicles are equipped with modern safety features, including airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols, ensuring a safe and worry-free journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether it’s an early morning or late-night journey, Morya Cab is available 24/7 to accommodate your travel needs. Our customer service team is always ready to assist you with your bookings at any time of the day or night."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a Pune to Indore taxi with Morya Cab is quick and easy. You can book online through our website or mobile app, or contact our customer service team for any assistance you may need."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages to suit your needs. Whether you need specific stops, detours, or have special requests, we will tailor your Pune to Indore journey to meet your preferences."
    }
]







    }


    const faqData = [
        {
          question: "How can I book a Pune to Indore taxi with Morya Cab?",
          answer: "Booking is easy! You can book a taxi online via our website or mobile app, or you can contact our customer service team for personalized assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced in handling long-distance trips like Pune to Indore, ensuring a safe and smooth journey throughout."
        },
        {
          question: "What types of vehicles are available for Pune to Indore travel?",
          answer: "We offer a range of well-maintained vehicles including sedans, SUVs, and premium cars, all designed for comfort and long-distance travel."
        },
        {
          question: "How do I pay for my Pune to Indore taxi rental?",
          answer: "We accept a variety of payment options, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Indore?",
          answer: "Yes, we offer round-trip services. Simply provide your return details when booking, and we’ll handle the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency about the pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Indore?",
          answer: "Yes, we offer sightseeing services in Indore. Visit famous spots like Rajwada Palace, Lal Baag Palace, and Kanch Mandir with a trusted driver at your service."
        },
        {
          question: "What is the luggage allowance for a Pune to Indore taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have additional luggage or special requirements, please let us know during the booking process, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Indore?",
          answer: "Yes, we offer corporate travel services for business trips to Indore. Whether it’s for meetings, conferences, or team outings, we can tailor your travel package to meet your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Indore travel?",
          answer: "Morya Cab offers reliable, professional, and affordable taxi services with well-maintained vehicles and experienced drivers. We ensure a safe, comfortable, and stress-free journey to Indore."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Anil Tiwari',
          role: 'Business Traveler',
          review: 'We used Morya Cab for a business trip to Indore, and the service was excellent. The driver was professional, the car was clean and comfortable, and we reached our destination on time. Highly recommend their services!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Suman Agarwal',
          role: 'Family Traveler',
          review: 'Our family traveled from Pune to Indore using Morya Cab. The vehicle was spacious, and the driver was friendly and helpful. We had a very comfortable and enjoyable journey. We’ll definitely use Morya Cab again!',
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
        "@type": "LocalBusiness",
        "name": "Morya Cab Services",
        "description": "Book your Pune to Indore taxi with Morya Cab. Affordable, reliable, and convenient one-way and round-trip taxi services. Call +91 9371304510 for bookings!",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9371304510",
        "url": "https://moryacab.com/",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-to-indore-taxi.jpg",
          "https://moryacab.com/img/pune-to-indore-cab-service.jpg"
        ],
        "priceRange": "₹5000 - ₹9500",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-indore-taxi-service",
          "priceCurrency": "INR",
          "price": 7000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "reviewCount": 120
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rahul Kumar"
            },
            "datePublished": "2024-05-15",
            "reviewBody": "Wonderful experience! The journey from Pune to Indore was smooth, and the driver was very polite. The vehicle was clean and comfortable."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sneha Deshmukh"
            },
            "datePublished": "2024-08-22",
            "reviewBody": "Booking was simple, and the service was excellent. The trip was comfortable, and we reached Indore on time. Highly recommend it!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Indore Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-indore-taxi-service"
        },
        "keywords": "Pune to Indore Taxi Service, Pune to Indore Cab Booking, Pune to Indore Car Rental, Pune to Indore One-Way Taxi, Pune to Indore Round Trip Cabs, Pune to Indore Luxury Taxi, Pune to Indore Cab Charges, Pune to Indore Private Taxi, Pune to Indore Shared Taxi, Pune to Indore Taxi Price, Pune to Indore Taxi Booking, Pune to Indore Cab Service, Pune to Indore Travel by Taxi, Pune to Indore Cab Cost, Pune to Indore Drop Taxi"
      };



    return (
        <div>
            <UsePageTracking/>
 <Helmet>
        <title>Pune to Indore Taxi | Affordable & Reliable Taxi Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Pune to Indore taxi with Morya Cab. Affordable, reliable, and convenient one-way and round-trip taxi services. Call +91 9371304510."
        />
        <meta name="keywords" content="Pune to Indore taxi, Pune to Indore cab service, Pune to Indore taxi booking, Pune to Indore one-way taxi, Pune to Indore round trip, Pune to Indore car rental, Pune to Indore taxi fare, Pune to Indore private taxi, Pune to Indore shared taxi" />
        <meta property="og:title" content="Pune to Indore Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Pune to Indore taxi with Morya Cab. Affordable, reliable, and convenient one-way and round-trip taxi services." />
        <meta property="og:url" content="https://moryacab.com/pune-to-indore-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-indore-taxi.jpg" />
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
                            <img src='/images/keyword/15.jpg' alt='img' />
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
                                    border: '3px dotted #1CA8CB',
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
                                                    Gat no. 763 Jai Ganesh Niwas Flat no. 1 Lokhande Wasti Chimbali Pune, Maharashtra 412105
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

export default Punetoindore;