
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Cabservicesinkharadi() {



    const cardData =
    {
        keyword: 'Cab Service in Kharadi  ',
        heading: 'Morya Cabs: Cab Service in Kharadi  ',
        headingDescription: 'Morya Cabs offers reliable, affordable, and comfortable cab services in Kharadi, Pune. Whether you are heading to the airport, going for a business meeting, or simply exploring the vibrant neighborhood, Morya Cabs ensures a safe and smooth ride with professional drivers and well-maintained vehicles. We provide punctual, hassle-free, and cost-effective transportation to meet all your travel needs in Kharadi.',

        top: 'Top Places to Visit in Kharadi with Morya Cabs:',

"topPlaces": [
    {
        "title": "Eon Free Zone",
        "description": "A prominent IT park in Kharadi, Eon Free Zone is home to various tech companies and corporate offices. It’s a bustling hub for professionals, and a convenient spot for business-related visits."
    },
    {
        "title": "Kharadi Lake",
        "description": "For nature enthusiasts, Kharadi Lake offers a peaceful retreat. The calm surroundings and scenic views make it an ideal spot for a relaxing walk or a quiet evening by the water."
    },
    {
        "title": "Zensar Knowledge Park",
        "description": "Another well-known IT park in Kharadi, Zensar Knowledge Park is a popular business destination. It also features modern architecture and green spaces for a pleasant visit."
    },
    {
        "title": "Wagholi Lake",
        "description": "A serene spot located close to Kharadi, Wagholi Lake is perfect for a peaceful day out. It's a good location for a quiet retreat, with ample greenery and peaceful views."
    },
    {
        "title": "Phoenix Marketcity Pune",
        "description": "Just a short drive from Kharadi, Phoenix Marketcity is one of the largest malls in Pune, offering a wide range of shopping, dining, and entertainment options. It's a must-visit for shopaholics and families."
    },
    {
        "title": "Nagar Road",
        "description": "A busy road connecting Kharadi to other parts of Pune, Nagar Road has numerous dining and shopping spots, making it ideal for those looking to explore local markets, cafes, and restaurants."
    },
    {
        "title": "Aga Khan Palace",
        "description": "A short drive from Kharadi, the Aga Khan Palace is a historical monument and a great place to learn about India's freedom struggle while enjoying beautiful architecture and gardens."
    },
    {
        "title": "Vishrantwadi Lake",
        "description": "Located near Kharadi, Vishrantwadi Lake is a peaceful spot to enjoy nature, perfect for evening walks and relaxing moments away from the hustle and bustle of the city."
    }
],


"services": [
    {
      "name": "Taxi Service in Kharadi",
      "description": "Morya Cab offers reliable and efficient taxi services in Kharadi. Whether you’re going for a local trip or an outstation journey, we guarantee a comfortable and timely ride."
    },
    {
      "name": "Innova Crysta on Rent Kharadi",
      "description": "Looking for a luxurious ride in Kharadi? Rent an Innova Crysta from Morya Cab. Ideal for group trips or special events, we provide a smooth and premium travel experience."
    },
    {
      "name": "Tempo Traveller on Rent in Kharadi",
      "description": "For larger groups, Morya Cab offers Tempo Traveller rentals in Kharadi. Perfect for family vacations or corporate outings, enjoy a comfortable ride with ample space."
    },
    {
      "name": "Mini Bus on Rent in Kharadi",
      "description": "Morya Cab provides mini buses on rent in Kharadi for group travel. Whether for a corporate event or family trip, our buses ensure a comfortable and convenient journey."
    },
    {
      "name": "Mini Bus on Rent for Outstation",
      "description": "Planning an outstation trip? Morya Cab offers mini buses on rent for outstation travel. Travel in comfort with your group while we take care of the details."
    },
    {
      "name": "Corporate Taxi Service in Kharadi Pune",
      "description": "Morya Cab provides professional corporate taxi services in Kharadi. Reliable, punctual, and comfortable, our services are perfect for business travel and corporate events."
    },
    {
      "name": "Kharadi to Mumbai Cab",
      "description": "Need a ride from Kharadi to Mumbai? Morya Cab offers reliable and affordable cab services for this route, ensuring a smooth and timely journey."
    },
    {
      "name": "Kharadi to Aurangabad Cab Service",
      "description": "Morya Cab provides cab services from Kharadi to Aurangabad. Whether for business or leisure, our experienced drivers ensure a safe and comfortable trip."
    },
    {
      "name": "Kharadi to Aliya Nagar Cab Service",
      "description": "Book a cab with Morya Cab for a smooth ride from Kharadi to Aliya Nagar. We offer convenient and reliable services for your journey."
    },
    {
      "name": "Ertiga on Rent in Kharadi",
      "description": "Morya Cab offers Ertiga on rent in Kharadi, providing comfort and ample space for family or group travel. Enjoy a hassle-free journey with our well-maintained vehicles."
    },
    {
      "name": "Swift Dzire on Rent in Kharadi",
      "description": "For a comfortable and stylish ride, rent a Swift Dzire from Morya Cab in Kharadi. Perfect for short trips, outstation journeys, or business travel."
    },
    {
      "name": "Corporate Cab Service in Kharadi",
      "description": "Morya Cab offers specialized corporate cab services in Kharadi. With our fleet of well-maintained vehicles, we ensure a professional and timely transport experience for all your business needs."
    },
    {
      "name": "Monthly Taxi Service in Kharadi",
      "description": "Morya Cab provides flexible monthly taxi services in Kharadi. Whether for daily commuting or business purposes, we offer a reliable and cost-effective solution for regular travel."
    },
    {
      "name": "Book Reliable Cabs in Kharadi - Local & Outstation Taxi",
      "description": "Looking for a reliable taxi in Kharadi? Morya Cab offers both local and outstation taxi services. Book your ride with us for a smooth and timely travel experience."
    },
    {
      "name": "Kharadi to Nashik Cabs Booking",
      "description": "Morya Cab offers reliable and affordable cabs for your journey from Kharadi to Nashik. Whether for a personal trip or business, we ensure a comfortable ride."
    },
    {
      "name": "Kharadi to Mumbai Airport Taxi Booking",
      "description": "Need a taxi from Kharadi to Mumbai Airport? Morya Cab provides prompt and reliable taxi services for this route, ensuring you arrive on time for your flight."
    },
    {
      "name": "Cab Service in Wagholi",
      "description": "Morya Cab provides dependable and efficient cab services in Wagholi. Whether for local travel or long-distance trips, we offer comfort and reliability."
    }
  ],


  tableData: [
    ["Taxi Service in Kharadi", "-Innova Crysta On Rent Kharadi"],
    ["Tempo Traveller on Rent in Kharadi", "-Mini Bus On Rent in Kharadi"],
    ["Mini Bus on Rent for Outstation", "-Corporate Taxi Service in Kharadi Pune"],
    ["Kharadi to Mumbai Cab", "-Kharadi to Aurangabad Cab Service"],
    ["Kharadi to Aliya Nagar Cab Service", "-Ertiga on Rent in Kharadi"],
    ["Swift Dzire on Rent in Kharadi", "-Corporate Cab Service in Kharadi"],
    ["Monthly Taxi Service in Kharadi", "-Book Reliable Cabs in Kharadi - Local & Outstation Taxi"],
    ["Kharadi to Nashik Cabs Booking", "-Kharadi to Mumbai Airport Taxi Booking"],
    ["Cab Service in Wagholi", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand how important it is to be punctual, especially in Kharadi, a bustling area with a mix of residential and commercial activity. Whether you’re heading to the airport, an office, or a local meeting, we guarantee on-time pickups and drop-offs to ensure a smooth, stress-free experience."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet consists of well-maintained, comfortable vehicles designed to make your journey in and around Kharadi relaxing. We offer a variety of options, from sedans to SUVs, all equipped with air conditioning, comfortable seating, and ample legroom."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly skilled and familiar with the routes in and around Kharadi. They prioritize your safety and comfort, ensuring a smooth and professional experience from start to finish."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing for all our taxi services in Kharadi. We ensure complete transparency with no hidden charges, providing you with an upfront fare breakdown so you know exactly what to expect."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is our top priority. All our vehicles are equipped with modern safety features, including airbags, seat belts, and GPS tracking, ensuring your ride is both secure and comfortable."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need a cab early in the morning or late at night, Morya Cab operates 24/7. We’re always ready to cater to your needs, ensuring you never have to worry about availability."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a cab in Kharadi is quick and easy with Morya Cab. You can easily book through our website or mobile app, or contact our customer service team for assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether it’s for a business meeting, an airport transfer, or a sightseeing tour, we offer customized travel packages tailored to your specific needs, making your journey comfortable and hassle-free."
    }
]




















    }

    const faqData = [
        {
          question: "How can I book a cab in Kharadi with Morya Cab?",
          answer: "You can easily book a cab online through our website or mobile app, or reach out to our customer service team for any assistance."
        },
        {
          question: "What types of vehicles are available for hire in Kharadi?",
          answer: "We offer a variety of vehicles including sedans, SUVs, and premium cars, all maintained for your comfort and safety."
        },
        {
          question: "How do I pay for my cab ride from Kharadi?",
          answer: "We offer multiple payment options including cash, credit/debit cards, and online payment via our app, so you can choose the one most convenient for you."
        },
        {
          question: "Are the drivers experienced for local travel in Kharadi?",
          answer: "Yes, all our drivers are experienced and familiar with routes in Kharadi and its surroundings, ensuring a smooth ride."
        },
        {
          question: "Can I book a round trip from Kharadi?",
          answer: "Yes, you can book a round trip with Morya Cab. Simply provide us with your return details, and we’ll arrange everything for you."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges, such as waiting time or detours, will be communicated upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a cab for sightseeing in and around Kharadi?",
          answer: "Yes, we offer sightseeing tours in and around Kharadi. Explore local attractions comfortably with our spacious and well-maintained vehicles."
        },
        {
          question: "What is the luggage allowance for a cab from Kharadi?",
          answer: "Our vehicles can accommodate standard luggage. If you have extra luggage or special needs, please inform us during booking, and we’ll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel from Kharadi?",
          answer: "Yes, we offer reliable corporate travel services for business trips or team outings from Kharadi."
        },
        {
          question: "Why should I choose Morya Cab for cab service in Kharadi?",
          answer: "Morya Cab offers reliable, affordable, and comfortable cab services with professional drivers, well-maintained vehicles, and transparent pricing, ensuring a smooth and stress-free ride."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Abhishek Patil',
          role: 'Traveler',
          review: "I used Morya Cab for an airport transfer from Kharadi, and the service was fantastic. The driver was punctual and polite, and the ride was smooth and comfortable. Highly recommended!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Ms. Priya Joshi',
          role: 'Corporate Traveler',
          review: "Our team used Morya Cab for a corporate trip to a conference, and it was a seamless experience. The vehicle was spacious, clean, and the driver was professional. We’ll definitely book with them again!",
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


    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "CarRental",
        "name": "Cab Service in Kharadi",
        "description": "Affordable and reliable taxi services in Kharadi, Pune, for both local and outstation trips. Offering a wide range of vehicles including Innova Crysta, Tempo Traveller, Mini Bus, and more for comfortable rides.",
        "provider": {
          "@type": "Organization",
          "name": "Kharadi Taxi Services",
          "url": "https://www.kharaditaxiservices.com",
          "telephone": "+91-9999999999",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 15, Kharadi Plaza, Pune",
            "addressLocality": "Kharadi",
            "addressRegion": "Maharashtra",
            "postalCode": "411014",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 1500,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Kharadi"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "1500",
            "unitCode": "DAY",
            "description": "Taxi service from Kharadi for local and outstation travel"
          }
        },
        "keywords": "Taxi Service in Kharadi, Innova Crysta on Rent Kharadi, Tempo Traveller on Rent in Kharadi, Mini Bus on Rent in Kharadi, Mini Bus on Rent for Outstation, Corporate Taxi Service in Kharadi Pune, Kharadi to Mumbai Cab, Kharadi to Aurangabad Cab Service, Kharadi to Aliya Nagar Cab Service, Ertiga on Rent in Kharadi, Swift Dzire on Rent in Kharadi, Corporate Cab Service in Kharadi, Monthly Taxi Service in Kharadi, Book Reliable Cabs in Kharadi - Local & Outstation Taxi, Kharadi to Nashik Cabs Booking, Kharadi to Mumbai Airport Taxi Booking, Cab Service in Wagholi"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Cab Service in Kharadi | Reliable Taxi Booking for Local & Outstation Trips | Call: +91 9359401610</title>
  <meta
    name="description"
    content="Affordable and reliable taxi services in Kharadi, Pune, for both local and outstation trips. Offering a wide range of vehicles including Innova Crysta, Tempo Traveller, Mini Bus, and more for comfortable rides."
  />
  <meta
    name="keywords"
    content="Taxi Service in Kharadi, Innova Crysta on Rent Kharadi, Tempo Traveller on Rent in Kharadi, Mini Bus on Rent in Kharadi, Mini Bus on Rent for Outstation, Corporate Taxi Service in Kharadi Pune, Kharadi to Mumbai Cab, Kharadi to Aurangabad Cab Service, Kharadi to Aliya Nagar Cab Service, Ertiga on Rent in Kharadi, Swift Dzire on Rent in Kharadi, Corporate Cab Service in Kharadi, Monthly Taxi Service in Kharadi, Book Reliable Cabs in Kharadi - Local & Outstation Taxi, Kharadi to Nashik Cabs Booking, Kharadi to Mumbai Airport Taxi Booking, Cab Service in Wagholi"
  />
  <meta property="og:title" content="Cab Service in Kharadi | Reliable Taxi Booking for Local & Outstation Trips" />
  <meta
    property="og:description"
    content="Affordable and reliable taxi services in Kharadi, Pune, for both local and outstation trips. Offering a wide range of vehicles including Innova Crysta, Tempo Traveller, Mini Bus, and more for comfortable rides."
  />
  <meta property="og:url" content="https://www.kharaditaxiservices.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.kharaditaxiservices.com/images/kharadi-taxi-service.jpg" />
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
                            <img src='/images/keyword/93.jpg' alt='img' />
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

export default Cabservicesinkharadi;