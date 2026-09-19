
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Mumbaitoshirditaxi() {



    const cardData =
    {
        keyword: 'Mumbai to Shirdi Taxi    ',
        heading: 'Morya Cabs: Mumbai to Shirdi Taxi   ',
        headingDescription: 'Morya Cabs offers comfortable, reliable, and affordable taxi services from Mumbai to Shirdi. Whether you are visiting for spiritual reasons, a peaceful getaway, or a family trip, our professional drivers and well-maintained fleet ensure a smooth and safe journey. Mumbai to Shirdi is approximately 240 km, and the journey usually takes around 4 to 5 hours by road. Choose Morya Cabs for a stress-free and pleasant travel experience.',

        top: 'Top Places to Visit in Shirdi with Morya Cabs',

  "topPlaces": [
    {
        "title": "Sai Baba Samadhi Mandir",
        "location": "Shirdi, Maharashtra",
        "description": "Sai Baba Samadhi Mandir is the main attraction in Shirdi, dedicated to the revered saint Sai Baba. The temple houses the Samadhi (resting place) of Sai Baba, and pilgrims from around the world come to pay their respects. The serene atmosphere and the spiritual vibrations make this temple a must-visit for devotees."
    },
    {
        "title": "Dwarkamai",
        "location": "Shirdi, Maharashtra",
        "description": "Dwarkamai is a mosque in Shirdi that Sai Baba frequented during his lifetime. This place holds a special significance for Sai Baba’s followers, as it was where he spent a lot of time meditating and performing miracles. The mosque houses a sacred flame that is kept burning continuously."
    },
    {
        "title": "Chavadi",
        "location": "Shirdi, Maharashtra",
        "description": "Chavadi is another important place in Shirdi, where Sai Baba spent alternate nights during his later years. It is also the place where he was formally declared as a saint. The structure has a peaceful ambiance and is an important spiritual site for visitors."
    },
    {
        "title": "Shani Shingnapur",
        "location": "Near Shirdi, Maharashtra",
        "description": "Shani Shingnapur, located near Shirdi, is a village famous for its temple dedicated to Lord Shani (Saturn). The unique feature of this temple is that there are no doors or locks on any of the houses in the village, symbolizing faith in Lord Shani’s protection. The temple is an important pilgrimage site."
    },
    {
        "title": "Sai Teerth Spiritual Theme Park",
        "location": "Shirdi, Maharashtra",
        "description": "Sai Teerth Spiritual Theme Park is an amusement park with spiritual and religious themes, providing an interactive experience of Sai Baba's life. The park includes exhibitions, interactive displays, and a 3D audio-visual show about Sai Baba's teachings and miracles, making it an interesting stop for families and children."
    },
    {
        "title": "Khandoba Mandir",
        "location": "Shirdi, Maharashtra",
        "description": "Khandoba Mandir is an ancient temple dedicated to Lord Khandoba, a form of Lord Shiva. The temple is located near the Shirdi Sai Baba Samadhi Mandir and holds a special significance as it was the place where Sai Baba was first welcomed when he arrived in Shirdi."
    },
    {
        "title": "Lendi Baug",
        "location": "Shirdi, Maharashtra",
        "description": "Lendi Baug is a beautiful garden where Sai Baba spent a lot of time meditating. The garden houses a tree that is believed to have been planted by Sai Baba himself. Visitors often come here to relax, reflect, and soak in the peaceful environment."
    },
    {
        "title": "Nanda Deep",
        "location": "Shirdi, Maharashtra",
        "description": "Nanda Deep is a lamp that is believed to have been continuously burning since Sai Baba's time. Located near the Samadhi Mandir, the lamp symbolizes Sai Baba’s eternal presence and is an important spiritual site for devotees."
    },
    {
        "title": "Shirdi Museum",
        "location": "Shirdi, Maharashtra",
        "description": "The Shirdi Museum displays various belongings of Sai Baba, including his clothes, weapons, and other personal items. The museum provides a fascinating insight into the life and teachings of Sai Baba, making it a must-visit for anyone interested in his history."
    },
    {
        "title": "Rui Ka Mandir",
        "location": "Shirdi, Maharashtra",
        "description": "Rui Ka Mandir is a lesser-known temple located in the vicinity of Shirdi, dedicated to Lord Ganesha. The temple offers a peaceful setting and is a good spot for visitors seeking a quiet place for prayer and reflection."
    }
],


"services": [
    {
        "name": "Mumbai to Shirdi Taxi",
        "description": "Morya Cab provides reliable and comfortable taxi services for your journey from Mumbai to Shirdi. Our professional drivers ensure a safe, smooth, and pleasant ride, making your trip stress-free."
    },
    {
        "name": "Mumbai to Shirdi Cab Service",
        "description": "Morya Cab offers premium cab services from Mumbai to Shirdi. Whether you are traveling alone or with family, we have a variety of vehicles to ensure you travel in comfort and style."
    },
    {
        "name": "Mumbai to Shirdi Taxi Booking",
        "description": "Booking your Mumbai to Shirdi taxi with Morya Cab is quick and easy. You can book your ride online or by calling us, ensuring a hassle-free experience."
    },
    {
        "name": "Mumbai to Shirdi Cab Fare",
        "description": "Morya Cab offers competitive and transparent fare pricing for your Mumbai to Shirdi journey. We provide clear pricing with no hidden charges to ensure a fair and affordable trip."
    },
    {
        "name": "Mumbai to Shirdi Car Rental",
        "description": "Morya Cab offers car rental services for your Mumbai to Shirdi trip. Choose from a range of vehicles to suit your comfort and travel needs, whether you prefer a chauffeur-driven or self-drive car."
    },
    {
        "name": "Mumbai to Shirdi One Way Taxi",
        "description": "For a one-way trip from Mumbai to Shirdi, Morya Cab provides convenient and affordable one-way taxi services. Travel directly to your destination without detours for a hassle-free experience."
    },
    {
        "name": "Taxi from Mumbai to Shirdi",
        "description": "Morya Cab offers a direct taxi service from Mumbai to Shirdi, ensuring that you get to your destination quickly and comfortably with our professional drivers."
    },
    {
        "name": "Mumbai to Shirdi Cab Charges",
        "description": "Morya Cab ensures transparent and competitive charges for your Mumbai to Shirdi cab service. Enjoy a budget-friendly trip without compromising on comfort or safety."
    },
    {
        "name": "Mumbai to Shirdi Car Hire",
        "description": "Need a car for your trip from Mumbai to Shirdi? Morya Cab offers reliable car hire services for your journey, with options to suit different group sizes and preferences."
    },
    {
        "name": "Shirdi Taxi Service",
        "description": "Morya Cab offers dedicated taxi services for your visit to Shirdi, ensuring a comfortable and convenient ride throughout your trip to this sacred destination."
    },
    {
        "name": "Mumbai to Shirdi Taxi Online",
        "description": "You can easily book your Mumbai to Shirdi taxi online with Morya Cab. Use our online booking system to select your ride and secure your trip with ease."
    },
    {
        "name": "Mumbai to Shirdi Innova Taxi",
        "description": "If you're traveling in a group or with family, Morya Cab offers Innova taxis for your Mumbai to Shirdi journey. Spacious and comfortable, the Innova is perfect for a smooth, relaxing ride."
    },
    {
        "name": "Mumbai to Shirdi Sedan",
        "description": "For a more compact and efficient ride, Morya Cab offers sedan options for your Mumbai to Shirdi journey. Enjoy a comfortable and private ride with our well-maintained sedans."
    },
    {
        "name": "Mumbai to Shirdi by Car",
        "description": "Morya Cab ensures a safe and comfortable journey from Mumbai to Shirdi by car. Our vehicles are regularly serviced to ensure a smooth and enjoyable trip for you."
    },
    {
        "name": "Shirdi Trip from Mumbai",
        "description": "Whether you’re planning a religious trip or simply a getaway, Morya Cab offers a reliable and enjoyable service for your Shirdi trip from Mumbai. Book with us for a smooth and memorable experience."
    },
    {
        "name": "Mumbai to Shirdi Taxi Contact Information",
        "description": "For fast and reliable Mumbai to Shirdi taxi services, contact Morya Cab at +91 9371304510. We guarantee a comfortable, safe, and affordable ride every time. Book your Mumbai to Shirdi taxi today!"
    }
],


tableData: [
    ["Mumbai to Shirdi Taxi", "-Mumbai to Shirdi Cab Service"],
    ["Mumbai to Shirdi Taxi Booking", "-Mumbai to Shirdi Cab Fare"],
    ["Mumbai to Shirdi Car Rental", "-Mumbai to Shirdi One Way Taxi"],
    ["Taxi from Mumbai to Shirdi", "-Mumbai to Shirdi Cab Charges"],
    ["Mumbai to Shirdi Car Hire", "-Shirdi Taxi Service"],
    ["Mumbai to Shirdi Taxi Online", "-Mumbai to Shirdi Innova Taxi"],
    ["Mumbai to Shirdi Sedan", "-Mumbai to Shirdi by Car"],
    ["Shirdi Trip from Mumbai", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand how important punctuality is for your trip to Shirdi, especially when it’s a religious visit. We ensure on-time pickups from Mumbai and timely drop-offs at your destination, so you can enjoy a smooth, worry-free journey."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a fleet of well-maintained vehicles for your journey from Mumbai to Shirdi. Enjoy a comfortable ride with air conditioning, ample legroom, and comfortable seating, making your trip relaxing and pleasant throughout the journey."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced and skilled in handling long-distance routes like Mumbai to Shirdi. They are well-versed with the roads and routes, ensuring your trip is smooth, safe, and efficient. You can rely on their expertise for a hassle-free experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for your journey from Mumbai to Shirdi. We ensure there are no hidden charges, so you know exactly what to expect when it comes to the cost of your trip."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly inspected and equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers strictly follow safety protocols to ensure a safe, secure, and comfortable journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether it’s an early morning departure or a late-night return, Morya Cab is available round-the-clock to meet your travel needs. Our customer service team is always available to assist with your bookings at any time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Mumbai to Shirdi taxi is simple and fast. You can easily book online through our website or mobile app, or you can reach out to our customer service team for any assistance you need."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages for your journey from Mumbai to Shirdi. Whether you're traveling for religious purposes or just need a comfortable ride, we can personalize your trip to meet your specific needs and preferences."
    }
]








    }


    const faqData = [
        {
          question: "How can I book a Mumbai to Shirdi taxi with Morya Cab?",
          answer: "Booking your taxi is easy! You can book online via our website or mobile app, or you can call our customer service team for personalized assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are experienced and well-trained to handle long journeys like Mumbai to Shirdi. They know the best routes to ensure a smooth and safe journey."
        },
        {
          question: "What types of vehicles are available for Mumbai to Shirdi travel?",
          answer: "We offer a variety of vehicles including sedans, SUVs, and premium cars, all of which are well-maintained and designed for comfort during long-distance travel."
        },
        {
          question: "How do I pay for my Mumbai to Shirdi taxi rental?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payments through our app for your convenience."
        },
        {
          question: "Can I book a round trip from Mumbai to Shirdi?",
          answer: "Yes, we offer round-trip services. Just provide us with your return details when booking, and we will take care of everything for your return journey."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you in advance, ensuring complete transparency about the pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Shirdi?",
          answer: "Yes, we offer sightseeing services in Shirdi. You can visit places like the Shri Saibaba Sansthan Temple, Dwarkamai Masjid, and Chavadi with a trusted driver at your service."
        },
        {
          question: "What is the luggage allowance for a Mumbai to Shirdi taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have more luggage or specific requirements, please let us know during the booking process, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Shirdi?",
          answer: "Yes, we offer corporate travel services for business groups or corporate teams traveling to Shirdi. We can customize your travel package based on your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Mumbai to Shirdi travel?",
          answer: "Morya Cab offers reliable, safe, and affordable taxi services with well-maintained vehicles and experienced drivers. We ensure a comfortable and stress-free journey to Shirdi, prioritizing your safety and comfort."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Sunil Agarwal',
          role: 'Religious Traveler',
          review: 'We used Morya Cab for our religious trip to Shirdi, and it was a wonderful experience. The driver was professional, the car was clean and comfortable, and we arrived on time. Highly recommended!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Radhika Deshmukh',
          role: 'Family Traveler',
          review: 'My family and I traveled from Mumbai to Shirdi using Morya Cab, and the service was excellent. The driver was courteous, and the vehicle was spacious and comfortable. It was a peaceful journey, and I’ll definitely use them again!',
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
        "description": "Book your Mumbai to Shirdi taxi with Morya Cab. Affordable, reliable, and convenient one-way taxi services. Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/mumbai-to-shirdi-taxi.jpg",
          "https://moryacab.com/img/mumbai-to-shirdi-cab-service.jpg"
        ],
        "priceRange": "₹3500 - ₹6500",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/mumbai-to-shirdi-taxi-service",
          "priceCurrency": "INR",
          "price": 4500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.6,
          "reviewCount": 90
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Amit Verma"
            },
            "datePublished": "2024-06-10",
            "reviewBody": "Smooth and comfortable ride from Mumbai to Shirdi. The driver was courteous, and the car was in great condition. Highly recommended service!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Sharma"
            },
            "datePublished": "2024-09-20",
            "reviewBody": "We had a wonderful experience with Morya Cab on our trip to Shirdi. The booking process was easy, and the service was excellent. Will use them again."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Mumbai to Shirdi Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0760,
            "longitude": 72.8777
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/mumbai-to-shirdi-taxi-service"
        },
        "keywords": "mumbai to shirdi taxi, mumbai to shirdi cab service, mumbai to shirdi taxi booking, mumbai to shirdi cab fare, mumbai to shirdi car rental, mumbai to shirdi one way taxi, taxi from mumbai to shirdi, mumbai to shirdi cab charges, mumbai to shirdi car hire, shirdi taxi service, mumbai to shirdi taxi online, mumbai to shirdi innova taxi, mumbai to shirdi sedan, mumbai to shirdi by car, shirdi trip from mumbai"
      };



    return (
        <div>
            <UsePageTracking/>
 <Helmet>
        <title>Mumbai to Shirdi Taxi | Affordable & Reliable Taxi Service | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Mumbai to Shirdi taxi with Morya Cab. Affordable, reliable, and convenient one-way taxi services. Call +91 9371304510."
        />
        <meta name="keywords" content="mumbai to shirdi taxi, mumbai to shirdi cab service, taxi booking, affordable taxi service" />
        <meta property="og:title" content="Mumbai to Shirdi Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Mumbai to Shirdi taxi with Morya Cab. Affordable, reliable, and convenient one-way taxi services." />
        <meta property="og:url" content="https://moryacab.com/mumbai-to-shirdi-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/mumbai-to-shirdi-taxi.jpg" />
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
                            <img src='/images/keyword/16.jpg' alt='img' />
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

export default Mumbaitoshirditaxi;