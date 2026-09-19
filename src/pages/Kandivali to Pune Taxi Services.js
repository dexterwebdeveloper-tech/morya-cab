
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Kandivalitopunetaxi() {



    const cardData =
    {
        keyword: 'Kandivali to Pune Taxi ',
        heading: 'Morya Cabs: Kandivali to Pune Taxi  ',
        headingDescription: 'Morya Cabs provides premium taxi services from Kandivali to Pune, ensuring a comfortable and reliable ride for all types of travelers. Whether you’re traveling for business, leisure, or simply visiting friends and family, our experienced drivers and well-maintained vehicles guarantee a hassle-free journey. The distance from Kandivali to Pune is approximately 150 km, and the journey takes around 3 to 4 hours, depending on traffic conditions. Enjoy a smooth, safe, and pleasant ride with Morya Cabs’ customer-centric services.',

        top: 'Top Places to Visit in Pune with Morya Cabs',

"topPlaces": [
    {
        "title": "Shaniwar Wada",
        "location": "Pune, Maharashtra",
        "description": "Shaniwar Wada is an iconic historical site in Pune, once the seat of the Peshwa rulers. With its impressive architecture and historical significance, it is a must-visit for those interested in Pune’s history and Maratha heritage."
    },
    {
        "title": "Aga Khan Palace",
        "location": "Pune, Maharashtra",
        "description": "A stunning piece of architecture, the Aga Khan Palace holds historical importance as a place where Mahatma Gandhi was imprisoned during the freedom struggle. The palace also functions as a museum and is a peaceful retreat for those interested in history and culture."
    },
    {
        "title": "Sinhagad Fort",
        "location": "Pune, Maharashtra",
        "description": "A popular trekking destination, Sinhagad Fort is situated atop a hill and offers breathtaking views of the surrounding valley. This historical fort is associated with significant battles from the Maratha period and is a great spot for nature lovers and history enthusiasts alike."
    },
    {
        "title": "Osho Ashram",
        "location": "Pune, Maharashtra",
        "description": "Pune’s Osho Ashram is a peaceful meditation center attracting visitors from all over the world. Known for its spiritual ambiance, the ashram offers programs focusing on wellness, meditation, and yoga."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "location": "Pune, Maharashtra",
        "description": "This rock-cut temple is dedicated to Lord Shiva and is one of Pune's oldest and most important temples. The tranquil environment and ancient architecture make it a significant religious and historical site."
    },
    {
        "title": "Shreemant Dagdusheth Halwai Ganpati Temple",
        "location": "Pune, Maharashtra",
        "description": "This famous temple is dedicated to Lord Ganesha and is a must-visit for spiritual seekers, especially during the Ganesh Chaturthi festival. It is one of Pune's most popular temples, renowned for its beautiful idol and serene atmosphere."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "location": "Pune, Maharashtra",
        "description": "If you're keen to learn about India’s rich cultural heritage, the Raja Dinkar Kelkar Museum is the place to visit. It houses a variety of artifacts, including sculptures, paintings, and traditional crafts."
    },
    {
        "title": "Pune Okayama Friendship Garden",
        "location": "Pune, Maharashtra",
        "description": "The Pune Okayama Friendship Garden is a beautifully landscaped garden designed to promote peace and tranquility. Inspired by Japanese gardening traditions, it offers a calm environment to relax and unwind."
    },
    {
        "title": "Fergusson College",
        "location": "Pune, Maharashtra",
        "description": "One of Pune's oldest institutions, Fergusson College is known for its historic architecture and beautiful campus. It’s a great spot for anyone interested in exploring Pune’s academic and colonial heritage."
    },
    {
        "title": "Katraj Snake Park",
        "location": "Pune, Maharashtra",
        "description": "Katraj Snake Park, located on the outskirts of Pune, offers visitors a chance to explore wildlife conservation efforts while getting an up-close view of various species of snakes and reptiles."
    }
],


"services": [
    {
        "name": "Kandivali to Pune Taxi Service",
        "description": "Morya Cab offers dependable and affordable taxi services from Kandivali to Pune. We ensure a comfortable, safe, and hassle-free journey, making your trip enjoyable and stress-free."
    },
    {
        "name": "Kandivali to Pune Cab Service",
        "description": "Whether you're traveling for business or leisure, book a Kandivali to Pune cab with Morya Cab. Our vehicles are well-maintained, and our drivers are experienced professionals."
    },
    {
        "name": "Kandivali to Pune Taxi Fare",
        "description": "Our taxi fares for the Kandivali to Pune route are competitive and transparent. We provide clear pricing, with no hidden charges, ensuring the best value for your money."
    },
    {
        "name": "Kandivali to Pune One-Way Taxi",
        "description": "If you need a one-way taxi from Kandivali to Pune, Morya Cab offers flexible one-way taxi services, providing you with a convenient and budget-friendly option for your journey."
    },
    {
        "name": "Kandivali to Pune Innova",
        "description": "For a more spacious and comfortable ride, opt for the Innova for your trip from Kandivali to Pune. Ideal for families or groups, the Innova offers ample legroom and comfort."
    },
    {
        "name": "Kandivali to Pune Ertiga",
        "description": "Our Ertiga service offers a comfortable and affordable ride from Kandivali to Pune. Perfect for small groups, the Ertiga ensures a smooth journey with plenty of space for your luggage."
    },
    {
        "name": "Kandivali to Pune Sedan",
        "description": "For a stylish and efficient ride, consider our sedan service. The sedan is an excellent choice for solo travelers or couples who want comfort and reliability for their journey."
    },
    {
        "name": "Kandivali to Pune Car Hire",
        "description": "Morya Cab offers convenient car hire options for the Kandivali to Pune route. You can choose a vehicle that suits your preferences, with options like sedans, SUVs, or even luxury cars."
    },
    {
        "name": "Kandivali to Pune Round Trip",
        "description": "Looking for a round-trip service? Morya Cab offers affordable round-trip services from Kandivali to Pune, so you can enjoy a seamless travel experience both ways."
    },
    {
        "name": "Taxi from Kandivali to Pune",
        "description": "Travel from Kandivali to Pune by cab with Morya Cab. Our reliable taxi services ensure a smooth and comfortable journey, with well-maintained vehicles and professional drivers."
    },
    {
        "name": "Mumbai to Pune Kandivali Taxi",
        "description": "For your Mumbai to Pune trip via Kandivali, Morya Cab offers affordable taxi services. Enjoy a stress-free ride to Pune, whether it’s for a one-way trip or a round trip."
    },
    {
        "name": "Kandivali to Pune Taxi Booking",
        "description": "Booking a taxi from Kandivali to Pune is easy with Morya Cab. You can book your ride online, and our customer support team is always ready to assist you with any queries."
    },
    {
        "name": "Kandivali to Pune Drop Taxi",
        "description": "Need a one-way drop taxi? Morya Cab offers drop taxi services from Kandivali to Pune, perfect for passengers who need a direct and hassle-free transfer."
    },
    {
        "name": "Kandivali to Pune by Cab",
        "description": "Travel from Kandivali to Pune by cab with Morya Cab’s top-rated taxi services. We provide a safe, comfortable, and timely ride to your destination."
    },
    {
        "name": "Kandivali to Pune Cab Service",
        "description": "Morya Cab’s Kandivali to Pune cab service is known for reliability and affordability. Our professional drivers will ensure that you have a comfortable journey."
    },
    {
        "name": "Contact Morya Cab for Your Kandivali to Pune Taxi Booking",
        "description": "For bookings or inquiries, call us at +91 9371304510. We’ll be happy to assist with your Kandivali to Pune taxi needs."
    }
],


tableData: [
    ["Kandivali to Pune Taxi", "-Kandivali to Pune Cab Service"],
    ["Kandivali to Pune Taxi Fare", "-Kandivali to Pune One Way Taxi"],
    ["Kandivali to Pune Innova", "-Kandivali to Pune Ertiga"],
    ["Kandivali to Pune Sedan", "-Kandivali to Pune Car Hire"],
    ["Kandivali to Pune Round Trip", "-Taxi from Kandivali to Pune"],
    ["Mumbai to Pune Kandivali Taxi", "-Kandivali to Pune Taxi Booking"],
    ["Kandivali to Pune Drop Taxi", "-Kandivali to Pune by Cab"],
    ["Kandivali to Pune Cab Service", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of punctuality for long-distance travel. Whether it’s a business trip, family getaway, or any other reason, our drivers ensure timely pickups and drop-offs from Kandivali to Pune, so you can travel stress-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our vehicles are designed for comfort, with spacious interiors, air conditioning, and comfortable seating. You’ll enjoy a smooth, relaxing ride as you travel from Kandivali to Pune, with plenty of room for your comfort."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are well-trained and experienced in handling long-distance journeys. They know the best routes, ensure your safety, and offer a smooth ride, making your trip from Kandivali to Pune both pleasant and efficient."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing for Kandivali to Pune taxi services. Our pricing is clear and transparent, with no hidden charges, ensuring you get the best value for your money."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is our priority. Our vehicles are regularly serviced and equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure you travel with peace of mind."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you’re planning an early morning departure or a late-night return, Morya Cab is available round-the-clock. Our customer service team is always ready to assist with your booking, making it convenient for you to travel at any time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Kandivali to Pune taxi is easy with Morya Cab. You can book online via our website or mobile app, or contact our customer service team for assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer flexible travel packages tailored to your specific needs. Whether you need additional stops or special arrangements, let us know, and we will customize the journey according to your preferences."
    }
]














    }

    const faqData = [
        {
          question: "How can I book a Kandivali to Pune taxi with Morya Cab?",
          answer: "You can book a taxi easily online through our website or mobile app. Alternatively, you can call our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are experienced in handling long-distance journeys like Kandivali to Pune, ensuring you have a smooth, safe, and timely trip."
        },
        {
          question: "What types of vehicles are available for Kandivali to Pune travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all designed for comfort and long-distance travel."
        },
        {
          question: "How do I pay for my Kandivali to Pune taxi rental?",
          answer: "We accept various payment methods, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Kandivali to Pune?",
          answer: "Yes, you can book a round-trip taxi. Just provide your return details during the booking process, and we’ll ensure a seamless round-trip experience."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated upfront during the booking process, ensuring complete transparency in our pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Pune?",
          answer: "Yes, we offer sightseeing services in Pune. If you would like to explore the city after reaching Pune, we can arrange for visits to popular spots like Shaniwar Wada, Aga Khan Palace, and more."
        },
        {
          question: "What is the luggage allowance for a Kandivali to Pune taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or special requirements, please let us know when booking, and we will make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel from Kandivali to Pune?",
          answer: "Yes, we offer corporate travel services from Kandivali to Pune. Whether it’s for business meetings, events, or team outings, we can customize the travel package to suit your company's needs."
        },
        {
          question: "Why should I choose Morya Cab for Kandivali to Pune travel?",
          answer: "Morya Cab provides reliable, safe, and affordable taxi services. Our experienced drivers, well-maintained vehicles, and commitment to customer satisfaction ensure a stress-free and enjoyable journey."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Akshay Mehta',
          role: 'Business Traveler',
          review: 'I booked a taxi with Morya Cab from Kandivali to Pune, and the experience was fantastic. The vehicle was clean, the driver was professional, and I had a smooth and timely ride. I’ll definitely book again!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Kavita Sharma',
          role: 'Family Traveler',
          review: 'We used Morya Cab for a family trip from Kandivali to Pune, and it was an excellent experience. The vehicle was spacious, comfortable, and the driver was friendly. It was a hassle-free ride, and we highly recommend this service!',
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
        "description": "Book your Kandivali to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/kandivali-to-pune-taxi.jpg",
          "https://moryacab.com/img/kandivali-to-pune-cab-service.jpg"
        ],
        "priceRange": "₹3000 - ₹5000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/kandivali-to-pune-taxi-service",
          "priceCurrency": "INR",
          "price": 4000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "reviewCount": 150
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Yadav"
            },
            "datePublished": "2024-01-30",
            "reviewBody": "The ride from Kandivali to Pune was excellent! Clean car, professional driver, and timely service. Will definitely book again."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Singh"
            },
            "datePublished": "2024-06-10",
            "reviewBody": "Affordable and reliable taxi service. The journey was smooth, and the driver was courteous. Highly recommend Morya Cabs!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Kandivali to Pune Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.1855,
            "longitude": 72.8497
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/kandivali-to-pune-taxi-service"
        },
        "keywords": "kandivali to pune taxi, kandivali to pune cab service, kandivali to pune taxi fare, kandivali to pune one way taxi, kandivali to pune innova, kandivali to pune ertiga, kandivali to pune sedan, kandivali to pune car hire, kandivali to pune round trip, taxi from kandivali to pune, mumbai to pune kandivali taxi, kandivali to pune taxi booking, kandivali to pune drop taxi, kandivali to pune by cab, kandivali to pune cab service"
      };


    return (
        <div>
            <UsePageTracking/>
<Helmet>
        <title>Kandivali to Pune Taxi | Affordable & Reliable Cab Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Kandivali to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510."
        />
        <meta name="keywords" content="kandivali to pune taxi, cab services, taxi booking, affordable taxi" />
        <meta property="og:title" content="Kandivali to Pune Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Kandivali to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!" />
        <meta property="og:url" content="https://moryacab.com/kandivali-to-pune-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/kandivali-to-pune-taxi.jpg" />
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
                            <img src='/images/keyword/28.jpg' alt='img' />
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

export default Kandivalitopunetaxi;