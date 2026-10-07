
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Vasaitopunetaxiservice() {



    const cardData =
    {
        keyword: 'Vasai to Pune Taxi',
        heading: 'Morya Cabs: Vasai to Pune Taxi ',
        headingDescription: 'Morya Cabs offers safe, reliable, and affordable Vasai to Pune taxi services tailored for business trips, family outings, or weekend getaways. Our professional drivers and well-maintained vehicles ensure you enjoy a smooth, comfortable ride every time. The distance from Vasai to Pune is approximately 170 km, and the road journey typically takes 3.5 to 4.5 hours, depending on traffic. We offer multiple taxi options such as Hatchback, Sedan, Ertiga, and Innova Crysta—ensuring you get the perfect cab for your travel needs. Whether you are booking a one-way Vasai to Pune cab, planning a round trip, or require a customized travel package, Morya Cabs is your trusted travel partner.',

        top: 'Top Places to Visit in Pune with Morya Cabs',

 "topPlaces": [
    {
        "title": "Shaniwar Wada",
        "location": "Pune, Maharashtra",
        "description": "Shaniwar Wada, a historic fort, is a symbol of Pune's rich Maratha heritage. It was once the seat of the Peshwa rulers and is famous for its beautiful architecture and fascinating history. The fort is a must-visit for history buffs and those interested in the legacy of the Maratha Empire."
    },
    {
        "title": "Aga Khan Palace",
        "location": "Pune, Maharashtra",
        "description": "A beautiful blend of history and architecture, Aga Khan Palace holds historical significance as a location where Mahatma Gandhi and his followers were imprisoned during India's freedom struggle. The palace is surrounded by lush gardens and offers a peaceful setting for visitors."
    },
    {
        "title": "Sinhagad Fort",
        "location": "Near Pune, Maharashtra",
        "description": "A popular trekking destination, Sinhagad Fort is situated on a hilltop and offers breathtaking views of the surrounding region. With its historical importance and scenic beauty, it’s a perfect spot for adventurers and nature lovers."
    },
    {
        "title": "Osho Ashram",
        "location": "Pune, Maharashtra",
        "description": "Known as one of the most serene meditation centers, Osho Ashram offers spiritual retreats and meditation courses. The tranquil environment makes it an ideal place to rejuvenate the mind and soul through various meditative practices."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "location": "Pune, Maharashtra",
        "description": "An ancient rock-cut temple dedicated to Lord Shiva, Pataleshwar Cave Temple is known for its historical and architectural significance. The temple offers a peaceful atmosphere and is perfect for spiritual seekers."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "location": "Pune, Maharashtra",
        "description": "The Raja Dinkar Kelkar Museum is an excellent place to explore India’s rich cultural heritage through its extensive collection of artifacts. From traditional instruments to ancient sculptures, the museum offers a fascinating glimpse into the country's art and history."
    },
    {
        "title": "Katraj Snake Park",
        "location": "Pune, Maharashtra",
        "description": "Katraj Snake Park is a fascinating wildlife park featuring various species of snakes, reptiles, and other animals. The park provides educational tours and is an interesting place for nature lovers and families."
    },
    {
        "title": "Pune-Okayama Friendship Garden",
        "location": "Pune, Maharashtra",
        "description": "The Pune-Okayama Friendship Garden, also known as the Pu La Deshpande Garden, is a beautiful park inspired by Japanese design. With serene walking paths, koi ponds, and lush greenery, it’s a perfect place for relaxation and nature walks."
    },
    {
        "title": "Shreemant Dagdusheth Halwai Ganpati Temple",
        "location": "Pune, Maharashtra",
        "description": "The Shreemant Dagdusheth Halwai Ganpati Temple is one of Pune’s most revered religious sites. It’s dedicated to Lord Ganesha and is famous for its grand Ganesh idol. The temple attracts thousands of visitors, especially during the Ganesh Chaturthi festival."
    },
    {
        "title": "Fergusson College",
        "location": "Pune, Maharashtra",
        "description": "Known for its colonial-era architecture and academic excellence, Fergusson College is one of Pune’s most prestigious educational institutions. It also features a picturesque campus, making it an interesting stop for visitors who appreciate history and architecture."
    }
],


"services": [
    {
        "name": "Vasai to Pune Taxi Service",
        "description": "Morya Cab offers reliable and comfortable taxi services for your journey from Vasai to Pune. With experienced drivers and well-maintained vehicles, we ensure a smooth and enjoyable ride for all our customers."
    },
    {
        "name": "Vasai to Pune One Way Taxi",
        "description": "Morya Cab provides convenient one-way taxi services from Vasai to Pune. Skip the hassle of round trips and travel directly to your destination with a comfortable, affordable ride."
    },
    {
        "name": "Vasai to Pune Cab Fare",
        "description": "We offer competitive and transparent pricing for your Vasai to Pune journey. Morya Cab ensures fair and clear fare quotes, with no hidden charges, for a stress-free experience."
    },
    {
        "name": "Vasai to Pune Taxi",
        "description": "For a comfortable, hassle-free journey, choose Morya Cab’s taxi service from Vasai to Pune. Our fleet of well-maintained vehicles and professional drivers will make your travel experience smooth and enjoyable."
    },
    {
        "name": "Vasai to Pune Innova",
        "description": "Traveling in a group or with family? Book an Innova taxi for your Vasai to Pune trip. The Innova offers extra space, comfort, and a luxurious ride, perfect for longer journeys."
    },
    {
        "name": "Vasai to Pune Ertiga",
        "description": "The Ertiga is an excellent option for those traveling with a small group or family. Morya Cab offers Ertiga taxis for your Vasai to Pune journey, providing a spacious and comfortable ride."
    },
    {
        "name": "Vasai to Pune Sedan",
        "description": "For a more compact and efficient ride, opt for a sedan taxi from Morya Cab for your Vasai to Pune trip. Enjoy a private, comfortable journey with our well-maintained sedans."
    },
    {
        "name": "Taxi Service from Vasai to Pune",
        "description": "Morya Cab offers affordable and reliable taxi services from Vasai to Pune, ensuring timely and smooth travel for all our customers."
    },
    {
        "name": "Mumbai to Pune Vasai Taxi",
        "description": "Traveling from Vasai to Pune is made easy with Morya Cab’s taxi services. Whether you're starting your journey from Vasai or Mumbai, we have the right vehicle to make your ride comfortable."
    },
    {
        "name": "Vasai to Pune Online Booking",
        "description": "Booking your Vasai to Pune taxi with Morya Cab is simple. Use our online booking platform for a quick and easy reservation process, ensuring a seamless ride."
    },
    {
        "name": "Vasai to Pune Cab Charges",
        "description": "Morya Cab offers clear and affordable cab charges for your Vasai to Pune journey. No hidden fees, just transparent pricing for a comfortable travel experience."
    },
    {
        "name": "Cab Booking from Vasai to Pune",
        "description": "Book your cab from Vasai to Pune with Morya Cab for a hassle-free journey. Choose from our variety of vehicles and flexible booking options to suit your travel needs."
    },
    {
        "name": "Vasai to Pune Round Trip Taxi",
        "description": "Morya Cab offers round-trip taxi services for your Vasai to Pune journey. We ensure you have a stress-free and flexible experience, with timely pickups and drop-offs."
    },
    {
        "name": "Taxi from Vasai to Pune",
        "description": "Morya Cab provides reliable taxi services from Vasai to Pune, ensuring you travel comfortably and on time. Our fleet includes a variety of vehicles to meet your specific travel needs."
    },
    {
        "name": "Affordable Vasai to Pune Taxi",
        "description": "If you're looking for an affordable taxi ride from Vasai to Pune, Morya Cab is the perfect choice. We offer competitive pricing without compromising on comfort or safety."
    },
    {
        "name": "Vasai to Pune Taxi Contact Information",
        "description": "For quick and easy booking, contact Morya Cab at +91 9371304510. Our reliable and professional service will ensure your journey from Vasai to Pune is comfortable, safe, and affordable. Book your taxi today!"
    }
],


tableData: [
    ["Vasai to Pune Taxi Service", "-Vasai to Pune One Way Taxi"],
    ["Vasai to Pune Cab Fare", "-Vasai to Pune Taxi"],
    ["Vasai to Pune Innova", "-Vasai to Pune Ertiga"],
    ["Vasai to Pune Sedan", "-Taxi Service from Vasai to Pune"],
    ["Mumbai to Pune Vasai Taxi", "-Vasai to Pune Online Booking"],
    ["Vasai to Pune Cab Charges", "-Cab Booking from Vasai to Pune"],
    ["Vasai to Pune Round Trip Taxi", "-Taxi from Vasai to Pune"],
    ["Affordable Vasai to Pune Taxi", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we ensure your journey from Vasai to Pune is always on time. Whether it's for a business trip, family outing, or leisure travel, we guarantee punctual pickups and timely drop-offs to ensure you have a smooth and stress-free ride."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a fleet of comfortable and well-maintained vehicles for your journey from Vasai to Pune. With air conditioning, ample legroom, and comfortable seating, our vehicles are designed to make your long-distance travel as comfortable as possible."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced, well-trained, and skilled in handling long-distance travel. They are familiar with the best routes for your Vasai to Pune journey, ensuring a safe, smooth, and efficient trip. You can rely on their professionalism and expertise."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab provides affordable and transparent pricing for your Vasai to Pune taxi service. We believe in no hidden charges, so you'll always know what to expect when it comes to the cost of your trip."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly maintained and equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure a safe, secure, and pleasant journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need a morning ride or a late-night return, Morya Cab is available 24/7 to accommodate your travel needs. Our customer service team is always ready to assist you with your bookings at any time of the day or night."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Vasai to Pune taxi is simple and hassle-free. You can book online through our website or mobile app, or you can contact our customer service team for personalized assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages for your journey from Vasai to Pune. If you have special requests, such as detours or specific stops along the way, we can tailor your trip to suit your preferences."
    }
]










    }


    const faqData = [
        {
          question: "How can I book a Vasai to Pune taxi with Morya Cab?",
          answer: "Booking your taxi is easy! You can book online through our website or mobile app, or simply contact our customer service team for assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are experienced and well-trained for long-distance travel. They ensure a smooth, safe, and comfortable ride from Vasai to Pune."
        },
        {
          question: "What types of vehicles are available for Vasai to Pune travel?",
          answer: "We offer a range of well-maintained vehicles, including sedans, SUVs, and premium cars, all designed to provide comfort and convenience during long journeys."
        },
        {
          question: "How do I pay for my Vasai to Pune taxi rental?",
          answer: "We accept various payment options, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Vasai to Pune?",
          answer: "Yes, we offer round-trip services. Just provide your return details when booking, and we’ll take care of the rest for you."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency regarding the pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Pune?",
          answer: "Yes, we offer sightseeing services in Pune. You can visit popular tourist spots like Shaniwar Wada, Aga Khan Palace, and Osho Ashram with a trusted driver to guide you."
        },
        {
          question: "What is the luggage allowance for a Vasai to Pune taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or specific requirements, please let us know when booking, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Pune?",
          answer: "Yes, we provide corporate travel services for business trips to Pune. Whether you need transportation for meetings, conferences, or company outings, we can customize the travel package to suit your needs."
        },
        {
          question: "Why should I choose Morya Cab for Vasai to Pune travel?",
          answer: "Morya Cab offers reliable, professional, and affordable taxi services. With well-maintained vehicles, experienced drivers, and a focus on safety and comfort, we guarantee a smooth and enjoyable journey for all your long-distance travel needs."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rajesh Kapoor',
          role: 'Business Traveler',
          review: 'We used Morya Cab for our trip from Vasai to Pune, and it was an excellent experience. The driver was professional, the vehicle was comfortable, and the ride was smooth. Highly recommended!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Shalini Mehta',
          role: 'Family Traveler',
          review: 'Our family traveled from Vasai to Pune using Morya Cab. The car was spacious, clean, and comfortable. The driver was friendly and made the trip enjoyable. We’ll definitely use their services again!',
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
        "description": "Book your Vasai to Pune taxi with Morya Cab. Affordable and reliable one-way taxi, drop taxi, and car hire services. Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/vasai-to-pune-taxi.jpg",
          "https://moryacab.com/img/vasai-to-pune-cab-service.jpg"
        ],
        "priceRange": "₹2000 - ₹4000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/vasai-to-pune-taxi-service",
          "priceCurrency": "INR",
          "price": 2500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "reviewCount": 85
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anil Deshmukh"
            },
            "datePublished": "2024-07-14",
            "reviewBody": "Affordable and punctual! The ride from Vasai to Pune was smooth and the driver was courteous. Highly recommend Morya Cab for anyone traveling this route."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sanjay Kulkarni"
            },
            "datePublished": "2024-09-05",
            "reviewBody": "Great service! The taxi was comfortable and the driver followed all safety protocols. I will definitely book again for my next trip to Pune."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Vasai to Pune Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.3096,
            "longitude": 72.9678
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/vasai-to-pune-taxi-service"
        },
        "keywords": "vasai to pune taxi service, vasai to pune one way taxi, vasai to pune cab fare, vasai to pune taxi, vasai to pune innova, vasai to pune ertiga, vasai to pune sedan, taxi service from vasai to pune, mumbai to pune vasai taxi, vasai to pune online booking, vasai to pune cab charges, cab booking from vasai to pune, vasai to pune round trip taxi, taxi from vasai to pune, affordable vasai to pune taxi"
      };

    return (
        <div>
            <UsePageTracking/>
<Helmet>
        <title>Vasai to Pune Taxi | Affordable & Reliable Taxi Service | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Vasai to Pune taxi with Morya Cab. Affordable and reliable one-way taxi, drop taxi, and car hire services. Call +91 9371304510."
        />
        <meta name="keywords" content="vasai to pune taxi service, vasai to pune cab, one way taxi, affordable taxi service" />
        <meta property="og:title" content="Vasai to Pune Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Vasai to Pune taxi with Morya Cab. Affordable and reliable one-way taxi, drop taxi, and car hire services." />
        <meta property="og:url" content="https://moryacab.com/vasai-to-pune-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/vasai-to-pune-taxi.jpg" />
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
                            <img src='/images/keyword/18.jpg' alt='img' />
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

export default Vasaitopunetaxiservice;