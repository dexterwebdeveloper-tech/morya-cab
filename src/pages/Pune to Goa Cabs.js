
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetogoacabs() {



    const cardData =
    {
        keyword: 'Pune to Goa Cabs',
        heading: 'Morya Cabs: Pune to Goa Cabs',
        headingDescription: 'Planning a trip to Goa? Morya Cabs offers dependable and comfortable Pune to Goa Cabs for a hassle-free and enjoyable travel experience. Whether you are heading for a beach vacation, a weekend escape, or a family outing, our well-maintained vehicles, experienced drivers, and competitive pricing make us the preferred choice for Pune to Goa cab services. Enjoy 24/7 cab availability, easy online booking, and on-time pickups with Morya Cabs. Book your Pune to Goa Cabs today for a safe, scenic, and relaxed journey.',

        top: 'Top Places to Visit in Goa with Morya Cabs',

     "topPlaces": [
    {
        "title": "Baga Beach",
        "description": "One of the most popular beaches in Goa, Baga Beach is famous for its lively atmosphere, water sports, and vibrant nightlife. A perfect destination for beach lovers and party enthusiasts."
    },
    {
        "title": "Calangute Beach",
        "description": "Known as the 'Queen of Beaches,' Calangute Beach is a must-visit for anyone traveling to Goa. With its scenic views and variety of activities, it’s perfect for a day of relaxation or adventure."
    },
    {
        "title": "Anjuna Beach",
        "description": "Anjuna Beach is famous for its laid-back vibe, stunning sunsets, and vibrant flea markets. It’s ideal for those looking to unwind or enjoy Goa’s famous nightlife."
    },
    {
        "title": "Dudhsagar Waterfalls",
        "description": "Located in the Bhagwan Mahavir Wildlife Sanctuary, Dudhsagar Waterfalls is one of the tallest waterfalls in India. Surrounded by lush greenery, this is an excellent spot for nature lovers and adventure enthusiasts."
    },
    {
        "title": "Basilica of Bom Jesus",
        "description": "A UNESCO World Heritage Site, the Basilica of Bom Jesus is one of Goa's most significant religious landmarks. It houses the remains of St. Francis Xavier and is a must-see for those interested in history and architecture."
    },
    {
        "title": "Se Cathedral",
        "description": "Another architectural marvel, Se Cathedral is one of the largest churches in Asia. It is located in Old Goa and is known for its grand design and historical significance."
    },
    {
        "title": "Fort Aguada",
        "description": "Built by the Portuguese in the 17th century, Fort Aguada offers panoramic views of the Arabian Sea. This historic fort is perfect for history buffs and offers an excellent spot for photography."
    },
    {
        "title": "Chapora Fort",
        "description": "Famous for its appearance in Bollywood movies, Chapora Fort offers stunning views of Vagator Beach. It's a great place to hike and enjoy the natural beauty of Goa."
    },
    {
        "title": "Tito's Lane",
        "description": "Located in Baga, Tito's Lane is the hub for nightlife in Goa. It’s lined with popular clubs, bars, and restaurants, making it the go-to place for an evening of fun and entertainment."
    },
    {
        "title": "South Goa Beaches",
        "description": "For a more peaceful and less crowded experience, head to the beaches of South Goa, such as Palolem, Colva, and Agonda. These beaches are perfect for unwinding, swimming, and soaking up the sun."
    }
],



"services": [
  {
    "name": "Pune to Goa Cab Service",
    "description": "Morya Cabs provides a reliable Pune to Goa cab service for a smooth and enjoyable ride. Whether you're planning a beach holiday, business trip, or weekend escape, our comfortable vehicles and experienced drivers ensure a hassle-free journey."
  },
  {
    "name": "Pune to Goa Cab Booking",
    "description": "Booking your Pune to Goa cab is easy with Morya Cabs. Use our online platform or call us to get instant confirmation, choose your preferred vehicle, and enjoy a stress-free travel experience."
  },
  {
    "name": "Pune to Goa One-Way Cab",
    "description": "Opt for our convenient Pune to Goa one-way cab service—ideal for travelers heading onward from Goa without worrying about return journeys. Affordable, direct, and comfortable."
  },
  {
    "name": "Pune to Goa Round Trip Cabs",
    "description": "Plan a round-trip to Goa with Morya Cabs for added convenience. Enjoy the flexibility of return scheduling, transparent pricing, and seamless service throughout your journey."
  },
  {
    "name": "Pune to Goa Luxury Taxi",
    "description": "Travel in style with our Pune to Goa luxury taxi service. Choose from premium vehicles for an elevated and relaxing travel experience."
  },
  {
    "name": "Pune to Goa Rental Cabs",
    "description": "Explore Goa at your own pace with Pune to Goa rental cabs from Morya Cabs. Opt for self-drive or chauffeur-driven vehicles and enjoy a customized travel experience."
  },
  {
    "name": "Affordable Pune to Goa Cabs",
    "description": "Looking for budget-friendly Pune to Goa cabs? Morya Cabs offers cost-effective options with transparent pricing and no hidden charges—perfect for travelers watching their budget."
  },
  {
    "name": "Pune to Goa Innova Rental",
    "description": "Need extra space? Book our Pune to Goa Innova rental service for a spacious ride, ideal for families or groups carrying luggage."
  },
  {
    "name": "Pune to Goa AC Taxi",
    "description": "Beat the heat with our air-conditioned Pune to Goa cabs. Morya Cabs ensures a comfortable and refreshing journey throughout the trip."
  },
  {
    "name": "Pune to Goa Executive Cab",
    "description": "For a premium travel experience from Pune to Goa, choose our executive cab service. Enjoy professional drivers, luxurious interiors, and an elevated journey."
  },
  {
    "name": "Pune to Goa Taxi Fare",
    "description": "Our Pune to Goa taxi fares are competitive and transparent, with no hidden fees. Choose your preferred vehicle type and duration to get a clear upfront estimate."
  },
  {
    "name": "Pune to Goa Cab Package",
    "description": "Morya Cabs offers all-inclusive Pune to Goa cab packages with sightseeing options, accommodation tie-ins, or custom itineraries—ideal for a complete vacation experience."
  },
  {
    "name": "Pune to Goa Contact",
    "description": "Need assistance or have special requests? Contact Morya Cabs at +91 9359401610 for personalized support and booking help for your Pune to Goa cab trip."
  }
],



  tableData: [
    ["Pune to Goa Cabs", "-Pune to Goa Car Rental"],
    ["Pune to Goa Taxi", "-Pune to Goa Taxi Fare"],
    ["Pune to Goa Cab Package", "-Pune to Goa Cab Fare"],
    ["Best Cab Service from Pune to Goa", "-Cab Service from Pune to Goa"],
    ["Car Hire Pune to Goa", "-One Way Cab from Pune to Goa"],
    ["Pune Goa Cab Service", "-Pune to Goa Cab Cost"],
    ["Pune to Goa Cab Charges", "-Pune to Goa Cab Booking"],
    ["Pune to Goa Cab Rental", "-Pune to Goa Cab Service Fare"],
    ["Pune to Goa Cab Service Rates", "-Pune to Goa Innova Rental"],
    ["Pune to Goa One Way Cab", "-Pune to Goa One Way Taxi"],
    ["Pune to Goa Taxi Service", "-Pune to Goa Taxi"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab ensures a timely and dependable pickup for your Pune to Goa journey. Whether you're heading for a relaxing beach vacation or a business trip, we understand the importance of reaching Goa on time and will ensure you get there without any hassle."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a variety of vehicles, including sedans, SUVs, and premium cars, that are well-maintained and designed for comfort. Enjoy a spacious and air-conditioned ride, making your long journey from Pune to Goa as pleasant as possible."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our experienced drivers are skilled in handling long-distance trips and are familiar with the best routes from Pune to Goa. They ensure a safe, smooth, and comfortable journey, with regular breaks if needed, making your trip more enjoyable."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers affordable pricing for your Pune to Goa trip. We provide a clear breakdown of the fare upfront, ensuring complete transparency with no hidden charges."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. Our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking, ensuring a secure and comfortable ride throughout your journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available round the clock, meaning you can book a cab at any time, whether it's an early morning departure or a late-night journey. We're always here to cater to your travel needs."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Goa cab is easy! You can book through our website, mobile app, or by contacting our customer service team, who will assist you with any special requests or inquiries."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're heading to Goa for a relaxing vacation, a family trip, or a business visit, we offer customized travel packages that suit your needs and preferences. Let us know your plans, and we’ll tailor the trip accordingly."
    }
]




        
















    }

    const faqData = [
        {
          question: "How can I book a Pune to Goa cab with Morya Cab?",
          answer: "You can book a cab easily through our website, mobile app, or by contacting our customer service team for personalized assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced in long-distance travel and are familiar with the best routes to Goa, ensuring a smooth and safe trip."
        },
        {
          question: "What types of vehicles are available for Pune to Goa travel?",
          answer: "We offer a range of vehicles, including sedans, SUVs, and premium cars, all designed for comfort during long journeys."
        },
        {
          question: "How do I pay for my Pune to Goa cab rental?",
          answer: "We offer flexible payment options, including cash, credit/debit cards, and online payments via our app for your convenience and security."
        },
        {
          question: "Can I book a round trip from Pune to Goa?",
          answer: "Yes, you can easily book a round trip for your journey. Simply let us know your return details, and we’ll ensure everything is arranged for your smooth return."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges, such as waiting time or detours, will be clearly communicated to you upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Goa?",
          answer: "Yes, we offer sightseeing tours in Goa. Explore popular tourist spots, such as the beaches, forts, and churches, with the help of our experienced drivers."
        },
        {
          question: "What is the luggage allowance for a Pune to Goa taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have more luggage or special requirements, please inform us during the booking process, and we’ll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Goa?",
          answer: "Yes, we provide corporate travel services for business trips between Pune and Goa, ensuring a comfortable and professional ride for your employees or clients."
        },
        {
          question: "Why should I choose Morya Cab for my Pune to Goa trip?",
          answer: "Morya Cab guarantees a reliable, safe, and comfortable journey with professional drivers, well-maintained vehicles, and excellent customer service. We aim to make your trip to Goa stress-free and enjoyable."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Kunal Mehta',
          role: 'Traveler',
          review: "I had a fantastic experience with Morya Cab on my trip to Goa. The driver was punctual and professional, and the vehicle was clean and comfortable. I had a relaxing ride and reached Goa on time. Highly recommended!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Nisha Desai',
          role: 'Traveler',
          review: "Our family had an amazing time in Goa, thanks to Morya Cab. The vehicle was spacious and well-maintained, and the driver was friendly and courteous. We had a safe and smooth journey to Goa, and we’ll definitely use their service again!",
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


   
const puneToGoaCabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Goa Cab",
  "image": "https://moryacab.com/assets/images/pune-to-goa-cab.jpg",
  "description": "Book Pune to Goa cab with Morya Cabs for a safe and comfortable road trip. AC sedan, SUV, and tempo traveller options available for one-way or round trip. Verified drivers and 24/7 customer support.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "15634",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "5999",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-goa-cab"
  }
};








      

    return (
        <div>
            <UsePageTracking/>

<Helmet>
  <title>Pune to Goa Cab | AC Sedan, SUV Taxi at Best Price | Morya Cabs</title>
  <meta
    name="description"
    content="Book Pune to Goa cab with Morya Cabs for a safe and comfortable road trip. AC sedan, SUV, and tempo traveller options available for one-way or round trip. Verified drivers and 24/7 customer support."
  />
  <meta
    name="keywords"
    content="Pune to Goa Cab, Cab from Pune to Goa, One-Way Pune Goa Taxi, Pune to Goa Round Trip Cab, AC Taxi Pune to Goa, SUV Cab Pune Goa, Sedan Taxi Goa from Pune, Pune to Goa Road Trip Cab, Tempo Traveller Pune Goa, Morya Cabs Goa Taxi, Affordable Cab Pune to Goa, Book Pune to Goa Taxi Online"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToGoaCabSchema)}
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
                            <img src='/images/keyword/58.jpg' alt='img' />
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

export default Punetogoacabs;