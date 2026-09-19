
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoshirdicab() {



    const cardData =
    {
        keyword: 'Pune to Shirdi Cab  ',
        heading: 'Morya Cabs:  Pune to Shirdi Cab  ',
        headingDescription: 'Looking for a reliable Pune to Shirdi cab service? Morya Cabs offers a safe, affordable, and hassle-free travel experience. Whether you are visiting the Shirdi Sai Baba Temple for a spiritual journey or exploring nearby attractions, our well-maintained fleet and professional drivers ensure a smooth ride. Enjoy door-to-door pickup and drop services with transparent pricing. Book your cab online and travel with ease from Pune to Shirdi.',

        top: 'Top Places to Visit in Shirdi with Morya Cabs',

        topPlaces: [
            {
                "title": "Shirdi Sai Baba Temple",
                "description": "The most famous pilgrimage site in Shirdi, this temple is dedicated to Sai Baba and attracts millions of devotees every year. The temple complex includes Sai Baba’s Samadhi Mandir, Dwarkamai, Chavadi, and Gurusthan. Travel conveniently with Morya Cabs and avoid the stress of long-distance driving."
            },
            {
                "title": "Dwarkamai",
                "description": "Dwarkamai is a sacred mosque where Sai Baba spent a significant part of his life. It houses an ever-burning sacred flame and holds deep spiritual significance. Morya Cabs ensures a comfortable and relaxed journey to this holy place."
            },
            {
                "title": "Chavadi",
                "description": "Chavadi was Sai Baba’s resting place, where he spent his last years. A special palki procession takes place here every Thursday, drawing many devotees. Book a punctual and comfortable ride with Morya Cabs."
            },
            {
                "title": "Gurusthan",
                "description": "Gurusthan is where Sai Baba first appeared to the people of Shirdi. It is believed that praying here can heal diseases and bring good fortune. Morya Cabs makes your visit to this spiritually uplifting site seamless."
            },
            {
                "title": "Khandoba Temple",
                "description": "One of the oldest temples in Shirdi, Khandoba Temple is where Sai Baba was first recognized as a spiritual leader. Devotees believe that praying here can bring divine blessings. Travel stress-free with Morya Cabs."
            },
            {
                "title": "Sai Heritage Village",
                "description": "This theme park offers a visual representation of Sai Baba’s life with beautiful sculptures and displays. It is a great place to learn about Sai Baba’s teachings while enjoying a peaceful environment. Get there easily with Morya Cabs."
            },
            {
                "title": "Sai Teerth Theme Park",
                "description": "India’s first spiritual theme park, Sai Teerth offers 4D shows, animated storytelling, and devotional attractions related to Sai Baba. It’s a must-visit for families and children. Book a cab with Morya Cabs for a convenient trip."
            },
            {
                "title": "Wet N Joy Water Park",
                "description": "A fun-filled destination with water slides, wave pools, and adventure rides, Wet N Joy is perfect for families looking for some recreation after a spiritual visit. Morya Cabs ensures a smooth and timely ride to this amusement park."
            },
            {
                "title": "Lendi Baug",
                "description": "Lendi Baug is a serene garden where Sai Baba used to meditate. The park has a sacred lamp that has been burning since Sai Baba’s time. Travel peacefully with Morya Cabs and enjoy this calm retreat."
            },
            {
                "title": "Dixit Wada Museum",
                "description": "Located within the Sai Baba Temple complex, this museum displays rare photographs, personal belongings, and historical artifacts of Sai Baba. It's a great place to understand his life and teachings. Reach comfortably with Morya Cabs."
            }
        ],



"services": [
    {
        "name": "Pune to Shirdi Cab",
        "description": "Morya Cab offers reliable and affordable cab services from Pune to Shirdi. Whether you're traveling for a spiritual visit or a leisure trip, we provide comfortable and safe rides with professional drivers to ensure you have a smooth journey."
    },
    {
        "name": "Pune to Shirdi Taxi",
        "description": "Book a taxi from Pune to Shirdi with Morya Cab for a hassle-free ride. Our taxis are well-maintained and driven by experienced drivers who know the best routes to take, ensuring a safe and comfortable journey."
    },
    {
        "name": "Pune to Shirdi Cab Package",
        "description": "Morya Cab offers special cab packages for your trip from Pune to Shirdi. Choose from our customizable options for a trip that suits your schedule and preferences, and enjoy an affordable, comfortable ride."
    },
    {
        "name": "Pune to Shirdi Cab Charges",
        "description": "Morya Cab provides transparent and competitive cab charges for your Pune to Shirdi journey. We ensure there are no hidden charges, and we offer fair and upfront pricing, making sure you’re always aware of your journey’s cost."
    },
    {
        "name": "Pune to Shirdi Cab Fare",
        "description": "Our Pune to Shirdi cab fare is affordable and competitive, designed to offer you the best value for your money. Whether it's a one-way trip or a round trip, our pricing structure is clear and budget-friendly."
    },
    {
        "name": "Pune to Shirdi Cab One Way",
        "description": "If you’re looking for a one-way trip from Pune to Shirdi, Morya Cab offers convenient and affordable one-way cab services. Enjoy a direct and comfortable ride to your destination without any hassle."
    },
    {
        "name": "Pune to Shirdi Taxi Fare",
        "description": "Morya Cab offers transparent and affordable taxi fares for your trip from Pune to Shirdi. You can rely on our fair pricing, ensuring that you receive the best value for a comfortable and safe journey."
    },
    {
        "name": "Shirdi to Pune Cab",
        "description": "If you’re traveling from Shirdi back to Pune, Morya Cab provides comfortable and reliable cab services. Our experienced drivers will ensure that you have a smooth and timely ride back to Pune."
    },
    {
        "name": "Pune to Shirdi Cab Service",
        "description": "Morya Cab’s Pune to Shirdi cab service is known for its professionalism, comfort, and punctuality. We ensure that your journey is as relaxing as possible, with well-maintained vehicles and professional drivers."
    },
    {
        "name": "Pune to Shirdi Cab Booking Service",
        "description": "Booking a cab from Pune to Shirdi with Morya Cab is simple and easy. You can book your cab online or by phone, and we’ll ensure your ride is punctual, safe, and comfortable."
    },
    {
        "name": "Pune to Shirdi Taxi Drop",
        "description": "If you need a drop from Pune to Shirdi, Morya Cab offers convenient and comfortable taxi drop services. We’ll ensure that you reach your destination safely and on time."
    },
    {
        "name": "Pune Airport to Shirdi Cab",
        "description": "Morya Cab offers prompt and reliable taxi services from Pune Airport to Shirdi. Whether you’re arriving by air or need a quick transfer to Shirdi, our professional drivers will ensure you have a smooth ride."
    },
    {
        "name": "Pune to Shirdi Car Rental",
        "description": "If you prefer to rent a car for your journey to Shirdi, Morya Cab offers flexible car rental services. We provide various options for you to travel at your own pace and enjoy the journey to Shirdi in comfort."
    },
    {
        "name": "Pune to Shirdi Cab Booking",
        "description": "Booking your Pune to Shirdi cab with Morya Cab is easy and quick. Whether you book online or by phone, we make sure your travel plans are confirmed, and you get a comfortable ride."
    },
    {
        "name": "Pune to Shirdi Cab Price",
        "description": "Morya Cab provides an accurate price estimate for your Pune to Shirdi cab ride. Our prices are competitive, and we ensure that you are aware of the cost upfront, with no hidden charges."
    },
    {
        "name": "Pune Airport to Shirdi Cab Price",
        "description": "If you are traveling from Pune Airport to Shirdi, Morya Cab offers affordable and clear pricing. Our cab fares are competitive and transparent, so you can plan your trip without worrying about unexpected costs."
    },
    {
        "name": "Cab for Shirdi from Pune",
        "description": "If you’re looking for a reliable cab for your trip to Shirdi from Pune, Morya Cab has you covered. We offer comfortable and safe rides with experienced drivers to ensure a hassle-free journey."
    },
    {
        "name": "Pune Airport to Shirdi Taxi Fare",
        "description": "For travelers arriving at Pune Airport, Morya Cab offers affordable taxi services to Shirdi. Our taxi fare is reasonable, and we ensure a comfortable, timely ride to your destination."
    },
    {
        "name": "Pune Airport to Shirdi Taxi Drop",
        "description": "Morya Cab offers prompt taxi drop services from Pune Airport to Shirdi. We ensure that you’re picked up on time and enjoy a smooth ride to your destination with no delays."
    },
    {
        "name": "Pune to Shirdi Cab Cost",
        "description": "Morya Cab provides competitive pricing for your Pune to Shirdi cab ride. Our fares are designed to give you the best value for your money, ensuring a comfortable and economical journey."
    },
    {
        "name": "Contact Information for Pune to Shirdi Cab Services",
        "description": "For bookings or more information, contact Morya Cab at +91 9371304510. Our friendly customer service will assist you in booking your cab and ensuring a smooth and enjoyable journey to Shirdi. Book your Pune to Shirdi cab today!"
    }
],



tableData: [
    ["Pune to Shirdi Cab", "-Pune to Shirdi Taxi"],
    ["Pune to Shirdi Cab Package", "-Pune to Shirdi Cab Charges"],
    ["Pune to Shirdi Cab fare", "-Pune to Shirdi cab one way"],
    ["Pune to Shirdi taxi fare", "-Shirdi to Pune Cab"],
    ["Pune to Shirdi Cab Service", "-Pune to Shirdi cab booking service"],
    ["Pune to Shirdi taxi drop", "-Pune airport to Shirdi cab"],
    ["Pune to Shirdi car rental", "-Pune to Shirdi cab booking"],
    ["Pune to Shirdi cab price", "-Pune airport to Shirdi cab price"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab ensures you travel from Pune to Shirdi with complete peace of mind. Our drivers are punctual and ensure timely pickups and drop-offs so you can make the most of your spiritual or leisure trip without any delays."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a variety of well-maintained vehicles such as sedans, SUVs, and premium cars, all designed to provide a smooth, comfortable ride. With air conditioning, spacious interiors, and comfortable seating, you’ll enjoy a relaxing journey to Shirdi."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced in handling long-distance trips and are familiar with the best routes to Shirdi. They are professional and courteous, ensuring a safe, smooth, and comfortable journey throughout your trip."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "At Morya Cab, we believe in providing affordable services with no hidden charges. Our pricing is transparent, with clear upfront fare breakdowns, so you know exactly what to expect before your trip."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is our top priority. Our vehicles are equipped with modern safety features like airbags, seat belts, and GPS tracking to ensure your safety and comfort during the journey from Pune to Shirdi."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates 24/7 to accommodate your travel schedule, whether it’s an early morning departure or a late-night return from Shirdi. Our customer service team is always ready to assist you with booking and other queries."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a cab for your Pune to Shirdi trip is quick and easy with Morya Cab. You can book your ride via our website, mobile app, or by contacting our customer service team, who are ready to assist with any specific requirements."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you’re visiting Shirdi for religious purposes or a peaceful getaway, we offer customized travel packages to suit your needs. Let us know your preferences, and we’ll personalize your trip for you."
    }
]















    }

    const faqData = [
        {
          question: "How can I book a Pune to Shirdi cab with Morya Cab?",
          answer: "Booking is simple! You can book online via our website or mobile app, or contact our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are experienced in long-distance travel, especially the route from Pune to Shirdi, ensuring a safe and smooth journey."
        },
        {
          question: "What types of vehicles are available for Pune to Shirdi travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all designed to provide comfort and ample space for your journey."
        },
        {
          question: "How do I pay for my Pune to Shirdi cab rental?",
          answer: "We accept a variety of payment methods, including cash, credit/debit cards, and online payments via our app, making payment hassle-free and convenient."
        },
        {
          question: "Can I book a round trip from Pune to Shirdi?",
          answer: "Yes! You can easily book a round trip. Just provide us with your return details, and we’ll take care of the rest, ensuring a seamless journey."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges, such as for waiting time or detours, will be clearly communicated to you upfront, so there are no surprises when it comes to pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Shirdi?",
          answer: "Yes, we offer sightseeing tours in Shirdi! Explore the famous Sai Baba Temple and other nearby attractions with the help of our experienced drivers."
        },
        {
          question: "What is the luggage allowance for a Pune to Shirdi taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have more luggage or specific requirements, please let us know during booking, and we’ll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Shirdi?",
          answer: "Yes, we provide corporate travel services for business trips or group travel between Pune and Shirdi."
        },
        {
          question: "Why should I choose Morya Cab for my Pune to Shirdi trip?",
          answer: "Morya Cab offers a reliable, safe, and comfortable journey with professional drivers, well-maintained vehicles, and excellent customer service, making it the ideal choice for your trip from Pune to Shirdi."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Ashok Kumar',
          role: 'Traveler',
          review: 'I booked a cab with Morya Cab for my trip to Shirdi. The vehicle was clean, and the driver was very professional and friendly. I had a comfortable ride, and the trip was smooth. I highly recommend Morya Cab!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Poonam Patil',
          role: 'Family Traveler',
          review: 'Our family traveled to Shirdi using Morya Cab. The vehicle was spacious, and the driver was very courteous. The journey was smooth, and we felt very safe throughout the trip. We’ll definitely book with them again!',
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


   
   
const puneToShirdiCabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Shirdi Cabs",
  "image": "https://moryacab.com/assets/images/pune-to-shirdi-cab.jpg",
  "description": "Book Pune to Shirdi cabs with Morya Cabs. AC sedan, SUV & tempo traveller options for one-way or round trip. Ideal for Sai Baba temple darshan. Safe, affordable and verified drivers with 24/7 customer support.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "14230",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "3299",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-shirdi-cabs"
  }
};










    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Shirdi Cabs | AC Sedan, SUV Taxi for Sai Baba Darshan | Morya Cabs</title>
  <meta
    name="description"
    content="Book Pune to Shirdi cabs with Morya Cabs. AC sedan, SUV & tempo traveller options for one-way or round trip. Ideal for Sai Baba temple darshan. Safe, affordable and verified drivers with 24/7 customer support."
  />
  <meta
    name="keywords"
    content="Pune to Shirdi Cabs, Cab from Pune to Shirdi, Sai Baba Darshan Taxi, One-Way Taxi Pune Shirdi, Round Trip Cab Pune to Shirdi, AC Cab Pune Shirdi, SUV Cab to Shirdi, Sedan Taxi Pune Shirdi, Tempo Traveller Pune Shirdi, Morya Cabs Shirdi Package, Shirdi Temple Tour Cab, Affordable Pune to Shirdi Taxi"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToShirdiCabSchema)}
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
                            <img src='/images/keyword/47.jpg' alt='img' />
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

export default Punetoshirdicab;