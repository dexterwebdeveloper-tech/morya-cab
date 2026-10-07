
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoshirditaxi() {



    const cardData =
    {
        keyword: 'Pune to Shirdi Taxi Services',
        heading: 'Morya Cabs:  Pune to Shirdi Taxi Services',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Shirdi. Whether you are traveling for a spiritual visit or a weekend getaway, our well-maintained fleet and professional drivers ensure a smooth and hassle-free journey. Enjoy a safe and comfortable ride with our top-notch amenities and customer-centric service.',

        top: 'Top Places to Visit in Shirdi with Morya Cabs',

        topPlaces: [
            {
                "title": "Shirdi Sai Baba Temple",
                "description": "The sacred temple of Sai Baba is the main attraction of Shirdi. It is one of the most visited pilgrimage sites in India, attracting millions of devotees every year. The temple complex houses the Samadhi (final resting place) of Sai Baba, where devotees offer prayers and seek his blessings. The temple remains open throughout the day, allowing visitors to experience the divine aura and participate in the Aarti and Prasadam distribution."
            },
            {
                "title": "Dwarkamai",
                "description": "Dwarkamai is an important spiritual site in Shirdi, where Sai Baba spent a significant part of his life. It is believed that Sai Baba performed many miracles here, healing the sick and guiding his devotees. The mosque-turned-temple still preserves his sacred Dhuni (holy fire), which continues to burn even today. Pilgrims visit Dwarkamai to witness its spiritual energy and pay homage to Sai Baba’s teachings."
            },
            {
                "title": "Chavadi",
                "description": "Chavadi is a historically significant place in Shirdi, as Sai Baba used to stay here on alternate nights. It was here that his last journey took place before attaining Mahasamadhi. The site now serves as a sacred shrine, and a grand procession is held every Thursday in his honor. Devotees visit Chavadi to experience its divine atmosphere and relive the moments of Sai Baba’s life."
            },
            {
                "title": "Shani Shingnapur",
                "description": "Located about 70 km from Shirdi, Shani Shingnapur is famous for its temple dedicated to Lord Shani, the deity associated with justice and discipline. What makes this village unique is that none of the houses have doors, as people believe that Lord Shani protects them from thefts and misfortunes. Pilgrims visit this site to offer prayers and seek blessings for prosperity and protection."
            },
            {
                "title": "Khandoba Temple",
                "description": "The Khandoba Temple is an ancient temple dedicated to Lord Khandoba, a form of Lord Shiva. It is considered the place where Sai Baba was first welcomed into Shirdi. The temple holds immense religious significance and is visited by devotees seeking divine grace. The temple’s historical importance and peaceful surroundings make it a must-visit attraction for pilgrims."
            },
            {
                "title": "Lendi Baug",
                "description": "Lendi Baug is a serene garden where Sai Baba used to meditate and spend time in solitude. The garden is home to a sacred lamp, which Baba lit and continues to burn even today. The beautifully maintained garden provides a tranquil atmosphere for devotees who come here to reflect and find inner peace. The presence of spiritual energy in Lendi Baug makes it a significant part of the Shirdi pilgrimage."
            },
            {
                "title": "Gurusthan",
                "description": "Gurusthan is the place where Sai Baba was first seen in Shirdi as a young ascetic. It is believed that he spent a lot of time under a neem tree in deep meditation. Today, a small shrine with a portrait of Sai Baba and a sacred neem tree stands at Gurusthan. Devotees visit this site to pay their respects and seek blessings for spiritual enlightenment."
            },
            {
                "title": "Wet N Joy Water Park",
                "description": "Wet N Joy Water Park is a fun-filled attraction near Shirdi, offering a refreshing break for families and kids. The park features a variety of thrilling water rides, slides, wave pools, and lazy rivers, making it an exciting destination for adventure seekers. Visitors looking for entertainment after their spiritual visit can enjoy a joyful time at this amusement park."
            },
            {
                "title": "Sai Heritage Village",
                "description": "Sai Heritage Village is a unique theme park that beautifully depicts the life and miracles of Sai Baba through sculptures and exhibits. The village offers a glimpse into the rural lifestyle of Sai Baba’s time, along with various artistic representations of his teachings. It is an educational and inspiring place for devotees who want to learn more about Sai Baba’s legacy."
            },
            {
                "title": "Maruti Mandir",
                "description": "Maruti Mandir is one of the oldest temples in Shirdi, dedicated to Lord Hanuman. The temple is located within the main temple complex and is frequently visited by devotees who seek strength and courage. The spiritual vibrations of the temple, combined with its historic significance, make it a revered site for Hanuman devotees and visitors to Shirdi."
            }
        ],



        "services": [
            {
                "name": "Cab Service in Alandi Pune",
                "description": "Morya Cabs offers reliable and affordable cab services in Alandi Pune. Whether you're looking for a local ride or an outstation trip, we provide punctual and comfortable transportation to meet all your needs."
            },
            {
                "name": "Cab Service in Alandi Pune Contact Number",
                "description": "For bookings or inquiries regarding cab services in Alandi Pune, contact Morya Cabs at +91 9359401610. Our team is available to assist you with your travel needs."
            },
            {
                "name": "Alandi to Mumbai Cabs Service",
                "description": "Book a convenient and comfortable cab service from Alandi to Mumbai with Morya Cabs. Our experienced drivers ensure that you reach your destination safely and on time, with a smooth ride throughout the journey."
            },
            {
                "name": "Alandi to Mumbai Airport Cabs",
                "description": "Need a ride from Alandi to Mumbai Airport? Morya Cabs offers timely and reliable airport transfer services. We guarantee a smooth and hassle-free journey to ensure you never miss a flight."
            },
            {
                "name": "Cab Service in Wadmukhwadi",
                "description": "Morya Cabs provides convenient and affordable taxi services in Wadmukhwadi. Whether for a short trip or a longer journey, our fleet of vehicles ensures a comfortable ride to your destination."
            },
            {
                "name": "Cab Service in Charholi Budruk",
                "description": "If you're looking for a reliable and safe cab service in Charholi Budruk, Morya Cabs is here to help. We offer a range of transportation options, from local rides to outstation trips, with competitive pricing."
            },
            {
                "name": "24 Hours Cab Service in Charholi",
                "description": "Morya Cabs offers 24-hour taxi services in Charholi. No matter the time of day, we are available to provide you with a safe and comfortable ride to any destination of your choice."
            },
            {
                "name": "Charholi to Mumbai Cab Service",
                "description": "Travel comfortably and affordably with Morya Cabs from Charholi to Mumbai. Our experienced drivers ensure a smooth and stress-free journey to and from your destination."
            },
            {
                "name": "Moshi to Mumbai Cab Service",
                "description": "For reliable and affordable cab services from Moshi to Mumbai, Morya Cabs is your go-to provider. We offer punctual rides, ensuring that you reach your destination on time."
            },
            {
                "name": "Moshi to Mumbai Cab Fare",
                "description": "The fare for a cab from Moshi to Mumbai is competitive and varies based on the type of vehicle you choose. Morya Cabs offers affordable pricing for a comfortable ride between these locations."
            },
            {
                "name": "Moshi to Mumbai Airport Cab Fare",
                "description": "For a smooth airport transfer from Moshi to Mumbai, Morya Cabs offers reasonable rates for your convenience. Whether it's a one-way trip or a round trip, we ensure timely arrival at your destination."
            },
            {
                "name": "Moshi to Mumbai Round Trip Cab Fare",
                "description": "Morya Cabs offers cost-effective pricing for round-trip services between Moshi and Mumbai. Enjoy a comfortable and punctual ride, making your round-trip travel convenient and affordable."
            },
            {
                "name": "Cab Service in Moshi",
                "description": "Looking for a reliable and affordable cab service in Moshi? Morya Cabs offers timely and professional transportation services, ensuring you reach your destination comfortably and on time."
            },
            {
                "name": "Cheapest Cab Service in Moshi",
                "description": "Morya Cabs offers the cheapest cab services in Moshi without compromising on quality. Our budget-friendly options ensure that you have a comfortable ride at an affordable price."
            },
            {
                "name": "Cab Service in Pune",
                "description": "Morya Cabs provides exceptional cab services in Pune. Whether you're looking for local rides or outstation trips, we offer timely, comfortable, and reliable transportation services for all your needs."
            },
            {
                "name": "Pune to Mumbai Airport Cab",
                "description": "Book your Pune to Mumbai Airport cab with Morya Cabs for a smooth, comfortable, and timely airport transfer. We ensure that you reach the airport safely and on time for your flight."
            },
            {
                "name": "Pune Mumbai Cab",
                "description": "Morya Cabs offers reliable and affordable cab services for travel between Pune and Mumbai. Whether for business or leisure, our services ensure a smooth and comfortable journey."
            },
            {
                "name": "Contact Morya Cabs for Booking",
                "description": "For bookings, contact Morya Cabs at +91 9359401610. We offer efficient, reliable, and professional services for all your travel needs, ensuring a smooth and comfortable journey every time."
            }
        ],




        tableData: [
            ["Pune to Shirdi Cab", "-Pune to Shirdi Taxi"],
            ["Pune to Shirdi Cab Package", "-Pune to Shirdi Cab Charges"],
            ["Pune to Shirdi Cab Fare", "-Pune to Shirdi Cab Service"],
            ["Pune to Shirdi Taxi Drop", "-Pune to Shirdi Car Rental"],
            ["Pune to Shirdi One-Way Taxi", "-Pune to Shirdi Round Trip"],
            ["Pune to Shirdi Luxury Taxi", "-Pune to Shirdi Shared Taxi"],
            ["Pune to Shirdi Private Cab", "-Pune to Shirdi Booking"],
            ["Pune to Shirdi Cab Price", ""]
        ],

        whychoose: [
            {
                "WhyChooseheading": "Reliable and On-Time Service",
                "WhyChoosedescription": "At Morya Cab, we value your time. Whether it's a spiritual journey or a quick trip, our drivers ensure prompt pickups and drop-offs for a timely, stress-free travel experience between Pune and Shirdi."
            },
            {
                "WhyChooseheading": "Comfortable and Spacious Vehicles",
                "WhyChoosedescription": "We offer well-maintained vehicles with comfortable seating and ample space for a relaxed trip. Enjoy a smooth ride with air conditioning and spacious interiors, ensuring your journey is pleasant from start to finish."
            },
            {
                "WhyChooseheading": "Experienced and Professional Drivers",
                "WhyChoosedescription": "Our drivers are trained professionals who are familiar with the best routes to Shirdi. With years of experience handling long-distance travel, they provide a safe, efficient, and comfortable experience for all passengers."
            },
            {
                "WhyChooseheading": "Affordable and Transparent Pricing",
                "WhyChoosedescription": "Morya Cab offers affordable pricing with no hidden charges. We believe in transparency, so you’ll know the exact cost upfront, making sure you get the best value for your money."
            },
            {
                "WhyChooseheading": "Safe and Comfortable Journey",
                "WhyChoosedescription": "Your safety is our top priority. Our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. All drivers adhere to strict safety protocols for a secure journey."
            },
            {
                "WhyChooseheading": "24/7 Availability",
                "WhyChoosedescription": "Whether you're traveling early in the morning or late at night, Morya Cab is available 24/7 for your convenience. Our customer service team is ready to assist you with your booking, no matter the time."
            },
            {
                "WhyChooseheading": "Hassle-Free Booking Process",
                "WhyChoosedescription": "Booking your Pune to Shirdi taxi with Morya Cab is quick and easy. You can book online through our website or app, or simply call our customer service for personalized assistance."
            },
            {
                "WhyChooseheading": "Customized Travel Packages",
                "WhyChoosedescription": "Whether it’s a pilgrimage trip or a personal visit, Morya Cab offers customized travel packages to suit your needs. We can tailor the trip based on your preferences for a more enjoyable journey."
            }
        ]






    }


    const faqData = [
        {
            question: "How can I book a Pune to Shirdi taxi with Morya Cab?",
            answer: "Booking is simple! You can book a taxi online through our website or app, or reach out to our customer service team for assistance."
        },
        {
            question: "Are the drivers experienced for long-distance travel?",
            answer: "Yes, all our drivers are skilled and experienced in long-distance travel. They are familiar with the best routes and ensure your journey is smooth and safe."
        },
        {
            question: "What types of vehicles are available for Pune to Shirdi travel?",
            answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all equipped for comfort and designed to meet your travel needs."
        },
        {
            question: "How do I pay for my Pune to Shirdi taxi rental?",
            answer: "We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app, for your convenience."
        },
        {
            question: "Can I book a round trip from Pune to Shirdi?",
            answer: "Yes, round trips can be easily arranged. Simply provide us with your return details, and we’ll make all the necessary arrangements for you."
        },
        {
            question: "Are there any extra charges for waiting or detours?",
            answer: "Any additional charges for waiting time or detours will be communicated to you before the journey begins, ensuring no surprises."
        },
        {
            question: "Can I hire a taxi for sightseeing in Shirdi?",
            answer: "Yes, we offer sightseeing services in Shirdi. You can visit key spots like the Shirdi Sai Baba Temple and other local attractions with one of our experienced drivers."
        },
        {
            question: "What is the luggage allowance for a Pune to Shirdi taxi?",
            answer: "Our vehicles can comfortably carry standard luggage. If you have larger items or specific requirements, let us know when booking, and we will make arrangements accordingly."
        },
        {
            question: "Is Morya Cab available for corporate travel between Pune and Shirdi?",
            answer: "Yes, we offer corporate travel services for trips from Pune to Shirdi, catering to business needs such as conferences or employee group travel."
        },
        {
            question: "Why should I choose Morya Cab for Pune to Shirdi travel?",
            answer: "Morya Cab offers a reliable, affordable, and safe travel experience with professional drivers and comfortable vehicles. Our customer-first approach ensures a hassle-free and enjoyable journey."
        }
    ];

    const testimonialData = [
        {
            id: 1,
            name: 'Mr. Ajay Patel',
            role: 'Traveller',
            review: 'I booked a cab with Morya Cab for a trip to Shirdi. The experience was seamless—the driver was on time, the vehicle was clean and spacious, and the ride was smooth. Definitely recommending it to my friends!',
            rating: 5,
            quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
            id: 2,
            name: 'Mrs. Priya Deshmukh',
            role: 'Traveller',
            review: 'Using Morya Cab for our family trip to Shirdi was the best decision. The vehicle was spacious and comfortable, and the driver was very professional and friendly. We had a great experience and would use their service again!',
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
        "description": "Book reliable and affordable Pune to Shirdi taxi service. We offer one-way, round trip, luxury taxis, private cabs, and shared taxis for your journey to Shirdi.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9359401610",
        "url": "https://moryacab.com/pune-to-shirdi-taxi",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-to-shirdi-taxi.jpg",
          "https://moryacab.com/img/shirdi-taxi.jpg"
        ],
        "priceRange": "₹2000 - ₹4000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-shirdi-taxi",
          "priceCurrency": "INR",
          "price": 2500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.9,
          "reviewCount": 150
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rahul Deshmukh"
            },
            "datePublished": "2024-11-05",
            "reviewBody": "Morya Cabs provided an excellent taxi service for our trip from Pune to Shirdi. The driver was very friendly and the car was clean and comfortable. Highly recommended for anyone visiting Shirdi."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Kulkarni"
            },
            "datePublished": "2024-09-15",
            "reviewBody": "I had a wonderful experience with Morya Cabs on my trip to Shirdi. The driver was punctual and professional. The ride was smooth and hassle-free. Great service!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Shirdi Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.7615,
            "longitude": 74.3137
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-shirdi-taxi"
        },
        "keywords": "Pune to Shirdi taxi, Pune to Shirdi cab, Shirdi taxi booking, Pune to Shirdi one-way taxi, Pune to Shirdi round trip, Pune to Shirdi luxury taxi, Pune to Shirdi private cab, Pune to Shirdi drop taxi"
      };
    


    return (
        <div>
            <UsePageTracking/>
<Helmet>
        <title>Pune to Shirdi Taxi | Reliable and Affordable Taxi Service | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book your reliable Pune to Shirdi taxi service with Morya Cabs. We offer one-way, round trip, luxury taxis, and shared cabs for your journey to Shirdi."
        />
        <meta name="keywords" content="Pune to Shirdi taxi, Pune to Shirdi cab, Pune to Shirdi taxi booking, Pune to Shirdi one-way taxi, Shirdi trip from Pune, Pune to Shirdi drop taxi, Pune to Shirdi luxury taxi" />
        <meta property="og:title" content="Pune to Shirdi Taxi | Morya Cabs" />
        <meta property="og:description" content="Reliable and affordable Pune to Shirdi taxi service. Book one-way, round trip, luxury, and shared cabs for a comfortable journey to Shirdi." />
        <meta property="og:url" content="https://moryacab.com/pune-to-shirdi-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-shirdi-taxi.jpg" />
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
                            <img src='/images/keyword/1.jpg' alt='img' />
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

export default Punetoshirditaxi;