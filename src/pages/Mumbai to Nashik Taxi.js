
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Mumbaitonashiktaxi() {



    const cardData =
    {
        keyword: 'Mumbai to Nashik Taxi  ',
        heading: 'Morya Cabs: Mumbai to Nashik Taxi  ',
        headingDescription: 'Morya Cabs offers reliable and comfortable taxi services from Mumbai to Nashik. Whether you are traveling for a spiritual pilgrimage, a vineyard tour, or a weekend getaway, we ensure a smooth and hassle-free journey. The distance from Mumbai to Nashik is approximately 165 km, and the journey typically takes around 3.5 to 4 hours by road. With our well-maintained fleet and professional drivers, you can enjoy a safe and comfortable ride to Nashik.',

        top: 'Top Places to Visit in Nashik with Morya Cabs',

"topPlaces": [
    {
        "title": "Trimbakeshwar Temple",
        "location": "Trimbak, Maharashtra",
        "description": "Trimbakeshwar Temple, located in the town of Trimbak, is one of the 12 Jyotirlingas of Lord Shiva. It is a major pilgrimage site and offers a serene environment surrounded by picturesque mountains and lush greenery."
    },
    {
        "title": "Saptashrungi",
        "location": "Near Nashik, Maharashtra",
        "description": "Saptashrungi is a sacred hill and an important pilgrimage destination located about 60 km from Nashik. It is home to the Saptashrungi Mata Temple, dedicated to one of the seven divine sisters. The temple is situated atop a hill, and the trek offers stunning views of the surrounding valleys."
    },
    {
        "title": "Pandav Leni Caves",
        "location": "Nashik, Maharashtra",
        "description": "The Pandav Leni Caves are ancient Buddhist rock-cut caves that date back to the 1st century BC. These caves are known for their intricate carvings and sculptures, and they offer a peaceful and scenic spot for history and nature lovers."
    },
    {
        "title": "Kalaram Sansthan Temple",
        "location": "Nashik, Maharashtra",
        "description": "Kalaram Sansthan Temple is an ancient and highly revered temple dedicated to Lord Rama. It is famous for its black stone idol of Lord Rama and attracts pilgrims from all over the country, offering a peaceful and spiritual atmosphere."
    },
    {
        "title": "Godavari River and Panchavati",
        "location": "Nashik, Maharashtra",
        "description": "The Godavari River flows through Nashik, and the Panchavati area is one of the most significant pilgrimage spots. It is home to several temples, ghats, and sacred spots associated with the Ramayana. The riverbanks offer a peaceful setting for devotees and tourists to explore."
    },
    {
        "title": "Nashik Vineyards",
        "location": "Nashik, Maharashtra",
        "description": "Known as the 'Wine Capital of India,' Nashik is famous for its vineyards and wineries. Visitors can explore local vineyards such as Sula Vineyards, York Winery, and Vinsura Winery, taste some fine wines, and learn about the winemaking process."
    },
    {
        "title": "Anjneri Hill",
        "location": "Nashik, Maharashtra",
        "description": "Anjneri Hill is believed to be the birthplace of Lord Hanuman and is a popular pilgrimage and trekking destination. The hill offers beautiful views of the surrounding landscape, and visitors can also explore the Hanuman Temple at the top."
    },
    {
        "title": "Ganga Ghat",
        "location": "Nashik, Maharashtra",
        "description": "Ganga Ghat, located on the banks of the Godavari River, is an important religious site in Nashik. Pilgrims visit this ghat to take a holy dip in the river, and it is especially significant during the Kumbh Mela, a major Hindu festival held every 12 years."
    },
    {
        "title": "Brahmagiri Hill",
        "location": "Near Trimbakeshwar, Maharashtra",
        "description": "Brahmagiri Hill, located near Trimbakeshwar, is believed to be the place where Lord Vishnu meditated. The hill offers a peaceful environment and breathtaking views of the surrounding valleys and rivers, making it a perfect spot for trekking and reflection."
    },
    {
        "title": "Nashik Fort (Nashik Killa)",
        "location": "Nashik, Maharashtra",
        "description": "Nashik Fort, also known as Nashik Killa, is a historical fort that played a significant role during the Maratha Empire. The fort offers panoramic views of the city and is a must-visit for history buffs interested in the region's past."
    }
],


"services": [
    {
        "name": "Mumbai to Nashik Taxi Service",
        "description": "Morya Cab offers reliable and comfortable taxi services from Mumbai to Nashik. Whether you're visiting for business, leisure, or a spiritual trip, we ensure a smooth and comfortable journey."
    },
    {
        "name": "Mumbai to Nashik Cab Service",
        "description": "Book your cab with Morya Cab for a hassle-free experience from Mumbai to Nashik. Our professional drivers and modern vehicles ensure you travel in comfort and safety."
    },
    {
        "name": "Mumbai to Nashik Taxi Fare",
        "description": "Morya Cab provides competitive and transparent pricing for your Mumbai to Nashik taxi. Our fares are affordable with no hidden charges, ensuring you get value for your money."
    },
    {
        "name": "Mumbai to Nashik One-Way Taxi",
        "description": "If you're planning a one-way trip, Morya Cab offers one-way taxi services from Mumbai to Nashik, providing a budget-friendly and convenient option for solo or small group travelers."
    },
    {
        "name": "Taxi from Mumbai to Nashik",
        "description": "Morya Cab offers comfortable taxi services for travelers heading from Mumbai to Nashik. Whether it's a business trip or a family outing, we ensure a stress-free and smooth ride."
    },
    {
        "name": "Mumbai to Nashik Innova",
        "description": "For a comfortable and spacious ride, opt for the Innova. Perfect for families or group travel, the Innova offers a luxurious and smooth experience on your journey from Mumbai to Nashik."
    },
    {
        "name": "Mumbai to Nashik Ertiga",
        "description": "Travel in style with Morya Cab’s Ertiga service from Mumbai to Nashik. Spacious, economical, and comfortable, the Ertiga is perfect for small groups or family trips."
    },
    {
        "name": "Mumbai to Nashik Sedan",
        "description": "Morya Cab offers sedan taxis for a relaxed and comfortable ride from Mumbai to Nashik. Whether you're traveling alone or with a partner, a sedan provides a cozy and stylish option."
    },
    {
        "name": "Mumbai to Nashik Taxi Booking",
        "description": "Booking a taxi from Mumbai to Nashik is easy with Morya Cab. You can book your ride online or contact us directly for a seamless booking experience and timely pick-up."
    },
    {
        "name": "Mumbai to Nashik by Car",
        "description": "Travel from Mumbai to Nashik by car with Morya Cab for a comfortable and personalized journey. Enjoy the scenic drive while our experienced drivers take care of the road."
    },
    {
        "name": "Nashik Trip from Mumbai",
        "description": "Enjoy a smooth and convenient trip from Mumbai to Nashik with Morya Cab. Whether you are going for a weekend getaway or a spiritual visit, we provide a relaxed and enjoyable journey."
    },
    {
        "name": "Mumbai to Nashik Round Trip",
        "description": "Morya Cab also offers round trip taxi services from Mumbai to Nashik, allowing you the flexibility to return at your convenience while enjoying a comfortable ride both ways."
    },
    {
        "name": "Nashik Taxi Service from Mumbai",
        "description": "Morya Cab is your trusted choice for Nashik taxi services from Mumbai. Our modern fleet and professional drivers ensure your journey is both enjoyable and hassle-free."
    },
    {
        "name": "Nashik Trip Taxi Fare",
        "description": "We provide affordable taxi fares for your Nashik trip, ensuring a budget-friendly experience without compromising on comfort. Contact us for a quote based on your preferences."
    },
    {
        "name": "Mumbai to Nashik Car Hire",
        "description": "For a more personalized experience, consider hiring a car with Morya Cab. We offer flexible car hire services for the Mumbai to Nashik route, giving you the freedom to travel at your own pace."
    },
    {
        "name": "Contact Information for Morya Cab",
        "description": "For bookings or inquiries, call Morya Cab at +91 9371304510. Our team is available to assist you with your Mumbai to Nashik taxi service!"
    }
],


tableData: [
    ["Mumbai to Nashik Taxi", "-Mumbai to Nashik Cab Service"],
    ["Mumbai to Nashik Taxi Fare", "-Mumbai to Nashik One Way Taxi"],
    ["Taxi from Mumbai to Nashik", "-Mumbai to Nashik Innova"],
    ["Mumbai to Nashik Ertiga", "-Mumbai to Nashik Sedan"],
    ["Mumbai to Nashik Taxi Booking", "-Mumbai to Nashik by Car"],
    ["Nashik Trip from Mumbai", "-Mumbai to Nashik Round Trip"],
    ["Nashik Taxi Service from Mumbai", "-Nashik Trip Taxi Fare"],
    ["Mumbai to Nashik Car Hire", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of punctuality, especially for long journeys like Mumbai to Nashik. Our drivers ensure timely pickups and drop-offs, allowing you to enjoy a smooth and hassle-free trip."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our well-maintained, air-conditioned vehicles are designed for comfort, offering ample legroom and plush seating for a relaxing journey from Mumbai to Nashik. Enjoy the scenic ride with complete comfort."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our experienced and professional drivers are well-versed with the Mumbai to Nashik route. They prioritize your safety, comfort, and punctuality, ensuring you have a smooth, efficient journey. You can rely on their expertise for a stress-free experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers affordable and competitive pricing for your Mumbai to Nashik taxi service. We provide transparent pricing with no hidden charges, so you can plan your budget comfortably without any surprises."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. Our vehicles are regularly maintained and equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols for a worry-free journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether it’s an early morning trip or a late-night return, Morya Cab is available 24/7. Our customer service team is always ready to assist with your bookings and ensure you have a smooth journey whenever you need."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi for Mumbai to Nashik is easy with Morya Cab. You can book online through our website or mobile app, or contact our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages to suit your needs. Whether you're traveling for business, leisure, or pilgrimage, we can tailor your trip to include special stops, sightseeing, or any other requests."
    }
]














    }

    const faqData = [
        {
          question: "How can I book a Mumbai to Nashik taxi with Morya Cab?",
          answer: "You can book your taxi easily online via our website or mobile app. Alternatively, contact our customer service team for personalized assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are experienced in handling long-distance journeys like Mumbai to Nashik. They ensure a safe, smooth, and timely ride."
        },
        {
          question: "What types of vehicles are available for Mumbai to Nashik travel?",
          answer: "We offer a variety of well-maintained vehicles, including sedans, SUVs, and premium cars, all designed for comfort during long journeys."
        },
        {
          question: "How do I pay for my Mumbai to Nashik taxi rental?",
          answer: "We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Mumbai to Nashik?",
          answer: "Yes, you can book a round-trip taxi. Just provide your return details during booking, and we’ll take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you upfront, ensuring transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Nashik?",
          answer: "Yes, we offer sightseeing services in Nashik. Explore the city’s famous spots like Trimbakeshwar Temple, Saptashrungi, and Nashik’s vineyards with a trusted driver."
        },
        {
          question: "What is the luggage allowance for a Mumbai to Nashik taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have more luggage or special requests, please inform us when booking, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Nashik?",
          answer: "Yes, we provide corporate travel services for business trips to Nashik. Whether it’s for meetings or company events, we can customize the travel package to suit your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Mumbai to Nashik travel?",
          answer: "Morya Cab offers reliable, safe, and affordable taxi services. With well-maintained vehicles, experienced drivers, and a focus on customer satisfaction, we ensure a comfortable and stress-free journey for all your travel needs."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rahul Jain',
          role: 'Business Traveler',
          review: 'I used Morya Cab for a business trip from Mumbai to Nashik, and it was an excellent experience. The driver was professional and knew the best routes. The vehicle was clean and comfortable. I will definitely use Morya Cab again for my future trips!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Priya Patel',
          role: 'Family Traveler',
          review: 'We had a wonderful family trip from Mumbai to Nashik using Morya Cab. The ride was comfortable, the driver was friendly and knowledgeable, and the vehicle was spacious. Highly recommended for anyone traveling to Nashik!',
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
        "description": "Book your Mumbai to Nashik taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/mumbai-to-nashik-taxi.jpg",
          "https://moryacab.com/img/mumbai-to-nashik-cab-service.jpg"
        ],
        "priceRange": "₹2500 - ₹4500",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/mumbai-to-nashik-taxi-service",
          "priceCurrency": "INR",
          "price": 3500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "reviewCount": 175
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rohit Deshmukh"
            },
            "datePublished": "2024-02-10",
            "reviewBody": "Amazing service! The ride from Mumbai to Nashik was smooth and comfortable. The driver was professional and punctual. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Snehal Joshi"
            },
            "datePublished": "2024-08-05",
            "reviewBody": "Great experience! The taxi service was on-time, the vehicle was well-maintained, and the driver was courteous. Worth every penny!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Mumbai to Nashik Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.9975,
            "longitude": 73.7807
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/mumbai-to-nashik-taxi-service"
        },
        "keywords": "mumbai to nashik taxi, mumbai to nashik cab service, mumbai to nashik taxi fare, mumbai to nashik one way taxi, taxi from mumbai to nashik, mumbai to nashik innova, mumbai to nashik ertiga, mumbai to nashik sedan, mumbai to nashik taxi booking, mumbai to nashik by car, nashik trip from mumbai, mumbai to nashik round trip, nashik taxi service from mumbai, nashik trip taxi fare, mumbai to nashik car hire"
      };
    



    return (
        <div>
            <UsePageTracking/>
  <Helmet>
        <title>Mumbai to Nashik Taxi | Affordable & Reliable Cab Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Mumbai to Nashik taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510."
        />
        <meta name="keywords" content="mumbai to nashik taxi, taxi services, affordable taxi, nashik cab booking" />
        <meta property="og:title" content="Mumbai to Nashik Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Mumbai to Nashik taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!" />
        <meta property="og:url" content="https://moryacab.com/mumbai-to-nashik-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/mumbai-to-nashik-taxi.jpg" />
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
                            <img src='/images/keyword/25.jpg' alt='img' />
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

export default Mumbaitonashiktaxi;