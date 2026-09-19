
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Taxiserviceinlohgaon() {



    const cardData =
    {
        keyword: 'Taxi Service in Lohegaon ',
        heading: 'Morya Cabs: Taxi Service in Lohegaon ',
        headingDescription: 'Morya Cabs offers reliable and affordable taxi services in Lohegaon, Pune. Whether you are heading to the airport, traveling to business meetings, or simply exploring the city, our professional drivers and well-maintained vehicles ensure that your journey is comfortable and safe. With punctual service and competitive prices, Morya Cabs is your trusted choice for all your transportation needs in Lohegaon.',

        top: 'Top Places to Visit in Lohegaon with Morya Cabs:',

"topPlaces": [
    {
        "title": "Lohegaon Lake",
        "description": "A peaceful spot for nature lovers, Lohegaon Lake is perfect for a relaxing walk or a serene boat ride. The area offers stunning views and is a great place for a family outing or a peaceful retreat from the busy city life."
    },
    {
        "title": "ISKCON Pune",
        "description": "Located near Lohegaon, the ISKCON Pune temple is a beautiful place for spiritual seekers. The temple is known for its serene atmosphere, chanting sessions, and vibrant cultural events. It's an ideal stop for those seeking peace and spirituality."
    },
    {
        "title": "Shinde Chhatri",
        "description": "A historic landmark in Pune, Shinde Chhatri is a memorial dedicated to Mahadji Shinde, a prominent Maratha leader. The architectural beauty of the structure and the lush surroundings make it a must-visit for history and architecture enthusiasts."
    },
    {
        "title": "Khadakwasla Dam",
        "description": "Just a short drive from Lohegaon, Khadakwasla Dam is a picturesque destination that offers scenic views of the backwaters. It's a perfect spot for picnics, photography, and nature walks."
    },
    {
        "title": "Viman Nagar",
        "description": "Located nearby, Viman Nagar is a lively area with shopping malls, restaurants, and entertainment options. A great place to shop, dine, or relax, Viman Nagar is a hub of activity, just a short ride from Lohegaon."
    },
    {
        "title": "Pune Airport",
        "description": "If you're traveling from or to Pune, Lohegaon is home to Pune International Airport. Our taxi service provides quick and comfortable rides to and from the airport, ensuring that your journey is hassle-free."
    },
    {
        "title": "Gultekdi Market",
        "description": "A bustling market known for its wholesale goods and vibrant atmosphere, Gultekdi Market is a place to shop for fresh produce, clothes, and more. It's a must-visit for those wanting to experience the local shopping culture."
    },
    {
        "title": "Rahatani Temple",
        "description": "A peaceful temple dedicated to Lord Rahatani, this site offers a spiritual escape. Located in a calm environment, it provides a serene experience away from the hustle and bustle of the city."
    }
],


"services": [
    {
      "name": "Lohegaon Taxi Service",
      "description": "Morya Cab offers dependable and high-quality taxi services in Lohegaon. Whether you need a quick local trip or a long-distance journey, we’ve got you covered."
    },
    {
      "name": "Taxi Booking Lohegaon",
      "description": "Booking a taxi in Lohegaon is easy with Morya Cab. Our convenient booking options ensure that you can book your ride quickly and easily from your mobile or desktop."
    },
    {
      "name": "Taxi in Lohegaon",
      "description": "If you're looking for a taxi in Lohegaon, Morya Cab provides fast and comfortable rides. Choose from a variety of vehicles, including sedans, SUVs, and luxury cars, for your travel needs."
    },
    {
      "name": "Cab Service Lohegaon",
      "description": "For reliable and efficient cab service in Lohegaon, Morya Cab is the best choice. Whether you're headed to work or planning an outstation trip, we are here to provide a smooth ride."
    },
    {
      "name": "Lohegaon Cab Booking",
      "description": "Booking a cab in Lohegaon with Morya Cab is simple and quick. Our services are available for all destinations within Pune, and for outstation trips as well."
    },
    {
      "name": "Reliable Taxi Lohegaon",
      "description": "Morya Cab offers a reliable taxi service in Lohegaon. We ensure timely pickups, professional drivers, and comfortable rides for all your travel needs."
    },
    {
      "name": "Affordable Taxi Lohegaon",
      "description": "Looking for an affordable taxi service in Lohegaon? Morya Cab provides budget-friendly rates without compromising comfort or safety. We aim to make your travel experience pleasant and affordable."
    },
    {
      "name": "24/7 Taxi Service Lohegaon",
      "description": "Morya Cab operates 24/7 taxi services in Lohegaon. Whether you need a ride in the middle of the night or during the day, our cabs are always available for you."
    },
    {
      "name": "Airport Taxi Lohegaon",
      "description": "For airport taxi services in Lohegaon, Morya Cab provides prompt and reliable rides to Pune Airport. Whether you need to catch a flight or get picked up, we ensure timely service."
    },
    {
      "name": "Luxury Taxi Lohegaon",
      "description": "For those seeking a luxury ride, Morya Cab offers premium taxis in Lohegaon. Travel in comfort and style with our fleet of luxury cars for your special occasions or important business trips."
    },
    {
      "name": "Taxi Near Lohegaon",
      "description": "If you're looking for a taxi near Lohegaon, Morya Cab is ready to serve you. Our nearby fleet ensures that you can get a taxi whenever you need it."
    },
    {
      "name": "Cheapest Taxi Service in Lohegaon",
      "description": "Morya Cab offers the most affordable taxi services in Lohegaon. We believe in providing value for your money while ensuring that you experience a comfortable ride."
    },
    {
      "name": "Pune Airport to Shirdi Cab",
      "description": "Book a taxi from Pune Airport to Shirdi with Morya Cab. Our affordable and reliable cab services ensure a smooth ride to the holy city of Shirdi."
    },
    {
      "name": "Pune Airport Cab Service",
      "description": "Morya Cab provides Pune Airport cab services for all your travel needs. Whether you need a drop-off or a pickup, our experienced drivers ensure a stress-free experience."
    },
    {
      "name": "Lohegaon Pune Airport Cab Service",
      "description": "If you’re looking for reliable airport taxi services from Lohegaon to Pune Airport, Morya Cab is your go-to service provider. Our punctual drivers ensure you reach the airport on time."
    },
    {
      "name": "Taxi Service in Lohegaon Airport",
      "description": "Morya Cab offers efficient taxi services to and from Lohegaon Airport. Book your taxi in advance for a hassle-free travel experience."
    },
    {
      "name": "Pune Airport Pickup Point Cab",
      "description": "If you're arriving at Pune Airport, Morya Cab offers convenient pickup point services. We’ll pick you up from the designated point and ensure you travel comfortably to your destination."
    },
    {
      "name": "Pune Airport to Lonavala Cab",
      "description": "Morya Cab offers reliable and affordable cab services from Pune Airport to Lonavala. Whether you're traveling for business or leisure, our drivers ensure a smooth and comfortable journey."
    },
    {
      "name": "Pune Airport to Nashik Cab",
      "description": "Looking for a cab from Pune Airport to Nashik? Morya Cab provides prompt and reliable taxi services for this route. We ensure a smooth and safe journey."
    },
    {
      "name": "Pune Airport to Shirdi Cab Fare",
      "description": "The fare for a taxi ride from Pune Airport to Shirdi is affordable with Morya Cab. Our pricing is competitive, ensuring value for your money."
    },
    {
      "name": "Pune Airport to Kolhapur Cab",
      "description": "Book a taxi from Pune Airport to Kolhapur with Morya Cab. Our cabs are available at competitive prices, and we guarantee a comfortable ride."
    },
    {
      "name": "Pune Airport to Aurangabad Cab",
      "description": "Morya Cab offers easy booking for cabs from Pune Airport to Aurangabad. Our professional drivers will ensure a safe and comfortable journey."
    },
    {
      "name": "Pune Airport to Shirdi One Way Cab",
      "description": "If you need a one-way ride from Pune Airport to Shirdi, Morya Cab offers convenient and cost-effective one-way cab services. Book your ride today for a hassle-free journey."
    }
  ],


  tableData: [
    ["Lohegaon Taxi Service", "-Taxi Booking Lohegaon"],
    ["Taxi in Lohegaon", "-Cab Service Lohegaon"],
    ["Lohegaon Cab Booking", "-Reliable Taxi Lohegaon"],
    ["Affordable Taxi Lohegaon", "-24/7 Taxi Service Lohegaon"],
    ["Airport Taxi Lohegaon", "-Luxury Taxi Lohegaon"],
    ["Taxi Near Lohegaon", "-Cheapest Taxi Service in Lohegaon"],
    ["Pune Airport to Shirdi Cab", "-Pune Airport Cab Service"],
    ["Lohegaon Pune Airport Cab Service", "-Taxi Service in Lohegaon Airport"],
    ["Pune Airport Pickup Point Cab", "-Pune Airport to Lonavala Cab"],
    ["Pune Airport to Nashik Cab", "-Pune Airport to Shirdi Cab Fare"],
    ["Pune Airport to Kolhapur Cab", "-Pune Airport to Aurangabad Cab"],
    ["Pune Airport to Shirdi One Way Cab", "-Lohegaon Pune Airport Cab Service"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of being on time. Whether you're heading to the airport, a business meeting, or a family outing, we ensure punctual pickups and timely drop-offs from Lohegaon, providing a hassle-free travel experience."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet consists of well-maintained, comfortable vehicles, including sedans, SUVs, and premium cars. With ample legroom and air conditioning, we guarantee a comfortable ride, no matter your destination."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced, well-versed with the routes in and around Lohegaon, and ensure a smooth and safe journey. Their professionalism and courteous nature will make your ride enjoyable and stress-free."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for taxi services in Lohegaon. There are no hidden charges, and we provide a detailed breakdown of the fare so you can be sure about the cost from the start."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "We prioritize your safety above all. Our vehicles are equipped with modern safety features, including airbags, seat belts, and GPS tracking, ensuring a secure and pleasant trip at all times."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates 24/7, so whether you need a ride early in the morning or late at night, we are always available to meet your travel needs. Our customer service team is ready to assist at any time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi from Lohegaon is easy and convenient with Morya Cab. You can book through our website or mobile app, or reach out to our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages based on your requirements. Whether it's an airport transfer, local sightseeing, or a business trip, we ensure the taxi service suits your preferences and needs."
    }
]


















    }

    const faqData = [
        {
          question: "How can I book a taxi in Lohegaon with Morya Cab?",
          answer: "Booking is simple! You can book a taxi via our website, mobile app, or contact our customer service team for assistance."
        },
        {
          question: "What types of vehicles are available for hire in Lohegaon?",
          answer: "We offer a range of vehicles, including sedans, SUVs, and premium cars, all well-maintained and comfortable for your journey."
        },
        {
          question: "How do I pay for my taxi ride from Lohegaon?",
          answer: "We offer various payment options, including cash, credit/debit cards, and online payments via our app, so you can choose the one that’s most convenient for you."
        },
        {
          question: "Are the drivers familiar with routes around Lohegaon?",
          answer: "Yes, all of our drivers are experienced and familiar with the routes in Lohegaon and nearby areas, ensuring a smooth journey."
        },
        {
          question: "Can I book a round trip from Lohegaon?",
          answer: "Yes, we can arrange round trips for you. Just provide your return details, and we’ll handle the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges for waiting or detours will be communicated to you upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in and around Lohegaon?",
          answer: "Yes, we offer taxi services for sightseeing tours in and around Lohegaon. Explore local attractions comfortably with our well-maintained vehicles."
        },
        {
          question: "What is the luggage allowance for a taxi from Lohegaon?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have excess luggage or specific needs, please inform us during the booking process, and we’ll make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel from Lohegaon?",
          answer: "Yes, we provide corporate travel services, including reliable transportation for business trips or team outings from Lohegaon."
        },
        {
          question: "Why should I choose Morya Cab for taxi service in Lohegaon?",
          answer: "Morya Cab ensures a reliable, affordable, and comfortable taxi service with experienced drivers, well-maintained vehicles, and transparent pricing for a smooth and stress-free ride."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Prakash Patel',
          role: 'Traveler',
          review: "I booked a taxi from Lohegaon to the airport, and I’m very pleased with the service. The driver was on time, and the ride was smooth and comfortable. Highly recommend Morya Cab!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Ms. Radhika Sharma',
          role: 'Traveler',
          review: "Our trip to a business conference was made stress-free thanks to Morya Cab. The vehicle was spacious and comfortable, and the driver was polite and professional. I’ll definitely book again!",
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
        "@type": "CarRental",
        "name": "Taxi Service in Lohegaon",
        "description": "Affordable and reliable taxi services in Lohegaon for local and airport transfers, including one-way and round-trip options. Enjoy 24/7 availability with both luxury and budget options.",
        "provider": {
          "@type": "Organization",
          "name": "Lohegaon Taxi Services",
          "url": "https://www.lohegaontaxiservices.com",
          "telephone": "+91-9999999999",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 15, Lohegaon Plaza, Pune",
            "addressLocality": "Lohegaon",
            "addressRegion": "Maharashtra",
            "postalCode": "411032",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 1000,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Lohegaon"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "1000",
            "unitCode": "DAY",
            "description": "Taxi service from Lohegaon for local travel and airport transfers"
          }
        },
        "keywords": "Lohegaon Taxi Service, Taxi Booking Lohegaon, Taxi in Lohegaon, Cab Service Lohegaon, Lohegaon Cab Booking, Reliable Taxi Lohegaon, Affordable Taxi Lohegaon, 24/7 Taxi Service Lohegaon, Airport Taxi Lohegaon, Luxury Taxi Lohegaon, Taxi Near Lohegaon, Cheapest Taxi Service in Lohegaon, Pune Airport to Shirdi Cab, Pune Airport Cab Service, Lohegaon Pune Airport Cab Service, Taxi Service in Lohegaon Airport, Pune Airport Pickup Point Cab, Pune Airport to Lonavala Cab, Pune Airport to Nashik Cab, Pune Airport to Shirdi Cab Fare, Pune Airport to Kolhapur Cab, Pune Airport to Aurangabad Cab, Pune Airport to Shirdi One Way Cab, Lohegaon Pune Airport Cab Service"
      };
      

    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Taxi Service in Lohegaon | Affordable and Reliable Taxi Booking | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Affordable and reliable taxi services in Lohegaon for local and airport transfers, including one-way and round-trip options. Enjoy 24/7 availability with both luxury and budget options."
  />
  <meta
    name="keywords"
    content="Lohegaon Taxi Service, Taxi Booking Lohegaon, Taxi in Lohegaon, Cab Service Lohegaon, Lohegaon Cab Booking, Reliable Taxi Lohegaon, Affordable Taxi Lohegaon, 24/7 Taxi Service Lohegaon, Airport Taxi Lohegaon, Luxury Taxi Lohegaon, Taxi Near Lohegaon, Cheapest Taxi Service in Lohegaon, Pune Airport to Shirdi Cab, Pune Airport Cab Service, Lohegaon Pune Airport Cab Service, Taxi Service in Lohegaon Airport, Pune Airport Pickup Point Cab, Pune Airport to Lonavala Cab, Pune Airport to Nashik Cab, Pune Airport to Shirdi Cab Fare, Pune Airport to Kolhapur Cab, Pune Airport to Aurangabad Cab, Pune Airport to Shirdi One Way Cab, Lohegaon Pune Airport Cab Service"
  />
  <meta property="og:title" content="Taxi Service in Lohegaon | Affordable and Reliable Taxi Booking" />
  <meta
    property="og:description"
    content="Affordable and reliable taxi services in Lohegaon for local and airport transfers, including one-way and round-trip options. Enjoy 24/7 availability with both luxury and budget options."
  />
  <meta property="og:url" content="https://www.lohegaontaxiservices.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.lohegaontaxiservices.com/images/lohegaon-taxi-service.jpg" />
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
                            <img src='/images/keyword/91.jpg' alt='img' />
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
                                    border: '3px dotted #0AB4A9',
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

export default Taxiserviceinlohgaon;