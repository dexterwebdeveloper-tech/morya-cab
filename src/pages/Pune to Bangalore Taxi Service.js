
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetobangloretaxiservice() {



    const cardData =
    {
        keyword: 'Pune to Bangalore Taxi ',
        heading: 'Morya Cabs: Pune to Bangalore Taxi ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Bangalore. Whether you are traveling for business, leisure, or any other purpose, our professional drivers and well-maintained vehicles ensure a smooth and safe journey. The distance from Pune to Bangalore is approximately 840-880 km, and the journey typically takes around 13 to 15 hours by road. Enjoy a hassle-free trip with premium amenities and exceptional customer service.',

        top: 'Top Places to Visit in Bangalore with Morya Cabs:',

"topPlaces": [
    {
        "title": "Bangalore Palace",
        "description": "Inspired by England's Windsor Castle, Bangalore Palace is a grand architectural marvel with stunning interiors. Visitors can explore the palace's historical artifacts, artwork, and beautiful grounds."
    },
    {
        "title": "Lalbagh Botanical Garden",
        "description": "A 240-acre garden, Lalbagh is one of the oldest botanical gardens in India and features a wide variety of plants, flowers, and trees. It is famous for its annual flower show and the Glass House, modeled after London’s Crystal Palace."
    },
    {
        "title": "Cubbon Park",
        "description": "A lush green park located in the heart of the city, Cubbon Park is perfect for nature lovers, joggers, and anyone seeking a peaceful retreat from the busy city life. It offers wide pathways, peaceful corners, and lovely trees."
    },
    {
        "title": "Vidhana Soudha",
        "description": "An architectural masterpiece, Vidhana Soudha is the seat of the Karnataka State Legislature. The imposing structure is an excellent example of Neo-Dravidian architecture, and it’s a must-see for those interested in history and architecture."
    },
    {
        "title": "ISKCON Bangalore",
        "description": "The International Society for Krishna Consciousness (ISKCON) Temple in Bangalore is one of the largest temples dedicated to Lord Krishna. The temple complex is serene, and visitors can enjoy spiritual discourses, chanting, and prasad."
    },
    {
        "title": "Nandi Hills",
        "description": "A popular getaway spot located just outside Bangalore, Nandi Hills offers stunning views of the surrounding landscapes. It’s known for its cool weather, temples, and excellent trekking opportunities."
    },
    {
        "title": "Bannerghatta National Park",
        "description": "Located on the outskirts of Bangalore, Bannerghatta National Park is home to a variety of wildlife, including tigers, lions, elephants, and bears. The park features a zoo, a safari, and a butterfly park, making it a fun place for families."
    },
    {
        "title": "Chinnaswamy Stadium",
        "description": "A renowned cricket stadium, Chinnaswamy Stadium is home to the Royal Challengers Bangalore (RCB) and hosts international cricket matches. If you're a cricket fan, this is a must-visit spot."
    },
    {
        "title": "Ranganathittu Bird Sanctuary",
        "description": "Located a bit outside the city, Ranganathittu Bird Sanctuary is a haven for birdwatchers. The sanctuary is home to a variety of migratory birds and is set along the scenic Kaveri River."
    },
    {
        "title": "Commercial Street",
        "description": "For shopping enthusiasts, Commercial Street is one of the busiest shopping areas in Bangalore. It offers a wide variety of items, from clothes and jewelry to home décor and handicrafts."
    }
],


"services": [
    {
      "name": "Pune to Bangalore Taxi Service",
      "description": "Morya Cab provides reliable and comfortable taxi services for your journey from Pune to Bangalore. Whether you're traveling for business or leisure, we guarantee a smooth and pleasant ride."
    },
    {
      "name": "Pune to Bangalore Taxi Booking",
      "description": "Booking a taxi for your Pune to Bangalore trip is easy with Morya Cab. You can book online or via phone, making the process quick and hassle-free."
    },
    {
      "name": "Pune to Bangalore Car Rental",
      "description": "Morya Cab offers flexible car rental services for your Pune to Bangalore journey. Choose from a wide range of vehicles, including luxury options and spacious cars, for a comfortable ride."
    },
    {
      "name": "Pune to Bangalore Taxi Rates",
      "description": "Morya Cab offers competitive and transparent taxi rates for your journey from Pune to Bangalore. We ensure that you get the best value without compromising on comfort."
    },
    {
      "name": "Pune to Bangalore Cab Charges",
      "description": "We provide clear and upfront charges for your trip from Pune to Bangalore. No hidden fees — you’ll know the exact cost of your journey in advance."
    },
    {
      "name": "Pune to Bangalore Cab Pricing",
      "description": "Morya Cab offers fair and competitive pricing for your Pune to Bangalore journey. We provide excellent service without any surprises when it comes to cost."
    },
    {
      "name": "Pune to Bangalore Private Car Hire",
      "description": "For a more private and comfortable journey, Morya Cab offers private car hire services for your Pune to Bangalore trip. Travel at your own pace with a professional driver."
    },
    {
      "name": "Pune to Bangalore Cab Cost",
      "description": "The cost of your journey from Pune to Bangalore with Morya Cab is affordable and transparent. We ensure the best prices for a smooth and stress-free experience."
    },
    {
      "name": "Pune to Bangalore Taxi Service Charges",
      "description": "Morya Cab offers reliable taxi service charges for your trip. We provide the best quality service while keeping the cost of your ride reasonable and clear."
    },
    {
      "name": "Pune to Bangalore Travel Cabs",
      "description": "Morya Cab offers a variety of travel cabs for your Pune to Bangalore trip, including both economy and luxury options, ensuring a comfortable and convenient ride."
    },
    {
      "name": "Pune to Bangalore Taxi",
      "description": "Morya Cab is the perfect choice for a reliable taxi service from Pune to Bangalore. Our experienced drivers and well-maintained vehicles will make your trip enjoyable and stress-free."
    },
    {
      "name": "Pune to Bangalore Cab",
      "description": "Looking for a cab from Pune to Bangalore? Morya Cab offers a wide range of cabs for your journey. Choose the right one for you and enjoy a safe, reliable ride."
    },
    {
      "name": "Pune to Bangalore Cab Booking",
      "description": "Book your Pune to Bangalore cab with Morya Cab for a seamless journey. We provide easy booking options to suit your convenience."
    },
    {
      "name": "Pune to Bangalore Cab Service",
      "description": "Morya Cab offers excellent cab services for your trip from Pune to Bangalore. Whether for a one-way trip or a round trip, we ensure comfort and reliability."
    },
    {
      "name": "Pune to Bangalore Taxi Fare",
      "description": "Morya Cab offers competitive taxi fares for your Pune to Bangalore journey. We ensure that you get the best fare without compromising on quality."
    },
    {
      "name": "Taxi from Pune to Bangalore",
      "description": "Choose Morya Cab for your taxi from Pune to Bangalore. We provide reliable, professional services with comfortable rides and friendly drivers."
    },
    {
      "name": "Pune to Bangalore Innova Cab",
      "description": "For a comfortable and premium experience, Morya Cab offers Innova cabs for your Pune to Bangalore trip. Enjoy extra space and luxury for your journey."
    },
    {
      "name": "Pune to Bangalore Tempo Traveller on Rent",
      "description": "Morya Cab offers tempo traveller rentals for your group journey from Pune to Bangalore. Travel in comfort and style with ample space for all passengers."
    },
    {
      "name": "Pune to Bangalore Sedan Car on Rent",
      "description": "Morya Cab provides sedan car rentals for your Pune to Bangalore trip. Enjoy a smooth and comfortable ride in our well-maintained vehicles."
    },
    {
      "name": "Pune to Bangalore Ertiga Car on Rent",
      "description": "If you’re looking for a budget-friendly option, Morya Cab offers Ertiga car rentals for your Pune to Bangalore journey. Enjoy a comfortable ride with your family or friends."
    },
    {
      "name": "Pune to Bangalore Swift Car on Rent",
      "description": "Morya Cab offers Swift cars on rent for your Pune to Bangalore trip. Travel comfortably in a compact car that is perfect for a small group."
    },
    {
      "name": "Pune to Bangalore Mini Bus on Rent",
      "description": "Morya Cab provides mini bus rentals for larger groups traveling from Pune to Bangalore. With spacious seating, it's an ideal choice for group tours."
    },
    {
      "name": "Pune to Bangalore Tempo Traveller on Rent",
      "description": "Looking for a larger vehicle? Morya Cab offers Tempo Traveller rentals for your Pune to Bangalore journey. Perfect for group travel, ensuring comfort and convenience."
    }
  ]
,


tableData: [
    ["Pune to Bangalore Taxi Service", "-Pune to Bangalore Taxi Booking"],
    ["Pune to Bangalore Car Rental", "-Pune to Bangalore Taxi Rates"],
    ["Pune to Bangalore Cab Charges", "-Pune to Bangalore Cab Pricing"],
    ["Pune to Bangalore Private Car Hire", "-Pune to Bangalore Cab Cost"],
    ["Pune to Bangalore Taxi Service Charges", "-Pune to Bangalore Travel Cabs"],
    ["Pune to Bangalore Taxi", "-Pune to Bangalore Cab"],
    ["Pune to Bangalore Cab Booking", "-Pune to Bangalore Cab Service"],
    ["Pune to Bangalore Taxi Fare", "-Taxi from Pune to Bangalore"],
    ["Pune to Bangalore Innova Cab", "-Pune to Bangalore Tempo Traveller on Rent"],
    ["Pune to Bangalore Sedan Car on Rent", "-Pune to Bangalore Ertiga Car on Rent"],
    ["Pune to Bangalore Swift Car on Rent", "-Pune to Bangalore Mini Bus on Rent"],
    ["Pune to Bangalore Tempo Traveller on Rent", "-Pune to Bangalore"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab understands the importance of your time. Whether it's for business, family travel, or a leisure trip, we ensure timely pickups and drop-offs. Our commitment to punctuality guarantees that you’ll reach Bangalore without any delays."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a variety of vehicles for your journey to Bangalore, including sedans, SUVs, and premium cars. All vehicles are well-maintained, equipped with air conditioning, comfortable seating, and enough luggage space, ensuring a relaxing and pleasant ride."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced, well-trained in long-distance travel, and familiar with the best routes to Bangalore. They are professional, courteous, and prioritize your comfort and safety throughout the entire journey."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for your Pune to Bangalore taxi service. We provide upfront pricing with no hidden charges, so you can rest assured you're getting the best value for your trip."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "We take your safety seriously. Our vehicles come equipped with modern safety features, including airbags, seat belts, and GPS tracking. You can rely on us for a secure and comfortable journey every time you travel to Bangalore."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you're planning an early morning departure or a late-night return, Morya Cab is available around the clock. We cater to your needs at any time of the day or night, ensuring convenience no matter your schedule."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Bangalore taxi with Morya Cab is simple and straightforward. You can book online through our website or mobile app, or reach out to our customer service team for any assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're traveling for business, leisure, or sightseeing, we offer customized travel packages to suit your needs. Let us know your preferences, and we’ll tailor the trip to make it a memorable experience."
    }
]















    }

    const faqData = [
        {
          question: "How can I book a taxi from Pune to Bangalore with Morya Cab?",
          answer: "Booking is easy! You can book online through our website or app, or contact our customer service team for assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are highly experienced and familiar with the best routes for long-distance travel, ensuring a smooth and safe journey to Bangalore."
        },
        {
          question: "What types of vehicles are available for the Pune to Bangalore trip?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all designed for comfort on long trips."
        },
        {
          question: "How do I pay for my Pune to Bangalore taxi rental?",
          answer: "We offer several payment options, including cash, credit/debit cards, and online payment via our app, giving you the flexibility to choose your preferred method."
        },
        {
          question: "Can I book a round trip from Pune to Bangalore?",
          answer: "Yes, you can easily arrange a round trip. Just provide us with your return details, and we will make all the necessary arrangements."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges, such as for waiting or detours, will be communicated to you upfront. We ensure complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Bangalore?",
          answer: "Yes, we offer sightseeing tours in Bangalore. Explore famous attractions like Lalbagh Botanical Garden, Bangalore Palace, and more with a comfortable vehicle."
        },
        {
          question: "What is the luggage allowance for a Pune to Bangalore taxi?",
          answer: "Our vehicles have ample space for standard luggage. If you have extra luggage or special requirements, please inform us during booking, and we’ll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Bangalore?",
          answer: "Yes, we offer corporate travel services, providing reliable and comfortable transportation for business trips or team outings."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Bangalore travel?",
          answer: "Morya Cab ensures a reliable, comfortable, and safe journey with professional drivers, well-maintained vehicles, and transparent pricing. We prioritize your comfort and convenience for a stress-free trip."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Kunal Verma',
          role: 'Traveler',
          review: "We had an excellent experience with Morya Cab on our trip to Bangalore. The car was clean, spacious, and comfortable, and the driver was polite and professional. The journey was smooth, and we reached Bangalore on time.",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Anjali Patel',
          role: 'Family Traveler',
          review: "Our family trip to Bangalore was fantastic thanks to Morya Cab. The vehicle was perfect for our group, and the driver was very accommodating. We’ll definitely choose them for future trips!",
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
        "name": "Pune to Bangalore Taxi Service",
        "description": "Reliable and affordable taxi services from Pune to Bangalore. Book cabs, private cars, and rental options like Innova, Tempo Traveller, and more.",
        "provider": {
          "@type": "Organization",
          "name": "Pune Bangalore Cabs",
          "url": "https://www.punetobangalorecabs.com",
          "telephone": "+91-8888888888",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 10, Pune Central, Pune",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411001",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 7500,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Pune"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "7500",
            "unitCode": "DAY",
            "description": "Taxi service from Pune to Bangalore per day"
          }
        },
        "keywords": "Pune to Bangalore Taxi Service, Pune to Bangalore Taxi Booking, Pune to Bangalore Car Rental, Pune to Bangalore Taxi Rates, Pune to Bangalore Cab Charges, Pune to Bangalore Cab Pricing, Pune to Bangalore Private Car Hire, Pune to Bangalore Cab Cost, Pune to Bangalore Taxi Service Charges, Pune to Bangalore Travel Cabs, Pune to Bangalore Taxi, Pune to Bangalore Cab, Pune to Bangalore Cab Booking, Pune to Bangalore Taxi Fare, Taxi from Pune to Bangalore, Pune to Bangalore Innova Cab, Pune to Bangalore Tempo Traveller on Rent, Pune to Bangalore Sedan Car on Rent, Pune to Bangalore Ertiga Car on Rent, Pune to Bangalore Swift Car on Rent, Pune to Bangalore Mini Bus on Rent"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Bangalore Taxi Service | Call: +91 9359401610</title>
  <meta
    name="description"
    content="Reliable and affordable taxi services from Pune to Bangalore. Book cabs, private cars, and rental options like Innova, Tempo Traveller, and more."
  />
  <meta
    name="keywords"
    content="Pune to Bangalore Taxi Service, Pune to Bangalore Taxi Booking, Pune to Bangalore Car Rental, Pune to Bangalore Taxi Rates, Pune to Bangalore Cab Charges, Pune to Bangalore Cab Pricing, Pune to Bangalore Private Car Hire, Pune to Bangalore Cab Cost, Pune to Bangalore Taxi Service Charges, Pune to Bangalore Travel Cabs, Pune to Bangalore Taxi, Pune to Bangalore Cab, Pune to Bangalore Cab Booking, Pune to Bangalore Taxi Fare, Taxi from Pune to Bangalore, Pune to Bangalore Innova Cab, Pune to Bangalore Tempo Traveller on Rent, Pune to Bangalore Sedan Car on Rent, Pune to Bangalore Ertiga Car on Rent, Pune to Bangalore Swift Car on Rent, Pune to Bangalore Mini Bus on Rent"
  />
  <meta property="og:title" content="Pune to Bangalore Taxi Service | Affordable Cabs & Car Rentals for Long-Distance Travel" />
  <meta
    property="og:description"
    content="Reliable and affordable taxi services from Pune to Bangalore. Book cabs, private cars, and rental options like Innova, Tempo Traveller, and more."
  />
  <meta property="og:url" content="https://www.punetobangalorecabs.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.punetobangalorecabs.com/images/pune-to-bangalore-taxi.jpg" />
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
                            <img src='/images/keyword/84.jpg' alt='img' />
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

export default Punetobangloretaxiservice;