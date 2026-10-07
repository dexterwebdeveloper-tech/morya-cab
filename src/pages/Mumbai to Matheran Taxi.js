
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Mumbaitomatherantaxi() {



    const cardData =
    {
        keyword: 'Mumbai to Matheran Taxi   ',
        heading: 'Morya Cabs: Mumbai to Matheran Taxi ',
        headingDescription: 'Morya Cabs offers convenient and comfortable taxi services from Mumbai to Matheran, a beautiful hill station known for its lush greenery, peaceful environment, and scenic views. Whether you are looking for a weekend getaway or a nature-filled escape, we ensure a smooth, hassle-free, and enjoyable ride. The distance between Mumbai and Matheran is approximately 83 km, and the journey typically takes around 2 to 3 hours by road. Let Morya Cabs provide you with a relaxing, safe, and pleasant journey as you head towards one of the most serene hill stations in Maharashtra.',

        top: 'Top Places to Visit in Matheran with Morya Cabs',

"topPlaces": [
    {
        "title": "Charlotte Lake",
        "location": "Matheran, Maharashtra",
        "description": "Charlotte Lake is the most famous spot in Matheran, offering picturesque views surrounded by dense forests and hills. Visitors can enjoy boating here, and the spot is perfect for a peaceful retreat in nature."
    },
    {
        "title": "Panorama Point",
        "location": "Matheran, Maharashtra",
        "description": "Panorama Point is one of the highest points in Matheran and offers a 360-degree view of the surrounding landscape, including distant views of the Western Ghats. The sunrise and sunset views from here are simply breathtaking."
    },
    {
        "title": "Echo Point",
        "location": "Matheran, Maharashtra",
        "description": "Echo Point is known for its natural echo phenomenon, where you can shout and hear your voice echo back. It offers panoramic views of the valleys, making it a perfect spot for nature lovers and photography enthusiasts."
    },
    {
        "title": "Louisa Point",
        "location": "Matheran, Maharashtra",
        "description": "Louisa Point is another beautiful vantage point in Matheran, offering a stunning view of the lush green valleys and hills. From here, you can also spot the distant views of the Bombay skyline on clear days."
    },
    {
        "title": "Matheran Railway Station",
        "location": "Matheran, Maharashtra",
        "description": "The Matheran Railway Station, part of the toy train route, is a heritage railway station that transports visitors to the hill station from Neral. The toy train ride itself is a popular tourist activity, offering a charming experience for those traveling to Matheran."
    },
    {
        "title": "Neral-Matheran Toy Train",
        "location": "Matheran, Maharashtra",
        "description": "A unique way to reach Matheran is through the Neral-Matheran toy train, which runs from Neral and takes you on a scenic, uphill journey to Matheran. The train ride is a nostalgic and relaxing experience, ideal for families and photography lovers."
    },
    {
        "title": "Alexander Point",
        "location": "Matheran, Maharashtra",
        "description": "Alexander Point offers stunning views of the surrounding valleys, hills, and forests. It is one of the best spots in Matheran for a peaceful walk while enjoying the fresh air and scenic beauty of the landscape."
    },
    {
        "title": "Khandala Point",
        "location": "Matheran, Maharashtra",
        "description": "Khandala Point is located on the way to Matheran and offers panoramic views of the hills, valleys, and the surrounding countryside. It’s a great spot for picnics and enjoying nature’s beauty."
    },
    {
        "title": "Pisharnath Mahadev Temple",
        "location": "Matheran, Maharashtra",
        "description": "The Pisharnath Mahadev Temple is an ancient temple dedicated to Lord Shiva. Located in the heart of Matheran, it’s a calm and spiritual place for meditation and seeking blessings."
    },
    {
        "title": "Echo Point",
        "location": "Matheran, Maharashtra",
        "description": "Known for its natural echo phenomenon, Echo Point offers stunning views of the lush green valleys and hills. It is a favorite spot for both locals and tourists who want to experience a moment of serenity amidst nature."
    }
],


"services": [
    {
        "name": "Mumbai to Matheran Taxi Service",
        "description": "For a comfortable and convenient ride from Mumbai to Matheran, Morya Cab is your go-to option. We offer reliable taxi services for your journey, ensuring a smooth and enjoyable trip to the scenic hill station of Matheran."
    },
    {
        "name": "Mumbai to Matheran Cab Service",
        "description": "Choose Morya Cab for taxi services from Mumbai to Matheran. Our fleet includes a variety of vehicles to cater to your comfort, with professional drivers ensuring a safe and pleasant ride."
    },
    {
        "name": "Mumbai to Matheran Taxi Fare",
        "description": "Our Mumbai to Matheran taxi fare is affordable and transparent. We offer competitive pricing, and you’ll receive an upfront quote for your ride. There are no hidden charges!"
    },
    {
        "name": "Mumbai to Matheran One Way Taxi",
        "description": "Traveling one way from Mumbai to Matheran? We offer flexible one-way taxi options that are perfect for a direct, stress-free ride."
    },
    {
        "name": "Taxi from Mumbai to Matheran",
        "description": "Book a taxi from Mumbai to Matheran with Morya Cab for a comfortable and easy ride. We provide well-maintained vehicles and experienced drivers for a hassle-free journey."
    },
    {
        "name": "Mumbai to Matheran by Cab",
        "description": "Traveling to Matheran by cab? Book with Morya Cab for a seamless trip from Mumbai to Matheran, complete with a clean, well-maintained vehicle and a professional driver."
    },
    {
        "name": "Mumbai to Matheran Innova",
        "description": "For a more spacious and comfortable ride, choose our Innova for your journey from Mumbai to Matheran. Perfect for families or small groups looking for a relaxing ride."
    },
    {
        "name": "Mumbai to Matheran Ertiga",
        "description": "If you prefer a budget-friendly yet spacious option, book an Ertiga for your ride from Mumbai to Matheran. It's perfect for a comfortable journey at an affordable price."
    },
    {
        "name": "Mumbai to Matheran Sedan",
        "description": "For couples or solo travelers, our sedan taxis are a great option. Enjoy a private and comfortable ride from Mumbai to Matheran in a luxurious sedan."
    },
    {
        "name": "Mumbai to Matheran Drop Taxi",
        "description": "If you only need a drop-off at Matheran, Morya Cab offers a drop taxi service to get you to your destination conveniently and affordably."
    },
    {
        "name": "Mumbai to Matheran Car Hire",
        "description": "For more flexibility, you can hire a car for your trip from Mumbai to Matheran. Choose a professional driver and enjoy the freedom of a self-paced journey."
    },
    {
        "name": "Mumbai to Matheran Round Trip",
        "description": "If you’re planning a round trip to Matheran, Morya Cab provides affordable rates for round-trip taxis, with flexible timings and a comfortable ride."
    },
    {
        "name": "Mumbai to Matheran Booking",
        "description": "Booking your Mumbai to Matheran taxi is quick and easy. You can book online or contact our customer support team for a seamless experience."
    },
    {
        "name": "Affordable Mumbai to Matheran Taxi",
        "description": "Looking for an affordable ride to Matheran? Morya Cab offers competitive prices for your journey, ensuring you get the best deal for a comfortable and stress-free trip."
    },
    {
        "name": "Mumbai to Matheran Taxi Online Booking",
        "description": "You can easily book your Mumbai to Matheran taxi online with Morya Cab. Simply visit our website, select your preferred car type, and get an instant confirmation."
    },
    {
        "name": "Contact Morya Cab for Your Mumbai to Matheran Taxi Booking",
        "description": "Call us at +91 9359401610 or visit our website for an easy online booking experience."
    }
],


tableData: [
    ["Mumbai to Matheran Taxi", "-Mumbai to Matheran Cab Service"],
    ["Mumbai to Matheran Taxi Fare", "-Mumbai to Matheran One Way Taxi"],
    ["Taxi from Mumbai to Matheran", "-Mumbai to Matheran by Cab"],
    ["Mumbai to Matheran Innova", "-Mumbai to Matheran Ertiga"],
    ["Mumbai to Matheran Sedan", "-Mumbai to Matheran Drop Taxi"],
    ["Mumbai to Matheran Car Hire", "-Mumbai to Matheran Round Trip"],
    ["Mumbai to Matheran Booking", "-Affordable Mumbai to Matheran Taxi"],
    ["Mumbai to Matheran Taxi Online Booking", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of punctuality, especially when traveling to Matheran. Whether it’s a quick getaway or a weekend retreat, we ensure timely pickups from Mumbai and efficient drop-offs to Matheran, so your journey starts and ends on time."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our vehicles for the Mumbai to Matheran trip are designed for your comfort. Enjoy ample legroom, air conditioning, and comfortable seating to make your journey as pleasant as possible, with a smooth ride throughout the trip."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Morya Cab’s drivers are highly skilled and experienced in handling long-distance routes like Mumbai to Matheran. They know the best routes, ensuring a safe, smooth, and efficient journey while making sure you enjoy your time on the road."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We offer competitive pricing for Mumbai to Matheran taxi services, with no hidden charges. Our pricing model is transparent, providing great value for your money while ensuring that you only pay for the services you use."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All of our vehicles are regularly maintained and equipped with modern safety features, including airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols to ensure you have a worry-free journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you’re traveling early in the morning or late at night, Morya Cab is available 24/7. Our customer service team is ready to assist you at any time, making sure you have a seamless booking experience for your Mumbai to Matheran journey."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your taxi from Mumbai to Matheran is simple. You can book online via our website or mobile app, or reach out to our customer service team for personalized assistance, making the booking process as easy as possible."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We understand that every traveler’s needs are different. If you have special requirements, such as additional stops or specific routes, we offer customized travel packages to suit your preferences, ensuring your trip is exactly what you need."
    }
]













    }

    const faqData = [
        {
          question: "How can I book a Mumbai to Matheran taxi with Morya Cab?",
          answer: "You can book a taxi easily via our website or mobile app. Alternatively, you can contact our customer service team for personalized assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are well-trained and experienced in long-distance travel, including the Mumbai to Matheran route. They ensure a smooth, safe, and timely journey."
        },
        {
          question: "What types of vehicles are available for Mumbai to Matheran travel?",
          answer: "We offer a range of vehicles, including sedans, SUVs, and premium cars. All our vehicles are well-maintained and designed for comfort on long journeys."
        },
        {
          question: "How do I pay for my Mumbai to Matheran taxi rental?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payments through our app for your convenience."
        },
        {
          question: "Can I book a round trip from Mumbai to Matheran?",
          answer: "Yes, you can book a round-trip taxi. Just provide your return details at the time of booking, and we’ll ensure everything is arranged for your return journey."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges for waiting time or detours will be communicated to you during the booking process, ensuring complete transparency in our pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Matheran?",
          answer: "Yes, we offer sightseeing services in Matheran. You can explore famous spots like the Panorama Point, Echo Point, and more with a professional driver."
        },
        {
          question: "What is the luggage allowance for a Mumbai to Matheran taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have more luggage or specific requirements, please let us know when booking, and we’ll make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel from Mumbai to Matheran?",
          answer: "Yes, we provide corporate travel services for trips from Mumbai to Matheran. Whether it’s a business outing or corporate retreat, we can tailor the package to meet your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Mumbai to Matheran travel?",
          answer: "Morya Cab is known for its punctual, professional, and affordable services. We ensure your journey from Mumbai to Matheran is safe, comfortable, and hassle-free, with excellent customer service and well-maintained vehicles."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Sanjay Kumar',
          role: 'Leisure Traveler',
          review: 'We had a fantastic trip to Matheran with Morya Cab. The driver was very professional, and the vehicle was clean and comfortable. We reached our destination on time, and the ride was smooth throughout. Highly recommend this service!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Aarti Deshmukh',
          role: 'Family Traveler',
          review: 'Our family booked a taxi to Matheran, and we were very pleased with Morya Cab. The vehicle was spacious, and the driver was friendly and helpful. It was a great experience, and we’ll definitely choose them again.',
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
        "description": "Book your Mumbai to Matheran taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9359401610 for bookings!",
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
          "https://moryacab.com/img/mumbai-to-matheran-taxi.jpg",
          "https://moryacab.com/img/mumbai-to-matheran-cab-service.jpg"
        ],
        "priceRange": "₹3500 - ₹5000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/mumbai-to-matheran-taxi-service",
          "priceCurrency": "INR",
          "price": 4500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.9,
          "reviewCount": 180
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Vikram Desai"
            },
            "datePublished": "2024-05-01",
            "reviewBody": "Fantastic service! The ride from Mumbai to Matheran was smooth and comfortable. The driver was courteous, and the car was in excellent condition."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Meera Sharma"
            },
            "datePublished": "2024-08-12",
            "reviewBody": "Very affordable and reliable taxi service for our trip to Matheran. The driver was punctual, and we reached on time with no issues. Highly recommend!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Mumbai to Matheran Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.9750,
            "longitude": 73.2611
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/mumbai-to-matheran-taxi-service"
        },
        "keywords": "mumbai to matheran taxi, mumbai to matheran cab service, mumbai to matheran taxi fare, mumbai to matheran one way taxi, taxi from mumbai to matheran, mumbai to matheran by cab, mumbai to matheran innova, mumbai to matheran ertiga, mumbai to matheran sedan, mumbai to matheran drop taxi, mumbai to matheran car hire, mumbai to matheran round trip, mumbai to matheran booking, affordable mumbai to matheran taxi, mumbai to matheran taxi online booking"
      };


    return (
        <div>
            <UsePageTracking/>
 <Helmet>
        <title>Mumbai to Matheran Taxi | Affordable & Reliable Cab Services | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book your Mumbai to Matheran taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9359401610."
        />
        <meta
          name="keywords"
          content="mumbai to matheran taxi, mumbai to matheran cab service, mumbai to matheran taxi fare, mumbai to matheran one way taxi, taxi from mumbai to matheran, mumbai to matheran by cab, mumbai to matheran innova, mumbai to matheran ertiga, mumbai to matheran sedan, mumbai to matheran drop taxi, mumbai to matheran car hire, mumbai to matheran round trip, mumbai to matheran booking, affordable mumbai to matheran taxi, mumbai to matheran taxi online booking"
        />
        <meta property="og:title" content="Mumbai to Matheran Taxi | Morya Cab Services" />
        <meta
          property="og:description"
          content="Book your Mumbai to Matheran taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!"
        />
        <meta property="og:url" content="https://moryacab.com/mumbai-to-matheran-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/mumbai-to-matheran-taxi.jpg" />
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
                            <img src='/images/keyword/33.jpg' alt='img' />
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

export default Mumbaitomatherantaxi;