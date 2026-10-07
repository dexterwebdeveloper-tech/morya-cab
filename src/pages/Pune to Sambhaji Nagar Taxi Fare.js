
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetosambhajinagartaxi() {



    const cardData =
    {
        keyword: 'Pune to Sambhaji Nagar Taxi',
        heading: 'Morya Cabs: Pune to Sambhaji Nagar Taxi',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Sambhaji Nagar. Whether you are traveling for business, leisure, or a personal visit, our professional drivers and well-maintained fleet ensure a smooth and stress-free ride. The distance between Pune and Sambhaji Nagar is approximately 230-250 km, and the journey typically takes around 5 to 6 hours by road. Enjoy a comfortable ride with top-notch amenities and customer-focused service.',

        top: 'Top Places to Visit in Sambhaji Nagar with Morya Cabs:',

"topPlaces": [
    {
        "title": "Bibi Ka Maqbara",
        "description": "Known as the 'Taj of the Deccan,' this historical monument was built in memory of Aurangzeb’s wife. Its stunning Mughal architecture closely resembles the Taj Mahal, making it a must-visit for history and architecture enthusiasts."
    },
    {
        "title": "Ajanta Caves",
        "description": "A UNESCO World Heritage Site, the Ajanta Caves are famous for their intricate rock-cut architecture and ancient Buddhist paintings that date back over 2,000 years. These caves are a treasure trove of Indian art and culture."
    },
    {
        "title": "Ellora Caves",
        "description": "Another UNESCO World Heritage Site, the Ellora Caves showcase impressive sculptures and temples representing Hinduism, Buddhism, and Jainism. The awe-inspiring Kailasa Temple is an architectural masterpiece carved from a single rock."
    },
    {
        "title": "Siddharth Garden and Zoo",
        "description": "A lush green park with a well-maintained zoo, Siddharth Garden is perfect for a family outing. It offers a peaceful escape in the heart of the city, with diverse wildlife and scenic landscapes."
    },
    {
        "title": "Grishneshwar Temple",
        "description": "One of the 12 sacred Jyotirlingas of Lord Shiva, Grishneshwar Temple is a revered pilgrimage site located near the Ellora Caves. The temple’s beautiful carvings and spiritual ambiance attract devotees from all over India."
    },
    {
        "title": "Shirdi",
        "description": "Home to the famous Sai Baba Temple, Shirdi is a significant pilgrimage destination that welcomes millions of devotees seeking blessings. The town’s spiritual aura and well-connected roads make it a popular travel destination."
    },
    {
        "title": "Daulatabad Fort",
        "description": "A majestic fort near Ellora, Daulatabad Fort is known for its impressive defense structures, secret passages, and breathtaking views of the surrounding landscape. It is a paradise for history lovers and adventure seekers."
    },
    {
        "title": "Panchakki",
        "description": "A historic water mill built during the Mughal era, Panchakki is an engineering marvel of its time. The site showcases an ancient water mechanism that once powered a grinding mill for a medieval dargah."
    },
    {
        "title": "Saptashrungi Temple",
        "description": "Located atop a hill, Saptashrungi Temple is dedicated to Goddess Saptashrungi. The temple is an important pilgrimage site, offering breathtaking views and a spiritually uplifting experience for devotees."
    },
    {
        "title": "Gajanan Maharaj Temple",
        "description": "A serene place of worship dedicated to Saint Gajanan Maharaj, this temple attracts devotees from across Maharashtra. The peaceful environment and spiritual significance make it a must-visit destination."
    }
]
,


"services": [
    {
      "name": "Pune to Sambhaji Nagar Taxi Fare",
      "description": "Morya Cab provides competitive taxi fares for your journey from Pune to Sambhaji Nagar. Our transparent pricing ensures you travel at an affordable rate, without any hidden charges."
    },
    {
      "name": "Pune to Sambhaji Nagar Cab Charges",
      "description": "For your journey from Pune to Sambhaji Nagar, Morya Cab offers clear and upfront cab charges. We provide you with the best value for a comfortable ride."
    },
    {
      "name": "Pune to Sambhaji Nagar Taxi Booking",
      "description": "Booking a taxi from Pune to Sambhaji Nagar is easy with Morya Cab. You can book online or by calling us directly for a hassle-free experience."
    },
    {
      "name": "Pune to Sambhaji Nagar Car Rental",
      "description": "Morya Cab offers reliable car rental services for your trip from Pune to Sambhaji Nagar. Choose from a range of well-maintained vehicles for a comfortable journey."
    },
    {
      "name": "Pune to Sambhaji Nagar Taxi Rates",
      "description": "We offer competitive taxi rates for your journey from Pune to Sambhaji Nagar. Our pricing is affordable, ensuring that you get the best value for your ride."
    },
    {
      "name": "Pune to Sambhaji Nagar Cab Pricing",
      "description": "Morya Cab offers clear and transparent pricing for your Pune to Sambhaji Nagar trip. Our prices are designed to be competitive while maintaining high-quality service."
    },
    {
      "name": "Pune to Sambhaji Nagar Private Car Hire",
      "description": "If you prefer a private car for your Pune to Sambhaji Nagar trip, Morya Cab provides private car hire services. Enjoy the privacy and comfort of a personal ride for your journey."
    },
    {
      "name": "Pune to Sambhaji Nagar Cab Cost",
      "description": "Morya Cab offers affordable cab costs for your trip from Pune to Sambhaji Nagar. You can rest assured that you will receive high-quality service at the best price."
    },
    {
      "name": "Pune to Sambhaji Nagar Taxi Service Charges",
      "description": "Morya Cab has transparent taxi service charges for your Pune to Sambhaji Nagar journey. We ensure there are no hidden fees and that you're always aware of the cost upfront."
    },
    {
      "name": "Pune to Sambhaji Nagar Travel Fare",
      "description": "Morya Cab offers a straightforward travel fare from Pune to Sambhaji Nagar, giving you the best pricing for a comfortable and smooth ride."
    },
    {
      "name": "Pune to Sambhaji Nagar Cab Booking Online",
      "description": "Morya Cab offers online booking options for your convenience. You can easily book your Pune to Sambhaji Nagar cab through our website or app."
    },
    {
      "name": "Pune to Sambhaji Nagar One-Way Taxi Fare",
      "description": "For a one-way taxi ride from Pune to Sambhaji Nagar, Morya Cab offers affordable and reliable pricing. We ensure that you get a smooth, direct ride at a great value."
    },
    {
      "name": "Pune to Aurangabad Cab",
      "description": "Morya Cab provides comfortable and reliable taxi services from Pune to Aurangabad. Whether you need a one-way trip or round-trip, we’ve got you covered."
    },
    {
      "name": "Pune to Aurangabad Taxi",
      "description": "Looking for a taxi from Pune to Aurangabad? Morya Cab offers hassle-free taxi services for your journey, ensuring you travel comfortably and on time."
    },
    {
      "name": "Pune to Aurangabad Taxi Fare",
      "description": "Morya Cab offers competitive taxi fares for your Pune to Aurangabad trip. Enjoy an affordable and smooth ride with our transparent pricing."
    },
    {
      "name": "Pune to Aurangabad Cab One Way",
      "description": "If you're looking for a one-way taxi from Pune to Aurangabad, Morya Cab provides reliable services with fair pricing for a direct and comfortable journey."
    },
    {
      "name": "Pune to Aurangabad Daily Taxi",
      "description": "For daily taxi services from Pune to Aurangabad, Morya Cab offers flexible options to suit your schedule and travel needs. Book your daily ride with us for a seamless experience."
    },
    {
      "name": "Pune to Aurangabad Taxi Drop",
      "description": "Morya Cab offers a one-way taxi drop service from Pune to Aurangabad. Enjoy a smooth, comfortable, and convenient journey to your destination."
    },
    {
      "name": "Pune to Aurangabad Cab Fare",
      "description": "Morya Cab offers affordable cab fares for your trip from Pune to Aurangabad. Our transparent pricing ensures no surprises during your journey."
    },
    {
      "name": "Pune Aurangabad Cab Service",
      "description": "Morya Cab provides dependable cab services for your journey from Pune to Aurangabad. Whether it’s a family trip or business travel, we ensure comfort and reliability."
    },
    {
      "name": "Pune to Aurangabad Cab Booking",
      "description": "Book your cab from Pune to Aurangabad easily with Morya Cab. We offer flexible booking options to ensure a convenient and timely service for your trip."
    },
    {
      "name": "Pune to Aurangabad Cab Price",
      "description": "Morya Cab provides clear pricing for your Pune to Aurangabad journey. You can trust us for a reasonable price with no hidden fees."
    },
    {
      "name": "Pune to Aurangabad Cab Service Rates",
      "description": "Morya Cab offers competitive and transparent rates for your Pune to Aurangabad cab service. Book your ride for an affordable and comfortable journey."
    },
    {
      "name": "Pune to Aurangabad Car Rental",
      "description": "Morya Cab provides car rental services for your Pune to Aurangabad trip. Choose from a range of vehicles to suit your needs and travel in comfort."
    },
    {
      "name": "Pune to Aurangabad One-Way Taxi",
      "description": "If you’re looking for a one-way taxi from Pune to Aurangabad, Morya Cab provides excellent one-way service with fair pricing for a direct ride."
    },
    {
      "name": "Pune to Aurangabad Taxi Service",
      "description": "Morya Cab’s taxi service from Pune to Aurangabad is comfortable, reliable, and punctual. Whether you’re traveling for business or leisure, we ensure a pleasant journey."
    }
  ],


  tableData: [
    ["Pune to Sambhaji Nagar Taxi Fare", "-Pune to Sambhaji Nagar Cab Charges"],
    ["Pune to Sambhaji Nagar Taxi Booking", "-Pune to Sambhaji Nagar Car Rental"],
    ["Pune to Sambhaji Nagar Taxi Rates", "-Pune to Sambhaji Nagar Cab Pricing"],
    ["Pune to Sambhaji Nagar Private Car Hire", "-Pune to Sambhaji Nagar Cab Cost"],
    ["Pune to Sambhaji Nagar Taxi Service Charges", "-Pune to Sambhaji Nagar Travel Fare"],
    ["Pune to Sambhaji Nagar Cab Booking Online", "-Pune to Sambhaji Nagar One-Way Taxi Fare"],
    ["Pune to Aurangabad Cab", "-Pune to Aurangabad Taxi"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of being on time for your journey from Pune to Sambhaji Nagar. Whether you're going for a religious visit, business, or a family trip, our drivers ensure timely pickups and smooth drop-offs."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a wide range of vehicles including sedans, SUVs, and premium cars, all designed to make your journey comfortable. The vehicles come with ample space and air conditioning, providing a relaxed ride from Pune to Sambhaji Nagar."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced in long-distance travel and are familiar with the best routes from Pune to Sambhaji Nagar. They prioritize your safety and comfort, ensuring a smooth and hassle-free ride."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and clear pricing for Pune to Sambhaji Nagar trips. There are no hidden charges, and we ensure you receive a detailed breakdown of your fare upfront."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. Our vehicles are equipped with the latest safety features such as airbags, seat belts, and GPS tracking, ensuring you a secure and comfortable journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available 24/7, so whether you need an early morning ride or a late-night return, we’re always ready to serve your needs."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi for Pune to Sambhaji Nagar is simple and convenient. You can easily book online via our website or mobile app, or contact our customer service team for assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether it’s a family trip or a corporate outing, we offer tailored travel packages from Pune to Sambhaji Nagar to suit your specific needs, ensuring a memorable experience."
    }
]









    }

    const faqData = [
        {
          question: "How can I book a taxi from Pune to Sambhaji Nagar with Morya Cab?",
          answer: "Booking a taxi is easy! You can book online through our website or app, or contact our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are experienced and skilled in long-distance travel, ensuring a smooth and safe journey from Pune to Sambhaji Nagar."
        },
        {
          question: "What types of vehicles are available for the Pune to Sambhaji Nagar trip?",
          answer: "We offer various vehicles, including sedans, SUVs, and premium cars, all well-maintained and comfortable for long-distance travel."
        },
        {
          question: "How do I pay for my Pune to Sambhaji Nagar taxi rental?",
          answer: "We offer flexible payment options, including cash, credit/debit cards, and online payment via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Sambhaji Nagar?",
          answer: "Yes, round trips are available. Just provide us with your return details, and we will arrange the entire journey for you."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges, such as waiting time or detours, will be communicated to you upfront, ensuring full transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Sambhaji Nagar?",
          answer: "Yes, we offer sightseeing trips in Sambhaji Nagar as part of your journey. Explore local attractions with the convenience of a taxi."
        },
        {
          question: "What is the luggage allowance for a Pune to Sambhaji Nagar taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have excess luggage or special requirements, please inform us during the booking process."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Sambhaji Nagar?",
          answer: "Yes, we provide corporate travel services, including group trips or business-related visits between Pune and Sambhaji Nagar."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Sambhaji Nagar travel?",
          answer: "Morya Cab ensures a reliable, comfortable, and safe journey with professional drivers, well-maintained vehicles, and transparent pricing, making it the perfect choice for your trip."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rohit Mehta',
          role: 'Traveler',
          review: "I booked a cab with Morya Cab for a trip to Sambhaji Nagar. The driver was on time, and the car was clean and comfortable. The journey was smooth and stress-free. Highly recommended!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Shubhangi Deshpande',
          role: 'Traveler',
          review: "Our family had a great experience with Morya Cab for our trip to Sambhaji Nagar. The vehicle was spacious, and the driver was very polite and professional. We’ll definitely book again for our next visit!",
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
        "name": "Pune to Sambhaji Nagar Taxi Service",
        "description": "Affordable and reliable taxi services from Pune to Sambhaji Nagar. Enjoy comfortable and safe rides with easy booking options for one-way or round-trip travel.",
        "provider": {
          "@type": "Organization",
          "name": "Pune Taxi Services",
          "url": "https://www.punetaxiservices.com",
          "telephone": "+91-9999999999",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 22, Pune City Mall, Pune",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411003",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 1500,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Pune"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "1500",
            "unitCode": "DAY",
            "description": "Taxi service from Pune to Sambhaji Nagar per day"
          }
        },
        "keywords": "Pune to Sambhaji Nagar Taxi Fare, Pune to Sambhaji Nagar Cab Charges, Pune to Sambhaji Nagar Taxi Booking, Pune to Sambhaji Nagar Car Rental, Pune to Aurangabad Taxi Service, Pune to Sambhaji Nagar Taxi Rates"
      };
      
    

<Helmet>
  <title>Pune to Sambhaji Nagar Taxi Service | Affordable & Reliable Taxi Booking | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Affordable and reliable taxi services from Pune to Sambhaji Nagar. Enjoy comfortable and safe rides with easy booking options for one-way or round-trip travel."
  />
  <meta
    name="keywords"
    content="Pune to Sambhaji Nagar Taxi Fare, Pune to Sambhaji Nagar Cab Charges, Pune to Sambhaji Nagar Taxi Booking, Pune to Sambhaji Nagar Car Rental, Pune to Aurangabad Taxi Service, Pune to Sambhaji Nagar Taxi Rates"
  />
  <meta property="og:title" content="Pune to Sambhaji Nagar Taxi Service | Affordable & Reliable Taxi Booking" />
  <meta
    property="og:description"
    content="Affordable and reliable taxi services from Pune to Sambhaji Nagar. Enjoy comfortable and safe rides with easy booking options for one-way or round-trip travel."
  />
  <meta property="og:url" content="https://www.punetaxiservices.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.punetaxiservices.com/images/sambhaji-nagar-taxi.jpg" />
  <script type="application/ld+json">
    {JSON.stringify(jsonLD)}
  </script>
</Helmet>

    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Sambhaji Nagar Taxi Service | Affordable Taxi for Sambhaji Nagar</title>
  <meta
    name="description"
    content="Affordable and reliable taxi services from Pune to Sambhaji Nagar. Enjoy comfortable and safe rides with easy booking options for one-way or round-trip travel."
  />
  <meta
    name="keywords"
    content="Pune to Sambhaji Nagar Taxi Fare, Pune to Sambhaji Nagar Cab Charges, Pune to Sambhaji Nagar Taxi Booking, Pune to Sambhaji Nagar Car Rental, Pune to Aurangabad Taxi Service"
  />
  <meta property="og:title" content="Pune to Sambhaji Nagar Taxi Service | Affordable Taxi for Sambhaji Nagar" />
  <meta
    property="og:description"
    content="Affordable and reliable taxi services from Pune to Sambhaji Nagar. Enjoy comfortable and safe rides with easy booking options for one-way or round-trip travel."
  />
  <meta property="og:url" content="https://www.punetaxiservices.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.punetaxiservices.com/images/sambhaji-nagar-taxi.jpg" />
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
                            <img src='/images/keyword/78.jpg' alt='img' />
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

export default Punetosambhajinagartaxi;