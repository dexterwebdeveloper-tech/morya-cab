
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetosataracabs() {



    const cardData =
    {
        keyword: 'Pune to Satara Cabs  ',
        heading: 'Morya Cabs: Pune to Satara Cabs  ',
        headingDescription: 'If you are planning a trip from Pune to Satara, Morya Cabs offers reliable, comfortable, and affordable cab services for a seamless travel experience. Whether you are traveling for business, leisure, or exploring the natural beauty and historic sites of Satara, our well-maintained vehicles and professional drivers ensure a safe and enjoyable journey. Known for its picturesque landscapes and rich cultural heritage, Satara is a beautiful destination with a lot to offer.',

        top: 'Top Places to Visit in Satara with Morya Cabs',

   "topPlaces": [
    {
        "title": "Kaas Plateau",
        "description": "Often called the 'Valley of Flowers of Maharashtra,' Kaas Plateau is a UNESCO World Natural Heritage site, famous for its vibrant wildflowers. It’s a perfect spot for nature lovers and photography enthusiasts."
    },
    {
        "title": "Sajjangad Fort",
        "description": "Sajjangad Fort is an important pilgrimage site in Satara. It’s dedicated to the renowned saint Samarth Ramdas and offers a peaceful atmosphere along with a panoramic view of the surrounding region."
    },
    {
        "title": "Thoseghar Waterfalls",
        "description": "Located around 20 km from Satara, Thoseghar Waterfalls is one of the most beautiful and scenic spots in the area. The waterfalls, surrounded by lush greenery, provide a tranquil retreat."
    },
    {
        "title": "Koynanagar",
        "description": "Koynanagar is home to the famous Koyna Dam, one of the largest dams in Maharashtra. The area offers beautiful views of the reservoir and surrounding hills, making it an ideal spot for a peaceful getaway."
    },
    {
        "title": "Patan",
        "description": "Known for its historical significance, Patan is home to ancient temples and monuments. The beautiful temples of Lord Vishnu and other structures are a major attraction for tourists."
    },
    {
        "title": "Ajinkyatara Fort",
        "description": "Perched atop a hill, Ajinkyatara Fort offers breathtaking views of Satara. It holds historical importance and is a great place to visit for history buffs and trekking enthusiasts."
    },
    {
        "title": "Shivsagar Lake",
        "description": "Shivsagar Lake is one of the largest lakes in Satara, offering a picturesque setting for relaxation and photography. The surrounding area provides great opportunities for picnics and leisure activities."
    },
    {
        "title": "Mahabaleshwar",
        "description": "Though not directly in Satara, Mahabaleshwar is close by and is one of the most popular hill stations in Maharashtra. Known for its cool climate, lush greenery, and stunning viewpoints, it is a must-visit destination from Satara."
    },
    {
        "title": "Bhambavli Waterfalls",
        "description": "Located near Satara, Bhambavli Waterfalls is a hidden gem known for its beauty and serene environment. It’s perfect for those who enjoy nature and the outdoors."
    },
    {
        "title": "Chandan Vandan Temple",
        "description": "Located near Satara, Chandan Vandan Temple is a serene and spiritual place, offering a peaceful atmosphere for reflection and prayer. The temple is dedicated to Lord Shiva and is a popular spot for devotees."
    }
],



"services": [
    {
      "name": "Pune to Satara Cab Services",
      "description": "Discover the beauty of Satara with a hassle-free journey from Pune. We offer reliable Pune to Satara Cab Services for all types of travelers. Whether you're planning a trip to the famous Kaas Plateau, Wai, or other attractions, Morya Cab provides the best travel options for a comfortable ride."
    },
    {
      "name": "Pune to Satara Cab Price",
      "description": "The Pune to Satara Cab Price varies depending on the vehicle type and service chosen. Morya Cab ensures competitive and transparent pricing to give you the best value for your money while making sure you enjoy a comfortable and safe journey."
    },
    {
      "name": "Pune Airport to Satara Taxi Charges",
      "description": "For travelers flying into Pune, we offer seamless transfers to Satara. Our Pune Airport to Satara Taxi Charges are affordable and provide you with a smooth ride from the airport to Satara. Book your ride online for convenience and ensure a prompt pickup from the airport."
    },
    {
      "name": "Pune Airport to Satara Taxi Booking Online",
      "description": "Booking a taxi from Pune Airport to Satara has never been easier. With Morya Cab, you can easily make a Pune Airport to Satara Taxi Booking Online through our user-friendly website or app. Enjoy a stress-free booking experience and get the best cab services for your journey."
    },
    {
      "name": "Pune Airport to Satara Car Hire Costs",
      "description": "Looking to hire a car for your trip from Pune Airport to Satara? Our Pune Airport to Satara Car Hire Costs are competitive, and we offer a variety of vehicles to choose from. Whether you need a sedan, SUV, or a luxury car, we have the perfect options to meet your needs."
    },
    {
      "name": "Pune Airport to Satara Cab Rental Rates",
      "description": "Our Pune Airport to Satara Cab Rental Rates are designed to fit every budget, ensuring that you get a cost-effective option for your journey. Choose from our fleet of well-maintained vehicles and enjoy a comfortable ride with a professional driver."
    },
    {
      "name": "Pune Airport to Satara One-Way Taxi Fare",
      "description": "Planning a one-way trip? Our Pune Airport to Satara One-Way Taxi Fare offers great rates for those looking for a one-way transfer. Enjoy a direct, comfortable ride to Satara without worrying about return trips."
    },
    {
      "name": "Pune Airport to Satara Round Trip Taxi Charges",
      "description": "For round trips, we provide special pricing. The Pune Airport to Satara Round Trip Taxi Charges are designed to offer value and flexibility, so you can enjoy your time in Satara and return at your convenience with the same driver."
    },
    {
      "name": "Pune to Satara Cabs",
      "description": "Morya Cab provides comfortable and affordable Pune to Satara Cabs for solo travelers, families, and groups. Our fleet includes a range of vehicles to suit different needs, from budget-friendly options to more luxurious rides."
    },
    {
      "name": "Pune to Satara Cab Price",
      "description": "When you book a Pune to Satara Cab, we ensure you get a transparent price with no hidden charges. Whether it's a one-way trip, a round trip, or a day tour, you’ll find the cost clear and reasonable."
    },
    {
      "name": "Pune to Satara Cab Service",
      "description": "Our Pune to Satara Cab Service is available at all times, ensuring you have the flexibility to travel at your convenience. Whether you're visiting for business, leisure, or a pilgrimage, we provide tailored services for a smooth ride."
    },
    {
      "name": "Pune to Satara One-Way Cab",
      "description": "Looking for a one-way trip to Satara? Our Pune to Satara One-Way Cab services allow you to travel without any hassle. Book your one-way ride today and enjoy the comfort of traveling without any stops along the way."
    },
    {
      "name": "Pune to Satara Taxi Service",
      "description": "If you're in need of reliable transportation, our Pune to Satara Taxi Service offers the perfect solution. Choose Morya Cab for an affordable, safe, and comfortable ride for your journey to Satara."
    },
    {
      "name": "Pune to Wai Satara Cab Service",
      "description": "Explore Wai with our Pune to Wai Satara Cab Service, which provides you with convenient and affordable transportation to one of the most scenic places in Satara. Whether you're visiting temples or enjoying the natural beauty, we ensure a comfortable journey."
    },
    {
      "name": "Pune to Kas Pathar Cab",
      "description": "Our Pune to Kas Pathar Cab service offers a scenic drive to the famous Kaas Plateau, known for its unique flowers and beautiful landscapes. Enjoy the breathtaking beauty of this area with a comfortable and reliable cab service from Pune."
    },
    {
      "name": "Pune to Kaas Plateau Cab Service",
      "description": "The Pune to Kaas Plateau Cab Service is ideal for those looking to experience the beauty of the UNESCO World Heritage Site. Book a ride with Morya Cab to visit Kaas Plateau and immerse yourself in the rich flora and nature of the region."
    },
    {
      "name": "Contact Information",
      "description": "To book your Pune to Satara cab or for more information on our services, contact Morya Cab at +91 9371304510. We offer hassle-free bookings, competitive rates, and top-notch service for a memorable journey!"
    }
  ],



  tableData: [
    ["Pune to Satara Cab Price", "-Pune to Satara Cab Service"],
    ["Pune Airport to Satara Taxi Charges", "-Pune Airport to Satara Taxi Booking Online"],
    ["Pune Airport to Satara Car Hire Costs", "-Pune Airport to Satara Cab Rental Rates"],
    ["Pune Airport to Satara One-Way Taxi Fare", "-Pune Airport to Satara Round Trip Taxi Charges"],
    ["Pune to Satara Cabs", "-Pune to Satara Cab Price"],
    ["Pune to Satara Cab Service", "-Pune to Satara One Way Cab"],
    ["Pune to Satara Taxi Service", "-Pune to Wai Satara Cab Service"],
    ["Pune to Kas Pathar Cab", "-Pune to Kaas Plateau Cab Service"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "Morya Cab ensures timely pickups and drop-offs for your Pune to Satara trip. Whether you're visiting for business or leisure, we understand the importance of punctuality, ensuring your journey remains stress-free and on schedule."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a range of well-maintained vehicles, including sedans, SUVs, and premium cars. Our vehicles are designed for comfort, providing a spacious, air-conditioned ride to make your trip to Satara as pleasant as possible."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our experienced drivers are familiar with the best routes and traffic patterns between Pune and Satara. Their professionalism ensures a smooth, safe, and enjoyable journey, letting you relax and enjoy the ride."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing for your Pune to Satara journey, with no hidden fees. We provide a clear, upfront breakdown of the fare, ensuring full transparency and no surprises."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All our vehicles are equipped with modern safety features, such as airbags, seat belts, and GPS tracking, ensuring a secure and smooth ride throughout your trip."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates 24/7, so you can book your Pune to Satara cab at any time, whether it’s for an early morning departure or a late-night journey. We are always ready to serve you."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Satara cab is quick and easy! You can book online via our website, mobile app, or by reaching out to our customer service team, who will assist with all your queries and requests."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you’re visiting Satara for sightseeing, a family trip, or business, we offer customized travel packages designed to suit your specific needs and preferences. Let us know your requirements, and we'll tailor the trip accordingly."
    }
]





        
















    }

    const faqData = [
        {
          question: "How can I book a Pune to Satara cab with Morya Cab?",
          answer: "Booking is easy! You can book through our website, mobile app, or by calling our customer service team for assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced in long-distance travel and are familiar with the best routes for a smooth, safe, and efficient journey from Pune to Satara."
        },
        {
          question: "What types of vehicles are available for Pune to Satara travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, ensuring comfort and convenience for your trip."
        },
        {
          question: "How do I pay for my Pune to Satara cab rental?",
          answer: "We offer flexible payment options, including cash, credit/debit cards, and online payment through our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Satara?",
          answer: "Yes, you can easily book a round trip for your journey. Simply provide us with your return details, and we will take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges, like waiting time or detours, will be clearly communicated to you upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Satara?",
          answer: "Yes, we offer sightseeing services in Satara. Explore popular attractions like the Kaas Plateau, Sajjangad Fort, and the famous Yewai Dam, with the assistance of our experienced drivers."
        },
        {
          question: "What is the luggage allowance for a Pune to Satara taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have extra luggage or specific requirements, please inform us during the booking process so we can make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Satara?",
          answer: "Yes, we provide corporate travel services, whether you’re organizing a group trip or require transportation for business-related visits between Pune and Satara."
        },
        {
          question: "Why should I choose Morya Cab for my Pune to Satara trip?",
          answer: "Morya Cab offers a reliable, safe, and comfortable journey with professional drivers, well-maintained vehicles, and transparent pricing. We guarantee a hassle-free and enjoyable trip every time."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Sanjay Patil',
          role: 'Traveler',
          review: "We had an amazing experience with Morya Cab during our trip from Pune to Satara. The vehicle was clean, spacious, and comfortable, and the driver was professional. We reached Satara on time and had a relaxing ride.",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Meera Deshmukh',
          role: 'Traveler',
          review: "Our family traveled to Satara with Morya Cab, and it was a pleasant journey. The vehicle was spacious, the driver was friendly and knowledgeable, and we had a smooth ride all the way. Highly recommended!",
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
        "name": "Pune to Satara Cabs",
        "description": "Book a comfortable and affordable cab service for your journey from Pune to Satara. We offer one-way, round-trip, luxury, and rental services for a seamless travel experience.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 5, First Floor, Sunshine Complex, Near ABC Chowk, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "telephone": "+91-9371304510",
        "url": "https://moryacab.com/pune-to-satara-cabs",
        "logo": "https://moryacab.com/img/logo.jpg",
        "image": [
          "https://moryacab.com/img/satara-cabs.jpg",
          "https://moryacab.com/img/satara-tour.jpg"
        ],
        "priceRange": "₹3000 - ₹8000",
        "offers": {
          "@type": "Offer",
          "url": "https://moryacab.com/pune-to-satara-cabs",
          "priceCurrency": "INR",
          "price": 4500,
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.7,
          "reviewCount": 120
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rahul Joshi"
            },
            "datePublished": "2024-11-10",
            "reviewBody": "Had an excellent experience! The cab was clean, the driver was professional, and the ride was smooth. Perfect for a trip from Pune to Satara."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Snehal Deshmukh"
            },
            "datePublished": "2024-09-05",
            "reviewBody": "Great service at affordable prices. The driver knew all the best routes and was very friendly. Highly recommend for trips to Satara from Pune."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune to Satara",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.6825,
            "longitude": 73.9969
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://moryacab.com/pune-to-satara-cabs"
        },
        "keywords": "Pune to Satara Cab Price, Pune to Satara Cab Service, Pune Airport to Satara Taxi Charges, Pune Airport to Satara Taxi Booking Online, Pune Airport to Satara Car Hire Costs, Pune Airport to Satara Cab Rental Rates, Pune Airport to Satara One-Way Taxi Fare, Pune Airport to Satara Round Trip Taxi Charges, Pune to Satara Cabs, Pune to Satara Cab Price, Pune to Satara Cab Service, Pune to Satara One Way Cab, Pune to Satara Taxi Service, Pune to Wai Satara Cab Service, Pune to Kas Pathar Cab, Pune to Kaas Plateau Cab Service"
      };
      


    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Satara Cabs | Affordable & Comfortable Travel | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Book your Pune to Satara cab service. Enjoy affordable and reliable one-way, round-trip, and luxury cabs for your trip to Satara from Pune. Book online for the best deals."
  />
  <meta
    name="keywords"
    content="Pune to Satara Cab Price, Pune to Satara Cab Service, Pune Airport to Satara Taxi Charges, Pune Airport to Satara Taxi Booking Online, Pune Airport to Satara Car Hire Costs, Pune Airport to Satara Cab Rental Rates, Pune Airport to Satara One-Way Taxi Fare, Pune Airport to Satara Round Trip Taxi Charges, Pune to Satara Cabs, Pune to Satara Cab Price, Pune to Satara Cab Service, Pune to Satara One Way Cab, Pune to Satara Taxi Service, Pune to Wai Satara Cab Service, Pune to Kas Pathar Cab, Pune to Kaas Plateau Cab Service"
  />
  <meta property="og:title" content="Pune to Satara Cabs | Morya Cabs" />
  <meta
    property="og:description"
    content="Looking for a comfortable and affordable taxi service from Pune to Satara? Book your cab now and enjoy a smooth journey with our reliable services."
  />
  <meta property="og:url" content="https://moryacab.com/pune-to-satara-cabs" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://moryacab.com/img/satara-cabs.jpg" />
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
                            <img src='/images/keyword/61.jpg' alt='img' />
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

export default Punetosataracabs;