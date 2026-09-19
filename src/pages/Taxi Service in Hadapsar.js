
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Taxiserviceinhadapsar() {



    const cardData =
    {
        keyword: 'Taxi Service in Hadapsar ',
        heading: 'Morya Cabs: Taxi Service in Hadapsar  ',
        headingDescription: 'Morya Cabs provides reliable and affordable taxi services in Hadapsar, Pune. Whether you are looking for a quick ride to the airport, a day trip around the city, or a comfortable journey to nearby destinations, Morya Cabs is your trusted choice for taxi services in Hadapsar. With professional drivers, clean and well-maintained vehicles, and a commitment to punctuality, we ensure a safe and pleasant ride for every passenger.',

        top: 'Benefits of Choosing Morya Cabs ',

"topPlaces": [
    {
        "title": "Prompt and Punctual Service",
        "description": "We value your time! Our drivers arrive on time, ensuring you never miss a meeting or flight."
    },
    {
        "title": "Wide Range of Vehicles",
        "description": "Choose from a variety of vehicles, including sedans, SUVs, and luxury cars, according to your preferences and group size."
    },
    {
        "title": "Experienced Drivers",
        "description": "Our drivers are knowledgeable, courteous, and focused on providing a safe and comfortable journey."
    },
    {
        "title": "Affordable Pricing",
        "description": "Morya Cabs offers competitive rates with no hidden charges, making it a cost-effective option for your travel needs."
    },
    {
        "title": "24/7 Availability",
        "description": "Our services are available around the clock, so you can rely on us for any last-minute travel needs."
    }
],


"services": [
    {
      "name": "Hadapsar Taxi Service",
      "description": "Morya Cab offers a wide range of reliable and affordable taxi services in Hadapsar. Whether you need a local ride or outstation travel, our cabs are available for all your needs."
    },
    {
      "name": "Taxi Booking Hadapsar",
      "description": "Book your taxi in Hadapsar with Morya Cab. We provide an easy and hassle-free booking process, whether you’re looking for a quick ride around town or a long-distance trip."
    },
    {
      "name": "Taxi in Hadapsar",
      "description": "Looking for a taxi in Hadapsar? Morya Cab provides professional and well-maintained vehicles for your convenience. Enjoy a comfortable ride with reliable drivers."
    },
    {
      "name": "Cab Service Hadapsar",
      "description": "Morya Cab offers top-notch cab services in Hadapsar. From quick city rides to extended outstation trips, our fleet of cars is ready to serve you at any time of the day."
    },
    {
      "name": "Hadapsar Cab Booking",
      "description": "Book your cab in Hadapsar with Morya Cab. Our booking service is available online and over the phone, offering you ease and flexibility in choosing your ride."
    },
    {
      "name": "Reliable Taxi Hadapsar",
      "description": "Trust Morya Cab for reliable taxi services in Hadapsar. We prioritize your safety and comfort, providing punctual and experienced drivers to ensure a smooth journey."
    },
    {
      "name": "Affordable Taxi Hadapsar",
      "description": "Looking for affordable taxi services in Hadapsar? Morya Cab offers competitive pricing without compromising on comfort or service quality. We cater to all budgets."
    },
    {
      "name": "24/7 Taxi Service Hadapsar",
      "description": "Morya Cab offers 24/7 taxi services in Hadapsar. Whether you need a ride early in the morning or late at night, we’re always available to assist with your travel needs."
    },
    {
      "name": "Airport Taxi Hadapsar",
      "description": "Book an airport taxi with Morya Cab for a seamless ride to and from Pune Airport. Our reliable drivers will ensure timely arrivals and comfortable rides."
    },
    {
      "name": "Luxury Taxi Hadapsar",
      "description": "For a luxurious and premium experience, choose Morya Cab’s luxury taxi services in Hadapsar. Travel in comfort with our top-of-the-line vehicles and experienced chauffeurs."
    },
    {
      "name": "Taxi Near Hadapsar",
      "description": "If you’re looking for a taxi near Hadapsar, Morya Cab offers immediate booking options. Our cabs are readily available for both local and outstation travel."
    },
    {
      "name": "Cab Service in Magarpatta City",
      "description": "Morya Cab also offers reliable cab services in Magarpatta City. Whether it’s for work or leisure, our fleet of vehicles is at your service."
    },
    {
      "name": "Taxi Service in Magarpatta City",
      "description": "Book a taxi service in Magarpatta City with Morya Cab. We offer prompt and comfortable services for all your travel needs in and around the area."
    },
    {
      "name": "Outstation Cabs Hadapsar",
      "description": "Morya Cab provides convenient outstation taxi services from Hadapsar to destinations like Shirdi, Solapur, Mumbai, and more. Our outstation cabs are comfortable and reliable."
    },
    {
      "name": "Cheap Cab Service in Hadapsar",
      "description": "For budget-friendly travel, Morya Cab offers cheap cab services in Hadapsar. We guarantee an affordable yet comfortable ride for all your trips."
    },
    {
      "name": "Hadapsar to Mumbai Cabs",
      "description": "Book a cab from Hadapsar to Mumbai with Morya Cab. We offer reliable and affordable taxi services for your Mumbai trip, ensuring a smooth and timely journey."
    },
    {
      "name": "Hadapsar to Shirdi Cab",
      "description": "Need a ride from Hadapsar to Shirdi? Morya Cab offers comfortable and safe taxi services for your pilgrimage trip to Shirdi. Book a ride with us today!"
    },
    {
      "name": "Hadapsar to Solapur Cab Service",
      "description": "For your journey to Solapur from Hadapsar, Morya Cab provides prompt and professional cab services. Travel comfortably with our experienced drivers."
    }
  ],


  tableData: [
    ["Hadapsar Taxi Service", "-Taxi Booking Hadapsar"],
    ["Taxi in Hadapsar", "-Cab Service Hadapsar"],
    ["Hadapsar Cab Booking", "-Reliable Taxi Hadapsar"],
    ["Affordable Taxi Hadapsar", "-24/7 Taxi Service Hadapsar"],
    ["Airport Taxi Hadapsar", "-Luxury Taxi Hadapsar"],
    ["Taxi Near Hadapsar", "-Cab Service in Hadapsar"],
    ["Cab Service in Magar Magarpatta City", "-Taxi Service in Magar Magarpatta City"],
    ["Outstation Cabs Hadapsar", "-Cheap Cab Service in Hadapsar"],
    ["Hadapsar to Mumbai Cabs", "-Hadapsar to Shirdi Cab"],
    ["Hadapsar to Solapur Cab Service", "-Hadapsar to Shirdi Cab"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we prioritize punctuality. Whether you're heading for work, a family gathering, or a leisure trip, we ensure timely pickups and drop-offs from Hadapsar, so you can travel stress-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a fleet of well-maintained, comfortable vehicles for your journey from Hadapsar. Choose from sedans, SUVs, and premium cars, all equipped with air conditioning and ample legroom, ensuring a comfortable ride."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are professional, experienced, and familiar with the best routes in and around Hadapsar. They are courteous, always ensuring that your journey is smooth and safe."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing with no hidden charges. Our clear and upfront pricing ensures that you only pay for what you’re told, providing the best value for your ride in Hadapsar."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "We take your safety seriously. Our vehicles are equipped with modern safety features, such as airbags, seat belts, and GPS tracking, ensuring you have a secure and comfortable ride throughout your trip."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need a taxi for an early morning appointment or a late-night return, Morya Cab is available around the clock. Our customer service team is ready to assist you with your booking anytime."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi in Hadapsar with Morya Cab is easy. You can book online through our website or mobile app, or contact our customer service team for any personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you need a taxi for a quick commute, airport transfer, or sightseeing around Hadapsar, we offer customized travel packages to suit your needs, ensuring a smooth and enjoyable ride."
    }
]

















    }

    const faqData = [
        {
          question: "How can I book a taxi in Hadapsar with Morya Cab?",
          answer: "You can easily book a taxi through our website, mobile app, or by contacting our customer service team for assistance."
        },
        {
          question: "What types of vehicles are available for hire in Hadapsar?",
          answer: "We offer a range of vehicles including sedans, SUVs, and premium cars, all well-maintained for your comfort."
        },
        {
          question: "How do I pay for my taxi ride in Hadapsar?",
          answer: "We offer multiple payment options such as cash, credit/debit cards, and online payment via our app."
        },
        {
          question: "Are the drivers experienced for local travel in Hadapsar?",
          answer: "Yes, all our drivers are highly experienced and knowledgeable about the local routes in and around Hadapsar to ensure a smooth and efficient ride."
        },
        {
          question: "Can I book a round trip with Morya Cab in Hadapsar?",
          answer: "Yes, you can easily book a round trip. Just provide us with your return details, and we’ll take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges, such as for waiting time or detours, will be communicated to you upfront during booking."
        },
        {
          question: "Can I hire a taxi for sightseeing in and around Hadapsar?",
          answer: "Yes, we offer taxi services for sightseeing in and around Hadapsar. Explore nearby attractions with a comfortable and spacious vehicle."
        },
        {
          question: "What is the luggage allowance for a taxi in Hadapsar?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have more luggage or special requirements, kindly inform us during booking."
        },
        {
          question: "Is Morya Cab available for corporate travel in Hadapsar?",
          answer: "Yes, we provide corporate travel services for business-related trips or team outings from Hadapsar."
        },
        {
          question: "Why should I choose Morya Cab for taxi service in Hadapsar?",
          answer: "Morya Cab offers a reliable, comfortable, and affordable taxi service with professional drivers, well-maintained vehicles, and transparent pricing for a seamless travel experience."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Harsh Joshi',
          role: 'Traveler',
          review: "I used Morya Cab for a trip to the airport from Hadapsar, and the service was fantastic. The driver was on time, and the ride was smooth and comfortable. I’ll definitely use them again!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Shweta Agarwal',
          role: 'Traveler',
          review: "Our family had a great experience with Morya Cab for a local trip in Hadapsar. The vehicle was spacious and clean, and the driver was very polite. Highly recommend their service!",
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


    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "CarRental",
        "name": "Taxi Service in Hadapsar",
        "description": "Reliable and affordable taxi services in Hadapsar for local, outstation, and airport transfers. Convenient 24/7 availability with luxury and budget options.",
        "provider": {
          "@type": "Organization",
          "name": "Hadapsar Taxi Services",
          "url": "https://www.hadapsartaxiservices.com",
          "telephone": "+91-8888888888",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 25, Hadapsar Square, Pune",
            "addressLocality": "Hadapsar",
            "addressRegion": "Maharashtra",
            "postalCode": "411028",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 1200,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Hadapsar"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "1200",
            "unitCode": "DAY",
            "description": "Taxi service from Hadapsar for local travel and outstation trips"
          }
        },
        "keywords": "Hadapsar Taxi Service, Taxi Booking Hadapsar, Taxi in Hadapsar, Cab Service Hadapsar, Hadapsar Cab Booking, Reliable Taxi Hadapsar, Affordable Taxi Hadapsar, 24/7 Taxi Service Hadapsar, Airport Taxi Hadapsar, Luxury Taxi Hadapsar, Taxi Near Hadapsar, Cab Service in Hadapsar, Cab Service in Magarpatta City, Cab Service Hadapsar, Taxi Service in Magarpatta City, Outstation Cabs Hadapsar, Cheap Cab Service in Hadapsar, Hadapsar to Mumbai Cabs, Hadapsar to Shirdi Cab, Hadapsar to Solapur Cab Service"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Taxi Service in Hadapsar | Affordable and Reliable Taxi Booking | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Reliable and affordable taxi services in Hadapsar for local, outstation, and airport transfers. Convenient 24/7 availability with luxury and budget options."
  />
  <meta
    name="keywords"
    content="Hadapsar Taxi Service, Taxi Booking Hadapsar, Taxi in Hadapsar, Cab Service Hadapsar, Hadapsar Cab Booking, Reliable Taxi Hadapsar, Affordable Taxi Hadapsar, 24/7 Taxi Service Hadapsar, Airport Taxi Hadapsar, Luxury Taxi Hadapsar, Taxi Near Hadapsar, Cab Service in Hadapsar, Cab Service in Magarpatta City, Cab Service Hadapsar, Taxi Service in Magarpatta City, Outstation Cabs Hadapsar, Cheap Cab Service in Hadapsar, Hadapsar to Mumbai Cabs, Hadapsar to Shirdi Cab, Hadapsar to Solapur Cab Service"
  />
  <meta property="og:title" content="Taxi Service in Hadapsar | Affordable and Reliable Taxi Booking" />
  <meta
    property="og:description"
    content="Reliable and affordable taxi services in Hadapsar for local, outstation, and airport transfers. Convenient 24/7 availability with luxury and budget options."
  />
  <meta property="og:url" content="https://www.hadapsartaxiservices.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.hadapsartaxiservices.com/images/hadapsar-taxi-service.jpg" />
  <script type="application/ld+json">
    {JSON.stringify(jsonLD)}
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
                            <img src='/images/keyword/95.jpg' alt='img' />
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

export default Taxiserviceinhadapsar;