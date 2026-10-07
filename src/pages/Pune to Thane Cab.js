
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetothanecab() {



    const cardData =
    {
        keyword: 'Pune to Thane Cab ',
        heading: 'Morya Cabs: Pune to Thane Cab  ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable cab services from Pune to Thane. Whether you are traveling for business, leisure, or family visits, we provide a smooth and hassle-free journey with our well-maintained vehicles and professional drivers. Enjoy a comfortable ride with Morya Cabs, ensuring timely pickups and drop-offs while providing competitive pricing for long-distance travel.',

        top: 'Popular Places to Visit in Thane with Morya Cabs:',

"topPlaces": [
    {
        "title": "Upvan Lake",
        "description": "Upvan Lake is a serene spot in Thane, perfect for a peaceful day out. The lake is surrounded by lush greenery, and you can enjoy activities like boating, walking, or just relaxing by the water."
    },
    {
        "title": "Korum Mall",
        "description": "One of Thane's largest shopping malls, Korum Mall offers a wide range of shopping, dining, and entertainment options, making it a popular destination for both locals and tourists."
    },
    {
        "title": "Yeoor Hills",
        "description": "Yeoor Hills is a picturesque area near Thane, offering beautiful views of nature, making it an excellent place for nature lovers and those who enjoy outdoor activities like trekking."
    },
    {
        "title": "Tikuji-ni-Wadi",
        "description": "A popular amusement park in Thane, Tikuji-ni-Wadi features a water park, a mini zoo, and various rides, making it a great destination for families and kids."
    },
    {
        "title": "Suraj Water Park",
        "description": "Known for its thrilling water rides and attractions, Suraj Water Park is a popular destination in Thane for those looking to enjoy a fun-filled day with family and friends."
    },
    {
        "title": "Thane Creek Flamingo Sanctuary",
        "description": "Located near the Vasai Creek, this sanctuary is home to a wide variety of bird species, especially flamingos. It’s a must-visit for birdwatchers and nature enthusiasts."
    },
    {
        "title": "Saptashrungi Temple",
        "description": "A revered Hindu temple located in the nearby mountains, the Saptashrungi Temple is a significant pilgrimage site. The temple offers stunning views and is an excellent spot for those seeking spirituality and tranquility."
    },
    {
        "title": "Kailash Garden",
        "description": "A beautiful garden in Thane, Kailash Garden is perfect for an evening stroll or picnic with family. It offers a calm environment, away from the hustle and bustle of the city."
    }
],


"services": [
    {
      "name": "Thane to Pune Cab Fare",
      "description": "Morya Cab offers affordable and competitive cab fares for your journey from Thane to Pune. Our transparent pricing ensures you get value for money while enjoying a comfortable ride."
    },
    {
      "name": "Cab from Thane to Pune",
      "description": "Morya Cab provides reliable and comfortable cab services from Thane to Pune. Whether you need a quick trip or a leisurely ride, we ensure a smooth and hassle-free journey."
    },
    {
      "name": "Pune to Kalyan Cab Service",
      "description": "Looking for a reliable cab from Pune to Kalyan? Morya Cab offers dependable and affordable services for your travel between Pune and Kalyan, ensuring comfort and safety."
    },
    {
      "name": "Pune Thane Taxi",
      "description": "Morya Cab offers convenient taxi services between Pune and Thane. Book a taxi for a safe, timely, and comfortable ride to or from Thane."
    },
    {
      "name": "Pune to Thane Cab Booking",
      "description": "Booking a cab from Pune to Thane is quick and easy with Morya Cab. Choose from a range of vehicles to suit your travel needs, and enjoy a smooth journey."
    },
    {
      "name": "Pune to Thane Cab Fare",
      "description": "Morya Cab offers competitive and transparent fares for your trip from Pune to Thane. Our pricing is designed to offer the best value without compromising on comfort."
    },
    {
      "name": "Pune to Thane Cab Service",
      "description": "For reliable and professional cab services from Pune to Thane, Morya Cab is the best choice. Our drivers ensure timely pick-ups and safe, comfortable rides."
    },
    {
      "name": "Pune to Thane One Way Cab",
      "description": "Need a one-way cab from Pune to Thane? Morya Cab offers one-way services that are affordable, timely, and comfortable, making your journey a breeze."
    },
    {
      "name": "Pune to Thane Taxi Service",
      "description": "Morya Cab offers taxi services from Pune to Thane with a focus on reliability, comfort, and professionalism. Enjoy a hassle-free experience with us."
    },
    {
      "name": "Thane to Pune Cab Booking",
      "description": "Book your cab from Thane to Pune with Morya Cab. We provide fast and easy booking options for a comfortable ride to your destination."
    },
    {
      "name": "Pune to Badlapur Cab",
      "description": "Morya Cab offers safe and affordable cab services from Pune to Badlapur. Whether for a business trip or leisure travel, we ensure a smooth and pleasant journey."
    },
    {
      "name": "Pune to Vasai Virar Cab",
      "description": "Travel from Pune to Vasai Virar with Morya Cab for a reliable and comfortable ride. Our professional drivers guarantee timely service and safety."
    },
    {
      "name": "Pune to Vashi Cab",
      "description": "Morya Cab provides dependable and efficient cab services from Pune to Vashi. Enjoy a stress-free journey with our experienced drivers and well-maintained vehicles."
    },
    {
      "name": "Pune to Thane One Way Cab",
      "description": "For a one-way ride from Pune to Thane, Morya Cab offers affordable and hassle-free services. Book your cab today and enjoy a smooth, comfortable ride."
    },
    {
      "name": "Pune to Thane Round Trip Cab",
      "description": "Morya Cab offers round-trip cab services from Pune to Thane. Enjoy the flexibility of a round-trip service while we ensure a comfortable and timely ride."
    },
    {
      "name": "Pune to Kurla Dadar Taxi",
      "description": "Travel from Pune to Kurla or Dadar with Morya Cab. Our reliable taxi service ensures that you reach your destination comfortably and on time."
    },
    {
      "name": "Pune to Thane Tempo Traveller on Rent",
      "description": "For group travel, Morya Cab offers Tempo Traveller rentals from Pune to Thane. Spacious and comfortable, it’s perfect for family trips, corporate outings, or group tours."
    },
    {
      "name": "Pune Thane Round Trip Cab",
      "description": "Morya Cab offers round-trip cab services between Pune and Thane, ensuring a convenient and cost-effective travel experience. Book your round-trip ride with us for a smooth journey."
    },
    {
      "name": "Pune to Thane Innova Cab",
      "description": "For a premium ride, rent an Innova cab from Morya Cab for your journey from Pune to Thane. Enjoy a comfortable, spacious ride with top-notch service."
    }
  ],


  tableData: [
    ["Thane to Pune Cab Fare", "-Cab from Thane to Pune"],
    ["Pune to Kalyan Cab Service", "-Pune Thane Taxi"],
    ["Pune to Thane Cab Booking", "-Pune to Thane Cab Fare"],
    ["Pune to Thane Cab Service", "-Pune to Thane One Way Cab"],
    ["Pune to Thane Taxi Service", "-Thane to Pune Cab Booking"],
    ["Pune to Badlapur Cab", "-Pune to Vasai Virar Cab"],
    ["Pune to Vashi Cab", "-Pune to Thane One Way Cab"],
    ["Pune to Thane Round Trip Cab", "-Pune to Kurla Dadar Taxi"],
    ["Pune to Thane Tempo Traveller on Rent", "-Pune Thane Round Trip Cab"],
    ["Pune to Thane Innova Cab", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab ensures that your trip from Pune to Thane is punctual and hassle-free. Whether you’re traveling for business or leisure, our drivers make sure you reach your destination on time, every time."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "For your journey from Pune to Thane, we offer a wide range of comfortable vehicles, including sedans, SUVs, and premium cars. Each vehicle is equipped with air-conditioning, spacious seating, and ample legroom for a smooth and enjoyable ride."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are professional, courteous, and familiar with the best routes from Pune to Thane. Their expertise ensures you a safe, efficient, and pleasant ride, making your journey seamless and relaxing."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "We provide competitive and transparent pricing with no hidden charges. Our fares are clear from the start, giving you peace of mind knowing exactly what to expect."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles come with modern safety features such as airbags, seat belts, and GPS tracking, ensuring a secure and comfortable ride from Pune to Thane."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates around the clock, so whether you’re planning an early morning trip or a late-night return, we are always ready to meet your travel needs. Our customer service team is available 24/7 for your convenience."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a cab from Pune to Thane is easy with Morya Cab. You can book through our website, mobile app, or simply contact our customer service team for assistance and we will take care of the rest."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you need a cab for a business trip, a sightseeing tour, or a personal visit to Thane, we offer customized packages to suit your specific needs, ensuring a tailored and pleasant travel experience."
    }
]




















    }

    const faqData = [
        {
          question: "How can I book a cab from Pune to Thane with Morya Cab?",
          answer: "You can easily book a cab through our website, mobile app, or by calling our customer service team for personalized assistance."
        },
        {
          question: "What types of vehicles are available for a trip from Pune to Thane?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all equipped with air-conditioning and comfortable seating for your convenience."
        },
        {
          question: "How do I pay for my Pune to Thane cab ride?",
          answer: "We offer flexible payment options, including cash, credit/debit cards, and online payments through our app, allowing you to choose the most convenient method."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced in long-distance travel and are familiar with the best routes from Pune to Thane to ensure a smooth and safe journey."
        },
        {
          question: "Can I book a round trip from Pune to Thane?",
          answer: "Yes, round trips can be arranged. Simply let us know your return details, and we’ll handle the rest to ensure your trip is seamless."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting or detours will be communicated to you upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a cab for sightseeing in Thane?",
          answer: "Yes, we offer sightseeing tours in Thane. Explore the city's popular attractions comfortably in one of our well-maintained vehicles."
        },
        {
          question: "What is the luggage allowance for the Pune to Thane journey?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have additional luggage or special requirements, please inform us during booking, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel from Pune to Thane?",
          answer: "Yes, we provide corporate travel services, ensuring a professional and comfortable experience for business trips or team outings."
        },
        {
          question: "Why should I choose Morya Cab for my Pune to Thane journey?",
          answer: "Morya Cab offers reliable, affordable, and comfortable taxi services with professional drivers, well-maintained vehicles, and transparent pricing, ensuring a safe and stress-free journey to Thane."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Kunal Deshmukh',
          role: 'Business Traveler',
          review: "I used Morya Cab for my trip to Thane for a business meeting. The car was comfortable, the driver was professional, and the ride was smooth. I’ll definitely use their service again!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Anjali Shah',
          role: 'Family Traveler',
          review: "Our family booked a cab from Pune to Thane for a weekend getaway. The vehicle was spacious, and the driver was courteous and helpful. It was a wonderful experience!",
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
        "name": "Pune to Thane Cab Service",
        "description": "Affordable and reliable taxi services from Pune to Thane. Book one-way or round-trip taxis with options for luxury cabs, Innova, and Tempo Travellers. Enjoy comfortable and safe rides for all your travel needs.",
        "provider": {
          "@type": "Organization",
          "name": "Pune Thane Cabs",
          "url": "https://www.punetothanecabservice.com",
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
          "price": 1800,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Pune"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "1800",
            "unitCode": "DAY",
            "description": "One-way taxi service from Pune to Thane"
          }
        },
        "keywords": "Thane to Pune Cab fare, Cab from Thane to Pune, Pune to Kalyan Cab service, Pune Thane Taxi, Pune to Thane cab booking, Pune to Thane cab fare, Pune to Thane cab service, Pune to Thane one way cab, Pune to Thane taxi service, Thane to Pune Cab Booking, Pune to Badlapur cab, Pune to Vasai Virar cab, Pune to Vashi cab, Pune to Thane one way cab, Pune to Thane round trip cab, Pune to Kurla Dadar taxi, Pune to Thane Tempo Traveller on rent, Pune Thane round trip cab, Pune to Thane Innova Cab"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Thane Cab Service | Affordable & Reliable Taxi Booking | Call: +91 9359401610</title>
  <meta
    name="description"
    content="Affordable and reliable taxi services from Pune to Thane. Book one-way or round-trip taxis with options for luxury cabs, Innova, and Tempo Travellers. Enjoy comfortable and safe rides for all your travel needs."
  />
  <meta
    name="keywords"
    content="Thane to Pune Cab fare, Cab from Thane to Pune, Pune to Kalyan Cab service, Pune Thane Taxi, Pune to Thane cab booking, Pune to Thane cab fare, Pune to Thane cab service, Pune to Thane one way cab, Pune to Thane taxi service, Thane to Pune Cab Booking, Pune to Badlapur cab, Pune to Vasai Virar cab, Pune to Vashi cab, Pune to Thane one way cab, Pune to Thane round trip cab, Pune to Kurla Dadar taxi, Pune to Thane Tempo Traveller on rent, Pune Thane round trip cab, Pune to Thane Innova Cab"
  />
  <meta property="og:title" content="Pune to Thane Cab Service | Affordable & Reliable Taxi Booking" />
  <meta
    property="og:description"
    content="Affordable and reliable taxi services from Pune to Thane. Book one-way or round-trip taxis with options for luxury cabs, Innova, and Tempo Travellers. Enjoy comfortable and safe rides for all your travel needs."
  />
  <meta property="og:url" content="https://www.punetothanecabservice.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.punetothanecabservice.com/images/pune-to-thane-cab.jpg" />
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
                            <img src='/images/keyword/96.jpg' alt='img' />
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

export default Punetothanecab;