
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Kalyantopunetaxi() {



    const cardData =
    {
        keyword: 'Kalyan to Pune Taxi  ',
        heading: 'Morya Cabs: Kalyan to Pune Taxi ',
        headingDescription: 'Morya Cabs offers convenient and affordable taxi services for your journey from Kalyan to Pune. Whether you are traveling for a business trip, family vacation, or a weekend getaway, our well-maintained fleet and skilled drivers ensure a comfortable and safe journey. The distance between Kalyan and Pune is approximately 160 km, and the ride typically takes about 3 to 4 hours, depending on the traffic conditions. Enjoy a smooth and relaxing ride with Morya Cabs, offering excellent service and timely pickups.',

        top: 'Top Places to Visit in Pune with Morya Cabs',

"topPlaces": [
    {
        "title": "Shaniwar Wada",
        "location": "Pune, Maharashtra",
        "description": "A historical fort and palace, Shaniwar Wada is a popular landmark in Pune. It served as the seat of the Peshwa rulers and is known for its architectural beauty and historical significance."
    },
    {
        "title": "Aga Khan Palace",
        "location": "Pune, Maharashtra",
        "description": "This stunning palace is famous not only for its architectural charm but also for its connection to India's independence movement. It was here that Mahatma Gandhi was imprisoned. The palace now houses a museum."
    },
    {
        "title": "Sinhagad Fort",
        "location": "Pune, Maharashtra",
        "description": "For adventure seekers and history buffs alike, Sinhagad Fort offers a scenic trek with spectacular views. It holds significant historical importance and is a must-visit for nature lovers and history enthusiasts."
    },
    {
        "title": "Osho Ashram",
        "location": "Pune, Maharashtra",
        "description": "Located in the heart of Pune, Osho Ashram is a serene meditation center that attracts visitors from around the world. It is a perfect destination for spiritual seekers and those looking for peace and tranquility."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "location": "Pune, Maharashtra",
        "description": "One of Pune’s oldest rock-cut temples, Pataleshwar Cave Temple is dedicated to Lord Shiva and is a peaceful and spiritual spot with impressive architecture and sculptures."
    },
    {
        "title": "Shreemant Dagdusheth Halwai Ganpati Temple",
        "location": "Pune, Maharashtra",
        "description": "A revered temple in Pune, dedicated to Lord Ganesha, this temple attracts thousands of devotees and is particularly famous during the Ganesh Chaturthi festival. It’s known for its spiritual vibe and intricate temple design."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "location": "Pune, Maharashtra",
        "description": "This museum showcases a diverse collection of artifacts from Indian history, art, and culture. It's an excellent place to explore Pune’s rich heritage."
    },
    {
        "title": "Pune Okayama Friendship Garden",
        "location": "Pune, Maharashtra",
        "description": "Inspired by Japanese-style gardens, this tranquil spot in Pune offers a peaceful escape for those looking to relax amidst nature. It is perfect for a leisurely walk or meditation."
    },
    {
        "title": "Fergusson College",
        "location": "Pune, Maharashtra",
        "description": "A prestigious college in Pune, Fergusson College is known for its beautiful campus and historical architecture, making it a great place to explore Pune’s educational legacy."
    },
    {
        "title": "Katraj Snake Park",
        "location": "Pune, Maharashtra",
        "description": "For wildlife enthusiasts, Katraj Snake Park is a fascinating destination to explore various species of snakes and reptiles. The park plays an important role in animal conservation."
    }
],


"services": [
    {
        "name": "Kalyan to Pune Taxi Service",
        "description": "Book a reliable Kalyan to Pune taxi with Morya Cab. We offer comfortable and safe rides from Kalyan to Pune, with excellent customer service and professional drivers ensuring your journey is stress-free."
    },
    {
        "name": "Kalyan to Pune Cab Service",
        "description": "Our Kalyan to Pune cab service provides well-maintained vehicles and punctual drivers, guaranteeing a smooth journey. Whether you're traveling for business or leisure, we cater to all your needs."
    },
    {
        "name": "Kalyan to Pune Taxi Fare",
        "description": "The Kalyan to Pune taxi fare is transparent and affordable with no hidden charges. You can expect competitive pricing for your trip without any surprises."
    },
    {
        "name": "Kalyan to Pune One-Way Taxi",
        "description": "If you’re planning a one-way trip from Kalyan to Pune, Morya Cab offers great rates and ensures a hassle-free journey. Our one-way taxis are ideal for those needing a straightforward trip with no detours."
    },
    {
        "name": "Kalyan to Pune Innova",
        "description": "Travel comfortably with our Innova taxis from Kalyan to Pune. Perfect for families or small groups, the Innova offers ample space, making your ride enjoyable and comfortable."
    },
    {
        "name": "Kalyan to Pune Ertiga",
        "description": "For a smaller group, our Ertiga cabs are an affordable and comfortable choice. This compact vehicle offers a pleasant ride without compromising on space."
    },
    {
        "name": "Kalyan to Pune Sedan",
        "description": "For individuals or couples, our sedan taxis offer a sleek and comfortable ride. With good legroom and air-conditioning, you’ll enjoy a smooth journey from Kalyan to Pune."
    },
    {
        "name": "Taxi Booking from Kalyan to Pune",
        "description": "Booking a taxi from Kalyan to Pune with Morya Cab is quick and easy. Whether you need a last-minute ride or have a planned trip, we’ll ensure a reliable taxi service."
    },
    {
        "name": "Kalyan to Pune Drop Taxi",
        "description": "If you need a drop taxi from Kalyan to Pune, Morya Cab is your go-to service. We will pick you up from your preferred location and take you directly to your destination in Pune."
    },
    {
        "name": "Mumbai to Pune Kalyan Taxi",
        "description": "If you’re traveling from Mumbai to Pune via Kalyan, we have the best taxi options for you. Our vehicles are available for your convenience with professional drivers who know the best routes."
    },
    {
        "name": "Kalyan to Pune Round Trip",
        "description": "Our round trip taxi service is perfect if you need a return ride from Pune to Kalyan. Book a taxi with Morya Cab for your complete journey, and we’ll take care of the rest."
    },
    {
        "name": "Kalyan to Pune Online Taxi Booking",
        "description": "Booking a taxi online for your Kalyan to Pune trip has never been easier. Simply visit our website or call our support team, and we’ll confirm your booking instantly."
    },
    {
        "name": "Kalyan to Pune Car Hire",
        "description": "Looking for a car hire for your journey from Kalyan to Pune? Morya Cab offers flexible options to suit your travel needs, whether you need a taxi for a few hours or an entire day."
    },
    {
        "name": "Kalyan to Pune Sedan Taxi",
        "description": "Our sedan taxis are available for those who prefer a smooth, quiet, and private journey from Kalyan to Pune. Ideal for solo travelers and couples."
    },
    {
        "name": "Affordable Kalyan to Pune Taxi",
        "description": "Morya Cab offers affordable and reliable Kalyan to Pune taxi services. We provide the best pricing without compromising on the quality of service, ensuring you get value for money."
    },
    {
        "name": "Contact Morya Cab for Your Kalyan to Pune Taxi Booking",
        "description": "Call us at +91 9371304510 or visit our website for easy booking of your Kalyan to Pune taxi."
    }
],


tableData: [
    ["Kalyan to Pune Taxi", "-Kalyan to Pune Cab Service"],
    ["Kalyan to Pune Taxi Fare", "-Kalyan to Pune One Way Taxi"],
    ["Kalyan to Pune Innova", "-Kalyan to Pune Ertiga"],
    ["Kalyan to Pune Sedan", "-Kalyan to Pune Taxi Booking"],
    ["Taxi from Kalyan to Pune", "-Kalyan to Pune Drop Taxi"],
    ["Mumbai to Pune Kalyan Taxi", "-Kalyan to Pune Round Trip"],
    ["Kalyan to Pune Online Taxi Booking", "-Kalyan to Pune Car Hire"],
    ["Kalyan to Pune Sedan Taxi", "-Affordable Kalyan to Pune Taxi"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand how important punctuality is for your travels. Whether you're going for a business trip or a leisure getaway, we ensure timely pickups and prompt drop-offs, providing a smooth journey from Kalyan to Pune."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer well-maintained, spacious vehicles designed to make your trip comfortable. With ample legroom, comfortable seating, and air conditioning, you can relax during your ride from Kalyan to Pune."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly skilled and experienced in handling long-distance journeys like Kalyan to Pune. They are familiar with the best routes, ensuring a smooth, safe, and timely trip while making sure your comfort is prioritized."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab provides affordable and competitive pricing for Kalyan to Pune taxi services. Our pricing is transparent with no hidden charges, ensuring that you get the best value for your money."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All our vehicles are regularly serviced and equipped with safety features like airbags, seat belts, and GPS tracking. Our drivers strictly adhere to safety protocols, so you can enjoy a worry-free journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "We are available round-the-clock for your convenience. Whether it’s an early morning departure or a late-night ride, Morya Cab ensures that you can book a taxi for Kalyan to Pune at any time. Our customer service team is always ready to assist."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your taxi from Kalyan to Pune is easy. You can book online through our website or mobile app, or reach out to our customer service team for personalized assistance, making the booking process quick and hassle-free."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer flexible travel packages tailored to your preferences. Whether you need additional stops along the way or wish to customize your trip, we can arrange everything according to your requirements."
    }
]












    }

    const faqData = [
        {
          question: "How can I book a Kalyan to Pune taxi with Morya Cab?",
          answer: "You can book your taxi online via our website or mobile app. Alternatively, you can contact our customer service team for any booking assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are well-trained and experienced in handling long-distance routes such as Kalyan to Pune. They ensure that you have a safe, smooth, and comfortable journey."
        },
        {
          question: "What types of vehicles are available for Kalyan to Pune travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all well-maintained and equipped for long-distance travel with modern amenities."
        },
        {
          question: "How do I pay for my Kalyan to Pune taxi rental?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payments via our app, making it easy to settle your fare conveniently."
        },
        {
          question: "Can I book a round trip from Kalyan to Pune?",
          answer: "Yes, you can book a round-trip taxi. Just provide your return details at the time of booking, and we’ll handle the rest to ensure your round-trip journey is seamless."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges for waiting time or detours will be communicated to you upfront during the booking process, ensuring complete transparency in our pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Pune?",
          answer: "Yes, we offer sightseeing services in Pune. If you wish to explore the city after your arrival, we can arrange trips to popular attractions like Shaniwar Wada, Aga Khan Palace, and more."
        },
        {
          question: "What is the luggage allowance for a Kalyan to Pune taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or specific requirements, please inform us at the time of booking, and we will make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel from Kalyan to Pune?",
          answer: "Yes, we provide corporate travel services. Whether for business meetings or corporate events, we can customize the travel package to meet your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Kalyan to Pune travel?",
          answer: "Morya Cab offers reliable, professional, and affordable taxi services. With experienced drivers, well-maintained vehicles, and transparent pricing, we ensure a safe, comfortable, and efficient journey."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rajesh Kulkarni',
          role: 'Business Traveler',
          review: 'I had an excellent experience with Morya Cab. The ride from Kalyan to Pune was smooth, and the driver was very professional. The vehicle was clean and comfortable. I highly recommend this service!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Shilpa Naik',
          role: 'Family Traveler',
          review: 'Our family booked a taxi for our trip from Kalyan to Pune, and it was a delightful experience. The driver was friendly, and the ride was smooth and safe. We will definitely use Morya Cab again!',
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
        "description": "Book your Kalyan to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/kalyan-to-pune-taxi.jpg",
          "https://moryacab.com/img/kalyan-to-pune-cab-service.jpg"
        ],
        "priceRange": "₹2500 - ₹4500",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/kalyan-to-pune-taxi-service",
          "priceCurrency": "INR",
          "price": 3500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.6,
          "reviewCount": 150
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Suresh Kumar"
            },
            "datePublished": "2024-01-10",
            "reviewBody": "Great service! The ride from Kalyan to Pune was smooth, and the driver was polite. I highly recommend this taxi service."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Nina Gupta"
            },
            "datePublished": "2024-06-20",
            "reviewBody": "Morya Cab is reliable, on time, and affordable. My Kalyan to Pune trip was comfortable, and the car was in great condition."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Kalyan to Pune Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.2183,
            "longitude": 73.0247
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/kalyan-to-pune-taxi-service"
        },
        "keywords": "kalyan to pune taxi, kalyan to pune cab service, kalyan to pune taxi fare, kalyan to pune one way taxi, kalyan to pune innova, kalyan to pune ertiga, kalyan to pune sedan, kalyan to pune taxi booking, taxi from kalyan to pune, kalyan to pune drop taxi, mumbai to pune kalyan taxi, kalyan to pune round trip, kalyan to pune online taxi booking, kalyan to pune car hire, kalyan to pune sedan taxi, affordable kalyan to pune taxi"
      };


    return (
        <div>
            <UsePageTracking/>
  <Helmet>
        <title>Kalyan to Pune Taxi | Affordable & Reliable Cab Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Kalyan to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510."
        />
        <meta name="keywords" content="kalyan to pune taxi, cab services, taxi booking, affordable taxi" />
        <meta property="og:title" content="Kalyan to Pune Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Kalyan to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!" />
        <meta property="og:url" content="https://moryacab.com/kalyan-to-pune-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/kalyan-to-pune-taxi.jpg" />
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
                            <img src='/images/keyword/30.jpg' alt='img' />
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

export default Kalyantopunetaxi;