
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetopandharpurtaxi() {



    const cardData =
    {
        keyword: 'Pune to Pandharpur Taxi  ',
        heading: 'Morya Cabs:  Pune to Pandharpur Taxi ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Pandharpur. Whether you are traveling for a spiritual visit or a relaxing getaway, our well-maintained fleet and professional drivers ensure a smooth and hassle-free journey. Pandharpur is approximately 210 km from Pune, and the journey takes around 4 to 5 hours by road. Enjoy a safe and comfortable ride with our top-notch amenities and customer-centric service.',

        top: 'Top Places to Visit in Pandharpur with Morya Cabs',

       "topPlaces": [
    {
        "title": "Vitthal Rukmini Temple",
        "description": "The Vitthal Rukmini Temple is one of the most revered pilgrimage sites in Maharashtra. Dedicated to Lord Vitthal (a form of Lord Krishna) and Goddess Rukmini, this temple attracts millions of devotees, especially during Ashadi Ekadashi. The temple's spiritual aura and devotional atmosphere make it a must-visit destination for worshippers and seekers of divine blessings."
    },
    {
        "title": "Chandrabhaga River",
        "description": "Flowing alongside Pandharpur, the Chandrabhaga River holds great religious significance. Pilgrims take a holy dip in its waters before visiting the Vitthal Rukmini Temple. The riverbank offers a serene atmosphere, making it a peaceful place for meditation and relaxation."
    },
    {
        "title": "Pundalik Temple",
        "description": "Located near the Chandrabhaga River, the Pundalik Temple is dedicated to Saint Pundalik, a devoted follower of Lord Vitthal. The temple is an important site in the Warkari tradition and is visited by devotees seeking spiritual enlightenment."
    },
    {
        "title": "Vishnupad Temple",
        "description": "This sacred temple houses an imprint of Lord Vishnu’s feet, symbolizing his divine presence. The temple is situated on the banks of the Chandrabhaga River and is a significant spot for religious rituals and prayers."
    },
    {
        "title": "Kaikadi Maharaj Math",
        "description": "A unique spiritual destination, Kaikadi Maharaj Math is not just a temple but an ashram with beautifully sculpted depictions of Hindu mythology. The place offers an insightful experience for visitors interested in learning about Hindu traditions and stories."
    },
    {
        "title": "Wakhari Village",
        "description": "Located near Pandharpur, Wakhari is a small village known for its deep-rooted Warkari tradition. Devotees gather here before proceeding towards Pandharpur, and the village comes alive during the Ashadi Ekadashi pilgrimage."
    },
    {
        "title": "Gopalpur",
        "description": "A peaceful village near Pandharpur, Gopalpur is famous for its ancient temple dedicated to Lord Krishna. The village provides a serene escape for those looking to connect with spirituality and nature."
    },
    {
        "title": "ISKCON Pandharpur",
        "description": "ISKCON Pandharpur is a modern temple dedicated to Lord Krishna and Radha. It offers a peaceful ambiance for meditation, devotional music, and spiritual discourses. The temple’s architecture and serene environment attract both devotees and tourists."
    },
    {
        "title": "Sant Namdev Payari",
        "description": "A significant place for devotees, Sant Namdev Payari is the first step of the Vitthal Temple. It is believed that Saint Namdev used to sing bhajans here, and it holds great importance for followers of the Warkari sect."
    },
    {
        "title": "Bhandara Hill",
        "description": "A scenic location near Pandharpur, Bhandara Hill is known for its breathtaking views and tranquil surroundings. It is a great place for those who want to enjoy some quiet time away from the bustling temple town."
    }
],



"services": [
    {
      "name": "Pandharpur to Pune Cab",
      "description": "Morya Cab offers convenient and comfortable cab services for your journey from Pandharpur to Pune. Whether you're traveling for business, leisure, or a spiritual trip, book your Pandharpur to Pune cab today for a stress-free journey!"
    },
    {
      "name": "Pune to Pandharpur Cab",
      "description": "Experience a smooth and hassle-free ride with Morya Cab when traveling from Pune to Pandharpur. Our professional drivers ensure your journey is safe and comfortable. Book your Pune to Pandharpur cab with us for an enjoyable trip."
    },
    {
      "name": "Pune to Pandharpur Cab Service",
      "description": "Choose Morya Cab for reliable and affordable cab services from Pune to Pandharpur. Our well-maintained vehicles and professional drivers ensure a pleasant ride every time."
    },
    {
      "name": "Pune to Akkalkot Cab",
      "description": "Morya Cab offers a reliable and comfortable taxi service for your Pune to Akkalkot journey. Whether you're heading for a religious visit or leisure, book with us for a smooth experience."
    },
    {
      "name": "Pune to Akkalkot Taxi",
      "description": "Book a Pune to Akkalkot taxi with Morya Cab for a smooth, efficient, and affordable ride. We provide quality service, ensuring a comfortable journey throughout."
    },
    {
      "name": "Pune to Akkalkot Car Rental Price",
      "description": "Morya Cab offers competitive car rental prices for your journey from Pune to Akkalkot. With a range of vehicles to choose from, enjoy an affordable and comfortable ride."
    },
    {
      "name": "Pune to Akkalkot Darshan Package",
      "description": "Planning to visit Akkalkot for darshan? Morya Cab offers a special darshan package, ensuring a smooth and peaceful journey for your spiritual visit."
    },
    {
      "name": "Pune to Tuljapur Cab",
      "description": "Morya Cab provides convenient cab services for your Pune to Tuljapur trip. Enjoy a comfortable and peaceful ride to this religious destination with our professional drivers."
    },
    {
      "name": "Pune to Tuljapur Cab Fare",
      "description": "Our fares for the Pune to Tuljapur journey are competitive and transparent. Morya Cab ensures no hidden charges, so you can travel with peace of mind."
    },
    {
      "name": "Pune to Tuljapur Car Rental",
      "description": "Morya Cab offers flexible car rental options for your journey from Pune to Tuljapur. Choose the vehicle that suits your needs and enjoy a comfortable ride at affordable prices."
    },
    {
      "name": "Pune to Solapur Cab",
      "description": "For a smooth journey from Pune to Solapur, book your cab with Morya Cab. We ensure a reliable, comfortable ride to Solapur at competitive prices."
    },
    {
      "name": "Pune to Solapur One Way Cab",
      "description": "If you're looking for a one-way taxi from Pune to Solapur, Morya Cab provides convenient and affordable one-way services. Enjoy a hassle-free ride to your destination."
    },
    {
      "name": "Pune to Pandharpur Tempo Traveller on Rent",
      "description": "Morya Cab offers tempo traveller rental services for your group travel from Pune to Pandharpur. Enjoy a comfortable and spacious ride with your family or friends."
    },
    {
      "name": "Innova Taxi from Pune to Solapur",
      "description": "For a luxurious ride from Pune to Solapur, Morya Cab provides Innova taxis. Our well-maintained vehicles and professional drivers ensure a premium experience."
    },
    {
      "name": "Pune to Solapur Ertiga Taxi",
      "description": "Morya Cab offers Ertiga taxis for your Pune to Solapur trip. This compact and efficient vehicle ensures comfort and convenience for your journey."
    },
    {
      "name": "Pune to Tuljapur Innova Crysta Taxi",
      "description": "Choose Morya Cab’s Innova Crysta taxi for a luxurious ride from Pune to Tuljapur. Our top-class vehicle guarantees a smooth and comfortable travel experience."
    },
    {
      "name": "Pune to Tuljapur to Akkalkot to Gangapur Cab Package",
      "description": "Book a customized trip with Morya Cab that covers Pune to Tuljapur, Akkalkot, and Gangapur. Our package ensures you a smooth and convenient journey between these religious destinations."
    },
    {
      "name": "Pune to Tuljapur Ertiga Cab",
      "description": "For a comfortable and affordable ride from Pune to Tuljapur, Morya Cab offers Ertiga taxis. A perfect option for small groups or families."
    },
    {
      "name": "Pune to Pandharpur Taxi Fare",
      "description": "Morya Cab offers competitive pricing for your Pune to Pandharpur journey. Our taxi fare is transparent with no hidden charges, ensuring an affordable trip."
    },
    {
      "name": "Pune to Pandharpur Cab Charges",
      "description": "The charges for the Pune to Pandharpur cab are reasonable and affordable. Morya Cab ensures clear and upfront pricing for a hassle-free experience."
    },
    {
      "name": "Pune to Pandharpur Taxi Booking",
      "description": "Booking a taxi from Pune to Pandharpur is simple with Morya Cab. Choose from various booking options like phone or online, and enjoy a comfortable ride."
    },
    {
      "name": "Pune to Pandharpur Car Rental",
      "description": "Morya Cab offers flexible car rental services for your Pune to Pandharpur trip. Rent a vehicle that suits your needs and enjoy a comfortable and affordable journey."
    }
  ],



  tableData: [
    ["Pandharpur to Pune Cab", "-Pune to Pandharpur Cab"],
    ["Pune to Pandharpur Cab Service", "-Pune to Akkalkot Cab"],
    ["Pune to Akkalkot Taxi", "-Pune to Akkalkot Car Rental Price"],
    ["Pune to Akkalkot Darshan Package", "-Pune to Tuljapur Cab"],
    ["Pune to Tuljapur Cab Fare", "-Pune to Tuljapur Car Rental"],
    ["Pune to Solapur Cab", "Pune to Solapur One-Way Cab"],
    ["Pune to Pandharpur Tempo Traveller on Rent", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of punctuality when traveling from Pune to Pandharpur. Whether you're heading to the sacred town for a spiritual journey or a leisure trip, our drivers ensure timely pickups and drop-offs for a stress-free experience."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We provide a range of comfortable vehicles for your journey to Pandharpur. With spacious interiors, air conditioning, and comfortable seating, our cars are designed to offer you a smooth and relaxing ride throughout your trip."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our experienced drivers are familiar with the best routes from Pune to Pandharpur and are committed to ensuring a safe and smooth journey. Their professionalism and expertise guarantee you a hassle-free trip."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive, affordable, and transparent pricing for your Pune to Pandharpur taxi ride. There are no hidden charges, and we provide a clear cost breakdown, so you know exactly what you are paying for."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is our top priority. Our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking to ensure a secure and comfortable journey throughout your trip."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates 24/7, so whether you need an early morning ride or a late-night return, we are always ready to accommodate your travel needs. Our customer service team is available round the clock to assist you."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi for your Pune to Pandharpur trip with Morya Cab is quick and easy. You can book online via our website or app, or you can contact our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're traveling for religious purposes or leisure, we offer customized travel packages tailored to your specific needs and preferences. Let us know your requirements, and we'll ensure your trip is exceptional."
    }
]












    }

    const faqData = [
        {
          question: "How can I book a Pune to Pandharpur taxi with Morya Cab?",
          answer: "Booking a taxi is simple! You can make a reservation online through our website or app, or you can contact our customer service team for assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are highly experienced in long-distance travel, ensuring a smooth and comfortable journey to Pandharpur."
        },
        {
          question: "What types of vehicles are available for Pune to Pandharpur travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all well-maintained and designed for comfort on long journeys."
        },
        {
          question: "How do I pay for my Pune to Pandharpur taxi rental?",
          answer: "We offer several payment options, including cash, credit/debit cards, and online payment via our app, making the payment process convenient for you."
        },
        {
          question: "Can I book a round trip from Pune to Pandharpur?",
          answer: "Yes, you can book a round trip. Simply provide your return details, and we'll take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "If there are any extra charges, such as for waiting time or detours, we will communicate these to you upfront, ensuring complete transparency."
        },
        {
          question: "Can I hire a taxi for sightseeing in Pandharpur?",
          answer: "Yes, we offer sightseeing tours in Pandharpur. Explore the famous Pandharpur Temple and other attractions with the help of our experienced drivers."
        },
        {
          question: "What is the luggage allowance for a Pune to Pandharpur taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, please let us know during the booking process, and we'll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Pandharpur?",
          answer: "Yes, we offer corporate travel services for business trips or group travels between Pune and Pandharpur."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Pandharpur travel?",
          answer: "Morya Cab ensures a reliable, affordable, and comfortable journey with professional drivers, well-maintained vehicles, and excellent customer service. We promise a safe and stress-free trip every time."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Ajay Kumar',
          role: 'Traveler',
          review: "I booked a taxi with Morya Cab for my trip to Pandharpur, and the experience was fantastic! The driver was on time, and the vehicle was clean and very comfortable. I had a great trip and will definitely choose them again.",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Priya Joshi',
          role: 'Family Traveler',
          review: "Our family traveled to Pandharpur with Morya Cab, and it was an amazing experience. The car was spacious, and the driver was polite and professional. We highly recommend Morya Cab for anyone traveling to Pandharpur!",
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
        "name": "Pune to Pandharpur Taxi Service",
        "description": "Book reliable and affordable cabs from Pune to Pandharpur for Darshan and travel. We offer one-way, round-trip, and luxury taxi options, including tempo traveller rentals for large groups.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 202, City Plaza, Pune Road",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411027",
          "addressCountry": "IN"
        },
        "telephone": "+91-8888888888",
        "url": "https://moryacab.com/pune-to-pandharpur-taxi",
        "logo": "https://moryacab.com/img/pandharpur-taxi-logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-to-pandharpur-taxi.jpg",
          "https://moryacab.com/img/innova-pune-pandharpur.jpg"
        ],
        "priceRange": "₹2000 - ₹5000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-pandharpur-taxi",
          "priceCurrency": "INR",
          "price": 2500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "reviewCount": 120
        },
        "serviceArea": {
          "@type": "Place",
          "name": "Pune and Pandharpur",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.6874,
            "longitude": 75.2333
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-pandharpur-taxi"
        },
        "keywords": "Pune to Pandharpur Taxi, Pune to Pandharpur Cab Service, Pune to Akkalkot Cab, Pune to Solapur Taxi, Pune to Tuljapur Cab, Pandharpur Darshan Taxi, Pune to Pandharpur Car Rental, One-way Cab from Pune to Pandharpur, Pune to Pandharpur Tempo Traveller, Pune to Pandharpur Cab Booking"
      };
      

    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Pandharpur Taxi Service | Book Your Cab Online | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Book reliable and affordable cabs from Pune to Pandharpur for Darshan and other travel. We offer one-way, round-trip, and luxury taxi options."
  />
  <meta
    name="keywords"
    content="Pune to Pandharpur Taxi, Pune to Pandharpur Cab Service, Pune to Akkalkot Cab, Pune to Solapur Taxi, Pune to Tuljapur Cab, Pandharpur Darshan Taxi, Pune to Pandharpur Car Rental, One-way Cab from Pune to Pandharpur, Pune to Pandharpur Tempo Traveller, Pune to Pandharpur Cab Booking"
  />
  <meta property="og:title" content="Pune to Pandharpur Taxi Service | Book Your Cab Online" />
  <meta
    property="og:description"
    content="Book reliable and affordable cabs from Pune to Pandharpur for Darshan and other travel. We offer one-way, round-trip, and luxury taxi options."
  />
  <meta property="og:url" content="https://moryacab.com/pune-to-pandharpur-taxi" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://moryacab.com/img/pune-to-pandharpur-taxi.jpg" />
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
                            <img src='/images/keyword/66.jpg' alt='img' />
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

export default Punetopandharpurtaxi;