
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetonashiktrimbkeshwer() {



    const cardData =
    {
        keyword: 'Pune to Nashik-Trimbakeshwar Taxi   ',
        heading: 'Morya Cabs:  Pune to Nashik-Trimbakeshwar Taxi  ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Nashik-Trimbakeshwar. Whether you are traveling for a spiritual visit, a peaceful retreat, or a weekend getaway, our well-maintained fleet and professional drivers ensure a smooth and hassle-free journey. Pune to Nashik-Trimbakeshwar is approximately 220 km, and the journey takes around 5 to 6 hours by road. Enjoy a safe and comfortable ride with our top-notch amenities and customer-centric service.',

        top: 'Top Places to Visit in Nashik-Trimbakeshwar with Morya Cabs',

      "topPlaces": [
    {
        "title": "Trimbakeshwar Temple",
        "description": "Trimbakeshwar Temple, located in Trimbak, is one of the twelve Jyotirlingas and a major pilgrimage destination for Hindus. The temple is dedicated to Lord Shiva and is renowned for its spiritual significance. The temple's unique architecture, surrounded by lush greenery and mountains, makes it a serene and peaceful spot for devotees and tourists alike."
    },
    {
        "title": "Saptashrungi",
        "description": "Saptashrungi is a sacred hill located around 60 km from Nashik and is home to the Saptashrungi Mata Temple, one of the 51 Shakti Peethas. It is believed to be the seat of one of the seven divine sisters, the Saptashrungi. The temple is situated on top of a hill, and visitors have to climb several steps to reach the shrine. The views of the surrounding mountains and valleys are breathtaking, making it a spiritual and scenic destination."
    },
    {
        "title": "Pandav Leni Caves",
        "description": "Pandav Leni is a group of 24 ancient Buddhist caves located on the Trimbakeshwar road in Nashik. These caves, carved into the hills, were used as meditation and living quarters by Buddhist monks. The caves are known for their intricate sculptures and inscriptions. The serene atmosphere and scenic views of the surrounding area make it a peaceful spot for history enthusiasts and nature lovers."
    },
    {
        "title": "Kalaram Sansthan Temple",
        "description": "Kalaram Sansthan Temple, located in Nashik, is one of the oldest and most significant temples dedicated to Lord Rama. The temple is famous for its black stone idol of Lord Rama and its spiritual significance. Devotees from all over the country visit this temple to seek blessings and experience a sense of tranquility and devotion."
    },
    {
        "title": "Godavari River and Panchavati",
        "description": "The Godavari River is one of the most sacred rivers in India, and Nashik is one of the important pilgrimage destinations along its banks. Panchavati, located near the river, is a spiritual place with temples, ghats, and sacred spots associated with the epic Ramayana. It is a serene and holy place to take a dip in the river and seek blessings."
    },
    {
        "title": "Nashik Vineyards",
        "description": "Nashik is known as the 'Wine Capital of India' due to its thriving wine industry. Visitors can explore the local vineyards and wineries, taste some of the finest wines, and learn about the wine-making process. Some well-known vineyards in the region include Sula Vineyards, York Winery, and Vinsura Winery."
    },
    {
        "title": "Anjneri Hill",
        "description": "Anjneri Hill, located near Nashik, is believed to be the birthplace of Lord Hanuman. The hill is a popular pilgrimage destination and offers a scenic trekking experience. The views from the top of the hill are breathtaking, and visitors can also explore the Hanuman Temple situated there. The serene surroundings make it a great place for hiking and reflection."
    },
    {
        "title": "Ganga Ghat",
        "description": "Ganga Ghat, located near the Godavari River, is an important religious site in Nashik. It is one of the sacred bathing ghats in Nashik, where pilgrims come to take a holy dip in the river. The ghat is associated with the Kumbh Mela, a major Hindu festival that is held every 12 years in Nashik. The peaceful and spiritual atmosphere makes it a must-visit for devotees and tourists."
    },
    {
        "title": "Brahmagiri Hill",
        "description": "Brahmagiri Hill is a popular trekking destination located near Trimbakeshwar. It is believed to be the place where Lord Vishnu meditated. The hill offers a peaceful environment and beautiful views of the surrounding valleys and rivers. The trek to the top of the hill is a rewarding experience for nature lovers and trekkers."
    },
    {
        "title": "Nashik Fort (Nashik Killa)",
        "description": "Nashik Fort is a historical fort located in the heart of the city. The fort is known for its strategic location and military importance during the Maratha Empire. It offers panoramic views of Nashik and is an interesting destination for history enthusiasts. The fort is surrounded by lush greenery and provides a great opportunity to explore the region's rich history and culture."
    }
],



 "services": [
    {
        "name": "Pune to Nashik Cab Service",
        "description": "Morya Cab provides reliable and comfortable cab services for your journey from Pune to Nashik. Whether you’re visiting for religious purposes, sightseeing, or business, we ensure a smooth and enjoyable ride with professional drivers."
    },
    {
        "name": "Pune to Nashik Taxi Fare",
        "description": "Morya Cab offers transparent and affordable taxi fares for your Pune to Nashik journey. Our pricing is clear and competitive, ensuring you get the best value without hidden charges."
    },
    {
        "name": "Pune to Nashik Trimbakeshwar Cab",
        "description": "Visit the sacred Trimbakeshwar Temple with ease by booking a cab from Pune to Nashik with Morya Cab. We provide comfortable and reliable services to help you reach this important religious site without any hassle."
    },
    {
        "name": "Pune to Nashik Taxi Booking",
        "description": "Booking your Pune to Nashik taxi is easy with Morya Cab. Simply book online or contact us to reserve your ride, ensuring a hassle-free journey with a vehicle of your choice, tailored to your preferences."
    },
    {
        "name": "Pune to Nashik Round Trip Cabs",
        "description": "For a round trip from Pune to Nashik, Morya Cab offers flexible options. Whether it’s a one-day trip or a weekend getaway, we ensure a comfortable and stress-free journey with a round trip that suits your schedule."
    },
    {
        "name": "Pune to Nashik One-Way Taxi",
        "description": "Morya Cab offers one-way taxi services from Pune to Nashik, providing a convenient and affordable way to reach your destination. Enjoy a direct, comfortable ride with no detours, perfect for those only needing a one-way trip."
    },
    {
        "name": "Pune to Nashik Private Taxi",
        "description": "For a personalized experience, choose Morya Cab’s private taxi services. We offer private rides from Pune to Nashik, ensuring you have the comfort and flexibility to travel at your own pace."
    },
    {
        "name": "Pune to Nashik Shared Taxi",
        "description": "Morya Cab provides shared taxi services for travelers looking to save on transportation costs. Share the ride with other passengers while still enjoying a comfortable and reliable journey from Pune to Nashik."
    },
    {
        "name": "Pune to Trimbakeshwar Taxi",
        "description": "Travel in comfort to the Trimbakeshwar Temple with Morya Cab’s dedicated taxi service. We offer reliable and punctual rides from Pune to Trimbakeshwar, making your pilgrimage or visit stress-free."
    },
    {
        "name": "Pune to Nashik Car Rental",
        "description": "Morya Cab offers flexible car rental services for your trip from Pune to Nashik. Whether you need a one-way or round-trip rental, we ensure that you have the right vehicle for your journey, with professional drivers at your service."
    },
    {
        "name": "Pune to Nashik Taxi Service",
        "description": "Morya Cab provides efficient and comfortable taxi services for all your travel needs from Pune to Nashik. We prioritize customer satisfaction and ensure your ride is smooth and timely."
    },
    {
        "name": "Pune to Nashik Luxury Taxi",
        "description": "For those looking for a premium travel experience, Morya Cab offers luxury taxi services from Pune to Nashik. Enjoy a comfortable and stylish journey with our luxury vehicles, perfect for those who prefer the best in travel."
    },
    {
        "name": "Pune to Nashik Drop Taxi",
        "description": "If you’re looking for a taxi drop service to Nashik, Morya Cab offers convenient and reliable drop-off options. We provide direct and efficient rides, ensuring that you reach your destination on time and without hassle."
    },
    {
        "name": "Pune to Nashik Temple Taxi",
        "description": "Travel comfortably and hassle-free to Nashik’s famous temples with Morya Cab’s temple taxi services. Whether you're visiting Trimbakeshwar or other sacred sites, we offer reliable and timely service for your spiritual journey."
    },
    {
        "name": "Pune to Nashik Taxi Price",
        "description": "Morya Cab offers affordable taxi prices for your Pune to Nashik journey. We ensure that the prices are clear, with no hidden charges, providing a cost-effective solution for your travel needs."
    },
    {
        "name": "Pune to Nashik Cab Contact Information",
        "description": "Contact Morya Cab at +91 9359401610 for prompt and efficient Pune to Nashik cab services. We ensure a smooth and enjoyable ride for all our customers, making your journey comfortable and stress-free. Book your Pune to Nashik cab today!"
    }
],




tableData: [
    ["Pune to Nashik Cab Service", "-Pune to Nashik Taxi Fare"],
    ["Pune to Nashik Trimbakeshwar Cab", "-Pune to Nashik Taxi Booking"],
    ["Pune to Nashik Round Trip Cabs", "-Pune to Nashik One-Way Taxi"],
    ["Pune to Nashik Private Taxi", "-Pune to Nashik Shared Taxi"],
    ["Pune to Trimbakeshwar Taxi", "-Pune to Nashik Car Rental"],
    ["Pune to Nashik Taxi Service", "-Pune to Nashik Luxury Taxi"],
    ["Pune to Nashik Drop Taxi", "-Pune to Nashik Temple Taxi"],
    ["Pune to Nashik Taxi Price", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we know the importance of punctuality for your trips. Whether you're visiting Nashik for religious reasons or leisure, we guarantee timely pickups and drop-offs, ensuring a smooth and stress-free journey from Pune to Trimbakeshwar."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet of vehicles is designed for comfort, with spacious interiors, plush seating, air conditioning, and ample legroom. Whether you are traveling solo or with family, we ensure a comfortable and pleasant ride."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are well-experienced and trained to handle long-distance routes like Pune to Nashik-Trimbakeshwar. They are familiar with the best routes and ensure a safe, smooth, and timely trip, making sure your journey is hassle-free."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We offer competitive pricing with no hidden charges. Our pricing is transparent, and you’ll know the exact fare before you begin your trip, ensuring no surprises."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. Our vehicles are equipped with modern safety features, including airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure your trip is safe and comfortable."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available 24/7, so whether you're planning an early morning visit to Trimbakeshwar or a late-night return from Nashik, our team is ready to assist with bookings and travel arrangements at any time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Nashik-Trimbakeshwar taxi is quick and easy. You can book online via our website or mobile app, or simply reach out to our customer service team for assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you are traveling for religious purposes or leisure, we offer customized travel packages to suit your needs. We can adjust the trip to include other destinations in Nashik or make stops as per your preferences."
    }
]







    }


    const faqData = [
        {
          question: "How can I book a Pune to Nashik-Trimbakeshwar taxi with Morya Cab?",
          answer: "Booking a taxi is easy! You can book online through our website or mobile app, or contact our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced in handling long-distance routes like Pune to Nashik-Trimbakeshwar, ensuring a smooth and safe journey."
        },
        {
          question: "What types of vehicles are available for Pune to Nashik-Trimbakeshwar travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, to ensure comfort and convenience for your journey."
        },
        {
          question: "How do I pay for my Pune to Nashik-Trimbakeshwar taxi rental?",
          answer: "We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Nashik-Trimbakeshwar?",
          answer: "Yes, we offer round-trip services. Simply provide us with your return details during the booking process, and we’ll take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges for waiting time or detours will be communicated to you upfront, ensuring full transparency in our pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Nashik?",
          answer: "Yes, we offer sightseeing services in Nashik. Explore popular spots like Trimbakeshwar Temple, Saptashrungi, Panchavati, and more with an experienced driver."
        },
        {
          question: "What is the luggage allowance for a Pune to Nashik-Trimbakeshwar taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, kindly inform us during booking, and we will make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Nashik-Trimbakeshwar?",
          answer: "Yes, we offer corporate travel services. If your company is planning a trip to Nashik or Trimbakeshwar, we can provide customized packages tailored to your needs."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Nashik-Trimbakeshwar travel?",
          answer: "Morya Cab ensures a safe, comfortable, and enjoyable journey with well-maintained vehicles, experienced drivers, and affordable pricing. We promise to make your trip hassle-free."
        }
      ];
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rajesh Jadhav',
          role: 'Traveller',
          review: 'We traveled to Nashik for a religious visit, and Morya Cab made the journey smooth and pleasant. The driver was polite and took the best routes to avoid traffic. Highly recommend!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Manisha Kulk',
          role: 'Traveller',
          review: 'We had a great trip from Pune to Trimbakeshwar with Morya Cab. The car was clean, spacious, and comfortable. The driver was courteous, and the journey was stress-free. Definitely using them again.',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
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



    // const jsonLD = {
    //     "@context": "https://schema.org",
    //     "@type": "TaxiService",
    //     "name": "Morya Cabs",
    //     "description": "Book reliable and affordable Pune to Nashik-Trimbakeshwar Cabs services with Morya Cabs. Private, shared, luxury, one-way, and round trip options available.",
    //     "address": {
    //       "@type": "PostalAddress",
    //       "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
    //       "addressLocality": "Pune",
    //       "addressRegion": "Maharashtra",
    //       "postalCode": "411014",
    //       "addressCountry": "IN"
    //     },
    //     "telephone": "+91-9359401610",
    //     "url": "https://moryacab.com/pune-to-nashik-trimbakeshwar-taxi",
    //     "logo": "https://moryacab.com/img/logo.jpg",
    //     "image": [
    //       "https://moryacab.com/img/pune-to-nashik-taxi.jpg",
    //       "https://moryacab.com/img/nashik-trimbakeshwar-taxi.jpg"
    //     ],
    //     "priceRange": "₹1500 - ₹5000",
    //     "offers": {
    //       "@type": "Offer",
    //       "url": "https://moryacab.com/pune-to-nashik-trimbakeshwar-taxi",
    //       "priceCurrency": "INR",
    //       "price": 2500,
    //       "priceValidUntil": "2025-12-31"
    //     },
    //     "aggregateRating": {
    //       "@type": "AggregateRating",
    //       "ratingValue": 4.7,
    //       "reviewCount": 150
    //     },
    //     "review": [
    //       {
    //         "@type": "Review",
    //         "author": {
    //           "@type": "Person",
    //           "name": "Saurabh Jain"
    //         },
    //         "datePublished": "2024-09-12",
    //         "reviewBody": "Excellent service! The ride was comfortable and the driver was very polite. It was a smooth and hassle-free trip from Pune to Trimbakeshwar."
    //       },
    //       {
    //         "@type": "Review",
    //         "author": {
    //           "@type": "Person",
    //           "name": "Ravi Shinde"
    //         },
    //         "datePublished": "2024-11-30",
    //         "reviewBody": "Morya Cabs provided a fantastic experience. The car was in great condition, and the driver knew the best routes. Highly recommended for the Nashik-Trimbakeshwar trip!"
    //       }
    //     ],
    //     "serviceArea": {
    //       "@type": "Place",
    //       "name": "Pune to Nashik-Trimbakeshwar Taxi Service",
    //       "geo": {
    //         "@type": "GeoCoordinates",
    //         "latitude": 18.5196,
    //         "longitude": 73.8557
    //       }
    //     },
    //     "availableChannel": {
    //       "@type": "ServiceChannel",
    //       "serviceUrl": "https://moryacab.com/pune-to-nashik-trimbakeshwar-taxi"
    //     },
    //     "keywords": "Pune to Nashik Cabs, Pune to Trimbakeshwar Cabs, Nashik taxi fare, Nashik one-way taxi, Pune to Nashik round trip, Pune to Nashik private taxi, luxury taxi Nashik, shared taxi Nashik, Pune to Trimbakeshwar taxi, Nashik temple taxi"
    //   };
const puneToNashikTrimbakeshwarCabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Nashik Trimbakeshwar Cabs",
  "image": "https://moryacab.com/assets/images/pune-to-nashik-trimbakeshwar-cab.jpg",
  "description": "Book Pune to Nashik Trimbakeshwar cab with Morya Cabs. Choose from AC sedans, SUVs & tempo travellers. Ideal for one-way, round trip & Trimbakeshwar Jyotirlinga darshan. Safe rides, verified drivers, and 24/7 support.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "10785",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "3999",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-nashik-trimbakeshwar-cabs"
  }
};



    return (
        <div>
            <UsePageTracking/>

<Helmet>
  <title>Pune to Nashik Trimbakeshwar Cabs | Book Sedan, SUV Taxi | Morya Cabs</title>
  <meta
    name="description"
    content="Book Pune to Nashik Trimbakeshwar cab with Morya Cabs. Choose from AC sedans, SUVs & tempo travellers. Ideal for one-way, round trip & Trimbakeshwar Jyotirlinga darshan. Safe rides, verified drivers, and 24/7 support."
  />
  <meta
    name="keywords"
    content="Pune to Nashik Cab, Pune to Trimbakeshwar Cab, Pune to Trimbakeshwar Jyotirlinga Taxi, Trimbakeshwar Darshan from Pune, Nashik Temple Tour Cab, Pune to Nashik Round Trip Taxi, One-Way Cab Pune to Trimbakeshwar, AC Cab Pune to Nashik, SUV Cab Pune to Trimbakeshwar, Sedan Taxi Nashik Tour, Morya Cabs Pune to Nashik, Tempo Traveller to Trimbakeshwar"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToNashikTrimbakeshwarCabSchema)}
  </script>
</Helmet>

  {/* <Helmet>
        <title>Pune to Nashik-Trimbakeshwar Cabs | Reliable Cab Service | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book Pune to Nashik-Trimbakeshwar Cabs service with Morya Cabs. Affordable one-way, round trip, private, luxury, and shared cabs. Easy booking online!"
        />
        <meta name="keywords" content="Pune to Nashik taxi, Pune to Trimbakeshwar taxi, Nashik taxi fare, luxury taxi Nashik, shared taxi Nashik" />
        <meta property="og:title" content="Pune to Nashik-Trimbakeshwar Taxi | Morya Cabs" />
        <meta property="og:description" content="Affordable and reliable Pune to Nashik-Trimbakeshwar taxi service. Private, shared, and luxury cabs available. Book online today!" />
        <meta property="og:url" content="https://moryacab.com/pune-to-nashik-trimbakeshwar-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-nashik-taxi.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLD)}
        </script>
      </Helmet> 
      // by this showing on 3:10
      */}

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
                            <img src='/images/keyword/7.jpg' alt='img' />
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

export default Punetonashiktrimbkeshwer;