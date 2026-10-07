
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetotuljapurcabs() {



    const cardData =
    {
        keyword: 'Pune To Tuljapur Cabs',
        heading: 'Morya Cabs: Pune To Tuljapur Cabs',
        headingDescription: 'Morya Cabs provides reliable and comfortable Pune To Tuljapur Cabs services, ensuring a smooth and spiritually enriching journey to the renowned Tulja Bhavani temple. Whether you are traveling solo, with family, or in a group for darshan, our clean, well-maintained vehicles and professional drivers guarantee a safe and hassle-free ride. With flexible booking options, punctual pickups, and excellent customer service, Morya Cabs makes your Pune To Tuljapur Cabs experience convenient, comfortable, and worry-free.',

        top: 'Top Places to Visit in Tuljapur with Morya Cabs',

"topPlaces": [
    {
        "title": "Shri Tulja Bhavani Temple",
        "description": "One of the 51 Shakti Pithas, this 12th‑century Hemadpanthi temple on Yamunachala Hill is dedicated to Goddess Bhavani, the family deity of many Maratha clans including Shivaji’s. Pilgrims visit for daily aarti, Navratri celebrations, and to perform Homa rituals. The complex also includes shrines for Matangi, Annapurna, Datta, Yamai Devi and a mystical Chintamani stone used for seeking auspicious guidance. With its continuous lamp, amphitheatre seating, and centuries of legend, it’s a spiritual epicenter in Maharashtra."  
    },
    {
        "title": "Chintamani Ganpati Temple",
        "description": "Nestled close to the main temple, this ancient shrine houses a unique spherical stone representing Lord Ganesha. Devotees believe it grants boons and happiness, especially during Ganesh Chaturthi, when the atmosphere becomes festive and the lines grow as tradition calls."  
    },
    {
        "title": "Dhakte Tuljapur Temple",
        "description": "A quieter, lesser‑known spiritual spot on the outskirts, surrounded by greenery and offering a peaceful retreat. Ideal for early‑morning meditation or a calm darshan away from bustling crowds."  
    },
    {
        "title": "Ghat Shila Temple",
        "description": "Located on a rocky outcrop overlooking the town, this temple is linked to the Ramayana. Its stone architecture and elevated position offer panoramic views of Tuljapur and its surrounding landscape."  
    },
    {
        "title": "Kallol Tirth",
        "description": "A sacred pond frequented by pilgrims for ritual bathing. Thought to cleanse sins, it provides a peaceful setting for prayer and remembrance—mornings here carry special serenity."  
    },
    {
        "title": "Papanashi Tirth",
        "description": "Another revered bathing spot known for atonement rites. Pilgrims gather here to perform ceremonies that symbolize the removal of ancestral sins and spiritual renewal."  
    },
    {
        "title": "Bharati Buwa’s Mutt",
        "description": "A tranquil ashram honoring saint Bharati Buwa, offering spaces for devotional singing, spiritual discourses, and meditation. Set amid trees, it’s a soulful stop for seekers."  
    },
    {
        "title": "Naldurg Fort",
        "description": "Roughly 35 km away, this medieval fort built around basalt rock features long ramparts and bastions overlooking the Bori River valley. Great for history lovers and those seeking offbeat day-trip hikes."  
    },
    {
        "title": "Harni Dam",
        "description": "An earthfill reservoir near Tuljapur offering scenic views and a relaxing picnic atmosphere. The dam supports local irrigation and is serene during sunrise or sunset visits."  
    },
    {
        "title": "Upli Buruj Watchtower",
        "description": "A small hilltop tower offering panoramic views of Tuljapur, especially at sunset. Ideal for photography and capturing the town framed by the temple and hills in the distance."  
    }
],

  "services": [
    {
      "name": "Pune to Tuljapur Cabs",
      "description": "Morya Cab offers reliable and punctual cabs from Pune to Tuljapur for devotees, tourists, and families. Travel comfortably to the revered Tulja Bhavani Temple with professional drivers and well-maintained vehicles. Enjoy a peaceful and comfortable ride on your spiritual journey."
    },
    {
      "name": "Cab Booking Pune to Tuljapur Bhavani Mandir",
      "description": "Book your cab to Tuljapur Bhavani Mandir from Pune with Morya Cab for a hassle-free travel experience. We offer quick booking confirmations, clean vehicles, and drivers who understand temple timings to ensure you reach the temple on time for darshan."
    },
    {
      "name": "One-Way Taxi Pune to Tuljapur",
      "description": "Morya Cab provides one-way taxi services from Pune to Tuljapur for travelers who don’t require a return trip. It’s a cost-effective and convenient solution for pilgrims or visitors planning to stay overnight or continue traveling further."
    },
    {
      "name": "Round Trip Cabs Pune to Tuljapur",
      "description": "Need to visit and return the same day or the next? Morya Cab’s round-trip taxi services from Pune to Tuljapur offer flexibility, safety, and comfort with waiting time included. Ideal for day visits to the temple or weekend pilgrimages."
    },
    {
      "name": "AC Cab from Pune to Tuljapur",
      "description": "Travel in air-conditioned comfort from Pune to Tuljapur with Morya Cab. Our AC taxis ensure a pleasant journey even in hot weather, perfect for long-distance travel with your family or elders heading for temple visits."
    },
    {
      "name": "Budget Tuljapur Temple Cab Pune",
      "description": "Looking for a low-cost ride to Tuljapur Temple? Morya Cab offers budget-friendly cab options from Pune to Tuljapur without compromising on cleanliness, punctuality, or comfort. Great for students, solo pilgrims, and small families."
    },
    {
      "name": "Online Cab Hire Pune to Tuljapur",
      "description": "Book your Pune to Tuljapur cab online instantly with Morya Cab. Our secure online platform makes it easy to choose vehicle types, compare fares, and confirm your ride in seconds—perfect for both planned and last-minute trips."
    },
    {
      "name": "Pilgrimage Cab Pune to Tuljapur",
      "description": "Plan your spiritual journey with Morya Cab’s pilgrimage cab services from Pune to Tuljapur. We cater to religious travelers, offering early morning pickups, temple route knowledge, and clean vehicles that ensure a peaceful and respectful experience."
    },
    {
      "name": "Pune to Tuljapur Private Taxi",
      "description": "Enjoy complete privacy and peace of mind with our private taxi service from Pune to Tuljapur. Avoid ride-sharing and crowded transport. Perfect for couples, small families, or elderly travelers seeking personalized attention."
    },
    {
      "name": "Fast Taxi Service Pune to Tuljapur",
      "description": "Need a quick departure? Morya Cab offers prompt and fast taxi services from Pune to Tuljapur, with on-demand booking and minimal wait time. Our drivers ensure efficient routing and timely arrivals, especially during peak temple days."
    },
    {
      "name": "Safe Cab Ride Pune to Tuljapur",
      "description": "Safety is our top priority. Morya Cab ensures a safe ride from Pune to Tuljapur with trained, background-verified drivers and GPS-enabled vehicles. Ideal for families, women, and senior citizens heading to the Tulja Bhavani temple."
    },
    {
      "name": "Executive Taxi Pune to Tuljapur",
      "description": "For those who prefer comfort and style, Morya Cab offers executive taxi services from Pune to Tuljapur. Enjoy high-end vehicles with premium interiors, smooth rides, and courteous drivers. Ideal for business professionals and VIP travelers."
    },
    {
      "name": "Family Cab Pune to Tuljapur",
      "description": "Morya Cab provides spacious and comfortable family cabs for trips from Pune to Tuljapur. Perfect for family temple visits or group pilgrimages with plenty of luggage space, comfortable seating, and careful drivers focused on your needs."
    },
    {
      "name": "Pune to Tuljapur Outstation Cabs",
      "description": "Planning an outstation trip? Morya Cab offers dedicated outstation cab services from Pune to Tuljapur with fixed pricing, 24/7 availability, and long-distance travel readiness. Great for weekend plans, temple yatras, or personal visits."
    },
    {
      "name": "Sedan Taxi Pune to Tuljapur",
      "description": "Travel in comfort and style with our sedan taxis from Pune to Tuljapur. Ideal for couples or small families, our sedans offer smooth rides, air-conditioning, and ample luggage space for a worry-free religious journey."
    }
  ],
  "tableData": [
    ["Pune to Tuljapur Cabs", "-Cab Booking Pune to Tuljapur Bhavani Mandir"],
    ["One-Way Taxi Pune to Tuljapur", "-Round Trip Cabs Pune to Tuljapur"],
    ["AC Cab from Pune to Tuljapur", "-Budget Tuljapur Temple Cab Pune"],
    ["Online Cab Hire Pune to Tuljapur", "-Pilgrimage Cab Pune to Tuljapur"],
    ["Pune to Tuljapur Private Taxi", "-Fast Taxi Service Pune to Tuljapur"],
    ["Safe Cab Ride Pune to Tuljapur", "-Executive Taxi Pune to Tuljapur"],
    ["Family Cab Pune to Tuljapur", "-Pune to Tuljapur Outstation Cabs"],
    ["Sedan Taxi Pune to Tuljapur", "-Call Morya Cab at +91 9359401610"]
  ],




whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab guarantees timely pickups and drop-offs for your Pune to Tuljapur journey, helping you reach the holy Tulja Bhavani Temple without delays. We understand that darshan timings and personal schedules are important, which is why punctuality is one of our core commitments. Whether you're heading out early in the morning or traveling at night, we ensure your journey starts and ends on time."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our cabs are ideal for long-distance travel like Pune to Tuljapur. Each vehicle is air-conditioned, clean, and designed to provide maximum comfort for passengers. With soft seating, spacious legroom, and smooth suspension, your travel experience will be relaxing and stress-free—even on longer routes or rural roads. We offer options for individuals, families, and groups to ensure a perfect fit for every traveler."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are well-trained and experienced in handling long pilgrim routes like Pune to Tuljapur. They’re courteous, knowledgeable about the best and safest roads, and sensitive to the spiritual nature of the trip. They assist passengers as needed, especially senior citizens and families, making sure you’re taken care of from start to finish. With Morya Cab, you’re in good hands throughout your sacred journey."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We offer cost-effective pricing for Pune to Tuljapur cab services without compromising on quality. Morya Cab follows a strict no-hidden-charges policy. All prices are shared upfront, and billing is clear and simple. Whether it’s a one-way trip, a same-day return, or an overnight package, you’ll always know what you're paying for—and why. Our competitive rates make spiritual travel accessible and stress-free."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "We prioritize your safety above all. All our vehicles are regularly inspected and come equipped with modern safety features like seat belts, airbags, GPS tracking, and ABS braking systems. Our drivers follow traffic rules strictly and drive responsibly even on remote or narrow routes. With Morya Cab, your journey to Tuljapur is not only spiritually fulfilling but also safe and secure from start to end."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "We understand that spiritual journeys don’t always fit into a 9-to-5 schedule. That’s why Morya Cab is available 24/7 for Pune to Tuljapur cab bookings. Whether you want to travel at sunrise, during the night, or on festival days when the temple is especially busy, we are always ready to serve you. Our round-the-clock support ensures help is just a call or click away—whenever you need it."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your cab with Morya Cab is fast and effortless. Use our intuitive website or mobile app for instant bookings, or call our friendly customer support team for assistance. We provide confirmation via SMS or email, flexible payment options, and real-time updates so you stay informed every step of the way. The entire process is designed to be smooth, allowing you to focus on your visit rather than logistics."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Morya Cab offers flexible and personalized packages for Pune to Tuljapur trips. Whether you're planning a one-day pilgrimage, a family tour with sightseeing stops, or need time to attend temple rituals, we adjust the travel plan to suit your needs. Add additional stops, choose your return time, or plan a multi-destination trip—we'll tailor everything to match your preferences and make your journey truly yours."
    }
]











    }

