
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetopanvelcabs() {



    const cardData =
    {
        keyword: 'Pune to Panvel Taxi ',
        heading: 'Morya Cabs: Pune to Panvel Taxi ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Panvel. Whether you are traveling for business, leisure, or any other purpose, our professional drivers and well-maintained vehicles ensure a smooth and comfortable journey. The distance between Pune and Panvel is approximately 150-170 km, and the journey usually takes around 3 to 4 hours by road. Enjoy a hassle-free, relaxing ride with top-class amenities and customer-focused service.',

        top: 'Top Places to Visit in Panvel with Morya Cabs:',

"topPlaces": [
    {
        "title": "Karnala Fort",
        "description": "Located just a short drive from Panvel, Karnala Fort is an excellent spot for trekking and nature lovers. The fort offers panoramic views of the surrounding hills and forests, making it a popular weekend getaway."
    },
    {
        "title": "Panvel Lake",
        "description": "Panvel Lake is a scenic spot for picnics and relaxation. Surrounded by lush greenery, it's an ideal place for a peaceful day out, especially during the monsoon season when the area becomes lush and vibrant."
    },
    {
        "title": "Sree Ballaleshwar Ashtavinayak Temple",
        "description": "A significant temple dedicated to Lord Ganesha, the Sree Ballaleshwar Temple is part of the Ashtavinayak pilgrimage circuit. The temple is known for its spiritual importance and beautiful surroundings."
    },
    {
        "title": "Matheran",
        "description": "Matheran is a popular hill station located near Panvel. Known for its cool climate, scenic viewpoints, and tranquil environment, it’s perfect for nature walks, trekking, and relaxing away from the hustle and bustle of city life."
    },
    {
        "title": "Phansad Wildlife Sanctuary",
        "description": "Situated a bit further from Panvel, Phansad Wildlife Sanctuary is home to a variety of flora and fauna. The sanctuary is perfect for wildlife enthusiasts and those interested in bird watching and nature trails."
    },
    {
        "title": "Rajmachi Fort",
        "description": "A historic fort located near Panvel, Rajmachi Fort is a popular trekking destination. Offering stunning views of the Sahyadri range, it’s ideal for adventure lovers and history buffs."
    },
    {
        "title": "Vashi Bridge",
        "description": "The Vashi Bridge is an iconic landmark connecting Navi Mumbai to the mainland. It’s not a traditional tourist spot but offers picturesque views of the surroundings, especially during the evening."
    },
    {
        "title": "Belapur Fort",
        "description": "A historical fort located in Navi Mumbai, close to Panvel, Belapur Fort offers a glimpse into the region’s past. The fort is in ruins but still attracts history enthusiasts and hikers."
    },
    {
        "title": "Elephanta Caves",
        "description": "Though located a bit further from Panvel, the Elephanta Caves, which are a UNESCO World Heritage Site, are worth a visit. These ancient rock-cut temples dedicated to Lord Shiva are a must-see for history and culture enthusiasts."
    },
    {
        "title": "Khandala and Lonavala",
        "description": "Khandala and Lonavala are hill stations close to Panvel. Famous for their lush green landscapes, waterfalls, and pleasant weather, they’re great spots for a day trip."
    }
],


"services": [
    {
      "name": "Pune to Panvel Cabs",
      "description": "Morya Cab offers reliable and comfortable cab services for your journey from Pune to Panvel. Whether you are traveling for business or leisure, we ensure a smooth and pleasant ride."
    },
    {
      "name": "Pune to Panvel Taxi Booking",
      "description": "Booking a taxi for your Pune to Panvel journey is easy with Morya Cab. You can book your ride online or via phone for a convenient and hassle-free experience."
    },
    {
      "name": "Pune to Panvel Car Rental",
      "description": "Morya Cab provides flexible car rental services for your Pune to Panvel trip. Choose from a variety of vehicles based on your preference, and travel at your own pace with a professional driver."
    },
    {
      "name": "Pune to Panvel Taxi Rates",
      "description": "Morya Cab offers competitive and transparent taxi rates for your Pune to Panvel trip. We ensure that you get affordable pricing without compromising on comfort or service quality."
    },
    {
      "name": "Pune to Panvel Cab Charges",
      "description": "We offer upfront and transparent charges for your Pune to Panvel journey. With Morya Cab, you can enjoy peace of mind knowing the total cost before you begin your trip."
    },
    {
      "name": "Pune to Panvel Cab Pricing",
      "description": "Morya Cab provides fair and competitive pricing for your trip to Panvel. We ensure that our customers get the best value for their journey, making it a cost-effective choice."
    },
    {
      "name": "Pune to Panvel Private Car Hire",
      "description": "For a more private and comfortable journey, Morya Cab offers private car hire services for your Pune to Panvel trip. Enjoy a personalized travel experience with a well-maintained vehicle and professional driver."
    },
    {
      "name": "Pune to Panvel Cab Cost",
      "description": "Morya Cab offers clear and upfront costs for your trip from Pune to Panvel. Whether you’re planning a short or long journey, we make sure there are no hidden fees, and you know the price in advance."
    },
    {
      "name": "Pune to Panvel Taxi Service",
      "description": "Morya Cab provides reliable taxi services for your Pune to Panvel journey. Our professional drivers and well-maintained vehicles ensure a smooth and enjoyable ride every time."
    },
    {
      "name": "Pune to Panvel Travel Cabs",
      "description": "Morya Cab offers travel cabs for your convenience when traveling from Pune to Panvel. Our cabs are comfortable, clean, and perfect for making your travel experience pleasant."
    },
    {
      "name": "Pune to Panvel Cab Booking",
      "description": "Booking a cab for your journey from Pune to Panvel is simple with Morya Cab. Whether you prefer online booking or calling our customer service, we offer flexibility for your convenience."
    },
    {
      "name": "Pune to Panvel Cab Fare",
      "description": "Morya Cab offers clear and affordable cab fares for your trip to Panvel. Our pricing is straightforward, and there are no hidden charges, ensuring a stress-free experience."
    },
    {
      "name": "Pune to Panvel Cab One-Way",
      "description": "Morya Cab offers one-way cab services for your Pune to Panvel journey. Whether you need a one-way trip or a round trip, we ensure timely and efficient service to meet your needs."
    },
    {
      "name": "Pune to Panvel Cab Price",
      "description": "Get the best price for your Pune to Panvel journey with Morya Cab. Our competitive pricing and top-quality service make us the perfect choice for your trip."
    },
    {
      "name": "Pune to Panvel Distance Taxi",
      "description": "Morya Cab offers taxi services based on the distance for your journey from Pune to Panvel. We provide accurate fare estimates based on the distance, so you know the cost upfront."
    },
    {
      "name": "Pune to Panvel Taxi",
      "description": "For a smooth and comfortable ride, Morya Cab offers taxi services from Pune to Panvel. Our taxis are well-maintained, and our drivers are professional and experienced, ensuring a safe trip."
    },
    {
      "name": "Pune to Panvel Taxi Fare",
      "description": "Morya Cab provides transparent taxi fare rates for your Pune to Panvel trip. We offer competitive prices, so you can travel affordably without compromising on comfort."
    },
    {
      "name": "Pune to Panvel Tempo Traveller on Rent",
      "description": "Morya Cab provides tempo traveller rentals for group travel from Pune to Panvel. Enjoy a spacious, comfortable journey with family or friends in our well-maintained tempo travellers."
    },
    {
      "name": "Pune to Navi Mumbai Cab",
      "description": "Morya Cab also offers taxi services from Pune to Navi Mumbai, ensuring a comfortable ride for your travel to this nearby city. Enjoy a seamless ride with professional drivers."
    },
    {
      "name": "Pune to Navi Mumbai Airport Cab",
      "description": "Traveling to Navi Mumbai Airport? Morya Cab offers direct and reliable taxi services to Navi Mumbai Airport from Pune, ensuring that you reach your destination on time."
    },
    {
      "name": "Pune to Navi Mumbai Airport Taxi Service",
      "description": "For a hassle-free journey to Navi Mumbai Airport, book a taxi with Morya Cab. We provide efficient taxi services to ensure you arrive at the airport comfortably and on time."
    }
  ]
,


tableData: [
    ["Pune to Panvel Cabs", "-Pune to Panvel Taxi Booking"],
    ["Pune to Panvel Car Rental", "-Pune to Panvel Taxi Rates"],
    ["Pune to Panvel Cab Charges", "-Pune to Panvel Cab Pricing"],
    ["Pune to Panvel Private Car Hire", "-Pune to Panvel Cab Cost"],
    ["Pune to Panvel Taxi Service", "-Pune to Panvel Travel Cabs"],
    ["Pune to Panvel Cabs", "-Pune to Panvel Cab Booking"],
    ["Pune to Panvel Cab Fare", "-Pune to Panvel Cab One Way"],
    ["Pune to Panvel Cab Price", "-Pune to Panvel Distance Taxi"],
    ["Pune to Panvel Taxi", "-Pune to Panvel Taxi Fare"],
    ["Pune to Panvel Tempo Traveller on Rent", "-Pune to Navi Mumbai Cab"],
    ["Pune to Navi Mumbai Airport Cab", "-Pune to Navi Mumbai Airport Taxi Service"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we prioritize punctuality and reliability. Whether you're traveling to Panvel for a business meeting, a family trip, or just a quick getaway, we ensure timely pickups and smooth drop-offs, making your journey stress-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a variety of well-maintained vehicles, including sedans, SUVs, and premium cars, ensuring you have a comfortable and relaxing ride. With air conditioning, ample seating, and sufficient luggage space, your trip to Panvel will be a smooth experience."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly skilled in handling long-distance trips and know the best routes to Panvel. They are courteous, professional, and always prioritize your safety and comfort throughout the journey."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for your Pune to Panvel trip. There are no hidden charges, and we provide a clear breakdown of costs, ensuring you know exactly what to expect."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All our vehicles come with modern safety features like airbags, seat belts, and GPS tracking to ensure a secure and comfortable journey to Panvel."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates round the clock. Whether you need an early morning ride or a late-night return, our team is available 24/7 to meet your travel needs."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Panvel taxi with Morya Cab is simple and convenient. You can book online through our website or app, or contact our customer service team for assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages to suit your preferences, whether you’re traveling for business, leisure, or sightseeing in Panvel. We’ll ensure your trip is as enjoyable and memorable as possible."
    }
]













    }

    const faqData = [
        {
          question: "How can I book a taxi from Pune to Panvel with Morya Cab?",
          answer: "You can easily book a taxi online through our website or mobile app, or contact our customer service team for assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are experienced in long-distance travel and are familiar with the best routes to Panvel, ensuring a safe and smooth journey."
        },
        {
          question: "What types of vehicles are available for the Pune to Panvel trip?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all designed for comfort and convenience during long trips."
        },
        {
          question: "How do I pay for my Pune to Panvel taxi rental?",
          answer: "We offer flexible payment options, including cash, credit/debit cards, and online payment via our app, so you can choose the most convenient method for you."
        },
        {
          question: "Can I book a round trip from Pune to Panvel?",
          answer: "Yes, round trips are available. Simply provide us with the details of your return journey, and we’ll take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges, such as for waiting time or detours, will be communicated upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Panvel?",
          answer: "Yes, we offer sightseeing trips in Panvel. Explore local attractions like Karnala Fort and the beautiful surroundings with a comfortable vehicle."
        },
        {
          question: "What is the luggage allowance for a Pune to Panvel taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have extra luggage or special requirements, please inform us during booking, and we’ll make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Panvel?",
          answer: "Yes, we offer corporate travel services, including business-related trips, team outings, and more. Our vehicles and drivers ensure a professional experience for corporate travel."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Panvel travel?",
          answer: "Morya Cab ensures a comfortable, safe, and reliable journey with professional drivers, well-maintained vehicles, and transparent pricing. We prioritize your comfort and convenience for a stress-free trip."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Arvind Patil',
          role: 'Traveler',
          review: "I had a smooth and pleasant trip to Panvel with Morya Cab. The driver was on time, the car was clean and spacious, and the journey was very comfortable. Highly recommended!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Neelam Deshmukh',
          role: 'Traveler',
          review: "Our family trip to Panvel was great, thanks to Morya Cab. The vehicle was spacious, clean, and the driver was very polite and professional. We will definitely use their services again!",
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
        "name": "Pune to Panvel Cabs",
        "description": "Reliable taxi services for travel between Pune and Panvel. Available for one-way, round trip, and multiple vehicle options like Innova Crysta, Tempo Traveller, and more.",
        "provider": {
          "@type": "Organization",
          "name": "Pune Panvel Cabs",
          "url": "https://www.punepanvelcabs.com",
          "telephone": "+91-9999999999",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 15, Pune Mall, Pune",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411002",
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
            "description": "Taxi service from Pune to Panvel per day"
          }
        },
        "keywords": "Pune to Panvel Cabs, Pune to Panvel Taxi Booking, Pune to Panvel Car Rental, Pune to Panvel Taxi Rates, Pune to Panvel Cab Charges, Pune to Panvel Cab Pricing, Pune to Panvel Private Car Hire, Pune to Panvel Cab Cost, Pune to Panvel Taxi Service, Pune to Panvel Travel Cabs, Pune to Panvel Cabs, Pune to Panvel Cab Booking, Pune to Panvel Cab Fare, Pune to Panvel Cab One Way, Pune to Panvel Cab Price, Pune to Panvel Distance Taxi, Pune to Panvel Taxi, Pune to Panvel Taxi Fare, Pune to Panvel Tempo Traveller on Rent, Pune to Navi Mumbai Cab, Pune to Navi Mumbai Airport Cab, Pune to Navi Mumbai Airport Taxi Service"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Panvel Cabs | Call: +91 9371304510 </title>
  <meta
    name="description"
    content="Reliable taxi services for travel between Pune and Panvel. Available for one-way, round trip, and multiple vehicle options like Innova Crysta, Tempo Traveller, and more."
  />
  <meta
    name="keywords"
    content="Pune to Panvel Cabs, Pune to Panvel Taxi Booking, Pune to Panvel Car Rental, Pune to Panvel Taxi Rates, Pune to Panvel Cab Charges, Pune to Panvel Cab Pricing, Pune to Panvel Private Car Hire, Pune to Panvel Cab Cost, Pune to Panvel Taxi Service, Pune to Panvel Travel Cabs, Pune to Panvel Cabs, Pune to Panvel Cab Booking, Pune to Panvel Cab Fare, Pune to Panvel Cab One Way, Pune to Panvel Cab Price, Pune to Panvel Distance Taxi, Pune to Panvel Taxi, Pune to Panvel Taxi Fare, Pune to Panvel Tempo Traveller on Rent, Pune to Navi Mumbai Cab, Pune to Navi Mumbai Airport Cab, Pune to Navi Mumbai Airport Taxi Service"
  />
  <meta property="og:title" content="Pune to Panvel Cabs | Affordable Taxi Service for One-Way & Round Trip" />
  <meta
    property="og:description"
    content="Reliable taxi services for travel between Pune and Panvel. Available for one-way, round trip, and multiple vehicle options like Innova Crysta, Tempo Traveller, and more."
  />
  <meta property="og:url" content="https://www.punepanvelcabs.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.punepanvelcabs.com/images/panvel-taxi.jpg" />
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
                            <img src='/images/keyword/82.jpg' alt='img' />
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

export default Punetopanvelcabs;