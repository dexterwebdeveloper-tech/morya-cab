
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoganpatipunetaxi() {



    const cardData =
    {
        keyword: 'Pune to Ganpatipule Taxi ',
        heading: 'Morya Cabs: Pune to Ganpatipule Taxi ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Ganpatipule. Whether you are heading for a spiritual journey or a relaxing beach vacation, our professional drivers and well-maintained fleet ensure a smooth and enjoyable ride. The distance between Pune and Ganpatipule is approximately 330-350 km, and the journey typically takes around 7 to 8 hours by road. Sit back, relax, and enjoy the scenic drive with top-notch amenities and customer-oriented service.',

        top: 'Top Places to Visit in Ganpatipule with Morya Cabs:',

"topPlaces": [
    {
        "title": "Ganapati Temple",
        "description": "The main attraction in Ganpatipule, this ancient and revered temple is dedicated to Lord Ganesha. The idol is believed to be self-manifested, and the temple’s location near the beach enhances its spiritual significance."
    },
    {
        "title": "Ganpatipule Beach",
        "description": "A serene and beautiful beach along the Arabian Sea, perfect for unwinding and enjoying the natural beauty. The beach is less crowded, making it an ideal destination for relaxation and peace."
    },
    {
        "title": "Jaigad Fort",
        "description": "A historic fort near Ganpatipule, offering breathtaking views of the sea and surrounding landscapes. Its rich history and strategic location make it a must-visit for history enthusiasts."
    },
    {
        "title": "Aare Ware Beach",
        "description": "A pair of stunning beaches just a short drive from Ganpatipule, known for their crystal-clear waters, soft sands, and peaceful atmosphere. A great spot for beach lovers and those seeking tranquility."
    },
    {
        "title": "Prachin Konkan Museum",
        "description": "A fascinating museum that provides insights into the history, culture, and heritage of the Konkan region. Visitors can explore traditional lifestyles, artifacts, and historical exhibits."
    },
    {
        "title": "Malgund Beach",
        "description": "A quiet and less crowded beach near Ganpatipule, ideal for those seeking a peaceful retreat. The clear waters and calm ambiance make it perfect for relaxation."
    },
    {
        "title": "Swayambhu Ganapati Temple",
        "description": "An important religious site near Ganpatipule, this temple houses a naturally occurring idol of Lord Ganesha, making it a significant pilgrimage destination."
    },
    {
        "title": "Bhandarpule Beach",
        "description": "A pristine beach located slightly away from Ganpatipule, known for its clean shores and calm waters. It’s perfect for swimming, sunbathing, and a peaceful coastal experience."
    },
    {
        "title": "Ratnagiri",
        "description": "A historical town near Ganpatipule, known for its beautiful beaches and as the birthplace of freedom fighter Lokmanya Tilak. A visit to his house-turned-museum is highly recommended."
    },
    {
        "title": "Velneshwar Temple",
        "description": "Situated about 15 km from Ganpatipule, this serene temple is dedicated to Lord Shiva. The nearby Velneshwar Beach offers a quiet and scenic retreat by the sea."
    }
],


"services": [
    {
      "name": "Pune to Ganpatipule Taxi Fare",
      "description": "Morya Cab offers competitive and transparent taxi fares for your journey from Pune to Ganpatipule. Our pricing ensures you travel at an affordable rate, with no hidden charges."
    },
    {
      "name": "Pune to Ganpatipule Cab Charges",
      "description": "For your trip from Pune to Ganpatipule, Morya Cab offers clear and upfront cab charges. We provide the best value for your journey while maintaining high standards of comfort."
    },
    {
      "name": "Pune to Ganpatipule Taxi Booking",
      "description": "Booking a taxi from Pune to Ganpatipule is simple with Morya Cab. You can easily book your ride online or via phone, ensuring a hassle-free experience."
    },
    {
      "name": "Pune to Ganpatipule Car Rental",
      "description": "Morya Cab offers reliable car rental services for your trip to Ganpatipule. Choose from a variety of well-maintained vehicles for a comfortable ride."
    },
    {
      "name": "Pune to Ganpatipule Chauffeur-Driven Cabs",
      "description": "For a stress-free and comfortable journey, Morya Cab offers chauffeur-driven cabs from Pune to Ganpatipule. Our professional drivers ensure you have a smooth ride."
    },
    {
      "name": "Pune to Ganpatipule Taxi Rates",
      "description": "Morya Cab provides competitive taxi rates for your Pune to Ganpatipule trip. Our transparent pricing ensures you know the cost upfront, so there are no surprises during your journey."
    },
    {
      "name": "Pune to Ganpatipule Cab Pricing",
      "description": "Morya Cab offers clear and affordable pricing for your journey from Pune to Ganpatipule. We ensure excellent service at a reasonable price."
    },
    {
      "name": "Pune to Ganpatipule Taxi Fare Calculator",
      "description": "Morya Cab offers an easy-to-use taxi fare calculator for your Pune to Ganpatipule trip. Get an accurate estimate of the fare before you book your ride."
    },
    {
      "name": "Pune to Ganpatipule Private Car Hire",
      "description": "Morya Cab provides private car hire services for your trip from Pune to Ganpatipule. Enjoy a personal, comfortable, and hassle-free ride with our well-maintained vehicles."
    },
    {
      "name": "Pune to Ganpatipule Cab Cost",
      "description": "Morya Cab offers affordable cab costs for your journey from Pune to Ganpatipule. We ensure that you get the best value for your trip without compromising on quality."
    },
    {
      "name": "Pune to Ganpatipule Taxi Service Charges",
      "description": "Morya Cab has transparent and upfront service charges for your Pune to Ganpatipule taxi journey. We ensure there are no hidden fees and that you know exactly what you're paying for."
    },
    {
      "name": "Pune to Ganpatipule Taxi",
      "description": "Morya Cab offers comfortable and reliable taxis for your Pune to Ganpatipule journey. Whether it's a family trip or business travel, we provide a smooth and convenient ride."
    },
    {
      "name": "Cab from Pune to Ganpatipule",
      "description": "For a hassle-free journey, Morya Cab offers reliable cab services from Pune to Ganpatipule. Our professional drivers ensure your trip is comfortable and on time."
    },
    {
      "name": "Pune to Ganpatipule Cab Booking",
      "description": "Booking a cab from Pune to Ganpatipule is quick and easy with Morya Cab. We offer online and phone booking options for your convenience."
    },
    {
      "name": "Pune to Ganpatipule Cab Service",
      "description": "Morya Cab offers dependable and efficient cab services for your journey from Pune to Ganpatipule. We ensure a smooth and enjoyable ride with our experienced drivers and comfortable vehicles."
    },
    {
      "name": "Pune to Ganpatipule Innova Crysta",
      "description": "Morya Cab provides luxury Innova Crysta taxis for your Pune to Ganpatipule trip. Enjoy a comfortable and spacious ride with our well-maintained vehicles."
    },
    {
      "name": "Pune to Ganpatipule Innova Cab",
      "description": "For a premium ride, Morya Cab offers Innova cabs for your journey from Pune to Ganpatipule. Experience comfort and luxury with our top-quality vehicles."
    },
    {
      "name": "Pune to Ganpatipule Tempo Traveller",
      "description": "Morya Cab provides tempo traveller services for your Pune to Ganpatipule trip. Whether you're traveling in a group or need extra space, our tempo travellers are the perfect choice."
    },
    {
      "name": "17 Seater Tempo Traveller on Rent in Pune",
      "description": "Morya Cab offers 17-seater tempo travellers for rent in Pune. Enjoy the comfort and space of a larger vehicle for your group trip to Ganpatipule."
    },
    {
      "name": "Tempo Traveller on Rent in Pune",
      "description": "Morya Cab provides tempo traveller rentals in Pune for your trip to Ganpatipule. We offer a variety of vehicle sizes to suit your group’s needs."
    },
    {
      "name": "Pune to Ganpatipule Beach Cab Service",
      "description": "For a relaxing beach getaway, Morya Cab offers specialized beach cab services from Pune to Ganpatipule. Enjoy the scenic ride with a comfortable, professional driver."
    }
  ],


  tableData: [
    ["Pune to Ganpatipule Taxi Fare", "-Pune to Ganpatipule Cab Charges"],
    ["Pune to Ganpatipule Taxi Booking", "-Pune to Ganpatipule Car Rental"],
    ["Pune to Ganpatipule Chauffeur-Driven Cabs", "-Pune to Ganpatipule Taxi Rates"],
    ["Pune to Ganpatipule Cab Pricing", "-Pune to Ganpatipule Taxi Fare Calculator"],
    ["Pune to Ganpatipule Private Car Hire", "-Pune to Ganpatipule Cab Cost"],
    ["Pune to Ganpatipule Taxi Service Charges", "-Pune to Ganpatipule Taxi"],
    ["Cab from Pune to Ganpatipule", "-Pune to Ganpatipule Cab Booking"],
    ["Pune to Ganpatipule Cab Service", "-Pune to Ganpatipule Innova Crysta"],
    ["Pune to Ganpatipule Innova Cab", "-Pune to Ganpatipule Tempo Traveller"],
    ["17 Seater Tempo Traveller on Rent in Pune", "-Tempo Traveller on Rent in Pune"],
    ["Pune to Ganpatipule Beach Cab Service", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we value your time. Whether you’re heading to Ganpatipule for a religious visit, a weekend getaway, or a family vacation, our drivers ensure timely pickups and a smooth ride from Pune to Ganpatipule."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet includes a variety of vehicles such as sedans, SUVs, and premium cars that are well-suited for long journeys. With air conditioning, ample legroom, and comfortable seating, we ensure your ride to Ganpatipule is as relaxing as possible."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced in long-distance travel and know the best routes to take, ensuring you enjoy a safe and smooth journey. They are polite, professional, and prioritize your comfort and safety throughout the trip."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for your trip from Pune to Ganpatipule. We believe in upfront pricing with no hidden charges, so you can relax knowing you’re getting great value for your money."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. Our vehicles come equipped with modern safety features like airbags, seat belts, and GPS tracking, providing you with a secure and comfortable ride at all times."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available round the clock, so whether you need an early morning ride or a late-night return from Ganpatipule, we are here to meet your travel needs."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi from Pune to Ganpatipule is easy with Morya Cab. You can make your reservation online via our website or mobile app, or contact our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you’re traveling for leisure or religious purposes, we offer customized travel packages to suit your needs. Let us know your preferences, and we will make your journey to Ganpatipule unforgettable."
    }
]










    }

    const faqData = [
        {
          question: "How can I book a taxi from Pune to Ganpatipule with Morya Cab?",
          answer: "You can easily book a taxi online through our website or app, or reach out to our customer service team for assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced in long-distance travel, ensuring a safe, smooth, and comfortable journey to Ganpatipule."
        },
        {
          question: "What types of vehicles are available for the Pune to Ganpatipule trip?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all well-maintained and designed for your comfort during the long trip."
        },
        {
          question: "How do I pay for my Pune to Ganpatipule taxi rental?",
          answer: "We offer various payment options, including cash, credit/debit cards, and online payment through our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Ganpatipule?",
          answer: "Yes, we offer round trips for your convenience. Just provide us with the details of your return journey, and we will take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges, like waiting time or detours, will be communicated to you upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Ganpatipule?",
          answer: "Yes, we offer sightseeing trips in and around Ganpatipule. Explore the famous Ganpatipule Temple and other local attractions in comfort."
        },
        {
          question: "What is the luggage allowance for a Pune to Ganpatipule taxi?",
          answer: "Our vehicles have ample space for standard luggage. If you have more luggage or specific needs, kindly inform us at the time of booking, and we will make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Ganpatipule?",
          answer: "Yes, we provide corporate travel services, including group trips and business-related visits to Ganpatipule, with professional drivers and comfortable vehicles."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Ganpatipule travel?",
          answer: "Morya Cab offers a reliable, safe, and comfortable journey with professional drivers, modern vehicles, and transparent pricing, ensuring a hassle-free trip every time."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Arvind Joshi',
          role: 'Traveler',
          review: "We booked a taxi with Morya Cab for our family trip to Ganpatipule. The vehicle was spacious and comfortable, and the driver was courteous and professional. We had a wonderful experience!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Ms. Priya Deshmukh',
          role: 'Traveler',
          review: "Our trip to Ganpatipule was amazing, thanks to Morya Cab. The driver was punctual, and the car was well-maintained. The journey was smooth, and we were able to relax and enjoy our time.",
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
        "@type": "CarRental",
        "name": "Pune to Ganpatipule Taxi Service",
        "description": "Affordable and reliable taxi services from Pune to Ganpatipule. Enjoy comfortable and safe rides with flexible booking options for one-way or round-trip travel.",
        "provider": {
          "@type": "Organization",
          "name": "Pune Taxi Services",
          "url": "https://www.punetaxiservices.com",
          "telephone": "+91-9999999999",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 22, Pune City Mall, Pune",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411003",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 3500,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Pune"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "3500",
            "unitCode": "DAY",
            "description": "Taxi service from Pune to Ganpatipule per day"
          }
        },
        "keywords": "Pune to Ganpatipule Taxi Fare, Pune to Ganpatipule Cab Charges, Pune to Ganpatipule Taxi Booking, Pune to Ganpatipule Car Rental, Pune to Ganpatipule Chauffeur-Driven Cabs, Pune to Ganpatipule Taxi Rates, Pune to Ganpatipule Cab Pricing, Pune to Ganpatipule Taxi Service Charges"
      };
      

    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Ganpatipule Taxi Service | Affordable & Comfortable Ride | Call: +91 9359401610</title>
  <meta
    name="description"
    content="Affordable and reliable taxi services from Pune to Ganpatipule. Enjoy comfortable and safe rides with flexible booking options for one-way or round-trip travel."
  />
  <meta
    name="keywords"
    content="Pune to Ganpatipule Taxi Fare, Pune to Ganpatipule Cab Charges, Pune to Ganpatipule Taxi Booking, Pune to Ganpatipule Car Rental, Pune to Ganpatipule Chauffeur-Driven Cabs, Pune to Ganpatipule Taxi Rates, Pune to Ganpatipule Cab Pricing, Pune to Ganpatipule Taxi Service Charges"
  />
  <meta property="og:title" content="Pune to Ganpatipule Taxi Service | Affordable & Comfortable Ride" />
  <meta
    property="og:description"
    content="Affordable and reliable taxi services from Pune to Ganpatipule. Enjoy comfortable and safe rides with flexible booking options for one-way or round-trip travel."
  />
  <meta property="og:url" content="https://www.punetaxiservices.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.punetaxiservices.com/images/ganpatipule-taxi.jpg" />
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
                            <img src='/images/keyword/79.jpg' alt='img' />
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

export default Punetoganpatipunetaxi;