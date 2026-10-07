
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Outstationtaxiservice() {



    const cardData =
    {
        keyword: 'Outstation Taxi Service in Pune  ',
        heading: 'Morya Cabs: Outstation Taxi Service in Pune ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable outstation taxi services from Pune to various destinations across Maharashtra and beyond. Whether you are traveling for business, leisure, or any other purpose, our professional drivers and well-maintained vehicles guarantee a safe and enjoyable journey. We understand the needs of outstation travelers, and our services are designed to provide a smooth, convenient, and cost-effective travel experience.',

        top: 'Popular Outstation Destinations from Pune:',

"topPlaces": [
    {
        "title": "Mumbai (Approx. 150 km)",
        "description": "A major business hub and the entertainment capital of India, Mumbai offers a dynamic mix of business, culture, shopping, and sightseeing. Popular places to visit include the Gateway of India, Marine Drive, Colaba, and Juhu Beach."
    },
    {
        "title": "Lonavala (Approx. 65 km)",
        "description": "Known for its scenic landscapes, hill stations, and pleasant weather, Lonavala is a perfect weekend getaway. You can visit attractions like Bushi Dam, Karla Caves, and Tiger’s Leap."
    },
    {
        "title": "Mahabaleshwar (Approx. 120 km)",
        "description": "A popular hill station, Mahabaleshwar is famous for its breathtaking viewpoints, lush forests, and strawberry farms. Must-see places include Arthur’s Seat, Venna Lake, and the Pratapgad Fort."
    },
    {
        "title": "Shirdi (Approx. 185 km)",
        "description": "A famous pilgrimage destination, Shirdi is home to the Sai Baba Temple, attracting millions of devotees every year. The spiritual atmosphere and surrounding area make it an excellent place for a peaceful retreat."
    },
    {
        "title": "Nashik (Approx. 210 km)",
        "description": "Known as the 'Wine Capital of India,' Nashik is a hub for wine tourism and ancient temples. Popular spots include the Trimbakeshwar Temple, Saptashrungi Temple, and vineyards like Sula Vineyards."
    },
    {
        "title": "Goa (Approx. 450 km)",
        "description": "A popular tourist destination, Goa offers beautiful beaches, vibrant nightlife, and rich cultural heritage. Whether you want to relax by the beach, explore historic churches, or enjoy water sports, Goa has something for everyone."
    },
    {
        "title": "Aurangabad (Approx. 230 km)",
        "description": "Home to UNESCO World Heritage sites like the Ajanta and Ellora Caves, Aurangabad is a historical and cultural hub. Visit the Daulatabad Fort, Bibi Ka Maqbara, and the Ellora Caves for a deep dive into the region’s history."
    },
    {
        "title": "Kolhapur (Approx. 230 km)",
        "description": "Famous for its historical and religious significance, Kolhapur is home to the Mahalaxmi Temple, along with scenic spots like Panhala Fort and Rankala Lake. It is also famous for its Kolhapuri chappals."
    },
    {
        "title": "Alibaug (Approx. 140 km)",
        "description": "A coastal town, Alibaug offers beautiful beaches, forts, and a peaceful retreat from the city. Popular places include Alibaug Beach, Kolaba Fort, and Mandwa Beach."
    },
    {
        "title": "Pune to Surat (Approx. 400 km)",
        "description": "Surat is known for its textile industry and diamonds. Visit places like Dumas Beach, Sarthana Nature Park, and Surat Fort for a mix of sightseeing and culture."
    }
],


"services": [
    {
      "name": "Outstation Taxi Service Pune",
      "description": "Morya Cab offers reliable and efficient outstation taxi services from Pune. Whether you're traveling for business or leisure, we ensure a smooth and comfortable journey to your destination."
    },
    {
      "name": "Outstation Cabs Pune",
      "description": "For dependable outstation cabs in Pune, Morya Cab provides a variety of vehicles to suit your needs. Book your ride for a comfortable and timely journey to any outstation destination."
    },
    {
      "name": "One Way Cab Pune",
      "description": "Looking for a one-way cab from Pune to your desired destination? Morya Cab offers affordable one-way taxi services, ensuring convenience and comfort at competitive prices."
    },
    {
      "name": "Best Outstation Cab Service in Pune",
      "description": "Morya Cab provides the best outstation cab services in Pune, offering timely pickups, well-maintained vehicles, and professional drivers for your travel needs."
    },
    {
      "name": "Outstation Cab Service in Pune",
      "description": "Morya Cab specializes in outstation cab services from Pune, ensuring a smooth ride with comfortable vehicles and experienced drivers for your long-distance trips."
    },
    {
      "name": "Outstation Car Rental Pune",
      "description": "Book an outstation car rental with Morya Cab for your travel needs. Our fleet includes a variety of vehicles, from sedans to SUVs, providing the perfect ride for your outstation journey."
    },
    {
      "name": "Taxi in Pune for Outstation",
      "description": "Morya Cab offers reliable taxi services from Pune to outstation destinations. With our well-maintained cars and experienced drivers, we ensure a stress-free journey."
    },
    {
      "name": "Cab Booking in Pune for Outstation",
      "description": "Booking a cab for an outstation trip from Pune is easy with Morya Cab. Choose from a range of vehicles and enjoy the comfort and convenience of a professionally-driven ride."
    },
    {
      "name": "Book Outstation Cabs Pune",
      "description": "Morya Cab makes booking outstation cabs from Pune simple and convenient. Whether it’s a business trip or a vacation, we offer the best options for your long-distance travel."
    },
    {
      "name": "Taxi Service in Pune for Outstation",
      "description": "Morya Cab provides reliable taxi services in Pune for outstation trips. Our experienced drivers ensure your journey is comfortable, safe, and punctual."
    },
    {
      "name": "Intercity Cab Service in Pune",
      "description": "Morya Cab offers intercity cab services in Pune for your travel between cities. We guarantee timely pickups and a hassle-free experience throughout your journey."
    },
    {
      "name": "Outstation Taxi Service in Pune",
      "description": "For all your outstation travel needs, Morya Cab provides comfortable and reliable taxi services in Pune. Enjoy a smooth ride with our experienced drivers and well-maintained vehicles."
    },
    {
      "name": "Outstation Taxi in Pune",
      "description": "Morya Cab offers dependable outstation taxi services in Pune. We ensure that your journey is smooth, affordable, and on time, with a wide range of vehicles available."
    },
    {
      "name": "Pune Airport to Kolhapur Cab",
      "description": "Morya Cab provides reliable and affordable taxi services from Pune Airport to Kolhapur. Our drivers ensure a comfortable and timely ride to your destination."
    },
    {
      "name": "Pune to Outstation Taxi",
      "description": "Morya Cab offers hassle-free taxi services from Pune to various outstation destinations. Book your ride with us for a smooth and comfortable journey."
    },
    {
      "name": "Innova Crysta on Rent in Pune",
      "description": "For a luxury ride, rent an Innova Crysta in Pune. Perfect for outstation trips, this vehicle offers spacious seating and top-notch comfort for your long-distance travel."
    },
    {
      "name": "Tempo Traveller on Rent for Outstation",
      "description": "Morya Cab offers Tempo Traveller rentals for outstation trips from Pune. Ideal for group travel, our spacious and comfortable vehicles ensure a pleasant journey."
    },
    {
      "name": "Ertiga on Rent in Pune for Outstation",
      "description": "Book an Ertiga on rent in Pune for your outstation trip. With ample space and comfort, it’s a great choice for family or group travel to outstation destinations."
    },
    {
      "name": "Pune to Outstation Sedan Cab Service",
      "description": "Morya Cab provides affordable sedan cab services for your outstation trips from Pune. Enjoy a comfortable and cost-effective journey to your destination."
    },
    {
      "name": "Pune to Outstation Swift Cab Service",
      "description": "For a quick and affordable outstation journey, Morya Cab offers Swift cabs for travel from Pune to various destinations. Book your ride today for a smooth and economical trip."
    }
  ],


  tableData: [
    ["Outstation Taxi Service Pune", "-Outstation Cabs Pune"],
    ["One Way Cab Pune", "-Best Outstation Cab Service in Pune"],
    ["Outstation Cab Service in Pune", "-Outstation Car Rental Pune"],
    ["Taxi in Pune for Outstation", "-Cab Booking in Pune for Outstation"],
    ["Book Outstation Cabs Pune", "-Taxi Service in Pune for Outstation"],
    ["Intercity Cab Service in Pune", "-Outstation Taxi Service in Pune"],
    ["Outstation Taxi in Pune", "-Pune Airport to Kolhapur Cab"],
    ["Pune to Outstation Taxi", "-Innova Crysta on Rent in Pune"],
    ["Tempo Traveller on Rent for Outstation", "-Ertiga on Rent in Pune for Outstation"],
    ["Pune to Outstation Sedan Cab Service", "-Pune to Outstation Swift Cab Service"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "When you're traveling for an outstation trip, punctuality is key. Morya Cab ensures timely pickups from Pune to your outstation destination. Whether it’s a business trip, a family vacation, or a quick getaway, our drivers ensure you arrive on time without any hassles."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "For your outstation journeys, we offer a variety of well-maintained vehicles including sedans, SUVs, and premium cars. All our vehicles are designed for comfort with spacious seating, air-conditioning, and ample legroom, making long-distance travel enjoyable."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are not only skilled in handling long-distance routes but are also familiar with the best and safest routes to your outstation destination. They prioritize your safety and comfort, ensuring a smooth journey throughout."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing with no hidden charges for outstation trips. We provide clear, upfront pricing with a detailed breakdown of the costs, ensuring that you get the best value for your trip."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All our vehicles are equipped with modern safety features, including airbags, seat belts, and GPS tracking, so you can enjoy your outstation trip with peace of mind."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need an outstation taxi early in the morning or late at night, Morya Cab is available 24/7. Our customer service team is always ready to assist you with your booking at any time of the day or night."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking an outstation taxi with Morya Cab is quick and easy. You can book via our website, mobile app, or contact our customer service team to assist with your reservation, ensuring a seamless process from start to finish."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Every trip is different, so we offer customized travel packages for your outstation journey. Whether it’s a solo trip, a family vacation, or a business outing, we tailor the experience to suit your needs and preferences."
    }
]





















    }

    const faqData = [
        {
          question: "How can I book an outstation taxi from Pune?",
          answer: "You can easily book your outstation taxi through our website, mobile app, or by contacting our customer service team for personalized assistance."
        },
        {
          question: "What types of vehicles are available for outstation travel?",
          answer: "We offer a wide range of vehicles for outstation travel, including sedans, SUVs, and premium cars, all well-maintained and designed for long-distance comfort."
        },
        {
          question: "How do I pay for my outstation taxi ride?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payments via our app, ensuring flexibility and convenience."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are highly experienced and skilled in long-distance travel. They are familiar with the best routes and are focused on providing a safe and comfortable journey."
        },
        {
          question: "Can I book a round trip for outstation travel?",
          answer: "Yes, round trips can be arranged. Simply provide us with your return journey details, and we will take care of the rest for a seamless travel experience."
        },
        {
          question: "Are there any extra charges for waiting or detours during the outstation trip?",
          answer: "Any extra charges, such as for waiting time or detours, will be communicated upfront before your trip, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire an outstation taxi for sightseeing during my trip?",
          answer: "Yes, we offer sightseeing options during your outstation trips. You can explore local attractions at your destination with one of our professional drivers guiding you along the way."
        },
        {
          question: "What is the luggage allowance for outstation trips?",
          answer: "Our vehicles have ample space for luggage, and standard luggage is easily accommodated. If you have more luggage or specific requirements, please inform us during the booking process, and we’ll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate outstation travel?",
          answer: "Yes, we offer corporate outstation travel services for business trips, conferences, or team outings. We ensure a comfortable and professional experience for your corporate travel needs."
        },
        {
          question: "Why should I choose Morya Cab for my outstation journey?",
          answer: "Morya Cab offers a safe, reliable, and affordable outstation taxi service with professional drivers, comfortable vehicles, and transparent pricing. We ensure that your long-distance travel is stress-free and enjoyable."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Sandeep Kumar',
          role: 'Traveler',
          review: "We booked Morya Cab for an outstation trip to Lonavala. The ride was smooth, and the driver was professional and courteous. The vehicle was clean and comfortable. Highly recommend!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Priya Rao',
          role: 'Family Traveler',
          review: "Our family had an amazing outstation experience with Morya Cab. The driver was excellent, and the car was spacious enough for all our luggage. We’ll definitely choose them for our future trips!",
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
        "name": "Outstation Taxi Service Pune",
        "description": "Book affordable and reliable outstation taxi services from Pune to various destinations. Enjoy convenient one-way or round-trip options with choices like Innova Crysta, Tempo Traveller, and more.",
        "provider": {
          "@type": "Organization",
          "name": "Pune Outstation Cabs",
          "url": "https://www.puneoutstationcabs.com",
          "telephone": "+91-9999999999",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 22, Pune City Mall, Pune",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411003",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 2000,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Pune"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "2000",
            "unitCode": "DAY",
            "description": "One-way outstation taxi service from Pune"
          }
        },
        "keywords": "Outstation taxi service Pune, Outstation cabs Pune, One way cab Pune, Best outstation cab service in Pune, Outstation car rental Pune, Taxi in Pune for outstation, Cab booking in Pune for outstation, Book outstation cabs Pune, Taxi service in Pune for outstation, Intercity cab service in Pune, Outstation taxi in Pune, Pune airport to Kolhapur cab, Pune to outstation taxi, Innova Crysta on rent in Pune, Tempo Traveller on rent for outstation, Ertiga on rent in Pune for outstation, Pune to outstation sedan cab service, Pune to outstation Swift cab service"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Outstation Taxi Service Pune | Affordable & Reliable Cabs | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Book affordable and reliable outstation taxi services from Pune to various destinations. Enjoy convenient one-way or round-trip options with choices like Innova Crysta, Tempo Traveller, and more."
  />
  <meta
    name="keywords"
    content="Outstation taxi service Pune, Outstation cabs Pune, One way cab Pune, Best outstation cab service in Pune, Outstation car rental Pune, Taxi in Pune for outstation, Cab booking in Pune for outstation, Book outstation cabs Pune, Taxi service in Pune for outstation, Intercity cab service in Pune, Outstation taxi in Pune, Pune airport to Kolhapur cab, Pune to outstation taxi, Innova Crysta on rent in Pune, Tempo Traveller on rent for outstation, Ertiga on rent in Pune for outstation, Pune to outstation sedan cab service, Pune to outstation Swift cab service"
  />
  <meta property="og:title" content="Outstation Taxi Service Pune | Affordable & Reliable Cabs" />
  <meta
    property="og:description"
    content="Book affordable and reliable outstation taxi services from Pune to various destinations. Enjoy convenient one-way or round-trip options with choices like Innova Crysta, Tempo Traveller, and more."
  />
  <meta property="og:url" content="https://www.puneoutstationcabs.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.puneoutstationcabs.com/images/outstation-taxi.jpg" />
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
                            <img src='/images/keyword/97.jpg' alt='img' />
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

export default Outstationtaxiservice;