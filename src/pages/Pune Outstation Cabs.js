
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetooutstationcabs() {



    const cardData =
    {
        keyword: 'Pune Outstation Cabs  ',
        heading: 'Morya Cabs:  Pune Outstation Cabs ',
        headingDescription: 'Looking for a comfortable, affordable, and reliable taxi service for your outstation trips from Pune? Morya Cabs offers the best outstation cab services from Pune to various destinations across Maharashtra and beyond. Whether you are planning a family vacation, a business trip, or a weekend getaway, we ensure a hassle-free travel experience with our well-maintained fleet and experienced drivers. Book your outstation cab online and travel in comfort and style to your destination with Morya Cabs.',

        top: 'Top Outstation Destinations from Pune with Morya Cabs',

      "topPlaces": [
    {
        "title": "Pune to Mumbai",
        "description": "Mumbai, the bustling metropolis and the financial capital of India, is only a few hours away from Pune. Whether it's for a business meeting or a weekend escape, Morya Cabs provides the most reliable cab services to and from Mumbai."
    },
    {
        "title": "Pune to Shirdi",
        "description": "Shirdi, the sacred town known for the Shirdi Sai Baba Temple, is a popular pilgrimage destination. With Morya Cabs, enjoy a smooth and comfortable ride to Shirdi, making your spiritual journey peaceful and enjoyable."
    },
    {
        "title": "Pune to Mahabaleshwar",
        "description": "Nestled in the Western Ghats, Mahabaleshwar is a scenic hill station known for its pleasant weather, viewpoints, and strawberry farms. Book your Pune to Mahabaleshwar cab with Morya Cabs for a relaxing drive and picturesque views."
    },
    {
        "title": "Pune to Lonavala",
        "description": "Lonavala, with its lush greenery, hills, and waterfalls, is one of the best weekend getaway spots from Pune. Whether it's a short trip or a longer stay, Morya Cabs ensures a comfortable ride to this beautiful destination."
    },
    {
        "title": "Pune to Kolhapur",
        "description": "Kolhapur is famous for its historic temples, particularly the Mahalaxmi Temple, and delicious Kolhapuri cuisine. Morya Cabs offers a smooth, reliable ride to this charming city with the best services."
    },
    {
        "title": "Pune to Alibaug",
        "description": "For a beach vacation, Alibaug is the perfect choice with its scenic coastline and historic forts. Morya Cabs provides comfortable rides to Alibaug for those looking to unwind and enjoy the sun and sea."
    },
    {
        "title": "Pune to Nashik",
        "description": "Known for its vineyards and temples, Nashik is a popular destination for wine tours and spiritual visits. Morya Cabs offers efficient Pune to Nashik cab services for a relaxed, scenic ride to this charming city."
    },
    {
        "title": "Pune to Goa",
        "description": "Goa, with its beautiful beaches, vibrant culture, and nightlife, is one of the most sought-after vacation spots. Morya Cabs offers the best Pune to Goa cab services for a comfortable and enjoyable journey to this coastal paradise."
    },
    {
        "title": "Pune to Ratnagiri",
        "description": "Ratnagiri is a coastal town with beautiful beaches, historical forts, and the birthplace of the famous freedom fighter, Lokmanya Tilak. Book your Pune to Ratnagiri cab with Morya Cabs and experience a peaceful drive to this beautiful region."
    },
    {
        "title": "Pune to Lavasa",
        "description": "Lavasa, a well-planned hill city, is an ideal destination for a quick escape from the city life. Known for its picturesque lakeside views and adventure activities, Morya Cabs ensures a relaxing ride to Lavasa for a refreshing retreat."
    }
],



"services": [
    {
      "name": "Pune Outstation Cab Services",
      "description": "Morya Cab provides top-notch Pune Outstation Cab Services, ensuring that your outstation journey is both comfortable and affordable. Whether you’re traveling for leisure or business, our professional drivers and well-maintained vehicles offer a seamless travel experience to any destination outside Pune."
    },
    {
      "name": "Pune Outstation Taxi Booking",
      "description": "Booking an outstation taxi from Pune is easy and quick with Morya Cab. We offer Pune Outstation Taxi Booking options to suit your schedule. Whether you need a one-way ride or a round trip, we guarantee prompt service and hassle-free booking."
    },
    {
      "name": "Pune Outstation Car Rental",
      "description": "For those looking for flexibility during their outstation travel, Morya Cab provides Pune Outstation Car Rental services. Choose from a variety of vehicles and rent a car that best suits your travel needs. Drive at your own pace and enjoy your journey in comfort."
    },
    {
      "name": "Pune Outstation Chauffeur-Driven Cabs",
      "description": "Experience a stress-free ride with Pune Outstation Chauffeur-Driven Cabs from Morya Cab. Our experienced drivers are familiar with the best routes, ensuring a smooth and enjoyable trip to your outstation destination. Sit back and relax while we take care of the driving."
    },
    {
      "name": "Pune Outstation One-Way Taxi",
      "description": "Morya Cab offers Pune Outstation One-Way Taxi services for travelers looking for a direct and convenient ride to their destination. Whether you’re traveling to a nearby city or a distant destination, our one-way taxis are affordable and reliable."
    },
    {
      "name": "Pune Outstation Round Trip Cabs",
      "description": "For a complete journey, Morya Cab offers Pune Outstation Round Trip Cabs. Our round-trip services are designed for your convenience, ensuring a comfortable and timely return. Let us take care of your travel arrangements, so you can focus on enjoying your trip."
    },
    {
      "name": "Pune Outstation Luxury Taxi",
      "description": "Travel in style and comfort with our Pune Outstation Luxury Taxi services. Perfect for special occasions or a luxurious trip, our luxury taxis offer extra space, premium amenities, and top-notch comfort for your outstation journey."
    },
    {
      "name": "Pune Outstation Self-Drive Car Rental",
      "description": "If you prefer driving yourself, Morya Cab provides Pune Outstation Self-Drive Car Rental services. Choose from a wide range of vehicles and explore the road on your own terms while enjoying the freedom of self-drive."
    },
    {
      "name": "Pune Outstation Travel Packages",
      "description": "Morya Cab offers Pune Outstation Travel Packages that include transport, sightseeing, and more. Our packages are designed to give you a comprehensive and enjoyable travel experience, whether you're heading to a popular tourist destination or an offbeat location."
    },
    {
      "name": "Pune Outstation Private Car Hire",
      "description": "For those who prefer a more personalized experience, Morya Cab offers Pune Outstation Private Car Hire services. Hire a private car with a professional driver to travel at your own pace and enjoy the comfort and privacy of your journey."
    },
    {
      "name": "Pune Outstation Cabs",
      "description": "Morya Cab offers reliable Pune Outstation Cabs for all types of travel. From short weekend getaways to long-distance trips, our cabs are available for all your outstation needs. Enjoy a safe and comfortable journey, no matter the destination."
    },
    {
      "name": "Outstation Taxi Service Pune",
      "description": "Morya Cab provides Outstation Taxi Service in Pune, ensuring that you have a comfortable and timely journey to your outstation destination. We offer a range of vehicles to cater to different group sizes and travel preferences."
    },
    {
      "name": "One Way Cab Pune",
      "description": "If you need a one-way ride to your destination, Morya Cab offers One Way Cab Pune services. Our one-way cabs are affordable, reliable, and provide you with a direct ride to your destination, without the need for a round-trip booking."
    },
    {
      "name": "Best Outstation Cab Service in Pune",
      "description": "Morya Cab is known for offering the Best Outstation Cab Service in Pune. With well-maintained vehicles, experienced drivers, and competitive prices, we ensure that your outstation trip is smooth, comfortable, and affordable."
    },
    {
      "name": "Outstation Car Rental Pune",
      "description": "For those seeking flexibility, Morya Cab offers Outstation Car Rental Pune services. Rent a car for your outstation journey and enjoy a personalized travel experience, with the freedom to travel at your own pace."
    },
    {
      "name": "Taxi in Pune for Outstation",
      "description": "If you're planning an outstation trip from Pune, Morya Cab provides Taxi in Pune for Outstation services. Whether you’re traveling alone or with a group, we offer reliable and affordable taxis to any destination outside Pune."
    },
    {
      "name": "Taxi Service in Pune for Outstation",
      "description": "Morya Cab offers Taxi Service in Pune for Outstation with the assurance of comfortable rides and professional drivers. Whether you're heading for a family vacation or business trip, we ensure a smooth journey from Pune to your chosen outstation destination."
    },
    {
      "name": "Book Outstation Cabs Pune",
      "description": "Booking Outstation Cabs in Pune with Morya Cab is quick and simple. Whether you're looking for a one-way taxi or a round-trip ride, we provide competitive prices, experienced drivers, and comfortable vehicles for your outstation travel needs."
    },
    {
      "name": "Cab Booking in Pune for Outstation",
      "description": "When you need to Book Outstation Cabs in Pune, Morya Cab is your go-to choice. We offer easy booking options, transparent pricing, and a variety of vehicles to suit your travel requirements. Our cabs ensure a comfortable ride to your outstation destination."
    },
    {
      "name": "Outstation Taxi in Pune",
      "description": "Morya Cab provides Outstation Taxi in Pune, offering both one-way and round-trip services. Travel with confidence knowing that we’ll get you to your destination safely and comfortably."
    },
    {
      "name": "Outstation Taxi Service in Pune",
      "description": "Morya Cab’s Outstation Taxi Service in Pune ensures that you have a reliable and comfortable travel experience. Our taxis are well-maintained, and our drivers are experienced, making your outstation journey seamless and enjoyable."
    },
    {
      "name": "Pune Airport to Kolhapur Cab",
      "description": "Morya Cab offers efficient Pune Airport to Kolhapur Cab services. Our professional drivers ensure that you reach your destination comfortably and on time, whether you're traveling for business or leisure."
    },
    {
      "name": "Pune Car Rental Outstation",
      "description": "For your next outstation trip from Pune, Morya Cab provides Pune Car Rental Outstation services. Choose from a range of vehicles, from economy cars to luxury options, to make your journey more comfortable and enjoyable."
    },
    {
      "name": "Pune to Gokarna Cab",
      "description": "Morya Cab offers reliable and affordable Pune to Gokarna Cab services. Whether you're going for a spiritual trip or just to enjoy the beach, our cabs ensure a smooth and enjoyable journey to Gokarna."
    },
    {
      "name": "Pune to Outstation Taxi",
      "description": "For all your outstation travel needs, Morya Cab provides convenient Pune to Outstation Taxi services. We ensure timely departures and smooth rides, offering a variety of vehicles to suit your preferences."
    },
    {
      "name": "Contact Information for Pune Outstation Cab Services",
      "description": "For more details or to book your Pune Outstation Cab, contact Morya Cab at +91 9371304510. We are committed to offering reliable, comfortable, and affordable outstation travel services, ensuring that your journey is hassle-free and enjoyable. Book your outstation taxi today!"
    }
  ],



  tableData: [
    ["Pune Outstation Cab Services", "-Pune Outstation Taxi Booking"],
    ["Pune Outstation Car Rental", "-Pune Outstation Chauffeur-Driven Cabs"],
    ["Pune Outstation One-Way Taxi", "-Pune Outstation Round Trip Cabs"],
    ["Pune Outstation Luxury Taxi", "-Pune Outstation Self-Drive Car Rental"],
    ["Pune Outstation Travel Packages", "-Pune Outstation Private Car Hire"],
    ["Pune Outstation Cabs", "-Outstation Taxi Service Pune"],
    ["One Way Cab Pune", "-Best Outstation Cab Service in Pune"],
    ["Outstation Cab Service in Pune", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab offers punctual and dependable outstation taxi services from Pune to various destinations. Our drivers ensure timely pickups and drop-offs, giving you peace of mind throughout your journey, whether you're traveling for business or leisure."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a range of vehicles, including sedans, SUVs, and premium cars, all well-maintained and designed for your comfort. With spacious interiors, air conditioning, and comfortable seating, you can sit back and enjoy your long-distance travel in comfort."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced and skilled in handling outstation journeys. They are well-versed in the best routes and prioritize your safety, ensuring a smooth and relaxed ride. You can trust our professional drivers to make your journey hassle-free."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab provides competitive and transparent pricing for outstation trips. We offer affordable rates with no hidden charges, and you’ll receive a clear breakdown of the cost, so you know exactly what to expect."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking, ensuring a secure and comfortable journey from Pune to your outstation destination."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available around the clock, so you can book your outstation trip at any time that suits your schedule. Whether it’s an early morning departure or a late-night return, we’ll be there to accommodate your needs."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune outstation cab with Morya Cab is easy! You can book through our website, mobile app, or by contacting our customer service team, who will assist you with any queries or special requests."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We understand that every trip is unique. Whether you’re traveling for business, a family vacation, or a spiritual journey, we offer customized outstation travel packages to suit your specific needs. Let us know your preferences, and we’ll create a personalized plan for your journey."
    }
]

        
















    }

    const faqData = [
        {
          question: "How can I book a Pune outstation cab with Morya Cab?",
          answer: "You can easily book your ride through our website, mobile app, or by calling our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are highly experienced in handling outstation journeys, ensuring a safe and smooth ride."
        },
        {
          question: "What types of vehicles are available for Pune outstation travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all designed for comfort and convenience during long trips."
        },
        {
          question: "How do I pay for my Pune outstation cab rental?",
          answer: "We offer multiple payment options, including cash, credit/debit cards, and online payments through our app, making payment convenient and secure."
        },
        {
          question: "Can I book a round trip for an outstation journey from Pune?",
          answer: "Yes, we offer round trip services for outstation travel. Just provide us with your return details, and we’ll handle the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "If there are any extra charges for waiting time or detours, these will be communicated to you upfront, ensuring transparency in our pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing during my outstation trip?",
          answer: "Yes, we offer sightseeing tours during your outstation journey. Explore popular destinations and landmarks with the help of our experienced drivers."
        },
        {
          question: "What is the luggage allowance for a Pune outstation taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have additional luggage or special requirements, just let us know during the booking process, and we’ll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate outstation travel?",
          answer: "Yes, we offer corporate travel services for business trips, group travel, or any corporate-related needs, ensuring comfort and efficiency during your outstation travel."
        },
        {
          question: "Why should I choose Morya Cab for my Pune outstation trip?",
          answer: "Morya Cab offers reliable, safe, and comfortable outstation taxi services with experienced drivers, affordable pricing, and excellent customer service, making it the perfect choice for your journey."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Amit Deshmukh',
          role: 'Traveler',
          review: "I booked an outstation cab with Morya Cab for a trip from Pune to Goa. The driver was punctual, the vehicle was comfortable, and the journey was smooth. I’ll definitely use their service again for my next trip.",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Priya Yadav',
          role: 'Family Traveler',
          review: "Our family used Morya Cab for an outstation trip to Lonavala. The vehicle was spacious and well-maintained, and the driver was professional and courteous. The whole experience was wonderful, and we will definitely choose Morya Cab for our next outstation journey.",
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
        "name": "Pune Outstation Cabs",
        "description": "Book reliable and affordable outstation cabs from Pune. We offer one-way, round trip, luxury taxis, chauffeur-driven cabs, and self-drive car rentals for your outstation journeys, including services to Kolhapur, Gokarna, and other destinations.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9371304510",
        "url": "https://moryacab.com/pune-outstation-cabs",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-outstation-cabs.jpg",
          "https://moryacab.com/img/outstation-cab-service.jpg"
        ],
        "priceRange": "₹3000 - ₹12000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-outstation-cabs",
          "priceCurrency": "INR",
          "price": 5000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "reviewCount": 180
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Karan Patel"
            },
            "datePublished": "2024-12-10",
            "reviewBody": "Morya Cabs made our outstation trip a breeze. We booked a one-way taxi to Kolhapur, and the driver was professional, the car was clean and comfortable, and the pricing was fair. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Meera Iyer"
            },
            "datePublished": "2024-11-23",
            "reviewBody": "Fantastic experience! The round trip to Gokarna was hassle-free. The driver was courteous and knowledgeable. Morya Cabs is now my go-to service for outstation travel."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune Outstation Cab Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-outstation-cabs"
        },
        "keywords": "Pune Outstation Cab Services, Pune Outstation Taxi Booking, Pune Outstation Car Rental, Pune Outstation Chauffeur-Driven Cabs, Pune Outstation One-Way Taxi, Pune Outstation Round Trip Cabs, Pune Outstation Luxury Taxi, Pune Outstation Self-Drive Car Rental, Pune Outstation Travel Packages, Pune Outstation Private Car Hire, Pune Outstation Cabs, Outstation Taxi Service Pune, One Way Cab Pune, Best Outstation Cab Service in Pune, Outstation Cab Service in Pune, Outstation Car Rental Pune, Taxi in Pune for Outstation, Taxi Service in Pune for Outstation, Book Outstation Cabs Pune, Cab Booking in Pune for Outstation, Outstation Taxi in Pune, Outstation Taxi Service in Pune, Pune Airport to Kolhapur Cab, Pune Car Rental Outstation, Pune to Gokarna Cab"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune Outstation Cabs | Reliable Outstation Taxi Services | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Book reliable and affordable outstation cabs from Pune. We offer one-way, round trip, luxury taxis, chauffeur-driven cabs, and self-drive rentals for your outstation travel needs."
  />
  <meta
    name="keywords"
    content="Pune Outstation Cab Services, Pune Outstation Taxi Booking, Pune Outstation Car Rental, Pune Outstation Chauffeur-Driven Cabs, Pune Outstation One-Way Taxi, Pune Outstation Round Trip Cabs, Pune Outstation Luxury Taxi, Pune Outstation Self-Drive Car Rental, Pune Outstation Travel Packages, Pune Outstation Private Car Hire, Pune Outstation Cabs, Outstation Taxi Service Pune, One Way Cab Pune, Best Outstation Cab Service in Pune, Outstation Cab Service in Pune, Outstation Car Rental Pune, Taxi in Pune for Outstation, Taxi Service in Pune for Outstation, Book Outstation Cabs Pune, Cab Booking in Pune for Outstation, Outstation Taxi in Pune, Outstation Taxi Service in Pune, Pune Airport to Kolhapur Cab, Pune Car Rental Outstation, Pune to Gokarna Cab"
  />
  <meta property="og:title" content="Pune Outstation Cabs | Morya Cabs" />
  <meta
    property="og:description"
    content="Book your Pune outstation cab with Morya Cabs. Choose from one-way, round trip, and luxury taxis to travel to destinations like Kolhapur, Gokarna, and more. Convenient booking and affordable pricing."
  />
  <meta property="og:url" content="https://moryacab.com/pune-outstation-cabs" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://moryacab.com/img/pune-outstation-cabs.jpg" />
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
                            <img src='/images/keyword/53.jpg' alt='img' />
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

export default Punetooutstationcabs;