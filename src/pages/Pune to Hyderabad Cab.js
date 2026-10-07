
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetohyderabadcab() {



    const cardData =
    {
        keyword: 'Pune to Hyderabad Taxi    ',
        heading: 'Morya Cabs:  Pune to Hyderabad Taxi ',
        headingDescription: 'Morya Cabs offers convenient, reliable, and comfortable taxi services from Pune to Hyderabad. Whether you’re heading for business, leisure, or a family trip, our well-maintained vehicles and professional drivers ensure a smooth journey. The distance between Pune and Hyderabad is approximately 660 km, and the journey takes around 10 to 12 hours by road. Enjoy a comfortable ride with Morya Cabs, offering top-notch service and safety.',

        top: 'Top Places to Visit in Hyderabad with Morya Cabs',

    "topPlaces": [
    {
        "title": "Charminar",
        "location": "Hyderabad, Telangana",
        "description": "The iconic Charminar is one of Hyderabad's most famous landmarks. This beautiful monument with four grand arches and intricate designs is a must-see, offering a glimpse into the city’s rich history and architectural grandeur."
    },
    {
        "title": "Golconda Fort",
        "location": "Hyderabad, Telangana",
        "description": "Golconda Fort is a historical fortification located on the outskirts of Hyderabad. Known for its acoustics, grand structure, and panoramic views of the city, the fort is an important landmark and a favorite among history enthusiasts."
    },
    {
        "title": "Hussain Sagar Lake",
        "location": "Hyderabad, Telangana",
        "description": "Located in the heart of the city, Hussain Sagar Lake is an artificial lake that offers boating opportunities, peaceful surroundings, and views of the city’s skyline. The giant statue of Buddha situated on an island in the lake is a popular attraction."
    },
    {
        "title": "Qutub Shahi Tombs",
        "location": "Hyderabad, Telangana",
        "description": "Situated near Golconda Fort, the Qutub Shahi Tombs are a collection of tombs belonging to the Qutub Shahi dynasty. The tombs feature Indo-Saracenic architecture and are a beautiful example of Hyderabad’s royal heritage."
    },
    {
        "title": "Ramoji Film City",
        "location": "Hyderabad, Telangana",
        "description": "Ramoji Film City is one of the largest film studio complexes in the world and a popular destination for tourists. It offers a wide range of attractions including live shows, film sets, and theme parks, making it a fun destination for families and entertainment lovers."
    },
    {
        "title": "Chowmohalla Palace",
        "location": "Hyderabad, Telangana",
        "description": "A stunning example of Nizami architecture, Chowmohalla Palace was once the seat of the Asaf Jahi dynasty. The palace is famous for its grandeur, beautiful courtyards, and historical artifacts."
    },
    {
        "title": "Salar Jung Museum",
        "location": "Hyderabad, Telangana",
        "description": "The Salar Jung Museum is one of the largest museums in India, housing an impressive collection of art, antiques, sculptures, and manuscripts. It’s a must-visit for history and art lovers, offering a rich experience of Hyderabad’s cultural heritage."
    },
    {
        "title": "Birla Mandir",
        "location": "Hyderabad, Telangana",
        "description": "Located on a hilltop, the Birla Mandir is a beautiful temple dedicated to Lord Venkateshwara. The temple offers spectacular views of Hyderabad, making it a serene spot for both devotees and tourists alike."
    },
    {
        "title": "Necklace Road",
        "location": "Hyderabad, Telangana",
        "description": "Necklace Road runs along Hussain Sagar Lake and is a scenic drive offering great views of the lake and surrounding parks. It is also a popular hangout spot with parks, restaurants, and cafes along the route."
    },
    {
        "title": "Laad Bazaar",
        "location": "Hyderabad, Telangana",
        "description": "A vibrant market in Hyderabad, Laad Bazaar is famous for its traditional bangles, jewelry, and textiles. It’s a perfect place to shop for authentic Hyderabadi souvenirs and experience the local culture."
    }
],



"services": [
    {
        "name": "Pune to Hyderabad Taxi",
        "description": "Morya Cab offers reliable and comfortable taxi services for your journey from Pune to Hyderabad. Whether you are traveling for business, leisure, or a special occasion, we ensure a safe and pleasant ride."
    },
    {
        "name": "Pune to Hyderabad One-Way Cab",
        "description": "Looking for a one-way ride from Pune to Hyderabad? Morya Cab provides convenient one-way taxi services to ensure you get to your destination without any hassle. Enjoy a smooth, direct journey with a professional driver."
    },
    {
        "name": "Pune to Hyderabad Cab Service",
        "description": "Morya Cab provides exceptional taxi services for your Pune to Hyderabad journey. We offer well-maintained vehicles and experienced drivers to ensure a comfortable, stress-free ride every time."
    },
    {
        "name": "Pune to Hyderabad Taxi Booking",
        "description": "Booking your taxi from Pune to Hyderabad with Morya Cab is easy. You can book online or via phone to secure your ride at a time that suits you best, ensuring a convenient travel experience."
    },
    {
        "name": "Pune to Hyderabad Round Trip",
        "description": "Morya Cab offers round-trip taxi services for your Pune to Hyderabad journey. Whether you’re planning a short visit or a longer stay, our flexible round-trip options make it easy to plan your travel."
    },
    {
        "name": "Pune to Hyderabad Car Rental",
        "description": "Need a car rental for your Pune to Hyderabad journey? Morya Cab offers car rental services, including chauffeur-driven options, to provide you with a comfortable and flexible travel experience."
    },
    {
        "name": "Pune to Hyderabad Taxi Fare",
        "description": "Morya Cab offers competitive and transparent taxi fares for your Pune to Hyderabad trip. Our pricing is clear, with no hidden charges, ensuring you get the best value for your journey."
    },
    {
        "name": "Pune to Hyderabad Private Cab",
        "description": "Morya Cab provides private taxi services from Pune to Hyderabad for a more personalized experience. Travel in comfort with a dedicated vehicle and driver, ensuring a smooth and comfortable ride."
    },
    {
        "name": "Pune to Hyderabad Shared Taxi",
        "description": "For a more affordable option, Morya Cab offers shared taxi services from Pune to Hyderabad. Share the ride with others while still enjoying a comfortable and safe journey."
    },
    {
        "name": "Pune to Hyderabad Cab Cost",
        "description": "Morya Cab offers transparent and reasonable cab costs for your trip from Pune to Hyderabad. We provide clear pricing, so you know exactly what to expect for your journey, with no hidden fees."
    },
    {
        "name": "Pune to Hyderabad Travel by Taxi",
        "description": "Traveling from Pune to Hyderabad by taxi with Morya Cab ensures you enjoy a convenient, stress-free, and comfortable journey. Our professional drivers ensure safe travel along the best routes."
    },
    {
        "name": "Pune to Hyderabad Drop Taxi",
        "description": "Morya Cab offers drop taxi services for a direct ride from Pune to Hyderabad. Enjoy a smooth and punctual journey with no unnecessary stops along the way."
    },
    {
        "name": "Pune to Hyderabad Luxury Taxi",
        "description": "For a premium travel experience, Morya Cab provides luxury taxi services for your Pune to Hyderabad journey. Relax in a luxurious vehicle and enjoy a comfortable ride, with high-end features to make your trip more enjoyable."
    },
    {
        "name": "Pune to Hyderabad One-Way Taxi Fare",
        "description": "Morya Cab offers competitive pricing for one-way taxis from Pune to Hyderabad. We ensure affordable one-way taxi fares that fit your budget while delivering quality and comfort."
    },
    {
        "name": "Pune to Hyderabad Taxi Contact Information",
        "description": "For prompt and reliable Pune to Hyderabad taxi services, contact Morya Cab at +91 9371304510. We guarantee a comfortable and enjoyable ride for all our customers. Book your Pune to Hyderabad taxi today!"
    }
],


tableData: [
    ["Pune to Hyderabad Taxi", "-Pune to Hyderabad One-Way Cab"],
    ["Pune to Hyderabad Cab Service", "-Pune to Hyderabad Taxi Booking"],
    ["Pune to Hyderabad Round Trip", "-Pune to Hyderabad Car Rental"],
    ["Pune to Hyderabad Taxi Fare", "-Pune to Hyderabad Private Cab"],
    ["Pune to Hyderabad Shared Taxi", "-Pune to Hyderabad Cab Cost"],
    ["Pune to Hyderabad Travel by Taxi", "-Pune to Hyderabad Drop Taxi"],
    ["Pune to Hyderabad Luxury Taxi", "-Pune to Hyderabad One-Way Taxi Fare"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of time when traveling long distances. Whether you're heading to Hyderabad for business, leisure, or family, we ensure timely pickups and drop-offs for a smooth and punctual journey."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet includes a variety of spacious and well-maintained vehicles, designed for long-distance travel. Whether you prefer a sedan, SUV, or premium car, you can enjoy comfortable seating, ample legroom, and air conditioning for a pleasant ride."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly skilled and experienced in handling long-distance trips like Pune to Hyderabad. They are familiar with the best routes, ensuring a safe and efficient journey, while also offering helpful assistance along the way."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We offer competitive pricing for Pune to Hyderabad cab services. With Morya Cab, you’ll receive an upfront quote with no hidden charges, allowing you to travel with peace of mind."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is our top priority. Our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow all safety protocols to ensure your journey is secure and comfortable."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available 24/7 to cater to your travel needs. Whether it’s an early morning trip or a late-night return, our customer service team is ready to assist you with booking and any other inquiries."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Hyderabad cab is quick and easy. You can book online through our website or mobile app, or simply reach out to our customer service team for assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer flexible and customized travel packages for your journey from Pune to Hyderabad. Let us know your preferences, and we’ll tailor the journey to meet your specific needs, including any stops or detours along the way."
    }
]






    }


    const faqData = [
        {
          question: "How can I book a Pune to Hyderabad cab with Morya Cab?",
          answer: "You can book your cab easily online via our website or mobile app, or you can contact our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced in handling long journeys like Pune to Hyderabad. They ensure a smooth, safe, and efficient ride throughout the trip."
        },
        {
          question: "What types of vehicles are available for Pune to Hyderabad travel?",
          answer: "We offer a variety of well-maintained vehicles, including sedans, SUVs, and luxury cars, all designed for comfort during long-distance travel."
        },
        {
          question: "How do I pay for my Pune to Hyderabad cab rental?",
          answer: "We accept a range of payment options, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Hyderabad?",
          answer: "Yes, we offer round-trip services. Just provide your return details during the booking process, and we’ll take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a cab for sightseeing in Hyderabad?",
          answer: "Yes, we offer sightseeing services in Hyderabad. You can explore popular landmarks like the Charminar, Golconda Fort, Hussain Sagar Lake, and more with a trusted driver."
        },
        {
          question: "What is the luggage allowance for a Pune to Hyderabad cab?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or special requirements, let us know during the booking process, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Hyderabad?",
          answer: "Yes, we offer corporate travel services for business trips to Hyderabad. Whether it’s for meetings or team outings, we can provide customized travel packages tailored to your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Hyderabad travel?",
          answer: "Morya Cab offers reliable, professional, and affordable taxi services with experienced drivers and well-maintained vehicles. We ensure a safe, comfortable, and hassle-free journey to Hyderabad."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Arvind Rao',
          role: 'Business Traveler',
          review: 'I booked a Pune to Hyderabad cab for a business trip, and the experience was fantastic. The driver was professional, the car was clean and comfortable, and I arrived on time. Highly recommended!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Meera Desai',
          role: 'Family Traveler',
          review: 'We used Morya Cab for our family vacation to Hyderabad, and it was a great experience. The car was spacious, the driver was friendly, and we had a very comfortable ride. We’ll definitely book again.',
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
        "description": "Book your Pune to Hyderabad taxi with Morya Cab. Affordable one-way and round-trip taxi services, including luxury cabs and shared taxis. Call +91 9371304510 for booking!",
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
          "https://moryacab.com/img/pune-to-hyderabad-taxi.jpg",
          "https://moryacab.com/img/pune-to-hyderabad-cab-service.jpg"
        ],
        "priceRange": "₹8000 - ₹13000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-hyderabad-cab-service",
          "priceCurrency": "INR",
          "price": 10500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "reviewCount": 150
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ravi Sharma"
            },
            "datePublished": "2024-07-20",
            "reviewBody": "A very comfortable ride from Pune to Hyderabad. The driver was professional, and the cab was in perfect condition. Excellent service!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Gupta"
            },
            "datePublished": "2024-09-05",
            "reviewBody": "Booked a one-way taxi from Pune to Hyderabad. The journey was smooth, and the driver took good care of us. Highly recommend this service!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Hyderabad Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.385044,
            "longitude": 78.486671
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-hyderabad-cab-service"
        },
        "keywords": "Pune to Hyderabad taxi, Pune to Hyderabad cab service, Pune to Hyderabad one-way taxi, Pune to Hyderabad round trip, Pune to Hyderabad car rental, Pune to Hyderabad taxi fare, Pune to Hyderabad private cab, Pune to Hyderabad shared taxi, Pune to Hyderabad cab cost, Pune to Hyderabad taxi booking, Pune to Hyderabad drop taxi, Pune to Hyderabad luxury taxi"
      };


    return (
        <div>
            <UsePageTracking/>
 <Helmet>
        <title>Pune to Hyderabad Taxi | Affordable & Reliable Cab Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Pune to Hyderabad taxi with Morya Cab. Affordable one-way and round-trip taxi services, including luxury cabs and shared taxis."
        />
        <meta name="keywords" content="Pune to Hyderabad taxi, Pune to Hyderabad cab service, Pune to Hyderabad one-way taxi, Pune to Hyderabad round trip, Pune to Hyderabad car rental, Pune to Hyderabad taxi fare, Pune to Hyderabad private cab, Pune to Hyderabad shared taxi" />
        <meta property="og:title" content="Pune to Hyderabad Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Pune to Hyderabad taxi with Morya Cab. Affordable, reliable, and comfortable one-way and round-trip taxi services." />
        <meta property="og:url" content="https://moryacab.com/pune-to-hyderabad-cab-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-hyderabad-taxi.jpg" />
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
                            <img src='/images/keyword/12.jpg' alt='img' />
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

export default Punetohyderabadcab;