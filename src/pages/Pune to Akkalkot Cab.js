
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoakkalkot() {



    const cardData =
    {
        keyword: 'Pune to Akkalkot Cab',
        heading: 'Morya Cabs: Pune to Akkalkot Cab',
        headingDescription: 'Morya Cabs offers dependable and comfortable Pune to Akkalkot Cab services for a peaceful journey to the sacred Shri Swami Samarth Temple. Whether you are visiting for spiritual darshan, a family pilgrimage, or a personal retreat, our clean, spacious cabs and courteous drivers ensure a safe, smooth, and respectful travel experience. With on-time pickups, flexible booking options, and affordable pricing, Morya Cabs makes your Pune to Akkalkot trip convenient, devotional, and stress-free.',

        top: 'Top Places to Visit in Akkalkot  with Morya Cabs',

"topPlaces": [
    {
        "title": "Shri Swami Samarth Samadhi Math",
        "description": "The final resting place of the 19th‑century saint Swami Samarth, believed to be an incarnation of Lord Dattatreya. Set beneath a sacred banyan tree (Vatavruksha), the math is the spiritual core of Akkalkot. Pilgrims gather for daily aartis, especially on Thursdays, Guru Purnima, and Swamiji’s Jayanti—seeking blessings, chanting bhajans, and meditating in its serene courtyard."
    },
    {
        "title": "Shri Vatavruksha Swami Maharaj Devasthan",
        "description": "Built around the ancient banyan tree where Swami Samarth meditated, this temple complex houses the saint’s padukas (foot‑sandals) and small shrines. The powerful spiritual ambiance is enhanced by the tree’s sprawling canopy, considered a living witness to centuries of devotion."
    },
    {
        "title": "Shri Swami Samarth Temple",
        "description": "The main temple dedicated to Swami Samarth sits at the heart of Akkalkot town. Featuring regular darshan, abhishekam, and evening aarti rituals, it thrives on the energy of devotees. The temple was beautifully renovated recently and attracts visitors from across Maharashtra."
    },
    {
        "title": "Akkalkot Palace (Old Rajwada)",
        "description": "Once the royal residence of the Bhonsle dynasty, this heritage palace features colonial‑era and regional architecture. Its grand halls, courtyards, and the Royal Armory Museum offer glimpses into princely life and local history under British Raj patronage."
    },
    {
        "title": "Shri Siddheshwar Temple",
        "description": "A 12th‑century shrine dedicated to Lord Shiva, located near the Math. The temple sits by a pond and features distinctive architecture with carved pillars. It draws local devotees and offers a quieter spiritual experience amid its calm surroundings."
    },
    {
        "title": "Taramata Bagh Public Garden",
        "description": "A well-kept public garden ~5 km from downtown, with lawns, flowerbeds, and walking paths. Ideal for family outings or a peaceful stroll. Early mornings are best for birdwatching and local life immersion."
    },
    {
        "title": "Kurnur Dam & Bori Riverbank",
        "description": "About 15 km from town, this earth-fill dam across the Bori River offers scenic picnicking spots and tranquil water views. It supports local agriculture and is best visited during winter or early monsoon when greenery surrounds the reservoir."
    },
    {
        "title": "Gowmukh Teerth",
        "description": "A local pilgrimage spot on the outskirts, dedicated to Lord Dattatreya. Named for its ‘cow’s-mouthed’ water spout, it’s a modest temple with serene ambience and a small gathering of devotees."
    },
    {
        "title": "Bhuikot Fort (Solapur)",
        "description": "Roughly 35 km away in Solapur, this 14th‑century Bahmani-era fort stands on a hill above the city. It offers panoramic views, historical bastions, and a chance to explore medieval ruins—an ideal day trip for history enthusiasts."
    },
    {
        "title": "Ganagapur Dattatreya Temple",
        "description": "Located ~75 km from Akkalkot across the Karnataka border, this revered Dattatreya shrine attracts thousands of devotees. Set on the Bhima Riverbank, it’s known for its spiritual energy, kumbhabhishek rituals, and annual festivals drawing pilgrims from Maharashtra and Karnataka."
    }
],

  "services": [
  {
    "name": "Pune to Akkalkot Cab",
    "description": "Morya Cab provides dependable and comfortable Pune to Akkalkot Cab services for a stress-free journey to the spiritual town known for Shri Swami Samarth Temple. Enjoy a smooth ride with professional drivers, clean cabs, and timely pickups."
  },
  {
    "name": "Swami Samarth Temple Cab Pune to Akkalkot",
    "description": "Book a dedicated Pune to Akkalkot Cab with Morya Cab for your pilgrimage to the revered Swami Samarth Temple. We offer comfortable, on-time travel tailored for devotees seeking a spiritual experience without travel hassles."
  },
  {
    "name": "Religious Tour Cab Pune to Akkalkot",
    "description": "Planning a religious tour? Morya Cab offers peaceful Pune to Akkalkot Cab services designed for darshan and pilgrimages. Travel with experienced drivers who respect the spiritual importance of your journey."
  },
  {
    "name": "AC Taxi Pune to Akkalkot",
    "description": "Stay cool on your long journey with our AC Pune to Akkalkot Cab service. Morya Cab provides well-maintained, air-conditioned vehicles with courteous drivers for a relaxed travel experience."
  },
  {
    "name": "One-Way Cab Pune to Akkalkot",
    "description": "Looking for a reliable one-way Pune to Akkalkot Cab? Morya Cab offers affordable one-way taxi options with no hidden fees. Perfect for solo travelers, pilgrims, or one-time visitors to Akkalkot."
  },
  {
    "name": "Round Trip Cabs Pune Akkalkot",
    "description": "Choose Morya Cab for your round trip Pune to Akkalkot Cab needs. Whether it’s a same-day visit or an overnight stay, enjoy flexible return scheduling and competitive pricing."
  },
  {
    "name": "Family Cab Pune to Akkalkot",
    "description": "Travel together with ease in our spacious Pune to Akkalkot Cab options for families. Morya Cab ensures safety, comfort, and convenience for all members of your group throughout the religious trip."
  },
  {
    "name": "Affordable Pune to Akkalkot Taxi Fare",
    "description": "Morya Cab offers budget-friendly Pune to Akkalkot Cab fares with full price transparency. No hidden charges—just honest, affordable pricing for your peaceful and devotional journey."
  },
  {
    "name": "Online Booking Cab Pune to Akkalkot",
    "description": "Book your Pune to Akkalkot Cab online with ease on Morya Cab’s platform. Enjoy instant confirmations, multiple payment modes, and responsive support for a seamless booking experience."
  },
  {
    "name": "Safe Cab Service Pune to Akkalkot",
    "description": "Travel worry-free with our safe Pune to Akkalkot Cab service. All vehicles are sanitized, GPS-enabled, and driven by professionals who follow all safety regulations for your protection."
  },
  {
    "name": "Verified Drivers Pune Akkalkot",
    "description": "Each Pune to Akkalkot Cab with Morya Cab comes with a verified and trained driver. Experience punctual, courteous, and skilled service from drivers who know the route and value your time."
  },
  {
    "name": "Private Sedan Cab Pune to Akkalkot",
    "description": "Book a private Pune to Akkalkot Cab in a clean, comfortable sedan. Ideal for individuals or small groups seeking a peaceful and private ride to the holy town of Akkalkot."
  },
  {
    "name": "Religious Pilgrimage Cab Pune to Akkalkot",
    "description": "Morya Cab’s Pune to Akkalkot Cab service is perfect for religious pilgrims visiting the Swami Samarth Temple. Our experienced drivers ensure timely arrivals and respectful, comfortable transport for spiritual travelers."
  },
  {
    "name": "Long-Distance Cab Pune to Akkalkot",
    "description": "Need a reliable long-distance cab? Morya Cab offers smooth Pune to Akkalkot Cab rides with experienced drivers and vehicles equipped for extended travel. Perfect for temple visits and weekend getaways."
  },
  {
    "name": "SUV Cab Booking Pune to Akkalkot",
    "description": "Travel in comfort with Morya Cab’s SUV Pune to Akkalkot Cab service. Ideal for groups and families, our SUVs offer spacious interiors, smooth rides, and safety for your sacred journey."
  }
],
  "tableData": [
    ["Pune to Akkalkot Cab", "-Swami Samarth Temple Cab Pune to Akkalkot"],
    ["Religious Tour Cab Pune to Akkalkot", "-AC Taxi Pune to Akkalkot"],
    ["One-Way Cab Pune to Akkalkot", "-Round Trip Cabs Pune Akkalkot"],
    ["Family Cab Pune to Akkalkot", "-Affordable Pune to Akkalkot Taxi Fare"],
    ["Online Booking Cab Pune to Akkalkot", "-Safe Cab Service Pune to Akkalkot"],
    ["Verified Drivers Pune Akkalkot", "-Private Sedan Cab Pune to Akkalkot"],
    ["Religious Pilgrimage Cab Pune to Akkalkot", "-Long-Distance Cab Pune to Akkalkot"],
    ["SUV Cab Booking Pune to Akkalkot", "-Call Morya Cab at +91 9371304510"]
  ],




whychoose: [
    {
        "WhyChooseheading": "Reliable and Timely Pilgrimage Transport",
        "WhyChoosedescription": "Akkalkot is a revered pilgrimage destination known for the Samarth Guru Shri Swami Samarth Maharaj temple. Morya Cab ensures punctual pickups and drop-offs from Pune, so you can focus on your spiritual journey without worrying about travel delays. We respect the significance of your visit and commit to reliable, on-time service to make your pilgrimage hassle-free and fulfilling."
    },
    {
        "WhyChooseheading": "Comfortable and Well-Maintained Vehicles",
        "WhyChoosedescription": "Traveling long distances to Akkalkot requires a comfortable and safe vehicle. Our fleet consists of clean, air-conditioned cars with ample legroom and cushioned seating, designed to make your journey relaxing. Whether you’re traveling solo, with family, or in a group, we have vehicles suitable for all group sizes and preferences."
    },
    {
        "WhyChooseheading": "Experienced Drivers Familiar with Akkalkot Route",
        "WhyChoosedescription": "Our drivers are skilled in navigating the Pune to Akkalkot route, including local roads in Akkalkot town. They are courteous, professional, and knowledgeable about the best travel routes and rest stops along the way. Their experience ensures a smooth, safe, and stress-free ride throughout your pilgrimage."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing for Pune to Akkalkot trips with no hidden fees. Our all-inclusive rates cover fuel, tolls, parking, and driver allowance. You get clear pricing upfront, so you can plan your pilgrimage budget without any surprises or extra charges."
    },
    {
        "WhyChooseheading": "Safe and Secure Travel",
        "WhyChoosedescription": "Your safety is our top priority. All our vehicles are GPS-tracked, sanitized, and maintained regularly to ensure maximum safety standards. Our drivers adhere to all traffic rules and drive responsibly, giving you peace of mind during your long-distance journey to Akkalkot."
    },
    {
        "WhyChooseheading": "24/7 Customer Support",
        "WhyChoosedescription": "Whether you need to book a cab early in the morning, late at night, or want to modify your booking, Morya Cab’s customer support is available around the clock. Our friendly and responsive team is always ready to assist you with any travel-related queries or emergencies."
    },
    {
        "WhyChooseheading": "Easy Booking and Flexible Travel Options",
        "WhyChoosedescription": "Booking your Pune to Akkalkot cab is quick and simple via our website, mobile app, or phone. We offer flexible options including one-way trips, round trips, or packages with sightseeing stops. Customize your journey according to your schedule and preferences for a convenient and personalized travel experience."
    },
    {
        "WhyChooseheading": "Customizable Pilgrimage Packages",
        "WhyChoosedescription": "If you want to include other nearby religious sites or take detours for local sightseeing, we offer tailor-made packages to enhance your spiritual trip. Whether it’s a short day trip or an extended pilgrimage tour, Morya Cab can design a travel plan that fits your devotional needs perfectly."
    }
]















    }

const faqData = [
  {
    question: "How can I book a Pune to Akkalkot cab with Morya Cab?",
    answer: "You can book your cab online via our website or app, or call our customer support for quick and easy booking assistance."
  },
  {
    question: "What is the distance and travel time from Pune to Akkalkot?",
    answer: "The distance is approximately 330 km and usually takes around 7 to 8 hours depending on traffic and route."
  },
  {
    question: "What types of vehicles are available for Pune to Akkalkot trips?",
    answer: "We offer a variety of vehicles including sedans, SUVs, and tempo travelers suitable for solo travelers, families, or groups."
  },
  {
    question: "Can I book a round trip cab from Pune to Akkalkot?",
    answer: "Yes, round-trip bookings are available. You can specify your return details during the booking process."
  },
  {
    question: "Is sightseeing or temple visits included in this cab service?",
    answer: "Yes, Akkalkot is famous for the Shri Swami Samarth Maharaj temple, and you can request stops for darshan or sightseeing along the way."
  },
  {
    question: "Are your drivers experienced with the Pune to Akkalkot route?",
    answer: "Our drivers are well-trained and familiar with the route to ensure a safe and comfortable journey."
  },
  {
    question: "What payment methods does Morya Cab accept?",
    answer: "We accept payments via cash, credit/debit cards, UPI, and online transfers through our app or website."
  },
  {
    question: "Is the service suitable for elderly passengers and families?",
    answer: "Absolutely! We provide comfortable vehicles and considerate drivers to accommodate families and senior citizens."
  },
  {
    question: "Can I book a cab for group travel to Akkalkot?",
    answer: "Yes, we have larger vehicles like tempo travelers to accommodate groups comfortably."
  },
  {
    question: "Why choose Morya Cab for Pune to Akkalkot travel?",
    answer: "Morya Cab ensures reliable, punctual, and affordable cab service with experienced drivers for a hassle-free journey to Akkalkot."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Vijay More',
    role: 'Pilgrim',
    review: 'I traveled to Akkalkot with Morya Cab for a spiritual visit. The service was excellent, and the driver was very helpful and courteous. Highly recommended!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Mrs. Shweta Patil',
    role: 'Family Traveler',
    review: 'Our family trip to Akkalkot was smooth and comfortable thanks to Morya Cab. The vehicle was clean and the driver very professional.',
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


   





const puneToAkkalkotCabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Akkalkot Cab",
  "image": "https://moryacab.com/assets/images/pune-to-akkalkot-cab.jpg",
  "description": "Book Pune to Akkalkot cab with Morya Cabs for a smooth and spiritual journey to Swami Samarth Maharaj Temple. Choose from AC sedan, SUV, or tempo traveller. One-way and round trip options with verified drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "7456",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4499",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-akkalkot-cab"
  }
};






      

    return (
        <div>
<UsePageTracking/>

<Helmet>
  <title>Pune to Akkalkot Cab | AC Sedan, SUV Taxi for Swami Samarth Temple | Morya Cabs</title>
  <meta
    name="description"
    content="Book Pune to Akkalkot cab with Morya Cabs for a smooth and spiritual journey to Swami Samarth Maharaj Temple. Choose from AC sedan, SUV, or tempo traveller. One-way and round trip options with verified drivers."
  />
  <meta
    name="keywords"
    content="Pune to Akkalkot Cab, Cab from Pune to Akkalkot, Swami Samarth Darshan Taxi, One-Way Cab Pune Akkalkot, Round Trip Cab Pune Akkalkot, AC Taxi Pune to Akkalkot, SUV Cab to Akkalkot, Sedan Taxi for Akkalkot, Morya Cabs Akkalkot, Tempo Traveller Pune to Akkalkot, Akkalkot Temple Tour Cab Booking"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToAkkalkotCabSchema)}
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
                            <img src='/images/keyword/106.jpg' alt='img' />
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

export default Punetoakkalkot;