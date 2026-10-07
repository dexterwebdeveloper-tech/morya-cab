
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetogoataxi() {



    const cardData =
    {
        keyword: 'Pune to Goa Taxi    ',
        heading: 'Morya Cabs:  Pune to Goa Taxi  ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Goa. Whether you are traveling for a relaxing beach holiday, an adventure trip, or a cultural exploration, our well-maintained fleet and professional drivers ensure a smooth and pleasant journey. The Pune to Goa distance is approximately 450 km, and the journey typically takes around 8 to 9 hours by road. Enjoy a stress-free ride with Morya Cabs, where customer satisfaction, safety, and comfort are our top priorities.',

        top: 'Top Places to Visit in Goa with Morya Cabs',

    "topPlaces": [
    {
        "title": "Baga Beach",
        "location": "Goa",
        "description": "One of Goa’s most famous beaches, Baga Beach is known for its vibrant nightlife, water sports, and beautiful sunsets. It’s a popular spot for tourists looking to relax, party, or indulge in beach activities. The beach also offers a variety of restaurants and shacks for dining."
    },
    {
        "title": "Fort Aguada",
        "location": "Goa",
        "description": "Fort Aguada is a historical fort located on the shores of the Arabian Sea. Built by the Portuguese in the 17th century, it offers spectacular views of the sea and is a perfect spot for history enthusiasts and nature lovers alike. The fort also houses a lighthouse."
    },
    {
        "title": "Dudhsagar Waterfalls",
        "location": "Goa",
        "description": "Located in the Bhagwan Mahavir Wildlife Sanctuary, Dudhsagar Waterfalls is one of the tallest waterfalls in India. The waterfall cascades down in a breathtaking manner, and visitors can enjoy trekking, jeep safaris, and scenic views in the area."
    },
    {
        "title": "Calangute Beach",
        "location": "Goa",
        "description": "Known as the 'Queen of Beaches,' Calangute is a bustling and lively beach with a wide range of water sports and beach activities. It’s ideal for tourists looking for a fun-filled day by the sea, with many shops, cafes, and restaurants in the vicinity."
    },
    {
        "title": "Church of Our Lady of the Immaculate Conception",
        "location": "Panaji, Goa",
        "description": "Located in Panaji, the Church of Our Lady of the Immaculate Conception is a beautiful example of colonial architecture. The church is famous for its whitewashed exterior and offers a peaceful atmosphere for reflection and prayer."
    },
    {
        "title": "Anjuna Beach",
        "location": "Goa",
        "description": "Anjuna Beach is known for its laid-back atmosphere, making it an ideal spot for relaxation and unwinding. The beach also has a vibrant market and several beach parties, attracting backpackers and party-goers from all around the world."
    },
    {
        "title": "Chapora Fort",
        "location": "Goa",
        "description": "Famously featured in the Bollywood film 'Dil Chahta Hai,' Chapora Fort offers stunning views of Vagator Beach and the Arabian Sea. The fort is a popular destination for photography, offering a glimpse into Goa’s colonial past."
    },
    {
        "title": "Basilica of Bom Jesus",
        "location": "Old Goa",
        "description": "The Basilica of Bom Jesus in Old Goa is one of the oldest churches in India and a UNESCO World Heritage site. The church houses the tomb of St. Francis Xavier and is an important pilgrimage site for Catholics."
    },
    {
        "title": "Colva Beach",
        "location": "South Goa",
        "description": "Located in South Goa, Colva Beach is known for its pristine white sand and peaceful surroundings. It is less crowded than other beaches in North Goa, making it a perfect spot for those seeking tranquility and a quiet day by the sea."
    },
    {
        "title": "Goa State Museum",
        "location": "Panaji, Goa",
        "description": "The Goa State Museum in Panaji showcases the rich history and culture of Goa. With a vast collection of artifacts, sculptures, and historical exhibits, it’s an excellent place to learn more about Goa’s heritage and past."
    }
],



"services": [
    {
        "name": "Pune to Goa Cab Service",
        "description": "Morya Cab provides reliable and comfortable cab services for your journey from Pune to Goa. Whether you're traveling for leisure, business, or a quick getaway, we ensure a smooth and enjoyable ride with experienced drivers."
    },
    {
        "name": "Pune to Goa Taxi Fare",
        "description": "Morya Cab offers competitive and transparent taxi fares for your Pune to Goa journey. Our pricing is designed to be budget-friendly while maintaining comfort and quality of service. No hidden charges, just honest and fair pricing."
    },
    {
        "name": "Pune to Goa Cab Booking",
        "description": "Booking a cab from Pune to Goa with Morya Cab is easy and convenient. You can book your taxi online or by phone, ensuring a hassle-free travel experience for your Goa trip."
    },
    {
        "name": "Pune to Goa Car Rental",
        "description": "Morya Cab offers flexible car rental services for your journey from Pune to Goa. Whether you need a self-drive car or prefer a chauffeur-driven option, we provide a range of vehicles to suit your preferences and travel requirements."
    },
    {
        "name": "Pune to Goa One-Way Taxi",
        "description": "For a direct and convenient ride, Morya Cab offers one-way taxi services from Pune to Goa. Enjoy a smooth ride with a professional driver, and reach your destination without any hassle."
    },
    {
        "name": "Pune to Goa Round Trip Cabs",
        "description": "Morya Cab offers round-trip cab services for your Pune to Goa journey. Whether you're planning to stay for a few days or simply need a return trip, we provide flexible round-trip options to suit your schedule and needs."
    },
    {
        "name": "Pune to Goa Cab Service",
        "description": "Morya Cab provides dependable and comfortable taxi services between Pune and Goa. We ensure your ride is safe, punctual, and enjoyable with experienced drivers and well-maintained vehicles."
    },
    {
        "name": "Pune to Goa Drop Taxi",
        "description": "Need a taxi for a drop from Pune to Goa? Morya Cab offers direct drop services, ensuring you reach your destination comfortably and on time. We make your journey convenient and stress-free."
    },
    {
        "name": "Pune to Goa Luxury Taxi",
        "description": "For a premium travel experience, Morya Cab offers luxury taxi services from Pune to Goa. Enjoy a first-class ride with our luxury vehicles, perfect for those who want extra comfort and style on their journey."
    },
    {
        "name": "Pune to Goa Shared Taxi",
        "description": "Morya Cab provides shared taxi services for those looking to save on travel costs. Share the ride with others while still enjoying a comfortable and reliable service from Pune to Goa."
    },
    {
        "name": "Pune to Goa Taxi Booking",
        "description": "Booking a taxi for your Pune to Goa trip is simple with Morya Cab. We offer flexible booking options, whether you prefer to book online or by phone, ensuring you can reserve your ride whenever it’s convenient for you."
    },
    {
        "name": "Pune to Goa Taxi Online",
        "description": "You can easily book your Pune to Goa taxi online with Morya Cab. With just a few clicks, you can secure your ride and enjoy a hassle-free travel experience to Goa."
    },
    {
        "name": "Pune to Goa Private Taxi",
        "description": "For a more personalized experience, Morya Cab offers private taxi services from Pune to Goa. Travel at your own pace with a dedicated vehicle and driver, ensuring maximum comfort and convenience."
    },
    {
        "name": "Pune to Goa Taxi Charges",
        "description": "Morya Cab offers transparent taxi charges for your Pune to Goa trip. We provide competitive pricing with no hidden fees, ensuring you get the best value for your journey."
    },
    {
        "name": "Pune to Goa Tour Package",
        "description": "Morya Cab also offers customized Goa tour packages from Pune. These packages include transportation, sightseeing, and more, giving you a comprehensive and relaxing travel experience to explore the beauty of Goa."
    },
    {
        "name": "Pune to Goa Cab Contact Information",
        "description": "Contact Morya Cab at +91 9359401610 for prompt and efficient Pune to Goa cab services. We ensure a smooth and enjoyable ride for all our customers, making your journey comfortable and stress-free. Book your Pune to Goa cab today!"
    }
],

tableData: [
    ["Pune to Goa Cab Service", "-Pune to Goa Taxi Fare"],
    ["Pune to Goa Cab Booking", "-Pune to Goa Car Rental"],
    ["Pune to Goa One-Way Taxi", "-Pune to Goa Round Trip Cabs"],
    ["Pune to Goa Cab Service", "-Pune to Goa Drop Taxi"],
    ["Pune to Goa Luxury Taxi", "-Pune to Goa Shared Taxi"],
    ["Pune to Goa Taxi Booking", "-Pune to Goa Taxi Online"],
    ["Pune to Goa Private Taxi", "-Pune to Goa Taxi Charges"],
    ["Pune to Goa Tour Package", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand that punctuality is essential when traveling from Pune to Goa. Whether you’re going for a relaxing vacation, a family trip, or a corporate outing, we ensure timely pickups and drop-offs to make your journey smooth and on time."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet includes a variety of vehicles, all designed for comfort. Enjoy ample legroom, air conditioning, and comfortable seating throughout your journey from Pune to Goa. Whether you're traveling alone, with family, or in a group, we have the perfect vehicle for you."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced in handling long-distance travel and are familiar with the best routes from Pune to Goa. They ensure a smooth, safe, and efficient journey while offering assistance along the way, making your trip stress-free."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We offer competitive pricing with no hidden charges. Our transparent pricing model means you know exactly what to expect before you start your journey, so you can relax and focus on enjoying your trip."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. Our vehicles are regularly maintained and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure your journey is safe and comfortable."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether it’s an early morning departure or a late-night return, Morya Cab is available around the clock. Our customer service team is always ready to assist you with booking and other inquiries whenever you need us."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi for your Pune to Goa trip is simple and hassle-free. You can book online via our website or mobile app, or contact our customer service team for personalized assistance. We aim to make the booking process as smooth as possible."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're traveling for leisure, business, or a special event, we offer customized travel packages for your Pune to Goa trip. Let us know your preferences, and we’ll tailor the journey according to your needs."
    }
]





    }


    const faqData = [
        {
          question: "How can I book a Pune to Goa taxi with Morya Cab?",
          answer: "Booking is easy! You can book your taxi online through our website or mobile app, or you can reach out to our customer service team for assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are experienced and skilled in handling long-distance routes like Pune to Goa. They know the best routes and ensure a smooth and safe journey."
        },
        {
          question: "What types of vehicles are available for Pune to Goa travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and luxury cars, all of which are well-maintained and designed for comfort during long journeys."
        },
        {
          question: "How do I pay for my Pune to Goa taxi rental?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Goa?",
          answer: "Yes, we offer round-trip services. Simply provide your return details during the booking, and we’ll handle the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be communicated to you upfront so you can make an informed decision before starting your journey."
        },
        {
          question: "Can I hire a taxi for sightseeing in Goa?",
          answer: "Yes, we offer sightseeing services in Goa. You can visit famous beaches, historical sites, and popular attractions, with a professional driver to guide you throughout your sightseeing tour."
        },
        {
          question: "What is the luggage allowance for a Pune to Goa taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have additional luggage or special requirements, please inform us during booking, and we will make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Goa?",
          answer: "Yes, we offer corporate travel services for business trips to Goa. We can provide customized packages based on your company’s requirements."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Goa travel?",
          answer: "Morya Cab provides reliable, affordable, and comfortable taxi services. With professional drivers, well-maintained vehicles, and flexible travel options, we ensure your trip to Goa is hassle-free and enjoyable."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rohit Deshmukh',
          role: 'Goa Traveler',
          review: 'Our trip from Pune to Goa was made so much easier with Morya Cab. The driver was courteous, the car was clean and comfortable, and we arrived on time. Highly recommend!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Priya Shah',
          role: 'Goa Traveler',
          review: 'We had a fantastic experience with Morya Cab for our Goa trip. The ride was smooth, the driver was knowledgeable, and the car was well-maintained. Definitely the best choice for a long-distance trip!',
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
    //     "description": "Book your Pune to Goa taxi with Morya Cab. Offering one-way and round-trip taxi services, including luxury cabs and shared taxis. Call +91 9359401610 for booking!",
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
    //       "https://moryacab.com/img/pune-to-goa-taxi.jpg",
    //       "https://moryacab.com/img/pune-to-goa-cab-service.jpg"
    //     ],
    //     "priceRange": "₹5000 - ₹8000",
    //     "offers": {
    //       "@type": "Offer",
    //       "url": "https://moryacab.com/pune-to-goa-taxi",
    //       "priceCurrency": "INR",
    //       "price": 6500,
    //       "priceValidUntil": "2025-12-31"
    //     },
    //     "aggregateRating": {
    //       "@type": "AggregateRating",
    //       "ratingValue": 4.8,
    //       "reviewCount": 200
    //     },
    //     "review": [
    //       {
    //         "@type": "Review",
    //         "author": {
    //           "@type": "Person",
    //           "name": "Vinay Kulkarni"
    //         },
    //         "datePublished": "2024-07-20",
    //         "reviewBody": "Great service. The ride was comfortable, and the driver was very professional. Had a wonderful trip from Pune to Goa."
    //       },
    //       {
    //         "@type": "Review",
    //         "author": {
    //           "@type": "Person",
    //           "name": "Snehal Deshmukh"
    //         },
    //         "datePublished": "2024-09-15",
    //         "reviewBody": "Affordable pricing, and the cab was in great condition. Had a very enjoyable journey to Goa. Highly recommend!"
    //       }
    //     ],
    //     "serviceArea": {
    //       "@type": "Place",
    //       "name": "Pune to Goa Taxi Service",
    //       "geo": {
    //         "@type": "GeoCoordinates",
    //         "latitude": 15.2993,
    //         "longitude": 74.1241
    //       }
    //     },
    //     "availableChannel": {
    //       "@type": "ServiceChannel",
    //       "serviceUrl": "https://moryacab.com/pune-to-goa-taxi"
    //     },
    //     "keywords": "Pune to Goa taxi, Pune to Goa cab service, Pune to Goa one-way taxi, Pune to Goa round trip, Pune to Goa car rental, Pune to Goa taxi fare, Pune to Goa luxury taxi, Pune to Goa shared taxi, Pune to Goa taxi booking, Pune to Goa drop taxi, Pune to Goa private taxi, Pune to Goa tour package"
    //   };
const puneToGoaTaxiSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Goa Taxi",
  "image": "https://moryacab.com/assets/images/pune-to-goa-taxi.jpg",
  "description": "Book Pune to Goa taxi with Morya Cabs for a comfortable journey. Choose from AC sedans, SUVs, or tempo travellers for one-way or round trip. Professional drivers, safe rides, and 24/7 customer service.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "15634",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "5999",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-goa-taxi"
  }
};




    return (
        <div>
            <UsePageTracking/>

<Helmet>
  <title>Pune to Goa Taxi | Book AC Sedan, SUV Cab at Best Fare | Morya Cabs</title>
  <meta
    name="description"
    content="Book Pune to Goa taxi with Morya Cabs for a comfortable journey. Choose from AC sedans, SUVs, or tempo travellers for one-way or round trip. Professional drivers, safe rides, and 24/7 customer service."
  />
  <meta
    name="keywords"
    content="Pune to Goa Taxi, Book Cab Pune to Goa, One-Way Taxi Pune to Goa, Round Trip Cab Pune Goa, AC Cab Pune to Goa, SUV Taxi Pune to Goa, Sedan Cab Pune to Goa, Tempo Traveller Pune to Goa, Morya Cabs Pune to Goa, Safe Cab to Goa from Pune, Affordable Pune Goa Taxi, Pune to Goa Road Trip Taxi"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToGoaTaxiSchema)}
  </script>
</Helmet>

 {/* <Helmet>
        <title>Pune to Goa Taxi | Affordable & Comfortable Cabs </title>
        <meta
          name="description"
          content="Book your Pune to Goa taxi with Morya Cab. Offering affordable one-way and round-trip taxi services, luxury cabs, and shared taxis. Reliable and professional drivers."
        />
        <meta name="keywords" content="Pune to Goa taxi, Pune to Goa cab service, Pune to Goa one-way taxi, Pune to Goa round trip, Pune to Goa car rental, Pune to Goa taxi fare, Pune to Goa luxury taxi, Pune to Goa shared taxi" />
        <meta property="og:title" content="Pune to Goa Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Pune to Goa taxi with Morya Cab. Affordable, reliable, and comfortable one-way and round-trip taxi services." />
        <meta property="og:url" content="https://moryacab.com/pune-to-goa-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-goa-taxi.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLD)}
        </script>
      </Helmet> 
      
      
      // t's showing on 7:5
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
                            <img src='/images/keyword/10.jpg' alt='img' />
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

export default Punetogoataxi;