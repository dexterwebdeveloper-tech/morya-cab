
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Affordablecabserviceinpune() {



    const cardData =
    {
        keyword: 'Affordable Cab Service in Pune',
        heading: 'Morya Cabs: Affordable Cab Service in Pune',
        headingDescription: 'Morya Cabs offers affordable cab service in Pune without compromising on comfort, safety, or reliability. Whether you are planning a local city ride, outstation trip, airport transfer, or daily commute, we provide clean, well-maintained vehicles at budget-friendly rates. With professional drivers, transparent pricing, and 24/7 customer support, Morya Cabs ensures a smooth and economical travel experience across Pune and beyond.',

        top: 'Top Places to Visit in Pune  with Morya Cabs',

"topPlaces": [
    {
        "title": "Shaniwar Wada",
        "description": "A majestic 18th-century fortification that served as the seat of the Peshwas from 1732. Though largely ruined by a fire in 1828, its surviving gates, ramparts, and foundation tell dramatic stories of Maratha politics and architecture. Don’t miss visiting at dusk for the evening light‑and‑sound show (check scheduling updates before planning)."
    },
    {
        "title": "Aga Khan Palace",
        "description": "Built in 1892, this elegant palace is now a national monument commemorating Gandhi’s exile during the Quit India Movement. Its spacious lawns, serene interior, and informative museum exhibit key documents and personal items of Gandhi and Kasturba, making it a poignant pilgrimage for history lovers."
    },
    {
        "title": "Sinhagad Fort",
        "description": "A historic hill‑fort about 28 km southwest of Pune, famed for the heroic Battle of Sinhagad (1670). You can hike up ~2.7 km or drive partway, then trek the rest. On top, explore bastions, temples, Tanaji’s memorial, and enjoy sweeping Sahyadri views—especially dramatic during monsoon."
    },
    {
        "title": "Dagdusheth Halwai Ganapati Temple",
        "description": "One of Pune’s most beloved and ornate Ganesha temples, known for its gold‑plated idol and philanthropic legacy. The lively atmosphere, frequent celebrations, and proximity to busy cultural neighborhoods make it a spiritual and sensory highlight."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "description": "An 8th-century rock-cut temple carved into Deccan basalt, featuring a monolithic Nandi shrine in an open mandapa supported by pillars. Nestled in urban greenery near Fergusson College, it's a peaceful oasis of ancient artistry."
    },
    {
        "title": "Parvati Hill & Temple",
        "description": "Pune’s second‑highest viewpoint at ~2,100 ft, accessed via 103 steps. The hilltop cluster of temples dates to the Peshwa era, offering panoramic views of the cityscape and a spiritual vibe—great for sunrise or evening visits."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "description": "A curated treasure trove of over 20,000 artifacts—ranging from Mughal miniatures to traditional puppets, musical instruments, and ornate brassware. The museum offers a vivid snapshot of India’s everyday art and crafts heritage."
    },
    {
        "title": "Osho International Meditation Resort",
        "description": "A serene urban retreat in Koregaon Park, offering a blend of dynamic meditation programs, communal events, and wellness sessions. The lush campus, eclectic architecture, and silent evenings provide a modern spiritual counterpoint to Pune’s heritage."
    },
    {
        "title": "Khadakwasla Dam & Lake",
        "description": "An evening hotspot just 20 km west of the city. The vantage point atop the dam offers scenic views over water and hills, especially during monsoon and winter. Locals gather for food stalls, kite flying, and relaxing lakeside strolls."
    },
    {
        "title": "Bhaja & Karla Buddhist Caves",
        "description": "Located along the Pune–Mumbai highway, these 2nd-century BCE cave complexes feature rock‑cut stupas and chaitya halls. Bhaja has 22 caves with a waterfall nearby, while Karla houses one of India’s largest ancient Buddhist prayer halls—impressive for history and architecture enthusiasts."
    }
],

  "services": [
    {
      "name": "Affordable Cab Service in Pune",
      "description": "Morya Cab offers highly affordable cab services across Pune for all your travel needs. Whether you're commuting within the city or planning a longer journey, we provide cost-effective travel solutions with clean, reliable, and GPS-enabled vehicles driven by professional drivers."
    },
    {
      "name": "Budget Taxi Pune",
      "description": "Looking for budget-friendly taxis in Pune? Morya Cab delivers dependable and low-cost taxi rides without compromising on service quality. Perfect for daily travel, quick errands, or spontaneous city trips."
    },
    {
      "name": "Cheapest Pune Cab Booking",
      "description": "Morya Cab brings you the cheapest cab booking options in Pune. Enjoy transparent pricing, no hidden charges, and instant online bookings—ideal for students, office-goers, and regular city travelers."
    },
    {
      "name": "Low Fare Cabs in Pune",
      "description": "Get low fare cabs in Pune with Morya Cab's value-driven pricing. Whether you're heading to the market, railway station, airport, or anywhere else, we offer fixed fares and pocket-friendly travel options."
    },
    {
      "name": "Pocket-Friendly Cab Hire Pune",
      "description": "Save big with Morya Cab’s pocket-friendly cab hire options in Pune. We offer a wide range of cars—from sedans to hatchbacks—to suit your budget while ensuring reliable and clean transport services."
    },
    {
      "name": "Online Affordable Taxi Pune",
      "description": "Book your next affordable taxi ride in Pune online with Morya Cab. Our intuitive booking platform and secure payment options make it easier than ever to travel smart without stretching your budget."
    },
    {
      "name": "Verified Cheap Cab Service Pune",
      "description": "Choose Morya Cab for verified and safe cab service at the cheapest rates in Pune. All our drivers are background-checked, and vehicles undergo regular maintenance to ensure a smooth, economical ride every time."
    },
    {
      "name": "City Cabs at Lowest Fare Pune",
      "description": "Morya Cab offers city rides at the lowest fares in Pune. Our fleet includes compact cars, ideal for short trips or daily commutes, ensuring you get from point A to B without spending more than necessary."
    },
    {
      "name": "Outstation Cab Pune at Budget Rate",
      "description": "Planning a trip outside Pune? Book Morya Cab’s budget-rate outstation cabs with reliable drivers, fuel-efficient cars, and clear fare estimates. Great for solo travelers or family groups heading out of town."
    },
    {
      "name": "Daily Commute Cab Pune",
      "description": "Skip the hassle of public transport and travel comfortably with Morya Cab’s daily commute services in Pune. Choose a budget ride that fits your schedule and wallet, with timely pickups and drop-offs."
    },
    {
      "name": "AC Cab Service at Affordable Price Pune",
      "description": "Stay cool and comfortable even on a budget with Morya Cab’s air-conditioned rides at affordable prices in Pune. Ideal for summer days, long-distance city travel, and business trips."
    },
    {
      "name": "Quick Booking Affordable Taxi Pune",
      "description": "Book your low-cost cab in Pune in seconds using Morya Cab’s quick booking system. Our easy-to-use interface helps you schedule pickups, choose vehicle types, and get instant confirmation—all at the best rates."
    },
    {
      "name": "Private Cab Pune in Budget",
      "description": "Enjoy the privacy of a dedicated cab without breaking your budget. Morya Cab offers low-cost private rides in Pune, perfect for solo travelers or families who prefer exclusive travel comfort."
    },
    {
      "name": "Transparent Fare Taxi Pune",
      "description": "Morya Cab ensures complete transparency in taxi fares across Pune. Know your fare upfront, with no surprises or extra charges. A trustworthy option for anyone seeking reliable and budget travel."
    },
    {
      "name": "Best Rate Cab Service Pune",
      "description": "Get the best cab rates in Pune with Morya Cab. Our competitive pricing, well-maintained cars, and professional drivers make us the go-to choice for affordable and quality taxi service in the city."
    }
  ],
  "tableData": [
    ["Affordable Cab Service in Pune", "-Budget Taxi Pune"],
    ["Cheapest Pune Cab Booking", "-Low Fare Cabs in Pune"],
    ["Pocket-Friendly Cab Hire Pune", "-Online Affordable Taxi Pune"],
    ["Verified Cheap Cab Service Pune", "-City Cabs at Lowest Fare Pune"],
    ["Outstation Cab Pune at Budget Rate", "-Daily Commute Cab Pune"],
    ["AC Cab Service at Affordable Price Pune", "-Quick Booking Affordable Taxi Pune"],
    ["Private Cab Pune in Budget", "-Transparent Fare Taxi Pune"],
    ["Best Rate Cab Service Pune", "-Call Morya Cab at +91 9359401610"]
  ],




whychoose: [
    {
        "WhyChooseheading": "Cost-Effective and Budget-Friendly Rides",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of affordable travel without compromising on quality. Our Pune cab services are priced competitively to suit your budget, whether you’re commuting daily, booking for a special occasion, or planning a one-way trip. Enjoy value-for-money rides with transparent fares and no hidden charges."
    },
    {
        "WhyChooseheading": "Wide Range of Affordable Vehicle Options",
        "WhyChoosedescription": "Choose from a variety of vehicles to fit your budget and travel needs—from economical hatchbacks for solo travelers to spacious sedans for small groups. Our fleet is well-maintained, fuel-efficient, and ideal for city commuting or short intercity trips, ensuring you get the best ride at the best price."
    },
    {
        "WhyChooseheading": "Reliable and Punctual Service at Great Prices",
        "WhyChoosedescription": "Affordable doesn’t mean unreliable. We prioritize timely pickups and drop-offs across Pune to help you reach your destination on schedule. Our drivers are professional and experienced, ensuring a safe and smooth journey every time, even for budget-conscious customers."
    },
    {
        "WhyChooseheading": "Transparent Pricing with No Hidden Fees",
        "WhyChoosedescription": "With Morya Cab, you pay what you see. Our fare estimates include all charges—fuel, tolls, taxes, and driver allowance—without any surprise fees at the end. This transparent pricing policy helps you plan your travel expenses accurately and enjoy stress-free cab rides."
    },
    {
        "WhyChooseheading": "Flexible Booking and Payment Options",
        "WhyChoosedescription": "Booking your affordable cab in Pune is quick and hassle-free. Use our website, mobile app, or call our customer support team to reserve your ride. We accept multiple payment methods including cash, cards, UPI, and digital wallets, making transactions smooth and convenient."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Travel on a Budget",
        "WhyChoosedescription": "Even on affordable rides, your safety and comfort are non-negotiable. Our vehicles are regularly sanitized and inspected for safety features like seat belts and GPS tracking. Enjoy clean, comfortable journeys without stretching your wallet."
    },
    {
        "WhyChooseheading": "24/7 Availability for All Your Travel Needs",
        "WhyChoosedescription": "Need an affordable ride at midnight or early morning? Morya Cab operates round the clock, ensuring you have access to budget-friendly transportation whenever you need it. Our responsive support team is always ready to assist with bookings and travel queries."
    },
    {
        "WhyChooseheading": "Ideal for Daily Commutes, Airport Transfers, and Local Trips",
        "WhyChoosedescription": "Whether you need a cab for your daily office commute, an airport transfer, or sightseeing within Pune, our affordable service adapts to all purposes. Reliable, economical, and convenient—Morya Cab is your go-to choice for affordable travel in Pune."
    }
]


















    }

const faqData = [
  {
    question: "How can I book an affordable cab service in Pune with Morya Cab?",
    answer: "You can book affordable cabs easily via our website, mobile app, or by calling our customer support for quick assistance."
  },
  {
    question: "What makes Morya Cab’s services affordable without compromising quality?",
    answer: "We optimize routes, maintain a fleet of fuel-efficient vehicles, and offer transparent pricing with no hidden charges to keep costs low while ensuring quality."
  },
  {
    question: "What types of affordable cabs are available in Pune?",
    answer: "We offer a range of vehicles including hatchbacks, sedans, and SUVs suitable for solo travelers, families, and groups at budget-friendly prices."
  },
  {
    question: "Are there any discounts or special offers for Pune cab services?",
    answer: "Yes, we frequently offer discounts, promotional deals, and loyalty programs. Check our website or app for the latest offers."
  },
  {
    question: "Can I book cabs for local Pune travel as well as outstation trips?",
    answer: "Absolutely! Our affordable cabs are available for local city rides, airport transfers, and outstation journeys from Pune."
  },
  {
    question: "What payment options do you offer for affordable cab services?",
    answer: "We accept cash, credit/debit cards, UPI, and online payments through our app and website for your convenience."
  },
  {
    question: "Is the service reliable despite the affordable pricing?",
    answer: "Yes, Morya Cab prioritizes reliability with timely pickups, well-maintained vehicles, and professional drivers, even at affordable rates."
  },
  {
    question: "Can I book affordable cabs for corporate or group travel in Pune?",
    answer: "Yes, we offer tailored packages for corporate clients and group travel, ensuring affordability without compromising comfort."
  },
  {
    question: "Do you provide 24/7 cab service in Pune?",
    answer: "Yes, our affordable cab services operate 24/7 to meet your travel needs anytime."
  },
  {
    question: "Why choose Morya Cab for affordable cab service in Pune?",
    answer: "Morya Cab combines affordability, reliability, and quality with professional drivers and clean vehicles to provide the best value cab service in Pune."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Amit Kulkarni',
    role: 'Daily Commuter',
    review: 'Morya Cab offers the most affordable and reliable cab service in Pune. I use them daily for office commute and always have a smooth ride.',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Pooja Deshpande',
    role: 'Student',
    review: 'As a student, I found Morya Cab’s prices very budget-friendly without sacrificing service quality. Highly recommended for affordable rides in Pune!',
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


   
const affordableCabServicePuneSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Affordable Cab Service in Pune",
  "image": "https://moryacab.com/assets/images/affordable-cab-pune.jpg",
  "description": "Book affordable cab service in Pune with Morya Cabs. Choose from AC sedans, SUVs, and tempo travellers for city rides, airport transfers, and local sightseeing. Reliable, safe, and budget-friendly with verified drivers and 24/7 support.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "15200",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "399",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/affordable-cab-service-pune"
  }
};









    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Affordable Cab Service in Pune | Budget-Friendly Taxi | Morya Cabs</title>
  <meta
    name="description"
    content="Book affordable cab service in Pune with Morya Cabs. Choose from AC sedans, SUVs, and tempo travellers for city rides, airport transfers, and local sightseeing. Reliable, safe, and budget-friendly with verified drivers and 24/7 support."
  />
  <meta
    name="keywords"
    content="Affordable Cab Service Pune, Budget Taxi Pune, Cheap Cab Pune, Pune Local Cab Service, Pune Airport Taxi Affordable, Reliable Taxi Pune, AC Taxi Pune Budget, SUV Taxi Pune Cheap, Morya Cabs Pune, Verified Drivers Pune Cab"
  />
  <script type="application/ld+json">
    {JSON.stringify(affordableCabServicePuneSchema)}
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
                            <img src='/images/keyword/109.jpg' alt='img' />
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

export default Affordablecabserviceinpune;