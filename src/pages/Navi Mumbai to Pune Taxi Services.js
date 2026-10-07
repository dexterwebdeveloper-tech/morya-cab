
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Navimumbaitopunetaxi() {



    const cardData =
    {
        keyword: 'Navi Mumbai to Pune Taxi ',
        heading: 'Morya Cabs: Navi Mumbai to Pune Taxi ',
        headingDescription: 'Morya Cabs offers premium taxi services for a smooth and comfortable ride from Navi Mumbai to Pune. Whether you are traveling for business, leisure, or a weekend getaway, our well-maintained fleet and experienced drivers ensure a safe and enjoyable journey. The distance from Navi Mumbai to Pune is approximately 150 km, and the journey takes around 3 to 4 hours, depending on traffic conditions. With Morya Cabs, you can expect timely pickups, professional service, and a hassle-free experience.',

        top: 'Top Places to Visit in Pune with Morya Cabs',

"topPlaces": [
    {
        "title": "Shaniwar Wada",
        "location": "Pune, Maharashtra",
        "description": "One of Pune’s most famous historical landmarks, Shaniwar Wada was once the seat of the Peshwa rulers. The fort’s grand architecture and rich history make it a popular destination for tourists and history enthusiasts."
    },
    {
        "title": "Aga Khan Palace",
        "location": "Pune, Maharashtra",
        "description": "This majestic palace is not only an architectural marvel but also a place of historical significance. It was the site where Mahatma Gandhi was imprisoned during the Indian independence movement. The palace now houses a museum dedicated to the freedom struggle."
    },
    {
        "title": "Sinhagad Fort",
        "location": "Pune, Maharashtra",
        "description": "For nature lovers and trekkers, Sinhagad Fort offers stunning panoramic views of the surrounding landscapes. This historic fort is a popular spot for hiking and a perfect place to enjoy Pune’s natural beauty."
    },
    {
        "title": "Osho Ashram",
        "location": "Pune, Maharashtra",
        "description": "Known for its serene and tranquil atmosphere, Osho Ashram is a global meditation center where visitors can relax and rejuvenate through meditation and yoga. It is a spiritual hub located in the heart of Pune."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "location": "Pune, Maharashtra",
        "description": "This ancient rock-cut temple is dedicated to Lord Shiva and is one of Pune's oldest monuments. The quiet surroundings and intricate carvings make it a peaceful spot for reflection and spirituality."
    },
    {
        "title": "Shreemant Dagdusheth Halwai Ganpati Temple",
        "location": "Pune, Maharashtra",
        "description": "Famous for its beautiful idol of Lord Ganesha, this temple attracts thousands of devotees and visitors, especially during the Ganesh Chaturthi festival. The temple’s architecture and spiritual atmosphere make it a must-visit."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "location": "Pune, Maharashtra",
        "description": "For a deep dive into Pune’s culture, the Raja Dinkar Kelkar Museum is a treasure trove of artifacts showcasing traditional Indian arts, crafts, and historical pieces, providing an enriching experience for visitors."
    },
    {
        "title": "Pune Okayama Friendship Garden",
        "location": "Pune, Maharashtra",
        "description": "A beautifully landscaped Japanese-style garden, the Pune Okayama Friendship Garden offers a peaceful escape from the city’s hustle and bustle, ideal for a quiet stroll or meditation."
    },
    {
        "title": "Fergusson College",
        "location": "Pune, Maharashtra",
        "description": "This iconic college in Pune is known for its colonial-era architecture and beautiful campus. It’s an excellent place to explore Pune’s academic heritage and enjoy the scenic beauty around the campus."
    },
    {
        "title": "Katraj Snake Park",
        "location": "Pune, Maharashtra",
        "description": "Located on the outskirts of Pune, Katraj Snake Park is home to a wide variety of reptiles and is dedicated to wildlife conservation. It’s an exciting place for animal lovers and those interested in learning about different species of snakes and other reptiles."
    }
],


"services": [
    {
        "name": "Navi Mumbai to Pune Taxi Service",
        "description": "Travel with comfort and ease with Morya Cab, offering efficient and reliable taxi services for your Navi Mumbai to Pune journey. Whether it’s for business or leisure, we ensure a smooth ride throughout the trip."
    },
    {
        "name": "Navi Mumbai to Pune Cab Service",
        "description": "Book a Navi Mumbai to Pune cab with Morya Cab for a hassle-free experience. Our fleet of vehicles is maintained to high standards, and our drivers are courteous and professional."
    },
    {
        "name": "Navi Mumbai to Pune One-Way Taxi",
        "description": "If you are looking for a one-way taxi from Navi Mumbai to Pune, Morya Cab offers affordable rates and ensures a comfortable, direct journey with no detours."
    },
    {
        "name": "Navi Mumbai to Pune Taxi Fare",
        "description": "Our Navi Mumbai to Pune taxi fare is budget-friendly and transparent. We offer clear and upfront pricing with no hidden charges, making sure you get the best value for your money."
    },
    {
        "name": "Navi Mumbai to Pune Innova",
        "description": "For added comfort and space, choose our Innova taxi service from Navi Mumbai to Pune. It’s perfect for families or groups who need extra room for passengers and luggage."
    },
    {
        "name": "Navi Mumbai to Pune Ertiga",
        "description": "If you are traveling in a small group, the Ertiga offers an affordable yet comfortable ride. It’s a great choice for a smooth and cozy journey from Navi Mumbai to Pune."
    },
    {
        "name": "Navi Mumbai to Pune Sedan",
        "description": "For a stylish and comfortable ride, choose our sedan service. Morya Cab’s sedan taxis are perfect for solo travelers, couples, or small groups who want a seamless and relaxed journey."
    },
    {
        "name": "Taxi Service from Navi Mumbai to Pune",
        "description": "Morya Cab offers a dependable taxi service from Navi Mumbai to Pune, ensuring you enjoy a safe and comfortable trip. Our drivers are well-trained and know the best routes to avoid traffic and delays."
    },
    {
        "name": "Navi Mumbai to Pune Round Trip",
        "description": "Our round-trip service is ideal for those who need a taxi for both the outward and return journey. Enjoy a comfortable and cost-effective travel experience, round trip from Navi Mumbai to Pune."
    },
    {
        "name": "Navi Mumbai to Pune by Cab",
        "description": "Travel Navi Mumbai to Pune by cab with Morya Cab’s reliable services. We ensure that your trip is comfortable, stress-free, and safe, no matter the distance or time."
    },
    {
        "name": "Navi Mumbai to Pune Car Hire",
        "description": "Morya Cab offers flexible car hire options for your Navi Mumbai to Pune journey. You can choose a vehicle that best suits your needs, whether it’s a sedan, SUV, or luxury car."
    },
    {
        "name": "Mumbai to Pune Navi Mumbai Taxi",
        "description": "For your Mumbai to Pune trip via Navi Mumbai, we offer excellent taxi services, ensuring a hassle-free and safe travel experience."
    },
    {
        "name": "Navi Mumbai to Pune Taxi Booking",
        "description": "Booking a Navi Mumbai to Pune taxi is easy with Morya Cab. You can book online or contact our support team for quick assistance and instant confirmation."
    },
    {
        "name": "Affordable Taxi Navi Mumbai to Pune",
        "description": "We offer affordable taxi services for your Navi Mumbai to Pune trip, ensuring you get great value for money. Our pricing is transparent, and we don’t charge hidden fees."
    },
    {
        "name": "Navi Mumbai to Pune Drop Taxi",
        "description": "For those who need a direct drop taxi, Morya Cab provides convenient drop-off services from Navi Mumbai to Pune, ensuring a hassle-free and quick transfer to your destination."
    },
    {
        "name": "Contact Morya Cab for Your Navi Mumbai to Pune Taxi Booking",
        "description": "Call us at +91 9371304510 to book your Navi Mumbai to Pune taxi today. Our friendly team will assist you with booking and provide any additional information you need."
    }
],


tableData: [
    ["Navi Mumbai to Pune Taxi", "-Navi Mumbai to Pune Cab Service"],
    ["Navi Mumbai to Pune One Way Taxi", "-Navi Mumbai to Pune Taxi Fare"],
    ["Navi Mumbai to Pune Innova", "-Navi Mumbai to Pune Ertiga"],
    ["Navi Mumbai to Pune Sedan", "-Taxi Service from Navi Mumbai to Pune"],
    ["Navi Mumbai to Pune Round Trip", "-Navi Mumbai to Pune by Cab"],
    ["Navi Mumbai to Pune Car Hire", "-Mumbai to Pune Navi Mumbai Taxi"],
    ["Navi Mumbai to Pune Taxi Booking", "-Affordable Taxi Navi Mumbai to Pune"],
    ["Navi Mumbai to Pune Drop Taxi", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we value your time. Whether you’re traveling for business or leisure, our drivers ensure punctual pickups and timely drop-offs from Navi Mumbai to Pune, so your trip is smooth and stress-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer well-maintained vehicles equipped with comfortable seating, ample legroom, air conditioning, and modern amenities for a pleasant ride from Navi Mumbai to Pune. Enjoy a comfortable and relaxing journey with Morya Cab."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our experienced drivers are trained in handling long-distance routes like Navi Mumbai to Pune. They know the best routes to avoid traffic and ensure you reach your destination safely, comfortably, and on time."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We believe in providing affordable and transparent pricing for your taxi service from Navi Mumbai to Pune. No hidden charges, just clear and upfront pricing for a stress-free travel experience."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. Our vehicles are regularly maintained and equipped with the latest safety features, such as airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols, ensuring a worry-free trip."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether it's an early morning or late-night ride, Morya Cab is available 24/7 to accommodate your travel needs. Our customer service team is ready to assist you with your bookings at any time, ensuring that you can book a ride whenever you need it."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Navi Mumbai to Pune taxi with Morya Cab is quick and easy. You can book online through our website or mobile app, or contact our customer service team for personalized assistance. We make the booking process as smooth as possible."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer flexible and customized travel packages to meet your specific needs. Whether you need a stopover on the way or want a round trip, we can tailor the journey based on your preferences."
    }
]














    }

    const faqData = [
        {
          question: "How can I book a Navi Mumbai to Pune taxi with Morya Cab?",
          answer: "You can book a taxi easily through our website or mobile app. Alternatively, you can contact our customer service team for any assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are highly experienced in handling long-distance journeys such as Navi Mumbai to Pune. They are familiar with the best routes and traffic patterns, ensuring a timely and safe journey."
        },
        {
          question: "What types of vehicles are available for Navi Mumbai to Pune travel?",
          answer: "We offer a wide range of vehicles, including sedans, SUVs, and premium cars, all equipped with comfortable seating and modern amenities for long-distance travel."
        },
        {
          question: "How do I pay for my Navi Mumbai to Pune taxi rental?",
          answer: "We accept a variety of payment options, including cash, credit/debit cards, and online payments via our app, making it easy for you to pay for your ride."
        },
        {
          question: "Can I book a round trip from Navi Mumbai to Pune?",
          answer: "Yes, you can easily book a round-trip taxi. Simply provide your return details when booking, and we’ll handle the rest to ensure a seamless journey."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting or detours will be communicated to you upfront during the booking process, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Pune?",
          answer: "Yes, we offer sightseeing packages in Pune. You can visit popular attractions such as Shaniwar Wada, Aga Khan Palace, and more. Let us know if you'd like to add sightseeing to your journey."
        },
        {
          question: "What is the luggage allowance for a Navi Mumbai to Pune taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or special requirements, please inform us at the time of booking, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel from Navi Mumbai to Pune?",
          answer: "Yes, we provide corporate travel services from Navi Mumbai to Pune. Whether it’s for business meetings, conferences, or corporate events, we can customize your travel package to fit your company's needs."
        },
        {
          question: "Why should I choose Morya Cab for Navi Mumbai to Pune travel?",
          answer: "Morya Cab offers reliable, professional, and affordable taxi services. With experienced drivers, comfortable vehicles, and transparent pricing, we ensure a safe, stress-free, and enjoyable journey from Navi Mumbai to Pune."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Saurabh Joshi',
          role: 'Business Traveler',
          review: 'I booked a taxi with Morya Cab from Navi Mumbai to Pune, and the experience was great! The vehicle was comfortable, the driver was professional, and I arrived on time. Highly recommended for a hassle-free journey!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Anita Verma',
          role: 'Family Traveler',
          review: 'Our family used Morya Cab for a trip from Navi Mumbai to Pune. The vehicle was spacious and clean, and the driver was friendly and knowledgeable. The journey was smooth and comfortable. We will definitely use them again!',
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
        "description": "Book your Navi Mumbai to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/navi-mumbai-to-pune-taxi.jpg",
          "https://moryacab.com/img/navi-mumbai-to-pune-cab-service.jpg"
        ],
        "priceRange": "₹3000 - ₹5000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/navi-mumbai-to-pune-taxi-service",
          "priceCurrency": "INR",
          "price": 4000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "reviewCount": 180
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Suresh Patil"
            },
            "datePublished": "2024-02-15",
            "reviewBody": "Amazing service! The ride from Navi Mumbai to Pune was smooth, and the driver was very professional. I would highly recommend this service."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Iyer"
            },
            "datePublished": "2024-07-25",
            "reviewBody": "Affordable and reliable taxi service for my Navi Mumbai to Pune trip. The vehicle was clean and the driver was punctual. Highly satisfied."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Navi Mumbai to Pune Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0186,
            "longitude": 72.8258
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/navi-mumbai-to-pune-taxi-service"
        },
        "keywords": "navi mumbai to pune taxi, navi mumbai to pune cab service, navi mumbai to pune one way taxi, navi mumbai to pune taxi fare, navi mumbai to pune innova, navi mumbai to pune ertiga, navi mumbai to pune sedan, taxi service from navi mumbai to pune, navi mumbai to pune round trip, navi mumbai to pune by cab, navi mumbai to pune car hire, mumbai to pune navi mumbai taxi, navi mumbai to pune taxi booking, affordable taxi navi mumbai to pune, navi mumbai to pune drop taxi"
      };


    return (
        <div>
            <UsePageTracking/>
 <Helmet>
        <title>Navi Mumbai to Pune Taxi | Affordable & Reliable Cab Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Navi Mumbai to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510."
        />
        <meta name="keywords" content="navi mumbai to pune taxi, cab services, taxi booking, affordable taxi" />
        <meta property="og:title" content="Navi Mumbai to Pune Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Navi Mumbai to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!" />
        <meta property="og:url" content="https://moryacab.com/navi-mumbai-to-pune-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/navi-mumbai-to-pune-taxi.jpg" />
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
                            <img src='/images/keyword/29.jpg' alt='img' />
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

export default Navimumbaitopunetaxi;