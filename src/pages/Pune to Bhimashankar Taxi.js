
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetobhimashankartaxi() {



    const cardData =
    {
        keyword: 'Pune to Bhimashankar Taxi ',
        heading: 'Morya Cabs:  Pune to Bhimashankar Taxi ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Bhimashankar. Whether you are traveling for a spiritual visit or a nature retreat, our well-maintained fleet and professional drivers ensure a smooth and hassle-free journey. Bhimashankar is approximately 110 km from Pune, and the journey takes around 3 to 4 hours by road. Enjoy a safe and comfortable ride with our top-notch amenities and customer-centric service.',

        top: 'Top Places to Visit in Bhimashankar with Morya Cabs',

        topPlaces: [
            {
                "title": "Bhimashankar Temple",
                "description": "One of the 12 Jyotirlingas of Lord Shiva, Bhimashankar Temple is a highly revered pilgrimage site. Nestled in the Sahyadri Hills, the temple's ancient Nagara-style architecture and spiritual ambiance attract devotees from all over India. The temple is surrounded by dense forests, adding to its mystical charm. Devotees visit Bhimashankar to seek blessings and experience the divine energy of this sacred place."
            },
            {
                "title": "Bhimashankar Wildlife Sanctuary",
                "description": "The Bhimashankar Wildlife Sanctuary is a paradise for nature lovers and wildlife enthusiasts. Spread across the Western Ghats, the sanctuary is home to diverse flora and fauna, including the rare Indian Giant Squirrel. Visitors can explore nature trails, birdwatch, and enjoy the serenity of the lush greenery. The sanctuary offers a perfect retreat for those looking to connect with nature."
            },
            {
                "title": "Gupt Bhimashankar",
                "description": "A lesser-known but spiritually significant site, Gupt Bhimashankar is believed to be the original place where Lord Shiva manifested as a Jyotirlinga. Located deep within the forest, this hidden shrine offers a tranquil and meditative atmosphere. The journey to Gupt Bhimashankar involves a scenic trek, making it a rewarding experience for adventure seekers and devotees alike."
            },
            {
                "title": "Hanuman Lake",
                "description": "Hanuman Lake is a peaceful spot surrounded by dense forests and hills. Named after Lord Hanuman, the lake is a great place to relax and enjoy nature. The calm waters and the lush green surroundings make it an ideal destination for picnics and nature walks. Visitors often spot various bird species, adding to the charm of this hidden gem."
            },
            {
                "title": "Nagphani (Duke’s Nose)",
                "description": "Nagphani, also known as Duke’s Nose, is a popular trekking destination near Bhimashankar. The viewpoint offers breathtaking panoramic views of the Sahyadri mountain range. Adventure enthusiasts visit Nagphani for trekking and rock climbing. The cool breeze and scenic landscapes make the trek an unforgettable experience."
            },
            {
                "title": "Ahupe Ghat",
                "description": "Ahupe Ghat is a stunning mountain pass that connects the Deccan Plateau with the Konkan region. It is known for its mesmerizing views of valleys, waterfalls, and lush greenery. Trekkers and nature lovers often visit Ahupe Ghat to experience the beauty of the Western Ghats. The ghat is also home to a small tribal village, offering a glimpse into the traditional lifestyle of the locals."
            },
            {
                "title": "Bombay Point",
                "description": "Bombay Point is a scenic viewpoint offering spectacular views of the surrounding hills and valleys. It is a perfect spot to witness sunrise and sunset. The cool and refreshing climate, along with the panoramic vistas, makes it a must-visit destination for travelers seeking natural beauty. Photographers often visit Bombay Point to capture the stunning landscapes."
            },
            {
                "title": "Sahyadri Hills Trekking Trails",
                "description": "Bhimashankar is a popular trekking destination, with multiple trails leading through dense forests, waterfalls, and rocky terrains. The Sahyadri Hills offer trekking experiences suitable for both beginners and experienced trekkers. The monsoon season enhances the beauty of these trails, making them even more scenic and adventurous."
            },
            {
                "title": "Bhorgiri Fort",
                "description": "Bhorgiri Fort is an ancient fort located near Bhimashankar. The fort offers an exciting trek through dense forests and provides stunning views from the top. History enthusiasts visit Bhorgiri Fort to explore its ruins and learn about its historical significance. The trek to the fort is filled with adventure, making it a popular destination among thrill-seekers."
            },
            {
                "title": "Shivneri Fort",
                "description": "Located a little further from Bhimashankar, Shivneri Fort is the birthplace of Chhatrapati Shivaji Maharaj. The fort is a historical treasure and attracts visitors who are interested in Maratha history. The trek to the fort is moderately challenging but rewarding, as it offers magnificent views of the surrounding landscapes."
            }
        ],



       "services": [
    {
        "name": "Pune to Bhimashankar Cab",
        "description": "Morya Cab offers comfortable and reliable cab services for your journey from Pune to Bhimashankar. Enjoy a smooth and hassle-free ride, whether you're visiting for a spiritual trip or leisure. Book your Pune to Bhimashankar cab with us today!"
    },
    {
        "name": "Pune to Bhimashankar Taxi Fare",
        "description": "Morya Cab provides affordable and transparent taxi fares for your Pune to Bhimashankar trip. Our prices are competitive, ensuring that you get the best value for your journey, without any hidden charges."
    },
    {
        "name": "Pune to Bhimashankar Cab Service",
        "description": "Choose Morya Cab for a comfortable and reliable cab service from Pune to Bhimashankar. Our professional drivers and well-maintained vehicles guarantee a smooth and enjoyable journey every time."
    },
    {
        "name": "Pune to Bhimashankar Cab Charges",
        "description": "Morya Cab offers clear and upfront charges for your Pune to Bhimashankar trip. We ensure that you’re aware of the cost of your journey beforehand, so you can plan accordingly and travel with peace of mind."
    },
    {
        "name": "Pune to Bhimashankar Taxi Booking",
        "description": "Booking a taxi from Pune to Bhimashankar is easy with Morya Cab. Whether you're booking online or via phone, we offer flexible booking options to suit your schedule. Make your journey stress-free by booking with us!"
    },
    {
        "name": "Pune to Bhimashankar Cab Price",
        "description": "Get competitive pricing with Morya Cab for your Pune to Bhimashankar journey. We offer fair prices without compromising on comfort or service quality. Contact us for an accurate price estimate for your trip."
    },
    {
        "name": "Pune to Bhimashankar by Cab",
        "description": "For a smooth and convenient ride from Pune to Bhimashankar, Morya Cab is the perfect choice. Enjoy a relaxing journey with professional drivers and well-maintained vehicles. Book your cab today for a stress-free experience."
    },
    {
        "name": "Pune to Bhimashankar Temple Taxi",
        "description": "Planning a visit to the Bhimashankar Temple? Morya Cab offers specialized temple taxi services, ensuring a comfortable and safe journey from Pune to Bhimashankar. Our drivers are familiar with the best routes for a quick and smooth ride."
    },
    {
        "name": "Pune to Bhimashankar Car Rental",
        "description": "Looking to rent a car for your Pune to Bhimashankar trip? Morya Cab provides flexible car rental services, giving you the freedom to travel at your own pace. Choose from a range of vehicles for your journey."
    },
    {
        "name": "Pune to Bhimashankar One-Way Taxi",
        "description": "If you're looking for a one-way ride from Pune to Bhimashankar, Morya Cab offers affordable and reliable one-way taxi services. We ensure that you get a direct and convenient ride to your destination."
    },
    {
        "name": "Pune to Bhimashankar Round Trip",
        "description": "For a round trip to Bhimashankar, Morya Cab offers convenient and flexible options. We ensure that your journey is comfortable and punctual, with professional drivers and quality vehicles to make your trip hassle-free."
    },
    {
        "name": "Pune to Bhimashankar Luxury Taxi",
        "description": "For those who prefer luxury and comfort, Morya Cab offers luxury taxi services for your Pune to Bhimashankar trip. Enjoy a premium experience with enhanced comfort, extra space, and smooth travel."
    },
    {
        "name": "Pune to Bhimashankar Shared Taxi",
        "description": "Morya Cab provides shared taxi services for those seeking a budget-friendly option for their Pune to Bhimashankar journey. Share the ride with others and enjoy the comfort and convenience of a shared journey at an affordable price."
    },
    {
        "name": "Pune to Bhimashankar Taxi Service",
        "description": "Morya Cab’s taxi services for Pune to Bhimashankar are reliable, comfortable, and efficient. Whether you're traveling for business or leisure, we provide the best service with professional drivers and well-maintained vehicles."
    },
    {
        "name": "Pune to Bhimashankar Cab Contact Information",
        "description": "Contact Morya Cab at +91 9359401610 for prompt and efficient Pune to Bhimashankar cab services. We ensure a smooth and enjoyable ride for all our customers, making your journey comfortable and stress-free. Book your Pune to Bhimashankar cab today!"
    }
],




tableData: [
    ["Pune to Bhimashankar Cab", "-Pune to Bhimashankar Taxi Fare"],
    ["Pune to Bhimashankar Cab Service", "-Pune to Bhimashankar Cab Charges"],
    ["Pune to Bhimashankar Taxi Booking", "-Pune to Bhimashankar Cab Price"],
    ["Pune to Bhimashankar by Cab", "-Pune to Bhimashankar Temple Taxi"],
    ["Pune to Bhimashankar Car Rental", "-Pune to Bhimashankar One-Way Taxi"],
    ["Pune to Bhimashankar Round Trip", "-Pune to Bhimashankar Luxury Taxi"],
    ["Pune to Bhimashankar Shared Taxi", "-Pune to Bhimashankar Taxi Service"],
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of time when traveling from Pune to Bhimashankar. Whether it's a peaceful spiritual visit or a quick getaway, our drivers ensure timely pickups and drop-offs to keep your trip hassle-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a range of comfortable vehicles for your journey to Bhimashankar. With spacious interiors, air conditioning, and comfortable seating, our vehicles are designed for a smooth and relaxed ride."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced in handling long-distance trips and are familiar with the best routes to Bhimashankar. Their professionalism ensures a safe, smooth, and comfortable journey every time."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for your Pune to Bhimashankar trip. There are no hidden charges, and we provide a clear breakdown of costs, so you know exactly what to expect."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. Our vehicles are equipped with modern safety features, such as airbags, seat belts, and GPS tracking, ensuring you a secure and comfortable ride throughout the trip."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates around the clock, so whether you're planning an early morning trip or a late-night return, we are always available to cater to your needs. Our customer service team is here to assist you at any time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a Pune to Bhimashankar taxi with Morya Cab is easy and convenient. You can book through our website, mobile app, or contact our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're visiting Bhimashankar for religious purposes or leisure, we offer customized travel packages tailored to your needs and preferences. Let us know your requirements, and we'll make the trip special for you."
    }
]






    }



    const faqData = [
        {
          question: "How can I book a Pune to Bhimashankar taxi with Morya Cab?",
          answer: "Booking a taxi is simple! You can book online through our website or app, or contact our customer service team for any assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are highly skilled and experienced in long-distance travel, ensuring a smooth and safe journey to Bhimashankar."
        },
        {
          question: "What types of vehicles are available for Pune to Bhimashankar travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all well-maintained and designed for comfort on long trips."
        },
        {
          question: "How do I pay for my Pune to Bhimashankar taxi rental?",
          answer: "We offer flexible payment options, including cash, credit/debit cards, and online payment via our app, for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Bhimashankar?",
          answer: "Yes, round trips can be arranged. Simply provide us with your return details, and we will take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges, like waiting time or detours, will be clearly communicated to you upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Bhimashankar?",
          answer: "Yes, we offer sightseeing tours in Bhimashankar as part of your journey. Explore the famous Bhimashankar Temple and other attractions with our experienced drivers."
        },
        {
          question: "What is the luggage allowance for a Pune to Bhimashankar taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have more luggage or specific requirements, please inform us during the booking process, and we’ll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Bhimashankar?",
          answer: "Yes, we offer corporate travel services, including group trips or business-related visits, between Pune and Bhimashankar."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Bhimashankar travel?",
          answer: "Morya Cab ensures a reliable, affordable, and comfortable journey with professional drivers, well-maintained vehicles, and excellent customer service. We guarantee a safe and stress-free trip every time."
        }
      ];
      
    const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rohit Mehta',
          role: 'Traveller',
          review: 'I booked a cab with Morya Cab for a trip to Bhimashankar. The driver was prompt, and the vehicle was clean and comfortable. It was a smooth ride, and I felt very safe. Highly recommended!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Shubhangi Deshpande',
          role: 'Traveller',
          review: 'Our family had a great experience with Morya Cab on our trip to Bhimashankar. The vehicle was spacious and clean, and the driver was polite and professional. We’ll definitely book again for our next visit!',
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


    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "Morya Cabs",
        "description": "Book reliable and affordable Pune to Bhimashankar taxi service. We offer one-way, round trip, temple taxi, private taxis, luxury taxis, and shared cabs for a comfortable journey.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9359401610",
        "url": "https://moryacab.com/pune-to-bhimashankar-taxi",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-to-bhimashankar-taxi.jpg",
          "https://moryacab.com/img/bhimashankar-taxi.jpg"
        ],
        "priceRange": "₹1500 - ₹3500",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-bhimashankar-taxi",
          "priceCurrency": "INR",
          "price": 2500,
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
              "name": "Amit Patil"
            },
            "datePublished": "2024-10-15",
            "reviewBody": "The trip from Pune to Bhimashankar was excellent! The car was comfortable and the driver was very knowledgeable about the route. Highly recommend Morya Cabs for a hassle-free journey."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sneha Deshmukh"
            },
            "datePublished": "2024-09-25",
            "reviewBody": "I had a great experience traveling to Bhimashankar. The driver was friendly and the car was clean. It was a smooth ride all the way!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Bhimashankar Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.8369,
            "longitude": 73.4807
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-bhimashankar-taxi"
        },
        "keywords": "Pune to Bhimashankar taxi, Pune to Bhimashankar cab, Bhimashankar temple taxi, Pune to Bhimashankar one-way taxi, Pune to Bhimashankar round trip, Bhimashankar taxi booking, Pune to Bhimashankar luxury taxi, Pune to Bhimashankar shared taxi"
      };
    


    return (
        <div>
            <UsePageTracking/>
  <Helmet>
        <title>Pune to Bhimashankar Taxi | Reliable and Affordable Taxi Service | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book your reliable Pune to Bhimashankar taxi service. Choose from one-way, round trip, temple taxi, luxury, and shared cabs for your journey."
        />
        <meta name="keywords" content="Pune to Bhimashankar taxi, Pune to Bhimashankar cab, Pune to Bhimashankar taxi booking, Bhimashankar temple taxi, Pune to Bhimashankar luxury taxi, Pune to Bhimashankar one-way taxi" />
        <meta property="og:title" content="Pune to Bhimashankar Taxi | Morya Cabs" />
        <meta property="og:description" content="Book your Pune to Bhimashankar taxi with Morya Cabs. Choose from one-way, round trip, temple taxi, and more for a comfortable ride." />
        <meta property="og:url" content="https://moryacab.com/pune-to-bhimashankar-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-bhimashankar-taxi.jpg" />
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
                            <img src='/images/keyword/2.jpg' alt='img' />
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

export default Punetobhimashankartaxi;