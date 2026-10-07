
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Cabservicesinvimannagar() {



    const cardData =
    {
        keyword: 'Cab Service in Viman Nagar ',
        heading: 'Morya Cabs: Cab Service in Viman Nagar ',
        headingDescription: 'Morya Cabs provides reliable, convenient, and affordable cab services in Viman Nagar, Pune. Whether you need a quick ride to the airport, a comfortable transfer to business meetings, or a leisurely trip around the city, our professional drivers and well-maintained vehicles ensure a smooth and safe experience. With our focus on punctuality, excellent customer service, and competitive pricing, Morya Cabs is the ideal choice for all your transportation needs in Viman Nagar.',

        top: 'Top Places to Visit in Viman Nagar with Morya Cabs:',

"topPlaces": [
    {
        "title": "Phoenix Marketcity",
        "description": "A premier shopping mall in Viman Nagar, Phoenix Marketcity is the place for all things shopping, dining, and entertainment. With a wide range of stores, cinemas, and food courts, it’s the perfect destination for an exciting day out."
    },
    {
        "title": "Viman Nagar Lake",
        "description": "A calm and peaceful spot, the Viman Nagar Lake is perfect for a quiet retreat or a leisurely walk. It’s a great place for nature lovers and those looking for a break from the busy city life."
    },
    {
        "title": "Koregaon Park",
        "description": "Just a short drive from Viman Nagar, Koregaon Park is a vibrant and trendy area known for its cafes, boutique shops, and cultural attractions. It’s perfect for a relaxed day of dining, shopping, and exploring."
    },
    {
        "title": "Sundarban Colony",
        "description": "A residential area known for its greenery and serene surroundings, Sundarban Colony in Viman Nagar is a peaceful escape from the hustle of the city."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "description": "For a taste of history and culture, the Raja Dinkar Kelkar Museum is a must-visit. With a vast collection of artifacts, it offers insight into India’s rich heritage."
    },
    {
        "title": "Aga Khan Palace",
        "description": "A short ride from Viman Nagar, the Aga Khan Palace is a historical monument with beautiful architecture and gardens. It’s a significant site for those interested in India’s independence movement."
    },
    {
        "title": "Osho International Meditation Resort",
        "description": "Located near Viman Nagar, this world-renowned meditation resort offers a tranquil and spiritual experience for visitors looking to rejuvenate their mind and body."
    },
    {
        "title": "Vishrantwadi Lake",
        "description": "Another serene spot near Viman Nagar, Vishrantwadi Lake is a peaceful location for a quiet retreat, perfect for evening walks or a family outing."
    }
],


"services": [
    {
      "name": "Taxi Service Viman Nagar",
      "description": "Morya Cab offers reliable and comfortable taxi services in Viman Nagar. Whether you're going on a local trip or need to head outstation, we provide efficient transportation at affordable rates."
    },
    {
      "name": "Taxi Service in Wadgaon Sheri",
      "description": "For dependable taxi services in Wadgaon Sheri, Morya Cab is your go-to provider. Enjoy seamless rides with professional drivers and timely pickups."
    },
    {
      "name": "Cabs Booking in Chandan Nagar",
      "description": "Booking a cab in Chandan Nagar is simple with Morya Cab. Our easy-to-use booking system ensures that you can book a ride quickly from your mobile or desktop."
    },
    {
      "name": "Taxi Booking in Kalyani Nagar",
      "description": "Looking for a taxi in Kalyani Nagar? Morya Cab offers smooth and efficient rides, available 24/7 for both local and outstation travel."
    },
    {
      "name": "Taxi Service in Koregaon Park",
      "description": "Morya Cab provides top-quality taxi service in Koregaon Park. Our fleet includes a variety of vehicles, including sedans, SUVs, and luxury cars, for all your travel needs."
    },
    {
      "name": "Taxi Service in Pune Airport",
      "description": "Need a ride to or from Pune Airport? Morya Cab provides prompt and reliable airport taxi services for a stress-free travel experience."
    },
    {
      "name": "Innova Crysta on Rent in Viman Nagar",
      "description": "For a luxurious ride, rent an Innova Crysta in Viman Nagar with Morya Cab. Perfect for family trips, business outings, or group travel, we ensure a comfortable journey."
    },
    {
      "name": "Ertiga on Rent in Viman Nagar",
      "description": "Morya Cab offers Ertiga rentals in Viman Nagar. Ideal for group travels or family outings, the Ertiga provides ample space and comfort for your journey."
    },
    {
      "name": "Tempo Traveller Hire in Viman Nagar",
      "description": "If you're planning a group trip, Morya Cab offers Tempo Traveller hire in Viman Nagar. With a variety of options to accommodate larger groups, we provide comfort and convenience."
    },
    {
      "name": "Mini Bus on Rent in Viman Nagar",
      "description": "Book a mini bus on rent in Viman Nagar with Morya Cab for your group travel needs. Our buses offer comfortable seating and ample space for a relaxed journey."
    },
    {
      "name": "Sedan Cab Hire for Outstation in Viman Nagar",
      "description": "Looking to travel outstation? Morya Cab provides sedan cab hire services from Viman Nagar, ensuring you enjoy a comfortable and smooth ride to your destination."
    },
    {
      "name": "Innova Cabs on Rent in Viman Nagar",
      "description": "Morya Cab offers Innova cabs for rent in Viman Nagar. Whether it's for an outstation trip or a special occasion, enjoy a luxurious and comfortable ride."
    },
    {
      "name": "Viman Nagar to Shirdi Cabs Services",
      "description": "Planning a trip to Shirdi? Morya Cab provides reliable and affordable cab services from Viman Nagar to Shirdi. Enjoy a smooth and timely journey with our professional drivers."
    },
    {
      "name": "Cab Service in Yerwada",
      "description": "Morya Cab offers convenient and efficient cab services in Yerwada. Whether you're going for work or leisure, our taxis ensure a comfortable ride."
    }
  ],


  tableData: [
    ["Taxi Service Viman Nagar", "-Taxi Service in Wadgaon Sheri"],
    ["Cabs Booking in Chandan Nagar", "-Taxi Booking in Kalyani Nagar"],
    ["Taxi Service in Koregaon Park", "-Taxi Service in Pune Airport"],
    ["Innova Crysta on Rent in Viman Nagar", "-Ertiga on Rent in Viman Nagar"],
    ["Tempo Traveller Hire in Viman Nagar", "-Mini Bus on Rent in Viman Nagar"],
    ["Sedan Cab Hire for Outstation in Viman Nagar", "-Innova Cabs on Rent in Viman Nagar"],
    ["Viman Nagar to Shirdi Cabs Services", "-Cab Service in Yerwada"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand how important punctuality is, especially when traveling from Viman Nagar. Whether you need to catch a flight, attend a meeting, or simply enjoy a trip, we ensure timely pickups and drop-offs, making your journey seamless."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a fleet of well-maintained, comfortable vehicles for your journey from Viman Nagar. From sedans to SUVs, all our vehicles are equipped with air conditioning, ample legroom, and spacious interiors to ensure a smooth and relaxing ride."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly skilled and familiar with the best routes in and around Viman Nagar. They are courteous, professional, and focused on providing you with a safe and comfortable journey."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for cab services in Viman Nagar. You’ll receive a clear breakdown of the fare upfront, ensuring no hidden charges and providing you with the best value for your money."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking, ensuring a secure and enjoyable ride throughout your journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available round the clock. Whether you need a ride early in the morning or a late-night return, we’re always here to meet your travel needs. Our customer service team is available at all hours to assist you."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a cab from Viman Nagar is quick and easy with Morya Cab. You can book online via our website or app, or simply reach out to our customer service team for any personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you need a cab for an airport transfer, a corporate meeting, or a sightseeing tour, we offer customized travel packages to suit your specific needs, making your journey convenient and enjoyable."
    }
]



















    }

    const faqData = [
        {
          question: "How can I book a cab in Viman Nagar with Morya Cab?",
          answer: "Booking is simple! You can book a cab online through our website, mobile app, or contact our customer service team for assistance."
        },
        {
          question: "What types of vehicles are available for hire in Viman Nagar?",
          answer: "We offer a variety of vehicles including sedans, SUVs, and premium cars, all well-maintained and equipped for your comfort."
        },
        {
          question: "How do I pay for my cab ride from Viman Nagar?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payments via our app."
        },
        {
          question: "Are the drivers experienced for local travel in Viman Nagar?",
          answer: "Yes, our drivers are experienced and well-versed with the routes in and around Viman Nagar, ensuring a smooth and efficient ride."
        },
        {
          question: "Can I book a round trip from Viman Nagar?",
          answer: "Yes, round trips can easily be arranged. Just provide us with your return details, and we’ll handle the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges, such as waiting time or detours, will be communicated to you upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a cab for sightseeing in and around Viman Nagar?",
          answer: "Yes, we offer cab services for sightseeing tours in and around Viman Nagar. Explore local attractions comfortably in one of our well-maintained vehicles."
        },
        {
          question: "What is the luggage allowance for a cab from Viman Nagar?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have additional luggage or special requirements, please let us know during booking, and we’ll make arrangements accordingly."
        },
        {
          question: "Is Morya Cab available for corporate travel from Viman Nagar?",
          answer: "Yes, we offer reliable corporate travel services, perfect for business trips or team outings from Viman Nagar."
        },
        {
          question: "Why should I choose Morya Cab for cab service in Viman Nagar?",
          answer: "Morya Cab provides a reliable, affordable, and comfortable cab service with professional drivers, well-maintained vehicles, and transparent pricing, ensuring a smooth and stress-free ride every time."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Arvind Deshmukh',
          role: 'Traveler',
          review: "I used Morya Cab for an airport transfer from Viman Nagar, and I was extremely satisfied with the service. The driver was on time, polite, and the ride was smooth and comfortable. Highly recommend!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Ms. Suman Khanna',
          role: 'Corporate Traveler',
          review: "Our team used Morya Cab for a corporate event, and the experience was fantastic. The vehicle was spacious, clean, and the driver was professional. We will definitely use them again!",
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
        "name": "Cab Service in Viman Nagar",
        "description": "Reliable and affordable taxi services in Viman Nagar for local and outstation trips. Offering a variety of vehicles including Innova Crysta, Ertiga, Tempo Traveller, and Mini Bus for comfortable rides.",
        "provider": {
          "@type": "Organization",
          "name": "Viman Nagar Taxi Services",
          "url": "https://www.vimannagartaxiservices.com",
          "telephone": "+91-8888888888",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 10, Viman Nagar Plaza, Pune",
            "addressLocality": "Viman Nagar",
            "addressRegion": "Maharashtra",
            "postalCode": "411014",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 1200,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Viman Nagar"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "1200",
            "unitCode": "DAY",
            "description": "Taxi service from Viman Nagar for local and outstation travel"
          }
        },
        "keywords": "Taxi Service Viman Nagar, Taxi Service in Wadgaon Sheri, Cabs Booking in Chandan Nagar, Taxi Booking in Kalyani Nagar, Taxi Service in Koregaon Park, Taxi Service in Pune Airport, Innova Crysta on Rent in Viman Nagar, Ertiga on Rent in Viman Nagar, Tempo Traveller Hire in Viman Nagar, Mini Bus on Rent in Viman Nagar, Sedan Cab Hire for Outstation in Viman Nagar, Innova Cabs on Rent in Viman Nagar, Viman Nagar to Shirdi Cabs Services, Cab Service in Yerwada"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Cab Service in Viman Nagar | Reliable Taxi Booking for Local & Outstation Trips | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Reliable and affordable taxi services in Viman Nagar for local and outstation trips. Offering a variety of vehicles including Innova Crysta, Ertiga, Tempo Traveller, and Mini Bus for comfortable rides."
  />
  <meta
    name="keywords"
    content="Taxi Service Viman Nagar, Taxi Service in Wadgaon Sheri, Cabs Booking in Chandan Nagar, Taxi Booking in Kalyani Nagar, Taxi Service in Koregaon Park, Taxi Service in Pune Airport, Innova Crysta on Rent in Viman Nagar, Ertiga on Rent in Viman Nagar, Tempo Traveller Hire in Viman Nagar, Mini Bus on Rent in Viman Nagar, Sedan Cab Hire for Outstation in Viman Nagar, Innova Cabs on Rent in Viman Nagar, Viman Nagar to Shirdi Cabs Services, Cab Service in Yerwada"
  />
  <meta property="og:title" content="Cab Service in Viman Nagar | Reliable Taxi Booking for Local & Outstation Trips" />
  <meta
    property="og:description"
    content="Reliable and affordable taxi services in Viman Nagar for local and outstation trips. Offering a variety of vehicles including Innova Crysta, Ertiga, Tempo Traveller, and Mini Bus for comfortable rides."
  />
  <meta property="og:url" content="https://www.vimannagartaxiservices.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.vimannagartaxiservices.com/images/viman-nagar-taxi-service.jpg" />
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
                            <img src='/images/keyword/92.jpg' alt='img' />
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

export default Cabservicesinvimannagar;