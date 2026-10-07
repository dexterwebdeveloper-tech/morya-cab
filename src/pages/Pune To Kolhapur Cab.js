
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetokohlapurcab() {



    const cardData =
    {
        keyword: 'Pune To Kolhapur Cab',
        heading: 'Morya Cabs: Pune To Kolhapur Cab',
        headingDescription: 'Morya Cabs offers affordable and comfortable Pune to Kolhapur cab services for a smooth and enjoyable travel experience to the city of Mahalakshmi. Whether you are planning a temple visit, business trip, or family outing, our spacious cabs and experienced drivers ensure a safe and pleasant journey. With on-time pickups, clean vehicles, and flexible booking options, Morya Cabs is your dependable choice for traveling from Pune to Kolhapur with ease and comfort.',

        top: 'Top Places to Visit in Kolhapur with Morya Cabs',

"topPlaces": [
    {
        "title": "Shri Mahalakshmi Temple",
        "description": "Also known as Dakshin Kashi, this ancient Shakti Peetha dates back to the 7th century. The west-facing black stone idol of Goddess Mahalakshmi weighs around 40 kg and attracts devotees seeking blessings and spiritual solace. The temple’s architecture and vibrant daily rituals create a powerful devotional atmosphere."
    },
    {
        "title": "New Palace Museum (Shahu Chhatrapati Museum)",
        "description": "Built between 1877–84 as the royal residence of Chhatrapati Shahu Maharaj, this neo-classical palace features an extensive museum housing royal artifacts, regal clothing, historical photographs, weaponry, and taxidermy exhibits. It offers a vivid peek into Kolhapur’s Maratha legacy."
    },
    {
        "title": "Rankala Lake & Shalini Palace",
        "description": "Originally a stone quarry, Rankala became a freshwater lake after a natural earthquake in the 9th century. Its serene waters are perfect for boat rides and evening strolls. The lakeside Shalini Palace, with its black stone façade and Italian marble interiors, now functions as a luxury hotel—ideal for heritage lovers."
    },
    {
        "title": "Panhala Fort",
        "description": "Only about 20 km from Kolhapur, this hill-fort dates back to 1178 and served as a strategic stronghold for the Shilahara dynasty, Marathas, Mughals, and British. Explore zig-zag ramparts, hidden wells (Andhar Bavadi), bastions, temples, and Shahi towers—all offering expansive views of the Sahyadris. A testament to epic Maratha history and Shivaji’s strategic defences."
    },
    {
        "title": "Kopeshwar Temple (Khidrapur)",
        "description": "A 12th-century conical Shiva temple built on the banks of the Krishna River by Shilahara King Gandaraditya. Intricate stone carvings, sculptures, and mythological panels make it an architectural marvel. Nearby towns and serene riverside add offbeat charm."
    },
    {
        "title": "Jyotiba Temple & Pohale Caves",
        "description": "Located on Jyotiba Hill (~18 km from Kolhapur), this temple complex dedicated to Lord Jyotiba draws crowds during Chaitra and Shravan festivals. Nearby, the Pawala/Pohale Buddhist caves (15 km from Kolhapur) offer rock-cut viharas and chaityas from ancient times—great for those interested in spiritual and archaeological exploration."
    },
    {
        "title": "Dajipur Wildlife (Radhanagari) Sanctuary",
        "description": "Around 45 km from Kolhapur, this wildlife sanctuary—formerly the Maharaja’s hunting grounds—is famous for Indian bison (gaurs), leopards, sloth bears, and diverse birdlife. Visitors can enjoy guided jeep safaris, nature treks, and riverside picnics in the jungle."
    },
    {
        "title": "Temblai Devi Temple",
        "description": "Perched atop Temblai Hill, this temple dedicated to Goddess Renuka (sister of Mahalaxmi) is a key pilgrimage site. Thousands visit during Navratri’s Lalitpanchami for a unique procession from Mahalaxmi Temple. Stunning city views and spiritual vibes await atop the hill."
    },
    {
        "title": "Bhavani Mandap & Town Hall Museum",
        "description": "A historic square-fronted building used for royal assemblies and public gatherings. Within complex lies the Town Hall Museum with artifacts, colonial-era documents, and cultural exhibits. The structure blends European and Indian architectural influences."
    },
    {
        "title": "Siddhagiri Gramjivan Museum",
        "description": "Located near Kaneri Math (~15 km), this open-air museum showcases wax statues and life-size dioramas depicting rural Maharashtrian life, traditional crafts, saintly legends, and folklore. Educational and immersive—perfect for families and culture enthusiasts."
    }
],

  "services": [
  {
    "name": "Pune to Kolhapur Cab",
    "description": "Book a reliable Pune to Kolhapur cab with Morya Cab for a smooth and comfortable journey. Whether it's for business, pilgrimage to the Mahalaxmi Temple, or leisure travel, we offer safe, on-time, and hassle-free cab services tailored to your needs."
  },
  {
    "name": "Mahalaxmi Temple Cab Pune to Kolhapur",
    "description": "Planning a spiritual trip? Morya Cab offers dedicated Pune to Kolhapur cab services for Mahalaxmi Temple visits. Enjoy a serene and timely ride with our experienced drivers familiar with temple routes and schedules."
  },
  {
    "name": "Online Cab Booking Pune to Kolhapur",
    "description": "Easily book your Pune to Kolhapur cab online with Morya Cab’s fast and user-friendly platform. Get instant confirmation, multiple vehicle choices, and secure payment options for a stress-free travel experience."
  },
  {
    "name": "One-Way Taxi to Kolhapur from Pune",
    "description": "Morya Cab offers convenient one-way cab services from Pune to Kolhapur. Ideal for solo travelers, business trips, or long stays, enjoy affordable pricing and a direct journey without return obligations."
  },
  {
    "name": "Round Trip Cab Pune to Kolhapur",
    "description": "Opt for our round trip Pune to Kolhapur cab package and travel at your own pace. Perfect for weekend getaways, day tours, or temple visits, our cabs ensure comfort, punctuality, and flexibility."
  },
  {
    "name": "Executive Cab Pune to Kolhapur",
    "description": "Travel in style with Morya Cab’s executive cab service from Pune to Kolhapur. Designed for professionals and VIPs, our premium cars come with plush interiors, professional drivers, and top-class service."
  },
  {
    "name": "AC Taxi Pune to Kolhapur",
    "description": "Beat the heat with our AC taxis from Pune to Kolhapur. Morya Cab offers air-conditioned vehicles for a relaxing and cool journey, making long-distance travel more pleasant and enjoyable."
  },
  {
    "name": "Reliable Pune to Kolhapur Cabs",
    "description": "Trust Morya Cab for reliable and punctual Pune to Kolhapur cab services. Our experienced drivers and regularly serviced vehicles ensure a safe, efficient, and comfortable ride every time."
  },
  {
    "name": "Pune to Kolhapur Sedan and SUV Cabs",
    "description": "Choose from a wide range of sedans and SUVs for your Pune to Kolhapur journey. Whether you're traveling solo or with family, Morya Cab has the right vehicle to fit your comfort and space needs."
  },
  {
    "name": "Fastest Pune to Kolhapur Cab Service",
    "description": "Need a quick trip? Morya Cab offers the fastest Pune to Kolhapur cab service with optimized routes and experienced drivers to reduce travel time while ensuring safety and convenience."
  },
  {
    "name": "Verified Drivers Pune to Kolhapur",
    "description": "Your safety is our commitment. Morya Cab assigns only verified and background-checked drivers for Pune to Kolhapur cab rides, ensuring peace of mind throughout your journey."
  },
  {
    "name": "Comfortable Long-Distance Cab Pune to Kolhapur",
    "description": "Enjoy a smooth long-distance ride from Pune to Kolhapur in our spacious, clean, and well-maintained cabs. Ideal for family travel, senior citizens, and groups looking for comfort on the road."
  },
  {
    "name": "Affordable Taxi Pune to Kolhapur",
    "description": "Travel affordably with Morya Cab’s budget-friendly Pune to Kolhapur cab options. Transparent pricing, no hidden charges, and high service standards make your ride economical and reliable."
  },
  {
    "name": "Pune to Kolhapur City Tour Cab",
    "description": "Explore Kolhapur’s top attractions with our local sightseeing cab service. Morya Cab offers knowledgeable drivers who guide you through the city's highlights including the Mahalaxmi Temple, Rankala Lake, and more."
  },
  {
    "name": "Safe Travel Cab Pune to Kolhapur",
    "description": "Morya Cab prioritizes your safety during every Pune to Kolhapur cab ride. Our sanitized vehicles, disciplined drivers, and strict safety protocols provide a secure and peaceful travel experience."
  }
],
  "tableData": [
    ["Pune to Kolhapur Cab", "-Mahalaxmi Temple Cab Pune to Kolhapur"],
    ["Online Cab Booking Pune to Kolhapur", "-One-Way Taxi to Kolhapur from Pune"],
    ["Round Trip Cab Pune to Kolhapur", "-Executive Cab Pune to Kolhapur"],
    ["AC Taxi Pune to Kolhapur", "-Reliable Pune to Kolhapur Cabs"],
    ["Pune to Kolhapur Sedan and SUV Cabs", "-Fastest Pune to Kolhapur Cab Service"],
    ["Verified Drivers Pune to Kolhapur", "-Comfortable Long-Distance Cab Pune to Kolhapur"],
    ["Affordable Taxi Pune to Kolhapur", "-Pune to Kolhapur City Tour Cab"],
    ["Safe Travel Cab Pune to Kolhapur", "-Call Morya Cab at +91 9359401610"]
  ],




whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab is known for its commitment to punctuality. When you book a Pune to Kolhapur cab with us, you can rest assured that your journey will begin and end on time. Whether you're heading to visit the famous Mahalaxmi Temple, attending a business meeting, or simply exploring Kolhapur’s rich heritage, our timely pickup and drop-off services ensure your plans run smoothly without delays."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Long journeys demand comfort—and that's exactly what Morya Cab provides. Our fleet includes a range of well-maintained vehicles that offer generous legroom, clean interiors, air conditioning, and plush seating to keep you relaxed throughout the 5–6 hour drive from Pune to Kolhapur. Whether you're traveling solo, with family, or in a group, we have the perfect vehicle to suit your travel style and comfort needs."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are seasoned professionals with deep knowledge of the Pune–Kolhapur route. They know the best roads, the quickest detours, and how to ensure a safe and efficient ride. Courteous, punctual, and respectful, our drivers enhance your journey by offering assistance as needed, maintaining clean vehicles, and following traffic regulations—all while ensuring your comfort and peace of mind."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We believe in honest pricing without any hidden costs. Morya Cab offers Pune to Kolhapur cab services at competitive rates with full price transparency. You’ll receive an upfront quote that covers all charges—fuel, driver allowance, tolls (if included), and taxes—so you can travel stress-free knowing exactly what you’re paying for, with no last-minute surprises or hidden fees."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. Every Morya Cab vehicle undergoes routine maintenance checks and is equipped with essential safety features such as seat belts, airbags, and GPS tracking. We also provide sanitization between trips. Our drivers follow all safety norms and drive responsibly, making your Pune to Kolhapur ride not just comfortable, but also secure and worry-free."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Need a cab early in the morning or late at night? No problem. Morya Cab is available round-the-clock to accommodate your travel plans. Whether you're booking last-minute or scheduling your trip days in advance, our team is always ready to assist you—especially during weekends, holidays, or temple festivals in Kolhapur when demand is high. Our 24/7 availability ensures you’re never left waiting."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Kolhapur cab is easy and efficient with Morya Cab. Our website and mobile app provide a seamless online booking experience, and our support team is always available by phone for personalized assistance. With instant confirmations, secure payment options, and real-time updates, your entire experience—from inquiry to drop-off—is smooth, quick, and reliable."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We understand that every traveler has unique needs. That’s why Morya Cab offers customized travel plans for your Pune to Kolhapur trip. Want to stop at Panhala Fort? Need time at Rankala Lake or Jyotiba Temple? Planning an overnight return? We tailor the journey based on your schedule, interests, and comfort—making your trip not just a ride, but a personalized travel experience."
    }
]












    }

