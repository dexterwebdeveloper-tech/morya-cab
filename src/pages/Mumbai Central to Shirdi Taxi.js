
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Mumbaicentraltoshirdi() {



    const cardData =
    {
        keyword: 'Mumbai Central to Shirdi Taxi ',
        heading: 'Morya Cabs: Mumbai Central to Shirdi Taxi ',
        headingDescription: 'Morya Cabs offers reliable and comfortable taxi services from Mumbai Central to Shirdi, ensuring a smooth and hassle-free ride. Whether you are traveling for a religious pilgrimage or a peaceful retreat, our well-maintained fleet and experienced drivers will make your journey comfortable. The distance between Mumbai Central and Shirdi is approximately 240 km, and the journey typically takes around 5 to 6 hours. With Morya Cabs, you can be assured of a safe, timely, and enjoyable trip to the sacred town of Shirdi.',

        top: 'Top Places to Visit in Shirdi with Morya Cabs',

"topPlaces": [
    {
        "title": "Shirdi Sai Baba Temple",
        "location": "Shirdi, Maharashtra",
        "description": "The primary attraction in Shirdi, this temple is dedicated to Sai Baba, a revered saint and spiritual leader. Millions of devotees visit this temple to seek blessings and experience peace. The temple is a spiritual hub for Sai Baba devotees."
    },
    {
        "title": "Dwarkamai Mosque",
        "location": "Shirdi, Maharashtra",
        "description": "Dwarkamai is an important historical and religious site, as it was the place where Sai Baba spent a significant part of his life. The mosque houses a holy fire that has been burning continuously for decades, which devotees believe to be sacred."
    },
    {
        "title": "Chavadi",
        "location": "Shirdi, Maharashtra",
        "description": "Another important place in Shirdi, Chavadi is the site where Sai Baba spent alternate nights. It holds significant spiritual value for devotees who visit it for prayers and reflection. The place is also known for the sacred flag-hoisting ceremony."
    },
    {
        "title": "Sai Heritage Village",
        "location": "Shirdi, Maharashtra",
        "description": "A wonderful cultural experience for devotees, this village offers a glimpse into the life and teachings of Sai Baba. The village showcases replicas of historical places related to Sai Baba’s life and is a great place to learn more about his spiritual journey."
    },
    {
        "title": "Shri Saibaba Sansthan Trust Museum",
        "location": "Shirdi, Maharashtra",
        "description": "This museum holds a collection of items related to Sai Baba’s life, including his clothes, ornaments, and other artifacts. It offers insights into his teachings and spiritual practices and is a must-visit for those interested in learning about Sai Baba's legacy."
    },
    {
        "title": "Shirdi's Shani Shingnapur",
        "location": "Shani Shingnapur, Maharashtra",
        "description": "Located around 70 km from Shirdi, Shani Shingnapur is famous for its Shani Temple, dedicated to Lord Shani. The unique feature of this temple is that it doesn't have a roof over the idol of Lord Shani, which is considered an unusual practice. The temple is known for its spiritual significance."
    },
    {
        "title": "Nandnvan Garden",
        "location": "Shirdi, Maharashtra",
        "description": "Nandnvan Garden is a serene and well-maintained garden located near Shirdi. The garden is a peaceful place for a leisurely walk, and it offers a perfect spot for relaxation amidst nature’s beauty."
    },
    {
        "title": "Khandoba Temple",
        "location": "Shirdi, Maharashtra",
        "description": "This temple, dedicated to Lord Khandoba, is located in Shirdi and holds historical significance. It is said that Sai Baba had a close connection with Lord Khandoba. The temple is a peaceful retreat for devotees seeking blessings."
    },
    {
        "title": "Lendi Baug",
        "location": "Shirdi, Maharashtra",
        "description": "Lendi Baug is a small garden that holds great significance in the life of Sai Baba. It is believed that Sai Baba used to visit this garden regularly, where he meditated and watered a tree. The garden is a serene place for reflection and peace."
    },
    {
        "title": "Gurusthan",
        "location": "Shirdi, Maharashtra",
        "description": "This is the place where Sai Baba was first seen by the villagers of Shirdi. A small shrine is built here in his honor, and it is a significant place for Sai Baba devotees. The site is known for its peaceful atmosphere and connection to Sai Baba’s early life."
    }
],


"services": [
    {
        "name": "Mumbai Central to Shirdi Taxi Service",
        "description": "Book your Mumbai Central to Shirdi taxi with Morya Cab for a safe, reliable, and comfortable ride. Our professional drivers ensure a smooth journey, whether you're traveling for business or leisure."
    },
    {
        "name": "Taxi from Mumbai Central to Shirdi",
        "description": "Morya Cab offers hassle-free taxis from Mumbai Central to Shirdi. With well-maintained vehicles and expert drivers, your trip will be seamless and enjoyable."
    },
    {
        "name": "Mumbai Central to Shirdi One Way Taxi",
        "description": "For a one-way trip from Mumbai Central to Shirdi, Morya Cab offers affordable and convenient options. We ensure you get to Shirdi comfortably, without any extra charges for the one-way route."
    },
    {
        "name": "Mumbai Central to Shirdi Taxi Fare",
        "description": "Our Mumbai Central to Shirdi taxi fare is competitive and transparent. There are no hidden charges, and you’ll know the fare upfront when you book your ride."
    },
    {
        "name": "Mumbai Central to Shirdi Cab Service",
        "description": "We offer excellent cab services from Mumbai Central to Shirdi, with timely pick-ups, professional drivers, and comfortable vehicles. Book your taxi now and enjoy a smooth ride."
    },
    {
        "name": "Mumbai Central to Shirdi Drop Taxi",
        "description": "Need a drop taxi from Mumbai Central to Shirdi? Morya Cab provides direct, stress-free travel with a taxi that will take you straight to your destination."
    },
    {
        "name": "Mumbai Central to Shirdi by Cab",
        "description": "Travel in comfort and style with our Mumbai Central to Shirdi cab service. We offer multiple vehicle options like sedans, SUVs, and more, ensuring your travel preferences are met."
    },
    {
        "name": "Mumbai Central to Shirdi Car Hire",
        "description": "Looking for a car hire from Mumbai Central to Shirdi? Morya Cab offers flexible car rental options, including chauffeur-driven services, for your convenience and comfort."
    },
    {
        "name": "Mumbai Central to Shirdi Innova",
        "description": "For a comfortable and spacious journey, our Innova cabs from Mumbai Central to Shirdi are the perfect choice. Ideal for families or small groups, it offers a smooth ride with ample space."
    },
    {
        "name": "Mumbai Central to Shirdi Ertiga",
        "description": "Our Ertiga cabs are an affordable yet comfortable option for your Mumbai Central to Shirdi trip. Perfect for smaller groups, the Ertiga ensures a smooth and comfortable journey."
    },
    {
        "name": "Mumbai Central to Shirdi Round Trip",
        "description": "Planning a round trip from Mumbai Central to Shirdi? Morya Cab offers reliable round-trip taxi services, ensuring you have a comfortable return journey as well."
    },
    {
        "name": "Mumbai to Shirdi Central Taxi",
        "description": "If you're looking for a taxi from Mumbai Central to Shirdi, Morya Cab provides the best taxi services with professional drivers to make your trip comfortable and enjoyable."
    },
    {
        "name": "Taxi Service from Mumbai Central to Shirdi",
        "description": "Morya Cab provides an efficient taxi service for your journey from Mumbai Central to Shirdi, ensuring timely pick-up and drop-off with the highest standard of service."
    },
    {
        "name": "Mumbai Central to Shirdi Online Booking",
        "description": "Booking your Mumbai Central to Shirdi taxi online is easy with Morya Cab. Visit our website or call our support team to book your taxi instantly with a few simple clicks."
    },
    {
        "name": "Mumbai Central to Shirdi Cab Booking",
        "description": "For quick and hassle-free cab booking, choose Morya Cab for your journey from Mumbai Central to Shirdi. We ensure a smooth booking process with no hidden charges."
    },
    {
        "name": "Contact Morya Cab for Your Mumbai Central to Shirdi Taxi Booking",
        "description": "Call us at +91 9371304510 or visit our website for easy booking of your Mumbai Central to Shirdi taxi."
    }
],


tableData: [
    ["Mumbai Central to Shirdi Taxi", "-Taxi from Mumbai Central to Shirdi"],
    ["Mumbai Central to Shirdi One Way Taxi", "-Mumbai Central to Shirdi Taxi Fare"],
    ["Mumbai Central to Shirdi Cab Service", "-Mumbai Central to Shirdi Drop Taxi"],
    ["Mumbai Central to Shirdi by Cab", "-Mumbai Central to Shirdi Car Hire"],
    ["Mumbai Central to Shirdi Innova", "-Mumbai Central to Shirdi Ertiga"],
    ["Mumbai Central to Shirdi Round Trip", "-Mumbai to Shirdi Central Taxi"],
    ["Taxi Service from Mumbai Central to Shirdi", "-Mumbai Central to Shirdi Online Booking"],
    ["Mumbai Central to Shirdi Cab Booking", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of timely travel. Whether you're heading to Shirdi for a religious pilgrimage or a leisure trip, we ensure reliable and punctual pickups from Mumbai Central, so you can start your journey without delays."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer well-maintained vehicles designed for long-distance travel. With comfortable seating, ample legroom, air conditioning, and all the modern amenities, you’ll enjoy a relaxed and smooth ride from Mumbai Central to Shirdi."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced and knowledgeable in handling long-distance routes like Mumbai Central to Shirdi. They ensure your safety, comfort, and timely arrival, offering a professional and hassle-free experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing for the Mumbai Central to Shirdi route, with no hidden charges. Our pricing is transparent and fair, ensuring that you get the best value for your money."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All of our vehicles are regularly maintained and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to provide you with a worry-free journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need an early morning ride or a late-night departure, Morya Cab is available around the clock. Our customer service team is always ready to assist you in booking your Mumbai Central to Shirdi taxi at any time."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your taxi from Mumbai Central to Shirdi is simple with Morya Cab. You can book easily through our website or mobile app, or contact our customer service team for any assistance, making the booking process seamless."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages to suit your needs. Whether you need a stopover or want to explore nearby attractions along the way, let us know, and we’ll tailor the journey based on your preferences."
    }
]












    }

    const faqData = [
        {
          question: "How can I book a Mumbai Central to Shirdi taxi with Morya Cab?",
          answer: "You can easily book a taxi online through our website or mobile app. Alternatively, you can call our customer service team for personalized assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are experienced in handling long-distance routes like Mumbai Central to Shirdi. They ensure a smooth, safe, and timely journey."
        },
        {
          question: "What types of vehicles are available for Mumbai Central to Shirdi travel?",
          answer: "We offer a range of vehicles, including sedans, SUVs, and premium cars, all designed for long-distance comfort and equipped with modern amenities."
        },
        {
          question: "How do I pay for my Mumbai Central to Shirdi taxi rental?",
          answer: "We accept multiple payment options, including cash, credit/debit cards, and online payments via our app, ensuring that paying for your ride is convenient and hassle-free."
        },
        {
          question: "Can I book a round trip from Mumbai Central to Shirdi?",
          answer: "Yes, you can book a round-trip taxi. Simply provide your return details at the time of booking, and we will handle everything to ensure a seamless journey."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges for waiting time or detours will be communicated to you upfront during the booking process, so you can travel without any surprises."
        },
        {
          question: "Can I hire a taxi for sightseeing in Shirdi?",
          answer: "Yes, we offer customized sightseeing packages in Shirdi. You can visit popular spots such as the Sai Baba Temple, Dwarkamai, and other significant locations with a trusted driver."
        },
        {
          question: "What is the luggage allowance for a Mumbai Central to Shirdi taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have additional luggage or specific requirements, please let us know when booking, and we’ll make arrangements accordingly."
        },
        {
          question: "Is Morya Cab available for corporate travel from Mumbai Central to Shirdi?",
          answer: "Yes, we provide corporate travel services for trips from Mumbai Central to Shirdi. Whether it’s a team outing or business-related travel, we can offer customized packages to meet your needs."
        },
        {
          question: "Why should I choose Morya Cab for Mumbai Central to Shirdi travel?",
          answer: "Morya Cab is known for its reliable service, comfortable vehicles, experienced drivers, and transparent pricing. We ensure that your journey from Mumbai Central to Shirdi is safe, comfortable, and affordable."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Vinay Joshi',
          role: 'Business Traveler',
          review: 'Our journey from Mumbai Central to Shirdi was smooth and comfortable. The driver was professional, and the vehicle was clean and well-maintained. I highly recommend Morya Cab for any long-distance trips!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Anjali Deshmukh',
          role: 'Family Traveler',
          review: 'We used Morya Cab for our family trip to Shirdi. The vehicle was spacious, and the driver was friendly and knowledgeable about the route. It was a peaceful and comfortable ride. Great service!',
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
        "description": "Book your Mumbai Central to Shirdi taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510 for bookings!",
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
          "https://moryacab.com/img/mumbai-to-shirdi-taxi.jpg",
          "https://moryacab.com/img/mumbai-to-shirdi-cab-service.jpg"
        ],
        "priceRange": "₹3500 - ₹5000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/mumbai-central-to-shirdi-taxi-service",
          "priceCurrency": "INR",
          "price": 4500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "reviewCount": 180
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Gupta"
            },
            "datePublished": "2024-02-05",
            "reviewBody": "The ride from Mumbai Central to Shirdi was smooth. The vehicle was clean and the driver was professional. I would recommend this service."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Reddy"
            },
            "datePublished": "2024-09-10",
            "reviewBody": "Excellent service, prompt pick-up from Mumbai Central, and the journey was very comfortable. I would definitely use Morya Cab again for my future trips."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Mumbai Central to Shirdi Taxi Service",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.8732,
            "longitude": 74.5865
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/mumbai-central-to-shirdi-taxi-service"
        },
        "keywords": "mumbai central to shirdi taxi, taxi from mumbai central to shirdi, mumbai central to shirdi one way taxi, mumbai central to shirdi taxi fare, mumbai central to shirdi cab service, mumbai central to shirdi drop taxi, mumbai central to shirdi by cab, mumbai central to shirdi car hire, mumbai central to shirdi innova, mumbai central to shirdi ertiga, mumbai central to shirdi round trip, mumbai to shirdi central taxi, taxi service from mumbai central to shirdi, mumbai central to shirdi online booking, mumbai central to shirdi cab booking"
      };


    return (
        <div>
<UsePageTracking/>
<Helmet>
        <title>Mumbai Central to Shirdi Taxi | Affordable & Reliable Cab Services | Call: +91 9371304510</title>
        <meta
          name="description"
          content="Book your Mumbai Central to Shirdi taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more! Call +91 9371304510."
        />
        <meta name="keywords" content="mumbai central to shirdi taxi, cab services, taxi booking, affordable taxi" />
        <meta property="og:title" content="Mumbai Central to Shirdi Taxi | Morya Cab Services" />
        <meta property="og:description" content="Book your Mumbai Central to Shirdi taxi with Morya Cab. Affordable, reliable one-way taxis, drop-off services, and more!" />
        <meta property="og:url" content="https://moryacab.com/mumbai-central-to-shirdi-taxi-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/mumbai-to-shirdi-taxi.jpg" />
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
                            <img src='/images/keyword/31.jpg' alt='img' />
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

export default Mumbaicentraltoshirdi;