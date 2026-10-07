
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetokohlapur() {



    const cardData =
    {
        keyword: 'Pune to Kolhapur Taxi    ',
        heading: 'Morya Cabs: Pune to Kolhapur Taxi  ',
        headingDescription: 'Morya Cabs provides reliable, comfortable, and affordable taxi services from Pune to Kolhapur. Whether you are traveling for business, leisure, or to explore the historical temples and culture, our professional drivers and well-maintained fleet ensure a smooth journey. The distance from Pune to Kolhapur is approximately 230 km, and the drive takes around 4 to 5 hours. Enjoy a safe, comfortable, and hassle-free ride with Morya Cabs.',

        top: 'Top Places to Visit in Kolhapur with Morya Cabs',

   "topPlaces": [
    {
        "title": "Mahalakshmi Temple",
        "location": "Kolhapur, Maharashtra",
        "description": "The Mahalakshmi Temple in Kolhapur is one of the most famous pilgrimage destinations in India. Dedicated to Goddess Lakshmi, it is renowned for its architectural beauty and spiritual significance. The temple attracts devotees and tourists alike."
    },
    {
        "title": "Rankala Lake",
        "location": "Kolhapur, Maharashtra",
        "description": "Rankala Lake is a picturesque lake in the heart of Kolhapur, surrounded by beautiful gardens and historical structures. The lake is a serene spot, perfect for a relaxing boat ride or a peaceful walk along its shores."
    },
    {
        "title": "Panhala Fort",
        "location": "Kolhapur, Maharashtra",
        "description": "Panhala Fort is a historic hill fort located on the Sahyadri range. Known for its majestic architecture, historical importance, and breathtaking views of the surrounding landscape, Panhala is a must-visit for history enthusiasts and nature lovers."
    },
    {
        "title": "Shivaji University",
        "location": "Kolhapur, Maharashtra",
        "description": "The campus of Shivaji University is known for its peaceful surroundings and beautiful architecture. Visitors can explore the sprawling campus, which is home to lush gardens, lakes, and impressive educational structures."
    },
    {
        "title": "Binkhambi Ganesh Mandir",
        "location": "Kolhapur, Maharashtra",
        "description": "Binkhambi Ganesh Mandir is a unique temple dedicated to Lord Ganesha. The temple is known for its unusual, roofless design and peaceful atmosphere, making it an interesting and tranquil place to visit."
    },
    {
        "title": "Sangli Miraj",
        "location": "Near Kolhapur, Maharashtra",
        "description": "Sangli Miraj, a twin city near Kolhapur, is known for its rich cultural heritage, historical monuments, and temples. Sangli Fort, along with its many temples, is a major attraction for visitors to the region."
    },
    {
        "title": "New Palace",
        "location": "Kolhapur, Maharashtra",
        "description": "The New Palace in Kolhapur was built for the Chhatrapati Shahaji Maharaj in the 19th century. The palace is a beautiful example of colonial architecture and is surrounded by lush gardens. It houses a museum showcasing royal artifacts and memorabilia."
    },
    {
        "title": "Kochi Muthoot Cultural Center",
        "location": "Kolhapur, Maharashtra",
        "description": "The Kochi Muthoot Cultural Center in Kolhapur offers visitors a deep dive into the cultural heritage of the region. With exhibits ranging from art and music to textiles and history, it is a great place for those interested in the local traditions."
    },
    {
        "title": "Jyotiba Temple",
        "location": "Kolhapur, Maharashtra",
        "description": "The Jyotiba Temple, dedicated to Lord Jyotiba, is situated on a hilltop and offers stunning views of the surrounding area. The temple is famous for its peaceful ambiance and is a popular spot for pilgrims and tourists alike."
    },
    {
        "title": "Radhanagari Dam",
        "location": "Kolhapur, Maharashtra",
        "description": "The Radhanagari Dam, located on the Bhogawati River, is surrounded by lush green forests and is a popular picnic spot. The dam and its surrounding wildlife sanctuary provide a perfect opportunity to explore nature and enjoy scenic views."
    }
],


"services": [
    {
        "name": "Pune to Kolhapur Cab",
        "description": "Morya Cab provides reliable and comfortable cab services for your journey from Pune to Kolhapur. Whether you're visiting for business, leisure, or a spiritual trip, we ensure a smooth and enjoyable ride."
    },
    {
        "name": "Pune to Kolhapur Taxi Service",
        "description": "Morya Cab offers top-notch taxi services for your Pune to Kolhapur trip. With experienced drivers and well-maintained vehicles, we make sure you have a safe and comfortable journey."
    },
    {
        "name": "Pune to Kolhapur One-Way Taxi",
        "description": "If you're looking for a one-way ride from Pune to Kolhapur, Morya Cab offers convenient one-way taxi services. Enjoy a hassle-free, direct trip with our professional drivers ensuring your comfort along the way."
    },
    {
        "name": "Pune to Kolhapur Cab Booking",
        "description": "Booking a cab from Pune to Kolhapur is easy with Morya Cab. Simply book online or by phone to secure your ride. We offer flexible booking options to ensure your travel is as convenient as possible."
    },
    {
        "name": "Pune to Kolhapur Car Hire",
        "description": "Morya Cab provides flexible car hire options for your journey from Pune to Kolhapur. Choose from a range of vehicles, including chauffeur-driven cars, for a comfortable and stress-free travel experience."
    },
    {
        "name": "Pune to Kolhapur Taxi Fare",
        "description": "Morya Cab offers affordable and transparent taxi fares for your journey from Pune to Kolhapur. We provide clear pricing with no hidden charges, ensuring you get the best value for your trip."
    },
    {
        "name": "Pune to Kolhapur Round Trip",
        "description": "For those looking for a round-trip journey, Morya Cab offers convenient round-trip taxi services from Pune to Kolhapur. Whether you’re planning a short visit or a longer stay, we offer flexible options to fit your schedule."
    },
    {
        "name": "Pune to Kolhapur Private Taxi",
        "description": "Morya Cab provides private taxi services from Pune to Kolhapur for a personalized and exclusive experience. Enjoy your journey in a dedicated vehicle with a professional driver, ensuring comfort and privacy throughout your trip."
    },
    {
        "name": "Pune to Kolhapur Shared Taxi",
        "description": "For a more economical travel option, Morya Cab offers shared taxi services from Pune to Kolhapur. Share your ride with others while still enjoying a comfortable and reliable service."
    },
    {
        "name": "Pune to Kolhapur Taxi Charges",
        "description": "Morya Cab offers clear and competitive taxi charges for your Pune to Kolhapur trip. Our pricing is affordable and transparent, ensuring you know exactly what you’ll pay for your journey."
    },
    {
        "name": "Pune to Kolhapur Taxi Booking Online",
        "description": "You can easily book your Pune to Kolhapur taxi online with Morya Cab. With a few clicks, you can secure your ride and enjoy a convenient travel experience."
    },
    {
        "name": "Pune to Kolhapur Drop Taxi",
        "description": "Morya Cab provides drop taxi services for your Pune to Kolhapur journey. Enjoy a direct and hassle-free ride with no unnecessary stops along the way."
    },
    {
        "name": "Pune to Kolhapur Luxury Taxi",
        "description": "For those who want to travel in style, Morya Cab offers luxury taxi services from Pune to Kolhapur. Relax in comfort and luxury with our premium vehicles and enjoy a top-tier travel experience."
    },
    {
        "name": "Pune to Kolhapur Travel by Taxi",
        "description": "Traveling from Pune to Kolhapur by taxi with Morya Cab ensures a comfortable and safe journey. Our drivers are well-versed in the best routes, and our vehicles are maintained to provide you with the best experience possible."
    },
    {
        "name": "Pune to Kolhapur Cab Contact Information",
        "description": "For prompt and reliable Pune to Kolhapur cab services, contact Morya Cab at +91 9359401610. We guarantee a comfortable, stress-free ride. Book your Pune to Kolhapur cab today!"
    }
],


tableData: [
    ["Pune to Kolhapur Cab", "-Pune to Kolhapur Taxi Service"],
    ["Pune to Kolhapur One-Way Taxi", "-Pune to Kolhapur Cab Booking"],
    ["Pune to Kolhapur Car Hire", "-Pune to Kolhapur Taxi Fare"],
    ["Pune to Kolhapur Round Trip", "-Pune to Kolhapur Private Taxi"],
    ["Pune to Kolhapur Shared Taxi", "-Pune to Kolhapur Taxi Charges"],
    ["Pune to Kolhapur Taxi Booking Online", "-Pune to Kolhapur Drop Taxi"],
    ["Pune to Kolhapur Luxury Taxi", "-Pune to Kolhapur Travel by Taxi"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand how important punctuality is. Whether you are heading to Kolhapur for business, pilgrimage, or leisure, we ensure on-time pickups and drop-offs to keep your trip hassle-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet includes a range of well-maintained vehicles that provide ample space and comfort for your journey from Pune to Kolhapur. Enjoy a relaxing ride with air conditioning, comfortable seating, and plenty of legroom, whether you are traveling alone or with family."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are well-trained and experienced in long-distance travel. They are familiar with the best routes from Pune to Kolhapur, ensuring your journey is safe, efficient, and comfortable. Trust our drivers to provide a smooth, stress-free experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We believe in transparent pricing. With Morya Cab, there are no hidden charges. We offer competitive rates for Pune to Kolhapur taxi services, providing you with the best value for your money."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All of our vehicles are regularly inspected and equipped with modern safety features, including airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety guidelines to ensure a worry-free journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available round-the-clock to meet your travel needs. Whether it’s an early morning departure or a late-night return, our customer service team is always available to assist with bookings."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Kolhapur taxi is simple and quick. You can book online via our website or mobile app, or contact our customer service team for assistance. We make sure the process is smooth and easy."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're traveling for leisure, business, or religious purposes, we offer customized travel packages for your Pune to Kolhapur trip. Let us know your preferences, and we’ll design the perfect journey for you."
    }
]







    }


    const faqData = [
        {
          question: "How can I book a Pune to Kolhapur taxi with Morya Cab?",
          answer: "Booking is easy! You can book a taxi online via our website or mobile app, or you can call our customer service team for personalized assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced and well-trained to handle long-distance travel. They ensure a smooth, safe, and efficient journey from Pune to Kolhapur."
        },
        {
          question: "What types of vehicles are available for Pune to Kolhapur travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all equipped with modern amenities for your comfort during long-distance travel."
        },
        {
          question: "How do I pay for my Pune to Kolhapur taxi rental?",
          answer: "We accept several payment options, including cash, credit/debit cards, and online payments via our app, so you can choose the most convenient method for you."
        },
        {
          question: "Can I book a round trip from Pune to Kolhapur?",
          answer: "Yes, we offer round-trip services. Provide your return details when booking, and we’ll take care of everything."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you in advance, ensuring full transparency about the pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Kolhapur?",
          answer: "Yes, we offer sightseeing services in Kolhapur. You can visit iconic spots like the Mahalaxmi Temple, Rankala Lake, and Kolhapur Fort with a trusted driver."
        },
        {
          question: "What is the luggage allowance for a Pune to Kolhapur taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have more luggage or specific requirements, please let us know during the booking process, and we will arrange accordingly."
        },
        {
          question: "Is Morya Cab available for corporate travel to Kolhapur?",
          answer: "Yes, we offer corporate travel services to Kolhapur. Whether it’s for business meetings, team outings, or conferences, we can provide customized travel packages suited to your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Kolhapur travel?",
          answer: "Morya Cab provides reliable, professional, and affordable taxi services with well-maintained vehicles and experienced drivers. We prioritize safety, comfort, and punctuality, ensuring a pleasant trip to Kolhapur."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Nitin Rao',
          role: 'Family Traveler',
          review: 'We used Morya Cab for our family trip to Kolhapur, and the service was excellent. The driver was friendly, the car was clean, and we had a comfortable ride. Will definitely use them again!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Shalini Deshpande',
          role: 'Business Traveler',
          review: 'Our business trip to Kolhapur was smooth and stress-free thanks to Morya Cab. The driver was professional, and the car was comfortable for our long journey. Highly recommend!',
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


    // const jsonLD = {
    //     "@context": "https://schema.org",
    //     "@type": "LocalBusiness",
    //     "name": "Morya Cab Services",
    //     "description": "Book your Pune to Kolhapur taxi with Morya Cab. Affordable one-way and round-trip taxi services, including luxury cabs and shared taxis. Call +91 9359401610 for booking!",
    //     "address": {
    //       "@type": "PostalAddress",
    //       "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
    //       "addressLocality": "Pune",
    //       "addressRegion": "Maharashtra",
    //       "postalCode": "411014",
    //       "addressCountry": "IN"
    //     },
    //     "telephone": "+91-9359401610",
    //     "url": "https://moryacab.com/",
    //     "logo": "https://moryacab.com/img/logo.jpg",
    //     "image": [
    //       "https://moryacab.com/img/pune-to-kolhapur-taxi.jpg",
    //       "https://moryacab.com/img/pune-to-kolhapur-cab-service.jpg"
    //     ],
    //     "priceRange": "₹3500 - ₹6000",
    //     "offers": {
    //       "@type": "Offer",
    //       "url": "https://moryacab.com/pune-to-kolhapur-taxi-service",
    //       "priceCurrency": "INR",
    //       "price": 4500,
    //       "priceValidUntil": "2025-12-31"
    //     },
    //     "aggregateRating": {
    //       "@type": "AggregateRating",
    //       "ratingValue": 4.7,
    //       "reviewCount": 120
    //     },
    //     "review": [
    //       {
    //         "@type": "Review",
    //         "author": {
    //           "@type": "Person",
    //           "name": "Amit Patel"
    //         },
    //         "datePublished": "2024-08-15",
    //         "reviewBody": "Had a smooth ride from Pune to Kolhapur. The car was clean, and the driver was courteous and professional. Great service!"
    //       },
    //       {
    //         "@type": "Review",
    //         "author": {
    //           "@type": "Person",
    //           "name": "Suman Desai"
    //         },
    //         "datePublished": "2024-09-10",
    //         "reviewBody": "Booked a round-trip taxi from Pune to Kolhapur. The booking process was easy, and the ride was comfortable and on-time. Highly recommend!"
    //       }
    //     ],
    //     "serviceArea": {
    //       "@type": "Place",
    //       "name": "Pune to Kolhapur Taxi Service",
    //       "geo": {
    //         "@type": "GeoCoordinates",
    //         "latitude": 17.6578,
    //         "longitude": 74.2426
    //       }
    //     },
    //     "availableChannel": {
    //       "@type": "ServiceChannel",
    //       "serviceUrl": "https://moryacab.com/pune-to-kolhapur-taxi-service"
    //     },
    //     "keywords": "Pune to Kolhapur taxi, Pune to Kolhapur cab service, Pune to Kolhapur one-way taxi, Pune to Kolhapur round trip, Pune to Kolhapur car rental, Pune to Kolhapur taxi fare, Pune to Kolhapur private cab, Pune to Kolhapur shared taxi, Pune to Kolhapur taxi charges, Pune to Kolhapur taxi booking, Pune to Kolhapur drop taxi, Pune to Kolhapur luxury taxi, Pune to Kolhapur travel by taxi"
    //   };
const puneToKolhapurCabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Kolhapur Cab",
  "image": "https://moryacab.com/assets/images/pune-to-kolhapur-cab.jpg",
  "description": "Book Pune to Kolhapur cab with Morya Cabs. Travel comfortably in AC sedan, SUV, or tempo traveller. One-way, round trip, or Mahalaxmi temple darshan with verified drivers and 24/7 support.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "9345",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "3699",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-kolhapur-cab"
  }
};




    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Kolhapur Cab | Book AC Sedan, SUV Taxi | Morya Cabs</title>
  <meta
    name="description"
    content="Book Pune to Kolhapur cab with Morya Cabs. Travel comfortably in AC sedan, SUV, or tempo traveller. One-way, round trip, or Mahalaxmi temple darshan with verified drivers and 24/7 support."
  />
  <meta
    name="keywords"
    content="Pune to Kolhapur Cab, Cab from Pune to Kolhapur, One-Way Cab Pune Kolhapur, Round Trip Taxi Pune Kolhapur, AC Taxi Pune to Kolhapur, SUV Cab to Kolhapur, Sedan Taxi Pune Kolhapur, Mahalaxmi Temple Cab, Morya Cabs Kolhapur, Pune to Kolhapur Car Rental, Tempo Traveller Pune Kolhapur, Affordable Cab Pune Kolhapur"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToKolhapurCabSchema)}
  </script>
</Helmet>

  {/* <Helmet>
        <title>Pune to Kolhapur Taxi | Affordable & Reliable Taxi Services | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book your Pune to Kolhapur taxi with Morya Cab. Affordable one-way and round-trip taxi services, including luxury cabs and shared taxis."
        />
        <meta name="keywords" content="Pune to Kolhapur taxi, Pune to Kolhapur cab service, Pune to Kolhapur one-way taxi, Pune to Kolhapur round trip, Pune to Kolhapur car rental, Pune to Kolhapur taxi fare, Pune to Kolhapur private cab, Pune to Kolhapur shared taxi, Pune to Kolhapur taxi charges, Pune to Kolhapur taxi booking" />
        <meta property="og:title" content="Pune to Kolhapur Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Pune to Kolhapur taxi with Morya Cab. Affordable, reliable, and comfortable one-way and round-trip taxi services." />
        <meta property="og:url" content="https://moryacab.com/pune-to-kolhapur-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-kolhapur-taxi.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLD)}
        </script>
      </Helmet> 
      
      //6:3
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
                            <img src='/images/keyword/13.jpg' alt='img' />
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

export default Punetokohlapur;