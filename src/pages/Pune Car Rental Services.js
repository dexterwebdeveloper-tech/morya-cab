
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punecarrental() {



    const cardData =
    {
        keyword: 'Pune Car Rental  ',
        heading: 'Morya Cabs:  Pune Car Rental  ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable car rental services in Pune. Whether you are looking for a self-drive car rental, chauffeur-driven services, or a car for a short trip or long-distance travel, our well-maintained fleet and professional drivers ensure a smooth and hassle-free journey. We provide a wide range of vehicles, including compact cars, sedans, SUVs, and luxury cars, to suit your travel needs.',

        top: 'Top Places to Visit in Pune with Morya Cabs',

     "topPlaces": [
    {
        "title": "Shaniwar Wada",
        "description": "Shaniwar Wada, a historic fortification in Pune, is a symbol of the Peshwa dynasty and offers a glimpse into Pune's royal past. The fort’s architecture and the evening light-and-sound show make it a must-visit."
    },
    {
        "title": "Aga Khan Palace",
        "description": "The Aga Khan Palace is an iconic landmark known for its historical importance. It played a significant role in India’s independence struggle, and today, it is a peaceful place to explore the rich heritage of India."
    },
    {
        "title": "Sinhagad Fort",
        "description": "A popular trekking destination, Sinhagad Fort offers breathtaking views of the surrounding hills and valleys. It is an ideal spot for history enthusiasts and adventure lovers alike."
    },
    {
        "title": "Osho Ashram",
        "description": "The Osho Ashram in Pune is a peaceful sanctuary where you can experience meditation, wellness, and spiritual growth. It’s a tranquil space ideal for those seeking inner peace."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "description": "A rock-cut temple dating back to the 8th century, Pataleshwar Cave Temple is a unique blend of ancient architecture and spiritual calm. It's one of Pune’s most iconic sites."
    },
    {
        "title": "Fergusson College Road",
        "description": "For those who love to shop or explore vibrant food streets, Fergusson College Road offers a variety of stores, cafes, and street food options that reflect Pune's young, cosmopolitan vibe."
    },
    {
        "title": "Khadakwasla Dam",
        "description": "Located just outside Pune, Khadakwasla Dam is a great spot for a peaceful picnic. It is an excellent location to relax and enjoy the scenic beauty of the area."
    },
    {
        "title": "Pune-Okayama Friendship Garden",
        "description": "Inspired by Japanese gardens, this peaceful garden is a beautiful escape from the city bustle. It’s an ideal spot for a stroll or to enjoy nature’s tranquility."
    }
],



"services": [
    {
        "name": "Pune Car Rental",
        "description": "Morya Cab offers reliable and convenient car rental services in Pune. Whether you're looking for a self-drive vehicle or a chauffeur-driven ride, we have a range of options to meet your needs. Travel in comfort and style with our top-quality rental cars."
    },
    {
        "name": "Pune Self-Drive Car Rental",
        "description": "Explore Pune and beyond with Morya Cab's self-drive car rental service. Choose from a variety of vehicles and enjoy the freedom to travel at your own pace. Our cars are well-maintained, giving you a comfortable and hassle-free experience."
    },
    {
        "name": "Pune Chauffeur-Driven Car Rental",
        "description": "For a more relaxed travel experience, Morya Cab provides chauffeur-driven car rental services in Pune. Our experienced and professional drivers ensure a smooth, safe, and enjoyable ride for all your personal or business trips."
    },
    {
        "name": "Pune Car Rental for Outstation",
        "description": "Planning a trip outside Pune? Morya Cab offers car rentals for outstation journeys. Whether you're traveling for business, leisure, or pilgrimage, we provide the best vehicles and drivers for a comfortable and reliable outstation ride."
    },
    {
        "name": "Pune Private Car Hire",
        "description": "Morya Cab offers private car hire services in Pune for a personalized travel experience. Whether for business or leisure, our private cars ensure a relaxed and comfortable journey with full flexibility."
    },
    {
        "name": "Pune Taxi Service",
        "description": "Morya Cab provides dependable taxi services for your transportation needs in Pune. Our fleet includes a variety of vehicles to suit different travel requirements, ensuring that you have the best ride possible."
    },
    {
        "name": "Pune Car Hire",
        "description": "With Morya Cab’s car hire service, you can rent a vehicle for any occasion, from a business trip to a weekend getaway. Choose from a wide selection of cars, and we’ll make sure your ride is comfortable and convenient."
    },
    {
        "name": "Pune Rental Cars",
        "description": "Whether you need a rental car for a day or a week, Morya Cab offers a wide range of rental cars in Pune. Choose the vehicle that suits your needs and enjoy a smooth and efficient travel experience."
    },
    {
        "name": "Pune Airport Car Rental",
        "description": "Need a car from Pune Airport? Morya Cab offers convenient and reliable airport car rental services. Book your ride in advance, and we’ll have a car waiting for you when you arrive, making your travel seamless and stress-free."
    },
    {
        "name": "Pune Outstation Car Rental",
        "description": "For outstation trips from Pune, Morya Cab offers comfortable and affordable car rental services. Whether you're traveling to Nashik, Lonavala, or anywhere else, our fleet of cars ensures a smooth journey with a professional driver at your service."
    },
    {
        "name": "Pune Car Rental Booking",
        "description": "Booking a car rental in Pune with Morya Cab is easy and hassle-free. You can book your car online or via phone, and we ensure that your vehicle is ready on time for a smooth and convenient travel experience."
    },
    {
        "name": "Pune Luxury Car Rental",
        "description": "For those who prefer a premium experience, Morya Cab offers luxury car rental services in Pune. Choose from a selection of high-end vehicles for a comfortable and stylish journey, whether for business or pleasure."
    },
    {
        "name": "Pune Rental Cabs",
        "description": "Morya Cab offers rental cabs in Pune for all your transportation needs. Whether you're planning a short trip within the city or a long-distance journey, we have the right cab for you, with professional drivers to ensure your safety and comfort."
    },
    {
        "name": "Pune Car Hire for Business",
        "description": "For business travel in Pune, Morya Cab offers professional car hire services. Whether you need a reliable ride to meetings or transport for corporate events, we provide comfortable and punctual vehicles to meet your business requirements."
    },
    {
        "name": "Pune One-Way Car Rental",
        "description": "Morya Cab provides one-way car rental services for those who need to travel from Pune to another destination without a return trip. With flexible options, you can travel conveniently and affordably without worrying about a return journey."
    },
    {
        "name": "Pune Car Rental Contact Information",
        "description": "Contact Morya Cab at +91 9371304510 for reliable and efficient car rental services in Pune. Whether you need a self-drive car, chauffeur-driven ride, or a rental for an outstation trip, we ensure a smooth and enjoyable experience. Book your car rental today!"
    }
],




tableData: [
    ["Pune Car Rental", "-Pune Self-Drive Car Rental"],
    ["Pune Chauffeur-Driven Car Rental", "-Pune Car Rental for Outstation"],
    ["Pune Private Car Hire", "-Pune Taxi Service"],
    ["Pune Car Hire", "-Pune Rental Cars"],
    ["Pune Outstation Car Rental", "-Pune Car Rental Booking"],
    ["Pune Luxury Car Rental", "-Pune Rental Cabs"],
    ["Pune Car Hire for Business", "-Pune One-Way Car Rental"],
],

whychoose: [
    {
        "WhyChooseheading": "Wide Range of Vehicles",
        "WhyChoosedescription": "Morya Cab offers a wide variety of vehicles to suit all your needs, whether it's a luxury car for a special occasion, a sedan for a business trip, or an SUV for a family outing. Our fleet is well-maintained and ready to take you wherever you need to go."
    },
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "We understand the importance of punctuality. Whether you need a car rental for a quick trip around Pune or an outstation journey, our drivers ensure timely service, so you can rely on us for your travel plans."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We believe in offering affordable pricing with no hidden charges. Whether you are looking for an hourly rental, daily rental, or long-term car hire, our pricing is transparent, and you’ll know the fare upfront."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly trained, experienced, and professional, ensuring a smooth and safe ride. They are familiar with local routes in Pune and surrounding areas, guaranteeing a hassle-free journey wherever you travel."
    },
    {
        "WhyChooseheading": "Customized Rental Packages",
        "WhyChoosedescription": "Whether it's for a short trip within Pune or an extended outstation journey, we offer customized rental packages to meet your specific needs. Let us know your requirements, and we will tailor the package accordingly."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Need a car rental at any time? Morya Cab is available 24/7. You can book your car rental for any time of the day or night, and our customer service team will be happy to assist with your booking."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a car rental with Morya Cab is simple and easy. You can book online via our website or mobile app, or simply contact our customer service team for personalized assistance. We aim to make the process as smooth and quick as possible."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Travel",
        "WhyChoosedescription": "We prioritize your safety and comfort. Our vehicles are regularly serviced and equipped with safety features like airbags, seat belts, and GPS. Our drivers follow strict safety protocols to ensure a worry-free journey."
    }
]








    }


    const faqData = [
        {
          question: "How can I book a car rental with Morya Cab in Pune?",
          answer: "Booking a car rental is easy! You can book online via our website or mobile app, or you can contact our customer service team for assistance."
        },
        {
          question: "What types of vehicles are available for rental in Pune?",
          answer: "We offer a wide range of vehicles, including sedans, SUVs, luxury cars, and more. All vehicles are well-maintained and suitable for different travel needs."
        },
        {
          question: "Are the drivers experienced?",
          answer: "Yes, all of our drivers are highly experienced and trained to ensure a safe, smooth, and professional journey. They are familiar with Pune’s routes and can assist with local guidance if needed."
        },
        {
          question: "How do I pay for my Pune car rental?",
          answer: "We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I hire a car for outstation trips from Pune?",
          answer: "Yes, Morya Cab offers car rental services for outstation trips from Pune. You can book a car for a one-way trip or a round trip to destinations like Mumbai, Lonavala, Mahabaleshwar, Nashik, and beyond."
        },
        {
          question: "Is there a minimum rental duration?",
          answer: "Our rental services are flexible. You can rent a car for an hour, a day, or a week, depending on your needs. Contact us for more details on rental duration."
        },
        {
          question: "Are there any extra charges for fuel or tolls?",
          answer: "Any additional charges, such as fuel and tolls, will be communicated to you before the trip begins. We strive for complete transparency in our pricing."
        },
        {
          question: "Can I hire a car with a driver for sightseeing in Pune?",
          answer: "Yes, we offer car rentals with drivers for sightseeing in Pune. Visit popular destinations like Shaniwar Wada, Aga Khan Palace, and Sinhagad Fort, with a professional driver to guide you."
        },
        {
          question: "Is there an age limit for renting a car?",
          answer: "To rent a car from Morya Cab, the renter must be at least 21 years old and hold a valid driver’s license if self-driving. For chauffeur-driven rentals, you can hire regardless of your age."
        },
        {
          question: "Why should I choose Morya Cab for car rental in Pune?",
          answer: "Morya Cab offers reliable, comfortable, and affordable car rental services with well-maintained vehicles, experienced drivers, and flexible rental packages. We ensure a smooth and safe journey every time."
        }
      ];
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Anil Patil',
          role: 'Business Traveller',
          review: 'I rented a car from Morya Cab for a business trip in Pune. The car was spotless, and the driver was very professional. It made my trip smooth and enjoyable. Highly recommend!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Rina Kapoor',
          role: 'Sightseer',
          review: 'We hired a car with a driver for a sightseeing trip around Pune. The driver was knowledgeable and friendly, and the car was very comfortable. It was a great experience, and we will definitely use Morya Cab again.',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
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
        "name": "Morya Car Rentals",
        "description": "Book reliable car rentals in Pune with Morya Car Rentals. Choose from self-drive, chauffeur-driven, outstation, luxury cars, and more. Affordable prices and high-quality service.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9371304510",
        "url": "https://moryacab.com/",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/pune-car-rental.jpg",
          "https://moryacab.com/img/pune-car-hire.jpg"
        ],
        "priceRange": "₹1000 - ₹5000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-car-rental",
          "priceCurrency": "INR",
          "price": 1500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "reviewCount": 200
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Vikas Mehta"
            },
            "datePublished": "2024-10-15",
            "reviewBody": "Very professional and excellent service! The car was in great condition, and the driver was punctual and friendly. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Desai"
            },
            "datePublished": "2024-11-22",
            "reviewBody": "Affordable rates and smooth booking process. Enjoyed a comfortable journey with Morya Car Rentals. Will use again for my future trips!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune Car Rental Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5196,
            "longitude": 73.8557
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-car-rental"
        },
        "keywords": "Pune car rental, Pune self-drive car rental, Pune chauffeur-driven car hire, Pune outstation car rental, Pune rental cars, Pune taxi service, Pune airport car rental, Pune luxury car rental, Pune one-way car hire"
      };


    return (
        <div>
            <UsePageTracking/>
<Helmet>
        <title>Pune Car Rental Services | Self-Drive, Chauffeur-Driven, Luxury Cars | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Morya Car Rentals offers affordable car rental services in Pune. Self-drive, chauffeur-driven, outstation, and luxury cars available. Book online today!"
        />
        <meta name="keywords" content="Pune car rental, self-drive car rental, chauffeur-driven car rental, Pune outstation car rental, luxury car rental, Pune airport car rental" />
        <meta property="og:title" content="Pune Car Rental Services | Morya Car Rentals" />
        <meta property="og:description" content="Book affordable self-drive and chauffeur-driven car rentals in Pune. Luxury cars, outstation, and airport rentals available." />
        <meta property="og:url" content="https://moryacab.com/pune-car-rental" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-car-rental.jpg" />
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
                            <img src='/images/keyword/8.jpg' alt='img' />
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
                                    border: '3px dotted #1CA8CB',
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

export default Punecarrental;