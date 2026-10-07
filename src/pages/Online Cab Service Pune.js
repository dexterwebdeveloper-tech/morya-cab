
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Onlinecabservicepune() {



    const cardData =
    {
        keyword: 'Online Cab Service Pune',
        heading: 'Morya Cabs: Online Cab Service Pune',
        headingDescription: 'Looking for a dependable online cab service in Pune? Morya Cabs offers a fast, convenient, and hassle-free way to book cabs online—whether you need a quick city ride, a comfortable airport transfer, or a reliable outstation trip. Our easy-to-use online booking platform lets you schedule your ride in just a few clicks, anytime and from anywhere. With professional drivers, clean and well-maintained vehicles, transparent pricing, and 24/7 availability, Morya Cabs ensures a smooth and safe travel experience. Choose Morya Cabs for a trusted online cab service in Pune that’s always ready when you are.',

        top: 'Top Places to Visit in Pune Outstation with Morya Cabs',

"topPlaces": [
    {
        "title": "Shaniwar Wada",
        "description": "Built in 1732, Shaniwar Wada was the seat of the Peshwas and remains Pune’s most iconic historical landmark. Though partially destroyed by fire, the grand Delhi Gate, majestic ruins, gardens, and evening light-and-sound shows transport visitors back to Maratha glory."
    },
    {
        "title": "Aga Khan Palace",
        "description": "This graceful monument was built in 1892 and played a crucial role during the Indian freedom struggle. Mahatma Gandhi, Kasturba Gandhi, and Mahadev Desai were interned here. The palace grounds are peaceful, and the museum preserves rare photographs, letters, and Gandhi’s personal belongings."
    },
    {
        "title": "Sinhagad Fort",
        "description": "About 30 km from Pune, Sinhagad Fort offers a perfect mix of history and adventure. Famous for Tanaji Malusare's valor during the Battle of Sinhagad, it’s a popular trekking spot with sweeping views, rustic food stalls, and cool breezes—especially captivating during monsoon."
    },
    {
        "title": "Dagdusheth Halwai Ganpati Temple",
        "description": "One of the most revered Ganpati temples in Maharashtra, Dagdusheth Temple is known for its magnificent idol adorned with gold and intricate decor. It's always bustling with devotees and is especially vibrant during Ganesh Chaturthi."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "description": "Dating back to the 8th century, this rock-cut temple dedicated to Lord Shiva is carved from a single basalt rock. Its tranquil surroundings and monolithic Nandi mandapa make it a rare spiritual and archaeological gem in the city."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "description": "This fascinating museum houses over 20,000 objects including musical instruments, artifacts, paintings, and everyday items used by Indians over centuries. It gives a deep insight into India’s rich cultural and artistic heritage, all curated by one passionate collector."
    },
    {
        "title": "Parvati Hill and Temple",
        "description": "A 103-step climb leads to Parvati Hill, where you’ll find a 17th-century temple complex and panoramic views of Pune. Originally built during the Peshwa era, it is a peaceful spot for meditation, history, and photography."
    },
    {
        "title": "Khadakwasla Dam",
        "description": "Just 20 km from the city, this popular picnic spot is known for its tranquil lake views and local snacks along the roadside. It's a favorite weekend hangout for Pune residents, especially during sunset or monsoon drives."
    },
    {
        "title": "Osho Garden & Meditation Resort",
        "description": "Located in Koregaon Park, this lush retreat offers a blend of Zen-inspired architecture, serene gardens, and daily meditation programs. The Osho International Meditation Resort attracts global visitors for its unique spiritual and wellness atmosphere."
    },
    {
        "title": "Pune Okayama Friendship Garden (Pu La Deshpande Garden)",
        "description": "Modeled after Japan’s Okayama Korakuen Garden, this sprawling 10-acre oasis is known for its manicured lawns, waterfalls, and serene walking paths. Ideal for peaceful family visits, morning walks, and nature photography within the city."
    }
],

  "services": [
    {
      "name": "Online Cab Service Pune",
      "description": "Morya Cab provides seamless online cab booking services in Pune, allowing you to reserve taxis conveniently from your smartphone or computer anytime. Enjoy instant confirmation and hassle-free rides across the city."
    },
    {
      "name": "App-Based Taxi Pune",
      "description": "Book your ride quickly with Morya Cab’s app-based taxi service in Pune. Our easy-to-use mobile app ensures fast booking, live tracking, and secure payments for a smooth travel experience."
    },
    {
      "name": "Book Cab Instantly Online in Pune",
      "description": "Get instant cab booking in Pune with Morya Cab’s online platform. Whether it’s a local trip or outstation ride, secure your taxi immediately with just a few clicks and enjoy prompt pickups."
    },
    {
      "name": "Pune Cab Service 24/7",
      "description": "Morya Cab offers round-the-clock cab services in Pune. No matter the hour, book a taxi anytime for your early morning flights, late-night travels, or urgent rides with dependable drivers."
    },
    {
      "name": "Local Taxi Booking Pune Online",
      "description": "Book local taxis easily in Pune using our online platform. Whether for daily commute or city sightseeing, Morya Cab ensures safe, timely, and comfortable rides at competitive rates."
    },
    {
      "name": "One-Way and Round Trip Cabs Pune",
      "description": "Choose from one-way or round-trip cab bookings in Pune with Morya Cab. Customize your travel plans with flexible options for business, leisure, or personal trips within and outside the city."
    },
    {
      "name": "Online Sedan SUV Cabs Pune",
      "description": "Select from a wide range of sedan and SUV cabs available for online booking in Pune. Whether you need a compact car or a spacious SUV, we offer vehicles to fit your group size and comfort preferences."
    },
    {
      "name": "Safe Online Cab Booking Pune",
      "description": "Your safety is our priority. Morya Cab’s online booking system ensures verified drivers, sanitized vehicles, and contactless payments, providing you with a secure travel experience in Pune."
    },
    {
      "name": "Pune Local and Outstation Online Cab",
      "description": "Book cabs for both local Pune travel and outstation trips online. Morya Cab offers reliable taxis for any journey length, ensuring you reach your destination comfortably and on time."
    },
    {
      "name": "Budget Online Taxi Service Pune",
      "description": "Looking for affordable rides? Morya Cab provides budget-friendly online taxi services in Pune, offering competitive pricing without compromising on quality and safety."
    },
    {
      "name": "Verified Cabs with Online Booking Pune",
      "description": "All cabs available for online booking with Morya Cab in Pune are thoroughly verified for safety and quality. Enjoy peace of mind when you book through our trusted platform."
    },
    {
      "name": "Online Pune AC Taxi Service",
      "description": "Stay cool on the go by booking AC taxis online in Pune. Morya Cab offers air-conditioned vehicles for all your rides, ensuring comfort during the warm climate."
    },
    {
      "name": "Affordable Online Taxi Hire Pune",
      "description": "Hire taxis online at affordable rates with Morya Cab in Pune. Our transparent pricing and no hidden charges policy make it easy to plan your travel budget."
    },
    {
      "name": "Online Car Rental Pune",
      "description": "Need a car rental in Pune? Book online with Morya Cab for both self-drive and chauffeur-driven options, suitable for local travel or outstation trips."
    },
    {
      "name": "Express Online Cab Booking Pune",
      "description": "Morya Cab offers express online cab booking services in Pune, ensuring quick confirmations and prompt vehicle dispatch so you never miss your schedule."
    }
  ],
  "tableData": [
    ["Online Cab Service Pune", "-App-Based Taxi Pune"],
    ["Book Cab Instantly Online in Pune", "-Pune Cab Service 24/7"],
    ["Local Taxi Booking Pune Online", "-One-Way and Round Trip Cabs Pune"],
    ["Online Sedan SUV Cabs Pune", "-Safe Online Cab Booking Pune"],
    ["Pune Local and Outstation Online Cab", "-Budget Online Taxi Service Pune"],
    ["Verified Cabs with Online Booking Pune", "-Online Pune AC Taxi Service"],
    ["Affordable Online Taxi Hire Pune", "-Online Car Rental Pune"],
    ["Express Online Cab Booking Pune", "-Call Morya Cab at +91 9371304510"]
  ],




whychoose: [
    {
        "WhyChooseheading": "Instant Online Cab Booking",
        "WhyChoosedescription": "With Morya Cab, booking a cab in Pune is just a few clicks away. Our online platform allows you to schedule your ride instantly—whether you're heading to work, shopping, a meeting, or the airport. No long waits, no calls—just quick and easy digital booking available 24/7 through our website or mobile app."
    },
    {
        "WhyChooseheading": "User-Friendly Interface and Real-Time Tracking",
        "WhyChoosedescription": "Our online cab service offers a simple, intuitive booking experience with real-time cab tracking. Know your cab’s arrival time, driver details, and live location through your device, so you're always in control of your ride. You also get timely updates via SMS and email for added peace of mind."
    },
    {
        "WhyChooseheading": "Wide Fleet Selection for Every Need",
        "WhyChoosedescription": "Whether you need a compact car for city errands, a sedan for office travel, an SUV for family outings, or a tempo traveller for group travel, Morya Cab has the perfect ride. All our vehicles are clean, air-conditioned, and maintained for smooth rides across Pune and its outskirts."
    },
    {
        "WhyChooseheading": "Professional Drivers with Local Expertise",
        "WhyChoosedescription": "Our drivers are experienced, courteous, and familiar with Pune’s roads and shortcuts. They ensure safe and efficient travel whether you’re going across the city or heading to the suburbs. They follow all safety guidelines, making your ride comfortable and reliable every time."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Fares",
        "WhyChoosedescription": "Enjoy pocket-friendly rides with transparent billing. Morya Cab offers fixed pricing or meter-based fares for local travel in Pune. No surge pricing during peak hours or last-minute surprises—just fair rates that match your budget, with all taxes and charges included upfront."
    },
    {
        "WhyChooseheading": "Safe and Sanitized Rides",
        "WhyChoosedescription": "Your safety is our priority. All our cabs are thoroughly cleaned and sanitized after every trip. Vehicles are GPS-enabled, and drivers follow hygiene protocols to ensure a safe and secure ride—especially important for daily commuters, students, and families with children."
    },
    {
        "WhyChooseheading": "Multiple Payment Options and Invoicing",
        "WhyChoosedescription": "Pay your way—cash, UPI, card, or digital wallet. Our online booking system supports all major payment modes and provides instant digital invoices. Ideal for business users, corporate reimbursements, or customers looking for simple and paperless transactions."
    },
    {
        "WhyChooseheading": "24/7 Service for City and Suburban Travel",
        "WhyChoosedescription": "Need a cab late at night or early in the morning? Morya Cab is available round-the-clock to serve your travel needs in Pune city and surrounding areas. Whether it’s a quick ride to the railway station, a doctor’s appointment, or a mall visit, we’re always just a tap away."
    }
]




















    }

const faqData = [
  {
    question: "How can I book an online cab service in Pune with Morya Cab?",
    answer: "You can book a cab instantly via our website or mobile app. Just enter your pickup and drop details, select a vehicle, and confirm your ride."
  },
  {
    question: "Is Morya Cab available 24/7 for online bookings in Pune?",
    answer: "Yes, our online cab booking system is active 24/7. Whether it’s early morning or late night, we’re ready to serve you anytime."
  },
  {
    question: "What areas in Pune do you cover with your online cab service?",
    answer: "We cover all major areas in Pune including Hinjewadi, Kharadi, Hadapsar, Wakad, Baner, Shivajinagar, and more. Outstation and airport bookings are also available."
  },
  {
    question: "What types of vehicles are available for online booking?",
    answer: "We offer hatchbacks, sedans, SUVs, and luxury cars depending on your comfort, budget, and group size."
  },
  {
    question: "Can I book a cab for immediate pickup or schedule in advance?",
    answer: "Yes, you can choose either an immediate pickup or schedule your cab in advance for a later time or date using our online platform."
  },
  {
    question: "Is the online cab fare shown upfront and transparent?",
    answer: "Yes, all fares are shown upfront with no hidden charges. You’ll see the estimated fare during booking and only pay what’s displayed."
  },
  {
    question: "Are online bookings confirmed instantly?",
    answer: "Yes, once your booking is placed online, you will receive an instant confirmation via SMS and email with driver details."
  },
  {
    question: "What payment options are available for online cab bookings?",
    answer: "We accept all major payment modes including UPI, credit/debit cards, net banking, and even cash for added convenience."
  },
  {
    question: "Can I modify or cancel my online booking?",
    answer: "Yes, you can modify or cancel your booking through our app or by contacting customer support. Cancellation policies may apply."
  },
  {
    question: "Why choose Morya Cab for online cab service in Pune?",
    answer: "Morya Cab combines technology, affordability, and professional service to offer the most reliable and user-friendly online cab booking experience in Pune."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Tushar Mehta',
    role: 'IT Professional',
    review: 'The online booking system was fast and smooth. I booked a cab in seconds and the driver reached on time. Great experience with Morya Cab!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Rutuja Patil',
    role: 'Student',
    review: 'I love how easy it is to book cabs online with Morya Cab. The app is simple to use, and prices are budget-friendly. Highly recommended!',
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


   
// const onlineCabServicePuneSchema = {
//   "@context": "https://schema.org",
//   "@type": "Service",
//   "name": "Online Cab Service Pune",
//   "image": "https://moryacab.com/assets/images/online-cab-service-pune.jpg",
//   "description": "Book online cab service in Pune with Morya Cabs. Easy and quick online booking for AC sedans, SUVs, and tempo travellers. Perfect for local rides, airport transfers, and outstation trips with verified drivers and 24/7 customer support.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Morya Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "ratingValue": "4.7",
//     "ratingCount": "13200",
//     "bestRating": "5",
//     "worstRating": "1"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "399",
//     "availability": "https://schema.org/InStock",
//     "url": "https://moryacab.com/online-cab-service-pune"
//   }
// };







const innovaCrystaRentPuneSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Innova Crysta On Rent in Pune",
  "image": "https://moryacab.com/assets/images/innova-crysta-on-rent-pune.jpg",
  "description": "Rent Innova Crysta in Pune with Morya Cabs. Spacious 6/7-seater AC vehicle ideal for local travel, outstation trips, and airport transfers. Professional drivers and 24/7 booking support available.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "3200",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "18",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/innova-crysta-on-rent-pune"
  }
};



      

    return (
        <div>
            <UsePageTracking/>

<Helmet>
  <title>Innova Crysta On Rent in Pune | Spacious & Comfortable | Morya Cabs</title>
  <meta
    name="description"
    content="Rent Innova Crysta in Pune with Morya Cabs. Spacious 6/7-seater AC vehicle ideal for local travel, outstation trips, and airport transfers. Professional drivers and 24/7 booking support available."
  />
  <meta
    name="keywords"
    content="Innova Crysta on Rent Pune, Book Innova Crysta Pune, 7 Seater Car Rental Pune, SUV Rental Pune, Outstation Cab Pune, Morya Cabs Innova Booking, Airport Transfer Innova Pune, AC Innova Hire Pune"
  />
  <script type="application/ld+json">
    {JSON.stringify(innovaCrystaRentPuneSchema)}
  </script>
</Helmet>

{/* <Helmet>
  <title>Online Cab Service Pune | Easy & Quick Booking | Morya Cabs</title>
  <meta
    name="description"
    content="Book online cab service in Pune with Morya Cabs. Easy and quick online booking for AC sedans, SUVs, and tempo travellers. Perfect for local rides, airport transfers, and outstation trips with verified drivers and 24/7 customer support."
  />
  <meta
    name="keywords"
    content="Online Cab Service Pune, Book Cab Online Pune, AC Taxi Online Booking Pune, SUV Cab Pune Online, Tempo Traveller Online Booking, Pune Taxi Service Online, Morya Cabs Online Booking, Verified Drivers Pune Cab, Quick Cab Booking Pune"
  />
  <script type="application/ld+json">
    {JSON.stringify(onlineCabServicePuneSchema)}
  </script>
</Helmet>

// by this showing on 7:1
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
                            <img src='/images/keyword/111.jpg' alt='img' />
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

export default Onlinecabservicepune;