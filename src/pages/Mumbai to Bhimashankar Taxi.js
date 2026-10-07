
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Mumbaitobhimashankartaxi() {



    const cardData =
    {
        keyword: 'Mumbai to Bhimashankar Taxi  ',
        heading: 'Morya Cabs: Mumbai to Bhimashankar Taxi ',
        headingDescription: 'Morya Cabs provides reliable, comfortable, and affordable taxi services from Mumbai to Bhimashankar. Whether you are visiting for religious purposes or enjoying the serene environment, our fleet of well-maintained vehicles and professional drivers ensures a smooth, safe, and pleasant ride. The distance from Mumbai to Bhimashankar is approximately 120 km, and the drive usually takes around 3 to 4 hours. Enjoy a comfortable, hassle-free journey with Morya Cabs to one of the most important Jyotirlingas in India.',

        top: 'Top Places to Visit in Bhimashankar with Morya Cabs',

"topPlaces": [
    {
        "title": "Bhimashankar Temple",
        "location": "Bhimashankar, Maharashtra",
        "description": "The Bhimashankar Temple is one of the twelve Jyotirlingas of Lord Shiva and a highly revered pilgrimage site. Nestled in the scenic Western Ghats, the temple is known for its spiritual significance and beautiful architecture. The tranquil surroundings make it a must-visit for devotees and nature lovers alike."
    },
    {
        "title": "Bhimashankar Wildlife Sanctuary",
        "location": "Near Bhimashankar, Maharashtra",
        "description": "This sanctuary is home to diverse flora and fauna, including the rare Indian giant squirrel. It offers trekking trails through dense forests, making it a perfect spot for wildlife enthusiasts and birdwatchers."
    },
    {
        "title": "Shidi Ghat",
        "location": "Bhimashankar, Maharashtra",
        "description": "Shidi Ghat is a popular trekking route near Bhimashankar, known for its steep stairs and lush green surroundings. The trek provides breathtaking views of the Western Ghats and a thrilling adventure for hikers."
    },
    {
        "title": "Hanuman Lake",
        "location": "Bhimashankar, Maharashtra",
        "description": "Hanuman Lake is a serene water body near Bhimashankar, offering a peaceful environment for relaxation. The lake is considered sacred and attracts both pilgrims and nature lovers."
    },
    {
        "title": "Gupta Bhimashankar",
        "location": "Near Bhimashankar, Maharashtra",
        "description": "Gupta Bhimashankar is a hidden cave temple located about 3 km from the main Bhimashankar Temple. It is believed to be the meditation site of Lord Shiva, offering a tranquil retreat for spiritual seekers."
    },
    {
        "title": "Panchgani Hills",
        "location": "Near Bhimashankar, Maharashtra",
        "description": "Panchgani Hills offer picturesque landscapes and trekking trails. The cool climate and scenic beauty make it a favored destination for trekkers and nature lovers."
    },
    {
        "title": "Khandoba Temple",
        "location": "Near Bhimashankar, Maharashtra",
        "description": "The Khandoba Temple is dedicated to Lord Khandoba, a revered deity in Maharashtra. The temple's serene location makes it a peaceful place for meditation and prayers."
    },
    {
        "title": "Sahyadri Mountains",
        "location": "Bhimashankar, Maharashtra",
        "description": "The Sahyadri mountain range provides excellent trekking opportunities and breathtaking views. Adventure seekers visit this region to explore the lush greenery and serene landscapes."
    },
    {
        "title": "Bhima River",
        "location": "Near Bhimashankar, Maharashtra",
        "description": "The sacred Bhima River flows near Bhimashankar and is an important pilgrimage spot. Devotees visit the riverbank to take a holy dip and experience its tranquil ambiance."
    },
    {
        "title": "Naneghat",
        "location": "Near Bhimashankar, Maharashtra",
        "description": "Naneghat is a historic mountain pass known for its scenic beauty and historical significance. The trek to the top offers stunning panoramic views of the surrounding valleys and hills."
    }
],


"services": [
    {
        "name": "Mumbai to Bhimashankar Taxi",
        "description": "Morya Cab offers reliable taxi services from Mumbai to Bhimashankar. Whether you're traveling for pilgrimage or leisure, our services are designed to provide a comfortable and hassle-free ride."
    },
    {
        "name": "Mumbai to Bhimashankar Cab Service",
        "description": "We provide excellent cab services from Mumbai to Bhimashankar, ensuring that you reach your destination in comfort and on time. Enjoy a smooth and convenient journey with Morya Cab."
    },
    {
        "name": "Mumbai to Bhimashankar Taxi Fare",
        "description": "At Morya Cab, we ensure transparent pricing for your trip from Mumbai to Bhimashankar. Our taxi fares are competitive and affordable, providing the best value without compromising on quality."
    },
    {
        "name": "Mumbai to Bhimashankar Car Hire",
        "description": "For more flexibility, Morya Cab offers car hire services for your trip from Mumbai to Bhimashankar. Choose from our fleet of well-maintained vehicles and enjoy your journey at your own pace."
    },
    {
        "name": "Mumbai to Bhimashankar One-Way Taxi",
        "description": "Need a one-way trip to Bhimashankar? Morya Cab offers affordable one-way taxi services from Mumbai to Bhimashankar, making it easy for you to travel without the hassle of return arrangements."
    },
    {
        "name": "Taxi from Mumbai to Bhimashankar",
        "description": "Morya Cab ensures a professional and comfortable taxi service for your trip from Mumbai to Bhimashankar. Our experienced drivers know the best routes for a smooth and efficient journey."
    },
    {
        "name": "Mumbai to Bhimashankar by Cab",
        "description": "Choose Morya Cab for your trip from Mumbai to Bhimashankar by cab. Our service ensures safety, comfort, and convenience throughout the journey, making it a perfect choice for your travel."
    },
    {
        "name": "Bhimashankar Trip from Mumbai",
        "description": "Embark on a spiritual and peaceful trip to Bhimashankar from Mumbai with Morya Cab. We ensure a smooth and pleasant ride, so you can enjoy your trip without any worries."
    },
    {
        "name": "Mumbai to Bhimashankar Innova",
        "description": "For a luxurious and comfortable journey, choose the Innova for your Mumbai to Bhimashankar trip. Perfect for families or groups, the Innova offers plenty of space and premium comfort."
    },
    {
        "name": "Mumbai to Bhimashankar Ertiga",
        "description": "Morya Cab offers the Ertiga for those who need a spacious yet cost-effective vehicle for their trip from Mumbai to Bhimashankar. Enjoy the comfort and space that the Ertiga provides for a pleasant journey."
    },
    {
        "name": "Bhimashankar Taxi Booking",
        "description": "Booking your taxi from Mumbai to Bhimashankar with Morya Cab is easy. You can book online or call us to make arrangements for a seamless travel experience."
    },
    {
        "name": "Bhimashankar Drop Taxi",
        "description": "Morya Cab offers drop taxi services to Bhimashankar, ensuring that you are dropped off safely and conveniently at your destination."
    },
    {
        "name": "Mumbai to Bhimashankar Sedan",
        "description": "Travel in comfort and style with our Sedan services from Mumbai to Bhimashankar. Ideal for solo travelers or small groups, the Sedan ensures a smooth ride with all the amenities."
    },
    {
        "name": "Bhimashankar Taxi Charges",
        "description": "At Morya Cab, we offer competitive and transparent pricing for your Mumbai to Bhimashankar journey. We make sure you receive the best value for your trip without any hidden costs."
    },
    {
        "name": "Mumbai to Bhimashankar Round Trip",
        "description": "Looking for a round trip from Mumbai to Bhimashankar? Morya Cab provides reliable round-trip services, ensuring a hassle-free return after your visit to Bhimashankar."
    },
    {
        "name": "Contact Information for Morya Cab",
        "description": "To book your Mumbai to Bhimashankar taxi, contact Morya Cab at +91 9359401610. Our friendly customer service team is available to assist with any queries or to make your booking process seamless!"
    }
],


tableData: [
    ["Mumbai to Bhimashankar Taxi", "-Mumbai to Bhimashankar Cab Service"],
    ["Mumbai to Bhimashankar Taxi Fare", "-Mumbai to Bhimashankar Car Hire"],
    ["Mumbai to Bhimashankar One Way Taxi", "-Taxi from Mumbai to Bhimashankar"],
    ["Mumbai to Bhimashankar by Cab", "-Bhimashankar Trip from Mumbai"],
    ["Mumbai to Bhimashankar Innova", "-Mumbai to Bhimashankar Ertiga"],
    ["Bhimashankar Taxi Booking", "-Bhimashankar Drop Taxi"],
    ["Mumbai to Bhimashankar Sedan", "-Bhimashankar Taxi Charges"],
    ["Mumbai to Bhimashankar Round Trip", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of punctuality, especially for spiritual journeys like visiting Bhimashankar Temple. Our drivers ensure timely pickups and drop-offs, so you can focus on your journey and the experience without worrying about time."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet includes well-maintained, air-conditioned vehicles with ample legroom and comfortable seating, perfect for long-distance trips. We ensure you have a smooth and enjoyable ride from Mumbai to Bhimashankar."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced and well-versed in handling long-distance routes like Mumbai to Bhimashankar. They are familiar with the best routes and ensure a safe, smooth, and efficient ride. You can rely on their professionalism and courtesy."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers affordable rates for your Mumbai to Bhimashankar taxi service with no hidden charges. We provide transparent pricing upfront, ensuring you know the cost of your journey before you travel."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly serviced and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure a worry-free experience."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether it’s an early morning pilgrimage or a late-night return, Morya Cab is available 24/7. Our customer service team is always ready to assist with your bookings and ensure a smooth experience no matter the time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Mumbai to Bhimashankar taxi is simple with Morya Cab. You can easily book online through our website or mobile app, or reach out to our customer service team for personalized assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages to make your journey more comfortable. Whether you wish to make stops along the way or need specific services, we can tailor the trip to your preferences and needs."
    }
]













    }


    const faqData = [
        {
          question: "How can I book a Mumbai to Bhimashankar taxi with Morya Cab?",
          answer: "Booking your taxi is easy! You can book online via our website or mobile app. Alternatively, you can contact our customer service team for assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are well-trained and experienced in long-distance travel. They are familiar with the route from Mumbai to Bhimashankar and ensure a smooth, safe, and enjoyable journey."
        },
        {
          question: "What types of vehicles are available for Mumbai to Bhimashankar travel?",
          answer: "We offer a range of well-maintained vehicles, including sedans, SUVs, and premium cars, all equipped for comfort during your journey."
        },
        {
          question: "How do I pay for my Mumbai to Bhimashankar taxi rental?",
          answer: "We accept various payment options, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Mumbai to Bhimashankar?",
          answer: "Yes, you can book a round-trip taxi. Provide your return details when booking, and we’ll arrange the return journey from Bhimashankar to Mumbai."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Bhimashankar?",
          answer: "Yes, we offer sightseeing services in Bhimashankar. Explore the Bhimashankar Temple and nearby attractions with a trusted driver guiding your journey."
        },
        {
          question: "What is the luggage allowance for a Mumbai to Bhimashankar taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, please inform us when booking, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Bhimashankar?",
          answer: "Yes, we provide corporate travel services for business trips. Whether it’s for a corporate retreat or group trip, we can customize the travel package to meet your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Mumbai to Bhimashankar travel?",
          answer: "Morya Cab provides reliable, safe, and affordable taxi services. With well-maintained vehicles, experienced drivers, and a focus on customer satisfaction, we ensure a smooth, enjoyable journey for all your travel needs."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rajesh Tiwari',
          role: 'Family Traveler',
          review: 'We used Morya Cab for our family trip to Bhimashankar, and the experience was excellent. The driver was knowledgeable about the route and very courteous. The vehicle was clean, and the trip was comfortable. Highly recommend it!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Sunita Agarwal',
          role: 'Religious Traveler',
          review: 'My experience with Morya Cab was fantastic. I traveled from Mumbai to Bhimashankar for a religious visit, and the ride was smooth and relaxing. The driver was polite and helpful, and the vehicle was well-maintained.',
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
        "description": "Book your Mumbai to Bhimashankar taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9359401610 for bookings!",
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
          "https://moryacab.com/img/mumbai-to-bhimashankar-taxi.jpg",
          "https://moryacab.com/img/mumbai-to-bhimashankar-cab-service.jpg"
        ],
        "priceRange": "₹2500 - ₹4000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/mumbai-to-bhimashankar-taxi-service",
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
            "reviewBody": "Affordable and reliable service. The cab was on time, and the ride was smooth. Highly recommended for traveling from Mumbai to Bhimashankar."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Mumbai to Bhimashankar Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0000,
            "longitude": 73.5000
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/mumbai-to-bhimashankar-taxi-service"
        },
        "keywords": "mumbai to bhimashankar taxi, mumbai to bhimashankar cab service, mumbai to bhimashankar taxi fare, mumbai to bhimashankar car hire, mumbai to bhimashankar one way taxi, taxi from mumbai to bhimashankar, mumbai to bhimashankar by cab, bhimashankar trip from mumbai, mumbai to bhimashankar innova, mumbai to bhimashankar ertiga, bhimashankar taxi booking, bhimashankar drop taxi, mumbai to bhimashankar sedan, bhimashankar taxi charges, mumbai to bhimashankar round trip"
      };


    return (
        <div>
            <UsePageTracking/>
 <Helmet>
        <title>Mumbai to Bhimashankar Taxi | Affordable & Reliable Cab Services | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book your Mumbai to Bhimashankar taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9359401610."
        />
        <meta name="keywords" content="mumbai to bhimashankar taxi, mumbai to bhimashankar cab service, one way taxi, affordable taxi service" />
        <meta property="og:title" content="Mumbai to Bhimashankar Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Mumbai to Bhimashankar taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!" />
        <meta property="og:url" content="https://moryacab.com/mumbai-to-bhimashankar-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/mumbai-to-bhimashankar-taxi.jpg" />
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
                            <img src='/images/keyword/22.jpg' alt='img' />
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

export default Mumbaitobhimashankartaxi;