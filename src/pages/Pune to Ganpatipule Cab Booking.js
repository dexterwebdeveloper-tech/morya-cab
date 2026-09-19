
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoganpatipule() {



    const cardData =
    {
        keyword: 'Pune to Ganpatipule Cab Booking',
        heading: 'Morya Cabs: Pune to Ganpatipule Cab Booking',
        headingDescription: 'Morya Cabs offers dependable and comfortable Pune to Ganpatipule Cab Booking services for a peaceful and scenic coastal journey to the famous Ganpati temple by the beach. Whether you are planning a spiritual visit, a beachside holiday, or a relaxed family getaway, our well-maintained cabs and professional drivers ensure a smooth and enjoyable ride. With flexible travel options, timely pickups, and scenic route experiences, Morya Cabs is your trusted choice for cab booking from Pune to Ganpatipule—making your journey safe, convenient, and memorable.',

        top: 'Top Places to Visit in Ganpatipule  with Morya Cabs',

"topPlaces": [
    {
        "title": "Swayambhu Ganpati Temple",
        "description": "This 400‑year‑old self‑manifested Ganesha temple stands right on Ganpatipule Beach, with the idol facing west to protect the Konkan coast. Built from white sand (pule), the shrine draws pilgrims year‑round, especially during Ganesh Jayanti. The ritual‑rich aarti by the sea and the tranquil beach backdrop make this both a spiritual and sensory experience."
    },
    {
        "title": "Ganpatipule Beach",
        "description": "A clean, shallow, golden‑sandy beach fringed by coconut palms and gentle waves. Ideal for sunrise walks, swimming, and relaxing under shady suru trees. Water sports like jet‑skiing and paddle‑boating are available during peak season. Locally praised for clear waters and a refreshing sea breeze."
    },
    {
        "title": "Prachin Konkan Museum & Magic Garden",
        "description": "A charming cultural spot showcasing Konkan rural life through folk artefacts, tools, and miniatures. The adjacent Magic Garden features whimsical scenes that delight families and children, blending education with entertainment in a scenic garden setting."
    },
    {
        "title": "Aare Ware Beach",
        "description": "A quiet, offbeat beach about 2 km from the main town, Aare Ware offers a more secluded escape. Shaded by trees and occasionally used for beach trekking, this spot is perfect for meditative walks, seashell collection, and sunset photography away from the crowds."
    },
    {
        "title": "Jaigad Fort & Lighthouse",
        "description": "Around 18 km north, this coastal fortification from the 16th century overlooks the estuary of the Shastri River and Arabian Sea. Though largely in ruins, its cliffside walls, lighthouse, and sweeping views make it a rewarding visit for history enthusiasts and photographers."
    },
    {
        "title": "Malgund (Keshavasut Smarak)",
        "description": "Just 1 km away, this quaint village is the birthplace of modern Marathi poet Keshavsut (Keshav Sitaram Joshi). Visit the memorial and museum dedicated to his life and work, and soak in the rustic charm of Konkan villages and homestead gardens."
    },
    {
        "title": "Pawas Ashram",
        "description": "About 20 km from Ganpatipule, this spiritual retreat center founded by Swami Swaroopanand attracts seekers for satsang, meditation, and simple communal living. The peaceful ashram is set amid verdant groves and offers a calm counterpoint to the coastal tourist vibe."
    },
    {
        "title": "Velneshwar Beach & Shiva Temple",
        "description": "Located ~38 km south, Velneshwar is a crescent‑shaped beach backed by a centuries‑old Shiva temple. Known for its unspoiled sands and healing Maha Shivratri festivities, it’s a serene beach‑temple combo away from commercial development."
    },
    {
        "title": "Dhoot‑Papeshwar Temple & Waterfall",
        "description": "About 10 km northeast, this ancient Shiva temple is tucked into a scenic riverside gorge. A perennial waterfall tumbles over black basalt rock into sacred Ganga‑Teerth pools below. The site combines worship, nature trails, and monsoon refreshment."
    },
    {
        "title": "Prachin Konkan Museum – Alternate perspective",
        "description": "Another highlight at the museum site is the detailed recreation of Konkan’s village life, including traditional homes, daily utensils, and folk art—from the house of zari‑makers to coconut husking scenes—offering a deep dive into local heritage."
    }
],

  "services": [
  {
    "name": "Pune to Ganpatipule Cab Booking",
    "description": "Morya Cab offers hassle-free Pune to Ganpatipule cab booking services, providing reliable, comfortable, and timely transport to the serene coastal town. Book online or by phone and enjoy a smooth journey with professional drivers and well-maintained vehicles."
  },
  {
    "name": "Konkan Beach Cab Pune to Ganpatipule",
    "description": "Travel to the beautiful Konkan beaches of Ganpatipule from Pune in comfort and style. Morya Cab’s Konkan Beach cabs ensure a scenic and relaxing coastal ride perfect for leisure trips."
  },
  {
    "name": "Online Cab Hire Pune to Ganpatipule",
    "description": "Easily book your Pune to Ganpatipule cab online with Morya Cab. Our seamless online booking platform offers instant confirmation, transparent pricing, and dedicated customer support for a stress-free experience."
  },
  {
    "name": "One-Way Ganpatipule Taxi from Pune",
    "description": "Need a one-way taxi from Pune to Ganpatipule? Morya Cab provides affordable and comfortable one-way cab options for hassle-free travel without the need to arrange return trips."
  },
  {
    "name": "Round Trip Cabs Pune to Ganpatipule",
    "description": "Plan your round trip from Pune to Ganpatipule with Morya Cab for flexible travel. Our round-trip packages offer convenience and cost savings, ensuring you explore and return with ease."
  },
  {
    "name": "Family Tour Cab Pune to Ganpatipule",
    "description": "Travel safely with your family from Pune to Ganpatipule with Morya Cab’s spacious family cabs. Enjoy a comfortable and stress-free coastal vacation with courteous drivers."
  },
  {
    "name": "AC Cabs Pune to Ganpatipule Beach",
    "description": "Beat the heat during your Pune to Ganpatipule trip with air-conditioned cabs from Morya Cab. Stay cool and relaxed throughout your journey to the beautiful Ganpatipule beach."
  },
  {
    "name": "Comfortable Coastal Ride Pune to Ganpatipule",
    "description": "Experience a comfortable and scenic coastal drive from Pune to Ganpatipule with Morya Cab. Our expert drivers navigate the best routes, ensuring a smooth and enjoyable journey."
  },
  {
    "name": "Verified Taxi Pune to Ganpatipule",
    "description": "Travel with confidence using Morya Cab’s verified taxi services from Pune to Ganpatipule. Our professional drivers and well-maintained vehicles prioritize your safety and satisfaction."
  },
  {
    "name": "Long-Distance Cab Pune to Ganpatipule",
    "description": "For long-distance travel from Pune to Ganpatipule, Morya Cab offers comfortable and reliable cab services. Our well-equipped vehicles and experienced drivers ensure a safe and pleasant journey."
  },
  {
    "name": "Budget Cab Pune to Ganpatipule",
    "description": "Looking for affordable Pune to Ganpatipule cabs? Morya Cab provides budget-friendly options without compromising on safety or comfort, making your coastal trip economical and enjoyable."
  },
  {
    "name": "Scenic Drive Taxi Pune to Ganpatipule",
    "description": "Enjoy the stunning coastal landscapes en route to Ganpatipule with Morya Cab’s scenic drive taxis. Relax and take in the views while we take care of your transport needs."
  },
  {
    "name": "SUV Cab Pune Ganpatipule Booking",
    "description": "Book spacious and comfortable SUV cabs from Pune to Ganpatipule with Morya Cab. Perfect for families or groups, our SUVs provide ample space and a smooth ride."
  },
  {
    "name": "Safe and Secure Cab Pune to Ganpatipule",
    "description": "Safety first with Morya Cab’s Pune to Ganpatipule cab services. All vehicles are sanitized regularly, and drivers follow strict safety protocols to ensure your secure journey."
  },
  {
    "name": "Quick Online Booking Pune Ganpatipule",
    "description": "Reserve your Pune to Ganpatipule cab quickly with Morya Cab’s easy online booking system. Get instant confirmation and enjoy hassle-free travel planning."
  }
],
  "tableData": [
    ["Pune to Ganpatipule Cab Booking", "-Konkan Beach Cab Pune to Ganpatipule"],
    ["Online Cab Hire Pune to Ganpatipule", "-One-Way Ganpatipule Taxi from Pune"],
    ["Round Trip Cabs Pune to Ganpatipule", "-Family Tour Cab Pune to Ganpatipule"],
    ["AC Cabs Pune to Ganpatipule Beach", "-Comfortable Coastal Ride Pune to Ganpatipule"],
    ["Verified Taxi Pune to Ganpatipule", "-Long-Distance Cab Pune to Ganpatipule"],
    ["Budget Cab Pune to Ganpatipule", "-Scenic Drive Taxi Pune to Ganpatipule"],
    ["SUV Cab Pune Ganpatipule Booking", "-Safe and Secure Cab Pune to Ganpatipule"],
    ["Quick Online Booking Pune Ganpatipule", "-Call Morya Cab at +91 9371304510"]
  ],




whychoose: [
    {
        "WhyChooseheading": "Reliable and Long-Distance Ready Service",
        "WhyChoosedescription": "Traveling from Pune to Ganpatipule—a serene coastal town known for its sacred Ganpati Temple and pristine beaches—requires dependable transportation. Morya Cab ensures on-time pickups and smooth journey planning for this 330+ km trip. Whether you're heading for a spiritual retreat, a beach holiday, or a family visit, our punctual service guarantees a stress-free start and timely arrival at your destination."
    },
    {
        "WhyChooseheading": "Comfortable and Coast-Ready Vehicles",
        "WhyChoosedescription": "A journey to Ganpatipule involves scenic mountain drives, coastal roads, and long stretches of highway. Our fleet is equipped with well-maintained, air-conditioned cars that offer spacious interiors, soft seating, and a smooth ride—ideal for both elderly pilgrims and young families. Choose from sedans, SUVs, or tempo travellers based on your group size for a comfortable and relaxing travel experience from Pune to the Konkan coast."
    },
    {
        "WhyChooseheading": "Experienced Drivers with Route Knowledge",
        "WhyChoosedescription": "Our drivers are experienced in long-distance travel and well-versed with the Konkan routes, including multiple approach roads to Ganpatipule such as via Satara, Ratnagiri, or Kolhapur. They ensure a safe and efficient journey, suggest the best rest stops, and handle hill and ghat driving with ease. Their friendly behavior and local knowledge add great value to your overall experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing for your Pune to Ganpatipule cab journey. Our fare structure includes fuel, tolls, parking, and driver allowance—clearly mentioned upfront. No hidden fees or last-minute charges. Whether it's a one-way trip, a round trip with overnight stay, or a sightseeing-inclusive package, we provide fair and transparent rates to suit your budget and travel plan."
    },
    {
        "WhyChooseheading": "Safe and Peaceful Travel Experience",
        "WhyChoosedescription": "Your safety and comfort are our priorities, especially on long coastal drives. All our vehicles are regularly serviced, sanitized, and GPS-enabled for real-time tracking. Our drivers follow all traffic and safety regulations, ensuring a peaceful and secure journey. Whether you're traveling with children, senior citizens, or solo, you can rely on Morya Cab for a safe trip to Ganpatipule."
    },
    {
        "WhyChooseheading": "24/7 Customer Support and Booking Assistance",
        "WhyChoosedescription": "Need to book a late-night departure or early morning temple visit? Morya Cab’s support team is available 24/7 to assist with queries, modifications, or emergency support. From helping you choose the best route to rescheduling your return trip, our round-the-clock service ensures you’re never alone during your travel."
    },
    {
        "WhyChooseheading": "Simple Booking and Flexible Options",
        "WhyChoosedescription": "Booking your Pune to Ganpatipule cab is quick and easy through our website or mobile app. Prefer a call? Our friendly team is just a phone call away. We offer instant booking confirmations, flexible payment methods, and travel options like one-way, round-trip, or multi-day packages—making it easier than ever to plan your trip your way."
    },
    {
        "WhyChooseheading": "Custom Travel Packages with Sightseeing Add-ons",
        "WhyChoosedescription": "Want to stop at famous points like Ratnagiri, Jaigad Fort, or Velneshwar Beach? Morya Cab offers personalized travel packages that include local sightseeing around Ganpatipule. You can also combine your journey with nearby destinations like Pawas, Ganeshgule, or even a beach stay. Just tell us your plan, and we’ll build a customized cab package that delivers comfort, flexibility, and spiritual satisfaction."
    }
]














    }

const faqData = [
  {
    question: "How can I book a Pune to Ganpatipule cab with Morya Cab?",
    answer: "Booking is easy! You can reserve your cab through our website, mobile app, or by calling our customer support team for personalized service."
  },
  {
    question: "What is the distance and travel time from Pune to Ganpatipule?",
    answer: "The distance is approximately 330 km and takes around 7 to 8 hours depending on the route and traffic conditions."
  },
  {
    question: "What types of vehicles are available for this route?",
    answer: "We provide a wide range of vehicles including sedans, SUVs, and tempo travelers—ideal for individuals, families, and group travel to Ganpatipule."
  },
  {
    question: "Do you offer round-trip bookings from Pune to Ganpatipule?",
    answer: "Yes, we offer flexible one-way and round-trip cab services. Just mention your return plan while booking, and we’ll schedule everything accordingly."
  },
  {
    question: "Can I include sightseeing stops along the Konkan route?",
    answer: "Absolutely! You can include popular stops like Ratnagiri, Aare-Ware beach, or Prachin Konkan Museum. Custom itineraries are welcome."
  },
  {
    question: "Are your drivers experienced with the Konkan region routes?",
    answer: "Yes, our drivers are well-versed with the Konkan region and ensure a safe, comfortable ride through the scenic coastal roads."
  },
  {
    question: "What are the available payment methods?",
    answer: "We accept UPI, debit/credit cards, net banking, and cash payments. Online advance booking is also available through our app or website."
  },
  {
    question: "Is accommodation included in the package?",
    answer: "Accommodation is not included by default, but we can help you with hotel suggestions or add it to your customized package if required."
  },
  {
    question: "Is this trip suitable for senior citizens and families?",
    answer: "Yes, our service is perfect for family getaways and pilgrimages. We offer clean vehicles, patient drivers, and flexible stops to suit everyone’s needs."
  },
  {
    question: "Why should I choose Morya Cab for Pune to Ganpatipule travel?",
    answer: "Morya Cab offers reliable, comfortable, and affordable cab services with experienced drivers and personalized support for your Ganpatipule journey."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Suresh Joshi',
    role: 'Senior Traveler',
    review: 'We had a peaceful and scenic journey to Ganpatipule with Morya Cab. The driver was courteous and knew the best places to stop along the way. Highly recommend!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Kavita Deshmukh',
    role: 'Family Trip Planner',
    review: 'Morya Cab made our Ganpatipule family vacation totally stress-free. The vehicle was clean, the ride was comfortable, and the driver was very helpful. Excellent service!',
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
  "name": "Pune to Ganpatipule Cab Booking",
  "image": "https://moryacab.com/assets/images/pune-to-ganpatipule-cab.jpg",
  "description": "Book Pune to Ganpatipule cab service with Morya Cab. Comfortable AC Sedan, SUV, Innova Crysta, and Tempo Traveller available for family trips, beach holidays, and pilgrimage travel to the famous Ganpatipule Temple. Affordable fares, clean vehicles, and experienced drivers for a safe and memorable journey.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "7542"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "7200",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-ganpatipule-cab-booking"
  }
};







      

    return (
        <div>
            <UsePageTracking/>

<Helmet>
  <title>Pune to Ganpatipule Cab Booking | Taxi & Car Rental – Morya Cab</title>
  <meta
    name="description"
    content="Hire Pune to Ganpatipule cabs with Morya Cab. AC Sedan, SUV, Innova Crysta & Tempo Traveller available at affordable fares. Ideal for beach holidays, family trips & pilgrimage to Ganpatipule Temple."
  />
  <meta
    name="keywords"
    content="Pune to Ganpatipule cab, Pune to Ganpatipule taxi, Pune to Ganpatipule cab booking, Pune to Ganpatipule Innova cab, Pune to Ganpatipule SUV cab, Pune to Ganpatipule car rental, Pune to Ganpatipule Tempo Traveller, Pune to Ganpatipule outstation cab, Pune to Ganpatipule family cab, Pune to Ganpatipule temple cab, Morya Cab Pune to Ganpatipule"
  />
  <link rel="canonical" href="https://moryacab.com/pune-to-ganpatipule-cab-booking" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Pune to Ganpatipule Cab Booking | Taxi & Car Rental – Morya Cab" />
  <meta property="og:description" content="Book Pune to Ganpatipule taxi with Morya Cab. Affordable fares, clean AC cars, verified drivers & multiple cab options for family, group & pilgrimage trips." />
  <meta property="og:url" content="https://moryacab.com/pune-to-ganpatipule-cab-booking" />
  <meta property="og:image" content="https://moryacab.com/assets/images/pune-to-ganpatipule-cab.jpg" />
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
                            <img src='/images/keyword/105.jpg' alt='img' />
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

export default Punetoganpatipule;