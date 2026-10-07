
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetobanglore() {



    const cardData =
    {
        keyword: 'Pune to Bangalore Taxi    ',
        heading: 'Morya Cabs: Pune to Bangalore Taxi   ',
        headingDescription: 'Morya Cabs offers efficient, comfortable, and budget-friendly taxi services from Pune to Bangalore. Whether you are traveling for business, a weekend getaway, or a long vacation, our fleet of well-maintained cars and experienced drivers ensure a hassle-free and pleasant journey. The distance between Pune and Bangalore is approximately 840 km, and the journey takes around 12 to 14 hours by road. Enjoy a seamless, safe, and relaxing ride with Morya Cabs as your travel companion.',

        top: 'Top Places to Visit in Bangalore with Morya Cabs',

   "topPlaces": [
    {
        "title": "Bangalore Palace",
        "location": "Bangalore, Karnataka",
        "description": "Inspired by England's Windsor Castle, Bangalore Palace is a royal residence with stunning architecture, beautiful paintings, and opulent interiors. It’s a must-visit for history and architecture lovers, providing a glimpse into the grandeur of Bangalore's royal past."
    },
    {
        "title": "Cubbon Park",
        "location": "Bangalore, Karnataka",
        "description": "Cubbon Park is a lush, green space in the heart of the city, perfect for morning jogs, walks, and relaxation. It is home to a variety of flora and fauna and is an ideal spot to unwind from the busy city life."
    },
    {
        "title": "Lalbagh Botanical Garden",
        "location": "Bangalore, Karnataka",
        "description": "Lalbagh is a famous botanical garden known for its impressive collection of plants, beautiful flower displays, and the iconic Glass House. The garden hosts various flower shows and is a great place for nature lovers and photographers."
    },
    {
        "title": "Vidhana Soudha",
        "location": "Bangalore, Karnataka",
        "description": "Vidhana Soudha is the seat of the state legislature of Karnataka. It is a majestic building known for its neo-Dravidian architecture. The illuminated building in the evening is a sight to behold and a key landmark in Bangalore."
    },
    {
        "title": "Bangalore Fort",
        "location": "Bangalore, Karnataka",
        "description": "Bangalore Fort is a historic site dating back to the 16th century, originally built by Kempe Gowda. The fort is famous for its gateway, which is the remnants of the fort’s past grandeur. It offers a glimpse into Bangalore’s history and heritage."
    },
    {
        "title": "Nandi Hills",
        "location": "Near Bangalore, Karnataka",
        "description": "Nandi Hills is a popular hill station located just outside Bangalore, offering panoramic views of the surrounding landscape. It’s an ideal location for a peaceful retreat, hiking, and photography, with a cool breeze and spectacular sunrise views."
    },
    {
        "title": "Chitrakala Parishath",
        "location": "Bangalore, Karnataka",
        "description": "Chitrakala Parishath is an arts complex that showcases Indian art forms, including paintings, sculptures, and folk art. It is a haven for art enthusiasts and hosts exhibitions, workshops, and cultural programs."
    },
    {
        "title": "Bannerghatta Biological Park",
        "location": "Bangalore, Karnataka",
        "description": "Located on the outskirts of Bangalore, Bannerghatta Biological Park is a unique blend of a zoo, safari park, and butterfly park. Visitors can explore the diverse wildlife, go on a safari, and enjoy the scenic beauty of the park."
    },
    {
        "title": "ISKCON Temple Bangalore",
        "location": "Bangalore, Karnataka",
        "description": "The ISKCON Temple in Bangalore is a beautiful and serene place of worship dedicated to Lord Krishna. With its grand architecture and peaceful surroundings, it offers spiritual solace and a cultural experience for devotees and tourists alike."
    },
    {
        "title": "UB City Mall",
        "location": "Bangalore, Karnataka",
        "description": "UB City is one of Bangalore’s most luxurious shopping malls, offering high-end brands, fine dining, and a cosmopolitan atmosphere. It’s a great spot for shopping, entertainment, and enjoying upscale cuisine in the heart of the city."
    }
],


"services": [
    {
        "name": "Pune to Bangalore Cab",
        "description": "Morya Cab offers reliable and comfortable cab services for your journey from Pune to Bangalore. Whether you’re traveling for business, leisure, or any special occasion, we ensure a smooth and enjoyable ride."
    },
    {
        "name": "Pune to Bangalore Taxi Service",
        "description": "Morya Cab provides top-notch taxi services from Pune to Bangalore, ensuring a comfortable and safe ride. Our professional drivers and well-maintained vehicles make your journey hassle-free."
    },
    {
        "name": "Pune to Bangalore One-Way Cab",
        "description": "If you're looking for a one-way trip from Pune to Bangalore, Morya Cab offers convenient one-way taxi services. Enjoy a direct and stress-free ride, with a professional driver ensuring your comfort throughout."
    },
    {
        "name": "Pune to Bangalore Round Trip Taxi",
        "description": "Morya Cab offers round-trip taxi services from Pune to Bangalore, allowing you to travel comfortably both ways. Our flexible round-trip options are designed to meet your schedule and travel needs."
    },
    {
        "name": "Pune to Bangalore Car Rental",
        "description": "Need a car rental for your Pune to Bangalore journey? Morya Cab provides car rental services, including both chauffeur-driven and self-drive options, ensuring a flexible and comfortable experience."
    },
    {
        "name": "Pune to Bangalore Taxi Fare",
        "description": "Morya Cab offers competitive and transparent taxi fares for your Pune to Bangalore trip. We ensure clear pricing with no hidden charges, so you can enjoy your journey with peace of mind."
    },
    {
        "name": "Pune to Bangalore Private Cab",
        "description": "Morya Cab provides private taxi services for your Pune to Bangalore journey. Travel in comfort and privacy with a dedicated vehicle and driver, ensuring a more personalized and enjoyable experience."
    },
    {
        "name": "Pune to Bangalore Shared Taxi",
        "description": "For a more affordable travel option, Morya Cab offers shared taxi services from Pune to Bangalore. Share the ride with others while still enjoying a safe and comfortable journey."
    },
    {
        "name": "Pune to Bangalore Taxi Charges",
        "description": "Morya Cab offers transparent and competitive taxi charges for your Pune to Bangalore trip. Our pricing is designed to offer the best value, with no hidden costs or surprises."
    },
    {
        "name": "Pune to Bangalore Cab Booking",
        "description": "Booking your Pune to Bangalore cab with Morya Cab is easy. Simply book online or by phone, and enjoy a convenient, hassle-free travel experience."
    },
    {
        "name": "Pune to Bangalore Travel by Taxi",
        "description": "Traveling by taxi from Pune to Bangalore with Morya Cab ensures a smooth and comfortable journey. Our professional drivers take the best routes to get you to your destination on time and in comfort."
    },
    {
        "name": "Pune to Bangalore Taxi Service",
        "description": "Morya Cab provides dependable taxi services for your journey from Pune to Bangalore. With a focus on customer satisfaction, we make sure your trip is as comfortable and convenient as possible."
    },
    {
        "name": "Pune to Bangalore Luxury Taxi",
        "description": "For a premium experience, Morya Cab offers luxury taxi services from Pune to Bangalore. Relax in comfort and style with our luxury vehicles, equipped with high-end features for a top-tier travel experience."
    },
    {
        "name": "Pune to Bangalore One-Way Taxi Fare",
        "description": "Morya Cab offers affordable and competitive one-way taxi fares from Pune to Bangalore. Get a fair price for a direct and comfortable journey without any hidden fees."
    },
    {
        "name": "Pune to Bangalore Taxi Contact Information",
        "description": "For prompt and reliable Pune to Bangalore taxi services, contact Morya Cab at +91 9371304510. We ensure a comfortable, enjoyable ride every time. Book your Pune to Bangalore taxi today!"
    }
],


tableData: [
    ["Pune to Bangalore Cab", "-Pune to Bangalore Taxi Service"],
    ["Pune to Bangalore One-Way Cab", "-Pune to Bangalore Round Trip Taxi"],
    ["Pune to Bangalore Car Rental", "-Pune to Bangalore Taxi Fare"],
    ["Pune to Bangalore Private Cab", "-Pune to Bangalore Shared Taxi"],
    ["Pune to Bangalore Taxi Charges", "-Pune to Bangalore Cab Booking"],
    ["Pune to Bangalore Travel by Taxi", "-Pune to Bangalore Taxi Service"],
    ["Pune to Bangalore Luxury Taxi", "-Pune to Bangalore One-Way Taxi Fare"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab ensures that your journey from Pune to Bangalore is punctual, whether you're traveling for business, leisure, or any other purpose. We provide timely pickups and drop-offs to ensure you reach your destination without any delays."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet consists of well-maintained vehicles that are spacious and designed for long-distance travel. Whether you're traveling solo or with family, you’ll enjoy a comfortable ride with air conditioning, ample legroom, and comfortable seating throughout the journey."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly skilled in handling long-distance trips. They are well-acquainted with the best routes from Pune to Bangalore and ensure a safe, smooth, and efficient journey. You can rely on their professionalism for a stress-free travel experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing for Pune to Bangalore taxi services. We ensure no hidden charges, and our pricing is transparent so you can enjoy a hassle-free journey without any surprise costs."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety guidelines, ensuring that your journey is both safe and comfortable."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "We are available round-the-clock to cater to your travel needs. Whether it's an early morning departure or a late-night return, Morya Cab’s customer service team is always ready to assist you with your booking."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Bangalore taxi is quick and easy. You can either book online via our website or mobile app, or you can contact our customer service team for personalized assistance in making your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages for your Pune to Bangalore trip. Whether you have specific preferences for stops, detours, or a longer stay in between, we can tailor the journey to suit your needs."
    }
]








    }


    const faqData = [
        {
          question: "How can I book a Pune to Bangalore taxi with Morya Cab?",
          answer: "Booking is simple! You can book a taxi online via our website or mobile app, or reach out to our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced and trained to handle long journeys like Pune to Bangalore. They ensure a safe and smooth journey for you."
        },
        {
          question: "What types of vehicles are available for Pune to Bangalore travel?",
          answer: "We offer a range of vehicles, including sedans, SUVs, and luxury cars, all of which are well-maintained and comfortable for long-distance travel."
        },
        {
          question: "How do I pay for my Pune to Bangalore taxi rental?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payments through our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Bangalore?",
          answer: "Yes, we offer round-trip services. Just provide us with your return details during the booking process, and we’ll take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you in advance, ensuring complete transparency about your pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Bangalore?",
          answer: "Yes, we offer sightseeing services in Bangalore. You can visit popular spots like Lalbagh Botanical Garden, Bangalore Palace, Cubbon Park, and more with a trusted driver."
        },
        {
          question: "What is the luggage allowance for a Pune to Bangalore taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have more luggage or specific needs, please inform us at the time of booking, and we will arrange accordingly."
        },
        {
          question: "Is Morya Cab available for corporate travel to Bangalore?",
          answer: "Yes, we provide corporate travel services for business trips to Bangalore. We can customize travel packages to meet your company’s requirements, including corporate meetings, conferences, and events."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Bangalore travel?",
          answer: "Morya Cab offers reliable, safe, and affordable taxi services with well-maintained vehicles and experienced drivers. We ensure a comfortable and stress-free journey to Bangalore."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rajesh Kapoor',
          role: 'Business Traveler',
          review: 'I traveled from Pune to Bangalore for a business trip, and Morya Cab made the experience seamless. The driver was professional, the car was comfortable, and I arrived on time. I highly recommend their services!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Priya Joshi',
          role: 'Family Traveler',
          review: 'We used Morya Cab for our family trip from Pune to Bangalore. The journey was comfortable, and the driver was courteous and knowledgeable. We will definitely use their services again.',
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
        "description": "Book your Pune to Bangalore taxi with Morya Cab. Affordable and reliable one-way and round-trip taxi services, including luxury cabs and shared taxis. Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/pune-to-bangalore-taxi.jpg",
          "https://moryacab.com/img/pune-to-bangalore-cab-service.jpg"
        ],
        "priceRange": "₹8000 - ₹13000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-bangalore-taxi-service",
          "priceCurrency": "INR",
          "price": 11000,
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
              "name": "Ravi Sharma"
            },
            "datePublished": "2024-06-10",
            "reviewBody": "The journey from Pune to Bangalore was fantastic. Comfortable ride and great service. The driver was very friendly and professional. Highly recommended!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Yadav"
            },
            "datePublished": "2024-07-18",
            "reviewBody": "Booked a round-trip taxi from Pune to Bangalore. The service was exceptional and value for money. Clean car, on-time arrival, and smooth ride!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Bangalore Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-bangalore-taxi-service"
        },
        "keywords": "Pune to Bangalore taxi, Pune to Bangalore cab service, Pune to Bangalore one-way cab, Pune to Bangalore round trip, Pune to Bangalore car rental, Pune to Bangalore taxi fare, Pune to Bangalore private cab, Pune to Bangalore shared taxi, Pune to Bangalore taxi charges, Pune to Bangalore cab booking, Pune to Bangalore travel by taxi, Pune to Bangalore luxury taxi, Pune to Bangalore one-way taxi fare"
      };


    return (
        <div>
            <UsePageTracking/>
<Helmet>
        <title>Pune to Bangalore Taxi | Affordable & Reliable Taxi Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Pune to Bangalore taxi with Morya Cab. Affordable and reliable one-way and round-trip taxi services, including luxury cabs and shared taxis."
        />
        <meta name="keywords" content="Pune to Bangalore taxi, Pune to Bangalore cab service, Pune to Bangalore one-way taxi, Pune to Bangalore round trip, Pune to Bangalore car rental, Pune to Bangalore taxi fare, Pune to Bangalore private cab, Pune to Bangalore shared taxi, Pune to Bangalore taxi charges, Pune to Bangalore taxi booking" />
        <meta property="og:title" content="Pune to Bangalore Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Pune to Bangalore taxi with Morya Cab. Affordable, reliable, and comfortable one-way and round-trip taxi services." />
        <meta property="og:url" content="https://moryacab.com/pune-to-bangalore-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-bangalore-taxi.jpg" />
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
                            <img src='/images/keyword/14.jpg' alt='img' />
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

export default Punetobanglore;