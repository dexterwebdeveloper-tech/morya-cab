
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoshnbhajinagartaxi() {



    const cardData =
    {
        keyword: 'Pune to Sambhajinagar Taxi  ',
        heading: 'Morya Cabs: Pune to Sambhajinagar Taxi ',
        headingDescription: 'Morya Cabs offers premium and reliable taxi services from Pune to Sambhajinagar (formerly known as Aurangabad), a city rich in history and cultural significance. Whether you are visiting for leisure, business, or to explore historical landmarks, our experienced drivers and well-maintained vehicles ensure a comfortable, safe, and smooth journey. The distance between Pune and Sambhajinagar is approximately 230 km, and the journey typically takes around 4.5 to 5 hours by road. With Morya Cabs, your journey will be relaxing and enjoyable, allowing you to make the most of your visit to Sambhajinagar.',

        top: 'Top Places to Visit in Sambhajinagar (Aurangabad) with Morya Cabs',

"topPlaces": [
    {
        "title": "Ellora Caves",
        "location": "Sambhajinagar, Maharashtra",
        "description": "The Ellora Caves, a UNESCO World Heritage Site, is one of the most prominent historical attractions in Sambhajinagar. The caves feature remarkable rock-cut temples and monasteries, showcasing ancient Hindu, Buddhist, and Jain architecture. The Kailasa Temple, in particular, is a stunning example of monolithic rock carving."
    },
    {
        "title": "Ajanta Caves",
        "location": "Near Sambhajinagar, Maharashtra (100 km away)",
        "description": "Another UNESCO World Heritage Site, the Ajanta Caves are located around 100 km from Sambhajinagar. These ancient Buddhist caves are famous for their intricate sculptures and vibrant murals depicting the life of Buddha and various Buddhist themes. The caves are an extraordinary glimpse into India's cultural heritage."
    },
    {
        "title": "Bibi Ka Maqbara",
        "location": "Sambhajinagar, Maharashtra",
        "description": "Often referred to as the 'Taj of the Deccan,' Bibi Ka Maqbara is a stunning white marble mausoleum dedicated to the wife of Aurangzeb, Begum Rabia Durrani. Its architecture is inspired by the Taj Mahal and is one of the most beautiful sites in Sambhajinagar."
    },
    {
        "title": "Daulatabad Fort",
        "location": "Near Sambhajinagar, Maharashtra",
        "description": "Daulatabad Fort is a historical fortress situated on a hilltop near Sambhajinagar. Known for its strategic location, it was once the capital of the Yadava dynasty. The fort is a fascinating site for history enthusiasts, offering panoramic views and exploring its ancient gates and structures."
    },
    {
        "title": "Grishneshwar Temple",
        "location": "Near Ellora Caves, Maharashtra",
        "description": "Grishneshwar Temple is one of the 12 Jyotirlingas dedicated to Lord Shiva, located near Ellora Caves. The temple is an important pilgrimage site for Hindus and attracts visitors from all over India, offering a peaceful and spiritual experience."
    },
    {
        "title": "Panchakki",
        "location": "Sambhajinagar, Maharashtra",
        "description": "Panchakki, also known as the Water Mill, is an ancient water-powered mill that was constructed in the 17th century. The mill was used to grind grains and generate power. The surrounding gardens and tranquil atmosphere make it a wonderful place to relax and explore."
    },
    {
        "title": "Aurangabad Caves",
        "location": "Sambhajinagar, Maharashtra",
        "description": "The Aurangabad Caves are a series of 12 rock-cut Buddhist shrines located near the city. These caves, with their beautiful sculptures and carvings, provide an insight into ancient Buddhist architecture and are less crowded than the more famous Ajanta and Ellora Caves."
    },
    {
        "title": "Jayakwadi Dam",
        "location": "Near Sambhajinagar, Maharashtra (25 km away)",
        "description": "Jayakwadi Dam, located around 25 km from Sambhajinagar, is a popular spot for nature lovers and birdwatchers. The dam is home to a variety of bird species, especially during the monsoon and winter months, and provides a peaceful environment for visitors."
    },
    {
        "title": "Naukhanda Palace",
        "location": "Sambhajinagar, Maharashtra",
        "description": "Naukhanda Palace is a historical palace that was once the residence of the Nizam of Hyderabad. The palace is known for its grand architecture and is a fine example of Mughal-era design, making it a must-visit for architecture lovers."
    },
    {
        "title": "Siddharth Garden and Zoo",
        "location": "Sambhajinagar, Maharashtra",
        "description": "Siddharth Garden is a well-maintained park and zoo in Sambhajinagar. The zoo houses a variety of animals and is a great spot for families and nature lovers. The garden offers a relaxing space for visitors to unwind and enjoy the outdoors."
    }
],


"services": [
    {
        "name": "Pune to Sambhajinagar Taxi",
        "description": "Book your taxi from Pune to Sambhajinagar with Morya Cab. Enjoy a comfortable and hassle-free journey with our reliable service."
    },
    {
        "name": "Pune to Sambhajinagar Cab Service",
        "description": "Morya Cab offers top-notch cab services for your Pune to Sambhajinagar trip. With professional drivers and well-maintained vehicles, your ride will be smooth and pleasant."
    },
    {
        "name": "Pune to Sambhajinagar Taxi Fare",
        "description": "We provide transparent pricing for your journey from Pune to Sambhajinagar. Morya Cab offers affordable rates with no hidden charges, ensuring value for your money."
    },
    {
        "name": "Pune to Sambhajinagar One Way Taxi",
        "description": "Choose a one-way taxi from Pune to Sambhajinagar with Morya Cab for a flexible and cost-effective travel option. Book your one-way ride with us today!"
    },
    {
        "name": "Taxi from Pune to Sambhajinagar",
        "description": "Morya Cab offers reliable taxi services for your journey from Pune to Sambhajinagar. Travel with comfort and convenience in a vehicle of your choice."
    },
    {
        "name": "Sambhajinagar Trip from Pune",
        "description": "Planning a trip to Sambhajinagar? Book a round-trip taxi with Morya Cab for a seamless travel experience from Pune to Sambhajinagar and back."
    },
    {
        "name": "Pune to Sambhajinagar Innova",
        "description": "For a comfortable and spacious ride, book an Innova for your Pune to Sambhajinagar trip. Ideal for families and groups, this vehicle ensures a smooth journey."
    },
    {
        "name": "Pune to Sambhajinagar Ertiga",
        "description": "Travel in comfort with an Ertiga for your Pune to Sambhajinagar trip. Morya Cab offers this affordable and spacious option for small groups and families."
    },
    {
        "name": "Pune to Sambhajinagar Sedan",
        "description": "Choose a premium sedan for your trip from Pune to Sambhajinagar. Morya Cab offers luxurious sedan options to make your journey more enjoyable."
    },
    {
        "name": "Sambhajinagar Cab Service from Pune",
        "description": "Morya Cab offers convenient cab services for your travel from Pune to Sambhajinagar. Enjoy a safe and timely ride with professional drivers."
    },
    {
        "name": "Pune to Sambhajinagar Car Hire",
        "description": "Looking to hire a car from Pune to Sambhajinagar? Morya Cab offers flexible car hire services for your convenience. Choose from a variety of vehicles to match your needs."
    },
    {
        "name": "Affordable Pune to Sambhajinagar Taxi",
        "description": "Looking for an affordable taxi option from Pune to Sambhajinagar? Morya Cab provides budget-friendly taxi services with great comfort and service."
    },
    {
        "name": "Sambhajinagar Taxi Booking",
        "description": "Booking a taxi from Pune to Sambhajinagar is easy with Morya Cab. Contact us for a hassle-free taxi booking experience."
    },
    {
        "name": "Pune to Sambhajinagar Drop Taxi",
        "description": "Book a drop taxi from Pune to Sambhajinagar with Morya Cab. We offer convenient drop-off services to ensure your trip is quick and stress-free."
    },
    {
        "name": "Sambhajinagar Taxi Fare",
        "description": "Morya Cab offers competitive taxi fares for your journey from Pune to Sambhajinagar. We ensure you get the best value with transparent pricing."
    }
],


tableData: [
    ["Pune to Sambhajinagar Taxi", "-Pune to Sambhajinagar Cab Service"],
    ["Pune to Sambhajinagar Taxi Fare", "-Pune to Sambhajinagar One Way Taxi"],
    ["Taxi from Pune to Sambhajinagar", "-Sambhajinagar Trip from Pune"],
    ["Pune to Sambhajinagar Innova", "-Pune to Sambhajinagar Ertiga"],
    ["Pune to Sambhajinagar Sedan", "-Sambhajinagar Cab Service from Pune"],
    ["Pune to Sambhajinagar Car Hire", "-Affordable Pune to Sambhajinagar Taxi"],
    ["Sambhajinagar Taxi Booking", "-Pune to Sambhajinagar Drop Taxi"],
    ["Sambhajinagar Taxi Fare", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of punctuality. Whether you're traveling for business or leisure, our drivers ensure on-time pickups and smooth drop-offs for your trip from Pune to Sambhajinagar (Aurangabad). We are committed to keeping your journey stress-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet of well-maintained vehicles offers comfort and space, making your long-distance journey from Pune to Sambhajinagar a relaxing experience. With ample legroom, air conditioning, and comfortable seating, we guarantee a pleasant trip."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced and well-versed with the Pune to Sambhajinagar route. They ensure your journey is safe, comfortable, and hassle-free. You can trust our professional team to provide you with a smooth travel experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for your Pune to Sambhajinagar taxi service. There are no hidden charges—our pricing model ensures you get the best value without any surprises."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All of our vehicles are regularly serviced and equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols for a worry-free experience."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available around the clock. Whether you need to travel early in the morning or late at night, our customer service team is ready to assist you with booking your Pune to Sambhajinagar taxi at any time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi from Pune to Sambhajinagar is simple with Morya Cab. You can easily book online via our website or mobile app, or contact our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "If you have special requirements or additional stops along the way, we offer customized travel packages. Let us know your preferences, and we’ll tailor the journey to suit your needs."
    }
]















    }

    const faqData = [
        {
          question: "How can I book a Pune to Sambhajinagar taxi with Morya Cab?",
          answer: "You can book a taxi easily through our website or mobile app. Alternatively, you can call our customer service team for assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are well-trained and experienced in handling long-distance routes like Pune to Sambhajinagar. They ensure a safe and comfortable journey."
        },
        {
          question: "What types of vehicles are available for Pune to Sambhajinagar travel?",
          answer: "We offer a range of vehicles, including sedans, SUVs, and premium cars. All our vehicles are spacious, clean, and well-maintained for your comfort during the journey."
        },
        {
          question: "How do I pay for my Pune to Sambhajinagar taxi rental?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payments via our app, making it convenient for you to pay."
        },
        {
          question: "Can I book a round trip from Pune to Sambhajinagar?",
          answer: "Yes, we offer round-trip services. You can book a round-trip taxi by providing your return details during the booking process, and we will arrange everything for you."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency in our pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Sambhajinagar?",
          answer: "Yes, we offer customized sightseeing tours in Sambhajinagar. Visit popular spots like the Ajanta and Ellora Caves, Bibi Ka Maqbara, and more with a professional driver."
        },
        {
          question: "What is the luggage allowance for a Pune to Sambhajinagar taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, please inform us when booking, and we will make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel from Pune to Sambhajinagar?",
          answer: "Yes, we offer corporate travel services. Whether it’s for meetings or corporate events in Sambhajinagar, we can customize travel packages to meet your company's needs."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Sambhajinagar travel?",
          answer: "Morya Cab is known for reliable service, experienced drivers, affordable rates, and well-maintained vehicles. We guarantee a comfortable, safe, and smooth journey from Pune to Sambhajinagar."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Anil Joshi',
          role: 'Leisure Traveler',
          review: 'Our journey from Pune to Sambhajinagar was seamless with Morya Cab. The driver was punctual and professional, and the vehicle was very comfortable. We highly recommend their service!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Priya Deshmukh',
          role: 'Family Traveler',
          review: 'I had a great experience traveling with Morya Cab to Sambhajinagar. The ride was smooth, and the driver was courteous and knowledgeable about the route. Will definitely use them again!',
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
        "description": "Book your Pune to Sambhajinagar taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/pune-to-sambhajinagar-taxi.jpg",
          "https://moryacab.com/img/pune-to-sambhajinagar-cab-service.jpg"
        ],
        "priceRange": "₹2000 - ₹3500",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-sambhajinagar-taxi-service",
          "priceCurrency": "INR",
          "price": 3000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "reviewCount": 180
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rohit Patil"
            },
            "datePublished": "2024-05-18",
            "reviewBody": "The ride from Pune to Sambhajinagar was smooth, and the car was clean. Excellent service with timely pick-up and drop. Highly recommend Morya Cab!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Verma"
            },
            "datePublished": "2024-07-22",
            "reviewBody": "Affordable and reliable taxi service from Pune to Sambhajinagar. The driver was professional, and the car was comfortable. Will definitely use it again."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Sambhajinagar Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5196,
            "longitude": 75.3469
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-sambhajinagar-taxi-service"
        },
        "keywords": "pune to sambhajinagar taxi, pune to sambhajinagar cab service, pune to sambhajinagar taxi fare, pune to sambhajinagar one way taxi, taxi from pune to sambhajinagar, sambhajinagar trip from pune, pune to sambhajinagar innova, pune to sambhajinagar ertiga, pune to sambhajinagar sedan, sambhajinagar cab service from pune, pune to sambhajinagar car hire, affordable pune to sambhajinagar taxi, sambhajinagar taxi booking, pune to sambhajinagar drop taxi"
      };
    


    return (
        <div>
            <UsePageTracking/>
 <Helmet>
        <title>Pune to Sambhajinagar Taxi | Affordable & Reliable Cab Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Pune to Sambhajinagar taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510."
        />
        <meta
          name="keywords"
          content="pune to sambhajinagar taxi, pune to sambhajinagar cab service, pune to sambhajinagar taxi fare, pune to sambhajinagar one way taxi, taxi from pune to sambhajinagar, sambhajinagar trip from pune, pune to sambhajinagar innova, pune to sambhajinagar ertiga, pune to sambhajinagar sedan, sambhajinagar cab service from pune, pune to sambhajinagar car hire, affordable pune to sambhajinagar taxi, sambhajinagar taxi booking, pune to sambhajinagar drop taxi"
        />
        <meta property="og:title" content="Pune to Sambhajinagar Taxi | Morya Cab Services" />
        <meta
          property="og:description"
          content="Book your Pune to Sambhajinagar taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!"
        />
        <meta property="og:url" content="https://moryacab.com/pune-to-sambhajinagar-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-sambhajinagar-taxi.jpg" />
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
                            <img src='/images/keyword/36.jpg' alt='img' />
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

export default Punetoshnbhajinagartaxi;