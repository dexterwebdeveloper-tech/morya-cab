
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function PuneOnlinecabbooking() {



    const cardData =
    {
        keyword: 'Pune Online Cab Booking ',
        heading: 'Morya Cabs:  Pune Online Cab Booking ',
        headingDescription: 'Morya Cabs offers seamless, reliable, and affordable online cab booking in Pune for local and outstation travel. Whether you need a cab for airport transfers, business trips, family outings, or weekend getaways, our well-maintained fleet and professional drivers ensure a smooth and hassle-free ride. Book your cab online with ease and experience a comfortable journey at competitive rates.',

        top: 'Top Places to Visit in Pune with Morya Cabs',

        topPlaces: [
            {
                "title": "Shaniwar Wada",
                "description": "A historic landmark, Shaniwar Wada was once the seat of the Peshwas of the Maratha Empire. The fort’s grand architecture, intricate wooden carvings, and rich history attract tourists and history buffs. With Morya Cabs, you can explore this heritage site comfortably and at your own pace."
            },
            {
                "title": "Dagdusheth Halwai Ganpati Temple",
                "description": "A renowned temple in Pune, Dagdusheth Ganpati is visited by thousands of devotees every year. Known for its beautifully adorned idol of Lord Ganesha, the temple is a must-visit for spiritual seekers. Morya Cabs ensures a hassle-free journey to this sacred destination."
            },
            {
                "title": "Sinhagad Fort",
                "description": "For adventure lovers, Sinhagad Fort is an ideal destination for trekking and sightseeing. The fort offers breathtaking views of Pune’s landscape, and the historical significance adds to its charm. Book a Pune cab with Morya Cabs to enjoy a scenic drive to this magnificent fort."
            },
            {
                "title": "Aga Khan Palace",
                "description": "Built in 1892, Aga Khan Palace is a symbol of India’s freedom struggle. This beautiful structure served as a prison for Mahatma Gandhi and his wife during the independence movement. Morya Cabs provides a smooth and comfortable ride to this historically significant site."
            },
            {
                "title": "Rajiv Gandhi Zoological Park",
                "description": "A favorite among families and wildlife enthusiasts, Rajiv Gandhi Zoo houses a variety of animals, reptiles, and birds. It’s an excellent place for kids and nature lovers. Book a cab with Morya Cabs and enjoy a day out with your loved ones."
            },
            {
                "title": "Osho International Meditation Resort",
                "description": "Located in Koregaon Park, the Osho Ashram is a serene place for meditation and self-discovery. It attracts visitors from all over the world seeking peace and spiritual growth. With Morya Cabs, you can travel conveniently to this peaceful retreat."
            },
            {
                "title": "Pu La Deshpande Garden (Pune Okayama Friendship Garden)",
                "description": "Inspired by Japanese gardens, Pu La Deshpande Garden offers a tranquil and picturesque escape from city life. The beautifully landscaped garden is ideal for nature walks and photography. Morya Cabs ensures a smooth ride to this relaxing destination."
            },
            {
                "title": "Pashan Lake",
                "description": "A scenic lake perfect for nature lovers and birdwatchers, Pashan Lake is a serene getaway within the city. Enjoy the peaceful atmosphere and spot migratory birds with a convenient cab ride from Morya Cabs."
            },
            {
                "title": "Lavasa City",
                "description": "A short drive from Pune, Lavasa is a stunning hill city designed in European style. The lakeside promenade, adventure activities, and scenic surroundings make it a perfect weekend getaway. Travel to Lavasa in comfort with Morya Cabs."
            },
            {
                "title": "Lonavala & Khandala",
                "description": "Known for their lush green hills, waterfalls, and misty weather, Lonavala and Khandala are popular hill stations near Pune. Whether you're planning a one-day trip or a weekend stay, Morya Cabs provides the best taxi services to these scenic destinations."
            }
        ],



"services": [
    {
        "name": "Pune Online Cab Booking",
        "description": "Morya Cab offers easy online cab booking for your convenience. Whether you need a quick ride across Pune or a long-distance trip, you can book your Pune cab online in just a few clicks. Our platform ensures a hassle-free experience for every traveler."
    },
    {
        "name": "Pune Instant Cab Booking",
        "description": "For immediate travel, Pune instant cab booking with Morya Cab ensures you get a ride without any delays. Simply book your cab through our online platform, and we’ll send a professional driver your way in no time."
    },
    {
        "name": "Pune Online Car Hire",
        "description": "Need to hire a car in Pune? Morya Cab offers online car hire services, providing you with a variety of vehicles to choose from for your journey. Enjoy the flexibility to travel on your own terms with our convenient and reliable car rental services."
    },
    {
        "name": "Pune Mobile Cab Booking",
        "description": "With Morya Cab’s mobile cab booking service, you can reserve a ride anytime, anywhere, right from your phone. Our mobile app makes it simple to book your Pune cab on the go, ensuring you always have a reliable ride at your fingertips."
    },
    {
        "name": "Pune Online Taxi Reservations",
        "description": "For a smooth and hassle-free journey, make Pune online taxi reservations with Morya Cab. With just a few steps, you can reserve your taxi in advance, ensuring you're never left waiting for your ride."
    },
    {
        "name": "Pune Quick Cab Booking",
        "description": "If you're in a rush, Morya Cab’s quick cab booking service will ensure a fast and reliable taxi arrives at your location in no time. Enjoy the convenience of a prompt pickup and a comfortable ride."
    },
    {
        "name": "Pune Online Ride Booking",
        "description": "Booking your ride in advance is easy with Pune online ride booking at Morya Cab. Our seamless booking system ensures that your travel plans are set, and your ride is ready when you need it."
    },
    {
        "name": "Pune Book Taxi Online",
        "description": "Morya Cab offers a simple process for you to book a taxi online for your journey in Pune. Choose your pickup location, select the vehicle, and confirm your ride with ease. We’re committed to making your travel experience comfortable and hassle-free."
    },
    {
        "name": "Pune Online Taxi Service",
        "description": "Enjoy the convenience of Pune online taxi services with Morya Cab. Whether you need a taxi for a short ride or a longer trip, you can count on us for reliable, on-time service that meets all your transportation needs."
    },
    {
        "name": "Pune Online Cab Booking",
        "description": "Morya Cab’s Pune online cab booking system is designed to offer a quick and easy way to book a ride at your convenience. Get access to a range of vehicles and enjoy professional service for every trip you take."
    },
    {
        "name": "Book Cab from Mumbai to Pune",
        "description": "Planning a journey from Mumbai to Pune? Morya Cab makes it simple to book a cab from Mumbai to Pune. With a comfortable ride and experienced drivers, your journey will be smooth and hassle-free."
    },
    {
        "name": "Taxi Booking Pune",
        "description": "Booking a taxi in Pune is quick and easy with Morya Cab. Our taxi booking service ensures you get a comfortable and reliable ride every time. Simply book your ride and enjoy punctual service."
    },
    {
        "name": "Online Taxi Booking Pune",
        "description": "With Morya Cab, online taxi booking in Pune is simple. Whether you need a taxi for business or leisure, our booking system ensures you get the perfect vehicle for your needs, with no hidden charges."
    },
    {
        "name": "Mumbai Airport to Pune Taxi Online Booking",
        "description": "Traveling from Mumbai Airport to Pune? Morya Cab offers online taxi booking for this popular route. Enjoy a comfortable and timely journey with professional drivers who ensure you reach your destination safely and quickly."
    },
    {
        "name": "Online Cab Booking Mumbai to Pune",
        "description": "Morya Cab offers online cab booking services for your trip from Mumbai to Pune. Book your ride in advance to ensure a smooth journey with experienced drivers and well-maintained vehicles, all at competitive prices."
    },
    {
        "name": "Online Car Booking in Pune",
        "description": "For a seamless online car booking experience in Pune, Morya Cab provides a variety of vehicles to suit your travel needs. Choose your car, book online, and enjoy a smooth and reliable ride."
    },
    {
        "name": "Online Cabs in Pune",
        "description": "Morya Cab offers a convenient way to book online cabs in Pune. With our user-friendly platform, you can reserve a taxi for any occasion, be it for business or leisure, and enjoy reliable, on-time service."
    },
    {
        "name": "Online Cab Service in Pune",
        "description": "Morya Cab’s online cab service in Pune is designed to be hassle-free and accessible. Book your ride from anywhere, at any time, and experience reliable and efficient taxi services that cater to your needs."
    },
    {
        "name": "Online Taxi Pune",
        "description": "For a fast and reliable ride in Pune, online taxi booking with Morya Cab is the way to go. Our platform makes it easy to book a taxi whenever you need it, with transparent pricing and top-quality service."
    },
    {
        "name": "Taxi Booking in Pune",
        "description": "Morya Cab provides a taxi booking service in Pune that ensures your travel experience is seamless. Whether you need a taxi for a day trip or a short ride, we offer reliable and affordable taxi services throughout the city."
    },
    {
        "name": "Pune to Shirdi Cab Booking Online",
        "description": "Planning a trip to Shirdi? Morya Cab offers Pune to Shirdi cab booking online for your convenience. Book your ride in advance, and enjoy a smooth, comfortable journey with professional drivers."
    }
],



tableData: [
    ["Pune Instant Cab Booking", "-Pune Online Car Hire"],
    ["Pune Mobile Cab Booking", "-Pune Online Taxi Reservations"],
    ["Pune Quick Cab Booking", "-Pune Online Ride Booking"],
    ["Pune Book Taxi Online", "-Pune Online Taxi Service"],
    ["Book Cab From Mumbai to Pune", "-Taxi Booking Pune"],
    ["Online Taxi Booking Pune", "-Mumbai Airport to Pune Taxi Online Booking"],
    ["Online Cab Booking Mumbai to Pune", "-Online Car Booking in Pune"],
    ["Online Cabs in Pune", "-Online Cab Service in Pune"],
    ["Online Taxi Pune", "-Taxi Booking in Pune"],
    ["Pune to Shirdi Cab Booking Online", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we prioritize your time. Whether it's an urgent business meeting or a leisurely trip around Pune, our punctual services ensure you reach your destination on time, every time."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Enjoy a smooth and comfortable ride with our well-maintained fleet of vehicles. From air-conditioned sedans to spacious SUVs, we offer the best options to make your journey in Pune a pleasant one."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are not only professional but also well-versed in Pune’s roads, traffic conditions, and shortcuts. They ensure your safety, comfort, and a stress-free journey wherever you go in the city."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab provides affordable fares with no hidden charges. Our transparent pricing gives you clarity on your fare breakdown before you even step into the vehicle."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All our vehicles come equipped with modern safety features such as airbags, seat belts, and GPS tracking, ensuring a secure journey every time."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available round the clock to cater to your travel needs. Whether it’s an early morning airport pickup or a late-night ride back home, we’re always ready to serve you."
    },
    {
        "WhyChooseheading": "Hassle-Free Online Booking",
        "WhyChoosedescription": "Booking a ride has never been easier! You can conveniently book a Pune cab online through our website or mobile app, allowing you to schedule your ride from anywhere, anytime."
    },
    {
        "WhyChooseheading": "Customized Travel Options",
        "WhyChoosedescription": "Whether you need a quick cab for a short trip or a vehicle for a full day of sightseeing, Morya Cab offers customizable travel options tailored to your specific needs and preferences."
    }
]










    }


    const faqData = [
        {
          question: "How can I book a Pune cab online?",
          answer: "Booking a cab with Morya Cab is easy! You can book through our website or mobile app, or contact our customer service for assistance with booking."
        },
        {
          question: "Are the drivers experienced for local travel in Pune?",
          answer: "Yes, our drivers are skilled professionals who are familiar with all major roads, local routes, and traffic patterns in Pune."
        },
        {
          question: "What types of vehicles are available for online booking?",
          answer: "We offer a wide range of vehicles for online booking, including sedans, SUVs, and premium cars, all of which are well-maintained for your comfort."
        },
        {
          question: "How do I pay for my online cab booking?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payments through our app, providing you flexibility and convenience."
        },
        {
          question: "Can I book a round trip online?",
          answer: "Yes, you can easily book a round trip online. Simply specify your return details, and we'll take care of everything else for you."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges, such as waiting time or detours, will be clearly communicated before the trip, so you know exactly what to expect."
        },
        {
          question: "Can I hire a cab for sightseeing in Pune through online booking?",
          answer: "Yes, you can! Morya Cab offers sightseeing tours in Pune, and you can book these tours online for exploring popular landmarks like Shaniwar Wada, Aga Khan Palace, and more."
        },
        {
          question: "What is the luggage allowance for online cab bookings?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have more luggage or special requirements, let us know at the time of booking, and we will arrange accordingly."
        },
        {
          question: "Is Morya Cab available for corporate travel in Pune?",
          answer: "Absolutely! Morya Cab offers corporate travel services, including rides for business meetings, conferences, or group travel."
        },
        {
          question: "Why should I choose Morya Cab for online booking in Pune?",
          answer: "Morya Cab ensures a reliable, safe, and comfortable journey with professional drivers, a range of well-maintained vehicles, and clear, affordable pricing for all your travel needs in Pune."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Rajesh Singh',
          role: 'Business Traveller',
          review: 'I booked an online cab with Morya Cab for a business trip around Pune. The booking process was super easy, and the driver arrived on time. The vehicle was clean and comfortable, making my trip very enjoyable.',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Neelam Joshi',
          role: 'Sightseer',
          review: 'Our family needed a cab for a day tour of Pune. I booked online with Morya Cab, and it was a smooth experience. The driver was knowledgeable and courteous, and the car was spacious enough for all of us. Highly recommended!',
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
        "name": "Pune Online Cab Booking",
        "description": "Book your taxi online in Pune with instant booking options. We offer online cab services, quick ride bookings, and online reservations for routes like Pune to Shirdi, Mumbai to Pune, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9359401610",
        "url": "https://moryacab.com/pune-online-cab-booking",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-online-cab-booking.jpg",
          "https://moryacab.com/img/online-taxi-booking-pune.jpg"
        ],
        "priceRange": "₹1500 - ₹5000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-online-cab-booking",
          "priceCurrency": "INR",
          "price": 2000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "reviewCount": 250
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ravi Patil"
            },
            "datePublished": "2024-11-10",
            "reviewBody": "Booking a cab through Pune Online Cab Booking was really easy. The service was quick, and I reached my destination on time. Will definitely use again!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Desai"
            },
            "datePublished": "2024-08-30",
            "reviewBody": "Great experience with Pune Online Cab Booking! I booked a ride from Mumbai Airport to Pune, and the process was seamless and hassle-free."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune Online Cab Booking Service Area",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-online-cab-booking"
        },
        "keywords": "Pune Online Cab Booking, Pune Instant Cab Booking, Pune Online Car Hire, Pune Mobile Cab Booking, Pune Online Taxi Reservations, Pune Quick Cab Booking, Pune Online Ride Booking, Pune Book Taxi Online, Pune Online Taxi Service, Book Cab From Mumbai to Pune, Taxi Booking Pune, Online Taxi Booking Pune, Mumbai Airport to Pune Taxi Online Booking, Online Cab Booking Mumbai to Pune, Online Car Booking in Pune, Online Cabs in Pune, Online Cab Service in Pune, Online Taxi Pune, Taxi Booking in Pune, Pune to Shirdi Cab Booking Online"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune Online Cab Booking | Instant Taxi & Ride Reservations | Call: +91 9359401610</title>
  <meta
    name="description"
    content="Book your taxi online in Pune with instant booking options for rides to various destinations like Pune to Shirdi, Mumbai to Pune, and more. Quick and seamless booking process."
  />
  <meta
    name="keywords"
    content="Pune Online Cab Booking, Pune Instant Cab Booking, Pune Online Car Hire, Pune Mobile Cab Booking, Pune Online Taxi Reservations, Pune Quick Cab Booking, Pune Online Ride Booking, Pune Book Taxi Online, Pune Online Taxi Service, Book Cab From Mumbai to Pune, Taxi Booking Pune, Online Taxi Booking Pune, Mumbai Airport to Pune Taxi Online Booking, Online Cab Booking Mumbai to Pune, Online Car Booking in Pune, Online Cabs in Pune, Online Cab Service in Pune, Online Taxi Pune, Taxi Booking in Pune, Pune to Shirdi Cab Booking Online"
  />
  <meta property="og:title" content="Pune Online Cab Booking | Morya Cabs" />
  <meta
    property="og:description"
    content="Book your taxi online in Pune for quick and seamless ride bookings to destinations like Shirdi, Mumbai, and beyond. Reliable and affordable taxi service."
  />
  <meta property="og:url" content="https://moryacab.com/pune-online-cab-booking" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://moryacab.com/img/pune-online-cab-booking.jpg" />
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
                            <img src='/images/keyword/41.jpg' alt='img' />
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

export default PuneOnlinecabbooking;