
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoashtavinayakcab() {



    const cardData =
    {
        keyword: 'Pune To Ashtavinayak Tour Cab Package',
        heading: 'Morya Cabs: Pune To Ashtavinayak Tour Cab Package',
        headingDescription: 'Morya Cabs offers a specially curated Pune to Ashtavinayak Tour Cab Package for a spiritually enriching and comfortable journey to all eight revered Ganpati temples in Maharashtra. Ideal for family pilgrimages, senior citizen tours, or weekend spiritual getaways, our well-maintained cabs and courteous drivers ensure a smooth, safe, and timely darshan at every temple. With flexible itineraries, affordable rates, and complete travel support, Morya Cabs makes your Ashtavinayak Yatra peaceful and memorable.',

        top: 'Top Places to Visit in Ashtavinayak with Morya Cabs',

"topPlaces": [
    {
        "title": "Mayureshwar Temple (Morgaon)",
        "description": "Dedicated to Lord Ganesha in his form as Mayureshwar (riding a peacock), this temple is the traditional starting point of the Ashtavinayak Yatra. Located on the banks of the Karha River, it holds immense spiritual significance in the Ganapatya sect. The black-stone idol is said to have emerged spontaneously, with legends of defeating the demon Sindhu. The temple’s four-gate design and Nandi statue at the entrance are unique architectural features. Pilgrims always return here to complete the circuit. "
    },
    {
        "title": "Siddhivinayak Temple (Siddhatek)",
        "description": "Perched on a hillock by the Bhima River, this temple houses the only Ashtavinayak idol with its trunk pointing to the right—believed to bestow siddhi (spiritual power). It is associated with Vishnu’s victory over demons Madhu and Kaitabha. Surrounding babul trees and a ritual of circling the hillock add to its serene charm."
    },
    {
        "title": "Ballaleshwar Temple (Pali)",
        "description": "This rare temple is named after the devoted child Ballal, whose unwavering faith is believed to have manifested the Ganesha idol here. The east-facing swayambhu murti, adorned with diamonds in the eyes and navel, is housed in an ornate stone structure with eight carved pillars. Unique rural rituals include offering besan laddus instead of modaks as prasadam."
    },
    {
        "title": "Varadavinayak Temple (Mahad)",
        "description": "Built by Peshwa general Ramji Mahadev Biwalkar in 1725, this eastern-facing temple features a self-manifested idol discovered in a lake. Known as the 'boon-granting Ganesha', the idol’s left-turned trunk is illuminated by an eternal oil lamp. Devotees enter the garbhagriha to offer personal prayers close to the divine presence."
    },
    {
        "title": "Chintamani Temple (Theur)",
        "description": "Set in a peaceful village near Pune, the temple commemorates how Ganesha retrieved the wish-fulfilling Chintamani gem for the sage Kapila. The idol faces east with a left-trunk and the wooden sabha-mandapa was built by Peshwa Madhavrao I. Its riverside location beside ancient confluence adds tranquil beauty."
    },
    {
        "title": "Girijatmaj Temple (Lenyadri)",
        "description": "Carved into the eighth Buddhist-era cave in Lenyadri hill, this cave-temple honors Ganesha as ‘son of Parvati’. Pilgrims ascend roughly 300 steps to enter a vast pillar-less hall where the murti sits in peaceful solitude, naturally lit by daylight. This unique hilltop cave setup blends devotion, history, and adventure."
    },
    {
        "title": "Vigneshwara Temple (Ozar)",
        "description": "Nestled by the Kukadi River, this eastern-facing temple venerates Ganesha as ‘Remover of Obstacles’, celebrating his defeat of the demon Vignasura. Surrounded by a high stone wall and crowned with a golden pinnacle built after the Portuguese defeat (circa 1785), its main hall is open and inviting. It’s a prominent stop on the pilgrimage route."
    },
    {
        "title": "Mahaganapati Temple (Ranjangaon)",
        "description": "Dedicated to Ganesha as the ‘Great Lord’, this temple was patronized by Madhavrao Peshwa and features a hidden vault rumored to hold a multi-trunked, multi-armed idol. The idol is seated on a lotus, flanked by Riddhi and Siddhi, with sunlight illuminating it during Dakshinayan. The impressive gateway guarded by Jay-Vijay and Peshwa-era stone architecture enrich spiritual experience."
    }
],

  "services": [
    {
      "name": "Pune to Ashtavinayak Tour Cab Package",
      "description": "Morya Cab offers comprehensive Pune to Ashtavinayak tour cab packages, covering all eight sacred Ganapati temples. Enjoy a well-planned pilgrimage with comfortable rides and professional drivers guiding you throughout the journey."
    },
    {
      "name": "Ashtavinayak Darshan Cabs from Pune",
      "description": "Experience the spiritual Ashtavinayak darshan with Morya Cab’s dedicated cabs from Pune. Our reliable service ensures timely temple visits and a smooth travel experience, ideal for devotees and families."
    },
    {
      "name": "Full Tour Cab Package Pune Ashtavinayak",
      "description": "Book a full Ashtavinayak tour cab package from Pune with Morya Cab, including round-trip travel and multiple temple stops. Our package offers convenience, comfort, and cost savings for your religious journey."
    },
    {
      "name": "AC Taxi Pune for Ashtavinayak Tour",
      "description": "Travel in comfort with air-conditioned taxis for your Pune to Ashtavinayak tour. Beat the heat and enjoy a refreshing ride across all temple locations with Morya Cab’s well-maintained AC vehicles."
    },
    {
      "name": "Round Trip Ashtavinayak Cabs Pune",
      "description": "Morya Cab provides round-trip Ashtavinayak taxi services from Pune, allowing flexible scheduling and relaxed travel. Return to Pune hassle-free after your spiritual visit."
    },
    {
      "name": "Family Tour Cabs Pune to Ashtavinayak",
      "description": "Plan your family pilgrimage comfortably with Morya Cab’s family-friendly tour cabs. Spacious vehicles and courteous drivers make your Ashtavinayak tour from Pune safe and enjoyable for all age groups."
    },
    {
      "name": "Budget-Friendly Cab Package Pune Ashtavinayak",
      "description": "Morya Cab offers affordable and budget-friendly cab packages for the Ashtavinayak tour from Pune. Enjoy transparent pricing with no hidden charges, perfect for devotees looking for value without compromise."
    },
    {
      "name": "Online Booking Ashtavinayak Tour Pune",
      "description": "Book your Pune to Ashtavinayak tour cab easily online with Morya Cab. Get instant confirmations and convenient payment options, making your spiritual journey planning hassle-free."
    },
    {
      "name": "Private Cab Pune to Ashtavinayak Temples",
      "description": "Travel privately and comfortably to the Ashtavinayak temples from Pune with Morya Cab’s exclusive private cab services. Enjoy personalized service and flexible stops on your pilgrimage route."
    },
    {
      "name": "Comfortable Ashtavinayak Cab Pune",
      "description": "Morya Cab ensures a comfortable ride for your Pune to Ashtavinayak trip with spacious vehicles, smooth driving, and professional drivers dedicated to your convenience and safety."
    },
    {
      "name": "Multi-Day Tour Cab Pune Ashtavinayak",
      "description": "For devotees who wish to explore Ashtavinayak temples over multiple days, Morya Cab offers multi-day tour cab packages with flexible itineraries and comfortable overnight travel arrangements."
    },
    {
      "name": "Sedan SUV Cab Ashtavinayak Tour Pune",
      "description": "Choose from a range of sedans and SUVs for your Ashtavinayak tour from Pune. Morya Cab provides vehicles suited for small groups or families with ample space for luggage and a comfortable ride."
    },
    {
      "name": "Safe Pilgrimage Taxi Pune",
      "description": "Safety is paramount during your pilgrimage. Morya Cab ensures all vehicles are regularly sanitized and drivers follow safety protocols for a secure Pune to Ashtavinayak travel experience."
    },
    {
      "name": "Verified Drivers for Ashtavinayak Tour",
      "description": "Our verified and experienced drivers are knowledgeable about the Ashtavinayak routes and temple timings, ensuring you reach each destination on time with peace of mind throughout your journey."
    },
    {
      "name": "Religious Travel Cab Pune",
      "description": "Morya Cab specializes in religious travel cabs from Pune, offering dedicated services for temple tours including Ashtavinayak, with a focus on devotion, comfort, and respectful service."
    }
  ],
  "tableData": [
    ["Pune to Ashtavinayak Tour Cab Package", "-Ashtavinayak Darshan Cabs from Pune"],
    ["Full Tour Cab Package Pune Ashtavinayak", "-AC Taxi Pune for Ashtavinayak Tour"],
    ["Round Trip Ashtavinayak Cabs Pune", "-Family Tour Cabs Pune to Ashtavinayak"],
    ["Budget-Friendly Cab Package Pune Ashtavinayak", "-Online Booking Ashtavinayak Tour Pune"],
    ["Private Cab Pune to Ashtavinayak Temples", "-Comfortable Ashtavinayak Cab Pune"],
    ["Multi-Day Tour Cab Pune Ashtavinayak", "-Sedan SUV Cab Ashtavinayak Tour Pune"],
    ["Safe Pilgrimage Taxi Pune", "-Verified Drivers for Ashtavinayak Tour"],
    ["Religious Travel Cab Pune", "-Call Morya Cab at +91 9359401610"]
  ],




whychoose: [
    {
        "WhyChooseheading": "Reliable and Devotion-Focused Service",
        "WhyChoosedescription": "The Ashtavinayak Yatra is a sacred journey to the eight revered Ganpati temples across Maharashtra, and Morya Cab ensures that your pilgrimage is smooth, timely, and spiritually fulfilling. We are known for our punctuality and consistent service, helping you cover each temple as per your preferred itinerary without rushing or unnecessary delays. Whether you plan a one-day, two-day, or three-day tour, we organize every leg of the journey with precision and care."
    },
    {
        "WhyChooseheading": "Comfortable and Pilgrimage-Ready Vehicles",
        "WhyChoosedescription": "Our vehicles are perfectly suited for the long hours and multiple stops involved in the Ashtavinayak tour. All cabs are air-conditioned, spacious, and equipped with plush seating to keep you comfortable through winding rural roads and temple queues. We also provide options like SUVs, Innovas, and tempo travellers for families and groups, so everyone can travel together comfortably while maintaining the spiritual spirit of the trip."
    },
    {
        "WhyChooseheading": "Experienced and Devout Drivers",
        "WhyChoosedescription": "Our drivers are not only professionally trained for long-distance and multi-stop tours but are also familiar with the religious significance of each Ashtavinayak temple. They respectfully assist you at every stop, guide you through the best darshan timings, and ensure that your journey flows peacefully. Their local knowledge helps avoid traffic bottlenecks and time loss, making the experience serene and stress-free."
    },
    {
        "WhyChooseheading": "Affordable and All-Inclusive Pricing",
        "WhyChoosedescription": "Morya Cab offers Ashtavinayak tour packages at fair and transparent prices. Our packages include fuel, tolls, parking, and driver allowance—ensuring no hidden costs. You can choose from multiple budget options—whether you're doing a one-day express darshan or a leisurely two-day trip with night halts. We provide full price clarity from the start, so you can focus on devotion, not logistics."
    },
    {
        "WhyChooseheading": "Safe and Peaceful Journey",
        "WhyChoosedescription": "Safety and serenity go hand in hand during pilgrimages. All our vehicles are GPS-enabled, regularly serviced, and equipped with safety features like seat belts and ABS. Our drivers follow traffic rules strictly and drive responsibly, ensuring a peaceful travel experience. We also offer sanitized cabs, and optional amenities like water bottles, neck pillows, and mobile chargers to make your journey even more relaxed and safe."
    },
    {
        "WhyChooseheading": "24/7 Support for Pilgrims",
        "WhyChoosedescription": "Whether you want to start your journey early at dawn, travel overnight, or make emergency changes in your itinerary, Morya Cab is always available to support you. Our customer service is active 24/7 to answer questions, help you make bookings, or assist during your trip. Especially during festival days or holidays when temple crowds are high, we help you plan smarter and travel smoothly."
    },
    {
        "WhyChooseheading": "Easy Booking with Custom Options",
        "WhyChoosedescription": "Booking your Ashtavinayak cab tour with Morya Cab is simple and flexible. Choose your preferred travel dates, pickup location, tour duration, and even additional stops through our user-friendly website or mobile app. Need a temple night stay or a special route via Jejuri or Siddhatek? We’ll customize it for you. From online payments to instant confirmations, the entire process is easy and transparent."
    },
    {
        "WhyChooseheading": "Customizable Pilgrimage Packages",
        "WhyChoosedescription": "Not every devotee’s journey is the same. That’s why Morya Cab offers customized Ashtavinayak Yatra packages. Whether you're traveling with elderly family members, need extra halts for food and rest, or want to combine your tour with nearby temple visits like Jejuri or Shani Shingnapur, we’ll tailor the trip to suit your spiritual goals and personal convenience. With us, your pilgrimage is truly personal and fulfilling."
    }
]












    }

const faqData = [
  {
    question: "How can I book a Pune to Ashtavinayak tour cab with Morya Cab?",
    answer: "Booking is simple! You can book online via our website or app, or call our support team to customize your Ashtavinayak Yatra package."
  },
  {
    question: "What is included in the Ashtavinayak cab tour package?",
    answer: "Our package includes visits to all eight Ganesh temples, a dedicated cab with driver, tolls, parking, and flexible pickup and drop from Pune."
  },
  {
    question: "How many days does the Ashtavinayak tour usually take?",
    answer: "The complete tour typically takes 2 days. However, we can customize it based on your schedule—whether you want a 1-day express or 2-day relaxed trip."
  },
  {
    question: "What kind of vehicles are available for this tour?",
    answer: "We offer a wide range of vehicles like sedans, SUVs, and tempo travelers to suit solo pilgrims, families, or group tours."
  },
  {
    question: "Do your drivers know the Ashtavinayak route and temple timings?",
    answer: "Yes, our drivers are well-experienced with the Ashtavinayak circuit and can guide you on the best travel times and temple sequences."
  },
  {
    question: "Can I customize the itinerary or add stops along the way?",
    answer: "Absolutely! You can personalize the itinerary as per your convenience. Let us know your preferences while booking."
  },
  {
    question: "Is overnight accommodation included in the package?",
    answer: "Accommodation is optional. We can help arrange hotels or lodges if needed, or you can manage stay on your own while we handle the travel."
  },
  {
    question: "What payment options are available for the Ashtavinayak tour?",
    answer: "We accept UPI, credit/debit cards, net banking, and cash payments. Advance payment may be required for confirming the package."
  },
  {
    question: "Is the package suitable for senior citizens or families with kids?",
    answer: "Yes, our cabs are comfortable and our drivers are considerate, making the tour perfect for elderly devotees and families."
  },
  {
    question: "Why should I choose Morya Cab for the Ashtavinayak Yatra?",
    answer: "With Morya Cab, you get reliable service, experienced drivers, flexible plans, and a peaceful, spiritually fulfilling Ashtavinayak tour experience."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Dattatray Gokhale',
    role: 'Devotee',
    review: 'Morya Cab made our Ashtavinayak Yatra memorable. The driver was very knowledgeable and cooperative. All temples were covered on time. Highly satisfied!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Mrs. Leena Desai',
    role: 'Family Traveler',
    review: 'We traveled with senior citizens for the Ashtavinayak tour and Morya Cab made it super comfortable. Everything was well-organized and smooth.',
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




const puneToAshtavinayakTourSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Ashtavinayak Tour Cab Package",
  "image": "https://moryacab.com/assets/images/pune-to-ashtavinayak-tour.jpg",
  "description": "Book Ashtavinayak Darshan cab package from Pune with Morya Cabs. Visit all 8 Ganpati temples in comfort with AC sedan, SUV, or tempo traveller. One-day and two-day plans available. Trusted drivers and 24/7 support.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "12890",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "7499",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-ashtavinayak-tour-cab-package"
  }
};







   
      

    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Ashtavinayak Darshan Cab Package | Book 1 Day & 2 Day Tours | Morya Cabs</title>
  <meta
    name="description"
    content="Book Ashtavinayak Darshan cab package from Pune with Morya Cabs. Visit all 8 Ganpati temples in comfort with AC sedan, SUV, or tempo traveller. One-day and two-day plans available. Trusted drivers and 24/7 support."
  />
  <meta
    name="keywords"
    content="Pune to Ashtavinayak Cab, Ashtavinayak Tour Package from Pune, 8 Ganpati Darshan by Car, One Day Ashtavinayak Tour, Two Day Ashtavinayak Yatra, Cab for Ashtavinayak Temples, Morya Cabs Ashtavinayak, AC Sedan for Ashtavinayak Tour, Tempo Traveller for Ganpati Darshan, Pune Pilgrimage Taxi, Group Tour to Ashtavinayak"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToAshtavinayakTourSchema)}
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
                            <img src='/images/keyword/102.jpg' alt='img' />
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

export default Punetoashtavinayakcab;