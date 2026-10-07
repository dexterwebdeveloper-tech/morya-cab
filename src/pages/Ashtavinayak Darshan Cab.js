
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Ashtavinakaydarshancab() {



    const cardData =
    {
        keyword: 'Ashtavinayak Darshan Cab ',
        heading: 'Morya Cabs: Ashtavinayak Darshan Cab ',
        headingDescription: 'Planning a trip to the sacred Ashtavinayak temples? Morya Cabs offers convenient and comfortable cab services for Ashtavinayak Darshan, allowing you to explore the eight revered Lord Ganesha temples situated in different parts of Maharashtra. We understand the importance of this spiritual journey and ensure that your ride is peaceful, comfortable, and timely. With our professional drivers, well-maintained vehicles, and affordable fares, Morya Cabs is your trusted partner for a hassle-free Ashtavinayak Darshan trip.',

        top: 'Top Ashtavinayak Temples to Visit with Morya Cabs',

     "topPlaces": [
    {
        "title": "Shri Mayureshwar Temple, Moregaon",
        "description": "The first temple on the Ashtavinayak circuit, Shri Mayureshwar Temple in Moregaon is dedicated to Lord Ganesha in the form of Mayureshwar, the protector of devotees. It is known for its historical and spiritual significance, making it a must-visit on your Darshan journey."
    },
    {
        "title": "Shri Siddhivinayak Temple, Siddhatek",
        "description": "Located in Siddhatek, this temple is known for its deity of Siddhivinayak, who is believed to grant wisdom, knowledge, and prosperity. The temple's serene ambiance and rich heritage make it a beautiful stop during your Darshan."
    },
    {
        "title": "Shri Ballaleshwar Temple, Pali",
        "description": "This temple is dedicated to Lord Ganesha as Ballaleshwar and is unique for being the only Ashtavinayak temple with the deity’s form in the seated posture. The temple’s peaceful surroundings and devotion-filled atmosphere are worth experiencing."
    },
    {
        "title": "Shri Varadvinayak Temple, Mahad",
        "description": "Shri Varadvinayak Temple, located in Mahad, is known for its beautiful architecture and sacred significance. It is believed that worshipping Lord Varadvinayak here can fulfill the wishes of devotees and bring prosperity into their lives."
    },
    {
        "title": "Shri Chintamani Vinayak Temple, Theur",
        "description": "Situated in Theur, this temple is one of the most important pilgrimage sites for Ganesha devotees. Shri Chintamani Vinayak is believed to remove obstacles and grant the wishes of those who offer prayers here."
    },
    {
        "title": "Shri Girijatmaja Temple, Lenyadri",
        "description": "Located on a hilltop, the Shri Girijatmaja Temple is dedicated to Lord Ganesha as Girijatmaja, the son of Parvati. Visitors enjoy the scenic beauty of the surroundings and the temple’s peaceful atmosphere."
    },
    {
        "title": "Shri Vighneshwar Temple, Ozar",
        "description": "In Ozar, the Shri Vighneshwar Temple is dedicated to Lord Ganesha in the form of Vighneshwar, the remover of obstacles. It is believed that visiting this temple ensures that all obstacles in life are removed and that success is achieved."
    },
    {
        "title": "Shri Mahaganapati Temple, Ranjangaon",
        "description": "The final stop on the Ashtavinayak Darshan circuit, Shri Mahaganapati Temple in Ranjangaon, is dedicated to Lord Mahaganapati. The temple’s divine energy is believed to bring peace, prosperity, and fulfillment to all devotees."
    }
],



"services": [
    {
      "name": "Cab for Ashtavinayak Darshan",
      "description": "For a peaceful and divine Ashtavinayak Darshan, Morya Cab offers comfortable and reliable taxi services from Pune. We ensure that your journey to the sacred temples is smooth and hassle-free, with professional drivers guiding you through the best routes. Choose Morya Cab for a stress-free trip to all eight revered temples."
    },
    {
      "name": "Ashtavinayak Darshan Package from Pune",
      "description": "Morya Cab provides an exclusive Ashtavinayak Darshan Package from Pune, allowing you to experience the spiritual journey with ease. This package includes visits to all the Ashtavinayak temples in a comfortable, well-maintained vehicle, ensuring a divine and serene experience throughout the journey."
    },
    {
      "name": "Ashtavinayak Darshan from Pune in 2 Days",
      "description": "If you're looking for a convenient Ashtavinayak Darshan from Pune in 2 Days, Morya Cab offers a special tour package that covers all the temples within two days. Our professional drivers will ensure that you make the most of your visit while providing comfort and safety."
    },
    {
      "name": "Pune to Ashtavinayak Taxi Service",
      "description": "For a smooth, reliable ride, book our Pune to Ashtavinayak Taxi Service. Our fleet of vehicles, including sedans, SUVs, and luxury cars, ensures that you travel in comfort and peace as you visit the holy temples. Whether it's a one-day trip or a longer stay, we offer the best taxi services tailored to your needs."
    },
    {
      "name": "Pune to Ashtavinayak Tour Package",
      "description": "Morya Cab provides a comprehensive Pune to Ashtavinayak Tour Package. This all-inclusive package covers transportation, expert drivers, and temple visit arrangements, allowing you to enjoy the Ashtavinayak Yatra without any worries. We ensure your trip is seamless and enjoyable from start to finish."
    },
    {
      "name": "Pune to Ashtavinayak Darshan Package",
      "description": "Our Pune to Ashtavinayak Darshan Package is perfect for those who want to experience the divine tour with convenience and comfort. This package includes a well-planned itinerary covering all the temples and professional drivers who ensure timely and smooth transfers."
    },
    {
      "name": "Cheapest Ashtavinayak Tour from Pune",
      "description": "Looking for an affordable option? Our Cheapest Ashtavinayak Tour from Pune offers budget-friendly packages without compromising on comfort. We aim to provide you with the best service at the most competitive rates, making your spiritual journey both affordable and memorable."
    },
    {
      "name": "Cheapest Tempo Traveller for Ashtavinayak Tour from Pune",
      "description": "Morya Cab offers the Cheapest Tempo Traveller for Ashtavinayak Tour from Pune, perfect for groups or families. With spacious seating and a comfortable interior, our tempo travellers are a great choice for group travel to the Ashtavinayak temples."
    },
    {
      "name": "Pune to Ashtavinayak Cab",
      "description": "Book a Pune to Ashtavinayak Cab with Morya Cab for a comfortable and safe ride. Our fleet of well-maintained vehicles, including cars and luxury options, ensures that your journey is smooth, and you can focus on the spiritual experience."
    },
    {
      "name": "Ashtavinayak Yatra Tour Cabs",
      "description": "Morya Cab offers Ashtavinayak Yatra Tour Cabs, designed to provide a divine and serene experience while visiting the eight temples of Lord Ganesha. Our professional drivers are well-versed with the routes, ensuring your visit is both peaceful and efficient."
    },
    {
      "name": "Pune to Ashtavinayak Tempo Traveller on Rent",
      "description": "For larger groups, we offer the Pune to Ashtavinayak Tempo Traveller on Rent, providing ample space and comfort for up to 12-16 passengers. It's the ideal option for families or friends traveling together for the Ashtavinayak Darshan."
    },
    {
      "name": "Pune to Ashtavinayak Mini Bus on Rent",
      "description": "If you're traveling with a larger group, Morya Cab also offers a Pune to Ashtavinayak Mini Bus on Rent. With enough space for up to 30 passengers, this service ensures that your entire group can travel together in comfort to the Ashtavinayak temples."
    },
    {
      "name": "Pune to Ashtavinayak 17-Seater Bus on Rent",
      "description": "For big groups, we offer the Pune to Ashtavinayak 17-Seater Bus on Rent. This option is perfect for families or large groups planning to visit the Ashtavinayak temples. Enjoy a comfortable and peaceful journey with enough space for everyone."
    },
    {
      "name": "Pune to Ashtavinayak Ertiga On Rent",
      "description": "For smaller groups, our Pune to Ashtavinayak Ertiga on Rent is the ideal choice. With a spacious interior and comfortable seating, the Ertiga offers a perfect travel experience for families or small groups visiting the Ashtavinayak temples."
    },
    {
      "name": "Ashtavinayak Tour from Pune by Car Package",
      "description": "Our Ashtavinayak Tour from Pune by Car Package offers a flexible and comfortable travel experience. Whether you prefer a one-day or two-day trip, this package provides an all-inclusive experience, including transportation, temple visits, and professional drivers."
    },
    {
      "name": "Pune to Ashtavinayak Innova Crysta on Rent",
      "description": "For those who prefer extra comfort, Morya Cab offers the Pune to Ashtavinayak Innova Crysta on Rent. This luxury vehicle is perfect for families or small groups who want a premium experience during their Ashtavinayak Yatra."
    },
    {
      "name": "Pune to Ashtavinayak Taxi Fare",
      "description": "The Pune to Ashtavinayak Taxi Fare varies depending on the vehicle you choose and the duration of your trip. Morya Cab offers competitive and transparent pricing, so you can be assured that there are no hidden costs. Contact us for a detailed fare estimate based on your requirements."
    },
    {
      "name": "Pune to Ashtavinayak Contact Information",
      "description": "For more details or to book your Pune to Ashtavinayak Cab service, contact Morya Cab at +91 9359401610. We ensure a comfortable and seamless experience for your Ashtavinayak Darshan, making your journey spiritually fulfilling and stress-free!"
    }
  ],



  tableData: [
    ["Cab for Ashtavinayak Darshan", "-Ashtavinayak Darshan Package from Pune"],
    ["Ashtavinayak Darshan from Pune in 2 days", "-Pune to Ashtavinayak Taxi Service"],
    ["Pune to Ashtavinayak Tour Package", "-Pune to Ashtavinayak Darshan Package"],
    ["Cheapest Ashtavinayak Tour from Pune", "-Cheapest Tempo Traveller for Ashtavinayak Tour from Pune"],
    ["Pune to Ashtavinayak Cab", "-Ashtavinayak Yatra Tour Cabs"],
    ["Pune to Ashtavinayak Tempo Traveller on Rent", "-Pune to Ashtavinayak Mini Bus on Rent"],
    ["Pune to Ashtavinayak 17 Seater Bus on Rent", "-Pune to Ashtavinayak Ertiga on Rent"],
    ["Ashtavinayak Tour from Pune by Car Package", "-Pune to Ashtavinayak Innova Crysta on Rent"],
    ["Pune to Ashtavinayak Taxi Fare", "-"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab offers prompt and dependable pickups for your Ashtavinayak Darshan journey. We understand the spiritual significance of this trip and ensure that you visit each of the eight temples with ease and on schedule."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a variety of vehicles, including sedans, SUVs, and premium cars, designed for comfort and relaxation. With spacious interiors, air conditioning, and comfortable seating, you can enjoy a smooth, peaceful ride as you visit the Ashtavinayak temples."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are knowledgeable about the Ashtavinayak circuit and the best routes to take. With years of experience, they provide a safe and smooth journey, ensuring that you have a hassle-free darshan experience at all eight temples."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive rates for your Ashtavinayak Darshan trip, with no hidden charges. We provide a clear and transparent pricing breakdown, so you can plan your journey with confidence, knowing the total cost upfront."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is our priority. Our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. You can rest assured that your journey will be secure and comfortable throughout."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available 24/7 for your Ashtavinayak Darshan journey. Whether you're planning an early morning trip or a late-night return, we’re always available to accommodate your travel needs."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Ashtavinayak Darshan cab is quick and easy. You can book through our website, mobile app, or by contacting our customer service team, who will assist you with any special requests or queries."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages tailored to your needs. Whether you’re traveling with a group or prefer a private, peaceful journey, we will ensure your trip is special and organized according to your preferences."
    }
]



        
















    }

    const faqData = [
        {
          question: "How can I book an Ashtavinayak Darshan cab with Morya Cab?",
          answer: "You can book your cab easily via our website, mobile app, or by contacting our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced with the Ashtavinayak circuit?",
          answer: "Yes, our drivers are familiar with the Ashtavinayak Darshan route and the timings of each temple, ensuring a smooth and well-timed trip."
        },
        {
          question: "What types of vehicles are available for Ashtavinayak Darshan travel?",
          answer: "We offer a range of vehicles including sedans, SUVs, and premium cars, all comfortable for long journeys."
        },
        {
          question: "How do I pay for my Ashtavinayak Darshan cab rental?",
          answer: "We offer multiple payment options, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip for Ashtavinayak Darshan?",
          answer: "Yes, you can book a round trip for the Ashtavinayak Darshan. Just provide us with your return details, and we will handle the rest of the planning."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be clearly communicated upfront, ensuring full transparency."
        },
        {
          question: "Can I hire a taxi for sightseeing after completing the Ashtavinayak Darshan?",
          answer: "Yes, we offer sightseeing services after completing your Ashtavinayak Darshan. Explore nearby attractions or take a break at any of the temples with the help of our experienced drivers."
        },
        {
          question: "What is the luggage allowance for an Ashtavinayak Darshan taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have more luggage or special requirements, please inform us during the booking process, and we’ll accommodate your needs."
        },
        {
          question: "Is Morya Cab available for group travel for Ashtavinayak Darshan?",
          answer: "Yes, we offer group travel packages for the Ashtavinayak Darshan, ensuring a comfortable and convenient journey for all passengers."
        },
        {
          question: "Why should I choose Morya Cab for my Ashtavinayak Darshan trip?",
          answer: "Morya Cab ensures a comfortable, safe, and affordable journey with experienced drivers, well-maintained vehicles, and excellent customer service. We guarantee a seamless darshan experience from start to finish."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Raghav Joshi',
          role: 'Traveler',
          review: "I booked Morya Cab for our family’s Ashtavinayak Darshan. The driver was punctual, and the vehicle was very comfortable. We were able to visit all the temples smoothly and with no stress. Highly recommend their service!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Suman Sharma',
          role: 'Traveler',
          review: "Our trip to the Ashtavinayak temples was made so much more special by Morya Cab. The driver was courteous and ensured we had plenty of time for darshan at each temple. We had a peaceful and enjoyable experience throughout the journey.",
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
        "@type": "TaxiService",
        "name": "Ashtavinayak Darshan Cab",
        "description": "Book a convenient and affordable taxi or tempo traveller from Pune for the Ashtavinayak Darshan Yatra. We offer customized Ashtavinayak tour packages, including 2-day trips, cab bookings, and car rentals to all eight Ashtavinayak temples.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9359401610",
        "url": "https://moryacab.com/ashtavinayak-darshan-cab",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/ashtavinayak-darshan-cab.jpg",
          "https://moryacab.com/img/ashtavinayak-tour.jpg"
        ],
        "priceRange": "₹8000 - ₹15000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/ashtavinayak-darshan-cab",
          "priceCurrency": "INR",
          "price": 12000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.9,
          "reviewCount": 320
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Suresh Patil"
            },
            "datePublished": "2024-11-25",
            "reviewBody": "Had a wonderful experience with the Ashtavinayak Darshan package. The cab was on time, and the driver was very knowledgeable. Highly recommend it for anyone planning this religious tour from Pune."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Mehta"
            },
            "datePublished": "2024-10-18",
            "reviewBody": "The 2-day Ashtavinayak tour was very well planned. Comfortable ride in an Innova Crysta and affordable pricing. I loved the trip and will definitely recommend it to others."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Ashtavinayak Darshan Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/ashtavinayak-darshan-cab"
        },
        "keywords": "Cab for Ashtavinayak Darshan, Ashtavinayak Darshan Package from Pune, Ashtavinayak Darshan from Pune in 2 Days, Pune to Ashtavinayak Taxi Service, Pune to Ashtavinayak Tour Package, Pune to Ashtavinayak Darshan Package, Cheapest Ashtavinayak Tour from Pune, Cheapest Tempo Traveller for Ashtavinayak Tour from Pune, Pune to Ashtavinayak Cab, Ashtavinayak Yatra Tour Cabs, Pune to Ashtavinayak Tempo Traveller on Rent, Pune to Ashtavinayak Mini Bus on Rent, Pune to Ashtavinayak 17-Seater Bus on Rent, Pune to Ashtavinayak Ertiga on Rent, Ashtavinayak Tour from Pune by Car Package, Pune to Ashtavinayak Innova Crysta on Rent, Pune to Ashtavinayak Taxi Fare"
      };
      


    return (
        <div>
            <UsePageTracking/>

            
<Helmet>
  <title>Ashtavinayak Darshan Cab | Affordable & Comfortable Yatra Packages from Pune | Call: +91 9359401610</title>
  <meta
    name="description"
    content="Book a comfortable taxi or tempo traveller from Pune for the Ashtavinayak Darshan Yatra. We offer customized 2-day tour packages, car rentals, and affordable taxis for your journey to all eight Ashtavinayak temples."
  />
  <meta
    name="keywords"
    content="Cab for Ashtavinayak Darshan, Ashtavinayak Darshan Package from Pune, Ashtavinayak Darshan from Pune in 2 Days, Pune to Ashtavinayak Taxi Service, Pune to Ashtavinayak Tour Package, Pune to Ashtavinayak Darshan Package, Cheapest Ashtavinayak Tour from Pune, Cheapest Tempo Traveller for Ashtavinayak Tour from Pune, Pune to Ashtavinayak Cab, Ashtavinayak Yatra Tour Cabs, Pune to Ashtavinayak Tempo Traveller on Rent, Pune to Ashtavinayak Mini Bus on Rent, Pune to Ashtavinayak 17-Seater Bus on Rent, Pune to Ashtavinayak Ertiga on Rent, Ashtavinayak Tour from Pune by Car Package, Pune to Ashtavinayak Innova Crysta on Rent, Pune to Ashtavinayak Taxi Fare"
  />
  <meta property="og:title" content="Ashtavinayak Darshan Cab | Morya Cabs" />
  <meta
    property="og:description"
    content="Book an affordable and comfortable taxi or tempo traveller from Pune for your Ashtavinayak Darshan tour. Explore all eight temples with well-planned packages."
  />
  <meta property="og:url" content="https://moryacab.com/ashtavinayak-darshan-cab" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://moryacab.com/img/ashtavinayak-darshan-cab.jpg" />
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
                            <img src='/images/keyword/56.jpg' alt='img' />
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

export default Ashtavinakaydarshancab;