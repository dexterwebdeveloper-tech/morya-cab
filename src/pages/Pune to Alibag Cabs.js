
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoalibaugcabs() {



    const cardData =
    {
        keyword: 'Pune to Alibag Taxi ',
        heading: 'Morya Cabs: Pune to Alibag Taxi ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Alibag. Whether you are heading for a beach vacation or a weekend getaway, our professional drivers and well-maintained fleet ensure a smooth and enjoyable ride. The distance between Pune and Alibag is approximately 140-160 km, and the journey typically takes around 3 to 4 hours by road. Experience a hassle-free and comfortable ride with our top-notch services.',

        top: 'Top Places to Visit in Alibag with Morya Cabs:',

"topPlaces": [
    {
        "title": "Alibag Beach",
        "description": "The most popular attraction in Alibag, known for its clean, sandy shore and relaxed atmosphere. Visitors can enjoy a peaceful time by the sea, go for a swim, or take a boat ride to nearby forts."
    },
    {
        "title": "Kolaba Fort",
        "description": "A historic sea fort located just off Alibag Beach, offering a glimpse into the region's rich history. Accessible by a short boat ride, it is known for its scenic views of the Arabian Sea."
    },
    {
        "title": "Nagaon Beach",
        "description": "A quieter beach compared to Alibag Beach, Nagaon Beach is known for its tranquil waters and lush green surroundings. Perfect for a relaxed day by the sea or a water sports adventure."
    },
    {
        "title": "Kihim Beach",
        "description": "Located a short drive from Alibag, Kihim Beach is surrounded by natural beauty and is famous for its clean sand and peaceful atmosphere. It’s an excellent spot for beach lovers and nature enthusiasts."
    },
    {
        "title": "Kanakeshwar Forest",
        "description": "For those who love nature, Kanakeshwar Forest offers a serene and peaceful experience. The forest is home to various wildlife species and is perfect for nature walks and trekking."
    },
    {
        "title": "Varsoli Beach",
        "description": "A secluded beach near Alibag, Varsoli Beach is known for its beautiful setting and tranquil ambiance. It’s ideal for those looking to escape the crowds and enjoy some quiet time in nature."
    },
    {
        "title": "Alibag Jain Temple",
        "description": "A historical and religious site dedicated to Lord Adinatha, the Alibag Jain Temple is an important pilgrimage spot for Jains in the region. The temple's peaceful environment adds to its spiritual significance."
    },
    {
        "title": "Mandwa Beach",
        "description": "Famous for its clean and calm surroundings, Mandwa Beach offers a peaceful getaway for visitors. It also serves as the gateway for ferries to Mumbai, making it a popular stop for travelers."
    },
    {
        "title": "Sarkhel Kanhoji Angre Marine Museum",
        "description": "Located near Alibag Beach, the museum showcases artifacts related to maritime history and Kanhoji Angre, the renowned Maratha naval leader. A fascinating spot for history lovers."
    },
    {
        "title": "Brahma Kund",
        "description": "A sacred site and historical place located a short distance from Alibag. Ideal for those looking to experience local culture and traditions in a peaceful setting."
    }
],


"services": [
    {
      "name": "Pune to Alibag Cabs",
      "description": "Morya Cab provides comfortable and reliable cab services for your journey from Pune to Alibag. Whether you’re visiting for leisure or a quick getaway, we ensure a smooth and pleasant ride."
    },
    {
      "name": "Pune to Alibag Taxi Booking",
      "description": "Booking a taxi for your Pune to Alibag trip is easy with Morya Cab. You can book online or via phone, making it convenient for you to plan your journey without any hassle."
    },
    {
      "name": "Pune to Alibag Taxi Rates",
      "description": "Morya Cab offers competitive and transparent taxi rates for your Pune to Alibag trip. We ensure affordable pricing without compromising on the quality of service."
    },
    {
      "name": "Pune to Alibag Cab Charges",
      "description": "We provide upfront cab charges for your Pune to Alibag journey. With no hidden costs, Morya Cab guarantees a stress-free experience while you travel to Alibag."
    },
    {
      "name": "Pune to Alibag Cab Pricing",
      "description": "Morya Cab offers fair and transparent pricing for your trip from Pune to Alibag. We ensure that you get value for your money with no unexpected charges during your journey."
    },
    {
      "name": "Pune to Alibag Private Car Hire",
      "description": "For a more private and comfortable experience, Morya Cab offers private car hire services for your Pune to Alibag journey. Travel at your own pace with a professional driver and well-maintained car."
    },
    {
      "name": "Pune to Alibag Cab Cost",
      "description": "Morya Cab offers affordable and upfront cab costs for your trip to Alibag. We provide clear cost estimates, so you can plan your trip with peace of mind."
    },
    {
      "name": "Pune to Alibag Taxi Service",
      "description": "Morya Cab provides reliable and efficient taxi services for your Pune to Alibag journey. Our professional drivers and well-maintained vehicles ensure that your travel experience is smooth and enjoyable."
    },
    {
      "name": "Pune to Alibag Cab",
      "description": "Morya Cab offers comfortable cabs for your journey from Pune to Alibag. Whether you’re traveling alone, with family, or in a group, we have a wide range of vehicles to suit your needs."
    },
    {
      "name": "Pune to Alibag Cab Fare",
      "description": "Morya Cab ensures transparent and affordable fares for your journey to Alibag. Our pricing structure is clear, with no hidden charges, making your trip hassle-free."
    },
    {
      "name": "Pune to Alibag Round Trip",
      "description": "For those planning a round trip to Alibag, Morya Cab offers flexible options. We provide a comfortable and punctual round trip service, ensuring you have a relaxing journey to and from Alibag."
    },
    {
      "name": "Pune to Alibag Cabs",
      "description": "Morya Cab offers a variety of cabs for your Pune to Alibag trip. Whether you need a sedan, SUV, or other vehicle types, we have you covered for a smooth and convenient ride."
    },
    {
      "name": "Pune to Alibag Innova Crysta",
      "description": "For a luxurious and spacious ride, Morya Cab offers Innova Crysta cabs for your journey to Alibag. Experience comfort and style with this premium vehicle."
    },
    {
      "name": "Pune to Alibag Tempo Traveller on Rent",
      "description": "Morya Cab provides tempo travellers on rent for your group travel to Alibag. Whether you’re traveling with family or friends, our tempo travellers ensure a comfortable and spacious ride."
    },
    {
      "name": "Pune to Alibag Sedan Cab Service",
      "description": "Morya Cab offers sedan cabs for your trip to Alibag. Ideal for smaller groups or couples, our sedan cabs provide a comfortable, stylish ride at an affordable price."
    },
    {
      "name": "Pune to Alibag Swift Taxi Service",
      "description": "If you prefer a compact car for your journey, Morya Cab offers Swift Dzire taxis for rent. Enjoy a comfortable and efficient ride to Alibag with our Swift taxi service."
    },
    {
      "name": "Pune to Alibag Kia Carens Taxi Service",
      "description": "Morya Cab also offers Kia Carens for your Pune to Alibag trip. Travel in style and comfort with this 7-seater vehicle that offers ample space and a smooth ride."
    },
    {
      "name": "Pune to Alibag One Day Trip Cab Package",
      "description": "Morya Cab provides one-day trip cab packages from Pune to Alibag. Enjoy a seamless trip with a professional driver and well-maintained vehicle, making the most of your day trip."
    }
  ],


  tableData: [
    ["Pune to Alibag Cabs", "-Pune to Alibag Taxi Booking"],
    ["Pune to Alibag Taxi Rates", "-Pune to Alibag Cab Charges"],
    ["Pune to Alibag Cab Pricing", "-Pune to Alibag Private Car Hire"],
    ["Pune to Alibag Cab Cost", "-Pune to Alibag Taxi Service"],
    ["Pune to Alibag Cab", "-Pune to Alibaug Cab Fare"],
    ["Pune to Alibaug Round Trip", "-Pune to Alibag Cabs"],
    ["Pune to Alibag Innova Crysta", "-Pune to Alibaug Tempo Traveller on Rent"],
    ["Pune to Alibag Sedan Cab Service", "-Pune to Alibag Swift Taxi Service"],
    ["Pune to Alibaug Kia Carens Taxi Service", "-Pune to Alibaug One Day Trip Cab Package"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of punctuality. Whether you're traveling to Alibag for a vacation, beach getaway, or business trip, we ensure timely pickups and a hassle-free journey, so you can make the most of your trip."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet includes a variety of well-maintained vehicles, including sedans, SUVs, and premium cars, perfect for both short and long trips. All vehicles come with air conditioning, ample seating, and enough space for your luggage, ensuring a comfortable ride to Alibag."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are skilled in handling long-distance travel and know the best routes to take, ensuring a smooth and safe journey to Alibag. They are professional, courteous, and prioritize your comfort and safety at all times."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for your Pune to Alibag taxi ride. We believe in clear pricing with no hidden charges, ensuring you get the best value for your money."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking, ensuring you have a secure and comfortable journey to Alibag."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates around the clock, so whether you need an early morning ride or a late-night return, we are available to cater to your needs at any time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Alibag taxi with Morya Cab is easy and convenient. You can book online via our website or app, or contact our customer service team for assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you’re traveling for leisure, a business trip, or sightseeing, we offer customized travel packages to make your trip to Alibag even more special and memorable."
    }
]












    }

    const faqData = [
        {
          question: "How can I book a taxi from Pune to Alibag with Morya Cab?",
          answer: "You can easily book a taxi online through our website or app, or get in touch with our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced in long-distance travel and are familiar with the best routes to Alibag, ensuring a smooth and safe journey."
        },
        {
          question: "What types of vehicles are available for the Pune to Alibag trip?",
          answer: "We offer a wide range of vehicles, including sedans, SUVs, and premium cars, all designed for comfort during long trips."
        },
        {
          question: "How do I pay for my Pune to Alibag taxi rental?",
          answer: "We offer flexible payment options, including cash, credit/debit cards, and online payment through our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Alibag?",
          answer: "Yes, round trips are available. Just provide us with the details of your return journey, and we’ll take care of everything for you."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges, such as for waiting time or detours, will be clearly communicated to you upfront, ensuring transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Alibag?",
          answer: "Yes, we offer sightseeing trips in and around Alibag. Explore the beautiful beaches, forts, and other attractions in a comfortable and spacious vehicle."
        },
        {
          question: "What is the luggage allowance for a Pune to Alibag taxi?",
          answer: "Our vehicles have ample space for standard luggage. If you have more luggage or special requirements, please inform us during the booking process, and we will make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Alibag?",
          answer: "Yes, we offer corporate travel services, including group trips and business-related visits to Alibag, ensuring a comfortable and professional experience."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Alibag travel?",
          answer: "Morya Cab guarantees a comfortable, reliable, and safe journey with experienced drivers, well-maintained vehicles, and transparent pricing, making your trip to Alibag smooth and enjoyable."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rakesh Joshi',
          role: 'Traveler',
          review: "I had an amazing experience with Morya Cab on my trip to Alibag. The vehicle was clean and spacious, and the driver was very professional. I’ll definitely be using their services again!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Suman Deshpande',
          role: 'Traveler',
          review: "Our family enjoyed our trip to Alibag with Morya Cab. The ride was smooth, and the driver was very courteous. We’ll be using them again for future trips!",
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
        "name": "Pune to Alibag Cabs",
        "description": "Reliable and affordable taxi services from Pune to Alibag. Book a cab for one-way or round-trip travel with comfort and convenience. Available for Innova Crysta, Tempo Traveller, and more.",
        "provider": {
          "@type": "Organization",
          "name": "Pune Alibag Cabs",
          "url": "https://www.punealibagcabs.com",
          "telephone": "+91-8888888888",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 101, Pune Central, Pune",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411001",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 2500,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Pune"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "2500",
            "unitCode": "DAY",
            "description": "Taxi service from Pune to Alibag per day"
          }
        },
        "keywords": "Pune to Alibag Cabs, Pune to Alibag Taxi Booking, Pune to Alibag Taxi Rates, Pune to Alibag Cab Charges, Pune to Alibag Cab Pricing, Pune to Alibag Private Car Hire, Pune to Alibag Cab Cost, Pune to Alibag Taxi Service, Pune to Alibag Cab, Pune to Alibaug Cab Fare, Pune to Alibaug Round Trip, Pune to Alibag Innova Crysta, Pune to Alibaug Tempo Traveller on Rent, Pune to Alibag Sedan Cab Service, Pune to Alibag Swift Taxi Service, Pune to Alibaug Kia Carens Taxi Service, Pune to Alibaug One Day Trip Cab Package"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Alibag Cabs | Affordable Taxi Services for One-Way & Round Trip | Call: +91 9359401610</title>
  <meta
    name="description"
    content="Reliable and affordable taxi services from Pune to Alibag. Book a cab for one-way or round-trip travel with comfort and convenience. Available for Innova Crysta, Tempo Traveller, and more."
  />
  <meta
    name="keywords"
    content="Pune to Alibag Cabs, Pune to Alibag Taxi Booking, Pune to Alibag Taxi Rates, Pune to Alibag Cab Charges, Pune to Alibag Cab Pricing, Pune to Alibag Private Car Hire, Pune to Alibag Cab Cost, Pune to Alibag Taxi Service, Pune to Alibag Cab, Pune to Alibaug Cab Fare, Pune to Alibaug Round Trip, Pune to Alibag Innova Crysta, Pune to Alibaug Tempo Traveller on Rent, Pune to Alibag Sedan Cab Service, Pune to Alibag Swift Taxi Service, Pune to Alibaug Kia Carens Taxi Service, Pune to Alibaug One Day Trip Cab Package"
  />
  <meta property="og:title" content="Pune to Alibag Cabs | Affordable Taxi Services for One-Way & Round Trip" />
  <meta
    property="og:description"
    content="Reliable and affordable taxi services from Pune to Alibag. Book a cab for one-way or round-trip travel with comfort and convenience. Available for Innova Crysta, Tempo Traveller, and more."
  />
  <meta property="og:url" content="https://www.punealibagcabs.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.punealibagcabs.com/images/alibag-taxi.jpg" />
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
                            <img src='/images/keyword/81.jpg' alt='img' />
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

export default Punetoalibaugcabs;