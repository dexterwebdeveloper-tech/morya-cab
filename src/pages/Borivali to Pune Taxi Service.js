
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Borivalitopunetaxi() {



    const cardData =
    {
        keyword: 'Borivali to Pune Taxi  ',
        heading: 'Morya Cabs: Borivali to Pune Taxi  ',
        headingDescription: 'Morya Cabs provides convenient, reliable, and affordable taxi services from Borivali to Pune. Whether you are traveling for business, leisure, or a weekend getaway, we ensure a smooth, comfortable, and hassle-free journey with our professional drivers and well-maintained vehicles. The distance between Borivali and Pune is approximately 160 km, and the journey takes around 3.5 to 4.5 hours by road. Enjoy the scenic drive and travel with peace of mind with Morya Cabs.',

        top: 'Top Places to Visit in Pune with Morya Cabs',

 "topPlaces": [
    {
        "title": "Shaniwar Wada",
        "location": "Pune, Maharashtra",
        "description": "Shaniwar Wada is an iconic historical fortification in the heart of Pune. Known for its grand architecture and rich history, the fort was the seat of the Peshwa rulers. Visitors can explore the ruins, the beautiful gardens, and learn about the fort's role in shaping Pune’s history."
    },
    {
        "title": "Aga Khan Palace",
        "location": "Pune, Maharashtra",
        "description": "Aga Khan Palace is a majestic monument known for its historical significance, especially related to the Indian freedom struggle. It is also the place where Mahatma Gandhi and his wife were imprisoned during the Quit India Movement. The palace offers lush gardens and a tranquil ambiance, making it a great spot for history buffs and peace seekers alike."
    },
    {
        "title": "Sinhagad Fort",
        "location": "Near Pune, Maharashtra",
        "description": "Sinhagad Fort, located on a hilltop around 30 km from Pune, is a popular spot for trekking and offers stunning panoramic views of the surrounding landscape. The fort has a rich history and is known for its role in the Maratha Empire. It’s an ideal destination for nature lovers and adventure enthusiasts."
    },
    {
        "title": "Osho Ashram",
        "location": "Pune, Maharashtra",
        "description": "Osho Ashram, also known as the Osho International Meditation Resort, is a serene and tranquil place for meditation, self-reflection, and spiritual growth. The ashram attracts visitors from around the world who seek peace and relaxation through various meditative practices."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "location": "Pune, Maharashtra",
        "description": "The Pataleshwar Cave Temple is an ancient rock-cut temple dedicated to Lord Shiva, located in the heart of Pune. The temple, which dates back to the 8th century, features impressive sculptures and offers a peaceful atmosphere for devotees and visitors alike."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "location": "Pune, Maharashtra",
        "description": "Raja Dinkar Kelkar Museum houses a vast collection of artifacts, including traditional Indian sculptures, musical instruments, and paintings. The museum provides a fascinating insight into the rich cultural and artistic heritage of India and is a must-visit for history and art lovers."
    },
    {
        "title": "Katraj Snake Park",
        "location": "Pune, Maharashtra",
        "description": "Katraj Snake Park is a popular destination for nature enthusiasts, housing a variety of snakes and other reptiles. The park also includes a small zoo with different species of animals and birds, making it an ideal stop for families and children."
    },
    {
        "title": "Pune-Okayama Friendship Garden",
        "location": "Pune, Maharashtra",
        "description": "The Pune-Okayama Friendship Garden, also known as the Pu La Deshpande Garden, is a beautifully landscaped park inspired by Japanese garden design. The park is perfect for morning walks, picnics, and relaxation amidst lush greenery and serene surroundings."
    },
    {
        "title": "Shreemant Dagdusheth Halwai Ganpati Temple",
        "location": "Pune, Maharashtra",
        "description": "Shreemant Dagdusheth Halwai Ganpati Temple is one of the most famous temples in Pune. Dedicated to Lord Ganesha, the temple is renowned for its beautiful idol of Ganesha and its spiritual significance. The temple draws devotees from across the country, especially during the Ganesh Chaturthi festival."
    },
    {
        "title": "Fergusson College",
        "location": "Pune, Maharashtra",
        "description": "Fergusson College is one of Pune's most prestigious educational institutions and a significant historical landmark. The college campus is known for its colonial architecture and beautiful surroundings. It also holds cultural events and programs, making it a lively spot for students and visitors."
    }
],


"services": [
    {
        "name": "Borivali to Pune Taxi Service",
        "description": "Morya Cab offers top-notch taxi services from Borivali to Pune, ensuring a comfortable and safe journey. Whether you're traveling for business or leisure, our professional drivers and well-maintained vehicles will make your trip stress-free."
    },
    {
        "name": "Borivali to Pune Cab Service",
        "description": "Experience reliable and punctual cab services with Morya Cab from Borivali to Pune. Our diverse fleet of vehicles, including luxury options, ensures that you have the perfect ride for your journey."
    },
    {
        "name": "Borivali to Pune One Way Taxi",
        "description": "For a one-way journey from Borivali to Pune, Morya Cab provides convenient one-way taxi services. Travel directly to your destination without any detours or added costs."
    },
    {
        "name": "Borivali to Pune Taxi Fare",
        "description": "Morya Cab offers transparent and competitive fare pricing for your Borivali to Pune taxi service. We ensure you get the best value for your money without compromising on comfort and safety."
    },
    {
        "name": "Borivali to Pune Innova",
        "description": "For a comfortable and spacious ride, book an Innova taxi for your Borivali to Pune trip. The Innova offers ample space, perfect for family or group travel."
    },
    {
        "name": "Borivali to Pune Ertiga",
        "description": "Traveling with a small group or family? Choose the Ertiga for your Borivali to Pune journey. It offers a perfect balance of space, comfort, and efficiency."
    },
    {
        "name": "Borivali to Pune Sedan",
        "description": "For a more compact and efficient ride, Morya Cab offers sedan taxis for your Borivali to Pune trip. Enjoy a private, comfortable journey with our well-maintained sedans."
    },
    {
        "name": "Borivali to Pune Car Hire",
        "description": "Morya Cab offers flexible car hire services for your Borivali to Pune trip. Choose from a variety of vehicles to ensure the most convenient and enjoyable journey."
    },
    {
        "name": "Taxi Service from Borivali to Pune",
        "description": "Traveling from Borivali to Pune has never been easier with Morya Cab’s reliable taxi services. Our drivers are experienced, and we guarantee a smooth, timely ride to your destination."
    },
    {
        "name": "Mumbai to Pune Borivali Taxi",
        "description": "Morya Cab also provides taxi services from Borivali to Pune with options for every budget and preference. Book a ride for a comfortable journey from Borivali to Pune, starting from Mumbai."
    },
    {
        "name": "Cab Service in Borivali",
        "description": "Morya Cab offers affordable and reliable cab services in Borivali, including travel to Pune. Our fleet of well-maintained vehicles and professional drivers ensure you have a pleasant journey."
    },
    {
        "name": "Borivali to Pune Round Trip",
        "description": "For a round-trip journey from Borivali to Pune, Morya Cab provides convenient and affordable services. Our flexible scheduling allows you to customize your trip according to your needs."
    },
    {
        "name": "Borivali to Pune Airport Taxi",
        "description": "Morya Cab provides direct airport taxi services for travelers going from Borivali to Pune. We ensure timely arrivals and departures with a stress-free and comfortable ride to the airport."
    },
    {
        "name": "Borivali to Pune by Cab",
        "description": "Make your trip from Borivali to Pune convenient and easy with Morya Cab. We offer reliable, comfortable, and efficient taxi services for this popular route."
    },
    {
        "name": "Borivali to Pune One Way Drop",
        "description": "Morya Cab offers a one-way drop service for your trip from Borivali to Pune. Skip the hassle of additional charges or detours and enjoy a direct ride to your destination."
    },
    {
        "name": "Borivali to Pune Taxi Contact Information",
        "description": "For fast, reliable, and affordable taxi services from Borivali to Pune, contact Morya Cab at +91 9371304510. We promise a comfortable and hassle-free journey for every traveler. Book your Borivali to Pune taxi today!"
    }
],


tableData: [
    ["Borivali to Pune Taxi Service", "-Borivali to Pune Cab Service"],
    ["Borivali to Pune One Way Taxi", "-Borivali to Pune Taxi Fare"],
    ["Borivali to Pune Innova", "-Borivali to Pune Ertiga"],
    ["Borivali to Pune Sedan", "-Borivali to Pune Car Hire"],
    ["Taxi Service from Borivali to Pune", "-Mumbai to Pune Borivali Taxi"],
    ["Cab Service in Borivali", "-Borivali to Pune Round Trip"],
    ["Borivali to Pune Airport Taxi", "-Borivali to Pune by Cab"],
    ["Borivali to Pune One Way Drop", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we ensure that your journey from Borivali to Pune is always on time. Whether you're heading for business, a weekend getaway, or a family trip, we guarantee punctual pickups and smooth drop-offs, making your travel hassle-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet includes spacious, air-conditioned vehicles that are perfect for long-distance travel. Enjoy ample legroom, comfortable seating, and a relaxing environment throughout your journey from Borivali to Pune."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced and skilled in handling long-distance routes like Borivali to Pune. They are well-versed with the best routes, ensuring a safe, smooth, and efficient journey. You can trust them to provide excellent service from start to finish."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for the Borivali to Pune taxi service. You won’t have to worry about hidden charges or surprises — we ensure you get great value for your money with clear pricing."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly maintained and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols, ensuring your journey is secure and stress-free."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available 24/7, ready to cater to your travel needs at any time of the day or night. Whether you need an early morning ride or a late-night journey, we are just a call away."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Borivali to Pune taxi is simple and quick. You can book online via our website or mobile app, or if you prefer, you can reach out to our customer service team for any assistance you need."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages to suit your specific needs. Whether you're looking for a direct journey or prefer to make stops along the way, we can tailor your trip from Borivali to Pune according to your preferences."
    }
]









    }


    const faqData = [
        {
          question: "How can I book a Borivali to Pune taxi with Morya Cab?",
          answer: "You can book your taxi online via our website or mobile app, or simply contact our customer service team for personalized assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced in handling long journeys like Borivali to Pune. They ensure a smooth, safe, and comfortable ride."
        },
        {
          question: "What types of vehicles are available for Borivali to Pune travel?",
          answer: "We offer a variety of vehicles including sedans, SUVs, and luxury cars, all of which are well-maintained and equipped for comfort during your journey."
        },
        {
          question: "How do I pay for my Borivali to Pune taxi rental?",
          answer: "We accept multiple payment options including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Borivali to Pune?",
          answer: "Yes, we offer round-trip services. Just provide your return details when booking, and we’ll handle the rest for you."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you in advance, ensuring complete transparency about your pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Pune?",
          answer: "Yes, we offer sightseeing services in Pune. You can visit popular spots like Shaniwar Wada, Aga Khan Palace, and the Osho Ashram with a trusted driver."
        },
        {
          question: "What is the luggage allowance for a Borivali to Pune taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, please let us know during the booking process, and we will make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Pune?",
          answer: "Yes, we offer corporate travel services for business trips to Pune. We can tailor your travel package to meet the needs of your company, including meetings, conferences, and corporate events."
        },
        {
          question: "Why should I choose Morya Cab for Borivali to Pune travel?",
          answer: "Morya Cab provides reliable, safe, and affordable taxi services with well-maintained vehicles and professional drivers. We ensure a comfortable, secure, and stress-free journey for all your long-distance travel needs."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rahul Desai',
          role: 'Business Traveler',
          review: 'I had to travel from Borivali to Pune for a business meeting, and Morya Cab made it so easy and comfortable. The driver was punctual, the vehicle was clean and spacious, and the trip was smooth. Highly recommend their services!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Nisha Patil',
          role: 'Family Traveler',
          review: 'Our family used Morya Cab for a trip from Borivali to Pune. The car was spacious, and the driver was friendly and professional. It was a comfortable and enjoyable journey. We will definitely book again.',
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
        "description": "Book your Borivali to Pune taxi with Morya Cab. Affordable and reliable one-way taxi, drop taxi, and car hire services. Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/borivali-to-pune-taxi.jpg",
          "https://moryacab.com/img/borivali-to-pune-cab-service.jpg"
        ],
        "priceRange": "₹2000 - ₹4000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/borivali-to-pune-taxi-service",
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
            "reviewBody": "Affordable and punctual! The ride from Borivali to Pune was smooth and the driver was courteous. Highly recommend Morya Cab for anyone traveling this route."
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
          "name": "Borivali to Pune Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.3107,
            "longitude": 72.8506
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/borivali-to-pune-taxi-service"
        },
        "keywords": "borivali to pune taxi service, borivali to pune cab service, borivali to pune one way taxi, borivali to pune taxi fare, borivali to pune innova, borivali to pune ertiga, borivali to pune sedan, borivali to pune car hire, taxi service from borivali to pune, mumbai to pune borivali taxi, cab service in borivali, borivali to pune round trip, borivali to pune airport taxi, borivali to pune by cab, borivali to pune one way drop"
      };
    

    return (
        <div>
            <UsePageTracking/>
 <Helmet>
        <title>Borivali to Pune Taxi | Affordable & Reliable Taxi Service | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Borivali to Pune taxi with Morya Cab. Affordable and reliable one-way taxi, drop taxi, and car hire services. Call +91 9371304510."
        />
        <meta name="keywords" content="borivali to pune taxi service, borivali to pune cab service, one way taxi, affordable taxi service" />
        <meta property="og:title" content="Borivali to Pune Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Borivali to Pune taxi with Morya Cab. Affordable and reliable one-way taxi, drop taxi, and car hire services." />
        <meta property="og:url" content="https://moryacab.com/borivali-to-pune-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/borivali-to-pune-taxi.jpg" />
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
                            <img src='/images/keyword/17.jpg' alt='img' />
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

export default Borivalitopunetaxi;