
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Mumbaiairporttopunetaxi() {



    const cardData =
    {
        keyword: 'Mumbai Airport to Pune Taxi   ',
        heading: 'Morya Cabs: Mumbai Airport to Pune Taxi  ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and hassle-free taxi services from Mumbai Airport to Pune. Whether you are arriving for business, leisure, or a quick getaway, our well-maintained fleet and professional drivers ensure you a safe and smooth journey. The distance from Mumbai Airport to Pune is approximately 150 km, and the journey typically takes around 3 to 4 hours by road. We provide a variety of vehicles suited for your preferences, ensuring a convenient and comfortable ride.',

        top: 'Top Places to Visit in Lonavala with Morya Cabs',

"topPlaces": [
    {
        "title": "Shaniwar Wada",
        "location": "Pune, Maharashtra",
        "description": "Shaniwar Wada is a historic fortification in the heart of Pune, famous for its impressive architecture and rich Maratha history. The fort, once the seat of the Peshwa rulers, offers beautiful views of the surrounding gardens and is a must-visit for history enthusiasts."
    },
    {
        "title": "Aga Khan Palace",
        "location": "Pune, Maharashtra",
        "description": "The Aga Khan Palace is an iconic landmark in Pune, known for its architectural grandeur and historical significance. It served as a prison for Mahatma Gandhi and his associates during the Indian freedom struggle. The palace is now a museum and an important historical site."
    },
    {
        "title": "Sinhagad Fort",
        "location": "Pune, Maharashtra",
        "description": "Sinhagad Fort is a popular destination for trekking and adventure lovers. Situated atop a hill, the fort offers panoramic views of the surrounding landscape. It is a historical site with a strong association with the Maratha Empire."
    },
    {
        "title": "Osho Ashram",
        "location": "Pune, Maharashtra",
        "description": "The Osho Ashram in Pune is a spiritual center that attracts visitors from around the world. The ashram offers meditation, yoga, and other wellness programs in a tranquil environment. It’s an ideal place for those seeking peace and relaxation."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "location": "Pune, Maharashtra",
        "description": "The Pataleshwar Cave Temple is a rock-cut temple dedicated to Lord Shiva. It is one of the oldest and most significant temples in Pune. The temple, with its serene ambiance, is a great place for devotees and tourists to explore the spiritual history of the region."
    },
    {
        "title": "Shreemant Dagdusheth Halwai Ganpati Temple",
        "location": "Pune, Maharashtra",
        "description": "This temple is one of the most famous and revered Ganesh temples in Pune. The temple houses a beautifully adorned idol of Lord Ganesha and is a significant spiritual site, especially during the Ganesh Chaturthi festival."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "location": "Pune, Maharashtra",
        "description": "The Raja Dinkar Kelkar Museum is a treasure trove of Indian history and culture. The museum showcases a wide range of artifacts, including sculptures, paintings, and traditional crafts. It provides a deep insight into India’s diverse cultural heritage."
    },
    {
        "title": "Pune Okayama Friendship Garden",
        "location": "Pune, Maharashtra",
        "description": "Inspired by the famous Korakuen Garden of Japan, the Pune Okayama Friendship Garden is a peaceful retreat. The garden offers lush greenery, ponds, and a calming atmosphere, making it an ideal location for a leisurely stroll and relaxation."
    },
    {
        "title": "Fergusson College",
        "location": "Pune, Maharashtra",
        "description": "Fergusson College is one of the oldest and most prestigious colleges in Pune. Its beautiful campus and colonial architecture attract tourists who are interested in historical landmarks and scenic university grounds."
    },
    {
        "title": "Katraj Snake Park",
        "location": "Pune, Maharashtra",
        "description": "Katraj Snake Park is a unique zoo located on the outskirts of Pune. It houses various species of snakes and other reptiles. The park offers an interesting experience for animal lovers and those interested in wildlife conservation."
    }
],


"services": [
    {
        "name": "Mumbai Airport to Pune Taxi Service",
        "description": "Morya Cab provides reliable and affordable taxi services from Mumbai Airport to Pune. Our professional drivers ensure a smooth and safe journey, so you can relax and enjoy the ride."
    },
    {
        "name": "Mumbai Airport to Pune Cab Service",
        "description": "Book your taxi with Morya Cab for a comfortable and efficient ride from Mumbai Airport to Pune. We offer a range of vehicles to suit your needs and budget."
    },
    {
        "name": "Mumbai Airport to Pune Taxi Fare",
        "description": "Morya Cab offers transparent pricing with no hidden fees for your journey from Mumbai Airport to Pune. Our rates are competitive and affordable, ensuring the best value for your trip."
    },
    {
        "name": "Mumbai Airport to Pune One-Way Taxi",
        "description": "Looking for a one-way trip? Morya Cab provides convenient one-way taxi services from Mumbai Airport to Pune. Our one-way fare options make it easy and affordable to travel directly to your destination."
    },
    {
        "name": "Mumbai Airport to Pune Innova",
        "description": "For a more comfortable and spacious ride, Morya Cab offers the Innova for your journey from Mumbai Airport to Pune. Perfect for families or groups, the Innova ensures a relaxing ride with ample space for everyone."
    },
    {
        "name": "Mumbai Airport to Pune Ertiga",
        "description": "If you're traveling with a small group or family, consider our Ertiga for a comfortable and budget-friendly ride from Mumbai Airport to Pune. This vehicle provides great comfort and efficiency."
    },
    {
        "name": "Mumbai Airport to Pune Sedan",
        "description": "Our sedan services offer a stylish and efficient way to travel from Mumbai Airport to Pune. Perfect for solo travelers or couples, the sedan is an ideal choice for comfort and convenience."
    },
    {
        "name": "Taxi Service from Mumbai Airport to Pune",
        "description": "Choose Morya Cab for your airport transfer from Mumbai to Pune. We specialize in hassle-free and reliable taxi services with professional drivers and well-maintained vehicles."
    },
    {
        "name": "Mumbai Airport to Pune by Taxi",
        "description": "Morya Cab offers an easy and comfortable way to travel from Mumbai Airport to Pune. Whether you're arriving at the airport for business or leisure, our taxi services ensure you reach your destination stress-free."
    },
    {
        "name": "Mumbai to Pune Airport Taxi",
        "description": "If you're flying into Mumbai and need a ride to Pune, Morya Cab offers convenient Mumbai to Pune airport taxi services. We’ll be there to pick you up and drop you off at your desired location in Pune."
    },
    {
        "name": "Mumbai Airport Taxi Booking",
        "description": "Booking a taxi from Mumbai Airport to Pune is quick and easy with Morya Cab’s online booking system. Simply choose your vehicle, schedule your pick-up time, and we’ll take care of the rest."
    },
    {
        "name": "Mumbai to Pune Airport Car Hire",
        "description": "If you prefer to hire a car for your journey, Morya Cab offers car hire services from Mumbai Airport to Pune. Enjoy the flexibility of traveling at your own pace with our personalized car rental options."
    },
    {
        "name": "Mumbai Airport to Pune Drop Taxi",
        "description": "For one-way drop-off services, Morya Cab offers affordable Mumbai Airport to Pune drop taxis. This service is ideal for those who need a quick and direct ride to their destination."
    },
    {
        "name": "Mumbai Airport to Pune Round Trip",
        "description": "Morya Cab also offers round-trip services for your convenience. Book a round-trip taxi from Mumbai Airport to Pune and we’ll take you back after your trip, providing you with seamless travel both ways."
    },
    {
        "name": "Mumbai Airport to Pune Car Hire",
        "description": "Morya Cab offers car hire services for your convenience. Whether it’s a private or shared ride, we provide the option to hire a car and travel from Mumbai Airport to Pune with ease and comfort."
    },
    {
        "name": "Contact Morya Cab for Your Mumbai Airport to Pune Taxi Booking",
        "description": "For bookings or inquiries, call us at +91 9359401610. We are available to assist you with your Mumbai to Pune taxi service."
    }
],


tableData: [
    ["Mumbai Airport to Pune Taxi", "-Mumbai Airport to Pune Cab Service"],
    ["Mumbai Airport to Pune Taxi Fare", "-Mumbai Airport to Pune One Way Taxi"],
    ["Mumbai Airport to Pune Innova", "-Mumbai Airport to Pune Ertiga"],
    ["Mumbai Airport to Pune Sedan", "-Taxi Service from Mumbai Airport to Pune"],
    ["Mumbai Airport to Pune by Taxi", "-Mumbai to Pune Airport Taxi"],
    ["Mumbai Airport Taxi Booking", "-Mumbai to Pune Airport Car Hire"],
    ["Mumbai Airport to Pune Drop Taxi", "-Mumbai Airport to Pune Round Trip"],
    ["Mumbai Airport to Pune Car Hire", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of timely travel, especially when catching a flight or arriving after a long journey. Our drivers ensure punctual pickups from Mumbai Airport and timely drop-offs at your destination in Pune, making your trip hassle-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our vehicles are equipped with spacious interiors, comfortable seating, air conditioning, and modern amenities to ensure a smooth and comfortable ride from Mumbai Airport to Pune. Whether you’re traveling solo or with a group, we have the right vehicle for you."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced and familiar with the best routes between Mumbai Airport and Pune. They prioritize your comfort, safety, and punctuality, ensuring a smooth, relaxed journey."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers affordable rates for Mumbai Airport to Pune taxi services with no hidden charges. Our pricing is transparent, so you’ll know the cost upfront and can plan your budget without any surprises."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All of our vehicles are regularly serviced and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety guidelines to ensure your trip is worry-free."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need an early morning pickup or a late-night ride, Morya Cab is available 24/7. Our customer service team is always ready to assist with your booking and ensure you have a smooth, timely journey."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your taxi from Mumbai Airport to Pune is easy with Morya Cab. You can book online via our website or mobile app, or contact our customer service team for personalized assistance to make your booking process smooth and quick."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer flexible travel packages tailored to your specific needs. If you need to make any special stops or have particular requirements, let us know, and we’ll ensure your trip is customized accordingly."
    }
]
















    }

    const faqData = [
        {
          question: "How can I book a Mumbai Airport to Pune taxi with Morya Cab?",
          answer: "You can book easily online via our website or mobile app. Alternatively, you can contact our customer service team for assistance with your booking."
        },
        {
          question: "Are the drivers experienced for airport transfers?",
          answer: "Yes, our drivers are experienced in handling airport transfers and are familiar with the best routes between Mumbai Airport and Pune, ensuring timely and comfortable service."
        },
        {
          question: "What types of vehicles are available for Mumbai Airport to Pune travel?",
          answer: "We offer a range of vehicles, including sedans, SUVs, and premium cars, designed to make your ride comfortable and enjoyable."
        },
        {
          question: "How do I pay for my Mumbai Airport to Pune taxi rental?",
          answer: "We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Mumbai Airport to Pune?",
          answer: "Yes, you can book a round-trip taxi. Simply provide your return details when booking, and we will arrange your return journey from Pune to Mumbai Airport."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges for waiting time or detours will be communicated to you upfront during the booking process, ensuring transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Pune?",
          answer: "Yes, we offer sightseeing services in Pune. If you'd like to explore the city after your arrival, we can provide a taxi for sightseeing to popular spots like Shaniwar Wada, Aga Khan Palace, and more."
        },
        {
          question: "What is the luggage allowance for a Mumbai Airport to Pune taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or special requirements, please inform us at the time of booking, and we will ensure your needs are met."
        },
        {
          question: "Is Morya Cab available for corporate travel to Pune from Mumbai Airport?",
          answer: "Yes, we offer corporate travel services for business trips. Whether it’s for meetings or events, we can tailor the travel package to suit your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Mumbai Airport to Pune travel?",
          answer: "Morya Cab offers reliable, punctual, and comfortable taxi services. With experienced drivers, modern vehicles, and affordable pricing, we ensure a seamless and stress-free journey for all your travel needs."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Ravi Deshmukh',
          role: 'Business Traveler',
          review: 'I booked a taxi from Mumbai Airport to Pune with Morya Cab, and the experience was fantastic! The driver was waiting for me at the airport on time, and the vehicle was clean and comfortable. The journey was smooth and stress-free. Highly recommended!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Ms. Anjali Patil',
          role: 'Business Traveler',
          review: 'I had a late-night arrival at Mumbai Airport, and Morya Cab was there to pick me up promptly. The driver was professional, and the ride to Pune was smooth. Excellent service!',
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
        "description": "Book your Mumbai Airport to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9359401610 for bookings!",
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
          "https://moryacab.com/img/mumbai-airport-to-pune-taxi.jpg",
          "https://moryacab.com/img/mumbai-airport-to-pune-cab-service.jpg"
        ],
        "priceRange": "₹2500 - ₹4000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/mumbai-airport-to-pune-taxi-service",
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
              "name": "Anil Deshmukh"
            },
            "datePublished": "2024-02-10",
            "reviewBody": "The Mumbai Airport to Pune taxi service was great! The driver was friendly and on time. I’ll definitely book with Morya Cab again!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Sharma"
            },
            "datePublished": "2024-07-25",
            "reviewBody": "Comfortable ride and excellent service. The car was clean and well-maintained. Highly recommend their service for airport transfers."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Mumbai Airport to Pune Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0822,
            "longitude": 72.8777
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/mumbai-airport-to-pune-taxi-service"
        },
        "keywords": "mumbai airport to pune taxi, mumbai airport to pune cab service, mumbai airport to pune taxi fare, mumbai airport to pune one way taxi, mumbai airport to pune innova, mumbai airport to pune ertiga, mumbai airport to pune sedan, taxi service from mumbai airport to pune, mumbai airport to pune by taxi, mumbai to pune airport taxi, mumbai airport taxi booking, mumbai to pune airport car hire, mumbai airport to pune drop taxi, mumbai airport to pune round trip, mumbai airport to pune car hire"
      };
    


    return (
        <div>
            <UsePageTracking/>
 <Helmet>
        <title>Mumbai Airport to Pune Taxi | Affordable & Reliable Cab Services | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book your Mumbai Airport to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9359401610."
        />
        <meta name="keywords" content="mumbai airport to pune taxi, taxi services, airport transfer, affordable taxi" />
        <meta property="og:title" content="Mumbai Airport to Pune Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Mumbai Airport to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!" />
        <meta property="og:url" content="https://moryacab.com/mumbai-airport-to-pune-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/mumbai-airport-to-pune-taxi.jpg" />
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
                            <img src='/images/keyword/27.jpg' alt='img' />
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

export default Mumbaiairporttopunetaxi;