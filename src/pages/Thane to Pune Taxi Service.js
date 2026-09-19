
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Thanetopunetaxi() {



    const cardData =
    {
        keyword: 'Thane to Pune Taxi  ',
        heading: 'Morya Cabs: Thane to Pune Taxi ',
        headingDescription: 'Morya Cabs offers professional, comfortable, and reliable taxi services from Thane to Pune. Whether you are heading to Pune for business, leisure, or a family trip, we ensure a smooth and hassle-free journey. The distance from Thane to Pune is approximately 170 km, and the journey typically takes around 3.5 to 4.5 hours by road. Enjoy a comfortable ride with our well-maintained vehicles and experienced drivers, who prioritize safety and punctuality.',

        top: 'Top Places to Visit in Pune with Morya Cabs',

"topPlaces": [
    {
        "title": "Shaniwar Wada",
        "location": "Pune, Maharashtra",
        "description": "Shaniwar Wada, an architectural marvel, was once the grand residence of the Peshwa rulers of the Maratha Empire. It is known for its historical significance and beautiful gardens. Visitors can enjoy a light-and-sound show in the evenings that narrates the fort’s history."
    },
    {
        "title": "Aga Khan Palace",
        "location": "Pune, Maharashtra",
        "description": "The Aga Khan Palace holds great historical importance as it served as a prison for Mahatma Gandhi and his followers during the Indian freedom struggle. The palace also boasts a serene garden and houses a museum dedicated to India's independence movement."
    },
    {
        "title": "Sinhagad Fort",
        "location": "Pune, Maharashtra",
        "description": "Located around 35 km from Pune, Sinhagad Fort is a popular trekking destination offering stunning panoramic views of the Sahyadri mountain range. Known for its historical significance, this fort has been a key site in various battles and is perfect for nature lovers and history enthusiasts alike."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "location": "Pune, Maharashtra",
        "description": "The Pataleshwar Cave Temple is a rock-cut ancient temple dedicated to Lord Shiva. It is believed to have been constructed in the 8th century and is known for its intricate carvings and peaceful ambiance, making it a must-visit for those interested in history and architecture."
    },
    {
        "title": "Osho Ashram",
        "location": "Pune, Maharashtra",
        "description": "Located in the Koregaon Park area, Osho Ashram offers a peaceful retreat for visitors looking to relax and rejuvenate. It’s famous for meditation, spiritual teachings, and its calming environment, making it an ideal place for peace seekers."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "location": "Pune, Maharashtra",
        "description": "This museum offers a rich collection of cultural artifacts that showcase India’s artistic heritage. With over 20,000 objects, including musical instruments, pottery, and sculptures, the museum is a treasure trove for history and art enthusiasts."
    },
    {
        "title": "Khadakwasla Dam",
        "location": "Pune, Maharashtra",
        "description": "Located near the city, Khadakwasla Dam is known for its tranquil surroundings and scenic beauty. Visitors can enjoy a relaxing day by the water, take a boat ride, or simply enjoy the views of the dam against the backdrop of the hills."
    },
    {
        "title": "Shinde Chhatri",
        "location": "Pune, Maharashtra",
        "description": "Shinde Chhatri is a memorial dedicated to Mahadji Shinde, a Maratha general, and is famous for its stunning architecture and scenic surroundings. The memorial offers insight into Maratha history and provides a peaceful place to reflect."
    },
    {
        "title": "Fergusson College",
        "location": "Pune, Maharashtra",
        "description": "Fergusson College is one of Pune's oldest educational institutions, known for its beautiful campus and historic significance. The colonial-style architecture and lush green grounds make it an excellent place for a peaceful stroll."
    },
    {
        "title": "Pune Okayama Friendship Garden",
        "location": "Pune, Maharashtra",
        "description": "The Pune Okayama Friendship Garden, also known as Osho Garden, is an idyllic park designed to provide visitors with a peaceful space to relax amidst nature. The garden is beautifully landscaped with Japanese elements, creating a tranquil environment for all."
    }
],


"services": [
    {
        "name": "Thane to Pune Taxi Service",
        "description": "Morya Cab offers convenient and comfortable taxi services from Thane to Pune. Whether you're traveling for business, leisure, or other purposes, we ensure a smooth and stress-free ride."
    },
    {
        "name": "Thane to Pune Cab",
        "description": "Book a taxi from Thane to Pune with Morya Cab and enjoy a hassle-free journey. Our experienced drivers are well-versed in the best routes, ensuring a timely arrival."
    },
    {
        "name": "Thane to Pune One-Way Taxi",
        "description": "If you're looking for a one-way ride, Morya Cab provides affordable one-way taxi services between Thane and Pune. Enjoy a cost-effective and comfortable trip."
    },
    {
        "name": "Thane to Pune Taxi Fare",
        "description": "Morya Cab offers transparent and competitive pricing for your journey from Thane to Pune. We strive to keep taxi fares affordable while maintaining comfort and convenience."
    },
    {
        "name": "Thane to Pune Innova",
        "description": "For a more luxurious ride, opt for an Innova taxi from Thane to Pune. Spacious and comfortable, the Innova is ideal for families or groups traveling together."
    },
    {
        "name": "Thane to Pune Ertiga",
        "description": "If you're traveling with a small group or family, Morya Cab offers the Ertiga for a comfortable and budget-friendly option from Thane to Pune."
    },
    {
        "name": "Thane to Pune Sedan",
        "description": "Morya Cab also offers sedan services for your Thane to Pune journey. Ideal for solo travelers or small groups, our sedans provide a comfortable and stylish experience."
    },
    {
        "name": "Thane to Pune Car Hire",
        "description": "Rent a car from Morya Cab for a more personalized journey from Thane to Pune. Choose from a range of vehicles that suit your preferences and enjoy the flexibility of your trip."
    },
    {
        "name": "Thane to Pune Taxi Booking",
        "description": "Booking your taxi for the Thane to Pune trip is easy with Morya Cab. You can book online or contact us directly for a seamless and efficient booking experience."
    },
    {
        "name": "Taxi from Thane to Pune",
        "description": "Travel in comfort with Morya Cab’s reliable taxi service from Thane to Pune. We provide excellent customer service and a smooth ride every time."
    },
    {
        "name": "Mumbai to Pune Thane Taxi",
        "description": "If you're traveling from Mumbai to Pune via Thane, Morya Cab offers seamless taxi services to ensure you have a smooth journey from start to finish."
    },
    {
        "name": "Thane to Pune Round Trip Taxi",
        "description": "For a round trip, Morya Cab offers flexible and comfortable options from Thane to Pune. Enjoy a seamless and relaxing journey, whether it's a one-day or multiple-day trip."
    },
    {
        "name": "Mumbai to Pune Taxi from Thane",
        "description": "Morya Cab provides a convenient taxi service from Thane to Pune for travelers coming from Mumbai. Book your ride and enjoy a stress-free journey."
    },
    {
        "name": "Affordable Thane to Pune Taxi",
        "description": "Morya Cab offers budget-friendly taxi services without compromising on comfort or quality. Our affordable fares ensure you get the best value for your journey from Thane to Pune."
    },
    {
        "name": "Thane to Pune Online Booking",
        "description": "Book your Thane to Pune taxi online with Morya Cab for a quick and easy booking process. We offer flexible booking options to make your travel experience hassle-free."
    },
    {
        "name": "Contact Information for Morya Cab",
        "description": "For bookings or inquiries, call Morya Cab at +91 9371304510. Our team is ready to assist you with your Thane to Pune taxi service!"
    }
],


tableData: [
    ["Thane to Pune Taxi Service", "-Thane to Pune Cab"],
    ["Thane to Pune One Way Taxi", "-Thane to Pune Taxi Fare"],
    ["Thane to Pune Innova", "-Thane to Pune Ertiga"],
    ["Thane to Pune Sedan", "-Thane to Pune Car Hire"],
    ["Thane to Pune Taxi Booking", "-Taxi from Thane to Pune"],
    ["Mumbai to Pune Thane Taxi", "-Thane to Pune Round Trip Taxi"],
    ["Mumbai to Pune Taxi from Thane", "-Affordable Thane to Pune Taxi"],
    ["Thane to Pune Online Booking", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we prioritize punctuality. Whether you’re traveling for business or leisure, we ensure timely pickups and drop-offs from Thane to Pune. Our drivers are committed to providing you with a seamless, on-time journey."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We provide a range of comfortable and spacious vehicles, designed to make your long-distance journey enjoyable. With ample legroom, comfortable seating, and air-conditioning, our taxis ensure a relaxed and smooth ride from Thane to Pune."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced and knowledgeable about the best routes between Thane and Pune. They are committed to ensuring a safe, efficient, and comfortable journey, with a focus on your comfort and safety."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing. You’ll know the cost of your trip upfront, with no hidden charges. We believe in providing value for money without any surprises, ensuring a fair experience for all passengers."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly serviced and come equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure a worry-free journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need a ride early in the morning or late at night, Morya Cab is available 24/7 to accommodate your travel schedule. Our customer service team is always ready to assist you in booking your taxi."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi from Thane to Pune is quick and easy. You can book online via our website or mobile app, or reach out to our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages to fit your specific needs. Whether you’re making stops along the way or need any special services, we can tailor your journey to your preferences for a more personalized experience."
    }
]













    }

    const faqData = [
        {
          question: "How can I book a Thane to Pune taxi with Morya Cab?",
          answer: "You can book easily online via our website or mobile app. Alternatively, contact our customer service team for assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are experienced in long-distance routes, ensuring a safe and comfortable journey from Thane to Pune."
        },
        {
          question: "What types of vehicles are available for Thane to Pune travel?",
          answer: "We offer a variety of well-maintained vehicles, including sedans, SUVs, and premium cars, all designed for your comfort during the long journey."
        },
        {
          question: "How do I pay for my Thane to Pune taxi rental?",
          answer: "We accept multiple payment options including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Thane to Pune?",
          answer: "Yes, you can book a round trip. Just provide your return details when booking, and we’ll arrange your return journey from Pune to Thane."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting or detours will be communicated to you upfront, ensuring transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Pune?",
          answer: "Yes, we offer sightseeing services in Pune. Visit iconic attractions like Shaniwar Wada, Aga Khan Palace, and more with a trusted driver."
        },
        {
          question: "What is the luggage allowance for a Thane to Pune taxi?",
          answer: "Our vehicles can accommodate standard luggage. If you have additional luggage or special requests, let us know at the time of booking, and we will make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Pune?",
          answer: "Yes, we provide corporate travel services. Whether it’s for business meetings or team outings, we can customize the travel package to meet your company’s needs."
        },
        {
          question: "Why should I choose Morya Cab for Thane to Pune travel?",
          answer: "Morya Cab is known for its reliable service, experienced drivers, and affordable pricing. With well-maintained vehicles and a focus on customer satisfaction, we ensure a safe, comfortable, and smooth journey."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Prakash Patil',
          role: 'Family Traveler',
          review: 'Our trip from Thane to Pune was excellent. The vehicle was clean, comfortable, and spacious, and the driver was courteous and knowledgeable. I will definitely choose Morya Cab for my future trips!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Ms. Meera Joshi',
          role: 'Business Traveler',
          review: 'I used Morya Cab for my business trip from Thane to Pune. The ride was smooth, the driver was professional, and I had a very comfortable journey. Great service!',
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
        "@type": "LocalBusiness",
        "name": "Morya Cab Services",
        "description": "Book your Thane to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/thane-to-pune-taxi.jpg",
          "https://moryacab.com/img/thane-to-pune-cab-service.jpg"
        ],
        "priceRange": "₹2200 - ₹4000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/thane-to-pune-taxi-service",
          "priceCurrency": "INR",
          "price": 3000,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.6,
          "reviewCount": 150
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sandeep Desai"
            },
            "datePublished": "2024-01-25",
            "reviewBody": "Smooth and comfortable ride. The vehicle was clean, and the driver was very professional. Will definitely choose Morya Cab again."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Kulkarni"
            },
            "datePublished": "2024-07-30",
            "reviewBody": "On-time service, and the car was spacious and comfortable. The driver was friendly and courteous. A wonderful experience!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Thane to Pune Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.1767,
            "longitude": 73.0149
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/thane-to-pune-taxi-service"
        },
        "keywords": "thane to pune taxi service, thane to pune cab, thane to pune one way taxi, thane to pune taxi fare, thane to pune innova, thane to pune ertiga, thane to pune sedan, thane to pune car hire, thane to pune taxi booking, taxi from thane to pune, mumbai to pune thane taxi, thane to pune round trip taxi, mumbai to pune taxi from thane, affordable thane to pune taxi, thane to pune online booking"
      };
    



    return (
        <div>
            <UsePageTracking/>
<Helmet>
        <title>Thane to Pune Taxi | Affordable & Reliable Cab Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Thane to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510."
        />
        <meta name="keywords" content="thane to pune taxi service, thane to pune cab, one way taxi, affordable taxi service" />
        <meta property="og:title" content="Thane to Pune Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Thane to Pune taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!" />
        <meta property="og:url" content="https://moryacab.com/thane-to-pune-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/thane-to-pune-taxi.jpg" />
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
                            <img src='/images/keyword/24.jpg' alt='img' />
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

export default Thanetopunetaxi;