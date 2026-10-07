
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Minibusonrentinpune() {



    const cardData =
    {
        keyword: 'Mini Bus on Rent in Pune',
        heading: 'Morya Cabs: Mini Bus on Rent in Pune',
        headingDescription: 'Morya Cabs offers a variety of mini buses for rent in Pune, providing a comfortable and reliable transportation solution for groups, families, corporate events, and more. Whether you are planning a family outing, a wedding, a corporate trip, or a group tour, our mini buses are perfect for your travel needs. With well-maintained vehicles, professional drivers, and excellent customer service, we ensure a hassle-free and enjoyable journey for everyone on board.',

        top: 'Top Destinations for Mini Bus Rental in Pune:',

"topPlaces": [
    {
        "title": "Shirdi",
        "description": "A renowned pilgrimage destination, Shirdi attracts thousands of devotees throughout the year. Home to the revered Shri Sai Baba Temple, this sacred town offers a deeply spiritual experience. With our mini bus service, your group can travel comfortably, ensuring a hassle-free and peaceful journey to one of India's most visited religious sites."
    },
    {
        "title": "Lavasa",
        "description": "A picturesque hill station near Pune, Lavasa is a popular weekend getaway known for its European-inspired architecture, lakeside promenade, and lush green landscapes. A mini bus rental ensures that your entire group enjoys the scenic drive through the winding ghats while indulging in adventure activities, water sports, and delicious cuisine."
    },
    {
        "title": "Mahabaleshwar",
        "description": "Famous for its breathtaking viewpoints, strawberry farms, and cool climate, Mahabaleshwar is a perfect destination for those looking to escape the city's hustle and bustle. With a mini bus, your group can comfortably explore attractions like Arthur’s Seat, Venna Lake, and Elephant’s Head Point while enjoying the refreshing mountain air."
    },
    {
        "title": "Matheran",
        "description": "One of the few eco-sensitive hill stations in India, Matheran is known for its serene environment, pollution-free atmosphere, and stunning views. Ideal for a nature-filled retreat, this car-free hill station offers activities like horse riding and trekking. Our mini bus rental service ensures a seamless journey to the entry point, from where you can enjoy a toy train ride or a scenic trek."
    },
    {
        "title": "Alibaug",
        "description": "A coastal town famous for its pristine beaches, historic forts, and laid-back vibe, Alibaug is perfect for a group getaway. Whether you're looking to relax on the golden sands of Alibaug Beach, explore the 17th-century Kolaba Fort, or enjoy thrilling water sports, our mini bus service provides a comfortable ride for an unforgettable experience."
    },
    {
        "title": "Sinhagad Fort",
        "description": "A must-visit for history and trekking enthusiasts, Sinhagad Fort offers stunning views of the Sahyadri mountains along with a glimpse into Maratha history. Our mini buses can accommodate your group for an adventurous trek, sightseeing, and a taste of authentic Maharashtrian cuisine at the local food stalls near the fort."
    },
    {
        "title": "Panchgani",
        "description": "Surrounded by five scenic hills, Panchgani is known for its cool climate, lush greenery, and stunning viewpoints like Table Land and Sydney Point. A mini bus rental allows your group to enjoy the drive through strawberry fields, explore colonial-era charm, and visit adventure parks and waterfalls for a refreshing retreat."
    },
    {
        "title": "Dapoli",
        "description": "For beach lovers, Dapoli is a hidden gem along the Konkan coast, offering serene beaches, dolphin-watching tours, and historical temples. Our mini bus service ensures a comfortable and convenient journey for your group, allowing you to explore spots like Murud Beach, Karde Beach, and Suvarnadurg Fort with ease."
    },
    {
        "title": "Khandala and Lonavala",
        "description": "Famous for their misty hills, waterfalls, and caves, Khandala and Lonavala are among the most sought-after hill stations near Pune. With our mini bus rental service, your group can enjoy scenic drives, visit iconic spots like Tiger’s Leap, Bhushi Dam, and Karla Caves, and indulge in the famous chikki sweets."
    },
    {
        "title": "Tungabhadra Dam",
        "description": "A peaceful retreat for nature enthusiasts, Tungabhadra Dam offers breathtaking views of the reservoir, lush greenery, and a serene ambiance. Ideal for picnics and group outings, our mini bus rental makes it convenient for large groups to travel together and enjoy the tranquil surroundings of this stunning location."
    }
],


"services": [
    {
      "name": "Mini Bus Hire in Pune",
      "description": "Morya Cab offers mini bus hire services in Pune for both local and outstation travel. Whether you need a mini bus for a family trip, corporate event, or group outing, we provide comfortable and affordable options."
    },
    {
      "name": "Mini Bus Hire Pune",
      "description": "Book a mini bus with Morya Cab for your travel needs in Pune. Our services are reliable, and we offer competitive prices for comfortable journeys."
    },
    {
      "name": "Mini Bus Rental Pune",
      "description": "Looking for a mini bus rental in Pune? Morya Cab offers a wide range of mini bus options for hire, ensuring your group travels in comfort and style."
    },
    {
      "name": "Mini Bus Service in Pune",
      "description": "Morya Cab provides excellent mini bus services in Pune. Whether you're planning a local trip or an outstation tour, our mini buses offer the perfect solution for group travel."
    },
    {
      "name": "Mini Bus Service Pune",
      "description": "Morya Cab offers top-notch mini bus services in Pune. Book a mini bus for your next trip and experience a smooth and hassle-free ride with professional drivers."
    },
    {
      "name": "Pune Mini Bus Rental",
      "description": "Rent a mini bus with Morya Cab for your next group outing in Pune. We provide affordable pricing with well-maintained vehicles for a comfortable ride."
    },
    {
      "name": "Mini Bus Booking Pune",
      "description": "Booking a mini bus in Pune is easy with Morya Cab. Contact us for quick and efficient booking, and enjoy a comfortable and stress-free journey."
    },
    {
      "name": "Mini Bus in Pune",
      "description": "Morya Cab offers mini bus rentals in Pune, perfect for both short and long-distance travel. Book your ride today for a comfortable group journey."
    },
    {
      "name": "Affordable Mini Bus Pune",
      "description": "Morya Cab offers affordable mini bus rentals in Pune without compromising on comfort and service quality. Book your mini bus today at a competitive price."
    },
    {
      "name": "Mini Bus Hire Pune",
      "description": "Whether it's a small group trip or a large outing, Morya Cab offers mini bus hire services in Pune to suit your needs. Enjoy your travel experience with reliable vehicles."
    },
    {
      "name": "Mini Bus Rental Pune",
      "description": "Morya Cab provides flexible mini bus rental services in Pune for both corporate and leisure travel. Enjoy your trip with spacious, comfortable mini buses."
    },
    {
      "name": "Pune Mini Bus Hire",
      "description": "For group travel in and around Pune, Morya Cab offers mini bus hire services. Our mini buses are perfect for family trips, tours, or corporate outings."
    },
    {
      "name": "Luxury Mini Bus, Pune",
      "description": "For those looking for a more luxurious experience, Morya Cab provides luxury mini buses in Pune. Travel in style with extra comfort and space."
    },
    {
      "name": "Corporate Mini Bus Pune",
      "description": "Morya Cab offers corporate mini bus rentals in Pune for team outings, events, and conferences. Our professional drivers and well-maintained buses will ensure your journey is smooth and efficient."
    },
    {
      "name": "Pune to Shirdi Mini Bus on Rent",
      "description": "Book a mini bus for your Pune to Shirdi trip with Morya Cab. We offer spacious and comfortable mini buses for your religious journey to Shirdi."
    },
    {
      "name": "Pune to Mahabaleshwar Mini Bus on Rent",
      "description": "Morya Cab offers mini bus rentals for your Pune to Mahabaleshwar trip. Enjoy a comfortable and scenic journey with your family or group in our well-maintained vehicles."
    },
    {
      "name": "Pune to Mumbai Mini Bus on Rent",
      "description": "For your Pune to Mumbai trip, rent a mini bus with Morya Cab. We provide comfortable rides for groups, ensuring you reach your destination with ease."
    },
    {
      "name": "Pune to Mumbai Airport Mini Bus on Rent",
      "description": "Morya Cab offers mini buses for rent from Pune to Mumbai Airport. Travel with a group in comfort and avoid the hassle of multiple vehicles."
    },
    {
      "name": "Mini Bus Rentals",
      "description": "Morya Cab provides mini bus rentals for all types of trips, whether for corporate travel, family outings, or leisure trips. We offer competitive prices and well-maintained vehicles."
    },
    {
      "name": "Small Bus Rental",
      "description": "Need a small bus for your group? Morya Cab offers small bus rental services in Pune for both local and outstation trips, providing comfortable seating and a smooth ride."
    },
    {
      "name": "25 Seater Minibus",
      "description": "Morya Cab offers 25-seater mini buses for large group travel in Pune. Perfect for family trips, corporate events, or group tours, our minibuses ensure a comfortable ride."
    },
    {
      "name": "Mini Coach Bus Rental",
      "description": "Morya Cab provides mini coach bus rentals in Pune for your group’s transportation needs. With comfortable seating and ample space, enjoy your travel experience with us."
    },
    {
      "name": "Pune to Goa Mini Bus on Rent",
      "description": "For a group trip from Pune to Goa, book a mini bus with Morya Cab. We offer affordable and comfortable mini buses for your journey to Goa."
    },
    {
      "name": "14 Seater Mini Bus on Rent",
      "description": "Morya Cab provides 14-seater mini buses for rent in Pune. Perfect for small group trips, our mini buses are spacious, comfortable, and affordable."
    },
    {
      "name": "Mini Bus on Hire in Pune",
      "description": "Morya Cab, in partnership with Morya Cabs, offers mini buses on hire in Pune. Whether for corporate events or family trips, we ensure you travel in comfort."
    },
    {
      "name": "Luxury Bus on Rent in Pune",
      "description": "For a more luxurious group travel experience, Morya Cab offers luxury buses on rent in Pune. Perfect for corporate events or group trips, enjoy extra comfort and style."
    },
    {
      "name": "Mini Bus on Rent for Corporate Events",
      "description": "Morya Cab offers mini bus rentals in Pune for corporate events. Whether it's for conferences, team-building trips, or office outings, we ensure comfortable and efficient transportation."
    }
  ],


  tableData: [
    ["Mini Bus Hire in Pune", "-Mini Bus Hire Pune"],
    ["Mini Bus Rental Pune", "-Mini bus service in Pune"],
    ["Mini bus service Pune", "-Pune mini bus rental"],
    ["Mini bus booking Pune", "-Mini bus in Pune"],
    ["Affordable mini bus Pune", "-Mini bus hire Pune"],
    ["Mini bus rental Pune", "-Pune mini bus hire"],
    ["Luxury mini bus, Pune", "-Corporate mini bus Pune"],
    ["Pune to Shirdi Mini bus on rent", "-pune to mahabaleshwar mini bus on rent"],
    ["Pune to Mumbai mini bus on rent", "-pune to mumbai airport mini bus on rent"],
    ["Mini bus rental small bus rental", "-25 seater Minibus, Mini Coach Bus Rental"],
    ["Pune to Goa mini Bus on Rent", "-14 seater mini bus on rent"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand the importance of punctuality, especially when organizing group travel. Whether it’s a corporate event, a family gathering, or a sightseeing trip, we ensure that our mini buses arrive on time for your journey and drop-offs."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our mini buses offer ample seating space, comfortable interiors, and air conditioning, making them the ideal choice for group travel. Whether you’re traveling a short distance or heading on a longer journey, everyone can enjoy a comfortable ride."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced in handling group travel, ensuring smooth and safe transport for large groups. With their expertise in navigating through busy roads and offering a smooth experience, they make your journey relaxed and stress-free."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive pricing for mini bus rentals in Pune, ensuring that you get the best value for your money. We believe in clear and upfront pricing with no hidden charges, so you know exactly what to expect before your trip."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is our top priority. Our mini buses are equipped with modern safety features like seat belts, air-conditioning, and GPS tracking to ensure a secure and comfortable journey for everyone."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab operates 24/7, making sure that no matter the time of your travel, we are available to cater to your needs. Our customer service team is always available to assist with booking and inquiries."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a mini bus is easy and quick! You can reserve your vehicle online through our website or app, or you can contact our customer service team for more personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether it’s for a corporate event, school trip, family outing, or sightseeing, we offer customized travel packages for mini buses to ensure the trip meets your specific requirements and preferences."
    }
]








    }

    const faqData = [
        {
          question: "How can I book a mini bus on rent with Morya Cab?",
          answer: "You can book a mini bus through our website or mobile app, or contact our customer service team to help you with your booking."
        },
        {
          question: "How many passengers can the mini bus accommodate?",
          answer: "Our mini buses are designed to comfortably accommodate up to 15-25 passengers, depending on the model."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly skilled and experienced in handling long-distance travel and group trips, ensuring a safe and smooth journey."
        },
        {
          question: "What types of mini buses are available for rent?",
          answer: "We offer a range of mini buses in various seating capacities. Each vehicle is well-maintained and equipped with modern features for a comfortable ride."
        },
        {
          question: "How do I pay for my mini bus rental?",
          answer: "We offer flexible payment options including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip with a mini bus?",
          answer: "Yes, you can easily book a round trip for your group travel. Just provide your return details, and we’ll take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges for waiting time or detours will be communicated to you upfront, ensuring full transparency in pricing."
        },
        {
          question: "Can I hire a mini bus for sightseeing in Pune?",
          answer: "Yes, we offer mini buses for sightseeing tours in and around Pune. Explore the city's major attractions comfortably with our experienced drivers."
        },
        {
          question: "What is the luggage allowance for a mini bus?",
          answer: "Our mini buses can accommodate standard luggage. If you have larger luggage or specific needs, please let us know during booking, and we will make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel with a mini bus?",
          answer: "Yes, we provide corporate travel services for events, conferences, or team-building activities. We offer a professional experience for all business-related group trips."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Ramesh Yadav',
          role: 'Traveler',
          review: "We rented a mini bus from Morya Cab for our family trip to Lonavala. The vehicle was spacious, clean, and comfortable, and the driver was very friendly. We had a wonderful time, and I highly recommend their service!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Ms. Anjali Deshmukh',
          role: 'Traveler',
          review: "Morya Cab provided a mini bus for our office outing. The vehicle was perfect for our group, and the driver was professional and knowledgeable about the routes. The entire process was smooth, and we’ll definitely use their services again.",
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
        "@type": "BusRental",
        "name": "Mini Bus Rental in Pune",
        "description": "Affordable and luxury mini bus rentals in Pune. Book mini buses for events, corporate travel, and outstation trips.",
        "provider": {
          "@type": "Organization",
          "name": "Pune Mini Bus Rentals",
          "url": "https://www.puneminibusservice.com",
          "telephone": "+91-8888888888",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 202, Shivaji Nagar, Pune",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411005",
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 15000,
          "eligibleRegion": {
            "@type": "Place",
            "name": "Pune"
          },
          "priceValidUntil": "2025-12-31",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "15000",
            "unitCode": "DAY",
            "description": "Rent for a 25-seater mini bus per day in Pune"
          }
        },
        "keywords": "Mini Bus Hire in Pune, Mini Bus Rental Pune, Mini Bus Service in Pune, Pune Mini Bus Hire, Luxury Mini Bus Pune, Corporate Mini Bus Pune, Pune to Shirdi Mini Bus on Rent, Pune to Mahabaleshwar Mini Bus on Rent, Pune to Mumbai Mini Bus on Rent, Pune to Goa Mini Bus on Rent, Mini Bus Rentals, 25 Seater Minibus, Mini Coach Bus Rental, Small Bus Rental, Mini Bus on Hire in Pune"
      };
      

    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Mini Bus Rentals in Pune | Affordable & Luxury Mini Bus Hire for Events & Travel | Call: +91 9359401610</title>
  <meta
    name="description"
    content="Book mini buses for corporate events, outstation travel, and local trips in Pune. Rent 14-25 seater luxury buses at affordable prices."
  />
  <meta
    name="keywords"
    content="Mini Bus Hire in Pune, Mini Bus Rental Pune, Mini Bus Service in Pune, Pune Mini Bus Hire, Luxury Mini Bus Pune, Corporate Mini Bus Pune, Pune to Shirdi Mini Bus on Rent, Pune to Mahabaleshwar Mini Bus on Rent, Pune to Mumbai Mini Bus on Rent, Pune to Goa Mini Bus on Rent, Mini Bus Rentals, 25 Seater Minibus, Mini Coach Bus Rental, Small Bus Rental, Mini Bus on Hire in Pune"
  />
  <meta property="og:title" content="Mini Bus Rentals in Pune | Affordable & Luxury Mini Bus Hire for Events & Travel" />
  <meta
    property="og:description"
    content="Book mini buses for corporate events, outstation travel, and local trips in Pune. Rent 14-25 seater luxury buses at affordable prices."
  />
  <meta property="og:url" content="https://www.puneminibusservice.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.puneminibusservice.com/images/mini-bus-pune.jpg" />
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
                            <img src='/images/keyword/75.jpg' alt='img' />
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

export default Minibusonrentinpune;