const faqData = [
  {
    question: "How can I book a Pune to Tuljapur cab with Morya Cab?",
    answer: "Booking is easy! You can reserve your cab via our website, mobile app, or by calling our customer service team for personal assistance."
  },
  {
    question: "Are your drivers familiar with the route to Tuljapur Bhavani Temple?",
    answer: "Yes, our drivers are experienced and well-acquainted with the Pune to Tuljapur route and understand the importance of timely temple visits."
  },
  {
    question: "What types of cabs are available for this pilgrimage trip?",
    answer: "We offer a range of vehicles including sedans, SUVs, and tempo travelers—all comfortable, clean, and ideal for spiritual journeys."
  },
  {
    question: "Can I book a round trip to Tuljapur from Pune?",
    answer: "Yes, round-trip bookings are available. Just provide your return time and we’ll ensure a smooth travel experience both ways."
  },
  {
    question: "Do you offer temple darshan and waiting time in Tuljapur?",
    answer: "Absolutely! Our drivers will wait while you visit the Tulja Bhavani Temple. Let us know your darshan schedule and we’ll coordinate accordingly."
  },
  {
    question: "What are the payment methods for the cab booking?",
    answer: "You can pay via cash, UPI, debit/credit cards, or online payments through our app or website."
  },
  {
    question: "Are there extra charges for waiting during temple visits?",
    answer: "Basic waiting time is included. Any extended waiting or additional detours will be communicated transparently before the trip."
  },
  {
    question: "Is it safe to travel to Tuljapur during early mornings or late nights?",
    answer: "Yes, our cabs are available 24/7. Our drivers are trained for night and early morning travel, ensuring a safe and secure journey."
  },
  {
    question: "Can I book this cab service for senior citizens or a family trip?",
    answer: "Yes, our service is ideal for families and senior citizens. Just inform us during booking for any special requirements, and we'll make arrangements."
  },
  {
    question: "Why choose Morya Cab for Pune to Tuljapur travel?",
    answer: "Morya Cab offers dependable and affordable cab services with courteous drivers and comfortable vehicles—perfect for your Tuljapur pilgrimage."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mrs. Meena Shinde',
    role: 'Pilgrim',
    review: 'Our trip to Tuljapur was comfortable and on time. Morya Cab provided an excellent driver who patiently waited during our darshan. Highly recommended for temple visits!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Mr. Vijay Salunkhe',
    role: 'Family Traveler',
    review: 'I booked Morya Cab for my family’s Tuljapur visit. The cab arrived early, was clean, and the journey was stress-free. Great service from start to finish!',
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


   
   
   const puneToTuljapurCabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Tuljapur Cabs",
  "image": "https://moryacab.com/assets/images/pune-to-tuljapur-cab.jpg",
  "description": "Book reliable Pune to Tuljapur cab service with AC sedans, SUVs, and tempo travellers. Ideal for one-way, round trip, and temple visits to Tulja Bhavani. Verified drivers, comfortable rides, and 24/7 customer support.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "9832",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "3499",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-tuljapur-cabs"
  }
};






    return (
        <div>
<UsePageTracking/>

<Helmet>
  <title>Pune to Tuljapur Cabs | Book AC Sedan, SUV Taxi to Tulja Bhavani Temple</title>
  <meta
    name="description"
    content="Book reliable Pune to Tuljapur cab service with AC sedans, SUVs, and tempo travellers. Ideal for one-way, round trip, and temple visits to Tulja Bhavani. Verified drivers, comfortable rides, and 24/7 customer support."
  />
  <meta
    name="keywords"
    content="Pune to Tuljapur Cab, Pune to Tulja Bhavani Temple Taxi, One-Way Cab Pune Tuljapur, Round Trip Cab to Tuljapur, AC Cab Pune to Tuljapur, Sedan Cab Tuljapur Trip, SUV Taxi Pune Tuljapur, Tuljapur Temple Tour from Pune, Morya Cabs Pune to Tuljapur, Tuljapur Darshan Cab Booking, Affordable Tuljapur Cab from Pune, Tempo Traveller Pune to Tuljapur"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToTuljapurCabSchema)}
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
                            <img src='/images/keyword/100.jpg' alt='img' />
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

export default Punetotuljapurcabs;