
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetooutstationtaxi() {



    const cardData =
    {
        keyword: 'Pune To Outstation Taxi Service',
        heading: 'Morya Cabs: Pune To Outstation Taxi Service',
        headingDescription: 'Morya Cabs offers reliable and comfortable Pune to outstation taxi service for all your intercity travel needs. Whether you are planning a weekend getaway, pilgrimage tour, business trip, or family vacation, our well-maintained cabs and experienced drivers ensure a safe and enjoyable journey. With flexible booking options, transparent pricing, and round-the-clock service, Morya Cabs is your trusted partner for convenient and stress-free outstation travel from Pune.',

        top: 'Top Places to Visit in Pune Outstation with Morya Cabs',

"topPlaces": [
    {
        "title": "Pune to Mahabaleshwar",
        "description": "A scenic 120 km drive through the Western Ghats brings you to Mahabaleshwar, a lush hill station known for its cool climate, strawberry farms, and viewpoints like Arthur’s Seat and Wilson Point. Boating at Venna Lake, visits to Mapro Garden, and trekking to Pratapgad Fort make it a refreshing getaway, especially during monsoon and winter."
    },
    {
        "title": "Pune to Lonavala & Khandala",
        "description": "Just 65 km away, Lonavala and Khandala are twin hill stations famed for their misty landscapes, waterfalls, and forts. Explore Bhushi Dam, Rajmachi Fort, Karla & Bhaja Caves, and Lion’s Point. It’s ideal for quick 1-day or weekend trips, especially in monsoon for greenery and fog-filled valleys."
    },
    {
        "title": "Pune to Shirdi",
        "description": "Located about 190 km from Pune, Shirdi is one of the most visited spiritual destinations in India. The Sri Sai Baba Samadhi Mandir, Dwarkamai, Chavadi, and Shani Shingnapur offer a powerful pilgrimage experience. Roads are well-connected, and you can comfortably complete this in a 1-night/2-day format."
    },
    {
        "title": "Pune to Bhimashankar",
        "description": "A 110 km journey leads you to one of the 12 Jyotirlingas of Lord Shiva. The Bhimashankar Temple is nestled in a wildlife sanctuary, offering a peaceful spiritual experience amidst thick forests and mountain ridges. Monsoon makes this place come alive with waterfalls and mist-covered trails."
    },
    {
        "title": "Pune to Goa",
        "description": "Approx. 450 km by road, Goa is the ultimate beach destination for parties, relaxation, and Portuguese heritage. Whether you explore North Goa’s nightlife or South Goa’s serene beaches like Palolem, the drive from Pune via NH66 or NH48 offers scenic beauty and great road conditions. Ideal for a 3–5 day vacation."
    },
    {
        "title": "Pune to Trimbakeshwar",
        "description": "Located near Nashik (~240 km from Pune), Trimbakeshwar is a revered Jyotirlinga site where Lord Shiva is worshipped in a rare three-faced Linga. Surrounded by Brahmagiri Hills and the origin of the Godavari River, it's ideal for pilgrimage, spiritual retreats, and light trekking."
    },
    {
        "title": "Pune to Kolhapur",
        "description": "A 230 km drive to the south brings you to Kolhapur, known for the Mahalakshmi Temple, Rankala Lake, Panhala Fort, and spicy Kolhapuri cuisine. A great cultural trip packed with history, food, and tradition, suitable for families and heritage lovers."
    },
    {
        "title": "Pune to Tarkarli & Malvan",
        "description": "Roughly 390 km from Pune, Tarkarli is a hidden coastal gem offering pristine white beaches, scuba diving, and snorkeling. Malvan Fort and Karli backwaters add history and nature to the mix. Ideal for a long weekend by the sea."
    },
    {
        "title": "Pune to Alibaug",
        "description": "Located around 140 km from Pune via road and ferry options (via Mumbai), Alibaug is perfect for beach holidays, seafood, and historic forts like Kolaba and Murud-Janjira. Combine with Kashid Beach and Revdanda for a relaxed coastal circuit."
    },
    {
        "title": "Pune to Lavasa",
        "description": "A planned hill city about 60 km from Pune, Lavasa is known for its European-inspired townscape, lakeside promenades, and water sports. Ideal for quick one-day road trips and peaceful getaways for couples and families."
    }
],

   "services": [
    {
      "name": "Pune to Outstation Taxi Service",
      "description": "Morya Cab offers reliable and comfortable outstation taxi services from Pune to various destinations. Whether you're traveling for business, leisure, or family trips, our outstation cabs provide a safe and convenient travel experience with professional drivers and well-maintained vehicles."
    },
    {
      "name": "Long-Distance Cab Pune",
      "description": "Travel long distances with ease using Morya Cab's long-distance cab service from Pune. We ensure comfortable rides with air-conditioned vehicles and experienced drivers who prioritize your safety and timely arrival."
    },
    {
      "name": "One-Way Outstation Cab from Pune",
      "description": "Need a one-way outstation taxi from Pune? Morya Cab offers affordable and hassle-free one-way trips with flexible booking options, allowing you to reach your destination directly without unnecessary delays."
    },
    {
      "name": "Round Trip Outstation Cab Pune",
      "description": "Book round-trip outstation cabs from Pune with Morya Cab to enjoy a seamless journey to your destination and back. Our round-trip service includes driver waiting time and personalized scheduling to fit your itinerary."
    },
    {
      "name": "AC Cabs Pune to Outstation Destinations",
      "description": "Stay cool and comfortable throughout your journey with our air-conditioned outstation cabs from Pune. Perfect for summer trips or long drives, our AC cabs ensure a pleasant travel experience."
    },
    {
      "name": "Online Outstation Cab Booking Pune",
      "description": "Easily book your outstation taxi online with Morya Cab. Our user-friendly platform allows quick reservation, secure payment options, and instant booking confirmation for your trip from Pune."
    },
    {
      "name": "Private Outstation Cab Pune",
      "description": "Enjoy privacy and personalized service with Morya Cab’s private outstation taxi service from Pune. Travel with your family or group in a dedicated vehicle tailored to your needs and comfort."
    },
    {
      "name": "Budget Outstation Taxi Pune",
      "description": "Morya Cab provides budget-friendly outstation taxi options from Pune without compromising on quality or safety. Ideal for travelers looking for affordable long-distance transport with transparent pricing."
    },
    {
      "name": "Safe and Verified Drivers Pune Outstation",
      "description": "Your safety is our priority. Morya Cab employs only verified and experienced drivers for outstation trips from Pune, ensuring a secure and trustworthy travel experience."
    },
    {
      "name": "Pune to Nearby Cities Cab",
      "description": "Explore nearby cities comfortably with Morya Cab’s outstation services. Whether it’s a day trip or weekend getaway, our taxis from Pune connect you to neighboring towns hassle-free."
    },
    {
      "name": "Weekend Trip Outstation Cabs from Pune",
      "description": "Plan your weekend getaway easily with our outstation cabs from Pune. Enjoy relaxed travel, scenic routes, and prompt service for popular destinations close to Pune."
    },
    {
      "name": "Fast Cab Booking for Outstation from Pune",
      "description": "Need an outstation cab quickly? Morya Cab offers fast and reliable booking services from Pune, ensuring your ride is ready when you are for any long-distance trip."
    },
    {
      "name": "SUV Cab Pune Outstation Tour",
      "description": "Travel in style and comfort with Morya Cab’s SUV outstation tours from Pune. Spacious and powerful vehicles perfect for group travel and rougher terrain."
    },
    {
      "name": "Sedan Taxi for Outstation Trips Pune",
      "description": "Choose Morya Cab’s sedan taxis for your outstation trips from Pune. Ideal for small groups or solo travelers seeking a comfortable and smooth ride."
    },
    {
      "name": "Reliable Outstation Taxi Pune",
      "description": "Count on Morya Cab for reliable and punctual outstation taxi services from Pune. We prioritize customer satisfaction with on-time pickups, clean cars, and courteous drivers."
    }
  ],
  "tableData": [
    ["Pune to Outstation Taxi Service", "-Long-Distance Cab Pune"],
    ["One-Way Outstation Cab from Pune", "-Round Trip Outstation Cab Pune"],
    ["AC Cabs Pune to Outstation Destinations", "-Online Outstation Cab Booking Pune"],
    ["Private Outstation Cab Pune", "-Budget Outstation Taxi Pune"],
    ["Safe and Verified Drivers Pune Outstation", "-Pune to Nearby Cities Cab"],
    ["Weekend Trip Outstation Cabs from Pune", "-Fast Cab Booking for Outstation from Pune"],
    ["SUV Cab Pune Outstation Tour", "-Sedan Taxi for Outstation Trips Pune"],
    ["Reliable Outstation Taxi Pune", "-Call Morya Cab at +91 9359401610"]
  ],




whychoose: [
    {
        "WhyChooseheading": "Trusted Outstation Travel Partner",
        "WhyChoosedescription": "Morya Cab is your reliable companion for outstation taxi services from Pune. Whether you're heading to a nearby hill station, religious destination, or another city, we provide dependable, on-time cab services for all types of outstation travel. With us, you can focus on enjoying the journey while we take care of the driving and route planning."
    },
    {
        "WhyChooseheading": "Wide Range of Destinations Across Maharashtra and Beyond",
        "WhyChoosedescription": "From Lonavala, Mahabaleshwar, and Shirdi to Mumbai, Goa, and Bangalore—we cover a vast network of outstation routes. Whether it's a weekend getaway, family trip, pilgrimage, or business visit, Morya Cab offers flexible travel options for round-trips, one-way drops, or multi-city tours from Pune to any destination of your choice."
    },
    {
        "WhyChooseheading": "Comfortable and Clean Cabs for Long-Distance Travel",
        "WhyChoosedescription": "Long journeys require comfort, and our fleet is equipped with spacious, air-conditioned vehicles perfect for outstation rides. Choose from well-maintained sedans, SUVs, or tempo travellers, each offering smooth suspension, ample luggage space, and clean interiors—ensuring a pleasant ride for solo travelers, families, and groups alike."
    },
    {
        "WhyChooseheading": "Experienced Drivers with Excellent Route Knowledge",
        "WhyChoosedescription": "Our drivers are handpicked for their long-distance driving experience and familiarity with popular outstation routes from Pune. They follow safe driving practices, know the best rest stops, and can adapt routes based on traffic or road conditions—ensuring a safe, efficient, and stress-free journey every time."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Enjoy competitive rates for your outstation taxi needs from Pune. With Morya Cab, you get clear, upfront pricing that includes tolls, parking, and driver charges—no hidden fees or surprise costs at the end. Choose from per-kilometer rates or fixed packages tailored to your route and trip duration."
    },
    {
        "WhyChooseheading": "Flexible Booking and Travel Options",
        "WhyChoosedescription": "Plan your trip your way—book a one-way drop, full round trip, or multi-day journey with ease. We offer half-day and full-day packages, overnight travel, and customizable itineraries for sightseeing or special stops along the way. Whether it's a quick visit or an extended holiday, we adapt to your travel style."
    },
    {
        "WhyChooseheading": "24/7 Availability and Emergency Support",
        "WhyChoosedescription": "Outstation trips can start early or end late, and Morya Cab is ready anytime you are. We operate 24/7 with a responsive support team available by phone, chat, or email. Whether you need help during the trip, want to extend your journey, or face an emergency, we’re always one call away."
    },
    {
        "WhyChooseheading": "Custom Tour Packages and Group Travel Solutions",
        "WhyChoosedescription": "Looking for a tour package from Pune to multiple cities or pilgrimage spots? We offer fully customizable outstation cab services tailored to families, corporate groups, and travel agencies. Add sightseeing, hotel stops, or additional destinations with ease—Morya Cab will build the perfect itinerary for your needs."
    }
]



















    }

const faqData = [
  {
    question: "How can I book a Pune to outstation taxi with Morya Cab?",
    answer: "Booking is easy—use our website, mobile app, or call our customer support team to schedule your outstation ride from Pune."
  },
  {
    question: "What destinations do you cover under the outstation taxi service?",
    answer: "We offer outstation taxi services from Pune to popular destinations like Mumbai, Nashik, Shirdi, Mahabaleshwar, Goa, Kolhapur, and many more."
  },
  {
    question: "What types of vehicles are available for outstation trips?",
    answer: "We provide a wide range of vehicles including hatchbacks, sedans, SUVs, and tempo travelers, depending on your comfort and group size."
  },
  {
    question: "Can I book a one-way or round-trip outstation taxi?",
    answer: "Yes, both one-way and round-trip bookings are available. Just select your preferred option while booking the cab."
  },
  {
    question: "Are your drivers experienced for long-distance travel?",
    answer: "Yes, our drivers are experienced, trained, and well-versed with major routes, ensuring a safe and smooth long-distance journey."
  },
  {
    question: "Are tolls, taxes, and driver charges included in the fare?",
    answer: "We offer transparent billing. Toll, parking, and driver charges are either included in the package or clearly mentioned at the time of booking."
  },
  {
    question: "Can I make stops or customize the itinerary during the trip?",
    answer: "Absolutely! You can customize your route or request stops along the way—just let us know in advance or inform the driver."
  },
  {
    question: "What payment options are available for outstation bookings?",
    answer: "We accept UPI, credit/debit cards, net banking, and cash. You can also pay partially online and the rest to the driver."
  },
  {
    question: "Is this service suitable for family, group, or corporate travel?",
    answer: "Yes, we have comfortable options for families, large groups, and corporate clients with tailored packages and support."
  },
  {
    question: "Why choose Morya Cab for outstation taxi services from Pune?",
    answer: "Morya Cab offers affordable, reliable, and comfortable outstation taxi services with professional drivers, clean vehicles, and 24/7 support."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Rohan Salvi',
    role: 'Frequent Traveler',
    review: 'Booked a Pune to Mahabaleshwar outstation cab with Morya Cab and had a great experience. Car was clean and the driver was very cooperative.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Mrs. Anuja Gokhale',
    role: 'Family Vacation Planner',
    review: 'Our outstation trip from Pune to Goa was smooth, affordable, and perfectly planned by Morya Cab. Highly satisfied with their outstation service!',
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


   
const puneToOutstationTaxiSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Pune To Outstation Taxi Service",
  "image": "https://moryacab.com/assets/images/pune-to-outstation-taxi.jpg",
  "description": "Book Pune to outstation taxi service with Morya Cabs. Choose from AC sedan, SUV, or tempo traveller for comfortable and safe long-distance travel. Available for one-way, round trip, corporate rides, and airport transfers with verified drivers and 24/7 support.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "10234",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "3500",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-outstation-taxi-service"
  }
};









      

    return (
        <div>
            <UsePageTracking/>


<Helmet>
  <title>Pune To Outstation Taxi Service | AC Sedan, SUV & Tempo Traveller | Morya Cabs</title>
  <meta
    name="description"
    content="Book Pune to outstation taxi service with Morya Cabs. Choose from AC sedan, SUV, or tempo traveller for comfortable and safe long-distance travel. Available for one-way, round trip, corporate rides, and airport transfers with verified drivers and 24/7 support."
  />
  <meta
    name="keywords"
    content="Pune to Outstation Taxi, Outstation Cab Service Pune, Long Distance Taxi Pune, AC Taxi Outstation Pune, SUV Cab Outstation Pune, Tempo Traveller Pune Outstation, Corporate Taxi Service Pune, Airport Transfer Outstation Cab, Morya Cabs Outstation Taxi"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToOutstationTaxiSchema)}
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
                            <img src='/images/keyword/110.jpg' alt='img' />
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

export default Punetooutstationtaxi;