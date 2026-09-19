
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetolonavalakhandalacabs() {



    const cardData =
    {
        keyword: 'Pune To Lonavala Khandala Cabs',
        heading: 'Morya Cabs: Pune To Lonavala Khandala Cabs',
        headingDescription: 'Morya Cabs offers scenic and reliable Pune to Lonavala Khandala Cabs for weekend getaways, family trips, or romantic escapes to the iconic twin hill stations. Whether you are planning a monsoon drive, a sightseeing tour, or a peaceful retreat in nature, our well-maintained cabs and experienced drivers ensure a smooth and enjoyable ride. With on-time pickups, flexible booking options, and clean, comfortable vehicles, Morya Cabs is your trusted partner for a safe and memorable journey from Pune to Lonavala and Khandala.',

        top: 'Top Places to Visit in Lonavala  with Morya Cabs',

"topPlaces": [
    {
        "title": "Tiger’s Leap",
        "description": "A dramatic cliff-top view point approximately 8 km from Lonavala, with a sheer 650 m drop—perfect for sunrise and sunset vistas. The echo-point enhances the experience, and during monsoon you’ll see a seasonal waterfall spilling over the cliff, adding magic to the misty Western Ghats panorama."
    },
    {
        "title": "Bhushi Dam",
        "description": "Built on the Indrayani River just outside Lonavala, this dam is famous for its stepped stone weirs where visitors can relax and splash during monsoon. It’s a vibrant spot for picnics, street snacks, and family memories—best to go early to avoid crowds."
    },
    {
        "title": "Lohagad Fort",
        "description": "A heritage hill fort about 9 km from Lonavala, rising to 1,033 m above sea level. The monsoon trek up the tar road from Malavali Station offers misty charm, while the summit reveals ancient walls, Ganesh Gate, and sweeping valley views—great for history buffs and trekkers."
    },
    {
        "title": "Rajmachi Fort",
        "description": "Located ~25 km away near Khandala, this twin-peaked fort (Shrivardhan & Manaranjan) offers panoramic Sahyadri views and a rich Maratha legacy. Trekkers enjoy scenic forests, quaint villages, and occasional firefly displays during monsoons."
    },
    {
        "title": "Karla Caves",
        "description": "Dating from 2nd-century BCE to 5th-century CE, these rock-cut Buddhist caves house a grand chaitya hall with intricate sculptures. Nestled ~11 km from Lonavala, the cave’s ancient corridors echo history and artistry amid monsoon greenery."
    },
    {
        "title": "Bhaja Caves",
        "description": "A cluster of 22 Buddhist caves from the 2nd century BCE, located close to Karla. These caves feature elegant stupas and carved gateways—an excellent archaeological stop that complements a heritage trek."
    },
    {
        "title": "Pawna Lake",
        "description": "An artificial reservoir formed by Pavana Dam (~25 km from Lonavala), now a camping and picnic hotspot. Beautiful at sunrise, it’s popular for lakeside tents, bonfires, stargazing, and relaxed boating under the sylvan hills."
    },
    {
        "title": "Della Adventure Park",
        "description": "India’s largest adventure park (~36 acres), offering 50+ heart-pumping activities—from bungee jumps and swoop swings to ATV trails and paintball. Located in Kunegaon, it’s ideal for families, thrill-seekers, and team events in a scenic setting."
    },
    {
        "title": "Lion’s Point & Scorpion’s Sting",
        "description": "Scenic cliff viewpoints offering 180° vistas over Tungarli Lake and the valley. These spots are perfect for photography, gentle treks, and witnessing the dawn mist—less crowded than Tiger’s Leap but equally stunning."
    },
    {
        "title": "Korigad Fort",
        "description": "A lesser-known hill fort about 20 km south of Lonavala, standing at ~923 m. Known for its intact ramparts, twin summit lakes, and night camping possibilities, it combines easy trekking with cultural richness on its stone ramparts."
    }
],

  "services": [
    {
      "name": "Pune to Lonavala Khandala Cabs",
      "description": "Morya Cab offers reliable and comfortable cab services from Pune to Lonavala and Khandala. Perfect for weekend trips or leisure travel, our well-maintained vehicles and experienced drivers ensure a safe and scenic journey through the beautiful Western Ghats."
    },
    {
      "name": "Weekend Trip Cabs Pune to Lonavala",
      "description": "Plan your weekend getaway with Morya Cab’s weekend trip cabs from Pune to Lonavala. Enjoy flexible pick-up and drop timings, comfortable rides, and hassle-free booking for a perfect hill station retreat."
    },
    {
      "name": "Pune to Khandala AC Taxi",
      "description": "Travel comfortably with Morya Cab’s air-conditioned taxis from Pune to Khandala. Our AC cabs provide a refreshing ride, ensuring you reach your destination relaxed and ready to enjoy the scenic beauty."
    },
    {
      "name": "One-Way Cab from Pune to Lonavala",
      "description": "Morya Cab offers convenient one-way taxi services from Pune to Lonavala, ideal for travelers looking for direct and efficient transport without the need for return bookings."
    },
    {
      "name": "Round Trip Pune Lonavala Cab Booking",
      "description": "Book your round-trip cab with Morya Cab for a stress-free journey to and from Lonavala. Our flexible packages let you explore the hill station at your own pace, with reliable pickup and drop services."
    },
    {
      "name": "Online Lonavala Cab Pune",
      "description": "Easily book your Pune to Lonavala cab online with Morya Cab. Our user-friendly platform offers instant confirmation, secure payment options, and 24/7 customer support."
    },
    {
      "name": "Hill Station Tour Cab Pune to Lonavala",
      "description": "Experience a scenic hill station tour with Morya Cab from Pune to Lonavala. Enjoy picturesque drives, comfortable seating, and professional drivers who know the best routes to the popular spots."
    },
    {
      "name": "Family Cab Lonavala Pune",
      "description": "Travel with your family comfortably with Morya Cab’s family-friendly cabs from Pune to Lonavala. Spacious vehicles and courteous drivers make your family outing safe and enjoyable."
    },
    {
      "name": "Budget Taxi Pune to Khandala",
      "description": "For affordable taxi services from Pune to Khandala, Morya Cab offers budget-friendly options without compromising on safety or comfort. Perfect for travelers looking for value and quality."
    },
    {
      "name": "Pune to Lonavala SUV Cabs",
      "description": "Choose from our fleet of SUVs for your Pune to Lonavala trip. Ideal for groups or those seeking extra comfort and space, Morya Cab ensures a smooth and enjoyable ride in our spacious SUVs."
    },
    {
      "name": "Scenic Drive Cab Pune to Khandala",
      "description": "Enjoy the scenic beauty of the Western Ghats with Morya Cab’s scenic drive cabs from Pune to Khandala. Our experienced drivers take the best routes so you can relax and soak in the views."
    },
    {
      "name": "Executive Cab Pune to Lonavala",
      "description": "Travel in style with Morya Cab’s executive cab services from Pune to Lonavala. Perfect for business travelers or those looking for a premium experience, our executive vehicles offer luxury and comfort."
    },
    {
      "name": "Private Taxi Pune to Khandala",
      "description": "Book a private taxi from Pune to Khandala with Morya Cab for a personalized and exclusive travel experience. Enjoy privacy, flexible schedules, and attentive service."
    },
    {
      "name": "Sedan Cabs from Pune to Lonavala",
      "description": "Morya Cab provides a range of sedan cabs from Pune to Lonavala, ideal for small groups or solo travelers seeking a comfortable and economical ride."
    },
    {
      "name": "Safe Travel Cab Pune to Lonavala Khandala",
      "description": "Your safety is our priority. Morya Cab ensures all vehicles are regularly sanitized and drivers follow strict safety protocols to provide a secure and worry-free journey from Pune to Lonavala Khandala."
    }
  ],
  "tableData": [
    ["Pune to Lonavala Khandala Cabs", "-Weekend Trip Cabs Pune to Lonavala"],
    ["Pune to Khandala AC Taxi", "-One-Way Cab from Pune to Lonavala"],
    ["Round Trip Pune Lonavala Cab Booking", "-Online Lonavala Cab Pune"],
    ["Hill Station Tour Cab Pune to Lonavala", "-Family Cab Lonavala Pune"],
    ["Budget Taxi Pune to Khandala", "-Pune to Lonavala SUV Cabs"],
    ["Scenic Drive Cab Pune to Khandala", "-Executive Cab Pune to Lonavala"],
    ["Private Taxi Pune to Khandala", "-Sedan Cabs from Pune to Lonavala"],
    ["Safe Travel Cab Pune to Lonavala Khandala", "-Call Morya Cab at +91 9371304510"]
  ],




whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Planning a quick getaway to the hills? Morya Cab ensures you start your Pune to Lonavala-Khandala trip without delays. Whether it's a weekend escape, a romantic day trip, or a family outing, our punctual service ensures timely pickup and drop-off so you can make the most of your day. No waiting, no last-minute surprises—just smooth travel that runs on your time."
    },
    {
        "WhyChooseheading": "Comfortable and Scenic Ride Experience",
        "WhyChoosedescription": "The journey from Pune to Lonavala and Khandala is filled with scenic views, especially during monsoons. Our well-maintained, air-conditioned cabs are designed to let you enjoy the natural beauty in comfort. Spacious seating, clean interiors, and smooth suspension ensure a relaxing ride while you soak in the lush greenery, waterfalls, and valley views without any discomfort."
    },
    {
        "WhyChooseheading": "Experienced and Courteous Drivers",
        "WhyChoosedescription": "Our drivers are friendly, professional, and well-acquainted with the Lonavala–Khandala route. They can suggest the best viewpoints, tourist spots, and even local snack joints for chikki or vada pav. Courteous and safe in their driving, they ensure a stress-free ride while adding a personal touch to your trip—perfect for both first-time visitors and regular hill station lovers."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Enjoy your trip without worrying about hidden charges. Morya Cab offers competitive, all-inclusive pricing for Pune to Lonavala-Khandala cab services. Our clear billing system ensures you know exactly what you're paying for—fuel, driver allowance, tolls—no unpleasant surprises at the end of your journey. Travel peacefully with a price that suits your budget and trip type."
    },
    {
        "WhyChooseheading": "Flexible Round-Trip and One-Way Options",
        "WhyChoosedescription": "Whether you're planning a same-day return, an overnight stay, or a one-way drop to your resort, Morya Cab offers flexible travel options to fit your plan. Choose from half-day, full-day, or custom-hour packages. We’re here to support spontaneous trips, family stays, or luxury retreats with seamless transportation tailored to your schedule and preferences."
    },
    {
        "WhyChooseheading": "Safe and Secure Journey for All Travelers",
        "WhyChoosedescription": "We prioritize safety for families, couples, and solo travelers alike. All our vehicles are GPS-enabled, sanitized regularly, and equipped with essential safety features like seat belts, airbags, and ABS. Our drivers follow safe driving practices, especially on the ghat sections, so you can enjoy the scenic hill ride with complete peace of mind."
    },
    {
        "WhyChooseheading": "24/7 Availability and Easy Booking",
        "WhyChoosedescription": "Heading out early for sunrise at Lion’s Point or returning late after a day of sightseeing? Morya Cab operates 24/7 to accommodate your travel plans at any hour. Book online or call us for instant confirmation. Our user-friendly platform and responsive support team make booking simple, fast, and stress-free—no matter what time you decide to travel."
    },
    {
        "WhyChooseheading": "Customizable Travel Packages and Sightseeing Stops",
        "WhyChoosedescription": "Want to visit Bhushi Dam, Tiger’s Leap, Karla Caves, or try a detour to Imagica or Rajmachi Fort? We offer personalized cab packages for Lonavala and Khandala that include sightseeing, shopping stops, food breaks, and photo points. You plan the day your way—we’ll build a cab experience that fits your adventure perfectly."
    }
]













    }

