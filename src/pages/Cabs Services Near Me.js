
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Cabservicenearme() {



    const cardData =
    {
        keyword: 'Cabs Services Near Me ',
        heading: 'Morya Cabs: Cabs Services Near Me',
        headingDescription: 'Looking for convenient and reliable cab services near you? Morya Cabs provides affordable, efficient, and comfortable taxi services across Pune and its surrounding areas. Whether you need a cab for local commuting, airport transfers, or outstation trips, we offer well-maintained vehicles and experienced drivers to ensure a smooth and safe ride. No matter where you are, our prompt pick-up service guarantees you’ll reach your destination comfortably and on time. Book your cab with Morya Cabs for a hassle-free and reliable travel experience.',

        top: 'Top Places You Can Visit with Morya Cabs',

   "topPlaces": [
    {
        "title": "Shaniwar Wada",
        "description": "A historical landmark in Pune, known for its Maratha heritage. Take a comfortable cab ride with Morya Cabs to explore the grandeur of this fort."
    },
    {
        "title": "Dagdusheth Ganpati Temple",
        "description": "One of the most famous temples in Pune, this sacred place attracts devotees from all over. Book your ride with Morya Cabs for a hassle-free visit."
    },
    {
        "title": "Aga Khan Palace",
        "description": "A beautiful historic monument with significance in India’s independence movement. Travel comfortably with Morya Cabs to explore this heritage site."
    },
    {
        "title": "Sinhagad Fort",
        "description": "For adventure enthusiasts and history lovers, Sinhagad Fort offers a beautiful trekking spot with panoramic views. Get there comfortably with Morya Cabs."
    },
    {
        "title": "Osho International Meditation Resort",
        "description": "A serene getaway for those looking for peace and meditation, located in Koregaon Park. Enjoy a relaxing ride with Morya Cabs to this retreat."
    },
    {
        "title": "Lavasa",
        "description": "A scenic hill station near Pune with picturesque landscapes and adventure activities. Take a quick and comfortable ride with Morya Cabs to enjoy the beauty of Lavasa."
    },
    {
        "title": "Rajiv Gandhi Zoological Park",
        "description": "Perfect for nature lovers and families, the zoo offers a glimpse of wildlife in a natural setting. Morya Cabs provides a smooth ride for a fun day out."
    },
    {
        "title": "Lonavala and Khandala",
        "description": "These famous hill stations near Pune are perfect for a quick getaway. Book your cab with Morya Cabs to enjoy the beauty of these twin hill stations."
    },
    {
        "title": "Mahabaleshwar",
        "description": "Known for its stunning viewpoints and cool climate, Mahabaleshwar is a must-visit destination from Pune. Morya Cabs offers a comfortable ride to this popular hill station."
    },
    {
        "title": "Pune Airport Transfers",
        "description": "Whether arriving or departing, Morya Cabs offers reliable airport cab services for a smooth journey to and from Pune Airport."
    }
],



"services": [
    {
      "name": "Taxi Services Near Me in Pune and Pimpri Chinchwad",
      "description": "If you're searching for reliable taxi services near me in Pune or Pimpri Chinchwad, Morya Cab is your go-to option for comfortable and affordable rides. Whether you're looking for a ride in Viman Nagar, Kharadi, Wadgaon Sheri, Hadapsar, Lohegaon Airport, Kothrud, or Chandan Nagar, we provide quick and reliable taxi booking options for every area in Pune and its surroundings."
    },
    {
      "name": "Cabs Services Near Me in Pune",
      "description": "Morya Cab offers an easy-to-book service for cabs near me in Pune, allowing you to book a ride within minutes. We ensure a smooth, safe, and hassle-free travel experience, whether it's for local commuting, a long-distance ride, or an airport transfer."
    },
    {
      "name": "Local Taxi Service Near Me",
      "description": "Looking for a local taxi service near me? We provide top-notch local taxi services across Pune, ensuring you get to your destination quickly and comfortably. With a fleet of well-maintained vehicles and professional drivers, we’re dedicated to making your travel stress-free."
    },
    {
      "name": "Taxi Near Me in Pune",
      "description": "Need a taxi near me in Pune? Morya Cab offers prompt pickup and drop-off services across Pune, with competitive rates and excellent customer service. Whether it's a ride to work, a day out, or an urgent trip, we've got you covered."
    },
    {
      "name": "Taxi Service Near Me in Pune",
      "description": "Morya Cab provides a taxi service near me in Pune with an easy booking process, affordable fares, and reliable service. Whether you're in Koregaon Park, Kaylani Nagar, or anywhere in Pune, we ensure you travel in comfort."
    },
    {
      "name": "Cab Company Near Me in Pune",
      "description": "Searching for a cab company near me in Pune? Morya Cab is one of the top-rated cab providers, offering a variety of options tailored to your needs. From budget cabs to luxury cars, you can trust us for all your transportation needs in Pune."
    },
    {
      "name": "Cheapest Taxi Service Near Me Koregaon Park",
      "description": "For those seeking the cheapest taxi service near me in Koregaon Park, Morya Cab provides affordable options with no compromise on quality or comfort. Book your ride now and experience the most economical taxi service in the area."
    },
    {
      "name": "24 Hour Taxi Service Near Me",
      "description": "Need a ride at any time of day or night? We offer 24-hour taxi service near me to ensure you're never without a ride. Whether it's early morning or late at night, Morya Cab is always ready to serve you."
    },
    {
      "name": "Book a Taxi Online Near Me",
      "description": "With Morya Cab, you can easily book a taxi online near me through our user-friendly website or app. Book a ride in just a few clicks and enjoy seamless travel anywhere in Pune."
    },
    {
      "name": "Local Cab Service Near Me Chandan Nagar",
      "description": "Looking for a local cab service near me in Chandan Nagar? Morya Cab offers reliable and fast cab services to and from Chandan Nagar. No matter the time, we ensure a prompt and comfortable ride every time."
    },
    {
      "name": "Taxi Booking Near Me Hadapsar",
      "description": "Need a taxi booking near me in Hadapsar? Morya Cab offers fast and affordable taxi booking options in Hadapsar and all other Pune areas. Enjoy door-to-door service with the comfort of professional drivers and well-maintained vehicles."
    },
    {
      "name": "Nearest Cab Service Kothrud",
      "description": "Looking for the nearest cab service in Kothrud? Book your ride with Morya Cab for prompt and reliable service in Kothrud. We provide a variety of vehicles to suit your needs and ensure you have a comfortable journey."
    }
  ],



  tableData: [
    ["Near me taxi in Pimpri Chinchwad", "-Cabs services near me in Pune"],
    ["Taxi near me in Pune", "-Taxi service near me in Pune"],
    ["Cabs near me in Pune", "-Cab company near me in Pune"],
    ["Taxi company near me in Kharadi", "-Call taxi near me Kaylani Nagar"],
    ["Cheapest taxi service near me Koregaon Park", "-Local taxi service near me"],
    ["Wadgaon Sheri", "-Taxi cab service near me"],
    ["Taxi booking near me Hadapsar", "-24 hour taxi service near me"],
    ["Local cab company in Lohegaon airport", "-Best Taxi Service near me"],
    ["Book a Taxi online near me", "-Local cab service near me Chandan Nagar"],
    ["Nearest cab service Kothrud", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab ensures timely pickups and drop-offs no matter where you're located. Whether you're heading to the airport, a business meeting, or a weekend getaway, our drivers guarantee a punctual and hassle-free service right at your doorstep."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a variety of vehicles tailored to your travel needs, including sedans, SUVs, and premium cars. All our vehicles are clean, comfortable, and equipped with air conditioning to ensure you travel in comfort."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly skilled, courteous, and experienced in navigating through city traffic. They know the best routes and are dedicated to providing a safe and smooth journey, ensuring your experience with us is pleasant every time."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive rates with no hidden charges. We provide a clear, upfront breakdown of the fare, ensuring full transparency and no surprises at the end of your journey."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. Our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. We make sure you are secure throughout the ride, no matter the distance or time of day."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates around the clock, so you can book a cab whenever you need it, day or night. We are always available to cater to your travel needs, whether it's an early morning pickup or a late-night return."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a cab with Morya Cab is easy! You can book through our website, mobile app, or by calling our customer service team for personalized assistance. We ensure a simple and quick process every time."
    },
    {
        "WhyChooseheading": "Customized Travel Options",
        "WhyChoosedescription": "Whether you need a ride for a short trip within the city, an outstation journey, or a special event, we provide customized options. Let us know your requirements, and we’ll tailor the service accordingly."
    }
]






        
















    }

    const faqData = [
        {
          question: "How can I book a cab with Morya Cab?",
          answer: "You can book easily through our website, mobile app, or by calling our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for city travel?",
          answer: "Yes, all our drivers are experienced with navigating city traffic and are familiar with the best routes to ensure a smooth and timely journey."
        },
        {
          question: "What types of vehicles are available for city travel?",
          answer: "We offer a range of vehicles including sedans, SUVs, and premium cars, all maintained for comfort and safety."
        },
        {
          question: "How do I pay for my cab ride?",
          answer: "We offer multiple payment options such as cash, credit/debit cards, and online payment through our app, for your convenience."
        },
        {
          question: "Can I book a round-trip service?",
          answer: "Yes, you can book a round-trip service. Simply provide us with your return details, and we’ll ensure everything is arranged."
        },
        {
          question: "Are there any additional charges for waiting or detours?",
          answer: "Any additional charges, such as waiting time or detours, will be communicated to you upfront, ensuring full transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing?",
          answer: "Yes, we offer sightseeing tours for both city and outstation trips. Explore the local landmarks or nearby attractions with the help of our knowledgeable drivers."
        },
        {
          question: "What is the luggage allowance for a cab?",
          answer: "Our vehicles comfortably accommodate standard luggage. If you have extra luggage or specific requirements, just let us know when booking, and we’ll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel?",
          answer: "Yes, we offer corporate travel services, ensuring timely and professional transportation for business meetings, conferences, and group travel."
        },
        {
          question: "Why should I choose Morya Cab for my taxi service?",
          answer: "Morya Cab offers reliable, safe, and comfortable transportation with experienced drivers, well-maintained vehicles, and transparent pricing. We guarantee a hassle-free and enjoyable journey every time."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Raghav Sharma',
          role: 'Business Traveler',
          review: "I used Morya Cab for a ride to a business meeting, and it was a great experience. The driver was professional and punctual, and the vehicle was clean and comfortable. Highly recommended!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Deepa Verma',
          role: 'Family Traveler',
          review: "Our family used Morya Cab for a local trip, and we were impressed with the service. The vehicle was spacious, and the driver was friendly and helpful. We will definitely use Morya Cab again!",
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
        "name": "Cabs Services Near Me",
        "description": "Find reliable and affordable local taxi services near you in Pune, Pimpri Chinchwad, Viman Nagar, Kharadi, and other localities. Book a taxi for city travel or outstation trips with a call or online booking.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 7, 2nd Floor, XYZ Complex, Near ABC Chowk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9999999999",
        "url": "https://moryacab.com/cabs-services-near-me",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/taxi-service-near-me.jpg",
          "https://moryacab.com/img/local-taxi-booking.jpg"
        ],
        "priceRange": "₹100 - ₹2500",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/cabs-services-near-me",
          "priceCurrency": "INR",
          "price": 300,
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
              "name": "Nikhil Sharma"
            },
            "datePublished": "2024-08-10",
            "reviewBody": "Amazing service! The taxi was on time, clean, and affordable. I highly recommend this service for local trips in Pune."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rekha Patel"
            },
            "datePublished": "2024-11-15",
            "reviewBody": "Booked a cab for a trip around Pune. The driver was polite, and the car was comfortable. Will definitely use this service again."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune, Pimpri Chinchwad, Viman Nagar, Kharadi, Hadapsar, Lohegaon, Koregaon Park, Kothrud",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/cabs-services-near-me"
        },
        "keywords": "Near Me Taxi in Pimpri Chinchwad, Cabs Services Near Me in Pune, Taxi Near Me in Pune, Taxi Service Near Me in Pune, Cabs Near Me in Pune, Cab Company Near Me in Pune, Taxi Cab Near Me in Viman Nagar, Taxi Company Near Me in Kharadi, Call Taxi Near Me Kaylani Nagar, Cheapest Taxi Service Near Me Koregaon Park, Local Taxi Service Near Me, Wadgaon Sheri, Taxi Cab Service Near Me, Taxi Booking Near Me Hadapsar, 24 Hour Taxi Service Near Me, Local Cab Company in Lohegaon Airport, Best Taxi Service Near Me, Book a Taxi Online Near Me, Local Cab Service Near Me Chandan Nagar, Nearest Cab Service Kothrud"
      };
      
   


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Cabs Services Near Me | Taxi Booking in Pune | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Find local cabs and taxi services near you in Pune and surrounding areas like Pimpri Chinchwad, Viman Nagar, Kharadi, Hadapsar, Lohegaon, Koregaon Park, Kothrud. Book online or by phone."
  />
  <meta
    name="keywords"
    content="Near Me Taxi in Pimpri Chinchwad, Cabs Services Near Me in Pune, Taxi Near Me in Pune, Taxi Service Near Me in Pune, Cabs Near Me in Pune, Cab Company Near Me in Pune, Taxi Cab Near Me in Viman Nagar, Taxi Company Near Me in Kharadi, Call Taxi Near Me Kaylani Nagar, Cheapest Taxi Service Near Me Koregaon Park, Local Taxi Service Near Me, Wadgaon Sheri, Taxi Cab Service Near Me, Taxi Booking Near Me Hadapsar, 24 Hour Taxi Service Near Me, Local Cab Company in Lohegaon Airport, Best Taxi Service Near Me, Book a Taxi Online Near Me, Local Cab Service Near Me Chandan Nagar, Nearest Cab Service Kothrud"
  />
  <meta property="og:title" content="Cabs Services Near Me | Local Taxi Booking in Pune" />
  <meta
    property="og:description"
    content="Book a taxi or cab service near you in Pune and surrounding areas. We offer affordable and convenient transportation options for local and outstation travel."
  />
  <meta property="og:url" content="https://moryacab.com/cabs-services-near-me" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://moryacab.com/img/taxi-service-near-me.jpg" />
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
                            <img src='/images/keyword/62.jpg' alt='img' />
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

export default Cabservicenearme;