
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Dombivlitopunetaxi() {



    const cardData =
    {
        keyword: 'Dombivli to Pune Taxi ',
        heading: 'Morya Cabs: Dombivli to Pune Taxi ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Dombivli to Pune. Whether you are traveling for business, leisure, or a family visit, we ensure a smooth and pleasant journey. Our fleet of well-maintained vehicles and experienced drivers provide a hassle-free experience. The distance from Dombivli to Pune is approximately 150 km, and the journey usually takes around 3 to 4 hours by road. With Morya Cabs, you can enjoy a relaxing and safe trip to Pune.',

        top: 'Top Places to Visit in Pune with Morya Cabs',

 "topPlaces": [
    {
        "title": "Shaniwar Wada",
        "location": "Pune, Maharashtra",
        "description": "Shaniwar Wada is a historical fort and palace in the heart of Pune. It was the seat of the Peshwa rulers and remains a significant landmark in the city. The fort is known for its stunning architecture and is a must-visit for history enthusiasts."
    },
    {
        "title": "Aga Khan Palace",
        "location": "Pune, Maharashtra",
        "description": "Aga Khan Palace is an elegant piece of architecture and holds historical importance, as it was once the place where Mahatma Gandhi and his followers were imprisoned. The palace is surrounded by lush green gardens, making it a peaceful spot for visitors."
    },
    {
        "title": "Sinhagad Fort",
        "location": "Near Pune, Maharashtra",
        "description": "For adventure and history lovers alike, Sinhagad Fort is a top destination. It offers panoramic views of the surrounding region and is an excellent trekking spot. The fort also holds historical significance, as it was the site of several important battles."
    },
    {
        "title": "Osho Ashram",
        "location": "Pune, Maharashtra",
        "description": "Osho Ashram is a serene meditation center where visitors can engage in meditation, yoga, and spiritual activities. The ashram's peaceful environment makes it a rejuvenating place for those seeking inner peace."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "location": "Pune, Maharashtra",
        "description": "Pataleshwar Cave Temple is an ancient rock-cut temple dedicated to Lord Shiva. It is an architectural marvel and offers a tranquil environment for spiritual reflection."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "location": "Pune, Maharashtra",
        "description": "The Raja Dinkar Kelkar Museum is home to a rich collection of artifacts, including musical instruments, paintings, and sculptures. It provides a fascinating glimpse into the cultural heritage of India."
    },
    {
        "title": "Katraj Snake Park",
        "location": "Pune, Maharashtra",
        "description": "Katraj Snake Park is a unique wildlife park that features a variety of snakes and other reptiles. It’s a great place for nature lovers and families, offering both educational tours and a close-up look at the fascinating world of reptiles."
    },
    {
        "title": "Pune-Okayama Friendship Garden",
        "location": "Pune, Maharashtra",
        "description": "The Pune-Okayama Friendship Garden is a beautiful Japanese-style garden, perfect for a relaxing walk. With koi ponds, lush greenery, and serene walking paths, it's a great place to enjoy some quiet time."
    },
    {
        "title": "Shreemant Dagdusheth Halwai Ganpati Temple",
        "location": "Pune, Maharashtra",
        "description": "This iconic temple is dedicated to Lord Ganesha and is one of the most visited temples in Pune. The grandeur of the Ganesh idol and the temple's architecture make it an important stop for spiritual seekers and tourists alike."
    },
    {
        "title": "Fergusson College",
        "location": "Pune, Maharashtra",
        "description": "One of the oldest and most prestigious educational institutions in Pune, Fergusson College also has a beautiful campus with impressive colonial-era architecture. It’s a lovely spot to appreciate history and nature."
    }
],


"services": [
    {
        "name": "Dombivli to Pune Taxi Service",
        "description": "Morya Cab offers convenient and reliable taxi services from Dombivli to Pune. We provide a smooth and safe travel experience, with well-maintained vehicles and experienced drivers to ensure your journey is comfortable."
    },
    {
        "name": "Dombivli to Pune Cab",
        "description": "For a hassle-free ride from Dombivli to Pune, Morya Cab provides excellent taxi services. Choose from a range of vehicles to suit your travel needs, and enjoy a pleasant ride to your destination."
    },
    {
        "name": "Dombivli to Pune Taxi Fare",
        "description": "Morya Cab offers transparent and competitive taxi fares for your Dombivli to Pune trip. We ensure no hidden charges, providing you with a fair price for your comfortable journey."
    },
    {
        "name": "Dombivli to Pune One Way Taxi",
        "description": "Morya Cab provides one-way taxi services from Dombivli to Pune, ensuring a direct and efficient journey. Whether you're traveling alone or with a group, we have the right vehicle for your needs."
    },
    {
        "name": "Dombivli to Pune Innova",
        "description": "For a comfortable and spacious ride, choose the Innova for your Dombivli to Pune trip. The Innova is ideal for families or groups, providing extra space and comfort on your journey."
    },
    {
        "name": "Dombivli to Pune Ertiga",
        "description": "Morya Cab offers the Ertiga for those traveling with a small group or family. With its spacious interiors, it ensures a comfortable and enjoyable ride from Dombivli to Pune."
    },
    {
        "name": "Dombivli to Pune Sedan",
        "description": "For a compact and efficient ride, opt for a sedan taxi from Morya Cab for your Dombivli to Pune trip. Enjoy a smooth and comfortable journey with our well-maintained sedans."
    },
    {
        "name": "Dombivli to Pune Taxi Booking",
        "description": "Booking your taxi from Dombivli to Pune is simple with Morya Cab. You can book your ride online or by phone, ensuring a quick and easy process to secure your transportation."
    },
    {
        "name": "Mumbai to Pune Dombivli Taxi",
        "description": "Morya Cab provides excellent taxi services from Dombivli to Pune, also catering to travelers who begin their journey from Mumbai. We offer reliable and affordable rides for your trip."
    },
    {
        "name": "Dombivli to Pune by Taxi",
        "description": "For a convenient and comfortable ride, choose Morya Cab for your journey from Dombivli to Pune. With professional drivers and clean, well-maintained vehicles, we guarantee a smooth trip."
    },
    {
        "name": "Dombivli to Pune Round Trip",
        "description": "Morya Cab offers round-trip taxi services for your Dombivli to Pune journey. Our flexible scheduling allows you to customize your trip and enjoy a hassle-free return journey."
    },
    {
        "name": "Dombivli to Pune Car Hire",
        "description": "If you're looking for flexibility and convenience, Morya Cab offers car hire services for your Dombivli to Pune trip. Choose from a variety of vehicles to suit your specific travel needs."
    },
    {
        "name": "Dombivli to Pune Cab Charges",
        "description": "Morya Cab offers affordable and transparent cab charges for your Dombivli to Pune trip. We ensure that the pricing is clear and competitive, so you know exactly what you're paying for."
    },
    {
        "name": "Cheap Dombivli to Pune Taxi",
        "description": "If you're looking for an affordable yet comfortable taxi ride from Dombivli to Pune, Morya Cab is the right choice. We offer competitive prices without compromising on quality and comfort."
    },
    {
        "name": "Dombivli to Pune Online Taxi Booking",
        "description": "Booking a taxi online from Dombivli to Pune is easy with Morya Cab. Use our simple online booking system to reserve your ride and enjoy a smooth and stress-free journey."
    },
    {
        "name": "Dombivli to Pune Taxi Contact Information",
        "description": "For reliable and affordable taxi services from Dombivli to Pune, contact Morya Cab at +91 9359401610. We offer timely, comfortable, and affordable rides for all our customers. Book your taxi today!"
    }
],
tableData: [
    ["Dombivli to Pune Taxi Service", "-Dombivli to Pune Cab"],
    ["Dombivli to Pune Taxi Fare", "-Dombivli to Pune One Way Taxi"],
    ["Dombivli to Pune Innova", "-Dombivli to Pune Ertiga"],
    ["Dombivli to Pune Sedan", "-Dombivli to Pune Taxi Booking"],
    ["Mumbai to Pune Dombivli Taxi", "-Dombivli to Pune by Taxi"],
    ["Dombivli to Pune Round Trip", "-Dombivli to Pune Car Hire"],
    ["Dombivli to Pune Cab Charges", "-Cheap Dombivli to Pune Taxi"],
    ["Dombivli to Pune Online Taxi Booking", ""]
],


whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of punctuality for your trip from Dombivli to Pune. Whether it’s for a business trip or a family outing, we ensure timely pickups and smooth drop-offs, guaranteeing a stress-free and on-time travel experience."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer well-maintained vehicles for your journey from Dombivli to Pune. With air-conditioned interiors, ample legroom, and comfortable seating, our vehicles are designed to provide a relaxed and enjoyable ride for the entire trip."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our experienced and professional drivers are well-trained to handle long-distance routes like Dombivli to Pune. They know the best routes and ensure a smooth, safe, and efficient journey. You can rely on them for a hassle-free and enjoyable ride."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers affordable and transparent pricing for your taxi service from Dombivli to Pune. There are no hidden charges, and we provide clear, upfront pricing so you can plan your travel budget without any surprises."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All our vehicles are regularly serviced and equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers strictly follow safety protocols to ensure you enjoy a safe and secure journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available 24/7 to meet your travel needs, no matter what time of day or night you need a ride. Our customer service team is always ready to assist with your bookings, ensuring a hassle-free experience at any hour."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Dombivli to Pune taxi is quick and easy. You can book online through our website or mobile app, or simply reach out to our customer service team for personalized assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages for your journey from Dombivli to Pune. Whether you're looking for a direct trip or would like to make stops along the way, we can tailor your journey according to your specific needs and preferences."
    }
]











    }


    const faqData = [
        {
          question: "How can I book a Dombivli to Pune taxi with Morya Cab?",
          answer: "You can book your taxi online via our website or mobile app. Alternatively, you can contact our customer service team for personalized assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced and well-trained for long-distance travel. They ensure a smooth, safe, and comfortable ride from Dombivli to Pune."
        },
        {
          question: "What types of vehicles are available for Dombivli to Pune travel?",
          answer: "We offer a range of well-maintained vehicles, including sedans, SUVs, and premium cars, all designed to provide comfort and convenience for your long-distance journey."
        },
        {
          question: "How do I pay for my Dombivli to Pune taxi rental?",
          answer: "We accept various payment options, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Dombivli to Pune?",
          answer: "Yes, we offer round-trip services. Simply provide us with your return details when booking, and we’ll arrange the rest for you."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency regarding the pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Pune?",
          answer: "Yes, we offer sightseeing services in Pune. You can explore top attractions like Shaniwar Wada, Aga Khan Palace, and Osho Ashram with the guidance of a trusted driver."
        },
        {
          question: "What is the luggage allowance for a Dombivli to Pune taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, kindly inform us during the booking process, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Pune?",
          answer: "Yes, we offer corporate travel services for business trips to Pune. We can customize your travel package to suit the needs of your company, including meetings, conferences, and events."
        },
        {
          question: "Why should I choose Morya Cab for Dombivli to Pune travel?",
          answer: "Morya Cab offers reliable, affordable, and professional taxi services. With well-maintained vehicles, experienced drivers, and a focus on safety and comfort, we guarantee a smooth, enjoyable journey for all your travel needs."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Anil Sharma',
          role: 'Business Traveler',
          review: 'I traveled from Dombivli to Pune for a business trip, and Morya Cab made the journey so easy and comfortable. The driver was punctual and professional, and the vehicle was clean and spacious. I highly recommend their services!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Priya Kulkarni',
          role: 'Family Traveler',
          review: 'Our family used Morya Cab for our trip from Dombivli to Pune. The ride was smooth, and the car was very comfortable. The driver was friendly and made the trip enjoyable. We’ll definitely use them again!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        }
      ];
      
      
      
      
      
            
            
            
      











    const contactData = {
        heading: `${cardData.keyword} Contact Number`,
        contactNumbers: [
            "+91 9359401610",
            "+91 9822344091",



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
        "description": "Book your Dombivli to Pune taxi with Morya Cab. Affordable and reliable one-way taxi, drop taxi, and car hire services. Call +91 9359401610 for bookings!",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9359401610",
        "url": "https://moryacab.com/",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/dombivli-to-pune-taxi.jpg",
          "https://moryacab.com/img/dombivli-to-pune-cab-service.jpg"
        ],
        "priceRange": "₹2000 - ₹4000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/dombivli-to-pune-taxi-service",
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
            "reviewBody": "Affordable and punctual! The ride from Dombivli to Pune was smooth and the driver was courteous. Highly recommend Morya Cab for anyone traveling this route."
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
          "name": "Dombivli to Pune Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.2165,
            "longitude": 73.0788
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/dombivli-to-pune-taxi-service"
        },
        "keywords": "dombivli to pune taxi service, dombivli to pune cab, dombivli to pune taxi fare, dombivli to pune one way taxi, dombivli to pune innova, dombivli to pune ertiga, dombivli to pune sedan, dombivli to pune taxi booking, mumbai to pune dombivli taxi, dombivli to pune by taxi, dombivli to pune round trip, dombivli to pune car hire, dombivli to pune cab charges, cheap dombivli to pune taxi, dombivli to pune online taxi booking"
      };


    return (
        <div>
            <UsePageTracking/>
  <Helmet>
        <title>Dombivli to Pune Taxi | Affordable & Reliable Taxi Service | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book your Dombivli to Pune taxi with Morya Cab. Affordable and reliable one-way taxi, drop taxi, and car hire services. Call +91 9359401610."
        />
        <meta name="keywords" content="dombivli to pune taxi service, dombivli to pune cab, one way taxi, affordable taxi service" />
        <meta property="og:title" content="Dombivli to Pune Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Dombivli to Pune taxi with Morya Cab. Affordable and reliable one-way taxi, drop taxi, and car hire services." />
        <meta property="og:url" content="https://moryacab.com/dombivli-to-pune-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/dombivli-to-pune-taxi.jpg" />
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
                            <img src='/images/keyword/19.jpg' alt='img' />
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
                                                <a href="tel:+91 9359401610" className="d-block  text-white">+91 9359401610</a>
                                                <a href="tel:+91 9822344091" className="d-block  text-white">+91 9822344091</a>


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

export default Dombivlitopunetaxi;