const faqData = [
  {
    question: "How can I book a Pune to Lonavala-Khandala cab with Morya Cab?",
    answer: "You can easily book your cab through our website, mobile app, or by contacting our customer care team directly for instant assistance."
  },
  {
    question: "What is the distance and travel time from Pune to Lonavala-Khandala?",
    answer: "The distance is around 65–70 km and takes approximately 1.5 to 2 hours depending on traffic. It’s perfect for a short getaway or day trip."
  },
  {
    question: "What type of vehicles are available for the Lonavala-Khandala trip?",
    answer: "We offer a variety of well-maintained vehicles including hatchbacks, sedans, SUVs, and luxury cars to suit your travel style and group size."
  },
  {
    question: "Can I book a same-day round trip from Pune to Lonavala-Khandala?",
    answer: "Yes, same-day round trip packages are available. You can enjoy a full day in the hills and return comfortably the same evening."
  },
  {
    question: "Do you offer sightseeing cab packages in Lonavala and Khandala?",
    answer: "Yes, we offer special sightseeing packages that cover major tourist spots like Bhushi Dam, Lion’s Point, Karla Caves, and more."
  },
  {
    question: "What are the available payment options?",
    answer: "We accept payments via cash, UPI, debit/credit cards, and online methods through our website and app."
  },
  {
    question: "Are there any hidden charges or tolls?",
    answer: "No hidden charges. All tolls and parking fees are clearly mentioned upfront or included in the package, depending on your booking plan."
  },
  {
    question: "Can I book a cab at the last minute?",
    answer: "Yes, last-minute bookings are possible subject to availability. We recommend booking in advance during weekends and holidays."
  },
  {
    question: "Is this service suitable for couples, families, and groups?",
    answer: "Absolutely! Whether you're traveling solo, as a couple, or with family and friends, we have the right vehicle for a safe and enjoyable trip."
  },
  {
    question: "Why choose Morya Cab for Pune to Lonavala-Khandala travel?",
    answer: "Morya Cab offers reliable, punctual, and affordable cab services with professional drivers and well-maintained vehicles, ensuring a great travel experience."
  }
];

