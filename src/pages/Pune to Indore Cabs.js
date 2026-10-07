
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoindorecabs() {



    const cardData =
    {
        keyword: 'Pune to Indore Cabs    ',
        heading: 'Morya Cabs:  Pune to Indore Cabs  ',
        headingDescription: 'Planning a trip from Pune to Indore? Morya Cabs offers reliable, affordable, and convenient taxi services for your journey from Pune to Indore. Whether you are heading for business, a family trip, or a leisure getaway, our well-maintained vehicles and professional drivers ensure a smooth and comfortable ride. With us, you can expect punctuality, safety, and a stress-free experience as you travel from Pune to Indore. Book your cab online today and enjoy a relaxed and scenic journey!',

        top: 'Top Places to Visit in Indore with Morya Cabs',

        topPlaces: [
            {
                "title": "Rajwada Palace",
                "description": "A historic palace showcasing the grandeur of the Holkar dynasty, Rajwada Palace is an architectural marvel. Its beautiful blend of Mughal, Maratha, and French influences makes it a must-visit."
            },
            {
                "title": "Lal Baag Palace",
                "description": "Another stunning palace in Indore, Lal Baag is known for its magnificent gardens and beautiful architecture. It provides a glimpse into the royal lifestyle of the Holkar rulers."
            },
            {
                "title": "Kanch Mandir",
                "description": "Kanch Mandir, also known as the Glass Temple, is famous for its intricate glasswork and beautiful carvings. It’s an ideal spot for spiritual seekers and architecture enthusiasts."
            },
            {
                "title": "Mahatma Gandhi Hall",
                "description": "A historical building, Mahatma Gandhi Hall is an architectural gem in the heart of Indore. The hall hosts various cultural events and exhibitions, making it a prominent landmark in the city."
            },
            {
                "title": "Sarafa Bazar",
                "description": "Sarafa Bazar is a bustling night market in Indore, famous for its street food. If you're a food lover, you must explore this vibrant market for authentic local delicacies."
            },
            {
                "title": "Indore Museum",
                "description": "For history buffs, the Indore Museum houses a wide range of ancient sculptures, artifacts, and coins from various historical periods, including the Gupta and Maurya empires."
            },
            {
                "title": "Gandhi Nagar",
                "description": "Gandhi Nagar is one of Indore’s oldest and most charming areas, perfect for a leisurely walk. It’s home to several historical landmarks, including temples, gardens, and colonial-era buildings."
            },
            {
                "title": "Patalpani Waterfall",
                "description": "Located on the outskirts of Indore, Patalpani Waterfall is a serene and picturesque spot, ideal for nature lovers and trekking enthusiasts. The waterfall is especially beautiful during the monsoon season."
            },
            {
                "title": "Ralamandal Wildlife Sanctuary",
                "description": "A perfect destination for nature lovers and wildlife enthusiasts, Ralamandal Wildlife Sanctuary is home to a wide variety of animals and birds, as well as lush greenery. It’s a peaceful retreat for those looking to experience nature up close."
            },
            {
                "title": "Chappal Village",
                "description": "Chappal Village, a unique spot near Indore, is known for its beautiful traditional architecture and culture. It’s a perfect place to experience rural life and explore the village’s handmade crafts."
            }
        ],



        "services": [
            {
              "name": "Pune to Indore Taxi Services",
              "description": "Morya Cab offers efficient and comfortable taxi services from Pune to Indore, ensuring you have a smooth and pleasant journey. Whether you're traveling for business, leisure, or a family trip, our professional drivers and well-maintained vehicles are ready to make your journey comfortable and stress-free."
            },
            {
              "name": "Pune to Indore Cab Booking",
              "description": "Booking a cab from Pune to Indore is easy with Morya Cab. You can choose between a one-way trip or a round trip, depending on your schedule. Our online booking system allows you to book your taxi at your convenience and plan your trip with ease."
            },
            {
              "name": "Pune to Indore Car Rental",
              "description": "If you prefer more flexibility during your journey, Morya Cab offers car rental services for your Pune to Indore trip. Choose from a variety of vehicles, from sedans to SUVs, and enjoy a personalized and comfortable travel experience."
            },
            {
              "name": "Pune to Indore Rajwada Palace Cabs",
              "description": "If you’re planning to visit the historic Rajwada Palace in Indore, Morya Cab provides dedicated taxi services to get you there comfortably and on time. Our experienced drivers will ensure you reach the destination smoothly and can even assist you with the best routes."
            },
            {
              "name": "Pune to Indore One-Way Taxi",
              "description": "For a hassle-free one-way journey, Morya Cab offers one-way taxi services from Pune to Indore. With affordable pricing and a seamless experience, you can enjoy a direct ride to Indore without any interruptions."
            },
            {
              "name": "Pune to Indore Round Trip Cabs",
              "description": "Morya Cab also offers round-trip cab services from Pune to Indore, allowing you to complete your trip with ease. Our round-trip services include comfortable rides, professional drivers, and a reliable schedule for both the onward and return journeys."
            },
            {
              "name": "Pune to Indore Luxury Taxi",
              "description": "If you're looking for a premium experience, Morya Cab offers luxury taxis for your Pune to Indore journey. Enjoy superior comfort and high-end features in our luxury vehicles, ensuring that your travel experience is nothing short of exceptional."
            },
            {
              "name": "Pune to Indore Self-Drive Car Rental",
              "description": "For those who prefer to drive themselves, Morya Cab offers self-drive car rentals. Choose from a variety of well-maintained vehicles, including compact cars, SUVs, and more, to suit your needs and enjoy the freedom of driving at your own pace."
            },
            {
              "name": "Pune to Indore Private Car Hire",
              "description": "Morya Cab provides private car hire services for your Pune to Indore journey. Enjoy the flexibility of having your own private car and driver, ensuring a personalized and comfortable travel experience from start to finish."
            },
            {
              "name": "Pune to Lal Bagh Palace",
              "description": "If your visit to Indore includes a stop at the famous Lal Bagh Palace, Morya Cab can provide a dedicated taxi service for your convenience. Our drivers are well-versed with the best routes to this majestic palace, ensuring you have a smooth journey."
            },
            {
              "name": "Pune to Indore Cab",
              "description": "Morya Cab offers reliable and affordable cab services for your Pune to Indore trip. Our fleet includes various vehicle options to suit your preferences, whether you're traveling alone, with family, or with a group."
            },
            {
              "name": "Pune to Indore Cab Booking",
              "description": "Booking a cab for your journey from Pune to Indore is quick and easy with Morya Cab. Simply book your taxi online or by phone, and we will ensure that a well-maintained vehicle and professional driver are ready for your trip."
            },
            {
              "name": "One-Way Cab Pune to Indore",
              "description": "Morya Cab offers one-way cab services from Pune to Indore. Whether you're traveling for business or leisure, our one-way service provides a cost-effective and convenient solution for a direct ride to Indore."
            },
            {
              "name": "Pune to Indore Cab Service",
              "description": "Morya Cab provides top-notch cab services from Pune to Indore, ensuring a comfortable and timely journey. Our team of experienced drivers ensures your travel is safe, and our well-maintained vehicles guarantee comfort throughout your journey."
            },
            {
              "name": "Pune to Indore Taxi",
              "description": "Book a taxi from Pune to Indore with Morya Cab for a smooth and reliable ride. Whether you need a sedan, SUV, or any other vehicle, we provide various options to suit your travel needs."
            },
            {
              "name": "Pune to Indore Ertiga Cab",
              "description": "Morya Cab offers Ertiga cabs for your Pune to Indore trip, providing extra space and comfort for families or small groups. Our Ertiga cabs are perfect for those who need more space for a comfortable ride."
            },
            {
              "name": "Pune to Indore Innova Crysta",
              "description": "For a luxury ride from Pune to Indore, Morya Cab offers the Innova Crysta. With ample space, a comfortable interior, and premium features, the Innova Crysta is perfect for long-distance travel and group journeys."
            },
            {
              "name": "Pune to Indore Sedan Cab Services",
              "description": "If you prefer a compact and efficient vehicle for your Pune to Indore trip, Morya Cab offers sedan cab services. Our sedan cabs are ideal for solo travelers or small groups and offer a comfortable journey at affordable rates."
            },
            {
              "name": "Pune to Indore Swift Dzire on Rent",
              "description": "Morya Cab provides Swift Dzire cars for rent for your journey from Pune to Indore. These cars are perfect for small groups and offer a balance of comfort and fuel efficiency, making them a great choice for your trip."
            },
            {
              "name": "Contact Information for Pune to Indore Cab Services",
              "description": "For more details or bookings, contact Morya Cab at +91 9371304510. We offer reliable, comfortable, and affordable taxi services for your Pune to Indore journey. Book your cab today for a smooth and enjoyable trip!"
            }
          ],



          tableData: [
            ["Pune to Indore Taxi Services", "-Pune to Indore Cab Booking"],
            ["Pune to Indore Car Rental", "-Pune to Indore Rajwada Palace Cabs"],
            ["Pune to Indore One-Way Taxi", "-Pune to Indore Round Trip Cabs"],
            ["Pune to Indore Luxury Taxi", "-Pune to Indore Self-Drive Car Rental"],
            ["Pune to Indore Private Car Hire", "-Pune to Lal Bagh Palace"],
            ["Pune to Indore Cab", "-Pune to Indore Cab Booking"],
            ["One Way Cab Pune to Indore", "-Pune to Indore Cab Service"],
            ["Pune to Indore Taxi", "-Pune to Indore Ertiga Cab"],
            ["Pune to Indore Innova Crysta", "-Pune to Indore Sedan Cab Services"],
            ["Pune to Indore Swift Dzire on Rent", ""]
        ],
        
        whychoose: [
            {
                "WhyChooseheading": "Reliable and On-Time Service",
                "WhyChoosedescription": "Morya Cab understands the importance of timeliness for long-distance travel. Whether you're heading to Indore for business or leisure, our drivers ensure on-time pickups and drop-offs, ensuring you reach your destination promptly."
            },
            {
                "WhyChooseheading": "Comfortable and Spacious Vehicles",
                "WhyChoosedescription": "We offer a range of well-maintained vehicles such as sedans, SUVs, and premium cars. Each vehicle is equipped with air conditioning, comfortable seating, and spacious interiors, making your long-distance journey from Pune to Indore a comfortable and relaxing experience."
            },
            {
                "WhyChooseheading": "Experienced and Professional Drivers",
                "WhyChoosedescription": "Our drivers are experienced in handling long-distance travel and are familiar with the best routes to Indore. They prioritize your safety and comfort, ensuring a smooth and pleasant journey."
            },
            {
                "WhyChooseheading": "Affordable and Transparent Pricing",
                "WhyChoosedescription": "Morya Cab offers competitive pricing with no hidden charges. You’ll receive a clear breakdown of costs before your journey, ensuring that you're fully aware of the fare and there are no surprises during the trip."
            },
            {
                "WhyChooseheading": "Safe and Comfortable Journey",
                "WhyChoosedescription": "Safety is our top priority. Our vehicles come equipped with modern safety features like airbags, seat belts, and GPS tracking, ensuring a secure and smooth ride from Pune to Indore."
            },
            {
                "WhyChooseheading": "24/7 Availability",
                "WhyChoosedescription": "Morya Cab operates around the clock, so you can schedule your ride at any time of the day or night. Whether it’s an early morning departure or a late-night return, we are available to meet your travel needs."
            },
            {
                "WhyChooseheading": "Hassle-Free Booking Process",
                "WhyChoosedescription": "Booking a Pune to Indore cab with Morya Cab is quick and easy. You can book your ride through our website, mobile app, or contact our customer service team, who are ready to assist you in any way."
            },
            {
                "WhyChooseheading": "Customized Travel Packages",
                "WhyChoosedescription": "We understand that each trip is unique. Whether you’re visiting Indore for business, leisure, or a special event, we offer customized travel packages that cater to your specific needs and preferences."
            }
        ]
        
















    }

    const faqData = [
        {
          question: "How can I book a Pune to Indore cab with Morya Cab?",
          answer: "Booking is simple! You can book your ride through our website, mobile app, or by contacting our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are highly skilled in handling long-distance journeys, including the route from Pune to Indore, ensuring a safe and comfortable ride."
        },
        {
          question: "What types of vehicles are available for Pune to Indore travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all designed for comfort and ample space during your journey."
        },
        {
          question: "How do I pay for my Pune to Indore cab rental?",
          answer: "We offer flexible payment options, including cash, credit/debit cards, and online payments via our app, for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Indore?",
          answer: "Yes, round trips are available! Simply provide us with your return details, and we will take care of your journey both ways."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges for waiting time or detours will be communicated upfront during the booking process, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Indore?",
          answer: "Yes, we offer sightseeing tours in Indore. Explore local attractions such as Rajwada Palace, Lal Baag Palace, and more, with the guidance of our experienced drivers."
        },
        {
          question: "What is the luggage allowance for a Pune to Indore taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have additional luggage or special requirements, please inform us during the booking process, and we’ll make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Indore?",
          answer: "Yes, we provide corporate travel services for business trips, meetings, or group travel between Pune and Indore."
        },
        {
          question: "Why should I choose Morya Cab for my Pune to Indore trip?",
          answer: "Morya Cab guarantees a reliable, safe, and comfortable journey with professional drivers, well-maintained vehicles, and excellent customer service, ensuring a smooth and stress-free trip every time."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Arvind Sharma',
          role: 'Traveler',
          review: 'I had a wonderful experience with Morya Cab during my trip from Pune to Indore. The driver was punctual, the car was comfortable, and the journey was smooth. I would definitely recommend their services!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Neha Joshi',
          role: 'Corporate Traveler',
          review: 'Our corporate team used Morya Cab for a business trip to Indore. The service was impeccable. The vehicle was clean and spacious, and the driver was professional and courteous. We’ll be using Morya Cab for our future trips as well!',
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
        "name": "Pune to Indore Cabs",
        "description": "Book a reliable and comfortable taxi service from Pune to Indore. We offer one-way, round trip, luxury taxis, private car hire, and self-drive car rental for your journey.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9371304510",
        "url": "https://moryacab.com/pune-to-indore-taxi",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-to-indore-taxi.jpg",
          "https://moryacab.com/img/indore-taxi.jpg"
        ],
        "priceRange": "₹5000 - ₹8000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-indore-taxi",
          "priceCurrency": "INR",
          "price": 6000,
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
              "name": "Suresh Kumar"
            },
            "datePublished": "2024-12-10",
            "reviewBody": "A very smooth ride from Pune to Indore. The driver was professional and courteous, and the car was very comfortable. Highly recommend this service!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Shah"
            },
            "datePublished": "2024-09-20",
            "reviewBody": "Excellent service! The taxi was clean and well-maintained, and the journey was very pleasant. The driver was punctual, and the entire experience was hassle-free."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Indore Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 22.7196,
            "longitude": 75.8577
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-indore-taxi"
        },
        "keywords": "Pune to Indore Taxi Services, Pune to Indore Cab Booking, Pune to Indore Car Rental, Pune to Indore Rajwada Palace Cabs, Pune to Indore One-Way Taxi, Pune to Indore Round Trip Cabs, Pune to Indore Luxury Taxi, Pune to Indore Self-Drive Car Rental, Pune to Indore Private Car Hire, Pune to Lal Bagh Palace, Pune to Indore Cab, Pune to Indore Cab Booking, One Way Cab Pune to Indore, Pune to Indore Cab Service, Pune to Indore Taxi, Pune to Indore Ertiga Cab, Pune to Indore Innova Crysta, Pune to Indore Sedan Cab Services, Pune to Indore Swift Dzire on Rent"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Indore Cabs | Affordable & Reliable Taxi Service | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Book your Pune to Indore cab with Morya Cabs. We offer one-way, round trip, luxury taxis, private car hire, and self-drive options for your journey to Indore."
  />
  <meta
    name="keywords"
    content="Pune to Indore Taxi Services, Pune to Indore Cab Booking, Pune to Indore Car Rental, Pune to Indore Rajwada Palace Cabs, Pune to Indore One-Way Taxi, Pune to Indore Round Trip Cabs, Pune to Indore Luxury Taxi, Pune to Indore Self-Drive Car Rental, Pune to Indore Private Car Hire, Pune to Lal Bagh Palace, Pune to Indore Cab, Pune to Indore Cab Booking, One Way Cab Pune to Indore, Pune to Indore Cab Service, Pune to Indore Taxi, Pune to Indore Ertiga Cab, Pune to Indore Innova Crysta, Pune to Indore Sedan Cab Services, Pune to Indore Swift Dzire on Rent"
  />
  <meta property="og:title" content="Pune to Indore Cabs | Morya Cabs" />
  <meta
    property="og:description"
    content="Book a comfortable and reliable Pune to Indore taxi with Morya Cabs. Choose from a variety of vehicles, including luxury cabs, private car hire, and self-drive rentals."
  />
  <meta property="og:url" content="https://moryacab.com/pune-to-indore-taxi" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://moryacab.com/img/pune-to-indore-taxi.jpg" />
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
                            <img src='/images/keyword/51.jpg' alt='img' />
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

export default Punetoindorecabs;