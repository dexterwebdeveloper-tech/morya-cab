
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';

import FAQ from './FAQ';
import UsePageTracking from '../components/usePageTracking';


function Punetokonkandarshancabs() {



    const cardData =
    {
        keyword: 'Pune to Konkan Darshan Cabs  ',
        heading: 'Morya Cabs:  Pune to Konkan Darshan Cabs ',
        headingDescription: 'Looking for a relaxing and scenic getaway to Konkan from Pune? Morya Cabs provides the best Pune to Konkan Darshan cab services, offering comfortable, safe, and affordable transportation for your journey. Whether you are heading to visit the stunning beaches, historical forts, or enjoy the natural beauty of Konkan, our professional drivers and well-maintained fleet ensure a hassle-free experience. From coastal views to serene landscapes, embark on your Konkan Darshan with Morya Cabs and experience a smooth, pleasant ride.',

        top: 'Top Places to Visit in Konkan with Morya Cabs',

        topPlaces: [
            {
                "title": "Alibaug",
                "description": "A popular beach destination near Pune, Alibaug is known for its pristine beaches, historic forts, and beautiful landscapes. Relax by the beach or explore the ancient Kolaba Fort with Morya Cabs."
            },
            {
                "title": "Ganpatipule",
                "description": "Famous for its serene beach and the Ganpatipule Temple, this picturesque coastal town offers a peaceful retreat. It’s perfect for a spiritual journey or a family vacation."
            },
            {
                "title": "Ratnagiri",
                "description": "Known for its rich history and natural beauty, Ratnagiri offers scenic beaches, historic forts, and delicious Alphonso mangoes. Morya Cabs makes your journey to this coastal town easy and enjoyable."
            },
            {
                "title": "Tarkarli",
                "description": "Tarkarli is renowned for its beautiful beach, water sports activities, and clear waters. It’s an ideal destination for adventure seekers and nature lovers."
            },
            {
                "title": "Malvan",
                "description": "Famous for its beautiful beaches, Malvan is the place to visit for those who love the sea. Visit the Sindhudurg Fort or enjoy delicious Malvani cuisine at the local eateries."
            },
            {
                "title": "Sindhudurg Fort",
                "description": "Located off the coast of Malvan, Sindhudurg Fort is a historical monument that stands as a reminder of Maratha bravery. A must-visit for history buffs and adventure lovers."
            },
            {
                "title": "Diveagar Beach",
                "description": "A hidden gem in Konkan, Diveagar is known for its peaceful beach and surrounding beauty. It’s an ideal spot to relax and enjoy nature without the hustle and bustle of crowded tourist destinations."
            },
            {
                "title": "Harihareshwar",
                "description": "Known for its scenic beauty and serene beach, Harihareshwar is a perfect destination for a spiritual retreat. The ancient Harihareshwar Temple attracts visitors for both its peaceful surroundings and historical significance."
            },
            {
                "title": "Dapoli",
                "description": "A charming hill station in Konkan, Dapoli offers stunning views of the Arabian Sea, along with historic temples and forts. It’s a perfect destination for a family outing or a romantic getaway."
            },
            {
                "title": "Kunkeshwar",
                "description": "Kunkeshwar is known for its beautiful beach and the Kunkeshwar Temple. The peaceful atmosphere and natural beauty make it an excellent spot for nature lovers and spiritual seekers."
            }
        ],



        "services": [
            {
              "name": "Pune to Konkan Darshan Taxi Services",
              "description": "Morya Cab offers reliable and comfortable taxi services for your Pune to Konkan Darshan trip. Explore the scenic beauty and rich culture of Konkan with our professional drivers and well-maintained vehicles. Whether you’re traveling for leisure or a spiritual journey, we ensure a smooth and pleasant experience throughout your trip."
            },
            {
              "name": "Pune to Konkan Darshan Cab Booking",
              "description": "Booking a cab for your Pune to Konkan Darshan journey is simple and quick with Morya Cab. Choose between one-way or round-trip services, and enjoy a hassle-free ride to the beautiful Konkan region. Book your taxi online or via phone for convenience and flexibility."
            },
            {
              "name": "Pune to Konkan Darshan Car Rental",
              "description": "If you prefer flexibility during your journey, Morya Cab provides car rental services for your Pune to Konkan Darshan trip. Rent a car of your choice and travel at your own pace while enjoying the stunning landscapes and attractions in Konkan."
            },
            {
              "name": "Pune to Konkan Darshan Chauffeur-Driven Cabs",
              "description": "Morya Cab offers chauffeur-driven cabs for your Pune to Konkan Darshan journey. With a professional driver at the wheel, you can sit back, relax, and enjoy the scenic views along the way without worrying about directions or road conditions."
            },
            {
              "name": "Pune to Konkan Darshan One-Way Taxi",
              "description": "Morya Cab provides one-way taxi services for those traveling from Pune to Konkan Darshan. Whether you're planning a one-day trip or a longer visit, we offer affordable and reliable one-way rides to your destination, ensuring a comfortable journey."
            },
            {
              "name": "Pune to Konkan Darshan Round Trip Cabs",
              "description": "If you're planning a round trip to Konkan, Morya Cab offers round-trip cabs from Pune. Our round-trip services are designed for your convenience, ensuring that your journey is comfortable and well-planned from start to finish."
            },
            {
              "name": "Pune to Konkan Darshan Luxury Taxi",
              "description": "For a premium travel experience, Morya Cab offers luxury taxi services for your Pune to Konkan Darshan trip. Enjoy enhanced comfort, spacious interiors, and top-notch amenities during your travel to Konkan’s most beautiful destinations."
            },
            {
              "name": "Pune to Konkan Darshan Travel Packages",
              "description": "Morya Cab offers tailored Konkan Darshan travel packages to suit your travel needs. Our packages include transport, sightseeing, and accommodation options, ensuring that your Konkan experience is both relaxing and enjoyable."
            },
            {
              "name": "Pune to Konkan Darshan Private Car Hire",
              "description": "If you prefer a private and personalized experience, Morya Cab offers private car hire for your Pune to Konkan Darshan journey. Travel in comfort and privacy with your own vehicle and driver, making your trip to Konkan unforgettable."
            },
            {
              "name": "Pune to Konkan Darshan Taxi Charges",
              "description": "Morya Cab provides transparent taxi charges for your Pune to Konkan Darshan journey. We ensure that our prices are competitive and fair, with no hidden charges. You’ll know the cost of your trip in advance, so you can plan accordingly and enjoy your travel stress-free."
            },
            {
              "name": "Pune to Alibaug Beach Taxi",
              "description": "Planning a trip to Alibaug Beach from Pune? Morya Cab offers dedicated taxi services for your Pune to Alibaug Beach journey. Enjoy a smooth and comfortable ride as you head to one of Konkan's most popular beach destinations."
            },
            {
              "name": "Pune to Tarkarli Beach Cab Fare",
              "description": "For those visiting Tarkarli Beach, Morya Cab provides affordable and reliable cab services. Whether you’re going for a day trip or an extended stay, our taxis ensure a comfortable and timely ride to Tarkarli Beach at competitive fares."
            },
            {
              "name": "Pune to Kashid Beach Cabs",
              "description": "Visit the beautiful Kashid Beach with Morya Cab’s comfortable and affordable cab services. Our experienced drivers will take you from Pune to Kashid in a safe and efficient manner, allowing you to enjoy the natural beauty of the beach."
            },
            {
              "name": "Pune to Malvan Beach Taxi Service",
              "description": "Malvan Beach is another popular destination in Konkan, and Morya Cab offers convenient taxi services for your Pune to Malvan Beach trip. Our taxis are well-maintained and driven by professional drivers to ensure a comfortable journey."
            },
            {
              "name": "Pune to Diveagar Beach Tempo Traveller",
              "description": "For larger groups heading to Diveagar Beach, Morya Cab offers tempo traveller services. With ample space and a comfortable ride, our tempo travellers are perfect for group trips, making sure everyone enjoys the scenic journey to Diveagar Beach."
            },
            {
              "name": "Pune to Ganpatipule Beach Cab Service",
              "description": "Morya Cab provides reliable and efficient cab services for your trip to Ganpatipule Beach. Known for its serene beaches and temples, Ganpatipule is a must-visit destination in Konkan, and we make sure your journey is comfortable and hassle-free."
            },
            {
              "name": "Pune to Ratnagiri Cab Service",
              "description": "If you're visiting Ratnagiri, Morya Cab offers comfortable and convenient cab services. Travel in style and comfort from Pune to Ratnagiri, where you can explore beautiful beaches, historical forts, and the rich cultural heritage of Konkan."
            },
            {
              "name": "Pune to Harihareshwar Beach Taxi Service",
              "description": "Morya Cab offers specialized taxi services to Harihareshwar Beach, a peaceful and serene beach destination in Konkan. Whether you’re traveling for leisure or spirituality, our taxis provide a comfortable and safe ride to this beautiful location."
            },
            {
              "name": "Contact Information for Pune to Konkan Darshan Taxi Services",
              "description": "For booking or inquiries, contact Morya Cab at +91 9371304510. We offer reliable and comfortable taxi services for your Pune to Konkan Darshan journey. Let us make your travel experience memorable and stress-free. Book your taxi today!"
            }
          ],



          tableData: [
            ["Pune to Konkan Darshan Taxi Services", "-Pune to Konkan Darshan Cab Booking"],
            ["Pune to Konkan Darshan Car Rental", "-Pune to Konkan Darshan Chauffeur-Driven Cabs"],
            ["Pune to Konkan Darshan One-Way Taxi", "-Pune to Konkan Darshan Round Trip Cabs"],
            ["Pune to Konkan Darshan Luxury Taxi", "-Pune to Konkan Darshan Travel Packages"],
            ["Pune to Konkan Darshan Private Car Hire", "-Pune to Konkan Darshan Taxi Charges"],
            ["Pune to Alibaug Beach Taxi", "-Pune to Tarkarli Beach Cab fare"],
            ["Pune to Kashid Beach Cabs", "-Pune to Malvan Beach Taxi Service"]
        ],
        
        whychoose: [
            {
                "WhyChooseheading": "Reliable and On-Time Service",
                "WhyChoosedescription": "At Morya Cab, we understand the importance of timely travel for your Konkan Darshan trip. Our drivers ensure you have a prompt pickup from Pune and timely drop-offs, making your journey as stress-free as possible."
            },
            {
                "WhyChooseheading": "Comfortable and Spacious Vehicles",
                "WhyChoosedescription": "We offer a wide range of vehicles including sedans, SUVs, and premium cars, all well-maintained and designed to provide comfort on long journeys. With air conditioning, ample space, and comfortable seating, your trip from Pune to Konkan will be a relaxing experience."
            },
            {
                "WhyChooseheading": "Experienced and Professional Drivers",
                "WhyChoosedescription": "Our drivers are experts in long-distance travel and are well-versed in the best routes to Konkan. They ensure a smooth, safe, and comfortable journey, taking the stress out of your trip so you can enjoy the scenic beauty of Konkan."
            },
            {
                "WhyChooseheading": "Affordable and Transparent Pricing",
                "WhyChoosedescription": "Morya Cab provides affordable and transparent pricing, with no hidden charges. You’ll receive a clear breakdown of the fare upfront, ensuring you know exactly what to expect. We believe in offering competitive rates with excellent value for your money."
            },
            {
                "WhyChooseheading": "Safe and Comfortable Journey",
                "WhyChoosedescription": "We prioritize your safety. All our vehicles come equipped with modern safety features like airbags, seat belts, and GPS tracking to ensure you have a secure and pleasant ride to Konkan."
            },
            {
                "WhyChooseheading": "24/7 Availability",
                "WhyChoosedescription": "Morya Cab is available 24/7, so whether you’re planning an early morning departure or a late-night return, we’ll be there to accommodate your schedule. Our customer service team is also available at all times to assist with bookings or queries."
            },
            {
                "WhyChooseheading": "Hassle-Free Booking Process",
                "WhyChoosedescription": "Booking your Pune to Konkan Darshan cab with Morya Cab is quick and easy! You can book your ride through our website, mobile app, or by contacting our customer service team, who are always ready to assist you."
            },
            {
                "WhyChooseheading": "Customized Travel Packages",
                "WhyChoosedescription": "Whether you’re visiting Konkan for a spiritual journey or for sightseeing, we offer customized travel packages that suit your needs. Let us know your preferences, and we’ll create a tailored trip for you to make your Konkan Darshan experience even more special."
            }
        ]
        
        
















    }

    const faqData = [
        {
          question: "How can I book a Pune to Konkan Darshan cab with Morya Cab?",
          answer: "You can book your ride easily through our website, mobile app, or by contacting our customer service team for personalized assistance."
        },
        {
          question: "Are the drivers experienced for long-distance travel?",
          answer: "Yes, our drivers are highly experienced and familiar with the best routes to Konkan, ensuring a smooth and safe long-distance trip."
        },
        {
          question: "What types of vehicles are available for Pune to Konkan Darshan travel?",
          answer: "We offer a variety of vehicles, including sedans, SUVs, and premium cars, all designed for comfort during long trips."
        },
        {
          question: "How do I pay for my Pune to Konkan Darshan cab rental?",
          answer: "We offer multiple payment options, including cash, credit/debit cards, and online payments via our app for your convenience."
        },
        {
          question: "Can I book a round trip from Pune to Konkan Darshan?",
          answer: "Yes, we offer round trip services. Simply provide your return details, and we will ensure a seamless journey both ways."
        },
        {
          question: "Are there any extra charges for waiting or detours?",
          answer: "Any extra charges for waiting time or detours will be clearly communicated to you upfront, ensuring transparency in our pricing."
        },
        {
          question: "Can I hire a taxi for sightseeing in Konkan?",
          answer: "Yes, we offer sightseeing tours in Konkan. Explore beautiful beaches, temples, and scenic landscapes with our experienced drivers guiding you through the must-see spots."
        },
        {
          question: "What is the luggage allowance for a Pune to Konkan Darshan taxi?",
          answer: "Our vehicles can comfortably accommodate standard luggage. If you have more luggage or specific requirements, please inform us during the booking process, and we’ll make the necessary arrangements."
        },
        {
          question: "Is Morya Cab available for corporate travel between Pune and Konkan?",
          answer: "Yes, we provide corporate travel services, including group trips or business-related visits, between Pune and Konkan."
        },
        {
          question: "Why should I choose Morya Cab for my Pune to Konkan Darshan trip?",
          answer: "Morya Cab ensures a comfortable, affordable, and safe journey with experienced drivers, well-maintained vehicles, and exceptional customer service, making it the ideal choice for your Konkan Darshan trip."
        }
      ];
      
      const testimonialData = [
        {
          id: 1,
          name: 'Mr. Vinod Patil',
          role: 'Family Traveler',
          review: 'Our family had a wonderful time on our Konkan Darshan trip with Morya Cab. The vehicle was spacious and well-maintained, and the driver was knowledgeable about the route. The entire journey was smooth and comfortable. We’ll definitely choose Morya Cab again!',
          rating: 5,
          quoteIcon: '/img/icon/testi-quote.svg',
        },
        {
          id: 2,
          name: 'Mrs. Sangeeta Joshi',
          role: 'Traveler',
          review: 'Had an amazing experience with Morya Cab on our trip to Konkan. The driver was punctual, friendly, and took us to all the beautiful spots. Highly recommended for anyone looking to explore Konkan with comfort!',
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


    
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Konkan Darshan Cab",
  "image": "https://moryacab.com/assets/images/pune-to-konkan-darshan-cab.jpg",
  "description": "Book Pune to Konkan Darshan cab service with Morya Cab. Travel across Konkan’s scenic beaches and temples with Sedan, SUV, Innova Crysta, and Tempo Traveller options. Affordable fares, clean AC cars, experienced drivers, and reliable service for family, group, and pilgrimage tours.",
  "brand": {
    "@type": "Brand",
    "name": "Morya Cab"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "8347"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "9500",
    "availability": "https://schema.org/InStock",
    "url": "https://moryacab.com/pune-to-konkan-darshan-cab"
  }
};










    return (
        <div>
            <UsePageTracking/>
<Helmet>
  <title>Pune to Konkan Darshan Cab | Coastal Tour Taxi – Morya Cab</title>
  <meta
    name="description"
    content="Hire Pune to Konkan Darshan cabs with Morya Cab. Enjoy clean AC Sedan, SUV, Innova Crysta & Tempo Traveller for family, group, and pilgrimage tours across Konkan beaches & temples at affordable fares."
  />
  <meta
    name="keywords"
    content="Pune to Konkan cab, Pune to Konkan Darshan taxi, Pune to Konkan cab booking, Pune to Konkan Innova cab, Pune to Konkan SUV cab, Pune to Konkan Tempo Traveller, Pune to Konkan beaches cab, Pune to Konkan temple tour cab, Pune to Ganpatipule cab, Pune to Tarkarli cab, Pune to Konkan sightseeing cab, Morya Cab Pune to Konkan"
  />
  <link rel="canonical" href="https://moryacab.com/pune-to-konkan-darshan-cab" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Pune to Konkan Darshan Cab | Coastal Tour Taxi – Morya Cab" />
  <meta property="og:description" content="Book Pune to Konkan Darshan taxi service with Morya Cab. Affordable fares, clean AC cars, verified drivers & multiple options for family, group & pilgrimage trips across Konkan." />
  <meta property="og:url" content="https://moryacab.com/pune-to-konkan-darshan-cab" />
  <meta property="og:image" content="https://moryacab.com/assets/images/pune-to-konkan-darshan-cab.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
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
                            <img src='/images/keyword/52.jpg' alt='img' />
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

export default Punetokonkandarshancabs;