const testimonialData = [
  {
    id: 1,
    name: 'Mr. Akshay Naik',
    role: 'Weekend Traveler',
    review: 'Booked a Morya Cab for a weekend trip to Lonavala. The car was clean, the driver was friendly, and we visited all major attractions. Perfect experience!',
    rating: 5,
    quoteIcon: '/img/icon/testi-quote.svg',
  },
  {
    id: 2,
    name: 'Ms. Sneha Thakur',
    role: 'Family Trip Organizer',
    review: 'We took a family cab to Lonavala and Khandala. The trip was smooth and well-timed. Kids enjoyed a lot. Morya Cab made it completely stress-free!',
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







const puneToLonavalaKhandalaCabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Lonavala Khandala Cabs",
  "image": "https://moryacab.com/assets/images/pune-to-lonavala-khandala-cab.jpg",
  "description": "Book Pune to Lonavala Khandala cabs with Morya Cabs for a comfortable hill station getaway. Choose from AC sedan, SUV, or tempo traveller. Ideal for round trips, sightseeing, and weekend travel with verified drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "8723",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2299",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-lonavala-khandala-cabs"
  }
};





      

    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Lonavala Khandala Cabs | Hill Station Taxi at Best Price | Morya Cabs</title>
  <meta
    name="description"
    content="Book Pune to Lonavala Khandala cabs with Morya Cabs for a comfortable hill station getaway. Choose from AC sedan, SUV, or tempo traveller. Ideal for round trips, sightseeing, and weekend travel with verified drivers."
  />
  <meta
    name="keywords"
    content="Pune to Lonavala Cab, Pune to Khandala Taxi, Hill Station Cabs from Pune, Pune to Lonavala Sightseeing Cab, One-Way Cab Pune to Lonavala, Round Trip Taxi Lonavala Khandala, AC Sedan SUV Lonavala Tour, Tempo Traveller Pune to Lonavala, Morya Cabs Lonavala Trip, Weekend Getaway Cab Pune"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToLonavalaKhandalaCabSchema)}
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
                            <img src='/images/keyword/104.jpg' alt='img' />
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

export default Punetolonavalakhandalacabs;