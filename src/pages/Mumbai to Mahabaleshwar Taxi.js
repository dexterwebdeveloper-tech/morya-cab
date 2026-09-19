
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Mumbaitomahabaleshwer() {



    const cardData =
    {
        keyword: 'Mumbai to Mahabaleshwar Taxi   ',
        heading: 'Morya Cabs: Mumbai to Mahabaleshwar Taxi  ',
        headingDescription: 'Morya Cabs offers comfortable and hassle-free taxi services from Mumbai to Mahabaleshwar, a beautiful hill station in Maharashtra known for its pleasant weather, lush green landscapes, and stunning viewpoints. Whether you are traveling for a family vacation, romantic getaway, or a peaceful retreat, we ensure a smooth journey with our well-maintained vehicles and professional drivers. The distance between Mumbai and Mahabaleshwar is approximately 260 km, and the journey typically takes around 5 to 6 hours by road. Choose Morya Cabs for a safe, comfortable, and enjoyable ride to this scenic hill station.',

        top: 'Top Places to Visit in Mahabaleshwar with Morya Cabs',

"topPlaces": [
    {
        "title": "Venna Lake",
        "location": "Mahabaleshwar, Maharashtra",
        "description": "Venna Lake is one of the most popular tourist spots in Mahabaleshwar, offering a serene environment perfect for boating and picnics. The lake is surrounded by beautiful hills and is an ideal spot for relaxation and family outings."
    },
    {
        "title": "Pratapgad Fort",
        "location": "Mahabaleshwar, Maharashtra",
        "description": "Pratapgad Fort, located around 20 km from Mahabaleshwar, is an important historical site. The fort offers spectacular views of the Sahyadri mountain ranges and is a must-visit for history enthusiasts and adventure seekers."
    },
    {
        "title": "Wilson Point",
        "location": "Mahabaleshwar, Maharashtra",
        "description": "Wilson Point, also known as the Sunrise Point, is the highest point in Mahabaleshwar. It offers breathtaking panoramic views of the surrounding hills and valleys, making it a popular spot to witness a beautiful sunrise."
    },
    {
        "title": "Elephant’s Head Point",
        "location": "Mahabaleshwar, Maharashtra",
        "description": "Elephant’s Head Point is a famous viewpoint in Mahabaleshwar, known for its unique rock formation that resembles an elephant's head. The point offers magnificent views of the surrounding valleys and is an excellent spot for photography."
    },
    {
        "title": "Mapro Garden",
        "location": "Mahabaleshwar, Maharashtra",
        "description": "Mapro Garden is a popular attraction in Mahabaleshwar, known for its strawberry farms, delicious jams, jellies, and other fruit-based products. The garden is a great place to relax, indulge in fresh strawberry treats, and enjoy a peaceful ambiance."
    },
    {
        "title": "Lingmala Waterfall",
        "location": "Mahabaleshwar, Maharashtra",
        "description": "Lingmala Waterfall is a beautiful cascade located 6 km from Mahabaleshwar. The waterfall is surrounded by lush greenery and is a perfect spot for nature lovers and photographers. The trek to the waterfall is also an enjoyable experience."
    },
    {
        "title": "Mahabaleshwar Temple",
        "location": "Mahabaleshwar, Maharashtra",
        "description": "Mahabaleshwar Temple, dedicated to Lord Shiva, is an ancient temple situated in the heart of Mahabaleshwar. The temple holds religious significance and offers a tranquil atmosphere for devotees and visitors seeking blessings."
    },
    {
        "title": "Kates Point",
        "location": "Mahabaleshwar, Maharashtra",
        "description": "Kates Point is another breathtaking viewpoint in Mahabaleshwar, offering panoramic views of the surrounding valleys and hills. It is also famous for its views of the Krishna Valley and the Dhom Dam. The spot is ideal for nature lovers and photographers."
    },
    {
        "title": "Babington Point",
        "location": "Mahabaleshwar, Maharashtra",
        "description": "Babington Point is a scenic viewpoint offering stunning views of the surrounding hills and valleys. It is an ideal location for a peaceful retreat and is less crowded, making it perfect for those looking to enjoy some quiet time amidst nature."
    },
    {
        "title": "Arthur's Seat",
        "location": "Mahabaleshwar, Maharashtra",
        "description": "Arthur’s Seat is one of the most famous viewpoints in Mahabaleshwar, known for its mesmerizing views of the surrounding valleys and rivers. The view from this spot is often referred to as the 'Queen of all points' and is a must-visit for visitors to Mahabaleshwar."
    }
],


"services": [
    {
        "name": "Mumbai to Mahabaleshwar Taxi",
        "description": "Looking for a comfortable and affordable taxi service from Mumbai to Mahabaleshwar? Morya Cab provides reliable taxi options for your smooth journey."
    },
    {
        "name": "Mumbai to Mahabaleshwar Cab Service",
        "description": "Book a taxi for your Mumbai to Mahabaleshwar trip with Morya Cab. We offer excellent service, with experienced drivers and well-maintained vehicles for a comfortable ride."
    },
    {
        "name": "Mumbai to Mahabaleshwar Taxi Fare",
        "description": "Morya Cab offers competitive taxi fares for your Mumbai to Mahabaleshwar journey. We ensure transparency and no hidden charges, giving you the best rates for a hassle-free experience."
    },
    {
        "name": "Mumbai to Mahabaleshwar One Way Taxi",
        "description": "If you need a one-way trip, Morya Cab offers one-way taxi services from Mumbai to Mahabaleshwar, so you can travel with ease and comfort."
    },
    {
        "name": "Taxi from Mumbai to Mahabaleshwar",
        "description": "Choose Morya Cab for your Mumbai to Mahabaleshwar taxi. Our services are reliable and we ensure a pleasant ride with professional drivers."
    },
    {
        "name": "Mumbai to Mahabaleshwar Innova",
        "description": "For a spacious and comfortable ride, book an Innova taxi from Mumbai to Mahabaleshwar. Perfect for families or groups who want to enjoy a relaxed journey."
    },
    {
        "name": "Mumbai to Mahabaleshwar Ertiga",
        "description": "Opt for an Ertiga for a cost-effective yet comfortable journey from Mumbai to Mahabaleshwar. It’s perfect for small families or groups of friends."
    },
    {
        "name": "Mumbai to Mahabaleshwar Sedan",
        "description": "Travel in style with a sedan from Mumbai to Mahabaleshwar. Morya Cab offers premium sedans for those who prefer a more luxurious travel experience."
    },
    {
        "name": "Mumbai to Mahabaleshwar Car Hire",
        "description": "Morya Cab offers car hire services for your trip to Mahabaleshwar, allowing you to travel at your own pace with a professional driver by your side."
    },
    {
        "name": "Mumbai to Mahabaleshwar by Cab",
        "description": "For a relaxing and convenient journey, book a cab from Mumbai to Mahabaleshwar with Morya Cab. We provide door-to-door service with safe and smooth rides."
    },
    {
        "name": "Mahabaleshwar Trip from Mumbai",
        "description": "Planning a trip to Mahabaleshwar? Morya Cab offers great deals for round-trip services, ensuring a safe and comfortable journey both ways."
    },
    {
        "name": "Mumbai to Mahabaleshwar Drop Taxi",
        "description": "If you’re looking for a drop-off service to Mahabaleshwar, Morya Cab provides convenient drop taxi options, with professional drivers and affordable fares."
    },
    {
        "name": "Mumbai to Mahabaleshwar Round Trip",
        "description": "For a round-trip journey from Mumbai to Mahabaleshwar, Morya Cab offers flexible and budget-friendly taxi services to make your trip even more enjoyable."
    },
    {
        "name": "Mumbai to Mahabaleshwar Taxi Booking",
        "description": "Booking your taxi from Mumbai to Mahabaleshwar is simple with Morya Cab. Visit our website or contact us to reserve your taxi today."
    },
    {
        "name": "Affordable Taxi Mumbai to Mahabaleshwar",
        "description": "Looking for an affordable taxi service from Mumbai to Mahabaleshwar? Morya Cab offers competitive pricing, ensuring you get a comfortable and budget-friendly ride."
    }
],


tableData: [
    ["Mumbai to Mahabaleshwar Taxi", "-Mumbai to Mahabaleshwar Cab Service"],
    ["Mumbai to Mahabaleshwar Taxi Fare", "-Mumbai to Mahabaleshwar One Way Taxi"],
    ["Taxi from Mumbai to Mahabaleshwar", "-Mumbai to Mahabaleshwar Innova"],
    ["Mumbai to Mahabaleshwar Ertiga", "-Mumbai to Mahabaleshwar Sedan"],
    ["Mumbai to Mahabaleshwar Car Hire", "-Mumbai to Mahabaleshwar by Cab"],
    ["Mahabaleshwar Trip from Mumbai", "-Mumbai to Mahabaleshwar Drop Taxi"],
    ["Mumbai to Mahabaleshwar Round Trip", "-Mumbai to Mahabaleshwar Taxi Booking"],
    ["Affordable Taxi Mumbai to Mahabaleshwar", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we value your time. Our drivers ensure that your pickup from Mumbai is on time and that you reach Mahabaleshwar without any delays. Whether it’s a weekend getaway or a peaceful retreat, we are here to make your trip hassle-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Travel in comfort with our well-maintained vehicles. We offer spacious cars with air conditioning, comfortable seating, and enough legroom to make your long journey from Mumbai to Mahabaleshwar relaxing and enjoyable."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced in handling long-distance routes like Mumbai to Mahabaleshwar. They know the best routes to avoid traffic and ensure that your journey is safe, smooth, and enjoyable, following all traffic regulations."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers affordable pricing for Mumbai to Mahabaleshwar taxis with no hidden charges. Our pricing is transparent, so you know exactly what to expect, ensuring great value without any surprises."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly maintained and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols, making your trip stress-free."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether it’s early in the morning or late at night, Morya Cab is available 24/7 to assist with your booking. Our customer service team is ready at any time to help you plan your trip to Mahabaleshwar, ensuring you have a smooth travel experience."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your taxi from Mumbai to Mahabaleshwar is simple. You can book online through our website or mobile app, or contact our customer service team for personalized assistance. We make the booking process as quick and easy as possible."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "If you have specific needs, such as additional stops or special requirements, we offer customized travel packages. Let us know, and we’ll tailor the journey according to your preferences, ensuring a perfect trip for you."
    }
]














    }

    const faqData = [
        {
          question: "How can I book a Mumbai to Mahabaleshwar taxi with Morya Cab?",
          answer: "You can easily book a taxi online through our website or mobile app. Alternatively, you can reach out to our customer service team for personalized assistance in booking your taxi."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced and skilled in long-distance travel, including the Mumbai to Mahabaleshwar route. They ensure a safe, smooth, and timely journey."
        },
        {
          question: "What types of vehicles are available for Mumbai to Mahabaleshwar travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all well-maintained and designed for comfort on long journeys."
        },
        {
          question: "How do I pay for my Mumbai to Mahabaleshwar taxi rental?",
          answer: "We accept various payment options, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Mumbai to Mahabaleshwar?",
          answer: "Yes, you can book a round-trip taxi from Mumbai to Mahabaleshwar. Just provide your return details when booking, and we will make the necessary arrangements."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency."
        },
        {
          question: "Can I hire a taxi for sightseeing in Mahabaleshwar?",
          answer: "Yes, we offer sightseeing packages in Mahabaleshwar. Explore famous spots like Venna Lake, Pratapgarh Fort, and Elephant's Head Point with a professional driver."
        },
        {
          question: "What is the luggage allowance for a Mumbai to Mahabaleshwar taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or special requirements, please inform us when booking, and we’ll make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel from Mumbai to Mahabaleshwar?",
          answer: "Yes, we offer corporate travel services. Whether it's for a business retreat or a corporate outing, we can customize the travel package according to your company’s requirements."
        },
        {
          question: "Why should I choose Morya Cab for Mumbai to Mahabaleshwar travel?",
          answer: "Morya Cab is known for its reliable service, experienced drivers, affordable pricing, and well-maintained vehicles. We ensure a comfortable, safe, and enjoyable journey, making your trip to Mahabaleshwar seamless."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rajesh Kumar',
          role: 'Leisure Traveler',
          review: 'I had a wonderful experience with Morya Cab for my trip to Mahabaleshwar. The vehicle was spacious, the driver was friendly, and the entire journey was smooth. I would definitely use their services again!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Sonali Mehta',
          role: 'Family Traveler',
          review: 'We booked a taxi to Mahabaleshwar for a family trip, and the service was excellent. The vehicle was clean, the driver was professional, and we had a very comfortable ride. Highly recommended!',
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
        "description": "Book your Mumbai to Mahableshwar taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/mumbai-to-mahableshwar-taxi.jpg",
          "https://moryacab.com/img/mumbai-to-mahableshwar-cab-service.jpg"
        ],
        "priceRange": "₹4000 - ₹7000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/mumbai-to-mahableshwar-taxi-service",
          "priceCurrency": "INR",
          "price": 5500,
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
              "name": "Rahul Deshmukh"
            },
            "datePublished": "2024-06-10",
            "reviewBody": "Wonderful taxi service! The journey from Mumbai to Mahableshwar was very comfortable, and the driver was friendly and professional."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Reddy"
            },
            "datePublished": "2024-07-15",
            "reviewBody": "Affordable, reliable, and punctual. I had a smooth ride to Mahableshwar with Morya Cab. Highly recommend their services!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Mumbai to Mahableshwar Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.7594,
            "longitude": 73.6482
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/mumbai-to-mahableshwar-taxi-service"
        },
        "keywords": "mumbai to mahableshwar taxi, mumbai to mahableshwar cab service, mumbai to mahableshwar taxi fare, mumbai to mahableshwar one way taxi, taxi from mumbai to mahableshwar, mumbai to mahableshwar innova, mumbai to mahableshwar ertiga, mumbai to mahableshwar sedan, mumbai to mahableshwar car hire, mumbai to mahableshwar by cab, mahableshwar trip from mumbai, mumbai to mahableshwar drop taxi, mumbai to mahableshwar round trip, mumbai to mahableshwar taxi booking, affordable taxi mumbai to mahableshwar"
      };

    return (
        <div>
            <UsePageTracking/>
      <Helmet>
        <title>Mumbai to Mahableshwar Taxi | Affordable & Reliable Cab Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Mumbai to Mahableshwar taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510."
        />
        <meta
          name="keywords"
          content="mumbai to mahableshwar taxi, mumbai to mahableshwar cab service, mumbai to mahableshwar taxi fare, mumbai to mahableshwar one way taxi, taxi from mumbai to mahableshwar, mumbai to mahableshwar innova, mumbai to mahableshwar ertiga, mumbai to mahableshwar sedan, mumbai to mahableshwar car hire, mumbai to mahableshwar by cab, mahableshwar trip from mumbai, mumbai to mahableshwar drop taxi, mumbai to mahableshwar round trip, mumbai to mahableshwar taxi booking, affordable taxi mumbai to mahableshwar"
        />
        <meta property="og:title" content="Mumbai to Mahableshwar Taxi | Morya Cab Services" />
        <meta
          property="og:description"
          content="Book your Mumbai to Mahableshwar taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!"
        />
        <meta property="og:url" content="https://moryacab.com/mumbai-to-mahableshwar-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/mumbai-to-mahableshwar-taxi.jpg" />
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
                            <img src='/images/keyword/34.jpg' alt='img' />
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

export default Mumbaitomahabaleshwer;