
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetolonavalacabs() {



    const cardData =
    {
        keyword: 'Pune to Lonavala Cabs ',
        heading: 'Morya Cabs:  Pune to Lonavala Cabs    ',
        headingDescription: 'Planning a trip from Pune to Lonavala? Morya Cabs offers reliable, affordable, and comfortable taxi services for a smooth journey. Whether you are heading for a weekend getaway, a family vacation, or a one-day trip, our well-maintained cabs and professional drivers ensure a hassle-free travel experience. Book your cab online and enjoy a scenic drive through the lush green hills of Lonavala at competitive rates.',

        top: 'Top Places to Visit in Lonavala with Morya Cabs',

        topPlaces: [
            {
                "title": "Tiger’s Leap",
                "description": "One of the most famous viewpoints in Lonavala, Tiger’s Leap offers stunning views of the valley and waterfalls. Travel comfortably with Morya Cabs for an unforgettable experience."
            },
            {
                "title": "Bhushi Dam",
                "description": "A perfect spot for monsoon lovers, Bhushi Dam is known for its gushing water and natural beauty. Book a cab with Morya Cabs for a relaxing trip to this scenic attraction."
            },
            {
                "title": "Rajmachi Fort",
                "description": "A historical fort surrounded by greenery, Rajmachi Fort is a paradise for trekkers and history enthusiasts. Reach this iconic spot with ease by booking a cab with Morya Cabs."
            },
            {
                "title": "Lonavala Lake",
                "description": "A peaceful getaway surrounded by hills, Lonavala Lake is ideal for nature lovers and photographers. Enjoy a smooth ride to this beautiful lake with Morya Cabs."
            },
            {
                "title": "Karla Caves",
                "description": "One of the oldest Buddhist rock-cut caves in India, Karla Caves are known for their intricate carvings and historical significance. Morya Cabs ensures a comfortable visit to this ancient site."
            },
            {
                "title": "Bhaja Caves",
                "description": "Another set of stunning rock-cut caves, Bhaja Caves feature beautiful sculptures and inscriptions. Explore this heritage site conveniently with Morya Cabs."
            },
            {
                "title": "Duke’s Nose",
                "description": "A popular spot for trekking and adventure sports, Duke’s Nose offers breathtaking views of the surrounding landscape. Book your ride with Morya Cabs for an adventurous trip."
            },
            {
                "title": "Pawna Lake",
                "description": "Famous for camping and lakeside picnics, Pawna Lake is a perfect destination for a relaxing retreat. Morya Cabs provides a hassle-free journey to this peaceful location."
            },
            {
                "title": "Ryewood Park",
                "description": "A beautifully maintained garden with tall trees and lush greenery, Ryewood Park is ideal for a quiet evening stroll. Travel comfortably with Morya Cabs for a refreshing visit."
            },
            {
                "title": "Lohagad Fort",
                "description": "A well-preserved fort offering panoramic views and a rich history, Lohagad Fort is a must-visit for nature and history lovers. Enjoy a smooth and scenic drive with Morya Cabs."
            }
        ],



"services": [
    {
        "name": "Pune to Lonavala Cab Booking",
        "description": "Morya Cab offers a convenient and hassle-free cab booking service from Pune to Lonavala. Whether you’re planning a weekend getaway or a quick day trip, we ensure that your journey to Lonavala is comfortable and stress-free. Our well-maintained vehicles and professional drivers will ensure a smooth ride."
    },
    {
        "name": "Taxi from Pune to Lonavala Karla Caves",
        "description": "Explore the historical Karla Caves with Morya Cab's reliable taxi service. Book a taxi from Pune to Lonavala for a comfortable ride to these famous caves, which offer a glimpse into ancient Buddhist architecture and stunning views of the surroundings."
    },
    {
        "name": "Pune to Lonavala Car Hire",
        "description": "If you prefer to hire a car for your trip to Lonavala, Morya Cab provides flexible car hire options. Choose from a variety of vehicles, and enjoy the flexibility to travel at your own pace while exploring Lonavala’s beautiful sights."
    },
    {
        "name": "Pune to Lonavala Cab Rental",
        "description": "Morya Cab offers affordable cab rental services for your Pune to Lonavala journey. Whether it’s a one-way trip or a round trip, we have rental options to suit your needs, allowing you to travel comfortably and conveniently."
    },
    {
        "name": "Pune to Lonavala Cab Price",
        "description": "Morya Cab provides transparent and competitive pricing for your Pune to Lonavala trip. We ensure there are no hidden charges and offer clear fare details so you can plan your journey with ease. Contact us for an accurate estimate."
    },
    {
        "name": "Pune to Lonavala Taxi Fare",
        "description": "Morya Cab’s taxi fare from Pune to Lonavala is reasonable and affordable, ensuring that you get the best value for your money. Whether you're traveling for leisure or business, our taxi services are both budget-friendly and reliable."
    },
    {
        "name": "Book Cab from Pune to Lonavala",
        "description": "Booking a cab from Pune to Lonavala is quick and easy with Morya Cab. You can book your taxi online or over the phone, and we’ll make sure your ride is punctual and comfortable. Book your cab today and enjoy a seamless travel experience."
    },
    {
        "name": "Pune to Lonavala Travel by Taxi to Kune Falls",
        "description": "Kune Falls is one of the most popular attractions in Lonavala, and Morya Cab provides a smooth and comfortable taxi ride to this picturesque waterfall. Enjoy a scenic journey and reach Kune Falls in comfort, surrounded by nature."
    },
    {
        "name": "Pune to Lonavala Cabs",
        "description": "Morya Cab offers a variety of cab options for your Pune to Lonavala trip. Whether you’re traveling solo or with a group, our taxis are well-maintained and driven by experienced drivers, ensuring a safe and enjoyable journey."
    },
    {
        "name": "Pune to Lonavala Cab Tour Package",
        "description": "For a more comprehensive Lonavala experience, Morya Cab offers a cab tour package that takes you to all the popular attractions in Lonavala, including Bhushi Dam, Kune Falls, and more. Customize your itinerary and enjoy a guided tour with us."
    },
    {
        "name": "Pune to Lonavala Taxi Fare",
        "description": "Morya Cab offers competitive taxi fares for your journey from Pune to Lonavala. We offer both one-way and round-trip taxi fares, making sure you get the best deal for a comfortable and hassle-free journey."
    },
    {
        "name": "Pune Airport to Lonavala Taxi Fare",
        "description": "If you're arriving at Pune Airport and need a taxi to Lonavala, Morya Cab offers affordable taxi services. Our drivers will meet you at the airport and ensure that you have a smooth and relaxing ride to your destination in Lonavala."
    },
    {
        "name": "Book Cab From Pune to Lonavala",
        "description": "Booking a cab from Pune to Lonavala with Morya Cab is easy and hassle-free. Simply book online or contact us directly for the best taxi services. We provide the perfect cab for your needs and offer flexible travel options."
    },
    {
        "name": "Cab Fare from Pune to Lonavala",
        "description": "Morya Cab provides clear and upfront fare details for your Pune to Lonavala cab ride. We ensure that our pricing is transparent, allowing you to plan your trip without any surprise charges."
    },
    {
        "name": "Cab Service From Pune to Lonavala",
        "description": "Morya Cab’s cab services from Pune to Lonavala are reliable, comfortable, and affordable. We ensure that you travel in comfort, with professional drivers who are well-versed in the best routes to Lonavala."
    },
    {
        "name": "Hinjewadi to Lonavala Taxi Fare",
        "description": "For those traveling from Hinjewadi to Lonavala, Morya Cab offers competitive taxi fares. Whether you're going for a short visit or an extended stay, our taxis are affordable and well-maintained for your convenience."
    },
    {
        "name": "Lonavala to Bhimashankar Taxi",
        "description": "Morya Cab also provides taxi services from Lonavala to Bhimashankar. Our professional drivers ensure a smooth and safe ride to the Bhimashankar Temple, one of the most popular pilgrimage sites near Lonavala."
    },
    {
        "name": "Lonavala to Matheran Taxi Fare",
        "description": "Morya Cab offers affordable and reliable taxi services from Lonavala to Matheran. We ensure a comfortable and enjoyable ride to this charming hill station, known for its scenic beauty and pleasant weather."
    },
    {
        "name": "Lonavala to Pune Cab Service",
        "description": "If you’re traveling from Lonavala to Pune, Morya Cab provides reliable and comfortable cab services. Our experienced drivers will ensure that your journey is smooth, timely, and enjoyable."
    },
    {
        "name": "Lonavala to Pune Taxi",
        "description": "Morya Cab also offers taxi services from Lonavala to Pune. Whether it's a one-way trip or round trip, our taxis are affordable and reliable, making sure that your ride is smooth and enjoyable from start to finish."
    },
    {
        "name": "Contact Information for Pune to Lonavala Cab Services",
        "description": "For booking your Pune to Lonavala cab or for any inquiries, contact Morya Cab at +91 9371304510. Our prompt and reliable service ensures a smooth and comfortable journey to Lonavala. Book your cab today and experience the best ride!"
    }
],



tableData: [
    ["Pune to Lonavala cab booking", "-Taxi from Pune to Lonavala Karla caves"],
    ["Pune to Lonavala Car Hire", "-Pune to Lonavala Cab Rental"],
    ["Pune to Lonavala cab price", "-Pune to Lonavala taxi fare"],
    ["Book cab from Pune to Lonavala", "-Pune to Lonavala travel by taxi to kune falls"],
    ["Pune to Lonavala Cabs", "-Pune to Lonavala Cab Tour Package"],
    ["Pune to Lonavala Taxi Fare", "-Pune Airport to Lonavala Taxi Fare"],
    ["Book Cab From Pune to Lonavala", "-Cab Fare from Pune to Lonavala"],
    ["Cab Service From Pune to Lonavala", "-Hinjewadi to Lonavala Taxi fare"],
    ["Lonavala to Bhimashankar Taxi", "-Lonavala to Matheran Taxi Fare"],
    ["Lonavala to Pune Cab Service", "-Lonavala to Pune Taxi"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab offers prompt and reliable service from Pune to Lonavala. Whether it’s a quick getaway or a weekend vacation, our drivers ensure timely pickups and drop-offs to keep your trip stress-free and on schedule."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Travel in comfort with our fleet of well-maintained vehicles, including sedans, SUVs, and premium cars. Enjoy spacious seating, air conditioning, and a smooth ride as you make your way from Pune to Lonavala, ensuring a comfortable journey."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our professional drivers are well-versed in handling long-distance trips. They are familiar with the best routes to Lonavala, ensuring your journey is safe, comfortable, and efficient. With Morya Cab, you’re in good hands every time."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "At Morya Cab, we believe in providing competitive pricing without hidden charges. We offer transparent and clear fare breakdowns upfront, so you know exactly what to expect, ensuring a hassle-free experience from start to finish."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is our top priority. Our vehicles are equipped with modern safety features like airbags, seat belts, and GPS tracking to ensure a secure and comfortable ride from Pune to Lonavala."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "No matter the time of day or night, Morya Cab is available 24/7. Whether you're planning an early morning trip or a late-night return, our customer service team is always available to assist you with bookings and queries."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a Pune to Lonavala cab is quick and easy with Morya Cab! You can book online via our website, use our mobile app, or contact our customer service for assistance. We make sure the booking process is smooth and simple."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're visiting Lonavala for leisure, sightseeing, or a family vacation, we offer customized travel packages tailored to suit your preferences. Let us know your requirements, and we will create a perfect trip for you."
    }
]














    }

    const faqData = [
        {
          question: "How can I book a Pune to Lonavala cab with Morya Cab?",
          answer: "Booking is simple! You can book a cab through our website, mobile app, or contact our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced in long-distance trips, including the route from Pune to Lonavala, ensuring a smooth and safe journey."
        },
        {
          question: "What types of vehicles are available for Pune to Lonavala travel?",
          answer: "We offer a range of vehicles, including sedans, SUVs, and premium cars, all designed to provide maximum comfort and space for your journey."
        },
        {
          question: "How do I pay for my Pune to Lonavala cab rental?",
          answer: "We accept multiple payment methods, including cash, credit/debit cards, and online payments through our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Lonavala?",
          answer: "Yes! Round trips can be arranged. Simply provide us with your return details, and we will ensure a seamless and comfortable journey back."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges, such as waiting time or detours, will be communicated clearly to you beforehand, ensuring complete transparency in our pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Lonavala?",
          answer: "Yes, we offer sightseeing tours in Lonavala, allowing you to explore popular attractions like Bhushi Dam, Tiger’s Leap, and the Lonavala Lake. Just let us know your preferences!"
        },
        {
          question: "What is the luggage allowance for a Pune to Lonavala taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have additional luggage or special requirements, let us know during the booking process, and we’ll arrange accordingly."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Lonavala?",
          answer: "Yes, Morya Cab offers corporate travel services for business meetings, conferences, and group transport between Pune and Lonavala."
        },
        {
          question: "Why should I choose Morya Cab for my Pune to Lonavala trip?",
          answer: "Morya Cab ensures a safe, comfortable, and affordable journey with professional drivers, well-maintained vehicles, and excellent customer service, making it the ideal choice for your Pune to Lonavala trip."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Sanjay Mehta',
          role: 'Weekend Traveller',
          review: 'I booked a cab for a weekend getaway from Pune to Lonavala with Morya Cab. The car was comfortable and clean, and the driver was very professional. We had a smooth and enjoyable ride. Highly recommend!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Neha Joshi',
          role: 'Family Traveller',
          review: 'Our family used Morya Cab for a trip to Lonavala. The vehicle was spacious and comfortable, and the driver was friendly and knowledgeable. We had a wonderful trip and will definitely use Morya Cab again.',
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
        "name": "Pune to Lonavala Cabs",
        "description": "Book reliable and affordable Pune to Lonavala cabs with Morya Cabs. We offer taxi services to popular attractions like Karla Caves, Kune Falls, and more. We also provide cab rental options for a complete tour of Lonavala.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9371304510",
        "url": "https://moryacab.com/pune-to-lonavala-cabs",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-to-lonavala-cab.jpg",
          "https://moryacab.com/img/karla-caves.jpg"
        ],
        "priceRange": "₹1500 - ₹3000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-lonavala-cabs",
          "priceCurrency": "INR",
          "price": 2500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "reviewCount": 200
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Amit Deshmukh"
            },
            "datePublished": "2024-11-10",
            "reviewBody": "Fantastic experience with Morya Cabs! We had a wonderful trip from Pune to Lonavala. The car was clean and the driver was very friendly. We visited Karla Caves and Kune Falls, highly recommend!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sneha Shah"
            },
            "datePublished": "2024-08-25",
            "reviewBody": "We booked a cab to Lonavala for a weekend trip, and Morya Cabs made it seamless. The driver was punctual, and the cab was in excellent condition. Loved the visit to Lonavala and the scenic ride!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Lonavala Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.7401,
            "longitude": 73.4086
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-lonavala-cabs"
        },
        "keywords": "Pune to Lonavala cab booking, Taxi from Pune to Lonavala Karla caves, Pune to Lonavala Car Hire, Pune to Lonavala Cab Rental, Pune to Lonavala cab price, Pune to Lonavala taxi fare, Book cab from Pune to Lonavala, Pune to Lonavala travel by taxi to Kune Falls, Pune to Lonavala Cabs, Pune to Lonavala Cab Tour Package, Pune to Lonavala Taxi Fare, Pune Airport to Lonavala Taxi Fare, Book Cab From Pune to Lonavala, Cab Fare from Pune to Lonavala, Cab Service From Pune to Lonavala, Hinjewadi to Lonavala Taxi fare, Lonavala to Bhimashankar Taxi, Lonavala to Matheran Taxi Fare, Lonavala to Pune Cab Service, Lonavala to Pune Taxi, Pune to Lonavala Cab Booking, Pune to Lonavala Cab Charges, Pune to Lonavala Cab Cost, Pune to Lonavala Taxi Service"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Lonavala Cabs | Affordable & Reliable Taxi Service | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Book your Pune to Lonavala cabs with Morya Cabs. We provide taxi services to Karla Caves, Kune Falls, and more. Affordable and convenient cabs available for sightseeing tours and other travel needs."
  />
  <meta
    name="keywords"
    content="Pune to Lonavala cab booking, Taxi from Pune to Lonavala Karla caves, Pune to Lonavala Car Hire, Pune to Lonavala Cab Rental, Pune to Lonavala cab price, Pune to Lonavala taxi fare, Book cab from Pune to Lonavala, Pune to Lonavala travel by taxi to Kune Falls, Pune to Lonavala Cabs, Pune to Lonavala Cab Tour Package, Pune to Lonavala Taxi Fare, Pune Airport to Lonavala Taxi Fare, Book Cab From Pune to Lonavala, Cab Fare from Pune to Lonavala, Cab Service From Pune to Lonavala, Hinjewadi to Lonavala Taxi fare, Lonavala to Bhimashankar Taxi, Lonavala to Matheran Taxi Fare, Lonavala to Pune Cab Service, Lonavala to Pune Taxi, Pune to Lonavala Cab Booking, Pune to Lonavala Cab Charges, Pune to Lonavala Cab Cost, Pune to Lonavala Taxi Service"
  />
  <meta property="og:title" content="Pune to Lonavala Cabs | Morya Cabs" />
  <meta
    property="og:description"
    content="Book Pune to Lonavala cabs with Morya Cabs for a smooth and scenic journey. Visit top attractions like Karla Caves, Kune Falls, and more with affordable and reliable taxi services."
  />
  <meta property="og:url" content="https://moryacab.com/pune-to-lonavala-cabs" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://moryacab.com/img/pune-to-lonavala-cab.jpg" />
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
                            <img src='/images/keyword/46.jpg' alt='img' />
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

export default Punetolonavalacabs;