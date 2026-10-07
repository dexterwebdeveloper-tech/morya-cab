
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoaurangbadtaxi() {



    const cardData =
    {
        keyword: 'Pune to Aurangabad Taxi  ',
        heading: 'Morya Cabs:  Pune to Aurangabad Taxi   ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Aurangabad. Whether you are traveling for historical exploration, a spiritual visit, or a family vacation, our well-maintained fleet and professional drivers ensure a smooth and hassle-free journey. Pune to Aurangabad is approximately 235 km, and the journey takes around 5 to 6 hours by road. Enjoy a safe and comfortable ride with our top-notch amenities and customer-centric service.',

        top: 'Top Places to Visit in Aurangabad with Morya Cabs',

       "topPlaces": [
    {
        "title": "Ellora Caves",
        "description": "Ellora Caves, a UNESCO World Heritage Site, is a magnificent complex of rock-cut temples and monasteries, dating back to the 6th to 10th centuries. These caves are renowned for their intricate carvings and religious significance. The Kailasa Temple, a monolithic structure carved from a single rock, is one of the most remarkable structures in Ellora, attracting history enthusiasts, architecture lovers, and spiritual seekers alike."
    },
    {
        "title": "Ajanta Caves",
        "description": "Ajanta Caves is another UNESCO World Heritage Site located near Aurangabad. These ancient Buddhist caves are famous for their exquisite wall paintings and sculptures, depicting scenes from the life of Lord Buddha. The caves date back to the 2nd century BC and offer a fascinating glimpse into the history, art, and culture of ancient India."
    },
    {
        "title": "Bibi Ka Maqbara",
        "description": "Known as the 'Taj of the Deccan,' Bibi Ka Maqbara is a stunning mausoleum built in the memory of Aurangzeb’s wife, Dilras Banu Begum. The monument is a perfect blend of Mughal and Deccan architecture and is often compared to the Taj Mahal in Agra due to its similar design. The tranquil gardens and serene surroundings make it an ideal spot for photography and reflection."
    },
    {
        "title": "Daulatabad Fort",
        "description": "Daulatabad Fort is a historic fort located on a hilltop, offering panoramic views of the surrounding region. The fort’s strategic location and impressive architecture make it a significant site for history lovers. The fort features a number of defensive features, including a series of gates, a moat, and a labyrinth to confuse invaders. It is a great spot for those interested in medieval Indian history and architecture."
    },
    {
        "title": "Aurangabad Caves",
        "description": "Aurangabad Caves, a group of 12 rock-cut Buddhist temples, are lesser-known but equally stunning as the Ajanta and Ellora Caves. The caves date back to the 6th century and feature beautiful sculptures, carvings, and Buddhist paintings. The caves are less crowded, offering a peaceful atmosphere to explore the ancient art and architecture."
    },
    {
        "title": "Shirdi",
        "description": "Shirdi, located about 120 km from Aurangabad, is the home of the revered saint Sai Baba. It is one of the most important pilgrimage sites in India, attracting millions of devotees each year. The Sai Baba Temple, where the saint's samadhi is located, is the main attraction. Visitors come to seek blessings and experience the spiritual energy of this sacred place."
    },
    {
        "title": "Grishneshwar Temple",
        "description": "Grishneshwar Temple, located near Ellora Caves, is one of the 12 Jyotirlinga shrines dedicated to Lord Shiva. The temple is an important pilgrimage destination for Hindus and is known for its religious significance and beautiful architecture. The temple complex is serene and surrounded by scenic views of the nearby mountains."
    },
    {
        "title": "Meghdoot Garden",
        "description": "Meghdoot Garden is a popular recreational park in Aurangabad, known for its lush green landscapes and peaceful environment. The garden offers a serene escape from the bustling city and is perfect for picnics, walks, and relaxation. The park also has a beautiful waterfall, making it an ideal spot for nature lovers."
    },
    {
        "title": "Jami Masjid",
        "description": "Jami Masjid is a magnificent mosque built during the Mughal period, known for its grand architecture and beautiful design. The mosque features intricate carvings, arches, and minarets. It is one of the most important historical landmarks in Aurangabad and is a peaceful place for prayer and reflection."
    },
    {
        "title": "Panchakki",
        "description": "Panchakki, an ancient water mill, is one of the most fascinating landmarks in Aurangabad. The water mill was built in the 17th century to grind grain and is powered by water from a nearby spring. The mill's engineering and historical significance make it an interesting site for visitors. The surrounding gardens and the peaceful atmosphere add to the charm of the location."
    }
],



  "services": [
    {
        "name": "Pune to Aurangabad Cab",
        "description": "Morya Cab offers reliable and comfortable cab services for your journey from Pune to Aurangabad. Whether you're traveling for business, leisure, or sightseeing, we ensure a smooth and stress-free ride with professional drivers."
    },
    {
        "name": "Pune to Aurangabad Taxi Service",
        "description": "Morya Cab provides dependable taxi services from Pune to Aurangabad. Our fleet of well-maintained vehicles ensures a comfortable and efficient journey to your destination, making it the ideal choice for a seamless trip."
    },
    {
        "name": "Pune to Aurangabad Cab Booking",
        "description": "Booking your cab for Pune to Aurangabad is quick and easy with Morya Cab. You can book online or via phone, and we’ll ensure that your ride is reserved according to your preferred travel time and vehicle type."
    },
    {
        "name": "Pune to Aurangabad Cab Fare",
        "description": "Morya Cab offers competitive and transparent cab fares for your Pune to Aurangabad journey. We believe in no hidden charges, and our prices are affordable and fair, ensuring you get the best value for your trip."
    },
    {
        "name": "Pune to Aurangabad Car Rental",
        "description": "Morya Cab offers flexible car rental services for your Pune to Aurangabad trip. Rent a car with a driver and enjoy a customized experience, whether you're traveling for a day trip or a longer journey."
    },
    {
        "name": "Pune to Aurangabad Taxi Fare",
        "description": "Morya Cab provides clear and upfront taxi fare pricing for your journey from Pune to Aurangabad. We guarantee no hidden costs, so you can enjoy your trip without any unexpected charges."
    },
    {
        "name": "Pune to Aurangabad One-Way Taxi",
        "description": "Morya Cab offers one-way taxi services from Pune to Aurangabad. This is the perfect option for those who need a direct ride without the need for a return journey, offering a convenient and budget-friendly solution."
    },
    {
        "name": "Pune to Aurangabad Round Trip",
        "description": "If you’re looking to make a round trip from Pune to Aurangabad, Morya Cab offers flexible options. We provide a comfortable and hassle-free round-trip journey, ensuring that you can return when it’s most convenient for you."
    },
    {
        "name": "Pune to Aurangabad Luxury Taxi",
        "description": "For a premium travel experience, Morya Cab offers luxury taxi services from Pune to Aurangabad. Travel in comfort and style with high-end vehicles, ensuring a relaxed and lavish journey."
    },
    {
        "name": "Pune to Aurangabad Private Cab",
        "description": "Morya Cab offers private taxi services for your Pune to Aurangabad journey. Enjoy the privacy and comfort of your own vehicle, tailored to your specific needs and preferences for a more personalized travel experience."
    },
    {
        "name": "Pune to Aurangabad Shared Taxi",
        "description": "Looking to save on travel costs? Morya Cab offers shared taxi services for those who are open to sharing the ride with others. This option is an affordable way to reach Aurangabad while still enjoying comfort and reliability."
    },
    {
        "name": "Pune to Aurangabad Taxi Drop",
        "description": "If you need a drop-off in Aurangabad, Morya Cab provides reliable taxi drop services, ensuring you reach your destination on time and without hassle. We offer punctual and direct taxi rides for your convenience."
    },
    {
        "name": "Pune to Aurangabad Taxi Service",
        "description": "Morya Cab ensures reliable and efficient taxi services for your Pune to Aurangabad trip. Our professional drivers are dedicated to making your journey smooth and comfortable."
    },
    {
        "name": "Pune to Aurangabad Taxi Booking Online",
        "description": "Booking your taxi online for Pune to Aurangabad is simple with Morya Cab. Our easy-to-use online booking system lets you choose your vehicle, travel date, and time in just a few clicks, ensuring a smooth reservation process."
    },
    {
        "name": "Pune to Aurangabad Cab Contact Information",
        "description": "Contact Morya Cab at +91 9359401610 for prompt and efficient Pune to Aurangabad cab services. We ensure a smooth and enjoyable ride for all our customers, making your journey comfortable and stress-free. Book your Pune to Aurangabad cab today!"
    }
],




tableData: [
    ["Pune to Aurangabad Cab", "-Pune to Aurangabad Taxi Service"],
    ["Pune to Aurangabad Cab Booking", "-Pune to Aurangabad Cab Fare"],
    ["Pune to Aurangabad Car Rental", "-Pune to Aurangabad Taxi Fare"],
    ["Pune to Aurangabad One-Way Taxi", "-Pune to Aurangabad Round Trip"],
    ["Pune to Aurangabad Luxury Taxi", "-Pune to Aurangabad Private Cab"],
    ["Pune to Aurangabad Shared Taxi", "-Pune to Aurangabad Taxi Drop"],
    ["Pune to Aurangabad Taxi Service", "-Pune to Aurangabad Taxi Booking Online"],
    
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of punctuality. Whether you are heading to Aurangabad for business or leisure, our drivers ensure timely pickups and drop-offs for a smooth and hassle-free trip."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a fleet of well-maintained, spacious vehicles with comfortable seating, air conditioning, and ample legroom to ensure that your Pune to Aurangabad journey is as comfortable as possible."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced and skilled, ensuring a safe and pleasant ride to Aurangabad. They are familiar with the best routes and follow safety protocols, so you can enjoy a worry-free journey."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers affordable pricing with no hidden charges. Our pricing is transparent, and you will know the fare upfront, ensuring no surprises during or after your trip."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. Our vehicles are regularly serviced and equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers follow strict safety guidelines for a secure journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you're planning an early morning trip or a late-night return, Morya Cab is available 24/7 for your convenience. Our customer service team is always ready to assist with bookings at any time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Aurangabad taxi is easy. You can book online via our website or mobile app, or you can contact our customer service team for assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer tailored travel packages to suit your needs, whether you're traveling for business, sightseeing, or leisure. Let us know your preferences, and we’ll create a customized journey for you."
    }
]







    }


    const faqData = [
        {
          question: "How can I book a Pune to Aurangabad taxi with Morya Cab?",
          answer: "You can book online via our website or mobile app, or call our customer service team for assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are experienced in handling long-distance trips like Pune to Aurangabad and ensure a smooth and comfortable ride."
        },
        {
          question: "What types of vehicles are available for Pune to Aurangabad travel?",
          answer: "We offer a range of well-maintained vehicles, including sedans, SUVs, and premium cars, to ensure comfort and convenience during your trip."
        },
        {
          question: "How do I pay for my Pune to Aurangabad taxi rental?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payment through our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Aurangabad?",
          answer: "Yes, you can book a round-trip taxi. Simply provide your return details during booking, and we’ll take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you upfront, ensuring full transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Aurangabad?",
          answer: "Yes, we offer sightseeing tours in Aurangabad. Visit popular spots like the Ajanta and Ellora Caves, Bibi Ka Maqbara, and more with a trusted driver."
        },
        {
          question: "What is the luggage allowance for a Pune to Aurangabad taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have additional luggage or special requirements, please inform us during booking, and we will make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Aurangabad?",
          answer: "Yes, we provide corporate travel services for business trips between Pune and Aurangabad, offering customized packages to suit your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Aurangabad travel?",
          answer: "Morya Cab offers reliable service, well-maintained vehicles, professional drivers, and affordable pricing. We ensure a safe, comfortable, and enjoyable journey every time."
        }
      ];
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Prakash Rathi',
          role: 'Traveller',
          review: 'I booked Morya Cab for my trip to Aurangabad, and it was a fantastic experience. The driver was professional, the vehicle was comfortable, and the journey was smooth. Highly recommend it!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Sunita Deshmukh',
          role: 'Traveller',
          review: 'Our family traveled to Aurangabad with Morya Cab, and the entire experience was wonderful. The driver was courteous, and the car was spacious and well-maintained. We had a great trip!',
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
        "description": "Reliable and affordable Pune to Aurangabad taxi service. We offer one-way, round trip, luxury, private, and shared taxi options. Book your ride today!",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9359401610",
        "url": "https://moryacab.com/pune-to-aurangabad-taxi",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-to-aurangabad-taxi.jpg",
          "https://moryacab.com/img/aurangabad-taxi.jpg"
        ],
        "priceRange": "₹3000 - ₹7000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-aurangabad-taxi",
          "priceCurrency": "INR",
          "price": 3500,
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
              "name": "Ramesh Patil"
            },
            "datePublished": "2024-10-05",
            "reviewBody": "The ride was comfortable, and the driver was courteous. Very affordable and efficient taxi service from Pune to Aurangabad!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Deshmukh"
            },
            "datePublished": "2024-11-20",
            "reviewBody": "I had a great experience. The driver was experienced and the car was very clean. Highly recommend this service for a smooth trip to Aurangabad."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Aurangabad Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-aurangabad-taxi"
        },
        "keywords": "Pune to Aurangabad taxi, Pune to Aurangabad cab service, one-way taxi Pune to Aurangabad, Aurangabad luxury taxi, taxi booking Pune to Aurangabad, private taxi Aurangabad"
      };
    


    return (
        <div>
            <UsePageTracking/>
<Helmet>
        <title>Pune to Aurangabad Taxi | Affordable Cab Service | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book affordable and reliable Pune to Aurangabad taxi service. One-way, round trip, private, luxury, and shared cabs. Easy online booking!"
        />
        <meta name="keywords" content="Pune to Aurangabad taxi, Pune to Aurangabad one-way taxi, Aurangabad taxi fare, Pune to Aurangabad luxury taxi" />
        <meta property="og:title" content="Pune to Aurangabad Taxi | Morya Cabs" />
        <meta property="og:description" content="Affordable and reliable Pune to Aurangabad taxi service. Book one-way, round trip, private, or luxury cabs online today!" />
        <meta property="og:url" content="https://moryacab.com/pune-to-aurangabad-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-aurangabad-taxi.jpg" />
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
                            <img src='/images/keyword/6.jpg' alt='img' />
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

export default Punetoaurangbadtaxi;