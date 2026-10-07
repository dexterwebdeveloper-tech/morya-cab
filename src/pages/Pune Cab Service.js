
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punecabservices() {



    const cardData =
    {
        keyword: 'Pune Cab Service ',
        heading: 'Morya Cabs:  Pune Cab Service ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services in Pune. Whether you need a local city ride, an outstation trip, or airport transfers, our well-maintained fleet and professional drivers ensure a hassle-free journey. We prioritize safety, punctuality, and customer satisfaction, making us the preferred choice for cab services in Pune. Enjoy a smooth and comfortable ride with our top-notch amenities and customer-centric service.',

        top: 'Top Places to Visit in Pune with Morya Cabs',

        topPlaces: [
            {
                "title": "Shaniwar Wada",
                "description": "A historical fortification in Pune, Shaniwar Wada was the seat of the Peshwas of the Maratha Empire. The grand entrance, intricate architecture, and the famous 'Haunted Story' make it a must-visit attraction for history lovers."
            },
            {
                "title": "Aga Khan Palace",
                "description": "Built in 1892, Aga Khan Palace is an important landmark in India’s freedom struggle. Mahatma Gandhi and his wife Kasturba were imprisoned here during the Quit India Movement. The palace is now a museum displaying rare photographs and artifacts."
            },
            {
                "title": "Dagdusheth Halwai Ganpati Temple",
                "description": "One of the most famous temples in Pune, the Dagdusheth Halwai Ganpati Temple attracts thousands of devotees every year. The grand idol of Lord Ganesha and the spiritual ambiance make it a revered spot for visitors."
            },
            {
                "title": "Sinhagad Fort",
                "description": "A popular trekking destination, Sinhagad Fort offers breathtaking views of the Sahyadri Mountains. Known for its historical significance in the Maratha Empire, this fort is a paradise for adventure lovers and history enthusiasts."
            },
            {
                "title": "Osho Ashram",
                "description": "Located in Koregaon Park, Osho Ashram is a serene retreat for meditation and spiritual healing. The ashram attracts visitors from all over the world who seek peace, wellness, and enlightenment."
            },
            {
                "title": "Pataleshwar Cave Temple",
                "description": "This ancient rock-cut temple dedicated to Lord Shiva is carved out of a single rock. The temple’s unique design and tranquil setting make it a fascinating spot for visitors interested in history and architecture."
            },
            {
                "title": "Saras Baug",
                "description": "A beautiful garden with a historic Ganpati temple in the middle, Saras Baug is a perfect place for evening strolls and family outings. The well-maintained lawns and fountains add to its charm."
            },
            {
                "title": "Rajiv Gandhi Zoological Park",
                "description": "Spread across 130 acres, this zoo is home to various species of animals, reptiles, and birds. The park is a great destination for families and wildlife enthusiasts."
            },
            {
                "title": "Pashan Lake",
                "description": "A scenic artificial lake ideal for birdwatching and picnics, Pashan Lake is a serene getaway from the city’s hustle and bustle. The lake attracts migratory birds, making it a paradise for nature lovers."
            },
            {
                "title": "Parvati Hill Temple",
                "description": "Offering panoramic views of Pune, Parvati Hill Temple is a historic temple complex dedicated to Lord Shiva. The trek to the top is rewarding with a breathtaking view of the city."
            }
        ],



"services": [
    {
        "name": "Pune Cab Service",
        "description": "Morya Cab offers a wide range of reliable and comfortable cab services throughout Pune. Whether you're traveling for business or leisure, we provide a seamless travel experience with our fleet of well-maintained vehicles and experienced drivers. Our Pune cab service is designed to cater to your specific needs, ensuring that you reach your destination on time and in comfort."
    },
    {
        "name": "Pune Taxi Service",
        "description": "Looking for a dependable taxi service within Pune? Morya Cab offers affordable and efficient taxi rides for all kinds of trips. Whether you need a quick ride across town or a full day of sightseeing, our professional drivers are ready to serve you. With competitive pricing and top-notch service, your journey will be both stress-free and enjoyable."
    },
    {
        "name": "Pune Car Rentals",
        "description": "Explore Pune at your own pace with Morya Cab's car rental services. We offer a variety of vehicles, from compact cars to larger family options, to ensure you have the perfect ride for your journey. Whether you need a car for a few hours or a full day, Morya Cab provides flexible rental options with a commitment to comfort and reliability."
    },
    {
        "name": "Pune Airport Taxi",
        "description": "Morya Cab offers reliable airport taxi services to and from Pune Airport. Whether you're arriving or departing, our experienced drivers will ensure that your journey is smooth and timely. With our on-time pick-up and drop-off service, you can be sure that you'll reach the airport or your home without any worries."
    },
    {
        "name": "Pune Local Cabs",
        "description": "For all your local transportation needs in Pune, Morya Cab provides convenient, affordable, and reliable local cab services. Whether you're running errands, attending meetings, or going on a leisure trip, our fleet of taxis ensures a comfortable and punctual ride around Pune."
    },
    {
        "name": "Taxi Booking Pune",
        "description": "Booking a taxi in Pune has never been easier. Morya Cab offers an easy-to-use booking system, whether you prefer to book online or via phone. We guarantee a hassle-free experience with prompt service, well-maintained vehicles, and friendly drivers."
    },
    {
        "name": "Pune Chauffeur Service",
        "description": "For those who prefer a more luxurious experience, Morya Cab’s chauffeur service is the perfect choice. Our professional drivers are at your service, offering the comfort and convenience you deserve. Whether you’re attending a business meeting or need a ride for a special occasion, we ensure a high-end travel experience."
    },
    {
        "name": "Affordable Cabs Pune",
        "description": "Morya Cab believes in providing high-quality cab services at affordable prices. Our fleet of well-maintained vehicles, along with our competitive rates, ensures you get the best value for your money. Whether it’s a quick ride or a day-long journey, we guarantee that you won’t have to break the bank for a reliable ride."
    },
    {
        "name": "Pune Ride Service",
        "description": "Morya Cab’s ride service is perfect for anyone looking for comfortable and reliable transportation within Pune. Whether you need a quick trip to a meeting, or a leisurely ride around the city, we provide hassle-free travel options with friendly drivers and well-maintained vehicles."
    },
    {
        "name": "Pune Taxi Booking Online",
        "description": "Booking a taxi in Pune is easy with Morya Cab's online platform. You can quickly book your ride via our website or app, choosing the time and type of vehicle that best suits your needs. With real-time tracking and transparent pricing, booking a cab has never been so convenient."
    },
    {
        "name": "Pune Cab Service",
        "description": "Morya Cab is your go-to service for all your transportation needs within Pune. Whether you need a ride for an appointment, a shopping trip, or a day tour, we offer a range of affordable and reliable options. Our professional drivers ensure that every ride is comfortable, safe, and punctual."
    },
    {
        "name": "Pune to Shirdi Cab",
        "description": "Travel comfortably from Pune to Shirdi with Morya Cab’s dedicated cab service. Whether you’re visiting the holy town for spiritual reasons or simply exploring, our experienced drivers ensure a smooth, hassle-free journey. We offer both one-way and round-trip options, ensuring flexibility in your travel plans."
    },
    {
        "name": "Pune to Mumbai Cab",
        "description": "For your journey from Pune to Mumbai, Morya Cab provides reliable and comfortable taxi services. Our professional drivers are familiar with the best routes and will ensure a smooth and timely ride. Whether you’re traveling for business or leisure, we offer the perfect solution for a comfortable ride."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "Planning to fly from Mumbai Airport? Morya Cab offers convenient and punctual taxi services from Pune to Mumbai Airport. With a focus on timeliness and comfort, we ensure that you arrive at the airport on time, every time."
    },
    {
        "name": "Pune to Mahabaleshwar Cab",
        "description": "Looking to escape to Mahabaleshwar for a scenic retreat? Morya Cab offers comfortable and affordable cab services for your journey. Let our experienced drivers take you on a smooth ride through the beautiful landscapes, ensuring you arrive at Mahabaleshwar refreshed and ready to enjoy your visit."
    },
    {
        "name": "Pune to Shirdi Taxi",
        "description": "Morya Cab offers reliable and convenient taxi services from Pune to Shirdi. Whether it’s a one-way trip or a round-trip, we make sure your journey is as comfortable as possible, with well-maintained vehicles and professional drivers to take you safely to your destination."
    },
    {
        "name": "Taxi Service in Pune",
        "description": "For a reliable taxi service within Pune, Morya Cab is the best choice. We provide efficient and cost-effective taxi rides across the city, ensuring a comfortable and timely journey wherever you need to go. Our drivers are courteous and well-trained to provide you with a pleasant experience."
    },
    {
        "name": "Pune to Bhimashankar Cab",
        "description": "Morya Cab offers premium taxi services from Pune to Bhimashankar, ensuring a smooth and relaxing journey to this sacred location. Whether you are visiting for spiritual reasons or enjoying the beauty of the region, our professional drivers will make your ride stress-free and comfortable. We offer one-way and round-trip options, giving you flexibility based on your travel needs."
    },
    {
        "name": "Pune to Mumbai Taxi",
        "description": "If you are traveling from Pune to Mumbai, Morya Cab is here to offer you a comfortable and safe taxi service. Our drivers are well-versed with the route, ensuring a quick and efficient journey to Mumbai, whether for work, leisure, or airport transfers."
    },
    {
        "name": "Cab Booking in Pune",
        "description": "Morya Cab offers simple and convenient cab booking services in Pune. You can book a ride through our website, mobile app, or by calling our customer support team. We provide transparent pricing and reliable services to make sure your travel experience is hassle-free."
    },
    {
        "name": "Pune to Kolhapur Cab",
        "description": "For a comfortable and efficient ride from Pune to Kolhapur, choose Morya Cab. We offer timely pick-ups and drop-offs with experienced drivers familiar with the best routes to ensure your journey is smooth."
    }
],



tableData: [
    ["Pune Cab Service", "-Pune Taxi Service"],
    ["Pune Car Rentals", "-Pune Airport Taxi"],
    ["Taxi Booking Pune", "-Pune Chauffeur Service"],
    ["Affordable Cabs Pune", "-Pune Ride Service"],
    ["Pune Taxi Booking Online", "-Pune Cab Service"],
    ["Pune to Shirdi Cab", "-Pune to Mumbai Cab"],
    ["Pune to Mumbai Airport Cab", "-Pune to Mahabaleshwar cab"],
    ["Pune to Shirdi Taxi", "-Taxi Service in Pune"],
    ["Pune to Bhimashankar Cab", "-Pune to Mumbai Taxi"],
    ["Cab Booking in Pune", "-Pune to Kolhapur Cab"],
    ["Cheapest Cab Service in Pune", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the value of your time. Whether it's an important business trip or a casual visit, we ensure timely pickups and drop-offs for a seamless travel experience in Pune."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Traveling around Pune is made easy and enjoyable with our wide range of comfortable vehicles. All our cars are well-maintained with air conditioning, spacious seating, and the necessary amenities to ensure a smooth ride."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our professional drivers are knowledgeable about the city’s roads and traffic patterns, ensuring you get to your destination quickly and safely. Their expertise guarantees a comfortable and stress-free experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We offer competitive pricing without any hidden charges. Morya Cab provides clear and transparent fare details, so you know exactly what to expect and can plan your budget accordingly."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "We prioritize your safety. All our vehicles are equipped with the latest safety features, including seat belts, airbags, and GPS tracking, ensuring a safe journey every time."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "No matter when you need a ride, Morya Cab is available 24/7. Whether it's an early morning pickup or a late-night drop-off, our team is always ready to assist with your transportation needs in Pune."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a cab with Morya Cab is simple and convenient. You can book online through our website or app, or reach out to our customer service team for any assistance and special requests."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you’re visiting Pune for sightseeing, business, or a special event, Morya Cab offers customized travel packages to meet your specific requirements and preferences. We’ll make sure your trip is enjoyable and memorable."
    }
]










    }


    const faqData = [
        {
          question: "How can I book a Pune cab with Morya Cab?",
          answer: "You can easily book a cab through our website, mobile app, or by contacting our customer service team for assistance."
        },
        {
          question: "Are the drivers experienced for local travel in Pune?",
          answer: "Yes, all our drivers are well-trained and familiar with the local roads in Pune, ensuring a smooth and safe ride."
        },
        {
          question: "What types of vehicles are available for Pune travel?",
          answer: "We offer a range of vehicles including sedans, SUVs, and premium cars, all of which are well-maintained for a comfortable journey."
        },
        {
          question: "How do I pay for my Pune taxi rental?",
          answer: "We provide multiple payment options, including cash, credit/debit cards, and online payments through our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune?",
          answer: "Yes, we can arrange a round trip from Pune, including your return details. Just let us know your preferences, and we will handle the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges such as waiting time or detours will be clearly communicated to you upfront, ensuring no surprises when it comes to pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Pune?",
          answer: "Yes, Morya Cab offers sightseeing tours across Pune. Explore popular attractions like Shaniwar Wada, Aga Khan Palace, and more with our experienced drivers."
        },
        {
          question: "What is the luggage allowance for a Pune taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have additional luggage or special requirements, please let us know during the booking process."
        },
        {
          question: "Is Morya Cab available for corporate travel in Pune?",
          answer: "Yes, we offer corporate travel services for business trips, group transport, and more, ensuring that your employees or clients get a comfortable and timely ride."
        },
        {
          question: "Why should I choose Morya Cab for Pune travel?",
          answer: "Morya Cab provides reliable, affordable, and comfortable rides with experienced drivers, modern vehicles, and excellent customer service, ensuring a safe and enjoyable journey every time."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Anil Kapoor',
          role: 'Business Traveller',
          review: 'I needed a taxi for a business trip in Pune. Morya Cab’s service was top-notch! The driver was punctual, the vehicle was spotless, and the ride was smooth. I will definitely choose Morya Cab again.',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Priya Sharma',
          role: 'Sightseer',
          review: 'Our family hired a Morya Cab for sightseeing in Pune. The car was spacious, and the driver was courteous and knowledgeable. It was a great experience, and we’ll be booking again soon.',
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
        "@type": "TaxiService",
        "name": "Pune Cab Service",
        "description": "Book reliable and affordable Pune taxi service for various routes, including Pune to Shirdi, Pune to Mumbai, and more. We offer local cabs, airport taxis, chauffeur services, and much more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9371304510",
        "url": "https://moryacab.com/pune-cab-service",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-cab-service.jpg",
          "https://moryacab.com/img/pune-local-cab.jpg"
        ],
        "priceRange": "₹1500 - ₹5000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-cab-service",
          "priceCurrency": "INR",
          "price": 2000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "reviewCount": 300
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ankit Sharma"
            },
            "datePublished": "2024-11-05",
            "reviewBody": "The Pune Cab Service was excellent! The ride was comfortable and the driver was professional. I had a smooth journey from Pune to Shirdi. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sushmita Reddy"
            },
            "datePublished": "2024-09-15",
            "reviewBody": "I used Pune Cab Service for a trip to Mumbai. The car was clean, and the driver was polite and on time. A reliable service for city trips."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune Cab Service Area",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-cab-service"
        },
        "keywords": "Pune Cab Service, Pune Taxi Service, Pune Car Rentals, Pune Airport Taxi, Pune Local Cabs, Taxi Booking Pune, Pune Chauffeur Service, Affordable Cabs Pune, Pune Ride Service, Pune Taxi Booking Online, Pune to Shirdi Cab, Pune to Mumbai Cab, Pune to Mumbai Airport Cab, Pune to Mahabaleshwar cab, Pune to Bhimashankar Cab, Pune to Kolhapur Cab, Cheapest Cab Service in Pune"
      };
      

    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune Cab Service | Reliable and Affordable Taxi Service | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Book your reliable and affordable Pune cab service. We offer local cabs, airport taxis, chauffeur services, and rides to destinations like Shirdi, Mumbai, and more."
  />
  <meta
    name="keywords"
    content="Pune Cab Service, Pune Taxi Service, Pune Car Rentals, Pune Airport Taxi, Pune Local Cabs, Taxi Booking Pune, Pune Chauffeur Service, Affordable Cabs Pune, Pune Ride Service, Pune Taxi Booking Online, Pune to Shirdi Cab, Pune to Mumbai Cab, Pune to Mumbai Airport Cab, Pune to Mahabaleshwar cab, Pune to Bhimashankar Cab, Pune to Kolhapur Cab, Cheapest Cab Service in Pune"
  />
  <meta property="og:title" content="Pune Cab Service | Morya Cabs" />
  <meta
    property="og:description"
    content="Reliable and affordable Pune cab service. Book local cabs, airport taxis, chauffeur services, and more for trips to Shirdi, Mumbai, and beyond."
  />
  <meta property="og:url" content="https://moryacab.com/pune-cab-service" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://moryacab.com/img/pune-cab-service.jpg" />
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
                            <img src='/images/keyword/39.jpg' alt='img' />
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

export default Punecabservices;