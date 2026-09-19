
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetomahabaleshwartaxi() {



    const cardData =
    {
        keyword: 'Pune to Mahabaleshwar Taxi ',
        heading: 'Morya Cabs:  Pune to Mahabaleshwar Taxi  ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Mahabaleshwar. Whether you are planning a weekend getaway, a honeymoon, or a family vacation, our well-maintained fleet and professional drivers ensure a smooth and hassle-free journey. Pune to Mahabaleshwar is approximately 120 km, and the journey takes around 3 to 4 hours by road. Enjoy a safe and comfortable ride with our top-notch amenities and customer-centric service.',

        top: 'Top Places to Visit in Mahabaleshwar with Morya Cabs',

        "topPlaces": [
            {
                "title": "Arthur’s Seat",
                "description": "Arthur’s Seat is one of the most popular viewpoints in Mahabaleshwar, offering panoramic views of the surrounding valleys and the pristine Krishna River. The viewpoint is named after Arthur Malet, a British officer who used to frequent this spot. The dramatic cliffs and lush greenery make it an ideal place to enjoy the beauty of Mahabaleshwar."
            },
            {
                "title": "Venna Lake",
                "description": "Venna Lake is a beautiful man-made lake surrounded by lush forests. It’s a popular spot for boating and offers scenic views of the surrounding hills. Visitors can enjoy a peaceful boat ride or take a leisurely stroll along the lake’s shore. The nearby food stalls also offer delicious local snacks, making it a perfect spot for a family outing."
            },
            {
                "title": "Mapro Garden",
                "description": "Mapro Garden is a famous tourist spot in Mahabaleshwar, known for its fresh strawberries, jams, and syrups. Visitors can explore the garden, enjoy the delicious strawberry-based treats, and shop for locally produced jams and squashes. The garden is a great place to relax, sip on a fresh strawberry juice, and take in the picturesque surroundings."
            },
            {
                "title": "Pratapgad Fort",
                "description": "Pratapgad Fort is an iconic historical site located near Mahabaleshwar. Built by Chhatrapati Shivaji Maharaj, the fort offers stunning views of the surrounding valleys and hills. It holds immense historical significance and is an excellent spot for history buffs and adventure lovers alike. The trek up to the fort adds to the experience, with scenic views along the way."
            },
            {
                "title": "Elephant’s Head Point",
                "description": "Elephant’s Head Point is another famous viewpoint in Mahabaleshwar that offers breathtaking views of the Sahyadri mountain range. The point is named after the rock formation that resembles an elephant’s head. It’s a popular spot for photography, especially at sunset, when the views are nothing short of mesmerizing."
            },
            {
                "title": "Wilson Point",
                "description": "Wilson Point is the highest point in Mahabaleshwar, offering panoramic views of the entire hill station and its surroundings. This is a great spot to catch the sunrise, with its serene and picturesque landscape. The cool, crisp air and tranquil setting make it a perfect place to enjoy the morning in Mahabaleshwar."
            },
            {
                "title": "Lingmala Waterfall",
                "description": "Lingmala Waterfall is one of the most scenic waterfalls in Mahabaleshwar. The waterfall cascades down from a height of over 500 feet and is surrounded by lush greenery. The trek to the waterfall is short and easy, making it an ideal spot for a refreshing walk in nature. The views of the waterfall, especially during the monsoon season, are simply spectacular."
            },
            {
                "title": "Babbington Point",
                "description": "Babbington Point is a beautiful viewpoint located amidst thick forests. The point offers panoramic views of the valley and is a great place to relax and soak in the natural beauty of Mahabaleshwar. The tranquil surroundings make it a perfect spot for nature lovers to enjoy the peaceful atmosphere."
            },
            {
                "title": "Kate’s Point",
                "description": "Kate’s Point is one of the most famous viewpoints in Mahabaleshwar, known for its spectacular views of the Krishna Valley, the Dhom Dam, and the surrounding hills. The viewpoint is named after Kate, a British woman who was a frequent visitor to Mahabaleshwar. The sweeping vistas of the valley below make it an ideal spot for photography and relaxation."
            },
            {
                "title": "Maha Lakshmi Temple",
                "description": "The Maha Lakshmi Temple in Mahabaleshwar is a beautiful temple dedicated to Goddess Lakshmi. The temple is an important pilgrimage site and is known for its serene and spiritual ambiance. The temple is located amidst lush greenery, and visiting it offers a peaceful escape from the bustling tourist spots in Mahabaleshwar."
            }
        ],



   "services": [
    {
        "name": "Pune to Mahabaleshwar Cab Service",
        "description": "Morya Cab offers reliable and comfortable cab services for your journey from Pune to Mahabaleshwar. Whether you're heading for a quick weekend getaway or a longer trip, we ensure a smooth and enjoyable ride with professional drivers."
    },
    {
        "name": "Pune to Mahabaleshwar Taxi Booking",
        "description": "Booking your taxi for Pune to Mahabaleshwar is easy with Morya Cab. You can book online or call us directly, and we'll ensure you get the best vehicle for your trip, tailored to your preferences and schedule."
    },
    {
        "name": "Pune to Mahabaleshwar Cab Price",
        "description": "Morya Cab offers competitive pricing for your Pune to Mahabaleshwar trip. With transparent and affordable rates, you’ll get great value without compromising on comfort or service quality."
    },
    {
        "name": "Pune to Mahabaleshwar Car Hire",
        "description": "Need a car for your Pune to Mahabaleshwar journey? Morya Cab offers flexible car hire services with a range of vehicles to suit your needs. Whether you’re traveling solo or with a group, we have the perfect car for you."
    },
    {
        "name": "Pune to Mahabaleshwar Taxi Fare",
        "description": "Morya Cab offers affordable and transparent taxi fares for your journey to Mahabaleshwar from Pune. We ensure no hidden charges and clear pricing, so you can plan your trip with confidence."
    },
    {
        "name": "Pune to Mahabaleshwar Package",
        "description": "Morya Cab provides customized travel packages for your Pune to Mahabaleshwar trip. Whether you’re looking for a quick weekend escape or a full tour, we offer tailored packages that fit your needs and budget."
    },
    {
        "name": "Pune to Mahabaleshwar 2 Days Taxi",
        "description": "Planning a 2-day trip to Mahabaleshwar? Morya Cab offers convenient and affordable taxi services for 2-day trips, allowing you to explore the beauty of Mahabaleshwar with flexibility and comfort."
    },
    {
        "name": "Pune to Mahabaleshwar Taxi Service",
        "description": "Morya Cab provides reliable and efficient taxi services for your Pune to Mahabaleshwar journey. Our experienced drivers and well-maintained vehicles ensure that your trip is comfortable and stress-free."
    },
    {
        "name": "Pune to Mahabaleshwar Drop Taxi",
        "description": "Need a drop-off to Mahabaleshwar? Morya Cab offers convenient drop taxi services to get you directly to your destination from Pune. Our drivers ensure a smooth and timely journey."
    },
    {
        "name": "Pune to Mahabaleshwar One-Way Taxi",
        "description": "Morya Cab offers affordable and reliable one-way taxi services from Pune to Mahabaleshwar. Enjoy a comfortable and direct ride to your destination without any unnecessary stops."
    },
    {
        "name": "Pune to Mahabaleshwar Round Trip",
        "description": "For a round trip to Mahabaleshwar, Morya Cab provides flexible and budget-friendly options. We ensure that you have a smooth and timely journey, with a driver who knows the best routes for a quick and comfortable ride."
    },
    {
        "name": "Pune to Mahabaleshwar Private Taxi",
        "description": "For a more personalized travel experience, Morya Cab offers private taxi services from Pune to Mahabaleshwar. Travel in the comfort of your own vehicle, with the flexibility to stop as you please along the way."
    },
    {
        "name": "Pune to Mahabaleshwar Shared Taxi",
        "description": "Morya Cab provides shared taxi services for those looking for an affordable travel option. Share the ride with others, enjoy the scenic journey, and save on travel costs."
    },
    {
        "name": "Pune to Mahabaleshwar Cab Charges",
        "description": "Morya Cab offers clear and upfront cab charges for your Pune to Mahabaleshwar journey. No hidden costs, no surprises — just affordable, transparent pricing that helps you plan your trip easily."
    },
    {
        "name": "Pune to Mahabaleshwar Booking",
        "description": "Booking your cab for Pune to Mahabaleshwar is quick and easy with Morya Cab. Whether you book online or via phone, we provide seamless and hassle-free booking options to suit your schedule."
    },
    {
        "name": "Pune to Mahabaleshwar Cab Contact Information",
        "description": "Contact Morya Cab at +91 9371304510 for prompt and efficient Pune to Mahabaleshwar cab services. We ensure a smooth and enjoyable ride for all our customers, making your journey comfortable and stress-free. Book your Pune to Mahabaleshwar cab today!"
    }
],




tableData: [
    ["Pune to Mahabaleshwar Cab Service", "-Pune to Mahabaleshwar Taxi Booking"],
    ["Pune to Mahabaleshwar Cab Price", "-Pune to Mahabaleshwar Car Hire"],
    ["Pune to Mahabaleshwar Taxi Fare", "-Pune to Mahabaleshwar Package"],
    ["Pune to Mahabaleshwar 2 Days Taxi", "-Pune to Mahabaleshwar Taxi Service"],
    ["Pune to Mahabaleshwar Drop Taxi", "-Pune to Mahabaleshwar One-Way Taxi"],
    ["Pune to Mahabaleshwar Round Trip", "-Pune to Mahabaleshwar Private Taxi"],
    ["Pune to Mahabaleshwar Shared Taxi", "-Pune to Mahabaleshwar Cab Charges"],
    ["Pune to Mahabaleshwar Booking", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand that timely travel is crucial, especially for long trips like Pune to Mahabaleshwar. Our professional drivers ensure on-time pickups and drop-offs, so you can enjoy a smooth and hassle-free journey."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our vehicles are designed to provide the utmost comfort for your journey to Mahabaleshwar. With spacious interiors, plush seating, air conditioning, and ample legroom, we make sure you travel in comfort and style."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced and skilled in handling long-distance routes like Pune to Mahabaleshwar. They know the best routes and ensure a safe, comfortable, and enjoyable journey for you and your family or friends."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing with no hidden fees. We believe in transparency, so you'll know the exact fare before you start your trip, ensuring peace of mind and no surprises."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "We prioritize your safety by maintaining our vehicles to the highest standards. Our vehicles are equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols for a worry-free journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available 24/7 to cater to your travel needs, whether you need an early morning ride or a late-night return from Mahabaleshwar. Our customer service team is always available to assist you with bookings at any time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a Pune to Mahabaleshwar taxi is easy with Morya Cab. You can book online via our website or mobile app, or simply contact our customer service team for personalized assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're visiting Mahabaleshwar for relaxation, sightseeing, or a family getaway, we offer customized travel packages to suit your needs. Let us know your preferences, and we’ll tailor the journey to ensure you have a memorable experience."
    }
]







    }


    const faqData = [
        {
          question: "How can I book a Pune to Mahabaleshwar taxi with Morya Cab?",
          answer: "Booking a taxi is easy! You can book online via our website or mobile app, or you can contact our customer service team for assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are trained and experienced in handling long-distance journeys like Pune to Mahabaleshwar, ensuring a smooth and comfortable ride."
        },
        {
          question: "What types of vehicles are available for Pune to Mahabaleshwar travel?",
          answer: "We offer a variety of well-maintained vehicles, including sedans, SUVs, and premium cars, designed to ensure a comfortable and enjoyable journey."
        },
        {
          question: "How do I pay for my Pune to Mahabaleshwar taxi rental?",
          answer: "We accept multiple payment methods, including cash, credit/debit cards, and online payments through our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Mahabaleshwar?",
          answer: "Yes, you can book a round trip. Simply provide us with your return details during the booking, and we will take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges, such as waiting time or detours, will be communicated to you upfront, ensuring full transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Mahabaleshwar?",
          answer: "Yes, we offer sightseeing services in Mahabaleshwar. Visit popular attractions like Venna Lake, Pratapgad Fort, and Mapro Garden with an experienced driver who will make your journey more enjoyable."
        },
        {
          question: "What is the luggage allowance for a Pune to Mahabaleshwar taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have more luggage or special requirements, please let us know during the booking process, and we’ll accommodate your needs."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Mahabaleshwar?",
          answer: "Yes, we offer corporate travel services between Pune and Mahabaleshwar, with customized packages designed to meet the specific needs of your company."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Mahabaleshwar travel?",
          answer: "Morya Cab offers reliable service, well-maintained vehicles, professional drivers, and competitive pricing. We ensure a comfortable, safe, and pleasant journey every time."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Sanjay Joshi',
          role: 'Traveller',
          review: 'We had a wonderful experience traveling to Mahabaleshwar with Morya Cab. The vehicle was clean and spacious, and the driver was very courteous and professional. I highly recommend Morya Cab for a smooth trip!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Nisha Patil',
          role: 'Traveller',
          review: 'Our family had a great time visiting Mahabaleshwar. The driver was friendly, and the car was comfortable for the long journey. I would definitely choose Morya Cab again for future trips.',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
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
        "name": "Morya Cabs",
        "description": "Book reliable and affordable Pune to Mahabaleshwar taxi service. We offer one-way, round trip, luxury, and private taxis for a comfortable journey.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9371304510",
        "url": "https://moryacab.com/pune-to-mahabaleshwar-taxi",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-to-mahabaleshwar-taxi.jpg",
          "https://moryacab.com/img/mahabaleshwar-taxi.jpg"
        ],
        "priceRange": "₹2500 - ₹5000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-mahabaleshwar-taxi",
          "priceCurrency": "INR",
          "price": 3000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "reviewCount": 150
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Amit Sharma"
            },
            "datePublished": "2024-09-15",
            "reviewBody": "Wonderful trip to Mahabaleshwar with Morya Cabs. The driver was professional, and the car was very clean. Highly recommend for a smooth and hassle-free journey!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sita Rao"
            },
            "datePublished": "2024-10-20",
            "reviewBody": "We had an amazing experience with Morya Cabs. Affordable pricing and great service for our trip from Pune to Mahabaleshwar. Will definitely use them again!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Mahabaleshwar Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5960,
            "longitude": 73.7360
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-mahabaleshwar-taxi"
        },
        "keywords": "Pune to Mahabaleshwar taxi, Pune to Mahabaleshwar cab service, Pune to Mahabaleshwar one-way taxi, Mahabaleshwar taxi fare, taxi service Pune to Mahabaleshwar"
      };

    return (
        <div>
            <UsePageTracking/>
             <Helmet>
        <title>Pune to Mahabaleshwar Taxi | Reliable Cab Service | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book reliable and affordable Pune to Mahabaleshwar taxi service. Choose from one-way, round trip, private, luxury, or shared taxis. Book your ride today!"
        />
        <meta name="keywords" content="Pune to Mahabaleshwar taxi, Mahabaleshwar one-way taxi, Pune to Mahabaleshwar cab, affordable taxi from Pune to Mahabaleshwar" />
        <meta property="og:title" content="Pune to Mahabaleshwar Taxi | Morya Cabs" />
        <meta property="og:description" content="Affordable and reliable Pune to Mahabaleshwar taxi service with private, luxury, and shared options. Book online for a smooth journey!" />
        <meta property="og:url" content="https://moryacab.com/pune-to-mahabaleshwar-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-mahabaleshwar-taxi.jpg" />
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
                            <img src='/images/keyword/5.jpg' alt='img' />
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

export default Punetomahabaleshwartaxi;