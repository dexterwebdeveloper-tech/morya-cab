
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetopandharpurcabs() {



    const cardData =
    {
        keyword: 'Pune To Pandharpur Cabs',
        heading: 'Morya Cabs: Pune To Pandharpur Cabs',
        headingDescription: 'Morya Cabs offers comfortable and affordable Pune to Pandharpur cab services for a peaceful and convenient pilgrimage experience. Whether you are traveling with family, friends, or on a solo darshan, our well-maintained cabs and experienced drivers ensure a smooth ride to the sacred town of Lord Vitthal. Enjoy timely pickups, clean vehicles, and a stress-free journey from Pune to Pandharpur with Morya Cabs, your trusted travel companion for spiritual tours.',

        top: 'Top Places to Visit in Pandharpur with Morya Cabs',

"topPlaces": [
    {
        "title": "Shri Vitthal‑Rukmini Temple",
        "description": "The spiritual heart of Pandharpur and one of the most revered Vishnu temples in India, built between 1108–1152 CE in Hoysala style. Pilgrims throng here during Ashadhi and Kartiki Ekadashi to partake in the Wari yatra, where they chant, attend aarti, and take a holy dip in the Chandrabhaga River. The temple also houses Samadhis of saints like Namdev, Chokhamela, and the unique samadhi of Sant Kanhopatra within the precincts. Visiting the temple offers a blend of ancient architecture, devotional fervor, and cultural immersion."
    },
    {
        "title": "Pundalik Temple",
        "description": "Situated just across the Chandrabhaga River, this five‑storied pagoda‑style shrine honors Bhakta Pundalik, the devotee who brought Lord Vitthal to Pandharpur. Pilgrims usually take a dip in the river before offering prayers here. The temple is serene and less crowded—ideal for reflective visits."
    },
    {
        "title": "Shri Gopalkrishna Temple",
        "description": "Located atop Govardhan Parvat, this hilltop temple resembles a fort and is dedicated to Lord Krishna. It features underground chambers and mythological relics such as Krishna’s kitchen and grinding stones. The climb offers panoramic views of the town and river—a must for both devotees and trekkers."
    },
    {
        "title": "Vishnupad Temple",
        "description": "A unique open‑hall temple on the riverbank supported by sixteen intricately carved pillars depicting Vishnu’s avatars. A sacred footprint on a rock inside marks Krishna’s presence, making it a powerful spot for darshan and photography by pilgrims."
    },
    {
        "title": "ISKCON Pandharpur",
        "description": "A serene Hare Krishna center on the river's eastern bank established in the 1980s. With a temple hall, lovely gardens, and a goshala, it provides a peaceful atmosphere for kirtan, meditation, and cow worship—a contemporary spiritual retreat."
    },
    {
        "title": "Bhagwant Temple & Asar Mahal",
        "description": "Located in central Pandharpur, Bhagwant Temple is beautifully lit at night and offers a tranquil ambience for prayers. Nearby Asar Mahal, a historic royal hall, becomes especially enchanting after sunset with soft illumination highlighting its architecture."
    },
    {
        "title": "Kambar Talao Lake",
        "description": "A calm urban lake with well‑maintained pathways, ideal for evening visits. Enjoy peaceful boat rides at sunset and soak in local life as pilgrims stroll by after temple darshan."
    },
    {
        "title": "Pandharpur Museum",
        "description": "This small but insightful museum showcases religious artifacts, manuscripts, local handicrafts, and photographs chronicling the history of the Warkari movement and temple culture. A good stop to understand the deeper context of Pandharpur’s heritage."
    },
    {
        "title": "Sant Namdev Sanctuary",
        "description": "A serene nature reserve named after the saint Namdev, located just outside the main town. It offers jogging trails, fruit orchards, and quiet spots, perfect for early‑morning walks or peaceful contemplation."
    },
    {
        "title": "Pandharpur Market & Riverfront",
        "description": "Explore bustling markets near the temple selling religious offerings like tulsi malas, brass bells, sweets, and souvenirs. The scenic riverfront promenade along the Chandrabhaga River is ideal for evening strolls and witnessing local rituals."
    }
],

"services": [
  {
    "name": "Pune To Pandharpur Cabs",
    "description": "Morya Cab provides reliable and comfortable Pune to Pandharpur cabs for pilgrims, families, and solo travelers. Experience a smooth journey to the sacred town of Pandharpur, home to the famous Shri Vitthal Rukmini Mandir. Our clean, punctual cabs are driven by courteous professionals familiar with the best routes and temple timings."
  },
  {
    "name": "Online Cab Booking Pune To Pandharpur",
    "description": "Book your Pune to Pandharpur cab easily online with Morya Cab’s hassle-free booking system. Choose your preferred pickup time and get instant confirmation. Enjoy flexible schedules designed to suit your pilgrimage or visit plans."
  },
  {
    "name": "Affordable Taxi Pune To Pandharpur",
    "description": "Looking for budget-friendly Pune to Pandharpur cabs? Morya Cab offers competitive rates with no hidden fees. Ideal for pilgrims and regular visitors, our affordable taxi service guarantees comfort, free pickup, and well-maintained vehicles for safe long-distance travel."
  },
  {
    "name": "AC Cabs Pune To Pandharpur",
    "description": "Travel comfortably in our air-conditioned Pune to Pandharpur cabs. Morya Cab offers AC sedans and SUVs to keep you cool during your journey. Enjoy plush seating and a calm ride, no matter the weather."
  },
  {
    "name": "One-Way Taxi Pune To Pandharpur",
    "description": "Need a one-way Pune to Pandharpur taxi? Morya Cab provides economical one-way cab services perfect for travelers attending events, family functions, or extended stays in Pandharpur."
  },
  {
    "name": "Round Trip Cab Pune To Pandharpur",
    "description": "Choose Morya Cab’s round-trip Pune to Pandharpur service for a flexible and convenient journey. Our drivers wait or return according to your schedule, making your pilgrimage or visit hassle-free."
  },
  {
    "name": "Vithoba Temple Cab Pune To Pandharpur",
    "description": "Visit the sacred Vithoba Temple comfortably with Morya Cab’s Pune to Pandharpur temple cab service. Our drivers are well-versed with temple timings and festivals, ensuring timely arrival for darshan."
  },
  {
    "name": "Religious Tour Cab Pune To Pandharpur",
    "description": "Plan your spiritual journey from Pune to Pandharpur with Morya Cab. We cater to individual devotees, groups, and families with clean vehicles, devotional music on request, and drivers familiar with your itinerary."
  },
  {
    "name": "Comfortable Ride Pune To Pandharpur",
    "description": "Enjoy a relaxing and comfortable Pune to Pandharpur cab ride with Morya Cab. Our vehicles come equipped with ample legroom, climate control, and travel amenities for a smooth long-distance trip."
  },
  {
    "name": "Pune To Pandharpur Darshan Cab",
    "description": "Book an early morning darshan cab from Pune to Pandharpur to match temple timings. Perfect for devotees planning a same-day trip, our service ensures punctuality and respectful drivers."
  },
  {
    "name": "Verified Cab Service Pune To Pandharpur",
    "description": "Morya Cab is a verified and trusted Pune to Pandharpur cab service. All cabs are GPS-enabled, and drivers are background-checked, ensuring safe, punctual, and secure travel."
  },
  {
    "name": "Budget Taxi Pune To Pandharpur",
    "description": "Choose Morya Cab’s budget taxi service for Pune to Pandharpur travel that combines affordability with comfort. Ideal for solo travelers, senior citizens, and students, our cabs are clean and driven by trained professionals."
  },
  {
    "name": "Sedan Cab Pune To Pandharpur",
    "description": "Travel in style with our Pune to Pandharpur sedan cabs. Offering excellent mileage, spacious boot, and smooth rides, our sedans are perfect for couples, small families, and senior citizens."
  },
  {
    "name": "Private Cabs Pune To Pandharpur",
    "description": "Book private Pune to Pandharpur cabs for a personalized and peaceful journey. Morya Cab provides private rides with flexible stops and zero ride-sharing, ideal for families and devotees."
  },
  {
    "name": "Safe Journey Cab Pune To Pandharpur",
    "description": "Your safety is our priority. Morya Cab’s Pune to Pandharpur taxi service includes sanitized vehicles, seatbelts for all passengers, and trained drivers skilled in defensive driving for a secure trip."
  }
],

"tableData": [
    ["Pune to Pandharpur Cabs", "-Online Cab Booking Pune to Pandharpur"],
    ["Affordable Taxi Pune to Pandharpur", "-AC Cabs from Pune to Pandharpur"],
    ["One-Way Taxi to Pandharpur from Pune", "-Round Trip Cab Pune to Pandharpur"],
    ["Vithoba Temple Cab Pune to Pandharpur", "-Religious Tour Cab Pune to Pandharpur"],
    ["Comfortable Ride Pune to Pandharpur", "-Pune to Pandharpur Darshan Cab"],
    ["Verified Cab Service Pune to Pandharpur", "-Budget Taxi Pune to Pandharpur"],
    ["Sedan Cab Pune to Pandharpur", "-Private Cabs Pune to Pandharpur"],
    ["Safe Journey Cab Pune to Pandharpur", "-Call Morya Cab at +91 9371304510"]
],




whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab is committed to providing dependable and punctual cab services from Pune to Pandharpur, ensuring you never miss a darshan or important event. We understand the spiritual significance of the journey, so we make it a point to arrive on time for pickups and stick to your schedule throughout the trip. Whether you're traveling alone, with family, or in a group, we ensure your trip starts and ends with reliability."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet of vehicles is designed with your comfort in mind. For the journey from Pune to Pandharpur, which can take several hours, our cabs offer ample legroom, soft cushioning, and air-conditioning to keep you comfortable in all weather. Whether you're an elderly pilgrim, a family with kids, or a group of devotees, our well-maintained cars provide a peaceful and relaxing travel experience throughout your spiritual journey."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced, courteous, and highly familiar with the Pune to Pandharpur route. They understand the needs of pilgrims and ensure a safe, respectful, and smooth journey. From navigating busy roads to assisting elderly passengers, our drivers go the extra mile to make your experience pleasant and stress-free. You can relax and focus on your devotion while we handle the driving with professionalism and care."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "At Morya Cab, we believe in clear and fair pricing. Our Pune to Pandharpur taxi fares are competitive and fully transparent, with no hidden charges or last-minute surprises. Whether you’re booking a one-way drop, a round trip, or a multi-day visit, we provide all-inclusive quotes upfront. Enjoy peace of mind knowing exactly what you're paying for, with no compromise on service quality."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is one of our top priorities, especially for long religious trips. Our cabs are equipped with seat belts, airbags, GPS tracking, and other modern safety features. All vehicles go through regular servicing and safety checks. Our drivers strictly follow traffic regulations, and we have 24/7 support available in case of any unexpected situations, ensuring your journey to Pandharpur is both safe and serene."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates around the clock, making it easy for you to book your cab whenever you need it—be it early morning, late night, or during busy festival periods. Our customer support team is available 24/7 to assist with bookings, queries, or changes. This is especially helpful for pilgrims who prefer to travel during less crowded hours or require flexible departure times."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Pandharpur cab with Morya Cab is simple and user-friendly. You can book instantly through our website or mobile app, or contact our support team for a personalized booking experience. We offer multiple payment options, instant confirmation, and transparent communication, so you can focus on your pilgrimage while we take care of the logistics."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Every traveler is unique, and so are their needs. Morya Cab offers customizable travel packages for your Pune to Pandharpur trip. Whether you want to include a visit to nearby temples, require overnight stay options, or need special arrangements for senior citizens, we tailor the journey to match your preferences and ensure a deeply fulfilling travel experience."
    }
]










    }

