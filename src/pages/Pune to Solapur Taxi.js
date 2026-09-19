
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetosolapurtaxi() {



    const cardData =
    {
        keyword: 'Pune to Solapur Taxi    ',
        heading: 'Morya Cabs:  Pune to Solapur Taxi  ',
        headingDescription: 'Morya Cabs offers dependable, comfortable, and budget-friendly taxi services from Pune to Solapur. Whether you are visiting Solapur for religious purposes, business, or leisure, our well-maintained fleet and experienced drivers ensure a smooth and hassle-free journey. The distance between Pune and Solapur is approximately 250 km, and the journey takes around 5 to 6 hours by road. With Morya Cabs, you can expect a safe and pleasant ride tailored to your comfort and convenience.',

        top: 'Top Places to Visit in Solapur with Morya Cabs',

    "topPlaces": [
    {
        "title": "Tuljapur Temple",
        "location": "Tuljapur, Maharashtra",
        "description": "One of the prominent pilgrimage spots in Maharashtra, Tuljapur is home to the Tuljabhavani Temple, dedicated to Goddess Bhavani. Devotees from all over visit to seek blessings and experience the peaceful atmosphere surrounding the temple."
    },
    {
        "title": "Solapur Fort (Navaja)",
        "location": "Solapur, Maharashtra",
        "description": "The Solapur Fort, also known as the Navaja Fort, offers a glimpse into the region’s historical past. Though in ruins, the fort provides panoramic views of the surrounding area and is a must-visit for history enthusiasts."
    },
    {
        "title": "Bhuikot Fort",
        "location": "Solapur, Maharashtra",
        "description": "Located near the city center, Bhuikot Fort is another significant historical site in Solapur. Built by the Adil Shahi dynasty, it is well-preserved and features ancient architecture, making it an interesting place to visit for those interested in history and culture."
    },
    {
        "title": "Pandharpur",
        "location": "Pandharpur, Maharashtra",
        "description": "Situated about 70 km from Solapur, Pandharpur is one of the most revered pilgrimage destinations in Maharashtra. Famous for the Vithoba Temple, dedicated to Lord Vithoba, Pandharpur attracts thousands of devotees annually."
    },
    {
        "title": "Hutatma Garden",
        "location": "Solapur, Maharashtra",
        "description": "A well-maintained park in Solapur, Hutatma Garden is dedicated to the martyrs who sacrificed their lives for the cause of the region. It's a peaceful place to relax and enjoy nature, with lush greenery and well-kept surroundings."
    },
    {
        "title": "Akkalkot",
        "location": "Akkalkot, Maharashtra",
        "description": "Akkalkot is a small town near Solapur, known for its spiritual significance. The Samadhi of Shri Swaminarayan, a revered saint, is located here, and it’s a popular spot for those seeking spiritual solace."
    },
    {
        "title": "Gurudwara Nanak Jhira Sahib",
        "location": "Solapur, Maharashtra",
        "description": "A significant religious site for Sikhs, Gurudwara Nanak Jhira Sahib in Solapur is dedicated to Guru Nanak. The gurudwara is visited by people from different communities and is known for its serene atmosphere and historical importance."
    },
    {
        "title": "Siddheshwar Lake",
        "location": "Solapur, Maharashtra",
        "description": "Siddheshwar Lake is located near the Siddheshwar Temple and is known for its calm and serene environment. It is a perfect spot for a peaceful retreat, offering a calm ambiance amidst nature, ideal for those looking to enjoy the outdoors."
    },
    {
        "title": "Shri Siddheshwar Temple",
        "location": "Solapur, Maharashtra",
        "description": "A revered temple dedicated to Lord Siddheshwar, this temple is an important pilgrimage site for Hindus. Located in the heart of Solapur, it attracts visitors for its spiritual significance and tranquil environment."
    },
    {
        "title": "Naldurg Fort",
        "location": "Naldurg, Maharashtra",
        "description": "Naldurg Fort, located around 70 km from Solapur, is an ancient fortification known for its massive walls and beautiful surroundings. The fort offers a picturesque view of the region and is a perfect spot for history buffs and nature lovers alike."
    }
],



"services": [
    {
        "name": "Pune to Solapur Cab",
        "description": "Morya Cab offers reliable and comfortable cab services for your journey from Pune to Solapur. Whether you’re traveling for business, leisure, or a religious visit, we ensure a smooth, enjoyable, and stress-free ride."
    },
    {
        "name": "Pune to Solapur Taxi Fare",
        "description": "Morya Cab provides competitive taxi fares for your Pune to Solapur trip. Our pricing is transparent with no hidden charges, allowing you to enjoy your travel with confidence."
    },
    {
        "name": "Pune to Solapur Cab Service",
        "description": "Morya Cab offers excellent cab services for your journey from Pune to Solapur. With experienced drivers and well-maintained vehicles, we ensure that your ride is both comfortable and safe."
    },
    {
        "name": "Pune to Solapur Car Hire",
        "description": "Need a vehicle for your journey from Pune to Solapur? Morya Cab offers car hire services, including both self-drive and chauffeur-driven options, ensuring a flexible and comfortable experience."
    },
    {
        "name": "Pune to Solapur Taxi Booking",
        "description": "Booking your taxi from Pune to Solapur is simple with Morya Cab. You can book online or via phone, ensuring a smooth and hassle-free booking process for your trip."
    },
    {
        "name": "Pune to Solapur Round Trip",
        "description": "Morya Cab offers round-trip taxi services from Pune to Solapur, making your journey convenient. Whether you need a return trip the same day or at a later time, we offer flexible options to meet your travel needs."
    },
    {
        "name": "Pune to Solapur One-Way Taxi",
        "description": "For a direct and efficient journey, Morya Cab provides one-way taxi services from Pune to Solapur. Enjoy a comfortable, stress-free ride with a professional driver."
    },
    {
        "name": "Pune to Solapur Taxi Charges",
        "description": "Morya Cab offers transparent and affordable taxi charges for your journey from Pune to Solapur. We provide clear pricing upfront, so you know exactly what to expect for your trip."
    },
    {
        "name": "Pune to Solapur Luxury Taxi",
        "description": "If you're looking for a premium experience, Morya Cab provides luxury taxi services from Pune to Solapur. Travel in style and comfort with our luxury vehicles for a more refined journey."
    },
    {
        "name": "Pune to Solapur Shared Taxi",
        "description": "For a more budget-friendly option, Morya Cab offers shared taxi services from Pune to Solapur. Share your ride with others while still enjoying a comfortable and reliable service."
    },
    {
        "name": "Pune to Solapur Taxi Service",
        "description": "Morya Cab provides dependable taxi services for your trip from Pune to Solapur. Our services are designed to make your journey as comfortable, safe, and convenient as possible."
    },
    {
        "name": "Pune to Solapur Drop Taxi",
        "description": "Need a direct drop from Pune to Solapur? Morya Cab offers drop taxi services, ensuring you reach your destination on time with no detours, providing a smooth and efficient ride."
    },
    {
        "name": "Pune to Solapur Taxi Cost",
        "description": "Morya Cab ensures you get the best value for your journey from Pune to Solapur with competitive pricing. We aim to keep our costs affordable without compromising on comfort or service."
    },
    {
        "name": "Pune to Solapur Cab Price",
        "description": "Morya Cab provides a straightforward and transparent pricing structure for your Pune to Solapur cab service. Whether you're booking a one-way trip or a round trip, we offer fair prices and excellent service."
    },
    {
        "name": "Pune to Solapur Car Rental",
        "description": "Morya Cab offers car rental services for your trip from Pune to Solapur, providing options for both self-drive and chauffeur-driven cars. Choose the vehicle that best suits your preferences and enjoy a comfortable journey."
    },
    {
        "name": "Pune to Solapur Cab Contact Information",
        "description": "For prompt and reliable Pune to Solapur cab services, contact Morya Cab at +91 9371304510. We ensure a smooth and comfortable ride, making your journey stress-free. Book your Pune to Solapur cab today!"
    }
],

tableData: [
    ["Pune to Solapur Cab", "-Pune to Solapur Taxi Fare"],
    ["Pune to Solapur Cab Service", "-Pune to Solapur Car Hire"],
    ["Pune to Solapur Taxi Booking", "-Pune to Solapur Round Trip"],
    ["Pune to Solapur One-Way Taxi", "-Pune to Solapur Taxi Charges"],
    ["Pune to Solapur Luxury Taxi", "-Pune to Solapur Shared Taxi"],
    ["Pune to Solapur Taxi Service", "-Pune to Solapur Drop Taxi"],
    ["Pune to Solapur Taxi Cost", "-Pune to Solapur Cab Price"],
    ["Pune to Solapur Car Rental", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab ensures that your journey from Pune to Solapur is on time, whether you're traveling for business, religious purposes, or leisure. Our drivers are punctual and make sure you reach your destination without delays."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a range of vehicles that are spacious, clean, and well-maintained, ensuring a comfortable ride for long-distance travel. Whether you're traveling alone or with family, our vehicles offer ample space and comfort throughout your journey."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced in handling long-distance journeys like Pune to Solapur. They are well-versed in the best routes and ensure that you have a smooth, safe, and hassle-free travel experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing for Pune to Solapur taxi services with no hidden charges. You’ll get an upfront cost for your journey, allowing you to travel without worrying about surprise costs."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "We prioritize your safety. Our vehicles are equipped with safety features like airbags, seat belts, and GPS tracking. Our professional drivers adhere to safety protocols, ensuring that you have a safe and comfortable ride."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available 24/7 for your convenience. Whether you need to travel early in the morning or late at night, we are always ready to assist you with your booking."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi for your Pune to Solapur trip is quick and easy. You can book through our website or mobile app, or contact our customer service team for a seamless booking experience."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're traveling for business, leisure, or religious reasons, we offer customized travel packages to suit your specific needs. Let us know your preferences, and we’ll design a package for you."
    }
]





    }


    const faqData = [
        {
          question: "How can I book a Pune to Solapur taxi with Morya Cab?",
          answer: "You can easily book a taxi online through our website or mobile app, or you can contact our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced and skilled in handling long-distance journeys like Pune to Solapur. They ensure a safe and comfortable trip."
        },
        {
          question: "What types of vehicles are available for Pune to Solapur travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and luxury cars. All vehicles are well-maintained, spacious, and equipped for long-distance travel."
        },
        {
          question: "How do I pay for my Pune to Solapur taxi rental?",
          answer: "We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app."
        },
        {
          question: "Can I book a round trip from Pune to Solapur?",
          answer: "Yes, we offer round-trip taxi services. Just provide your return details during the booking process, and we’ll take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges, such as for waiting or detours, will be communicated to you before the trip starts, ensuring transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Solapur?",
          answer: "Yes, we offer sightseeing services in Solapur. Our drivers can take you to popular spots like the Solapur Fort, Siddheshwar Temple, and other local attractions."
        },
        {
          question: "What is the luggage allowance for a Pune to Solapur taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or special requirements, please let us know at the time of booking, and we’ll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Solapur?",
          answer: "Yes, we provide corporate travel services for business trips to Solapur. We offer customized packages to meet the needs of your company or organization."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Solapur travel?",
          answer: "Morya Cab offers reliable, safe, and affordable taxi services with experienced drivers and well-maintained vehicles. We ensure a comfortable and hassle-free journey to Solapur."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Nilesh Deshmukh',
          role: 'Solapur Traveler',
          review: 'Our family used Morya Cab for our trip to Solapur, and it was a pleasant experience. The driver was professional, and the car was very comfortable. I highly recommend their service!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mr. Sameer Patil',
          role: 'Business Traveler',
          review: 'I had a business trip to Solapur, and I booked Morya Cab. The service was great, and the driver was punctual and courteous. It was a smooth journey, and I will definitely use them again.',
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
        "description": "Book your Pune to Solapur taxi with Morya Cab. Affordable one-way and round-trip taxi services, including luxury cabs and shared taxis. Call +91 9371304510 for booking!",
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
          "https://moryacab.com/img/pune-to-solapur-taxi.jpg",
          "https://moryacab.com/img/pune-to-solapur-cab-service.jpg"
        ],
        "priceRange": "₹3000 - ₹5500",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-solapur-cab-service",
          "priceCurrency": "INR",
          "price": 4500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "reviewCount": 120
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Kumar"
            },
            "datePublished": "2024-06-15",
            "reviewBody": "Had a pleasant journey from Pune to Solapur. The driver was polite, and the vehicle was clean and comfortable. Great service!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anita Reddy"
            },
            "datePublished": "2024-08-12",
            "reviewBody": "Amazing service. We had a smooth ride from Pune to Solapur. Affordable pricing and good quality vehicles. Highly recommend!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Solapur Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.6893,
            "longitude": 75.9060
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-solapur-cab-service"
        },
        "keywords": "Pune to Solapur taxi, Pune to Solapur cab service, Pune to Solapur one-way taxi, Pune to Solapur round trip, Pune to Solapur car rental, Pune to Solapur taxi fare, Pune to Solapur private cab, Pune to Solapur shared taxi, Pune to Solapur taxi booking, Pune to Solapur drop taxi, Pune to Solapur luxury taxi"
      };
    


    return (
        <div>
            <UsePageTracking/>
  <Helmet>
        <title>Pune to Solapur Taxi | Affordable & Reliable Cab Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Pune to Solapur taxi with Morya Cab. Affordable one-way and round-trip taxi services, including luxury cabs and shared taxis."
        />
        <meta name="keywords" content="Pune to Solapur taxi, Pune to Solapur cab service, Pune to Solapur one-way taxi, Pune to Solapur round trip, Pune to Solapur car rental, Pune to Solapur taxi fare, Pune to Solapur private cab, Pune to Solapur shared taxi" />
        <meta property="og:title" content="Pune to Solapur Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Pune to Solapur taxi with Morya Cab. Affordable, reliable, and comfortable one-way and round-trip taxi services." />
        <meta property="og:url" content="https://moryacab.com/pune-to-solapur-cab-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-solapur-taxi.jpg" />
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
                            <img src='/images/keyword/11.jpg' alt='img' />
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

export default Punetosolapurtaxi;