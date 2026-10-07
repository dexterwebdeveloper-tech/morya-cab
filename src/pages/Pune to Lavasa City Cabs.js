
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetolavasacity() {



    const cardData =
    {
        keyword: 'Pune to Lavasa City Cabs   ',
        heading: 'Morya Cabs:  Pune to Lavasa City Cabs   ',
        headingDescription: 'Planning a trip to Lavasa from Pune? Morya Cabs offers reliable and affordable cab services for a smooth and comfortable journey. Lavasa, a picturesque hill city, is a perfect getaway for nature lovers and adventure seekers. Whether you need a one-way drop or a round-trip cab, we provide well-maintained vehicles and professional drivers to ensure a hassle-free travel experience. Book your Pune to Lavasa taxi with us and enjoy a scenic drive to this beautiful destination.',

        top: 'Top Places to Visit in Lavasa with Morya Cabs',

        topPlaces: [
            {
                "title": "Lakeshore Promenade",
                "description": "The heart of Lavasa, Lakeshore Promenade, is lined with cafes, restaurants, and scenic walking paths along the lake. Visitors can enjoy boating, cycling, and stunning sunset views by the waterfront."
            },
            {
                "title": "Dasve Viewpoint",
                "description": "A must-visit for breathtaking panoramic views of Lavasa city and its lush green surroundings. This viewpoint offers a perfect backdrop for photography enthusiasts."
            },
            {
                "title": "Temghar Dam",
                "description": "Located on the way to Lavasa, Temghar Dam is a beautiful stopover offering serene views of the backwaters. It’s an ideal spot for nature lovers and picnics."
            },
            {
                "title": "Lavasa Nature Trail",
                "description": "A great spot for trekking and nature walks, Lavasa Nature Trail allows visitors to explore the rich flora and fauna of the region while enjoying the fresh mountain air."
            },
            {
                "title": "Bamboosa",
                "description": "An eco-friendly initiative, Bamboosa is a bamboo craftsmanship center showcasing artistic creations and handmade products. Visitors can witness the craftsmanship and shop for unique souvenirs."
            },
            {
                "title": "Xthrill Adventure Park",
                "description": "For adventure lovers, Xthrill Adventure Park offers activities like rock climbing, rappelling, zip-lining, paintball, and ATV rides, making it an exciting place to visit."
            },
            {
                "title": "Dasvino Town & Country Club",
                "description": "A luxury retreat in Lavasa, Dasvino Club offers spa treatments, fine dining, and recreational activities, providing a perfect blend of relaxation and entertainment."
            },
            {
                "title": "Tikona Fort",
                "description": "A short drive from Lavasa, Tikona Fort is a popular trekking destination with a rich historical significance. The trek offers mesmerizing views of the surrounding valleys."
            },
            {
                "title": "Varasgaon Dam",
                "description": "Another beautiful reservoir near Lavasa, Varasgaon Dam is a great place for picnics, photography, and enjoying the calm waters."
            },
            {
                "title": "Ghangad Fort",
                "description": "For history and adventure enthusiasts, Ghangad Fort near Lavasa offers a moderate trek and breathtaking views of the Sahyadri mountain range."
            }
        ]
        ,



"services": [
    {
        "name": "Pune to Lavasa Taxi",
        "description": "Morya Cab offers reliable and affordable taxi services from Pune to Lavasa. Whether you're heading for a weekend getaway or a corporate retreat, we ensure a smooth and comfortable ride, with experienced drivers and well-maintained vehicles."
    },
    {
        "name": "Pune to Lavasa Cab Services",
        "description": "Morya Cab provides a range of cab services from Pune to Lavasa, tailored to your needs. Our fleet includes comfortable sedans, SUVs, and larger vehicles to accommodate different group sizes, ensuring you have a pleasant journey."
    },
    {
        "name": "Pune to Lavasa Taxi Booking",
        "description": "Booking a taxi from Pune to Lavasa with Morya Cab is quick and simple. You can book online or by calling us directly. We offer flexible scheduling to match your travel needs, ensuring you have a stress-free ride."
    },
    {
        "name": "Taxi from Pune to Lavasa",
        "description": "Experience the beauty of Lavasa with a comfortable and reliable taxi ride from Pune. Morya Cab ensures you enjoy a safe, punctual, and relaxing journey, with professional drivers who know the best routes to take."
    },
    {
        "name": "Cab Services Pune to Lavasa",
        "description": "Morya Cab offers excellent cab services from Pune to Lavasa, designed to make your journey enjoyable. Whether it’s a business trip, family outing, or a solo adventure, our drivers and vehicles are at your service to ensure a smooth ride."
    },
    {
        "name": "Pune to Lavasa Private Car",
        "description": "For those who prefer a private, more personalized experience, Morya Cab offers private car services from Pune to Lavasa. Travel in comfort and privacy, and let us take care of the details, allowing you to enjoy the journey at your own pace."
    },
    {
        "name": "Pune to Lavasa Chauffeur Service",
        "description": "Morya Cab offers chauffeur-driven services for your trip from Pune to Lavasa. Our professional chauffeurs will ensure a smooth, hassle-free ride, and you can relax knowing you're in safe hands."
    },
    {
        "name": "Pune to Lavasa Airport Taxi",
        "description": "Morya Cab provides airport taxi services for passengers arriving at Pune Airport. We ensure timely pick-ups and drop-offs to Lavasa, offering a comfortable ride for those traveling directly from the airport."
    },
    {
        "name": "Pune to Lavasa Taxi",
        "description": "Whether you're planning a one-way trip or a round trip, Morya Cab offers dependable and affordable taxi services from Pune to Lavasa. We ensure comfort and reliability for a memorable journey to this scenic hill station."
    },
    {
        "name": "Pune to Lavasa Cab",
        "description": "Morya Cab provides well-maintained vehicles and professional drivers for your Pune to Lavasa trip. Our cabs are designed to provide maximum comfort for your journey, with a focus on punctuality and safety."
    },
    {
        "name": "Pune Airport to Lavasa Taxi Fare",
        "description": "The fare for a taxi from Pune Airport to Lavasa with Morya Cab is competitive and transparent. You can rely on us for a cost-effective ride to your destination without any hidden charges."
    },
    {
        "name": "Pune to Lavasa Cab Booking",
        "description": "Booking a cab from Pune to Lavasa is simple with Morya Cab. Just give us a call or book online to schedule your ride, and we’ll ensure that you have a smooth and enjoyable journey."
    },
    {
        "name": "Pune to Lavasa Cab Fare",
        "description": "Morya Cab provides clear and upfront fare details for your Pune to Lavasa journey. We ensure no hidden costs, offering you an affordable and transparent fare structure for your trip."
    },
    {
        "name": "Pune to Lavasa Cab Price",
        "description": "Our pricing for Pune to Lavasa cabs is competitive and fair, designed to provide the best value for money. Whether you’re traveling solo or with a group, we have options to suit your budget."
    },
    {
        "name": "Pune to Lavasa Taxi Fare",
        "description": "Morya Cab offers transparent pricing for your Pune to Lavasa taxi ride. Our fares are designed to be competitive while ensuring the highest standards of comfort and service."
    },
    {
        "name": "Pune to Lavasa Innova Taxi",
        "description": "For those looking for extra space and comfort, Morya Cab offers an Innova taxi service for the Pune to Lavasa trip. Our Innova taxis are perfect for families or groups traveling together, offering comfort and style throughout the journey."
    },
    {
        "name": "Pune to Lavasa Tempo Traveller on Rent",
        "description": "If you're traveling with a larger group, Morya Cab offers Tempo Traveller rentals for your journey from Pune to Lavasa. Our Tempo Travellers are spacious and comfortable, ensuring a great experience for group travel."
    },
    {
        "name": "Pune to Lavasa Innova Crysta on Rent",
        "description": "For a more premium experience, Morya Cab offers the Innova Crysta on rent for your trip to Lavasa. Enjoy the comfort of this high-end vehicle, with ample space and luxury features for an exceptional journey."
    },
    {
        "name": "Pune to Lavasa Cab Package",
        "description": "Morya Cab offers customizable cab packages for your Pune to Lavasa trip. Whether you need a one-day trip or a weekend getaway, we have tailored packages to suit your preferences, ensuring a hassle-free experience."
    },
    {
        "name": "Contact Information for Pune to Lavasa Cab Services",
        "description": "For your Pune to Lavasa trip, contact Morya Cab at +91 9359401610. We offer reliable and comfortable cab services, ensuring a smooth and enjoyable journey. Book your Pune to Lavasa cab today!"
    }
]
,



tableData: [
    ["Pune to Lavasa Taxi", "-Pune to Lavasa Cab Services"],
    ["Pune to Lavasa Raxi Booking", "-Taxi from Pune to Lavasa"],
    ["Cab services Pune to Lavasa", "-Pune to Lavasa Private Car"],
    ["Pune to Lavasa chauffeur Service", "-Pune to Lavasa Airport Taxi"],
    ["Pune to Lavasa Taxi", "-Pune to Lavasa Cab"],
    ["Pune Airport to Lavasa Taxi Fare", "-Pune to Lavasa cab booking"],
    ["Pune to Lavasa Cab fare", "-Pune to Lavasa Cab Price"],
    ["Pune to Lavasa Taxi fare", "-Pune to Lavasa Innova taxi"],
    ["Pune to Lavasa tempo traveller on rent", "-Pune to Lavasa Innova Crysta on Rent"],
    ["Pune to Lavasa cab package", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab ensures a punctual and hassle-free journey from Pune to Lavasa City. Whether you’re heading for a relaxing weekend or a business trip, we guarantee timely pickups and drop-offs, allowing you to enjoy your trip without any time-related worries."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet of well-maintained vehicles, including sedans, SUVs, and premium cars, is designed for maximum comfort and relaxation. With spacious interiors, air conditioning, and comfortable seating, we ensure that your journey to Lavasa City is smooth and enjoyable."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "All our drivers are highly experienced and familiar with the best routes from Pune to Lavasa City. They are courteous, professional, and focused on your safety and comfort, ensuring a smooth and pleasant journey throughout."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing with no hidden charges. You’ll receive a clear breakdown of the fare upfront, ensuring you know exactly what to expect, allowing for a stress-free journey."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. Our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking, ensuring you a secure and comfortable ride throughout your trip from Pune to Lavasa City."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates around the clock to suit your travel schedule. Whether you’re planning an early morning trip or a late-night return, we are always available to serve you, with a dedicated customer support team ready to assist at any time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Lavasa City cab is quick and easy! You can book online through our website, use our mobile app, or contact our customer service team for assistance. We ensure a seamless and convenient booking experience."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you’re visiting Lavasa City for leisure, sightseeing, or a corporate retreat, Morya Cab offers customized travel packages to cater to your specific needs. Let us know your requirements, and we will tailor the trip to suit your preferences."
    }
]
















    }

    const faqData = [
        {
          question: "How can I book a Pune to Lavasa City cab with Morya Cab?",
          answer: "Booking is easy! You can book your ride through our website, mobile app, or contact our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all of our drivers are highly experienced in long-distance travel, especially the route from Pune to Lavasa City, ensuring a safe and smooth journey."
        },
        {
          question: "What types of vehicles are available for Pune to Lavasa City travel?",
          answer: "We offer a range of vehicles, including sedans, SUVs, and premium cars, all designed for comfort and spacious enough for your journey."
        },
        {
          question: "How do I pay for my Pune to Lavasa City cab rental?",
          answer: "We accept various payment options, including cash, credit/debit cards, and online payments via our app, providing flexibility and convenience for payment."
        },
        {
          question: "Can I book a round trip from Pune to Lavasa City?",
          answer: "Yes, round trips can be easily arranged. Simply provide us with your return details, and we’ll ensure a seamless journey both ways."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges, such as for waiting time or detours, will be clearly communicated to you upfront, ensuring full transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Lavasa City?",
          answer: "Yes, we offer sightseeing tours in Lavasa City! Explore the beautiful landscapes, lakeside views, and other local attractions with the assistance of our experienced drivers."
        },
        {
          question: "What is the luggage allowance for a Pune to Lavasa City taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have additional luggage or special requirements, kindly inform us during the booking process, and we’ll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Lavasa City?",
          answer: "Yes, we provide corporate travel services for business trips, group travel, and meetings between Pune and Lavasa City."
        },
        {
          question: "Why should I choose Morya Cab for my Pune to Lavasa City trip?",
          answer: "Morya Cab offers a reliable, safe, and comfortable journey with experienced drivers, well-maintained vehicles, and exceptional customer service, making it the ideal choice for your trip to Lavasa City."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Anil Patil',
          role: 'Traveler',
          review: 'We had an amazing trip to Lavasa City with Morya Cab. The driver was professional, and the vehicle was clean and comfortable. We had a smooth ride and will definitely use Morya Cab for our future trips.',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Shweta Deshmukh',
          role: 'Family Traveler',
          review: 'Our family traveled to Lavasa City with Morya Cab, and the experience was fantastic. The car was spacious, and the driver was very friendly and knowledgeable. We thoroughly enjoyed the trip and will book again!',
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
        "name": "Pune to Lavasa Cabs",
        "description": "Book reliable and affordable Pune to Lavasa cab services with Morya Cabs. We offer private cars, chauffeur services, Innova, Tempo Traveller, and more for your journey to Lavasa.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9359401610",
        "url": "https://moryacab.com/pune-to-lavasa-taxi",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-to-lavasa-taxi.jpg",
          "https://moryacab.com/img/lavasa-taxi.jpg"
        ],
        "priceRange": "₹2500 - ₹4500",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-lavasa-taxi",
          "priceCurrency": "INR",
          "price": 3000,
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
              "name": "Sandeep Patil"
            },
            "datePublished": "2024-10-12",
            "reviewBody": "Morya Cabs provided excellent service for our trip to Lavasa. The car was clean and well-maintained, and the driver was professional. I would highly recommend their service."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Snehal Agarwal"
            },
            "datePublished": "2024-08-25",
            "reviewBody": "Great experience with Morya Cabs! The journey from Pune to Lavasa was smooth and hassle-free. The driver was courteous, and the car was very comfortable. Thank you!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Lavasa Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.3235,
            "longitude": 73.7231
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-lavasa-taxi"
        },
        "keywords": "Pune to Lavasa Taxi, Pune to Lavasa Cab Services, Pune to Lavasa Taxi Booking, Taxi from Pune to Lavasa, Cab services Pune to Lavasa, Pune to Lavasa Private Car, Pune to Lavasa Chauffeur Service, Pune to Lavasa Airport Taxi, Pune to Lavasa Cab, Pune to Lavasa Taxi Fare, Pune to Lavasa Cab Booking, Pune to Lavasa Cab Price, Pune to Lavasa Innova Taxi, Pune to Lavasa Tempo Traveller on Rent, Pune to Lavasa Innova Crysta on Rent, Pune to Lavasa Cab Package"
      };
      


    return (
        <div>
<UsePageTracking/>
<Helmet>
  <title>Pune to Lavasa Cabs | Reliable & Affordable Taxi Service | Call: +91 9359401610</title>
  <meta
    name="description"
    content="Book reliable and affordable Pune to Lavasa cab services with Morya Cabs. We offer private cars, chauffeur services, Innova, Tempo Traveller, and more for your journey to Lavasa."
  />
  <meta
    name="keywords"
    content="Pune to Lavasa Taxi, Pune to Lavasa Cab Services, Pune to Lavasa Taxi Booking, Taxi from Pune to Lavasa, Cab services Pune to Lavasa, Pune to Lavasa Private Car, Pune to Lavasa Chauffeur Service, Pune to Lavasa Airport Taxi, Pune to Lavasa Cab, Pune to Lavasa Taxi Fare, Pune to Lavasa Cab Booking, Pune to Lavasa Cab Price, Pune to Lavasa Innova Taxi, Pune to Lavasa Tempo Traveller on Rent, Pune to Lavasa Innova Crysta on Rent, Pune to Lavasa Cab Package"
  />
  <meta property="og:title" content="Pune to Lavasa Cabs | Morya Cabs" />
  <meta
    property="og:description"
    content="Morya Cabs offers reliable and affordable Pune to Lavasa taxi services. Book private cabs, chauffeur services, and more for your smooth and comfortable journey."
  />
  <meta property="og:url" content="https://moryacab.com/pune-to-lavasa-taxi" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://moryacab.com/img/pune-to-lavasa-taxi.jpg" />
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
                            <img src='/images/keyword/48.jpg' alt='img' />
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

export default Punetolavasacity;