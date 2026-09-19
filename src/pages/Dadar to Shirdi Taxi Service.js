
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Dadartoshirditaxi() {



    const cardData =
    {
        keyword: 'Dadar to Shirdi Taxi ',
        heading: 'Morya Cabs: Dadar to Shirdi Taxi ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Dadar to Shirdi. Whether you are planning a pilgrimage, family trip, or a peaceful retreat, our fleet of well-maintained vehicles and professional drivers ensure a smooth and enjoyable ride. The distance from Dadar to Shirdi is approximately 240 km, and the journey usually takes around 5 to 6 hours by road. With Morya Cabs, you can rest assured of a comfortable and safe journey to one of the most revered spiritual destinations in India.',

        top: 'Top Places to Visit in Shirdi with Morya Cabs',

"topPlaces": [
    {
        "title": "Sai Baba Temple",
        "location": "Shirdi, Maharashtra",
        "description": "The Sai Baba Temple in Shirdi is the primary spiritual attraction. Dedicated to Sai Baba, it is one of the most visited pilgrimage sites in India. Devotees from all over the world come to seek blessings and experience a sense of peace and devotion."
    },
    {
        "title": "Dwarkamai",
        "location": "Shirdi, Maharashtra",
        "description": "Dwarkamai is the mosque where Sai Baba spent a significant part of his life. It’s considered a place of immense spiritual energy. Devotees visit to offer prayers and experience the serene atmosphere."
    },
    {
        "title": "Shirdi Sai Baba Samadhi Mandir",
        "location": "Shirdi, Maharashtra",
        "description": "This temple is where the mortal remains of Sai Baba are laid to rest. The Samadhi Mandir is the most visited part of Shirdi, where people gather for spiritual prayers and meditation."
    },
    {
        "title": "Chavadi",
        "location": "Shirdi, Maharashtra",
        "description": "Chavadi is another significant place in Shirdi, where Sai Baba used to rest alternately every night. The site has a serene and peaceful vibe, and it’s a must-visit for devotees to connect with the saint's spiritual legacy."
    },
    {
        "title": "Shri Saibaba Sansthan Trust Museum",
        "location": "Shirdi, Maharashtra",
        "description": "The museum at the Shri Saibaba Sansthan Trust showcases several rare and historical artifacts related to Sai Baba's life. It provides deeper insights into his teachings and spiritual presence."
    },
    {
        "title": "Khandoba Temple",
        "location": "Shirdi, Maharashtra",
        "description": "Khandoba Temple is one of the oldest temples in Shirdi. It is dedicated to Lord Khandoba, and pilgrims visiting Shirdi often stop by for a blessing before heading to the Sai Baba Temple."
    },
    {
        "title": "Lendi Baug",
        "location": "Shirdi, Maharashtra",
        "description": "Lendi Baug is a beautiful garden where Sai Baba used to take walks. The serene environment is perfect for contemplation and offers a great spot for relaxation after a visit to the temple."
    },
    {
        "title": "Shirdi Lake",
        "location": "Shirdi, Maharashtra",
        "description": "Shirdi Lake is a peaceful spot where pilgrims can relax and enjoy the scenic surroundings. The lake is associated with Sai Baba’s teachings on purity and spirituality."
    },
    {
        "title": "Sai Heritage Village",
        "location": "Shirdi, Maharashtra",
        "description": "Sai Heritage Village is a cultural and spiritual theme park that replicates important events from Sai Baba’s life. It’s a great place for families and children to learn more about Sai Baba in an interactive setting."
    },
    {
        "title": "Pimpalwadi Temple",
        "location": "Shirdi, Maharashtra",
        "description": "Located close to the Sai Baba Temple, Pimpalwadi Temple is dedicated to Lord Ganesha. It is a place of calm and a great spot to visit after the main Sai Baba Temple."
    }
],


"services": [
    {
        "name": "Dadar to Shirdi Taxi",
        "description": "Morya Cab provides reliable and comfortable taxi services from Dadar to Shirdi. Whether you are traveling solo or with a group, we ensure a smooth, safe, and hassle-free journey."
    },
    {
        "name": "Dadar to Shirdi Cab Service",
        "description": "For your trip from Dadar to Shirdi, choose Morya Cab’s expert taxi service. Our fleet of well-maintained vehicles and professional drivers guarantee a pleasant ride."
    },
    {
        "name": "Dadar to Shirdi Taxi Fare",
        "description": "Morya Cab offers competitive and transparent taxi fares for your Dadar to Shirdi trip. We ensure you get the best pricing with no hidden charges, offering a cost-effective yet comfortable ride."
    },
    {
        "name": "Taxi from Dadar to Shirdi",
        "description": "Take a stress-free journey with Morya Cab’s taxi services from Dadar to Shirdi. Our drivers are experienced and familiar with the best routes to ensure a quick and safe trip."
    },
    {
        "name": "Dadar to Shirdi One Way Taxi",
        "description": "Morya Cab offers convenient one-way taxi services from Dadar to Shirdi. Book your one-way ride online or by phone for a straightforward, hassle-free experience."
    },
    {
        "name": "Dadar to Shirdi Car Rental",
        "description": "If you prefer more flexibility, opt for Morya Cab’s car rental service from Dadar to Shirdi. We offer a wide range of vehicles, ensuring you travel in comfort and style."
    },
    {
        "name": "Dadar to Shirdi Innova",
        "description": "For a more spacious and comfortable ride, Morya Cab offers the Innova for your Dadar to Shirdi journey. Ideal for families or groups, the Innova provides ample space and comfort."
    },
    {
        "name": "Dadar to Shirdi Ertiga",
        "description": "Morya Cab offers the Ertiga for small groups or families traveling from Dadar to Shirdi. With comfortable seating and enough space, the Ertiga is a perfect option for your journey."
    },
    {
        "name": "Dadar to Shirdi Taxi Booking",
        "description": "Booking a taxi from Dadar to Shirdi is easy with Morya Cab. You can conveniently book your ride online or by phone, ensuring a smooth travel experience."
    },
    {
        "name": "Dadar to Shirdi Drop Taxi",
        "description": "Morya Cab provides drop taxi services from Dadar to Shirdi. Whether it’s a quick trip or a longer stay, we ensure you are dropped off safely at your destination."
    },
    {
        "name": "Mumbai to Shirdi Dadar Taxi",
        "description": "Morya Cab also offers services for travelers traveling from Mumbai, including Dadar, to Shirdi. Enjoy the comfort and reliability of our well-maintained vehicles for a smooth ride."
    },
    {
        "name": "Taxi Fare from Dadar to Shirdi",
        "description": "Morya Cab offers affordable taxi fares for the Dadar to Shirdi journey. We believe in offering value for money without compromising on comfort or safety."
    },
    {
        "name": "Dadar to Shirdi by Cab",
        "description": "Experience a relaxing and safe journey from Dadar to Shirdi with Morya Cab’s reliable cab service. Our professional drivers ensure timely arrivals and a smooth trip."
    },
    {
        "name": "Dadar to Shirdi Online Taxi",
        "description": "You can easily book a taxi from Dadar to Shirdi online through Morya Cab’s simple and secure booking system. Choose your vehicle and get ready for a comfortable trip."
    },
    {
        "name": "Shirdi Trip from Dadar",
        "description": "Morya Cab offers specialized services for your Shirdi trip from Dadar, ensuring you have a peaceful and enjoyable ride to the holy town. Book your trip now and enjoy a smooth, stress-free journey."
    },
    {
        "name": "Dadar to Shirdi Taxi Contact Information",
        "description": "For reliable and affordable taxi services from Dadar to Shirdi, contact Morya Cab at +91 9371304510. Our professional drivers and comfortable vehicles ensure a smooth ride. Book your taxi today!"
    }
],


tableData: [
    ["Dadar to Shirdi Taxi", "-Dadar to Shirdi Cab Service"],
    ["Dadar to Shirdi Taxi Fare", "-Taxi from Dadar to Shirdi"],
    ["Dadar to Shirdi One Way Taxi", "-Dadar to Shirdi Car Rental"],
    ["Dadar to Shirdi Innova", "-Dadar to Shirdi Ertiga"],
    ["Dadar to Shirdi Taxi Booking", "-Dadar to Shirdi Drop Taxi"],
    ["Mumbai to Shirdi Dadar Taxi", "-Taxi Fare from Dadar to Shirdi"],
    ["Dadar to Shirdi by Cab", "-Dadar to Shirdi Online Taxi"],
    ["Shirdi Trip from Dadar", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we ensure your journey from Dadar to Shirdi is always punctual. Whether you’re visiting the famous Shirdi Sai Baba Temple or exploring the city, we guarantee timely pickups and smooth drop-offs, allowing you to focus on your trip."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We provide comfortable, well-maintained vehicles for your Dadar to Shirdi journey. Enjoy a relaxing ride in air-conditioned vehicles with ample legroom, making your long-distance travel more enjoyable."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced and well-trained for long-distance routes. They are knowledgeable about the best routes from Dadar to Shirdi, ensuring a safe, smooth, and efficient trip. You can trust them to handle your journey with professionalism."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for your Dadar to Shirdi taxi service. Our pricing is clear, and there are no hidden charges, ensuring you get excellent value for your money."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "We prioritize your safety. All our vehicles are regularly serviced and equipped with safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure a worry-free journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available 24/7, so you can book a taxi for your Dadar to Shirdi trip at any time. Our customer service team is ready to assist you with bookings and ensure a smooth experience whenever you need it."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your taxi is quick and easy. You can book online through our website or mobile app or contact our customer service team for personalized assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages to meet your specific needs. If you wish to make stops along the way, explore sightseeing spots, or need extra services, we can tailor the trip according to your preferences."
    }
]












    }


    const faqData = [
        {
          question: "How can I book a Dadar to Shirdi taxi with Morya Cab?",
          answer: "You can easily book your taxi online through our website or mobile app. Alternatively, you can contact our customer service team for assistance with booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced in long-distance travel. They ensure a safe, smooth, and enjoyable ride from Dadar to Shirdi."
        },
        {
          question: "What types of vehicles are available for Dadar to Shirdi travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all well-maintained and designed for comfort during your journey."
        },
        {
          question: "How do I pay for my Dadar to Shirdi taxi rental?",
          answer: "We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Dadar to Shirdi?",
          answer: "Yes, you can book a round trip. Simply provide your return details when booking, and we will arrange your return journey from Shirdi to Dadar."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "If there are any extra charges for waiting or detours, they will be communicated to you upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Shirdi?",
          answer: "Yes, we offer sightseeing services in Shirdi. Visit important landmarks like the Sai Baba Temple and other religious or cultural sites with a trusted driver."
        },
        {
          question: "What is the luggage allowance for a Dadar to Shirdi taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or special requirements, kindly inform us during booking, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Shirdi?",
          answer: "Yes, we offer corporate travel services for business trips to Shirdi. Whether it’s for a team trip or company event, we can customize the package to suit your needs."
        },
        {
          question: "Why should I choose Morya Cab for Dadar to Shirdi travel?",
          answer: "Morya Cab offers reliable, safe, and affordable taxi services. With comfortable vehicles, professional drivers, and a focus on customer satisfaction, we guarantee a smooth and enjoyable journey for all your travel needs."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Sanjay Kulkarni',
          role: 'Family Traveler',
          review: 'We booked a taxi from Dadar to Shirdi for our family pilgrimage, and it was a great experience. The driver was very professional, the vehicle was spacious and clean, and we reached Shirdi safely and on time. Highly recommended!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Meera Deshmukh',
          role: 'Solo Traveler',
          review: 'I used Morya Cab for a solo trip from Dadar to Shirdi. The ride was smooth, and the driver was courteous. The vehicle was well-maintained and comfortable for the long journey. Excellent service!',
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
        "description": "Book your Dadar to Shirdi taxi with Morya Cab. Affordable and reliable one-way taxi, drop taxi, and car hire services. Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/dadar-to-shirdi-taxi.jpg",
          "https://moryacab.com/img/dadar-to-shirdi-cab-service.jpg"
        ],
        "priceRange": "₹2200 - ₹4000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/dadar-to-shirdi-taxi-service",
          "priceCurrency": "INR",
          "price": 2900,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "reviewCount": 120
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Mehta"
            },
            "datePublished": "2024-08-25",
            "reviewBody": "Great service! The ride was smooth and comfortable. The driver was punctual and polite. I highly recommend this service for anyone traveling from Dadar to Shirdi."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Joshi"
            },
            "datePublished": "2024-10-10",
            "reviewBody": "Affordable, reliable, and comfortable! The car was clean and well-maintained. The trip from Dadar to Shirdi was pleasant, and I will definitely use their service again."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Dadar to Shirdi Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0760,
            "longitude": 72.8777
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/dadar-to-shirdi-taxi-service"
        },
        "keywords": "dadar to shirdi taxi, dadar to shirdi cab service, dadar to shirdi taxi fare, taxi from dadar to shirdi, dadar to shirdi one way taxi, dadar to shirdi car rental, dadar to shirdi innova, dadar to shirdi ertiga, dadar to shirdi taxi booking, dadar to shirdi drop taxi, mumbai to shirdi dadar taxi, taxi fare from dadar to shirdi, dadar to shirdi by cab, dadar to shirdi online taxi, shirdi trip from dadar"
      };



    return (
        <div>
            <UsePageTracking/>
    <Helmet>
        <title>Dadar to Shirdi Taxi | Affordable & Reliable Taxi Service | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Dadar to Shirdi taxi with Morya Cab. Affordable and reliable one-way taxi, drop taxi, and car hire services. Call +91 9371304510."
        />
        <meta name="keywords" content="dadar to shirdi taxi, dadar to shirdi cab service, one way taxi, affordable taxi service" />
        <meta property="og:title" content="Dadar to Shirdi Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Dadar to Shirdi taxi with Morya Cab. Affordable and reliable one-way taxi, drop taxi, and car hire services." />
        <meta property="og:url" content="https://moryacab.com/dadar-to-shirdi-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/dadar-to-shirdi-taxi.jpg" />
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
                            <img src='/images/keyword/20.jpg' alt='img' />
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

export default Dadartoshirditaxi;