const faqData = [
  {
    question: "How can I book a Pune to Kolhapur cab with Morya Cab?",
    answer: "You can easily book your cab through our website, mobile app, or by calling our customer service team for assistance."
  },
  {
    question: "Are the drivers experienced with the Pune to Kolhapur route?",
    answer: "Yes, our drivers are highly experienced and well-acquainted with the Pune to Kolhapur highway, ensuring a smooth and timely journey."
  },
  {
    question: "What type of vehicles are available for this trip?",
    answer: "We offer a wide range of vehicles including sedans, SUVs, and luxury cars, all well-maintained for your comfort during the journey."
  },
  {
    question: "Can I book a round trip from Pune to Kolhapur?",
    answer: "Yes, round-trip bookings are available. Just mention your return details while booking and we’ll take care of everything."
  },
  {
    question: "Do you provide services for visiting Mahalaxmi Temple in Kolhapur?",
    answer: "Absolutely! We frequently serve pilgrims visiting Mahalaxmi Temple. Our drivers ensure you have ample time for darshan and sightseeing."
  },
  {
    question: "What are the payment options for the cab booking?",
    answer: "We accept payments via cash, credit/debit cards, UPI, and online payment methods through our app or website."
  },
  {
    question: "Is there any additional cost for waiting during temple visits?",
    answer: "Short waiting periods are included. Any extended waiting or special detours will be informed to you in advance with transparent pricing."
  },
  {
    question: "Is night travel available for this route?",
    answer: "Yes, our cabs operate 24/7. You can book early morning or late-night travel as per your convenience, with full safety assured."
  },
  {
    question: "Can I book this cab for family or senior citizen travel?",
    answer: "Yes, our cabs are perfect for family and senior citizen trips. Let us know if you need any special arrangements while booking."
  },
  {
    question: "Why should I choose Morya Cab for Pune to Kolhapur travel?",
    answer: "Morya Cab offers reliable service, well-maintained vehicles, courteous drivers, and flexible booking options for a hassle-free travel experience."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Ramesh Patil',
    role: 'Devotee',
    review: 'We booked Morya Cab for our visit to Mahalaxmi Temple in Kolhapur. The driver was courteous and the journey was very comfortable. Excellent service!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Anuja Kulkarni',
    role: 'Frequent Traveler',
    review: 'My work takes me often to Kolhapur and I always use Morya Cab. Their cars are clean and the drivers are professional. Very dependable service!',
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


const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Kolhapur Cab",
  "image": "https://moryacab.com/assets/images/pune-to-kolhapur-cab.jpg",
  "description": "Book Pune to Kolhapur cab service with Morya Cab. Travel safely and comfortably to Mahalaxmi Temple and other attractions with AC Sedan, SUV, Innova Crysta, and Tempo Traveller options. Affordable fares, verified drivers, and reliable service for family, business, and pilgrimage trips.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "7685"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4200",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-kolhapur-cab"
  }
};





      

    return (
        <div>
<UsePageTracking/>
<Helmet>
  <title>Pune to Kolhapur Cab | Taxi & Car Rental – Morya Cab</title>
  <meta
    name="description"
    content="Hire Pune to Kolhapur cabs with Morya Cab. Clean AC cars, verified drivers & affordable fares. Choose from Sedan, SUV, Innova Crysta & Tempo Traveller for safe and comfortable travel to Mahalaxmi Temple and other Kolhapur attractions."
  />
  <meta
    name="keywords"
    content="Pune to Kolhapur cab, Pune to Kolhapur taxi, Pune to Kolhapur car rental, Pune to Kolhapur Innova cab, Pune to Kolhapur SUV cab, Pune to Kolhapur outstation cab, Pune to Kolhapur pilgrimage cab, Pune to Kolhapur Mahalaxmi Temple cab, Pune airport to Kolhapur cab, Morya Cab Pune to Kolhapur"
  />
  <link rel="canonical" href="https://moryacab.com/pune-to-kolhapur-cab" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Pune to Kolhapur Cab | Taxi & Car Rental – Morya Cab" />
  <meta property="og:description" content="Book Pune to Kolhapur taxi service with Morya Cab. Clean AC Sedan, SUV, Innova Crysta & Tempo Traveller at the best fares for family, business & pilgrimage journeys." />
  <meta property="og:url" content="https://moryacab.com/pune-to-kolhapur-cab" />
  <meta property="og:image" content="https://moryacab.com/assets/images/pune-to-kolhapur-cab.jpg" />
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
                            <img src='/images/keyword/101.jpg' alt='img' />
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

export default Punetokohlapurcab;