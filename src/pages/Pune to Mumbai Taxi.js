
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetomumbaitaxi() {



    const cardData =
    {
        keyword: 'Pune to Mumbai Taxi ',
        heading: 'Morya Cabs:  Pune to Mumbai Taxi  ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Mumbai. Whether you are traveling for business, leisure, or airport transfers, our well-maintained fleet and professional drivers ensure a smooth and hassle-free journey. Pune to Mumbai is approximately 150 km, and the journey takes around 3 to 4 hours by road. Enjoy a safe and comfortable ride with our top-notch amenities and customer-centric service.',

        top: 'Top Places to Visit in Mumbai with Morya Cabs',

        topPlaces: [
            {
                "title": "Gateway of India",
                "description": "The Gateway of India is one of Mumbai’s most iconic landmarks and a must-visit site for every traveler. Built in 1924, it stands tall as a majestic arch overlooking the Arabian Sea. The monument is historically significant as it marks the arrival of King George V and Queen Mary to India in 1911. Visitors flock to the Gateway to take photos, enjoy the scenic views, and soak in its colonial charm."
            },
            {
                "title": "Marine Drive",
                "description": "Often referred to as the Queen's Necklace due to its stunning shape and night-time lighting, Marine Drive is a popular promenade along the Arabian Sea. Ideal for evening strolls, it offers breathtaking views of the sunset and the Mumbai skyline. Whether you're taking a casual walk or simply sitting on the benches, Marine Drive provides a peaceful escape from the city's hustle and bustle."
            },
            {
                "title": "Elephanta Caves",
                "description": "The Elephanta Caves are a UNESCO World Heritage Site, located on Elephanta Island, just a short ferry ride from the Gateway of India. These ancient rock-cut temples are dedicated to Lord Shiva and are renowned for their intricate carvings and sculptures. The caves offer a glimpse into India's ancient culture and religious history, making it an essential stop for any history lover."
            },
            {
                "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
                "description": "Chhatrapati Shivaji Maharaj Terminus, previously known as Victoria Terminus, is a UNESCO World Heritage Site and a splendid example of Victorian Gothic architecture. This historic railway station is not only an important transportation hub but also a major tourist attraction due to its impressive structure, ornate carvings, and historical significance."
            },
            {
                "title": "Siddhivinayak Temple",
                "description": "Siddhivinayak Temple is one of Mumbai's most revered temples, dedicated to Lord Ganesha. Known for its spiritual significance, it draws thousands of devotees seeking blessings and guidance from the elephant-headed god. Visitors can experience the temple's rich history, divine atmosphere, and architectural beauty, making it a must-visit for religious travelers."
            },
            {
                "title": "Juhu Beach",
                "description": "One of Mumbai’s most famous beaches, Juhu Beach offers a vibrant atmosphere where visitors can enjoy local street food, take a leisurely walk, or just relax by the Arabian Sea. The beach is particularly popular for its lively vibe and beautiful sunset views, making it a perfect spot to unwind and enjoy the coastal beauty."
            },
            {
                "title": "Colaba Causeway",
                "description": "Colaba Causeway is a bustling street known for its lively markets, street vendors, and colonial-era architecture. It’s a great place for shopping, with stalls offering clothes, accessories, jewelry, and souvenirs. Visitors can also enjoy the many cafes and restaurants that line the street, making it a great spot to shop, eat, and soak up the local culture."
            },
            {
                "title": "Haji Ali Dargah",
                "description": "Haji Ali Dargah is a mosque and dargah (tomb) located on a small islet in the Arabian Sea, connected to the mainland by a causeway. A place of spiritual significance, it attracts devotees of all faiths. The stunning architecture of the dargah, along with the tranquil setting by the sea, makes it a popular spot for reflection and prayer."
            },
            {
                "title": "Bandra-Worli Sea Link",
                "description": "The Bandra-Worli Sea Link is an engineering marvel that connects the western suburbs of Mumbai with the island city. This cable-stayed bridge offers spectacular views of the Mumbai skyline and the Arabian Sea, especially during the night when it is lit up. It has become one of the most recognizable landmarks in Mumbai and is an essential spot for photography enthusiasts."
            },
            {
                "title": "Film City",
                "description": "Mumbai, the heart of the Indian film industry, is home to the famous Film City. It is here that Bollywood films and TV shows are produced, and tourists can take guided tours of the sets and studios. Film City offers a behind-the-scenes look at the magic of movie-making, providing a unique experience for cinema lovers and visitors interested in the glamour of the entertainment industry."
            }
        ],



     "services": [
    {
        "name": "Pune to Mumbai Cab Service",
        "description": "Morya Cab offers reliable and comfortable cab services for your journey from Pune to Mumbai. Our professional drivers ensure a smooth and enjoyable ride, whether you're traveling for business, leisure, or any other purpose."
    },
    {
        "name": "Pune to Mumbai Taxi Booking",
        "description": "Booking a taxi for your Pune to Mumbai trip is easy with Morya Cab. Whether you prefer to book online or via phone, we offer flexible booking options to suit your schedule and travel preferences."
    },
    {
        "name": "Pune to Mumbai Taxi Fare",
        "description": "Morya Cab provides affordable and transparent taxi fares for your Pune to Mumbai journey. With no hidden charges, we ensure a clear and upfront pricing structure to help you plan your trip with ease."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "Need a ride to Mumbai Airport from Pune? Morya Cab offers convenient and comfortable airport taxi services. Our experienced drivers will ensure that you reach the airport on time, so you can catch your flight stress-free."
    },
    {
        "name": "Pune to Mumbai One-Way Taxi",
        "description": "Looking for a one-way taxi from Pune to Mumbai? Morya Cab offers affordable one-way taxi services for your journey. Enjoy a direct and comfortable ride, with no detours or additional stops along the way."
    },
    {
        "name": "Pune to Mumbai Round Trip Cabs",
        "description": "Morya Cab provides round-trip taxi services for your Pune to Mumbai travel. Whether you're planning a business trip, family visit, or sightseeing, we offer flexible options to suit your schedule."
    },
    {
        "name": "Pune to Mumbai Taxi Service",
        "description": "For reliable and efficient taxi service from Pune to Mumbai, Morya Cab is the best choice. Our professional drivers and well-maintained vehicles ensure a comfortable journey every time."
    },
    {
        "name": "Pune to Mumbai Cab Price",
        "description": "Get competitive pricing for your Pune to Mumbai taxi service with Morya Cab. We offer fair prices with no hidden charges, ensuring that your travel experience is both affordable and comfortable."
    },
    {
        "name": "Pune to Mumbai Private Taxi",
        "description": "If you prefer a more personalized travel experience, Morya Cab offers private taxi services for your Pune to Mumbai journey. Enjoy a direct, uninterrupted ride with added comfort and convenience."
    },
    {
        "name": "Pune to Mumbai Car Rental",
        "description": "Morya Cab offers flexible car rental services for your Pune to Mumbai trip. Choose from a wide range of vehicles, including sedans, SUVs, and luxury cars, to ensure a comfortable and enjoyable journey."
    },
    {
        "name": "Pune to Mumbai Luxury Taxi",
        "description": "For those seeking a premium travel experience, Morya Cab offers luxury taxi services for your Pune to Mumbai journey. Relax and enjoy the comfort of a high-end vehicle, with enhanced features and plenty of space."
    },
    {
        "name": "Pune to Mumbai Taxi Online Booking",
        "description": "Booking your Pune to Mumbai taxi is quick and easy with Morya Cab’s online booking system. Simply select your vehicle, preferred travel time, and secure your ride in a few easy steps."
    },
    {
        "name": "Pune to Mumbai Shared Taxi",
        "description": "Morya Cab also provides shared taxi services for those looking for a more affordable travel option from Pune to Mumbai. Share the ride with others and save on travel costs while still enjoying comfort and reliability."
    },
    {
        "name": "Pune to Mumbai Drop Taxi",
        "description": "Morya Cab offers drop taxi services for your trip from Pune to Mumbai, ensuring a convenient and direct ride to your destination. Whether you're heading to a business meeting, family gathering, or sightseeing, we’ll get you there in comfort."
    },
    {
        "name": "Pune to Mumbai Airport Taxi Fare",
        "description": "Looking for an airport taxi from Pune to Mumbai? Morya Cab offers transparent pricing for airport taxi services. We ensure that you reach the airport on time without any additional charges or surprises."
    },
    {
        "name": "Pune to Mumbai Cab Contact Information",
        "description": "Contact Morya Cab at +91 9371304510 for prompt and efficient Pune to Mumbai cab services. We ensure a smooth and enjoyable ride for all our customers, making your journey comfortable and stress-free. Book your Pune to Mumbai cab today!"
    }
],




tableData: [
    ["Pune to Mumbai Cab Service", "-Pune to Mumbai Taxi Booking"],
    ["Pune to Mumbai Taxi Fare", "-Pune to Mumbai Airport Cab"],
    ["Pune to Mumbai One-Way Taxi", "-Pune to Mumbai Round Trip Cabs"],
    ["Pune to Mumbai Taxi Service", "-Pune to Mumbai Cab Price"],
    ["Pune to Mumbai Private Taxi", "-Pune to Mumbai Car Rental"],
    ["Pune to Mumbai Luxury Taxi", "-Pune to Mumbai Taxi Online Booking"],
    ["Pune to Mumbai Shared Taxi", "-Pune to Mumbai Drop Taxi"],
    ["Pune to Mumbai Airport Taxi Fare", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand that punctuality is essential, whether you’re traveling for business or leisure. Our drivers ensure timely pickups and drop-offs, making your Pune to Mumbai journey smooth and hassle-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a range of comfortable and spacious vehicles for your Pune to Mumbai trip. With air conditioning, ample legroom, and plush seating, our cars are designed to make your ride as comfortable as possible."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly trained and experienced, ensuring a safe and pleasant journey between Pune and Mumbai. They are familiar with the best routes and follow strict safety protocols to make your trip stress-free."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab provides competitive pricing with no hidden fees. We believe in transparency and ensure that you know the exact fare before your trip starts, so there are no surprises."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. Our vehicles are regularly maintained and equipped with safety features like airbags, seat belts, and GPS tracking. Our professional drivers follow all safety measures for a secure journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need an early morning cab or a late-night ride, Morya Cab is available 24/7 to meet your travel needs. Our customer service team is always ready to assist with bookings at any time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Mumbai taxi with Morya Cab is simple. You can book online via our website or app, or contact our customer service team for personalized assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer tailored travel packages to suit your specific needs, whether you’re traveling for business, a family trip, or a solo adventure. Let us know your preferences, and we’ll craft the perfect trip for you."
    }
]







    }


    const faqData = [
        {
          question: "How can I book a Pune to Mumbai taxi with Morya Cab?",
          answer: "Booking is easy! You can book your taxi online via our website or app, or you can reach out to our customer service team for assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are well-trained and experienced in handling long-distance trips like Pune to Mumbai, ensuring a smooth and safe ride."
        },
        {
          question: "What types of vehicles are available for Pune to Mumbai travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all designed to provide comfort and convenience during your trip."
        },
        {
          question: "How do I pay for my Pune to Mumbai taxi rental?",
          answer: "We accept various payment methods, including cash, credit/debit cards, and online payments through our app, for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Mumbai?",
          answer: "Yes, round trips are available. Simply provide your return details during the booking process, and we will handle the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Mumbai?",
          answer: "Yes, we offer sightseeing packages in Mumbai. Explore popular spots like Gateway of India, Marine Drive, and more with an experienced driver."
        },
        {
          question: "What is the luggage allowance for a Pune to Mumbai taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have more luggage or specific requirements, just let us know during booking, and we’ll accommodate your needs."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Mumbai?",
          answer: "Yes, we provide corporate travel services for business trips between Pune and Mumbai, offering customized packages to meet the needs of your organization."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Mumbai travel?",
          answer: "Morya Cab offers reliable service, professional drivers, well-maintained vehicles, and transparent pricing. We ensure a safe, comfortable, and punctual journey for all your travel needs."
        }
      ];
      
    const testimonialData = [
        {
          id: 1,
          name: 'Mr. Arvind Sharma',
          role: 'Traveller',
          review: 'I had a great experience with Morya Cab for my trip to Mumbai. The driver was on time, the vehicle was clean and comfortable, and the journey was smooth. I’ll definitely be using them again!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Rina Patil',
          role: 'Traveller',
          review: 'Our family traveled from Pune to Mumbai with Morya Cab. The vehicle was spacious, the driver was friendly, and the entire trip was very comfortable. Highly recommend it!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
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
        "@type": "TaxiService",
        "name": "Morya Cabs",
        "description": "Book reliable and affordable Pune to Mumbai taxi service. We offer one-way, round trip, airport taxi, private taxis, and shared cabs for a comfortable journey.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9371304510",
        "url": "https://moryacab.com/pune-to-mumbai-taxi",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-to-mumbai-taxi.jpg",
          "https://moryacab.com/img/mumbai-taxi.jpg"
        ],
        "priceRange": "₹1500 - ₹3000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-mumbai-taxi",
          "priceCurrency": "INR",
          "price": 2000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "reviewCount": 150
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rohit Sharma"
            },
            "datePublished": "2024-12-01",
            "reviewBody": "Fantastic ride experience from Pune to Mumbai. The driver was professional, and the vehicle was clean and comfortable. I would highly recommend Morya Cabs for your travel needs!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anjali Desai"
            },
            "datePublished": "2024-11-10",
            "reviewBody": "Great service! The taxi arrived on time, and the journey was smooth. Would definitely book again for my next trip from Pune to Mumbai."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Mumbai Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-mumbai-taxi"
        },
        "keywords": "Pune to Mumbai taxi, Pune to Mumbai cab, Pune to Mumbai airport taxi, one-way taxi from Pune to Mumbai, Pune to Mumbai shared taxi, private taxi Pune to Mumbai, Mumbai taxi booking"
      };
    



    return (
        <div>
            <UsePageTracking/>
  <Helmet>
        <title>Pune to Mumbai Taxi | Reliable Taxi Service | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book reliable and affordable Pune to Mumbai taxi service. Choose from one-way, round trip, private, luxury, or shared taxis for a comfortable journey."
        />
        <meta name="keywords" content="Pune to Mumbai taxi, Pune to Mumbai cab, Pune to Mumbai airport taxi, Pune to Mumbai one-way taxi, affordable taxi from Pune to Mumbai" />
        <meta property="og:title" content="Pune to Mumbai Taxi | Morya Cabs" />
        <meta property="og:description" content="Affordable and reliable Pune to Mumbai taxi service. Book online for a smooth journey in a private, luxury, or shared taxi." />
        <meta property="og:url" content="https://moryacab.com/pune-to-mumbai-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-mumbai-taxi.jpg" />
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
                            <img src='/images/keyword/3.jpg' alt='img' />
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

export default Punetomumbaitaxi;