
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetoimagicataxi() {



    const cardData =
    {
        keyword: 'Pune to Imagica Taxi ',
        heading: 'Morya Cabs: Pune to Imagica Taxi ',
        headingDescription: 'Morya Cabs offers reliable and comfortable taxi services from Pune to Imagica, ensuring a smooth and hassle-free ride to one of India"s best amusement parks. Whether you are traveling with family, friends, or colleagues, our well-maintained fleet and professional drivers provide a safe and enjoyable journey. Imagica is approximately 90 km from Pune, and the trip takes around 2 to 3 hours by road.',

        top: 'Top Places to Visit in Imagica with Morya Cabs',

        "topPlaces": [
    {
        "title": "Adlabs Imagica Theme Park",
        "description": "Imagica Theme Park is the ultimate entertainment hub with thrilling rides, live shows, and attractions for all age groups. Experience high-speed roller coasters like Nitro, get spooked at the haunted Salimgarh ride, or enjoy Deep Space, India’s only indoor dark roller coaster. The park offers fun-filled activities for families, kids, and thrill-seekers alike, featuring entertainment zones, interactive shows, and engaging performances throughout the day. Whether you love adventure or magical storytelling, Imagica Theme Park guarantees a full day of excitement."
    },
    {
        "title": "Imagica Water Park",
        "description": "A paradise for water lovers, Imagica Water Park features thrilling water slides like Loopy Woopy, high-speed splash rides, and a giant wave pool that mimics the ocean. The lazy river offers a relaxing float, while the kiddie play area ensures fun for the little ones. With vibrant tropical-themed decor and plenty of shaded lounges, it’s a must-visit destination for families, friends, and adventure enthusiasts looking to beat the heat while enjoying an adrenaline rush."
    },
    {
        "title": "Imagica Snow Park",
        "description": "Experience a chilling winter wonderland at Imagica Snow Park, where sub-zero temperatures create a real snowy atmosphere. Engage in snowball fights, glide down ice slides, and explore an igloo designed for visitors to experience the Arctic indoors. The park features an ice bar, where you can sip on hot chocolate or mocktails in a unique frosty setting. Whether you want to build a snowman, experience artificial snowfall, or enjoy winter activities in Maharashtra, this park is a must-visit."
    },
    {
        "title": "House of Stars",
        "description": "Bollywood lovers can step into the House of Stars, an immersive experience featuring life-size replicas of iconic Bollywood movie sets and characters. Take photos with wax statues of legendary actors, explore detailed film sets, and relive famous cinematic moments through interactive exhibits. This attraction provides a unique behind-the-scenes look into Indian cinema, making it a paradise for film enthusiasts and selfie lovers alike."
    },
    {
        "title": "Eyelusion – The Trick Eye Museum",
        "description": "Step into a world of mind-bending optical illusions at Eyelusion, where interactive 3D artworks trick your senses. Walk into rooms that distort perspective, create gravity-defying photos, and interact with paintings that seem to come alive. This museum is perfect for those who love creativity, photography, and visual illusions, offering countless opportunities to capture unbelievable images and share fun moments with friends and family."
    },
    {
        "title": "Grand Imagica Parade",
        "description": "Enjoy a mesmerizing street parade that brings the magic of Imagica to life with colorful floats, energetic dancers, acrobats, and costumed performers. The Grand Imagica Parade takes place in the evening, featuring beloved Imagica characters, fairy-tale creatures, and lively music that creates a festive atmosphere. It's a must-watch event that delights children and adults, offering a memorable end to an exciting day at the park."
    },
    {
        "title": "I for India - 360° Experience",
        "description": "Take a breathtaking virtual tour of India's most iconic locations through 'I for India,' a 360-degree flying theater experience. This attraction simulates the feeling of soaring above stunning landscapes such as the Taj Mahal, the Himalayas, the backwaters of Kerala, and the bustling streets of Mumbai. With stunning visuals, dynamic motion effects, and immersive storytelling, it’s the perfect way to experience India's beauty from a unique aerial perspective."
    },
    {
        "title": "Imagica Shopping & Dining",
        "description": "Take a break from the excitement and indulge in a delightful shopping and dining experience at Imagica. Enjoy a variety of cuisines at Roberto’s Food Court, savor grilled delicacies at Zeze Bar + Grill, or enjoy classic American-style burgers at Red Bonnet Diner. Browse through the Imagica merchandise stores for exclusive souvenirs, collectibles, and themed apparel to take home a piece of the adventure. Whether you're a foodie or a shopper, there's something for everyone."
    },
    {
        "title": "The Imagica Castle",
        "description": "Step into a fairy-tale world at The Imagica Castle, where enchanting architecture, dazzling lights, and magical storytelling sessions bring childhood dreams to life. Ideal for families with young kids, this attraction offers engaging activities such as puppet shows, fantasy-themed performances, and character meet-and-greets. Whether you're a fan of classic fairy tales or love immersive fantasy worlds, The Imagica Castle promises a charming and magical experience."
    },
    {
        "title": "Bump It Boats & Motion Simulators",
        "description": "Get ready for action-packed fun with Bump It Boats, where you can engage in friendly water battles with bumper boats. Feel the thrill of virtual reality at Imagica's motion simulators, where high-tech effects transport you into adventurous scenarios, from racing through futuristic cities to navigating extreme terrains. These attractions offer a combination of fun, adventure, and interactive gameplay, making them perfect for thrill-seekers of all ages."
    }
],


"services": [
    {
      "name": "Pune to Imagica Taxi Fare",
      "description": "Morya Cab offers competitive and transparent taxi fares for your Pune to Imagica journey. Enjoy a comfortable and stress-free ride at affordable rates."
    },
    {
      "name": "Pune to Imagica Cab Charges",
      "description": "Our Pune to Imagica cab charges are designed to provide you with the best value for your money. Morya Cab ensures no hidden charges, so you can travel with peace of mind."
    },
    {
      "name": "Pune to Imagica Taxi Booking",
      "description": "Booking a taxi from Pune to Imagica with Morya Cab is simple and convenient. You can book online or by phone, ensuring a hassle-free experience."
    },
    {
      "name": "Pune to Imagica Car Rental",
      "description": "Morya Cab offers car rental services for your Pune to Imagica trip. Rent a car for the day or longer and enjoy a comfortable journey with well-maintained vehicles."
    },
    {
      "name": "Pune to Imagica Chauffeur-Driven Cabs",
      "description": "Choose Morya Cab for chauffeur-driven cabs from Pune to Imagica. Our professional drivers will ensure you have a smooth, comfortable, and enjoyable ride."
    },
    {
      "name": "Pune to Imagica Taxi Rates",
      "description": "Morya Cab provides competitive taxi rates for your Pune to Imagica journey. Get in touch with us for exact pricing based on your travel preferences and vehicle choice."
    },
    {
      "name": "Pune to Imagica Cab Pricing",
      "description": "The pricing for your Pune to Imagica cab is affordable and transparent with Morya Cab. Our prices are structured to give you value without compromising on comfort or service."
    },
    {
      "name": "Pune to Imagica Private Car Hire",
      "description": "For a private and personalized experience, Morya Cab offers private car hire services for your Pune to Imagica trip. Enjoy a relaxing ride in a comfortable, well-maintained car."
    },
    {
      "name": "Pune to Imagica Cab Cost",
      "description": "Morya Cab ensures transparent and affordable cab costs for your Pune to Imagica journey. We provide a clear estimate of the cost upfront, so you can plan accordingly."
    },
    {
      "name": "Pune to Imagica Taxi Service Charges",
      "description": "Morya Cab offers competitive taxi service charges for your Pune to Imagica trip. Our goal is to provide you with a smooth ride at a fair price, without hidden fees."
    },
    {
      "name": "Pune to Imagica Travel Fare",
      "description": "Morya Cab provides the best travel fare for your Pune to Imagica trip, ensuring that you enjoy a comfortable ride without breaking the bank."
    },
    {
      "name": "Pune to Imagica Cab",
      "description": "Morya Cab offers a reliable and comfortable cab service for your journey from Pune to Imagica. Book with us for a seamless, enjoyable ride."
    },
    {
      "name": "Cab from Pune to Imagica",
      "description": "For a stress-free and comfortable trip, book a cab from Pune to Imagica with Morya Cab. We offer competitive rates and high-quality service to make your journey enjoyable."
    },
    {
      "name": "Pune to Adlabs Imagica Cab",
      "description": "Morya Cab offers convenient and affordable cab services for your trip from Pune to Adlabs Imagica. Our well-maintained vehicles and professional drivers ensure a smooth ride."
    },
    {
      "name": "Pune to Adlabs Imagica Cab Charges",
      "description": "Morya Cab provides affordable and transparent cab charges for your Pune to Adlabs Imagica trip. Reach out to us for specific pricing details based on your vehicle choice."
    },
    {
      "name": "Pune to Imagica Cab Fare",
      "description": "Get affordable and transparent cab fares for your Pune to Imagica journey with Morya Cab. We offer reliable and comfortable vehicles at competitive prices."
    },
    {
      "name": "Pune to Imagica Cab Price",
      "description": "The price for your Pune to Imagica cab ride with Morya Cab is competitive and offers great value. Book with us today for a comfortable and hassle-free ride."
    },
    {
      "name": "Pune to Imagica Taxi",
      "description": "Choose Morya Cab for a reliable taxi service from Pune to Imagica. Our professional drivers and well-maintained vehicles ensure that you travel in comfort and style."
    },
    {
      "name": "Pune to Imagica Taxi Price",
      "description": "Morya Cab offers competitive and transparent taxi pricing for your Pune to Imagica journey. We provide upfront quotes so you can plan your trip with ease."
    },
    {
      "name": "Pune to Imagica Taxi Service",
      "description": "Morya Cab offers a convenient taxi service from Pune to Imagica, ensuring a smooth and enjoyable ride with professional drivers and well-maintained vehicles."
    },
    {
      "name": "Taxi Fare from Pune to Imagica",
      "description": "Get an affordable and clear estimate of your taxi fare from Pune to Imagica with Morya Cab. We provide reliable and cost-effective transport for your journey."
    },
    {
      "name": "Pune to Imagica Cab Service",
      "description": "Morya Cab offers reliable and comfortable cab services from Pune to Imagica. Book your ride today for a stress-free journey to this popular destination."
    }
  ],


  tableData: [
    ["Pune to Imagica Taxi Fare", "-Pune to Imagica Cab Charges"],
    ["Pune to Imagica Taxi Booking", "-Pune to Imagica Car Rental"],
    ["Pune to Imagica Chauffeur-Driven Cabs", "-Pune to Imagica Taxi Rates"],
    ["Pune to Imagica Cab Pricing", "-Pune to Imagica Private Car Hire"],
    ["Pune to Imagica Cab Cost", "-Pune to Imagica Taxi Service Charges"],
    ["Pune to Imagica Travel Fare", "-Pune to Imagica Cab"],
    ["Cab from Pune to Imagica", "-Pune to Adlabs Imagica Cab"],
    ["Pune to Adlabs Imagica Cab Charges", "-Pune to Imagica Cab Fare"],
    ["Pune to Imagica Cab Price", "-Pune to Imagica Taxi"],
    ["Pune to Imagica Taxi Price", "-Pune to Imagica Taxi Service"],
    ["Taxi Fare from Pune to Imagica", "-Pune to Imagica Cab Service"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the excitement of a trip to Imagica. Whether you're visiting for a fun-filled day with family or friends, our drivers ensure timely pickups and drop-offs, so you can enjoy your visit without any travel worries."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer well-maintained, comfortable vehicles for your journey to Imagica. From spacious legroom to air-conditioned interiors, our taxis are designed for a relaxed ride, ensuring you travel in comfort."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our experienced drivers know the best routes to Imagica, ensuring you get there safely and efficiently. Their professionalism and dedication to customer service will make your trip enjoyable and stress-free."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing for your Pune to Imagica trip. We provide a clear breakdown of the costs with no hidden charges, so you know exactly what to expect before you travel."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is our priority. Our vehicles come equipped with modern safety features, including airbags, seat belts, and GPS tracking, ensuring a secure and comfortable ride throughout your journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you're planning an early morning trip or a late-night return, Morya Cab is available around the clock to meet your needs. Our customer service team is always here to assist you."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a Pune to Imagica taxi with Morya Cab is simple. You can book online through our website or app, or get personalized assistance from our customer service team."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "If you're planning a full day of fun at Imagica or a half-day trip, we offer customized travel packages tailored to your preferences, ensuring your trip is just the way you want it."
    }
]







    }

    const faqData = [
        {
          question: "How can I book a Pune to Imagica taxi with Morya Cab?",
          answer: "Booking is easy! You can book a taxi online via our website or app, or contact our customer service team for assistance with your booking."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are highly skilled in long-distance travel and familiar with the best routes to Imagica, ensuring a safe and comfortable journey."
        },
        {
          question: "What types of vehicles are available for Pune to Imagica travel?",
          answer: "We offer a range of vehicles, including sedans, SUVs, and premium cars, all designed to provide comfort and reliability for your trip to Imagica."
        },
        {
          question: "How do I pay for my Pune to Imagica taxi rental?",
          answer: "We offer flexible payment options, including cash, credit/debit cards, and online payment via our app, making it convenient for you."
        },
        {
          question: "Can I book a round trip to Imagica?",
          answer: "Yes, round trips are available. Just provide us with your return details, and we’ll take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges, such as for waiting time or detours, will be communicated clearly upfront, ensuring full transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing at Imagica?",
          answer: "Yes, we offer sightseeing services as part of your trip to Imagica. Explore all the major attractions in the park with the convenience of a hired taxi and driver."
        },
        {
          question: "What is the luggage allowance for a Pune to Imagica taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have additional luggage or specific requirements, please inform us during booking, and we’ll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Imagica?",
          answer: "Yes, we provide corporate travel services for group trips or business outings to Imagica, ensuring a professional and comfortable experience."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Imagica travel?",
          answer: "Morya Cab ensures a reliable, affordable, and comfortable journey with professional drivers, well-maintained vehicles, and excellent customer service. We guarantee a fun and stress-free trip to Imagica."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Vijay Patil',
          role: 'Traveler',
          review: "I booked a taxi with Morya Cab for a family trip to Imagica, and it was an amazing experience! The vehicle was clean and comfortable, and the driver was friendly and professional. It made our trip even more enjoyable!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Ms. Priya Joshi',
          role: 'Traveler',
          review: "We used Morya Cab for a day trip to Imagica. The booking was seamless, the driver was on time, and the ride was smooth and comfortable. We had a great time at Imagica and didn’t have to worry about the travel at all!",
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
        "@type": "TaxiService",
        "name": "Pune to Imagica Taxi Service",
        "description": "Affordable taxi services from Pune to Imagica. Book cabs for a comfortable ride to Imagica amusement park.",
        "provider": {
          "@type": "Organization",
          "name": "Pune to Imagica Taxi Services",
          "url": "https://www.puneimagicataxiservices.com",
          "telephone": "+91-9999999999",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Flat No. 101, Kothrud, Pune",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411038",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 2500,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Pune"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "2500",
            "unitCode": "ONE-WAY",
            "description": "One-way taxi fare from Pune to Imagica"
          }
        },
        "keywords": "Pune to Imagica Taxi Fare, Pune to Imagica Taxi Charges, Pune to Imagica Cab Booking, Pune to Imagica Car Rental, Pune to Imagica Chauffeur-Driven Cabs, Pune to Imagica Cab Pricing, Pune to Imagica Private Car Hire, Pune to Imagica Taxi Service Charges, Pune to Imagica Travel Fare, Pune to Imagica Cab, Cab from Pune to Imagica, Pune to Adlabs Imagica Cab, Pune to Imagica Taxi Service"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Imagica Taxi Service | Affordable Taxi Booking for Imagica | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Book taxis from Pune to Imagica for a comfortable and affordable ride. Check taxi fare, charges, booking options, and more."
  />
  <meta
    name="keywords"
    content="Pune to Imagica Taxi Fare, Pune to Imagica Taxi Charges, Pune to Imagica Cab Booking, Pune to Imagica Car Rental, Pune to Imagica Chauffeur-Driven Cabs, Pune to Imagica Cab Pricing, Pune to Imagica Private Car Hire, Pune to Imagica Taxi Service Charges, Pune to Imagica Travel Fare, Pune to Imagica Cab, Cab from Pune to Imagica, Pune to Adlabs Imagica Cab, Pune to Imagica Taxi Service"
  />
  <meta property="og:title" content="Pune to Imagica Taxi Service | Affordable Taxi Booking for Imagica" />
  <meta
    property="og:description"
    content="Book taxis from Pune to Imagica for a comfortable and affordable ride. Check taxi fare, charges, booking options, and more."
  />
  <meta property="og:url" content="https://www.puneimagicataxiservices.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.puneimagicataxiservices.com/images/pune-to-imagica-taxi.jpg" />
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
                            <img src='/images/keyword/74.jpg' alt='img' />
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

export default Punetoimagicataxi;