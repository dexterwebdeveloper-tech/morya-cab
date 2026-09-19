
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetohyderabadcabs() {



    const cardData =
    {
        keyword: 'Pune to Hyderabad Taxi ',
        heading: 'Morya Cabs: Pune to Hyderabad Taxi  ',
        headingDescription: 'Morya Cabs offers reliable, comfortable, and affordable taxi services from Pune to Hyderabad. Whether you are traveling for business, leisure, or to visit family, our professional drivers and well-maintained fleet ensure a smooth, safe, and enjoyable ride. The distance from Pune to Hyderabad is approximately 560-600 km, and the journey typically takes around 9 to 11 hours by road. Relax and enjoy a hassle-free journey with our premium amenities and customer-focused service.',

        top: 'Top Places to Visit in Hyderabad with Morya Cabs:',

"topPlaces": [
    {
        "title": "Charminar",
        "description": "One of the most iconic landmarks of Hyderabad, the Charminar is a historic mosque with four grand arches. It's a must-see attraction and offers a glimpse into the city’s Mughal heritage and rich culture."
    },
    {
        "title": "Golkonda Fort",
        "description": "A historical fort offering stunning panoramic views of Hyderabad, Golkonda Fort is famous for its acoustics, architecture, and the story behind the rise and fall of the Qutb Shahi dynasty."
    },
    {
        "title": "Hussain Sagar Lake",
        "description": "A beautiful man-made lake that connects the city’s different regions. It is an ideal place for boating and enjoying the serenity of the water, with a large statue of Buddha standing in the middle of the lake."
    },
    {
        "title": "Qutb Shahi Tombs",
        "description": "Located near the Golkonda Fort, the Qutb Shahi Tombs are the resting place of the Qutb Shahi rulers. The tombs feature Indo-Islamic architecture and are surrounded by beautiful gardens."
    },
    {
        "title": "Ramoji Film City",
        "description": "A massive film studio complex and theme park, Ramoji Film City offers an exciting experience for visitors of all ages. It’s one of the largest film studio complexes in the world and offers behind-the-scenes glimpses of the film industry."
    },
    {
        "title": "Salar Jung Museum",
        "description": "A premier museum showcasing an extensive collection of art, antiques, and historical artifacts from around the world. The museum’s collection includes sculptures, manuscripts, and textiles that offer a deep dive into Hyderabad’s cultural heritage."
    },
    {
        "title": "Chilkur Balaji Temple",
        "description": "Known as the 'Visa Balaji' due to the belief that worshippers of Lord Venkateshwara here have their visa applications approved, this temple is a significant pilgrimage site for devotees and offers a peaceful atmosphere."
    },
    {
        "title": "Birla Mandir",
        "description": "An iconic temple dedicated to Lord Venkateshwara, the Birla Mandir is situated on a hilltop and offers panoramic views of the city. The temple’s stunning marble architecture makes it a popular destination."
    },
    {
        "title": "Necklace Road",
        "description": "A scenic road along Hussain Sagar Lake, Necklace Road is perfect for a leisurely walk or a drive, offering breathtaking views of the city’s skyline and the beautiful lake."
    },
    {
        "title": "Laad Bazaar",
        "description": "A bustling market located near Charminar, Laad Bazaar is famous for its traditional jewelry, particularly bangles, and a wide range of handicrafts, making it a perfect spot for shopping."
    }
],


"services": [
    {
      "name": "Pune to Hyderabad Cabs",
      "description": "Morya Cab provides reliable and comfortable cab services for your journey from Pune to Hyderabad. Whether you're traveling for business, leisure, or any other reason, we ensure a smooth and pleasant ride."
    },
    {
      "name": "Pune to Hyderabad Taxi Booking",
      "description": "Booking a taxi for your Pune to Hyderabad trip is easy with Morya Cab. You can book your ride online or by phone, making the process hassle-free."
    },
    {
      "name": "Pune to Hyderabad Car Rental",
      "description": "Morya Cab offers flexible car rental services for your Pune to Hyderabad trip. Choose from a variety of vehicles, including luxury options and spacious cars, for a comfortable journey."
    },
    {
      "name": "Pune to Hyderabad Taxi Rates",
      "description": "Morya Cab offers competitive and transparent taxi rates for your Pune to Hyderabad journey. We ensure that you get the best value for your trip without compromising comfort."
    },
    {
      "name": "Pune to Hyderabad Cab Charges",
      "description": "We provide upfront and clear cab charges for your trip from Pune to Hyderabad, ensuring there are no hidden fees and that you are fully aware of the costs before your journey."
    },
    {
      "name": "Pune to Hyderabad Cab Pricing",
      "description": "Morya Cab offers fair and competitive pricing for your Pune to Hyderabad trip. Our pricing is designed to provide the best value while maintaining a high standard of service."
    },
    {
      "name": "Pune to Hyderabad Private Car Hire",
      "description": "For a more private and personalized journey, Morya Cab offers private car hire services for your Pune to Hyderabad trip. Travel in comfort with a professional driver, enjoying the freedom and convenience of a private vehicle."
    },
    {
      "name": "Pune to Hyderabad Cab Cost",
      "description": "Morya Cab offers clear and upfront costs for your journey from Pune to Hyderabad. Our pricing is competitive and affordable, ensuring you get the best value for your trip."
    },
    {
      "name": "Pune to Hyderabad Taxi Service",
      "description": "Morya Cab provides reliable and efficient taxi services for your Pune to Hyderabad trip. Our experienced drivers and well-maintained vehicles ensure a smooth and enjoyable ride throughout your journey."
    },
    {
      "name": "Pune to Hyderabad Cabs",
      "description": "Morya Cab offers a range of cabs for your trip from Pune to Hyderabad, including economical options, luxury cars, and spacious vehicles. Whatever your preference, we have the perfect cab for you."
    },
    {
      "name": "Cab from Pune to Hyderabad",
      "description": "Traveling from Pune to Hyderabad? Morya Cab offers dependable and comfortable cab services to make your trip as smooth as possible. Book your ride today for a pleasant journey."
    },
    {
      "name": "Pune to Hyderabad Taxi",
      "description": "For a comfortable and efficient taxi service from Pune to Hyderabad, Morya Cab is the perfect choice. Our drivers are experienced, and our vehicles are well-maintained for a safe and enjoyable journey."
    },
    {
      "name": "Pune to Hyderabad Airport Cab",
      "description": "Morya Cab offers taxi services for a smooth ride from Pune to Hyderabad Airport. We ensure timely arrivals and a stress-free journey, so you don't have to worry about missing your flight."
    },
    {
      "name": "Pune to Telangana Cab Service",
      "description": "Morya Cab provides reliable cab services from Pune to Telangana, ensuring a comfortable and safe journey. We offer a range of vehicles to suit your needs, whether for business or leisure."
    },
    {
      "name": "Pune to Mysore Ooty Package",
      "description": "Morya Cab offers customized travel packages from Pune to Mysore and Ooty. If you’re planning a sightseeing trip, we can arrange the perfect itinerary with comfortable and well-maintained vehicles."
    },
    {
      "name": "Pune to Hyderabad Innova Crysta",
      "description": "For a premium experience, Morya Cab offers the Innova Crysta for your Pune to Hyderabad trip. Enjoy a luxury ride with extra space and superior comfort, perfect for long journeys."
    },
    {
      "name": "Pune to Hyderabad Tempo Traveller on Rent",
      "description": "Morya Cab offers tempo traveller rentals for your group trip from Pune to Hyderabad. Enjoy a spacious and comfortable journey with friends or family in our well-maintained vehicles."
    },
    {
      "name": "Pune to Hyderabad Sedan Cabs",
      "description": "Morya Cab offers sedan cab rentals for your Pune to Hyderabad trip, providing a comfortable and economical ride. Book your sedan with us for a smooth and convenient journey."
    }
  ],


  tableData: [
    ["Pune to Hyderabad Cabs", "-Pune to Hyderabad Taxi Booking"],
    ["Pune to Hyderabad Car Rental", "-Pune to Hyderabad Taxi Rates"],
    ["Pune to Hyderabad Cab Charges", "-Pune to Hyderabad Cab Pricing"],
    ["Pune to Hyderabad Private Car Hire", "-Pune to Hyderabad Cab Cost"],
    ["Pune to Hyderabad Taxi Service", "-Pune to Hyderabad Cabs"],
    ["Cab from Pune to Hyderabad", "-Pune to Hyderabad Taxi"],
    ["Pune to Hyderabad Airport Cab", "-Pune to Telangana Cab Service"],
    ["Pune to Mysore Ooty Package", "-Pune to Hyderabad Innova Crysta"],
    ["Pune to Hyderabad Tempo Traveller on Rent", "-Pune to Hyderabad Sedan Cabs"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Morya Cab, we understand that time is precious, especially for long-distance travel. Whether you're heading to Hyderabad for business, a family visit, or a vacation, we ensure punctual pickups and timely drop-offs, making your journey smooth and stress-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a variety of well-maintained vehicles, including sedans, SUVs, and premium cars, ensuring you travel in comfort. All vehicles come with air conditioning, ample seating, and enough luggage space, so you can relax during your trip to Hyderabad."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are well-trained and experienced in long-distance travel. They are familiar with the best routes to Hyderabad, ensuring a smooth ride. Our drivers are professional, courteous, and always prioritize your safety and comfort throughout the journey."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Morya Cab offers competitive and transparent pricing for your Pune to Hyderabad trip. We provide clear and upfront pricing with no hidden charges, ensuring that you get the best value for your money."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. Our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking, ensuring a secure and comfortable journey to Hyderabad."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Morya Cab is available 24/7, so whether you're traveling early in the morning or late at night, we're here to meet your travel needs. Our customer service team is available at any time for assistance."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a Pune to Hyderabad taxi with Morya Cab is easy and hassle-free. You can book online through our website or app, or contact our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you're traveling for business, leisure, or sightseeing, we offer customized travel packages to suit your specific needs. Let us know your preferences, and we’ll tailor your trip to make it a memorable one."
    }
]














    }

    const faqData = [
        {
          question: "How can I book a taxi from Pune to Hyderabad with Morya Cab?",
          answer: "You can easily book a taxi online through our website or mobile app. Alternatively, you can contact our customer service team for assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, all our drivers are highly experienced in long-distance travel and are familiar with the best routes to Hyderabad, ensuring a safe and smooth journey."
        },
        {
          question: "What types of vehicles are available for the Pune to Hyderabad trip?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all designed to provide comfort and convenience during your long-distance trip."
        },
        {
          question: "How do I pay for my Pune to Hyderabad taxi rental?",
          answer: "We offer flexible payment options, including cash, credit/debit cards, and online payment via our app, so you can choose the most convenient method for you."
        },
        {
          question: "Can I book a round trip from Pune to Hyderabad?",
          answer: "Yes, you can easily book a round trip. Just provide us with the details of your return journey, and we’ll take care of the rest."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any additional charges, such as waiting time or detours, will be clearly communicated to you upfront, ensuring complete transparency in pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Hyderabad?",
          answer: "Yes, we offer sightseeing services in Hyderabad. Explore famous attractions like Charminar, Golconda Fort, and Hussain Sagar Lake with a comfortable and spacious vehicle."
        },
        {
          question: "What is the luggage allowance for a Pune to Hyderabad taxi?",
          answer: "Our vehicles have ample space for standard luggage. If you have extra luggage or specific needs, please inform us during the booking process, and we’ll make necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel to Hyderabad?",
          answer: "Yes, we provide corporate travel services, offering reliable and comfortable transport for business trips, meetings, or team outings to Hyderabad."
        },
        {
          question: "Why should I choose Morya Cab for Pune to Hyderabad travel?",
          answer: "Morya Cab ensures a comfortable, reliable, and safe journey with professional drivers, well-maintained vehicles, and transparent pricing, making your trip to Hyderabad smooth and enjoyable."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Vikas Shah',
          role: 'Traveler',
          review: "We had a great experience with Morya Cab on our trip to Hyderabad. The car was spacious and clean, and the driver was very professional. The journey was smooth and comfortable. Highly recommended!",
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Ms. Priya Deshmukh',
          role: 'Business Traveler',
          review: "Booking a taxi for our business trip to Hyderabad was seamless. Morya Cab offered excellent service, with a professional driver and comfortable car. We will definitely use their services for future trips!",
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
        "name": "Pune to Hyderabad Cabs",
        "description": "Affordable and reliable taxi services from Pune to Hyderabad. Enjoy comfortable rides with options like Innova Crysta, Tempo Traveller, and more.",
        "provider": {
          "@type": "Organization",
          "name": "Pune Hyderabad Cabs",
          "url": "https://www.punehyderabadcabs.com",
          "telephone": "+91-9999999999",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 20, Pune Mall, Pune",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411001",
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
            "description": "Taxi service from Pune to Hyderabad per day"
          }
        },
        "keywords": "Pune to Hyderabad Cabs, Pune to Hyderabad Taxi Booking, Pune to Hyderabad Car Rental, Pune to Hyderabad Taxi Rates, Pune to Hyderabad Cab Charges, Pune to Hyderabad Cab Pricing, Pune to Hyderabad Private Car Hire, Pune to Hyderabad Cab Cost, Pune to Hyderabad Taxi Service, Cab from Pune to Hyderabad, Pune to Hyderabad Taxi, Pune to Hyderabad Airport Cab, Pune to Telangana Cab Service, Pune to Mysore Ooty Package, Pune to Hyderabad Innova Crysta, Pune to Hyderabad Tempo Traveller on Rent, Pune to Hyderabad Sedan Cabs"
      };
      

    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Hyderabad Cabs | Affordable Taxi Service for Long-Distance Travel | Call: +91 9371304510</title>
  <meta
    name="description"
    content="Affordable and reliable taxi services from Pune to Hyderabad. Enjoy comfortable rides with options like Innova Crysta, Tempo Traveller, and more."
  />
  <meta
    name="keywords"
    content="Pune to Hyderabad Cabs, Pune to Hyderabad Taxi Booking, Pune to Hyderabad Car Rental, Pune to Hyderabad Taxi Rates, Pune to Hyderabad Cab Charges, Pune to Hyderabad Cab Pricing, Pune to Hyderabad Private Car Hire, Pune to Hyderabad Cab Cost, Pune to Hyderabad Taxi Service, Cab from Pune to Hyderabad, Pune to Hyderabad Taxi, Pune to Hyderabad Airport Cab, Pune to Telangana Cab Service, Pune to Mysore Ooty Package, Pune to Hyderabad Innova Crysta, Pune to Hyderabad Tempo Traveller on Rent, Pune to Hyderabad Sedan Cabs"
  />
  <meta property="og:title" content="Pune to Hyderabad Cabs | Affordable Taxi Service for Long-Distance Travel" />
  <meta
    property="og:description"
    content="Affordable and reliable taxi services from Pune to Hyderabad. Enjoy comfortable rides with options like Innova Crysta, Tempo Traveller, and more."
  />
  <meta property="og:url" content="https://www.punehyderabadcabs.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.punehyderabadcabs.com/images/pune-to-hyderabad-taxi.jpg" />
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
                            <img src='/images/keyword/83.jpg' alt='img' />
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

export default Punetohyderabadcabs;