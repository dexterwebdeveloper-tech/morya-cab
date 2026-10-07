
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Mumbaitolonavaltaxi() {



    const cardData =
    {
        keyword: 'Mumbai to Lonavala Taxi  ',
        heading: 'Morya Cabs: Mumbai to Lonavala Taxi  ',
        headingDescription: 'Morya Cabs offers convenient, reliable, and comfortable taxi services from Mumbai to Lonavala. Whether you are planning a family getaway, a romantic retreat, or a peaceful escape into the hills, our experienced drivers and well-maintained fleet ensure a smooth and enjoyable journey. The distance from Mumbai to Lonavala is approximately 83 km, and the journey usually takes around 2 to 3 hours by road. Travel in comfort with Morya Cabs to explore the scenic beauty and pleasant weather of Lonavala.',

        top: 'Top Places to Visit in Lonavala with Morya Cabs',

"topPlaces": [
    {
        "title": "Bhushi Dam",
        "location": "Lonavala, Maharashtra",
        "description": "Bhushi Dam is one of the most popular tourist attractions in Lonavala, especially during the monsoon season. The dam's serene surroundings, coupled with the flowing water, create a refreshing atmosphere. It's a great spot to relax and enjoy the natural beauty."
    },
    {
        "title": "Lonavala Lake",
        "location": "Lonavala, Maharashtra",
        "description": "Lonavala Lake, also known as the Valvan Lake, is a scenic water body surrounded by hills and lush greenery. It offers a peaceful ambiance, perfect for a quiet day out with friends or family. The lake is an ideal spot for a picnic or a relaxing boat ride."
    },
    {
        "title": "Karla Caves",
        "location": "Lonavala, Maharashtra",
        "description": "The Karla Caves are a group of ancient Buddhist rock-cut caves that date back to around 2nd century BC. These caves feature intricate carvings and inscriptions that reflect the Buddhist architectural style. The caves are a must-visit for history and architecture enthusiasts."
    },
    {
        "title": "Della Adventure Park",
        "location": "Lonavala, Maharashtra",
        "description": "Della Adventure Park is a popular destination for adventure lovers. It offers a range of thrilling activities like zip-lining, bungee jumping, rock climbing, and more. The park is perfect for families and groups seeking an adrenaline rush amidst the scenic beauty of Lonavala."
    },
    {
        "title": "Tiger's Leap",
        "location": "Lonavala, Maharashtra",
        "description": "Tiger's Leap is a popular viewpoint in Lonavala that offers stunning panoramic views of the lush green valleys and hills. The view from this point is breathtaking, and it’s an ideal spot for photography, nature walks, and picnics."
    },
    {
        "title": "Pawna Lake",
        "location": "Near Lonavala, Maharashtra",
        "description": "Pawna Lake is a tranquil lake located near Lonavala, known for its beautiful landscape and calm waters. The lake is popular for camping, boating, and enjoying a peaceful day surrounded by nature. It's an ideal place for a weekend getaway."
    },
    {
        "title": "Lion’s Point",
        "location": "Lonavala, Maharashtra",
        "description": "Lion’s Point is another scenic viewpoint offering a spectacular view of the surrounding hills and valleys. It is especially popular during the monsoon season when the mist and clouds create a mesmerizing atmosphere. A great spot for trekking and photography."
    },
    {
        "title": "Rajmachi Fort",
        "location": "Near Lonavala, Maharashtra",
        "description": "Rajmachi Fort is a historic fort located near Lonavala. The fort offers panoramic views of the surrounding landscape, making it a great destination for trekkers and history buffs. The trek to the fort is an exciting challenge for adventure seekers."
    },
    {
        "title": "Bhaja Caves",
        "location": "Near Lonavala, Maharashtra",
        "description": "The Bhaja Caves are another group of ancient Buddhist caves located near Lonavala. The caves are known for their impressive architecture and ancient inscriptions. They offer a tranquil environment for meditation and exploration."
    },
    {
        "title": "Narayani Dham Temple",
        "location": "Lonavala, Maharashtra",
        "description": "Narayani Dham Temple is a peaceful temple dedicated to Goddess Narayani. It is located on the banks of the Pavana River and is known for its beautiful surroundings and spiritual significance. A visit to this temple offers a serene and calm experience."
    }
],


"services": [
    {
        "name": "Mumbai to Lonavala Taxi Service",
        "description": "Morya Cab offers comfortable and reliable taxi services from Mumbai to Lonavala. Whether you're planning a weekend getaway or a quick day trip, we ensure a smooth and relaxing journey."
    },
    {
        "name": "Mumbai to Lonavala Cab Service",
        "description": "Book your cab with Morya Cab for a stress-free and comfortable ride from Mumbai to Lonavala. Our fleet of modern cars and experienced drivers will make sure your journey is pleasant."
    },
    {
        "name": "Mumbai to Lonavala Taxi Fare",
        "description": "Morya Cab provides competitive and transparent pricing for your trip from Mumbai to Lonavala. We offer budget-friendly rates with no hidden charges, ensuring you get the best value for your money."
    },
    {
        "name": "Mumbai to Lonavala One-Way Taxi",
        "description": "Opt for our one-way taxi service from Mumbai to Lonavala if you're planning a one-way trip. Morya Cab offers affordable one-way options without compromising on comfort or safety."
    },
    {
        "name": "Mumbai to Lonavala Innova",
        "description": "For a more spacious and luxurious ride, Morya Cab offers the Innova for your Mumbai to Lonavala trip. Perfect for families or larger groups, the Innova ensures comfort and ample space for everyone."
    },
    {
        "name": "Mumbai to Lonavala Ertiga",
        "description": "Travel comfortably with the Ertiga from Mumbai to Lonavala. This spacious and economical option is ideal for smaller groups or families, offering a relaxing journey."
    },
    {
        "name": "Mumbai to Lonavala Sedan",
        "description": "Choose Morya Cab’s sedan services for a comfortable and cozy ride to Lonavala. Perfect for solo or couple travelers, the sedan offers a stylish and relaxed way to travel."
    },
    {
        "name": "Taxi Service from Mumbai to Lonavala",
        "description": "Morya Cab is your trusted choice for taxi services from Mumbai to Lonavala. We guarantee a hassle-free experience with professional drivers and a commitment to your safety and comfort."
    },
    {
        "name": "Mumbai to Lonavala by Cab",
        "description": "Travel in style with Morya Cab’s taxi service from Mumbai to Lonavala. Enjoy a smooth and scenic drive, and arrive at your destination relaxed and refreshed."
    },
    {
        "name": "Mumbai to Lonavala Online Booking",
        "description": "Booking your cab from Mumbai to Lonavala is simple with Morya Cab’s online booking system. Choose your preferred vehicle and schedule your pick-up time conveniently online."
    },
    {
        "name": "Mumbai to Lonavala Round Trip Taxi",
        "description": "Morya Cab also offers round-trip taxi services for those who want the flexibility of returning at their convenience. A round-trip from Mumbai to Lonavala ensures you travel hassle-free both ways."
    },
    {
        "name": "Lonavala Trip Taxi Fare",
        "description": "We provide affordable taxi fares for your Lonavala trip. Whether you're going for a short visit or a longer stay, Morya Cab offers competitive pricing with no hidden fees."
    },
    {
        "name": "Mumbai to Lonavala Car Hire",
        "description": "Morya Cab also offers car hire services from Mumbai to Lonavala, giving you the flexibility to travel at your own pace. Enjoy a personalized and comfortable experience with our rental options."
    },
    {
        "name": "Mumbai to Lonavala Drop Taxi",
        "description": "If you're only looking for a drop-off service, Morya Cab offers one-way drop taxis from Mumbai to Lonavala. Sit back and relax while we handle your ride."
    },
    {
        "name": "Lonavala Taxi Booking",
        "description": "Booking your Lonavala taxi with Morya Cab is quick and easy. You can book via phone or online to secure your ride and enjoy a smooth journey from Mumbai to Lonavala."
    },
    {
        "name": "Contact Information for Morya Cab",
        "description": "For bookings or inquiries, call Morya Cab at +91 9371304510. We are available to assist you with your Mumbai to Lonavala taxi needs."
    }
],


tableData: [
    ["Mumbai to Lonavala Taxi", "-Mumbai to Lonavala Cab Service"],
    ["Mumbai to Lonavala Taxi Fare", "-Mumbai to Lonavala One Way Taxi"],
    ["Mumbai to Lonavala Innova", "-Mumbai to Lonavala Ertiga"],
    ["Mumbai to Lonavala Sedan", "-Taxi Service from Mumbai to Lonavala"],
    ["Mumbai to Lonavala by Cab", "-Mumbai to Lonavala Online Booking"],
    ["Mumbai to Lonavala Round Trip Taxi", "-Lonavala Trip Taxi Fare"],
    ["Mumbai to Lonavala Car Hire", "-Mumbai to Lonavala Drop Taxi"],
    ["Lonavala Taxi Booking", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of punctuality. Whether you are heading for a business meeting or a weekend getaway, our drivers ensure timely pickups and drop-offs, so your trip from Mumbai to Lonavala is smooth and stress-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our vehicles are well-maintained and designed for comfort. With spacious interiors, comfortable seating, air conditioning, and a smooth ride, you’ll enjoy a relaxing journey from Mumbai to Lonavala."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced professionals, skilled in handling long-distance routes like Mumbai to Lonavala. They know the best routes and traffic patterns to ensure you get to your destination quickly, safely, and comfortably."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers affordable and competitive pricing for Mumbai to Lonavala trips. We believe in transparency, so you won’t face any hidden charges or surprises during your journey."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All our vehicles are regularly serviced and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols to ensure a worry-free journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you’re planning an early morning trip or a late-night return, Morya Cab is available 24/7 to cater to your travel needs. Our customer service team is ready to assist you at any time, making the booking process quick and easy."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi for Mumbai to Lonavala is simple with Morya Cab. You can easily book online through our website or mobile app, or contact our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer flexible and customized travel packages to fit your needs. Whether you want to make a stop at a scenic spot, need special arrangements, or wish to add sightseeing to your trip, we can tailor the journey according to your preferences."
    }
]















    }

    const faqData = [
        {
          question: "How can I book a Mumbai to Lonavala taxi with Morya Cab?",
          answer: "Booking is easy! You can book online via our website or mobile app. Alternatively, you can contact our customer service team for assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are experienced in long-distance travel, ensuring a smooth, safe, and timely ride from Mumbai to Lonavala."
        },
        {
          question: "What types of vehicles are available for Mumbai to Lonavala travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all designed to make your journey comfortable and enjoyable."
        },
        {
          question: "How do I pay for my Mumbai to Lonavala taxi rental?",
          answer: "We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Mumbai to Lonavala?",
          answer: "Yes, you can book a round-trip taxi. Simply provide your return details when booking, and we’ll ensure a seamless round trip."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges for waiting or detours will be communicated to you upfront during the booking process, ensuring complete transparency."
        },
        {
          question: "Can I hire a taxi for sightseeing in Lonavala?",
          answer: "Yes, we offer sightseeing packages for Lonavala. Explore famous spots such as Bushi Dam, Lion’s Point, and Karla Caves with a knowledgeable driver."
        },
        {
          question: "What is the luggage allowance for a Mumbai to Lonavala taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or special requirements, please inform us during the booking process, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Lonavala?",
          answer: "Yes, we offer corporate travel services to Lonavala. Whether for business meetings or team-building activities, we can customize the travel package to suit your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Mumbai to Lonavala travel?",
          answer: "Morya Cab is known for its reliability, experienced drivers, comfortable vehicles, and transparent pricing. We ensure a safe, comfortable, and affordable journey from Mumbai to Lonavala."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Sandeep Rao',
          role: 'Business Traveler',
          review: 'I had a wonderful trip from Mumbai to Lonavala with Morya Cab. The vehicle was comfortable, the driver was professional, and the ride was smooth. It was the perfect way to reach Lonavala!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Neha Kapoor',
          role: 'Family Traveler',
          review: 'We used Morya Cab for a family trip to Lonavala, and it was a great experience. The vehicle was spacious, the driver was friendly and knowledgeable, and the journey was relaxing. Highly recommend!',
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
        "description": "Book your Mumbai to Lonavala taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/mumbai-to-lonavala-taxi.jpg",
          "https://moryacab.com/img/mumbai-to-lonavala-cab-service.jpg"
        ],
        "priceRange": "₹1500 - ₹3000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/mumbai-to-lonavala-taxi-service",
          "priceCurrency": "INR",
          "price": 2000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.9,
          "reviewCount": 150
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rahul Mehta"
            },
            "datePublished": "2024-03-15",
            "reviewBody": "Excellent service! The ride from Mumbai to Lonavala was smooth and comfortable. The driver was courteous and professional. Highly recommended!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Patil"
            },
            "datePublished": "2024-07-30",
            "reviewBody": "The vehicle was in great condition, and the driver was very punctual. I had a fantastic experience traveling from Mumbai to Lonavala!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Mumbai to Lonavala Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.7498,
            "longitude": 73.4096
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/mumbai-to-lonavala-taxi-service"
        },
        "keywords": "mumbai to lonavala taxi, mumbai to lonavala cab service, mumbai to lonavala taxi fare, mumbai to lonavala one way taxi, mumbai to lonavala innova, mumbai to lonavala ertiga, mumbai to lonavala sedan, taxi service from mumbai to lonavala, mumbai to lonavala by cab, mumbai to lonavala online booking, mumbai to lonavala round trip taxi, lonavala trip taxi fare, mumbai to lonavala car hire, mumbai to lonavala drop taxi, lonavala taxi booking"
      };



    return (
        <div>
            <UsePageTracking/>
 <Helmet>
        <title>Mumbai to Lonavala Taxi | Affordable & Reliable Cab Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Mumbai to Lonavala taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510."
        />
        <meta name="keywords" content="mumbai to lonavala taxi, taxi services, affordable taxi, lonavala cab booking" />
        <meta property="og:title" content="Mumbai to Lonavala Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Mumbai to Lonavala taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!" />
        <meta property="og:url" content="https://moryacab.com/mumbai-to-lonavala-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/mumbai-to-lonavala-taxi.jpg" />
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
                            <img src='/images/keyword/26.jpg' alt='img' />
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

export default Mumbaitolonavaltaxi;