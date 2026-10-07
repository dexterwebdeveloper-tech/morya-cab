
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetolonavalataxi() {



    const cardData =
    {
        keyword: 'Pune to Lonavala Taxi ',
        heading: 'Morya Cabs:  Pune to Lonavala Taxi   ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Lonavala. Whether you are traveling for a weekend getaway, a family vacation, or just a relaxing day trip, our well-maintained fleet and professional drivers ensure a smooth and hassle-free journey. Pune to Lonavala is approximately 65 km, and the journey takes around 1.5 to 2 hours by road. Enjoy a safe and comfortable ride with our top-notch amenities and customer-centric service.',

        top: 'Top Places to Visit in Lonavala with Morya Cabs',

     "topPlaces": [
    {
        "title": "Lonavala Lake",
        "description": "A serene and picturesque destination, Lonavala Lake is perfect for nature lovers and photography enthusiasts. Surrounded by lush greenery, this lake is particularly beautiful during the monsoon season when it is filled with water. It’s a great spot for picnics and relaxing by the water, with the scenic backdrop adding to the peaceful atmosphere."
    },
    {
        "title": "Bhushi Dam",
        "description": "Bhushi Dam is one of the most popular spots in Lonavala, especially during the monsoon. The cascading water and the surrounding hills create a breathtaking view. It’s a favorite destination for those looking to take a quick dip or simply enjoy the cool and refreshing atmosphere. The dam and its surroundings make for a great place to unwind and enjoy nature’s beauty."
    },
    {
        "title": "Karla Caves",
        "description": "The Karla Caves are ancient rock-cut Buddhist caves dating back to the 2nd century BC. These caves feature intricate sculptures and inscriptions, making them a must-visit for history and archaeology enthusiasts. The main cave, known for its large prayer hall, is an important pilgrimage site. The caves are located on a hill, providing a spectacular view of the surrounding area."
    },
    {
        "title": "Tiger's Leap",
        "description": "Tiger’s Leap is a famous viewpoint in Lonavala, known for its stunning panoramic views of the surrounding valley and hills. The name comes from the belief that a tiger can leap from the cliff into the valley below. The view of the lush green landscape and the distant mountains is especially mesmerizing during the monsoon season. It’s a perfect spot for nature lovers and photographers."
    },
    {
        "title": "Rajmachi Fort",
        "description": "Rajmachi Fort is an ancient hill fort located near Lonavala, known for its historic significance and scenic views. The fort offers a great trekking experience, and once at the top, you can enjoy panoramic views of the surrounding valley and mountains. The trek to Rajmachi Fort passes through dense forests, adding to the adventure for trekkers."
    },
    {
        "title": "Della Adventure Park",
        "description": "For thrill-seekers and adventure enthusiasts, Della Adventure Park in Lonavala offers a wide range of activities, from dirt biking to zip-lining. The park is one of the largest adventure parks in India, providing exciting outdoor experiences for families, groups, and individuals. Whether you’re looking to try something new or simply enjoy the adrenaline rush, Della Adventure Park is a must-visit."
    },
    {
        "title": "Lion's Point",
        "description": "Lion’s Point is a well-known viewpoint that offers a stunning 360-degree view of the surrounding mountains and valleys. It’s an ideal spot to enjoy the beauty of Lonavala, especially at sunrise and sunset. The cool breeze and the picturesque landscape make Lion’s Point a favorite among tourists."
    },
    {
        "title": "Tungarli Lake",
        "description": "Tungarli Lake is another beautiful spot in Lonavala, located amidst the hills. It is a calm and peaceful place that attracts tourists looking for tranquility and a chance to connect with nature. The surrounding views of the hills and the quiet atmosphere make it an excellent spot for nature walks, bird watching, and photography."
    },
    {
        "title": "Wet N Joy Water Park",
        "description": "Wet N Joy Water Park is an exciting destination for families and children. The park features a variety of water rides, wave pools, and fun activities, making it a great place to spend the day. Whether you want to relax by the pool or enjoy the water slides, Wet N Joy Water Park is a perfect place to have fun with family and friends."
    },
    {
        "title": "Pawna Lake",
        "description": "Pawna Lake is a scenic, tranquil lake located near Lonavala. It is famous for camping, picnic spots, and the beautiful landscape surrounding it. The peaceful surroundings, cool breeze, and breathtaking views make it an ideal spot to relax and unwind with friends and family. Camping by the lakeside, especially during the monsoon, is a popular activity here."
    }
],



    "services": [
    {
        "name": "Pune to Lonavala Cab Booking",
        "description": "Booking a cab from Pune to Lonavala with Morya Cab is easy and convenient. Whether you're planning a one-day trip or a weekend getaway, our comfortable vehicles and professional drivers ensure a smooth journey."
    },
    {
        "name": "Taxi from Pune to Lonavala",
        "description": "Morya Cab offers reliable taxi services from Pune to Lonavala. Whether you're traveling alone or with family and friends, we ensure a pleasant and comfortable ride to this scenic hill station."
    },
    {
        "name": "Pune to Lonavala Cab Service",
        "description": "Choose Morya Cab for a stress-free and reliable cab service from Pune to Lonavala. Our drivers are experienced and professional, ensuring you have a safe and enjoyable journey to Lonavala."
    },
    {
        "name": "Pune to Lonavala Car Hire",
        "description": "Morya Cab provides flexible car hire services for your Pune to Lonavala trip. Choose from a range of vehicles that suit your preferences and group size, and enjoy a personalized and comfortable experience."
    },
    {
        "name": "Pune to Lonavala Taxi Fare",
        "description": "Morya Cab offers transparent and affordable taxi fares for your Pune to Lonavala journey. We ensure no hidden charges, so you can travel with peace of mind knowing the exact cost of your trip."
    },
    {
        "name": "Pune to Lonavala Travel by Taxi",
        "description": "Traveling from Pune to Lonavala by taxi with Morya Cab offers the most comfortable way to reach your destination. Relax and enjoy the scenic route, knowing you're in safe hands with our experienced drivers."
    },
    {
        "name": "Pune to Lonavala Cabs",
        "description": "Morya Cab provides a fleet of well-maintained cabs for your Pune to Lonavala trip. Whether you're traveling for leisure or business, we offer a variety of vehicles to suit your needs and budget."
    },
    {
        "name": "Pune to Lonavala Package",
        "description": "Morya Cab offers customized Pune to Lonavala packages, including one-way and round trips. Our packages are designed to give you the best value while ensuring a comfortable and enjoyable travel experience."
    },
    {
        "name": "Pune to Lonavala One-Way Taxi",
        "description": "For a one-way trip to Lonavala from Pune, Morya Cab offers affordable and reliable taxi services. Enjoy a direct, comfortable ride without any detours or delays."
    },
    {
        "name": "Pune to Lonavala Round Trip Cabs",
        "description": "If you're planning a round trip to Lonavala, Morya Cab offers flexible and affordable round-trip taxi services. Let us take care of your transportation needs, making your journey convenient and hassle-free."
    },
    {
        "name": "Pune to Lonavala Private Taxi",
        "description": "For a more personalized travel experience, Morya Cab provides private taxi services from Pune to Lonavala. Travel in comfort and enjoy the privacy of your own vehicle, tailored to your preferences."
    },
    {
        "name": "Pune to Lonavala Shared Taxi",
        "description": "Morya Cab offers shared taxi services for those looking to save on travel costs while still enjoying a comfortable journey. Share the ride with others and enjoy the scenic drive to Lonavala."
    },
    {
        "name": "Pune to Lonavala Taxi Rental",
        "description": "Morya Cab provides flexible taxi rental options for your Pune to Lonavala journey. Rent a cab for a day, weekend, or longer, and enjoy the freedom to travel at your own pace."
    },
    {
        "name": "Pune to Lonavala Taxi Booking Online",
        "description": "Booking a taxi from Pune to Lonavala is simple and quick with Morya Cab’s online booking system. Select your preferred vehicle and travel time, and secure your ride with ease."
    },
    {
        "name": "Pune to Lonavala Tour Package",
        "description": "Morya Cab offers special Pune to Lonavala tour packages, ideal for those who want to explore the hill station. Whether it’s a day trip or a weekend getaway, our packages provide the best value and comfort."
    },
    {
        "name": "Pune to Lonavala Cab Contact Information",
        "description": "Contact Morya Cab at +91 9359401610 for prompt and efficient Pune to Lonavala cab services. We ensure a smooth and enjoyable ride for all our customers, making your journey comfortable and stress-free. Book your Pune to Lonavala cab today!"
    }
],




tableData: [
    ["Pune to Lonavala Cab Booking", "-Taxi from Pune to Lonavala"],
    ["Pune to Lonavala Cab Service", "-Pune to Lonavala Car Hire"],
    ["Pune to Lonavala Taxi Fare", "-Pune to Lonavala Travel by Taxi"],
    ["Pune to Lonavala Cabs", "-Pune to Lonavala Package"],
    ["Pune to Lonavala One-Way Taxi", "-Pune to Lonavala Round Trip Cabs"],
    ["Pune to Lonavala Private Taxi", "-Pune to Lonavala Shared Taxi"],
    ["Pune to Lonavala Taxi Rental", "-Pune to Lonavala Taxi Booking Online"],
    ["Pune to Lonavala Tour Package", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we prioritize punctuality. Whether you're heading to Lonavala for a weekend getaway or a quick business trip, our drivers ensure timely pickups and drop-offs, so your journey remains smooth and stress-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Enjoy a comfortable ride with our range of well-maintained vehicles, featuring ample legroom, air conditioning, and comfortable seating. Whether you're traveling solo or with family, our cars provide a relaxed journey from Pune to Lonavala."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced, professional, and familiar with the best routes to Lonavala. With a focus on safety and comfort, they ensure a smooth ride and make your travel experience pleasant."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers affordable pricing with no hidden charges. Our pricing model is transparent, so you’ll know the exact fare before the journey starts, ensuring there are no surprises."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is our top priority. Our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols for a secure and worry-free ride."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you're planning an early morning trip or a late-night return, Morya Cab is available round-the-clock for your convenience. Our customer service team is always ready to assist you with your bookings."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a Pune to Lonavala taxi with Morya Cab is quick and easy. You can book online via our website or mobile app, or reach out to our customer service team for any assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're traveling for a leisurely escape or a business trip, we offer tailored travel packages to make your Pune to Lonavala journey special. Let us know your preferences, and we’ll customize the trip for you."
    }
]







    }


    const faqData = [
        {
          question: "How can I book a Pune to Lonavala taxi with Morya Cab?",
          answer: "Booking your taxi is easy! You can book online via our website or mobile app, or call our customer service team for assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are experienced and trained to handle long-distance trips like Pune to Lonavala, ensuring a smooth and comfortable journey."
        },
        {
          question: "What types of vehicles are available for Pune to Lonavala travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all equipped for a comfortable and relaxing ride."
        },
        {
          question: "How do I pay for my Pune to Lonavala taxi rental?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payment through our app, for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Lonavala?",
          answer: "Yes, we offer round-trip services. Just provide your return details during the booking process, and we’ll make the necessary arrangements."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges, such as for waiting time or detours, will be clearly communicated to you upfront, ensuring transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Lonavala?",
          answer: "Yes, we offer sightseeing services in Lonavala. Explore popular spots like Bhushi Dam, Tiger’s Leap, and Karla Caves with an experienced driver."
        },
        {
          question: "What is the luggage allowance for a Pune to Lonavala taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have additional luggage or specific requirements, please inform us at the time of booking, and we’ll make arrangements accordingly."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Lonavala?",
          answer: "Yes, we provide corporate travel services for business trips between Pune and Lonavala, offering customized packages based on your organization's needs."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Lonavala travel?",
          answer: "Morya Cab guarantees a reliable, comfortable, and safe journey with well-maintained vehicles, professional drivers, and affordable pricing. We ensure a pleasant experience every time."
        }
      ];

      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Anil Bhat',
          role: 'Traveller',
          review: 'We traveled to Lonavala with Morya Cab for a family weekend getaway. The vehicle was spacious, and the driver was punctual and friendly. It was a smooth, enjoyable ride!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Meena Joshi',
          role: 'Traveller',
          review: 'Using Morya Cab for our trip to Lonavala was a great decision. The ride was comfortable, and the driver took the best routes to avoid traffic. Highly recommend it for anyone looking for a stress-free trip.',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
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
        "@type": "TaxiService",
        "name": "Morya Cabs",
        "description": "Book reliable and affordable Pune to Lonavala taxi service. We offer one-way, round trip, luxury, and private taxis for a comfortable journey.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9359401610",
        "url": "https://moryacab.com/pune-to-lonavala-taxi",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-to-lonavala-taxi.jpg",
          "https://moryacab.com/img/lonavala-taxi.jpg"
        ],
        "priceRange": "₹1500 - ₹3000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-lonavala-taxi",
          "priceCurrency": "INR",
          "price": 1800,
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
              "name": "Siddhi Patil"
            },
            "datePublished": "2024-12-10",
            "reviewBody": "Great experience traveling to Lonavala with Morya Cabs. The ride was comfortable, the driver was courteous, and the pricing was reasonable. Highly recommended for short trips!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rahul Deshmukh"
            },
            "datePublished": "2024-11-15",
            "reviewBody": "I booked a round trip from Pune to Lonavala, and the experience was excellent. Clean vehicle, friendly driver, and smooth journey. Will use Morya Cabs again!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Lonavala Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.7549,
            "longitude": 73.4063
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-lonavala-taxi"
        },
        "keywords": "Pune to Lonavala taxi, Pune to Lonavala cab service, Lonavala taxi booking, Pune to Lonavala one-way taxi, Pune to Lonavala round trip, affordable Pune to Lonavala taxi"
      };
    


    return (
        <div>
        <UsePageTracking/>
<Helmet>
        <title>Pune to Lonavala Taxi | Reliable Cab Service | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book reliable and affordable Pune to Lonavala taxi service. Choose from one-way, round trip, private, luxury, or shared taxis. Book your ride today!"
        />
        <meta name="keywords" content="Pune to Lonavala taxi, Lonavala one-way taxi, Pune to Lonavala cab, affordable taxi from Pune to Lonavala" />
        <meta property="og:title" content="Pune to Lonavala Taxi | Morya Cabs" />
        <meta property="og:description" content="Affordable and reliable Pune to Lonavala taxi service with private, luxury, and shared options. Book online for a smooth journey!" />
        <meta property="og:url" content="https://moryacab.com/pune-to-lonavala-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-lonavala-taxi.jpg" />
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
                            <img src='/images/keyword/4.jpg' alt='img' />
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

export default Punetolonavalataxi;