const faqData = [
  {
    question: "How can I book a Pune to Pandharpur cab with Morya Cab?",
    answer: "Booking is simple and convenient! Use our website, mobile app, or contact our support team directly to schedule your Pune to Pandharpur cab."
  },
  {
    question: "Are your drivers experienced with the Pandharpur pilgrimage route?",
    answer: "Yes, our drivers are experienced with the Pune to Pandharpur route and understand the needs of pilgrims, ensuring a smooth and respectful journey."
  },
  {
    question: "What types of vehicles do you offer for this route?",
    answer: "We offer well-maintained sedans, SUVs, and tempo travelers to accommodate solo travelers, families, and groups heading to Pandharpur."
  },
  {
    question: "Do you provide round-trip cab services for Pandharpur Darshan?",
    answer: "Yes, round-trip bookings are available. Just mention your return schedule during booking and we will take care of the rest."
  },
  {
    question: "Can I visit temples and local sites in Pandharpur using your cab?",
    answer: "Absolutely! We offer temple visit packages and local sightseeing options, including Vitthal Rukmini Mandir and nearby spiritual sites."
  },
  {
    question: "What payment options are available for the cab booking?",
    answer: "You can pay via cash, debit/credit cards, UPI, or online payments through our app or website."
  },
  {
    question: "Are there any hidden charges in the fare?",
    answer: "No hidden charges at all. All costs are shared upfront. Any extra charges for waiting time or detours will be discussed in advance."
  },
  {
    question: "Is it safe to travel at night from Pune to Pandharpur?",
    answer: "Yes, our night travel service is completely safe. Our drivers are trained for overnight journeys and safety is our top priority."
  },
  {
    question: "Do you accommodate senior citizens or special needs travelers?",
    answer: "Yes, we ensure special care for senior citizens and travelers with specific needs. Let us know in advance so we can arrange accordingly."
  },
  {
    question: "Why should I choose Morya Cab for Pune to Pandharpur travel?",
    answer: "Morya Cab ensures a peaceful, comfortable, and timely travel experience with professional drivers and well-maintained vehicles."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Anil Jadhav',
    role: 'Devotee',
    review: 'I booked Morya Cab for my Pandharpur darshan. The entire trip was smooth and devotional. The driver was polite and drove safely. Highly reliable service!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Mrs. Sunita More',
    role: 'Senior Citizen',
    review: 'Morya Cab made my spiritual journey to Pandharpur so easy. The vehicle was comfortable, and the driver took extra care of us elders. Thank you for the thoughtful service!',
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


   
   
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Pandharpur Cabs",
  "image": "https://moryacab.com/assets/images/pune-to-pandharpur-cabs.jpg",
  "description": "Book Pune to Pandharpur cab service with Morya Cab. Affordable fares, clean AC vehicles, and professional drivers. Choose from Sedan, SUV, Innova Crysta, and Tempo Traveller for comfortable family and pilgrimage travel to Vitthal Rukmini Mandir.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "6987"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "3000",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-pandharpur-cabs"
  }
};









    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Pandharpur Cabs | Taxi & Car Rental – Morya Cab</title>
  <meta
    name="description"
    content="Hire Pune to Pandharpur cabs with Morya Cab. Travel comfortably to Vitthal Rukmini Mandir with AC Sedan, SUV, Innova Crysta & Tempo Traveller at affordable fares."
  />
  <meta
    name="keywords"
    content="Pune to Pandharpur cab, Pune to Pandharpur taxi, Pune to Pandharpur car rental, Pune to Pandharpur Innova cab, Pune to Pandharpur SUV cab, Pune to Pandharpur outstation cab, Pune airport to Pandharpur cab, Pune to Pandharpur pilgrimage cab, Pune to Pandharpur family taxi, Morya Cab Pune to Pandharpur"
  />
  <link rel="canonical" href="https://moryacab.com/pune-to-pandharpur-cabs" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Pune to Pandharpur Cabs | Taxi & Car Rental – Morya Cab" />
  <meta property="og:description" content="Book Pune to Pandharpur taxi service with Morya Cab. Clean AC cars, verified drivers, and transparent pricing for your pilgrimage journey." />
  <meta property="og:url" content="https://moryacab.com/pune-to-pandharpur-cabs" />
  <meta property="og:image" content="https://moryacab.com/assets/images/pune-to-pandharpur-cabs.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
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
                            <img src='/images/keyword/99.jpg' alt='img' />
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

export default Punetopandharpurcabs;