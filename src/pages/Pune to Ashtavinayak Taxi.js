
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoashtavinayak() {



    const cardData =
    {
        keyword: 'Pune to Ashtavinayak Taxi   ',
        heading: 'Morya Cabs:  Pune to Ashtavinayak Taxi   ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Ashtavinayak. Whether you are on a spiritual journey, planning a religious trip, or simply looking to explore the Ashtavinayak temples, our well-maintained fleet and professional drivers ensure a smooth and hassle-free experience. The Pune to Ashtavinayak distance is approximately 200 km, and the journey typically takes around 4 to 5 hours by road. Travel with peace of mind and comfort, knowing that we prioritize safety, convenience, and excellent customer service.',

        top: 'Top Places to Visit in Ashtavinayak with Morya Cabs',

    "topPlaces": [
    {
        "title": "Mayureshwar Temple",
        "location": "Moregaon",
        "description": "Located in Moregaon, this temple is dedicated to Lord Ganesha and is the first of the eight Ashtavinayak temples. The temple is renowned for its unique idol of Lord Ganesha, which is depicted riding a peacock, symbolizing strength and grace."
    },
    {
        "title": "Siddhivinayak Temple",
        "location": "Siddhatek",
        "description": "Situated in Siddhatek, this temple is believed to fulfill the wishes of devotees. It is an important pilgrimage site dedicated to Lord Ganesha, where the idol is believed to have been self-manifested. The temple’s serene surroundings add to the spiritual experience."
    },
    {
        "title": "Ballaleshwar Temple",
        "location": "Pali",
        "description": "Located in Pali, the Ballaleshwar Temple is dedicated to Lord Ganesha and is considered significant for removing obstacles. The temple is unique because the idol is in a standing posture, making it one of the most revered temples of the Ashtavinayak pilgrimage."
    },
    {
        "title": "Varadvinayak Temple",
        "location": "Mahad",
        "description": "In the village of Mahad, the Varadvinayak Temple is dedicated to Lord Ganesha as the deity of blessings. The temple is believed to grant the wish of devotees, and its picturesque surroundings make it a peaceful spot for reflection."
    },
    {
        "title": "Chintamani Temple",
        "location": "Theur",
        "description": "Situated in Theur, the Chintamani Temple is dedicated to Lord Ganesha as the one who dispels all worries. The temple's serene location, along with its significance in the Ashtavinayak pilgrimage, makes it an essential stop on the journey."
    },
    {
        "title": "Vigneshwar Temple",
        "location": "Ozar",
        "description": "Located in Ozar, this temple is dedicated to Vigneshwar, an incarnation of Lord Ganesha. The temple is famous for its grand architecture and peaceful surroundings, offering an ideal place for prayer and spiritual contemplation."
    },
    {
        "title": "Girijatmaj Temple",
        "location": "Lenyadri",
        "description": "The Girijatmaj Temple, located in Lenyadri, is built into the mountains and is dedicated to Lord Ganesha. The idol in the temple is believed to have been formed naturally. A popular spot for trekking and devotion, this temple is a must-visit for pilgrims."
    },
    {
        "title": "Ranjangaon Ganapati Temple",
        "location": "Ranjangaon",
        "description": "Situated in Ranjangaon, this temple is dedicated to Maha Ganapati. It is the last stop in the Ashtavinayak pilgrimage and is considered a powerful temple for removing obstacles and ensuring success."
    }
],



"services": [
    {
        "name": "Pune to Ashtavinayak Cab",
        "description": "Morya Cab offers reliable and comfortable cab services for your journey from Pune to Ashtavinayak. Whether you're visiting for religious purposes or sightseeing, we provide a smooth and enjoyable ride to all the Ashtavinayak temples."
    },
    {
        "name": "Ashtavinayak Darshan Package from Pune",
        "description": "Morya Cab offers special Ashtavinayak Darshan packages from Pune, designed to make your pilgrimage convenient and stress-free. We offer well-planned itineraries and comfortable travel to visit all eight Ashtavinayak temples in a guided and timely manner."
    },
    {
        "name": "Pune to Ashtavinayak Taxi Service",
        "description": "Morya Cab provides dedicated taxi services for your trip from Pune to Ashtavinayak. Our professional drivers ensure that your journey is smooth and that you visit each temple on time with comfort and ease."
    },
    {
        "name": "Pune to Ashtavinayak 2 Days Package",
        "description": "For those who want to take their time, Morya Cab offers a 2-day Ashtavinayak Darshan package from Pune. This package gives you a relaxed journey, allowing ample time for prayers, sightseeing, and rest."
    },
    {
        "name": "Pune to Ashtavinayak Tour",
        "description": "Morya Cab offers a tailored Ashtavinayak temple tour from Pune. Visit the eight sacred temples with a comfortable ride and experienced driver, ensuring that your spiritual journey is peaceful and memorable."
    },
    {
        "name": "Pune to Ashtavinayak Cab Booking",
        "description": "Booking your Pune to Ashtavinayak cab with Morya Cab is easy and hassle-free. You can reserve your ride online or by phone. We offer flexible booking options to ensure your trip is well-planned and convenient."
    },
    {
        "name": "Pune to Ashtavinayak Temple Tour",
        "description": "Experience the Ashtavinayak temple tour with Morya Cab. Our professional drivers will take you to each of the eight temples, making sure you have enough time to explore, pray, and experience the divine atmosphere of these holy sites."
    },
    {
        "name": "Pune to Ashtavinayak Cab Charges",
        "description": "Morya Cab provides transparent and competitive pricing for your Pune to Ashtavinayak journey. We ensure there are no hidden charges, and the pricing is fair, so you can enjoy your religious journey without any concerns."
    },
    {
        "name": "Pune to Ashtavinayak Luxury Taxi",
        "description": "For a premium experience, Morya Cab offers luxury taxi services for your Pune to Ashtavinayak trip. Our luxury vehicles provide extra comfort, making your journey both divine and relaxing."
    },
    {
        "name": "Pune to Ashtavinayak Shared Taxi",
        "description": "Morya Cab offers shared taxi services for those who want to travel to Ashtavinayak with others, offering a budget-friendly way to complete your pilgrimage. Share the ride without compromising on comfort."
    },
    {
        "name": "Pune to Ashtavinayak Private Cab",
        "description": "For a more personal and comfortable experience, Morya Cab offers private cab services for your Pune to Ashtavinayak trip. Enjoy the freedom to travel at your own pace with a dedicated vehicle and driver."
    },
    {
        "name": "Pune to Ashtavinayak Taxi Fare",
        "description": "Morya Cab offers competitive and transparent taxi fares for your trip from Pune to Ashtavinayak. We provide a clear pricing structure with no hidden fees, so you can focus on your spiritual journey."
    },
    {
        "name": "Pune to Ashtavinayak One-Way Taxi",
        "description": "Morya Cab provides one-way taxi services from Pune to Ashtavinayak. This is perfect for those who need a direct, one-way trip to visit the Ashtavinayak temples, offering convenience and comfort."
    },
    {
        "name": "Pune to Ashtavinayak Round Trip",
        "description": "Morya Cab also offers round-trip services for your Pune to Ashtavinayak journey. Whether you're visiting for a day or a couple of days, our round-trip package ensures that your travel is well-planned, affordable, and hassle-free."
    },
    {
        "name": "Pune to Ashtavinayak Cab Contact Information",
        "description": "Contact Morya Cab at +91 9371304510 for efficient and reliable Pune to Ashtavinayak cab services. We ensure a smooth and enjoyable ride for all our customers, making your spiritual journey as comfortable as possible. Book your Pune to Ashtavinayak cab today!"
    }
],




tableData: [
    ["Pune to Ashtavinayak Cab", "-Ashtavinayak Darshan Package from Pune"],
    ["Pune to Ashtavinayak Taxi Service", "-Pune to Ashtavinayak 2 Days Package"],
    ["Pune to Ashtavinayak Tour", "-Pune to Ashtavinayak Cab Booking"],
    ["Pune to Ashtavinayak Temple Tour", "-Pune to Ashtavinayak Cab Charges"],
    ["Pune to Ashtavinayak Luxury Taxi", "-Pune to Ashtavinayak Shared Taxi"],
    ["Pune to Ashtavinayak Private Cab", "-Pune to Ashtavinayak Taxi Fare"],
    ["Pune to Ashtavinayak One-Way Taxi", "-Pune to Ashtavinayak Round Trip"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we know the importance of punctuality, especially for a religious trip like visiting the Ashtavinayak temples. Our drivers ensure timely pickups and drop-offs, so you can complete your pilgrimage without any delays."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet of vehicles is well-maintained, spacious, and designed for comfort. Whether you're traveling alone or with family, we ensure you have a relaxing and comfortable ride to all the Ashtavinayak temples."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced and skilled, familiar with the routes to all the Ashtavinayak temples. They follow strict safety protocols to ensure a smooth and safe journey, making your religious trip peaceful and hassle-free."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for Pune to Ashtavinayak taxi services. We provide clear and upfront pricing with no hidden charges, ensuring great value for your journey."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. Our vehicles are equipped with modern safety features, such as airbags, seat belts, and GPS tracking. Our drivers follow all safety protocols, providing a worry-free and secure travel experience."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you're planning a morning visit or a late-night return from Ashtavinayak, Morya Cab is available 24/7. Our customer service team is always ready to assist you with bookings and other inquiries, whenever you need us."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi for your Pune to Ashtavinayak trip is quick and easy. You can book online via our website or mobile app, or simply contact our customer service team for assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages for your Ashtavinayak pilgrimage, allowing flexibility in your itinerary. We can help design a journey that suits your preferences, including visits to all the temples, rest breaks, and more."
    }
]








    }


    const faqData = [
        {
          question: "How can I book a Pune to Ashtavinayak taxi with Morya Cab?",
          answer: "You can easily book your taxi online via our website or mobile app, or contact our customer service team for assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced in handling long-distance trips like Pune to Ashtavinayak. They are familiar with the best routes and will ensure your trip is smooth and safe."
        },
        {
          question: "What types of vehicles are available for Pune to Ashtavinayak travel?",
          answer: "We offer a range of vehicles, including sedans, SUVs, and premium cars, for your journey to the Ashtavinayak temples. All vehicles are well-maintained and comfortable for long-distance travel."
        },
        {
          question: "How do I pay for my Pune to Ashtavinayak taxi rental?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Ashtavinayak?",
          answer: "Yes, you can book a round-trip taxi for your Ashtavinayak journey. Just provide your return details during the booking process, and we’ll handle the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges, such as for waiting or detours, will be communicated to you upfront to ensure complete transparency."
        },
        {
          question: "Can I hire a taxi for sightseeing during my Ashtavinayak trip?",
          answer: "Yes, we offer sightseeing services as part of your Ashtavinayak trip. Our drivers can help you explore the temples and other nearby spots of interest."
        },
        {
          question: "What is the luggage allowance for a Pune to Ashtavinayak taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or special requirements, kindly inform us during booking, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Ashtavinayak?",
          answer: "Yes, we offer corporate travel services for groups or business outings to the Ashtavinayak temples. We can provide customized packages based on your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Ashtavinayak travel?",
          answer: "Morya Cab offers professional drivers, reliable service, well-maintained vehicles, and affordable pricing. We ensure a comfortable, safe, and spiritual journey to the Ashtavinayak temples."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Ashok Joshi',
          role: 'Ashtavinayak Pilgrim',
          review: 'I booked Morya Cab for our Ashtavinayak pilgrimage, and it was an amazing experience. The driver was courteous and knowledgeable, and the car was very comfortable. Highly recommended!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Anita Patil',
          role: 'Family Traveler',
          review: 'We used Morya Cab for our family trip to Ashtavinayak temples. The journey was smooth, and the driver ensured we were on time for all the temple visits. A great experience overall!',
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
        "description": "Book your Pune to Ashtavinayak taxi for a divine darshan tour. Offering customized tour packages, one-way, and round-trip services. Call +91 9371304510 for booking!",
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
          "https://moryacab.com/img/pune-to-ashtavinayak-taxi.jpg",
          "https://moryacab.com/img/pune-to-ashtavinayak-cab.jpg"
        ],
        "priceRange": "₹5000 - ₹10000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-ashtavinayak-taxi",
          "priceCurrency": "INR",
          "price": 6500,
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
              "name": "Ravi Jadhav"
            },
            "datePublished": "2024-08-14",
            "reviewBody": "Great experience for Ashtavinayak Darshan. The driver was very knowledgeable and helped us throughout the journey. Highly recommended!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Aarti Deshmukh"
            },
            "datePublished": "2024-09-10",
            "reviewBody": "Amazing service! The vehicle was clean, and the trip was very comfortable. Worth every penny for a peaceful darshan experience."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Ashtavinayak Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5196,
            "longitude": 73.8557
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-ashtavinayak-taxi"
        },
        "keywords": "Pune to Ashtavinayak taxi, Ashtavinayak darshan package from Pune, Pune to Ashtavinayak one-way taxi, Pune to Ashtavinayak luxury taxi, Pune to Ashtavinayak round trip, Pune to Ashtavinayak temple tour, Pune to Ashtavinayak shared taxi"
      };


    return (
        <div>
            <UsePageTracking/>
  <Helmet>
        <title>Pune to Ashtavinayak Taxi | Book Ashtavinayak Darshan Package | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Pune to Ashtavinayak taxi for a divine darshan tour. Offering affordable one-way and round-trip services, temple tours, and luxury cabs."
        />
        <meta name="keywords" content="Pune to Ashtavinayak taxi, Ashtavinayak darshan package from Pune, Pune to Ashtavinayak luxury taxi, Pune to Ashtavinayak round trip, Pune to Ashtavinayak shared taxi" />
        <meta property="og:title" content="Pune to Ashtavinayak Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Pune to Ashtavinayak taxi for an affordable and comfortable divine journey. Customized tour packages available." />
        <meta property="og:url" content="https://moryacab.com/pune-to-ashtavinayak-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-ashtavinayak-taxi.jpg" />
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
                            <img src='/images/keyword/9.jpg' alt='img' />
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

export default Punetoashtavinayak;