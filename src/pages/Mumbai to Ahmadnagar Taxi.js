
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Mumbaitoahmednagartaxi() {



    const cardData =
    {
        keyword: 'Mumbai to Ahmadnagar Taxi   ',
        heading: 'Morya Cabs: Mumbai to Ahmadnagar Taxi ',
        headingDescription: 'Morya Cabs offers comfortable and reliable taxi services from Mumbai to Ahmadnagar, a city rich in history and culture. Whether you are traveling for business, leisure, or a religious visit, we ensure a smooth and hassle-free journey with our professional drivers and well-maintained vehicles. The distance between Mumbai and Ahmadnagar is approximately 120 km, and the journey typically takes around 2.5 to 3 hours by road. With Morya Cabs, you can enjoy a safe and comfortable ride, making your trip to Ahmadnagar a memorable one.',

        top: 'Top Places to Visit in Ahmadnagar with Morya Cabs',

"topPlaces": [
    {
        "title": "Ahmadnagar Fort",
        "location": "Ahmadnagar, Maharashtra",
        "description": "Ahmadnagar Fort is a historical fort located in the heart of the city. It played an important role during the Mughal and Maratha periods and is a popular tourist spot. The fort has several historical structures, and visitors can explore its rich history and architecture."
    },
    {
        "title": "Shri Sangmeshwar Temple",
        "location": "Ahmadnagar, Maharashtra",
        "description": "Shri Sangmeshwar Temple, dedicated to Lord Shiva, is a significant religious site in Ahmadnagar. The temple is known for its serene atmosphere and religious significance, making it a must-visit for devotees and tourists alike."
    },
    {
        "title": "Jubilee Garden",
        "location": "Ahmadnagar, Maharashtra",
        "description": "Jubilee Garden is a beautiful park located in the city center of Ahmadnagar. The garden offers a peaceful environment with well-maintained landscapes, making it a great place for families and nature lovers to relax and enjoy the outdoors."
    },
    {
        "title": "Chand Bibi Mahal",
        "location": "Ahmadnagar, Maharashtra",
        "description": "Chand Bibi Mahal is a historical palace that is associated with the famous queen Chand Bibi. The palace is located within the Ahmadnagar Fort and is an important historical landmark. Visitors can explore the architecture and the legends surrounding this site."
    },
    {
        "title": "Nathnagar Jain Temple",
        "location": "Ahmadnagar, Maharashtra",
        "description": "Nathnagar Jain Temple is a sacred temple dedicated to Jainism. It is known for its stunning architecture and peaceful ambiance, making it an ideal spot for those seeking tranquility and spiritual enlightenment."
    },
    {
        "title": "Brahma Valley",
        "location": "Near Ahmadnagar, Maharashtra",
        "description": "Brahma Valley is a scenic destination located near Ahmadnagar, offering breathtaking views of the surrounding landscapes. The area is perfect for nature enthusiasts, trekkers, and photography lovers who wish to capture the beauty of the valley."
    },
    {
        "title": "Milekhan Tomb",
        "location": "Ahmadnagar, Maharashtra",
        "description": "The Milekhan Tomb is a historical site located in Ahmadnagar, famous for its stunning Mughal architecture. It is a beautiful and peaceful spot for history enthusiasts to explore and learn more about the city's past."
    },
    {
        "title": "Ranjangaon Ganesh Temple",
        "location": "Ranjangaon, Maharashtra (50 km from Ahmadnagar)",
        "description": "Located around 50 km from Ahmadnagar, the Ranjangaon Ganesh Temple is one of the Ashtavinayak Temples and a popular religious destination for devotees of Lord Ganesha. The temple is known for its beautiful idol of Lord Ganesha and the tranquil atmosphere."
    },
    {
        "title": "Shirdi Sai Baba Temple",
        "location": "Shirdi, Maharashtra (83 km from Ahmadnagar)",
        "description": "Though not located directly in Ahmadnagar, the Shirdi Sai Baba Temple is approximately 83 km away and is one of the most popular pilgrimage destinations in India. Devotees from all over the world visit this temple to seek blessings from Sai Baba."
    },
    {
        "title": "Muktidham Temple",
        "location": "Nashik, Maharashtra",
        "description": "Muktidham Temple, located in nearby Nashik, is a significant religious site. The temple is known for its marble carvings and replicas of various Hindu shrines. It is a place of peace and reflection, and many people visit to seek spiritual solace."
    }
],


"services": [
    {
        "name": "Mumbai to Ahmadnagar Taxi",
        "description": "For a comfortable and reliable journey, choose Morya Cab for your Mumbai to Ahmadnagar taxi needs. We provide excellent service with professional drivers."
    },
    {
        "name": "Mumbai to Ahmadnagar Cab Service",
        "description": "Morya Cab offers reliable cab services for your Mumbai to Ahmadnagar trip. Our experienced drivers and well-maintained vehicles ensure a smooth ride."
    },
    {
        "name": "Mumbai to Ahmadnagar Taxi Fare",
        "description": "Morya Cab provides competitive taxi fares for your journey from Mumbai to Ahmadnagar. We offer transparent pricing with no hidden charges."
    },
    {
        "name": "Mumbai to Ahmadnagar One Way Taxi",
        "description": "Book a one-way taxi from Mumbai to Ahmadnagar with Morya Cab. Enjoy a safe and convenient ride with our affordable one-way options."
    },
    {
        "name": "Mumbai to Ahmadnagar Innova",
        "description": "Travel comfortably in an Innova from Mumbai to Ahmadnagar. Ideal for families or groups, this spacious vehicle provides a comfortable ride for everyone."
    },
    {
        "name": "Mumbai to Ahmadnagar Ertiga",
        "description": "Choose the Ertiga for a more budget-friendly yet comfortable journey from Mumbai to Ahmadnagar. Perfect for small families or groups of friends."
    },
    {
        "name": "Mumbai to Ahmadnagar Sedan",
        "description": "For those who prefer a more luxurious ride, Morya Cab offers premium sedans for your journey from Mumbai to Ahmadnagar."
    },
    {
        "name": "Mumbai to Ahmadnagar Car Hire",
        "description": "Morya Cab offers flexible car hire services for your trip to Ahmadnagar, giving you the freedom to travel at your own pace with a professional driver."
    },
    {
        "name": "Mumbai to Ahmadnagar by Cab",
        "description": "Enjoy a stress-free ride by booking a cab with Morya Cab for your Mumbai to Ahmadnagar trip. We ensure a smooth and safe travel experience."
    },
    {
        "name": "Ahmadnagar Trip from Mumbai",
        "description": "Looking to visit Ahmadnagar? Book a round-trip taxi with Morya Cab for a smooth and comfortable journey to and from Ahmadnagar."
    },
    {
        "name": "Mumbai to Ahmadnagar Drop Taxi",
        "description": "For a convenient drop-off to Ahmadnagar, Morya Cab offers affordable drop taxi services, ensuring your ride is comfortable and hassle-free."
    },
    {
        "name": "Mumbai to Ahmadnagar Taxi Booking",
        "description": "Booking your taxi from Mumbai to Ahmadnagar is simple with Morya Cab. Reach out to us for a seamless booking experience for your trip."
    },
    {
        "name": "Affordable Taxi Mumbai to Ahmadnagar",
        "description": "Looking for affordable taxi options from Mumbai to Ahmadnagar? Morya Cab offers budget-friendly fares without compromising on comfort or service."
    },
    {
        "name": "Mumbai to Ahmadnagar Round Trip",
        "description": "Morya Cab offers round-trip taxi services from Mumbai to Ahmadnagar, ensuring a comfortable and flexible travel experience."
    },
    {
        "name": "Taxi Service from Mumbai to Ahmadnagar",
        "description": "Morya Cab provides reliable taxi services from Mumbai to Ahmadnagar, with professional drivers ensuring a safe and timely arrival."
    }
],


tableData: [
    ["Mumbai to Ahmadnagar Taxi", "-Mumbai to Ahmadnagar Cab Service"],
    ["Mumbai to Ahmadnagar Taxi Fare", "-Mumbai to Ahmadnagar One Way Taxi"],
    ["Mumbai to Ahmadnagar Innova", "-Mumbai to Ahmadnagar Ertiga"],
    ["Mumbai to Ahmadnagar Sedan", "-Mumbai to Ahmadnagar Car Hire"],
    ["Mumbai to Ahmadnagar by Cab", "-Ahmadnagar Trip from Mumbai"],
    ["Mumbai to Ahmadnagar Drop Taxi", "-Mumbai to Ahmadnagar Taxi Booking"],
    ["Affordable Taxi Mumbai to Ahmadnagar", ""],
    ["Mumbai to Ahmadnagar Round Trip", ""],
    ["Taxi Service from Mumbai to Ahmadnagar", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand that time matters when traveling from Mumbai to Ahmadnagar. Our professional drivers ensure timely pickups and prompt drop-offs, making your journey smooth and punctual, whether it’s for business or leisure."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our vehicles are designed to provide a comfortable and relaxing experience during your Mumbai to Ahmadnagar trip. With air conditioning, ample legroom, and comfortable seating, you’ll have a pleasant ride throughout the journey."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are well-trained and experienced, with in-depth knowledge of routes between Mumbai and Ahmadnagar. They are dedicated to ensuring your journey is safe, smooth, and enjoyable, offering the best driving experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for your Mumbai to Ahmadnagar taxi service. There are no hidden charges—what you see is what you pay. We guarantee the best value for your money with no surprise costs."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly serviced and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to provide you with a worry-free journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available 24/7 for your convenience. Whether you need a taxi early in the morning or late at night, our customer service team is always ready to assist you in booking a taxi for your Mumbai to Ahmadnagar trip."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your taxi from Mumbai to Ahmadnagar is quick and easy. You can book online through our website or mobile app, or simply contact our customer service team for personalized assistance. We ensure a smooth and fast booking process."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We understand that every traveler’s needs are unique. If you have any special requirements for your journey, such as additional stops or specific routes, we offer customized travel packages that meet your needs and preferences."
    }
]















    }

    const faqData = [
        {
          question: "How can I book a Mumbai to Ahmadnagar taxi with Morya Cab?",
          answer: "You can easily book a taxi through our website or mobile app. If you need assistance, you can always contact our customer service team, who will guide you through the booking process."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are experienced in long-distance travel, including the Mumbai to Ahmadnagar route. They ensure a safe, smooth, and comfortable journey."
        },
        {
          question: "What types of vehicles are available for Mumbai to Ahmadnagar travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all designed for comfort on long journeys. Each vehicle is well-maintained for your safety and convenience."
        },
        {
          question: "How do I pay for my Mumbai to Ahmadnagar taxi rental?",
          answer: "We accept various payment methods, including cash, credit/debit cards, and online payments through our app, providing you with flexibility in how you pay."
        },
        {
          question: "Can I book a round trip from Mumbai to Ahmadnagar?",
          answer: "Yes, we offer round-trip taxi services. Simply provide your return details when booking, and we will ensure everything is arranged for your return journey."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "If there are any additional charges for waiting time or detours, they will be communicated to you upfront during the booking process, ensuring complete transparency."
        },
        {
          question: "Can I hire a taxi for sightseeing in Ahmadnagar?",
          answer: "Yes, we can arrange sightseeing tours in Ahmadnagar. Visit popular attractions like the Ahmadnagar Fort, Shri Digambar Jain Mandir, and more, with a professional driver to guide you."
        },
        {
          question: "What is the luggage allowance for a Mumbai to Ahmadnagar taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have more luggage or specific requirements, please inform us at the time of booking, and we will make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel from Mumbai to Ahmadnagar?",
          answer: "Yes, we provide corporate travel services for businesses. Whether it’s for meetings or corporate events, we can customize travel packages to suit your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Mumbai to Ahmadnagar travel?",
          answer: "Morya Cab offers reliable, safe, and affordable travel from Mumbai to Ahmadnagar. Our experienced drivers, well-maintained vehicles, and transparent pricing ensure that your journey is comfortable and stress-free."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Raghav Desai',
          role: 'Leisure Traveler',
          review: 'Our trip to Ahmadnagar was very smooth with Morya Cab. The vehicle was comfortable, and the driver was professional and courteous. We will definitely book again for our future travels!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Aishwarya Patil',
          role: 'Family Traveler',
          review: 'We had a great experience traveling from Mumbai to Ahmadnagar. The ride was comfortable, the driver was experienced, and we arrived on time without any hassle. Highly recommended!',
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
        "description": "Book your Mumbai to Ahmadnagar taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9359401610 for bookings!",
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
          "https://moryacab.com/img/mumbai-to-ahmadnagar-taxi.jpg",
          "https://moryacab.com/img/mumbai-to-ahmadnagar-cab-service.jpg"
        ],
        "priceRange": "₹4000 - ₹6000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/mumbai-to-ahmadnagar-taxi-service",
          "priceCurrency": "INR",
          "price": 5000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "reviewCount": 220
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Vikram Joshi"
            },
            "datePublished": "2024-06-12",
            "reviewBody": "Excellent taxi service from Mumbai to Ahmadnagar. The car was in great condition, and the driver was very professional. Highly recommended!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Deshmukh"
            },
            "datePublished": "2024-08-20",
            "reviewBody": "Affordable and reliable. I had a very comfortable ride from Mumbai to Ahmadnagar. The driver was punctual and courteous. Will use again."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Mumbai to Ahmadnagar Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0895,
            "longitude": 74.7448
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/mumbai-to-ahmadnagar-taxi-service"
        },
        "keywords": "mumbai to ahmadnagar taxi, mumbai to ahmadnagar cab service, mumbai to ahmadnagar taxi fare, mumbai to ahmadnagar one way taxi, mumbai to ahmadnagar innova, mumbai to ahmadnagar ertiga, mumbai to ahmadnagar sedan, mumbai to ahmadnagar car hire, mumbai to ahmadnagar by cab, ahmadnagar trip from mumbai, mumbai to ahmadnagar drop taxi, mumbai to ahmadnagar taxi booking, affordable taxi mumbai to ahmadnagar, mumbai to ahmadnagar round trip, taxi service from mumbai to ahmadnagar"
      };



    return (
        <div>
            <UsePageTracking/>
 <Helmet>
        <title>Mumbai to Ahmadnagar Taxi | Affordable & Reliable Cab Services | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book your Mumbai to Ahmadnagar taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9359401610."
        />
        <meta
          name="keywords"
          content="mumbai to ahmadnagar taxi, mumbai to ahmadnagar cab service, mumbai to ahmadnagar taxi fare, mumbai to ahmadnagar one way taxi, mumbai to ahmadnagar innova, mumbai to ahmadnagar ertiga, mumbai to ahmadnagar sedan, mumbai to ahmadnagar car hire, mumbai to ahmadnagar by cab, ahmadnagar trip from mumbai, mumbai to ahmadnagar drop taxi, mumbai to ahmadnagar taxi booking, affordable taxi mumbai to ahmadnagar, mumbai to ahmadnagar round trip, taxi service from mumbai to ahmadnagar"
        />
        <meta property="og:title" content="Mumbai to Ahmadnagar Taxi | Morya Cab Services" />
        <meta
          property="og:description"
          content="Book your Mumbai to Ahmadnagar taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!"
        />
        <meta property="og:url" content="https://moryacab.com/mumbai-to-ahmadnagar-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/mumbai-to-ahmadnagar-taxi.jpg" />
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
                            <img src='/images/keyword/35.jpg' alt='img' />
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

export default Mumbaitoahmednagartaxi;