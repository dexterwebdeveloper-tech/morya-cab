
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetogujratcab() {



    const cardData =
    {
        keyword: 'Pune to Gujarat Cab Service  ',
        heading: 'Morya Cabs: Pune to Gujarat Cab Service ',
        headingDescription: 'Morya Cabs offers reliable, safe, and affordable taxi services for travelers looking to go from Pune to Gujarat. Whether you are visiting Gujarat for business, leisure, or a family trip, our well-maintained vehicles and professional drivers ensure a comfortable and hassle-free journey. With our 24/7 service, you can count on us to provide timely and secure transportation for your long-distance travel needs from Pune to Gujarat.',

        top: 'Popular Destinations in Gujarat to Visit with Morya Cabs:',

"topPlaces": [
    {
        "title": "Ahmedabad",
        "description": "The largest city in Gujarat, Ahmedabad is known for its rich history, culture, and architecture. Popular sites include the Sabarmati Ashram, Sidi Saiyyed Mosque, and Kankaria Lake."
    },
    {
        "title": "Surat",
        "description": "Known as the 'Diamond City,' Surat is famous for its textile industry and diamond trade. Visit the Surat Fort, Dumas Beach, and the Sarthana Nature Park for a fun and educational experience."
    },
    {
        "title": "Vadodara",
        "description": "Vadodara is home to several beautiful palaces, gardens, and museums. Popular attractions include the Lakshmi Vilas Palace, Baroda Museum & Picture Gallery, and Champaner-Pavagadh Archaeological Park."
    },
    {
        "title": "Gandhinagar",
        "description": "The capital of Gujarat, Gandhinagar is known for its clean, green environment. Visit the Akshardham Temple, Gandhinagar Railway Station, and the Indroda Nature Park."
    },
    {
        "title": "Gir National Park",
        "description": "Famous for being the last refuge of Asiatic lions, Gir National Park is a must-visit for wildlife enthusiasts. It offers safaris where you can spot the majestic lions and other wildlife."
    },
    {
        "title": "Rann of Kutch",
        "description": "The Rann of Kutch is famous for its white salt desert and the Rann Utsav, a cultural festival showcasing folk dance, music, and traditional handicrafts. It’s a unique destination for adventure and culture lovers."
    },
    {
        "title": "Dwarka",
        "description": "A sacred town for Hindus, Dwarka is known for the Dwarkadhish Temple and is a part of the Char Dham pilgrimage. It’s one of the most important religious destinations in India."
    },
    {
        "title": "Somnath",
        "description": "Famous for the Somnath Temple, which is one of the 12 Jyotirlingas of Lord Shiva, Somnath is an important religious site located on the coast of the Arabian Sea."
    }
],


"services": [
    {
      "name": "Pune to Surat Cab Booking",
      "description": "Morya Cab offers convenient and reliable cab booking services for your journey from Pune to Surat. Book your ride with us for a smooth and comfortable travel experience."
    },
    {
      "name": "Pune to Surat Cab Price",
      "description": "Morya Cab offers competitive pricing for your Pune to Surat trip. Our affordable fares ensure you get value for money while enjoying a safe and comfortable ride."
    },
    {
      "name": "Pune to Surat Cab",
      "description": "Travel from Pune to Surat with Morya Cab for a hassle-free journey. Our professional drivers and well-maintained vehicles ensure a smooth ride throughout your trip."
    },
    {
      "name": "Pune to Surat Taxi Cab Hire",
      "description": "Morya Cab provides reliable taxi cab hire services from Pune to Surat. Enjoy a safe and comfortable ride with flexible booking options tailored to your travel needs."
    },
    {
      "name": "Pune to Gujarat Cab Booking",
      "description": "Need a cab to Gujarat? Morya Cab offers reliable and affordable cab booking services from Pune to various destinations in Gujarat, ensuring a safe and comfortable journey."
    },
    {
      "name": "Pune to Ahmedabad Cab",
      "description": "Morya Cab provides dependable and efficient cab services from Pune to Ahmedabad. Book your ride for a smooth, timely, and comfortable journey."
    },
    {
      "name": "Pune to Vadodara Cab",
      "description": "Travel from Pune to Vadodara with Morya Cab. Our professional drivers ensure a safe and comfortable ride, making your journey to Vadodara smooth and enjoyable."
    },
    {
      "name": "Pune to Rajkot Cab Service",
      "description": "Morya Cab offers reliable cab services from Pune to Rajkot. Whether for business or leisure, our well-maintained vehicles and experienced drivers ensure a comfortable ride."
    },
    {
      "name": "Pune to Gujarat Round Trip Cab Service",
      "description": "Morya Cab provides round trip cab services from Pune to various destinations in Gujarat. Enjoy the flexibility of a round trip with our convenient and affordable services."
    },
    {
      "name": "Pune to Pavagadh Taxi Service",
      "description": "Looking for a taxi to Pavagadh? Morya Cab offers reliable taxi services from Pune to Pavagadh, ensuring a smooth and comfortable ride for your trip."
    },
    {
      "name": "Pune to Gandhinagar Gujarat Taxi Service",
      "description": "Morya Cab provides reliable taxi services from Pune to Gandhinagar, Gujarat. Whether you're traveling for business or leisure, our services guarantee a comfortable journey."
    },
    {
      "name": "Pune to Somnath Trip with Morya Cabs",
      "description": "Morya Cab offers smooth and affordable travel from Pune to Somnath with Morya Cabs. Enjoy a relaxed and enjoyable ride with our experienced drivers."
    },
    {
      "name": "Pune to Bhavnagar Cab Service",
      "description": "Morya Cab offers prompt and reliable cab services from Pune to Bhavnagar. Whether for personal or business purposes, we provide comfort and punctuality in our services."
    },
    {
      "name": "Pune Vadodara Cab Booking",
      "description": "Book a cab from Pune to Vadodara with Morya Cab. We offer flexible booking options and affordable rates for a stress-free and comfortable journey."
    },
    {
      "name": "Pune to Gujarat Tempo Traveller on Rent",
      "description": "For group travel, Morya Cab offers Tempo Traveller rentals from Pune to Gujarat. Spacious and comfortable, it's perfect for group tours, family vacations, or corporate outings."
    },
    {
      "name": "Pune to Rajkot Cab",
      "description": "Morya Cab provides reliable and comfortable cab services for your journey from Pune to Rajkot. Book your ride with us for a smooth and timely trip."
    },
    {
      "name": "Pune to Statue of Unity on Statue Cabs",
      "description": "Experience a seamless ride to the Statue of Unity with Morya Cab’s Statue Cabs service from Pune. We ensure a comfortable and timely trip for your visit to this iconic landmark."
    },
    {
      "name": "Pune to Gujarat Cab Service",
      "description": "Morya Cab provides reliable and affordable cab services to various destinations in Gujarat. Whether it's for business or a leisure trip, we guarantee a smooth ride."
    }
  ],


  tableData: [
    ["Pune to Surat Cab Booking", "-Pune to Surat Cab Price"],
    ["Pune to Surat Cab", "-Pune to Surat Taxi Cab Hire"],
    ["Pune to Gujarat Cab Booking", "-Pune to Ahmedabad Cab"],
    ["Pune to Vadodara Cab", "-Pune to Rajkot Cab Service"],
    ["Pune to Gujarat Round Trip Cab Service", "-Pune to Pavagadh Taxi Service"],
    ["Pune to Gandhinagar Gujarat Taxi Service", "-Pune to Somnath Trip with Morya Cabs"],
    ["Pune to Bhavnagar Cab Service", "-Pune Vadodara Cab Booking"],
    ["Pune to Gujarat Tempo Traveller on Rent", "-Pune to Rajkot Cab"],
    ["Pune to Statue of Unity on Statue Cabs", "-Pune to Gujarat Cab Service"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of timely arrivals, especially when traveling long distances like from Pune to Gujarat. Our drivers ensure punctual pickups and smooth travel to your destination, so you can rely on us for a stress-free journey."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a variety of vehicles that are comfortable and spacious for long-distance travel. Whether you prefer a sedan, SUV, or premium car, our fleet is equipped with air-conditioning, comfortable seating, and plenty of legroom to make your journey to Gujarat enjoyable."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are skilled in handling long-distance trips and are familiar with the best routes to Gujarat. With a focus on your safety and comfort, they will ensure that your ride is smooth, safe, and pleasant throughout the journey."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers affordable pricing for your trip from Pune to Gujarat. We provide transparent pricing with no hidden charges, giving you an accurate fare estimate before you book your cab."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. Our vehicles are equipped with modern safety features, such as airbags, seat belts, and GPS tracking, to ensure you have a secure journey from Pune to Gujarat."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "We understand that travel needs may arise at any time, so Morya Cab is available 24/7. Whether you're planning a morning or evening departure, our customer service team is always ready to assist with your booking."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a cab from Pune to Gujarat is easy with Morya Cab. You can book online through our website or mobile app, or contact our customer service team for personalized assistance to make the process as smooth as possible."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're heading for business or leisure, we offer customized travel packages for your journey to Gujarat. Let us know your preferences, and we'll tailor the trip to suit your needs."
    }
]




















    }

    const faqData = [
        {
          question: "How can I book a cab from Pune to Gujarat?",
          answer: "You can easily book a cab through our website or mobile app, or get in touch with our customer service team for assistance with your booking."
        },
        {
          question: "What types of vehicles are available for a trip from Pune to Gujarat?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all well-maintained for your comfort on long-distance travel."
        },
        {
          question: "How do I pay for my Pune to Gujarat cab ride?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payment via our app, ensuring convenience for you."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are experienced with long-distance travel, ensuring a safe, comfortable, and smooth journey to Gujarat."
        },
        {
          question: "Can I book a round trip for Pune to Gujarat?",
          answer: "Yes, we can arrange round trips. Simply let us know your return details, and we will ensure your trip to and from Gujarat is hassle-free."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges, such as for waiting or detours, will be clearly communicated to you before the trip, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a cab for sightseeing in Gujarat?",
          answer: "Yes, you can hire a cab for sightseeing in Gujarat. Our drivers will take you to the major attractions in the region, ensuring a memorable trip."
        },
        {
          question: "What is the luggage allowance for the Pune to Gujarat journey?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have additional luggage or special needs, please inform us during booking so we can make arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel from Pune to Gujarat?",
          answer: "Yes, we provide reliable corporate travel services, making business trips or team outings to Gujarat comfortable and efficient."
        },
        {
          question: "Why should I choose Morya Cab for my Pune to Gujarat journey?",
          answer: "Morya Cab offers a comfortable, affordable, and safe travel experience with professional drivers, well-maintained vehicles, and transparent pricing, ensuring a smooth journey to Gujarat."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Ajay Rathi',
          role: 'Business Traveler',
          review: "I booked a cab with Morya Cab for a business trip to Gujarat. The vehicle was comfortable, and the driver was professional and punctual. It was a smooth and hassle-free ride!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Manisha Patel',
          role: 'Family Traveler',
          review: "Our family used Morya Cab for a trip to Gujarat. The journey was long, but the ride was very comfortable. The driver was friendly and ensured we had a great experience. Highly recommend!",
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
        "name": "Pune to Gujarat Cab Service",
        "description": "Affordable and reliable cab service from Pune to various destinations in Gujarat, including Surat, Ahmedabad, Vadodara, Rajkot, and more. Offering both one-way and round-trip services with options for Tempo Travellers and luxury cabs.",
        "provider": {
          "@type": "Organization",
          "name": "Pune Gujarat Cabs",
          "url": "https://www.punetogujarattaxiservices.com",
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
          "price": 5000,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Pune"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "5000",
            "unitCode": "DAY",
            "description": "One-way cab service from Pune to Gujarat"
          }
        },
        "keywords": "Pune to Surat Cab Booking, Pune to Surat Cab Price, Pune to Surat Cab, Pune to Surat Taxi Cab Hire, Pune to Gujarat Cab Booking, Pune to Ahmedabad Cab, Pune to Vadodara Cab, Pune to Rajkot Cab Service, Pune to Gujarat Round Trip Cab Service, Pune to Pavagadh Taxi Service, Pune to Gandhinagar Gujarat Taxi Service, Pune to Somnath Trip with Morya Cabs, Pune to Bhavnagar Cab Service, Pune Vadodara Cab Booking, Pune to Gujarat Tempo Traveller on Rent, Pune to Rajkot Cab, Pune to Statue of Unity on Statue Cabs, Pune to Gujarat Cab Service"
      };
      

    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Gujarat Cab Service | Affordable & Reliable Taxi Service | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Affordable and reliable cab service from Pune to various destinations in Gujarat, including Surat, Ahmedabad, Vadodara, Rajkot, and more. Offering both one-way and round-trip services with options for Tempo Travellers and luxury cabs."
  />
  <meta
    name="keywords"
    content="Pune to Surat Cab Booking, Pune to Surat Cab Price, Pune to Surat Cab, Pune to Surat Taxi Cab Hire, Pune to Gujarat Cab Booking, Pune to Ahmedabad Cab, Pune to Vadodara Cab, Pune to Rajkot Cab Service, Pune to Gujarat Round Trip Cab Service, Pune to Pavagadh Taxi Service, Pune to Gandhinagar Gujarat Taxi Service, Pune to Somnath Trip with Morya Cabs, Pune to Bhavnagar Cab Service, Pune Vadodara Cab Booking, Pune to Gujarat Tempo Traveller on Rent, Pune to Rajkot Cab, Pune to Statue of Unity on Statue Cabs, Pune to Gujarat Cab Service"
  />
  <meta property="og:title" content="Pune to Gujarat Cab Service | Affordable & Reliable Taxi Service" />
  <meta
    property="og:description"
    content="Affordable and reliable cab service from Pune to various destinations in Gujarat, including Surat, Ahmedabad, Vadodara, Rajkot, and more. Offering both one-way and round-trip services with options for Tempo Travellers and luxury cabs."
  />
  <meta property="og:url" content="https://www.punetogujarattaxiservices.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.punetogujarattaxiservices.com/images/pune-to-gujarat-cab-service.jpg" />
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
                            <img src='/images/keyword/94.jpg' alt='img' />
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

export default Punetogujratcab;