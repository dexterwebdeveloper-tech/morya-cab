
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Mumbaicentraltopunetaxi() {



    const cardData =
    {
        keyword: 'Mumbai Central to Pune Taxi  ',
        heading: 'Morya Cabs: Mumbai Central to Pune Taxi ',
        headingDescription: 'Morya Cabs offers comfortable, reliable, and affordable taxi services from Mumbai Central to Pune. Whether you are traveling for business, leisure, or a weekend getaway, our professional drivers and well-maintained vehicles guarantee a smooth and hassle-free ride. The distance from Mumbai Central to Pune is approximately 150 km, and the journey usually takes around 3 to 4 hours by road. Enjoy the convenience, comfort, and safety of traveling with Morya Cabs.',

        top: 'Top Places to Visit in Pune with Morya Cabs',

"topPlaces": [
    {
        "title": "Shaniwar Wada",
        "location": "Pune, Maharashtra",
        "description": "Shaniwar Wada is a historical fortification and one of Pune’s most iconic landmarks. Built in 1736, it was once the seat of the Peshwa rulers. The fort offers a glimpse into the city’s rich history and majestic architecture, along with a beautiful garden. It is famous for its light-and-sound show in the evenings."
    },
    {
        "title": "Aga Khan Palace",
        "location": "Pune, Maharashtra",
        "description": "The Aga Khan Palace, built in 1892, is a symbol of India’s struggle for independence. It was used as a prison for Mahatma Gandhi and his associates during the Quit India Movement. The palace now houses a museum and offers a peaceful garden with views of the majestic structure."
    },
    {
        "title": "Sinhagad Fort",
        "location": "Pune, Maharashtra",
        "description": "Sinhagad Fort is located on a hilltop and offers a panoramic view of the surrounding Sahyadri mountains. The fort has historical significance from the Maratha Empire and is a popular spot for trekking, picnics, and enjoying delicious local food like 'pithla bhakri.'"
    },
    {
        "title": "Osho Ashram",
        "location": "Pune, Maharashtra",
        "description": "The Osho Ashram, also known as the Osho International Meditation Resort, is a peaceful retreat in Pune. Visitors from around the world come to experience meditation, spiritual teachings, and relaxation in a serene environment. It is one of the best places to rejuvenate the mind and soul."
    },
    {
        "title": "Shinde Chhatri",
        "location": "Pune, Maharashtra",
        "description": "Shinde Chhatri is a memorial to Mahadji Shinde, a Maratha commander. It is a beautiful example of Maratha architecture and features a stunning cenotaph surrounded by lush greenery. The memorial is dedicated to the sacrifices made by Mahadji Shinde for the Maratha Empire."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "location": "Pune, Maharashtra",
        "description": "This museum houses an impressive collection of artifacts that represent the culture, traditions, and history of India. The museum is known for its wide variety of items, including musical instruments, paintings, and carvings."
    },
    {
        "title": "Pune Okayama Friendship Garden",
        "location": "Pune, Maharashtra",
        "description": "The Pune Okayama Friendship Garden, also known as Osho Garden, is a serene and beautifully landscaped park located near the Osho Ashram. It is a tranquil space for a peaceful stroll amidst lush greenery and well-maintained gardens."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "location": "Pune, Maharashtra",
        "description": "The Pataleshwar Cave Temple is an ancient rock-cut temple dedicated to Lord Shiva, located in the heart of Pune. The temple dates back to the 8th century and is an architectural marvel that offers a glimpse into the city's historical and religious significance."
    },
    {
        "title": "Khadakwasla Dam",
        "location": "Pune, Maharashtra",
        "description": "Khadakwasla Dam is a popular spot for picnics and offers scenic views of the water reservoir. It is a serene place to relax, enjoy nature, and take a peaceful boat ride. The dam and its surroundings make it an ideal spot for outdoor activities."
    },
    {
        "title": "Fergusson College",
        "location": "Pune, Maharashtra",
        "description": "Fergusson College is one of the oldest and most prestigious colleges in Pune. The college building itself is an architectural beauty, with colonial-style architecture and lush green lawns. It is a good place to visit if you're interested in historical landmarks and educational heritage."
    }
],


"services": [
    {
        "name": "Mumbai Central to Pune Taxi",
        "description": "Morya Cab offers convenient and comfortable taxi services from Mumbai Central to Pune. Whether you're traveling for business, leisure, or any other purpose, we ensure a smooth and stress-free ride."
    },
    {
        "name": "Taxi from Mumbai Central to Pune",
        "description": "Book a taxi from Mumbai Central to Pune with Morya Cab and experience an enjoyable and efficient ride. Our drivers are experienced and know the best routes to ensure you reach your destination on time."
    },
    {
        "name": "Mumbai Central to Pune Cab Booking",
        "description": "Booking a cab from Mumbai Central to Pune is easy with Morya Cab. You can either book your ride online or contact us for a seamless and quick booking experience."
    },
    {
        "name": "Mumbai Central to Pune One-Way Taxi",
        "description": "Need a one-way trip from Mumbai Central to Pune? Morya Cab offers affordable one-way taxi services, making your journey easy and cost-effective."
    },
    {
        "name": "Mumbai Central to Pune Taxi Fare",
        "description": "At Morya Cab, we offer competitive and transparent pricing for your Mumbai Central to Pune taxi ride. Our taxi fares are designed to offer value for your money while ensuring a comfortable journey."
    },
    {
        "name": "Mumbai Central to Pune Innova",
        "description": "Travel in comfort with our premium Innova cabs from Mumbai Central to Pune. Ideal for families or groups, the Innova offers ample space and a luxurious ride."
    },
    {
        "name": "Mumbai Central to Pune Ertiga",
        "description": "For a more affordable option, book an Ertiga for your Mumbai Central to Pune trip. Spacious and comfortable, it’s perfect for small groups or families."
    },
    {
        "name": "Mumbai Central to Pune Sedan",
        "description": "Morya Cab also offers sedan services for your Mumbai Central to Pune journey. Whether you’re traveling solo or with a small group, the sedan offers a comfortable and stylish ride."
    },
    {
        "name": "Taxi from Mumbai Central to Pune by Cab",
        "description": "Morya Cab guarantees a smooth and comfortable ride from Mumbai Central to Pune. Our experienced drivers ensure your journey is stress-free, from pick-up to drop-off."
    },
    {
        "name": "Mumbai Central to Pune Drop Taxi",
        "description": "Choose our drop taxi service for a convenient ride from Mumbai Central to Pune. We provide prompt and efficient drop-offs at your destination, making your travel hassle-free."
    },
    {
        "name": "Mumbai Central to Pune Round Trip Taxi",
        "description": "If you need a round trip, Morya Cab offers a flexible and comfortable service. Book your round trip taxi from Mumbai Central to Pune and enjoy a seamless return journey."
    },
    {
        "name": "Mumbai Central to Pune Car Hire",
        "description": "For more flexibility, hire a car from Mumbai Central to Pune. Morya Cab offers reliable and well-maintained cars that are perfect for a comfortable and personalized journey."
    },
    {
        "name": "Mumbai Central to Pune by Car",
        "description": "Travel by car from Mumbai Central to Pune with Morya Cab and enjoy a relaxing ride. Our experienced drivers ensure you take the best routes for a quick and smooth trip."
    },
    {
        "name": "Mumbai Central to Pune Taxi Online Booking",
        "description": "Booking your taxi online is easy with Morya Cab. Simply visit our website to secure your ride from Mumbai Central to Pune and travel with ease."
    },
    {
        "name": "Cheapest Mumbai Central to Pune Taxi",
        "description": "Morya Cab offers affordable taxi services from Mumbai Central to Pune without compromising on quality or comfort. We pride ourselves on providing the best value for your travel."
    },
    {
        "name": "Contact Information for Morya Cab",
        "description": "For bookings or inquiries, call Morya Cab at +91 9359401610. Our team is ready to assist with your Mumbai Central to Pune taxi service!"
    }
],


tableData: [
    ["Mumbai Central to Pune Taxi", "-Taxi from Mumbai Central to Pune"],
    ["Mumbai Central to Pune Cab Booking", "-Mumbai Central to Pune One Way Taxi"],
    ["Mumbai Central to Pune Taxi Fare", "-Mumbai Central to Pune Innova"],
    ["Mumbai Central to Pune Ertiga", "-Mumbai Central to Pune Sedan"],
    ["Taxi from Mumbai Central to Pune by Cab", "-Mumbai Central to Pune Drop Taxi"],
    ["Mumbai Central to Pune Round Trip Taxi", "-Mumbai Central to Pune Car Hire"],
    ["Mumbai Central to Pune by Car", "-Mumbai Central to Pune Taxi Online Booking"],
    ["Cheapest Mumbai Central to Pune Taxi", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we ensure that your trip from Mumbai Central to Pune is always on time. Whether it's for business or leisure, our drivers ensure timely pickups and drop-offs, so you can enjoy a smooth, punctual journey."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We provide well-maintained, air-conditioned vehicles designed for comfort on long-distance journeys. Our taxis are spacious, with ample legroom, comfortable seating, and all the amenities needed for a relaxing ride from Mumbai Central to Pune."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our experienced drivers are skilled in handling long-distance routes like Mumbai Central to Pune. They know the best routes and ensure your trip is safe, smooth, and efficient. You can trust our professional drivers for a hassle-free experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing for your Mumbai Central to Pune taxi service. With no hidden charges, our pricing model is transparent, allowing you to plan your budget with confidence."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly serviced and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols to ensure a worry-free journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available round-the-clock for your travel needs. Whether you need an early morning ride or a late-night trip, we’re always here to assist you with your booking and ensure a seamless travel experience."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your taxi from Mumbai Central to Pune is quick and easy. You can book online via our website or mobile app, or contact our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages to suit your specific requirements. If you need to make any stops, or if you have special requests, we can tailor the trip to meet your preferences, making your journey more enjoyable."
    }
]














    }

    const faqData = [
        {
          question: "How can I book a Mumbai Central to Pune taxi with Morya Cab?",
          answer: "Booking is simple! You can book online through our website or mobile app. Alternatively, contact our customer service team for help with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are experienced in long-distance routes, including Mumbai Central to Pune, and they ensure a smooth, safe, and comfortable ride."
        },
        {
          question: "What types of vehicles are available for Mumbai Central to Pune travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars. All our vehicles are well-maintained and designed for comfort during your journey."
        },
        {
          question: "How do I pay for my Mumbai Central to Pune taxi rental?",
          answer: "We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Mumbai Central to Pune?",
          answer: "Yes, you can book a round trip. Simply provide your return details during booking, and we will arrange your return journey from Pune to Mumbai Central."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you upfront, ensuring transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Pune?",
          answer: "Yes, we offer sightseeing services in Pune. Explore popular attractions like Shaniwar Wada, Aga Khan Palace, and more with a trusted driver."
        },
        {
          question: "What is the luggage allowance for a Mumbai Central to Pune taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or specific requirements, let us know during booking, and we will make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Pune?",
          answer: "Yes, we provide corporate travel services to Pune. Whether it’s for business meetings or company events, we can customize the travel package to suit your needs."
        },
        {
          question: "Why should I choose Morya Cab for Mumbai Central to Pune travel?",
          answer: "Morya Cab offers reliable, safe, and affordable taxi services. With well-maintained vehicles, experienced drivers, and a focus on customer satisfaction, we ensure a comfortable and efficient journey for all your travel needs."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Anil Deshmukh',
          role: 'Business Traveler',
          review: 'We booked a taxi for our business trip from Mumbai Central to Pune, and the experience was fantastic. The driver was very professional, and the vehicle was clean and comfortable. We’ll definitely use Morya Cab again!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Rekha Sharma',
          role: 'Family Traveler',
          review: 'I traveled with my family from Mumbai Central to Pune using Morya Cab. The journey was smooth and comfortable. The driver was friendly and courteous, and the vehicle was spacious and clean. Highly recommend!',
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
        "description": "Book your Mumbai Central to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9359401610 for bookings!",
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
          "https://moryacab.com/img/mumbai-central-to-pune-taxi.jpg",
          "https://moryacab.com/img/mumbai-central-to-pune-cab-service.jpg"
        ],
        "priceRange": "₹2500 - ₹4000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/mumbai-central-to-pune-taxi-service",
          "priceCurrency": "INR",
          "price": 3000,
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
              "name": "Rohit Patil"
            },
            "datePublished": "2024-03-10",
            "reviewBody": "I had a great experience with Morya Cab. The vehicle was clean and the driver was professional. I will definitely book again!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Deshmukh"
            },
            "datePublished": "2024-09-05",
            "reviewBody": "Affordable and reliable service. The cab was on time, and the ride was smooth. Highly recommended for traveling from Mumbai Central to Pune."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Mumbai Central to Pune Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0760,
            "longitude": 72.8777
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/mumbai-central-to-pune-taxi-service"
        },
        "keywords": "mumbai central to pune taxi, taxi from mumbai central to pune, mumbai central to pune cab booking, mumbai central to pune one way taxi, mumbai central to pune taxi fare, mumbai central to pune innova, mumbai central to pune ertiga, mumbai central to pune sedan, taxi from mumbai central to pune by cab, mumbai central to pune drop taxi, mumbai central to pune round trip taxi, mumbai central to pune car hire, mumbai central to pune by car, mumbai central to pune taxi online booking, cheapest mumbai central to pune taxi"
      };
    


    return (
        <div>
            <UsePageTracking/>
<Helmet>
        <title>Mumbai Central to Pune Taxi | Affordable & Reliable Cab Services | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book your Mumbai Central to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9359401610."
        />
        <meta name="keywords" content="mumbai central to pune taxi, taxi from mumbai central to pune, one way taxi, affordable taxi service" />
        <meta property="og:title" content="Mumbai Central to Pune Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Mumbai Central to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!" />
        <meta property="og:url" content="https://moryacab.com/mumbai-central-to-pune-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/mumbai-central-to-pune-taxi.jpg" />
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
                            <img src='/images/keyword/23.jpg' alt='img' />
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

export default Mumbaicentraltopunetaxi;