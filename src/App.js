import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import OurFleet from './pages/OurFleet';
import Booking from './pages/Booking';
import Galleryy from './pages/Gallery';
import ContactInfo from './pages/ContactInfo';
import Enquiry from './pages/Enquiry';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Punetoshirditaxi from './pages/Pune to Shirdi Taxi';
import ScrollToTop from './components/ScrollToTop';
import Punetobhimashankartaxi from './pages/Pune to Bhimashankar Taxi';
import Punetomumbaitaxi from './pages/Pune to Mumbai Taxi';
import Punetolonavalataxi from './pages/Pune to Lonavala Taxi';
import Punetomahabaleshwartaxi from './pages/Pune to Mahabaleshwar Taxi';
import Punetoaurangbadtaxi from './pages/Pune to Aurangabad Taxi';
import Punetonashiktrimbkeshwer from './pages/Pune to Nashik-Trimbakeshwar Taxi';
import Punecarrental from './pages/Pune Car Rental Services';
import Punetoashtavinayak from './pages/Pune to Ashtavinayak Taxi';
import Punetogoataxi from './pages/Pune to Goa Taxi';
import Punetosolapurtaxi from './pages/Pune to Solapur Taxi';
import Punetohyderabadcab from './pages/Pune to Hyderabad Cab';
import Punetokohlapur from './pages/Pune to Kolhapur Taxi';
import Punetobanglore from './pages/Pune to Bangalore Taxi';
import Punetoindore from './pages/Pune to Indore Taxi';
import Mumbaitoshirditaxi from './pages/Mumbai to Shirdi Taxi';
import Borivalitopunetaxi from './pages/Borivali to Pune Taxi Service';
import Vasaitopunetaxiservice from './pages/Vasai to Pune Taxi Service';
import Dombivlitopunetaxi from './pages/Dombivli to Pune Taxi Services';
import Dadartoshirditaxi from './pages/Dadar to Shirdi Taxi Service';
import Mumbaitotrimbkeshwertaxi from './pages/Mumbai to Trimbakeshwar Taxi';
import Mumbaitobhimashankartaxi from './pages/Mumbai to Bhimashankar Taxi';
import Thanetopunetaxi from './pages/Thane to Pune Taxi Service';
import Mumbaitonashiktaxi from './pages/Mumbai to Nashik Taxi';
import Mumbaitolonavaltaxi from './pages/Mumbai to Lonavala Taxi';
import Mumbaiairporttopunetaxi from './pages/Mumbai Airport to Pune Taxi';
import Kandivalitopunetaxi from './pages/Kandivali to Pune Taxi Services';
import Navimumbaitopunetaxi from './pages/Navi Mumbai to Pune Taxi Services';
import Kalyantopunetaxi from './pages/Kalyan to Pune Taxi Service';
import Mumbaicentraltoshirdi from './pages/Mumbai Central to Shirdi Taxi';
import Mumbaiairporttonashiktaxi from './pages/Mumbai Airport to Nashik Taxi';
import Mumbaitomatherantaxi from './pages/Mumbai to Matheran Taxi';
import Mumbaitomahabaleshwer from './pages/Mumbai to Mahabaleshwar Taxi';
import Mumbaitoahmednagartaxi from './pages/Mumbai to Ahmadnagar Taxi';
import Punetoshnbhajinagartaxi from './pages/Pune to Sambhajinagar Taxi';
import Puneairporttomumbaitaxi from './pages/Pune Airport to Mumbai Taxi';
import Mumbaitosolapurtaxi from './pages/Mumbai to Solapur Taxi';
import ContactButtons from './components/ContactButtons';
import Packages from './pages/Packages';
import Punecabservices from './pages/Pune Cab Service';
import PuneOnlinecabbooking from './pages/Pune Online Cab Booking';
import Bestcabserviceinpune from './pages/Best Cab Service in Pune';
import Punetomumbaicabs from './pages/Pune to Mumbai Cabs';
import Punetonashikcabs from './pages/Pune to Nasik Cabs';
import Punetomahabaleshwer from './pages/Pune to Mahabaleshwar Cabs';
import Punetolonavalacabs from './pages/Pune to Lonavala Cabs';
import Punetoshirdicab from './pages/Pune to Shirdi Cab';
import Punetolavasacity from './pages/Pune to Lavasa City Cabs';
import Punetobhimashankarcab from './pages/Pune to Bhimashankar Cab';
import Punetoindorecabs from './pages/Pune to Indore Cabs';
import Punetokonkandarshancabs from './pages/Pune to Konkan Darshan Cabs';
import Punetooutstationcabs from './pages/Pune Outstation Cabs';
import Punetopanchganicabfare from './pages/Pune to Panchgani Cab Fare';
import Punetomumbaiinternatinationalairport from './pages/Pune to Mumbai International Airport Cab';
import Ashtavinakaydarshancab from './pages/Ashtavinayak Darshan Cab';
import Punetonagpurcabs from './pages/Pune to Nagpur Cabs';
import Punetogoacabs from './pages/Pune to Goa Cabs';
import Punetoanjamtaelloracabs from './pages/Pune to Ajanta Ellora Cabs';
import Punetosataracabs from './pages/Pune to Satara Cabs';
import Cabservicenearme from './pages/Cabs Services Near Me';
import Corporatecabservicesinpune from './pages/Corporate Cab Service in Pune';
import Punetopandharpurtaxi from './pages/Pune to Pandharpur Taxi';
import Tempotravelleronrentinpune from './pages/Tempo Traveller On Rent in Pune';
import Innovacrystaonrentinpune from './pages/Innova Crysta On Rent in Pune';
import Swiftdezireonrentinpune from './pages/Swift Dzire On Rent in Pune';
import Punetoimagicataxi from './pages/Pune to Imagica Taxi';
import Minibusonrentinpune from './pages/Mini Bus On Rent in Pune';
import Ertigaonrentinpune from './pages/Ertiga On Rent in Pune';
import KIacarenceonrentinpune from './pages/Kia Carens On Rent in Pune';
import Punetosambhajinagartaxi from './pages/Pune to Sambhaji Nagar Taxi Fare';
import Punetoganpatipunetaxi from './pages/Pune to Ganpatipule Taxi';
import Punetoharihareshwertaxi from './pages/Pune to Harihareshwar Taxi';
import Punetoalibaugcabs from './pages/Pune to Alibag Cabs';
import Punetopanvelcabs from './pages/Pune to Panvel Cabs';
import Punetohyderabadcabs from './pages/Pune to Hyderabad Cabs';
import Punetobangloretaxiservice from './pages/Pune to Bangalore Taxi Service';
import Onewaycabpune from './pages/One Way Cab Pune';
import Taxiserviceinhadapsar from './pages/Taxi Service in Hadapsar';
import Taxiserviceinlohgaon from './pages/Taxi Service in Lohegaon';
import Cabservicesinvimannagar from './pages/Cab Service in Viman Nagar';
import Cabservicesinkharadi from './pages/Cab Service in Kharadi';
import Taxiserviceinhinjewadipune from './pages/Taxi Service in Hinjewadi Pune';
import Punetogujratcab from './pages/Pune to Gujarat Cab Service';
import Punetothanecab from './pages/Pune to Thane Cab';
import Outstationtaxiservice from './pages/Outstation Taxi Service Pune';
import Mumbaicentraltopunetaxi from './pages/Mumbai Central to Pune Taxi';
import Blog from './pages/Blog';
import Punetonashiktrimbkeshwercabs from './pages/Pune To  Nashik Trimbakeshwar Cabs';
import Punetopandharpurcabs from './pages/Pune To Pandharpur Cabs';
import Punetotuljapurcabs from './pages/Pune To Tuljapur Cabs';
import Punetokohlapurcab from './pages/Pune To Kolhapur Cab';
import Punetoashtavinayakcab from './pages/Pune To Ashtavinayak Tour Cab Package';
import Puneto3jyotilingatorspackages from './pages/Pune To 3 Jyotirlinga Tour Package';
import Punetolonavalakhandalacabs from './pages/Pune To Lonavala Khandala Cabs';
import Punetoganpatipule from './pages/Pune to Ganpatipule Cab Booking';
import Punetoakkalkot from './pages/Pune to Akkalkot Cab';
import Punetomumbaiairportcab from './pages/Pune to Mumbai Airport Cab';
import Mumbaiairporttopunecabservice from './pages/Mumbai Airport to Pune Cab Service';
import Affordablecabserviceinpune from './pages/Affordable Cab Service in Pune';
import Punetooutstationtaxi from './pages/Pune To Outstation Taxi Service';
import Onlinecabservicepune from './pages/Online Cab Service Pune';
import Cheapestcabserviceinpune from './pages/Cheapest Cab Service in Pune';








function App() {
  return (
    <Router>
      <Header/>
      <ScrollToTop/>
     <ContactButtons/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-fleet" element={<OurFleet />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Galleryy />} />
        <Route path="/contact-us" element={<ContactInfo />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Pune-to-Shirdi-Taxi" element={<Punetoshirditaxi />} />
        <Route path="/Pune-to-Bhimashankar-Taxi" element={<Punetobhimashankartaxi />} />
        <Route path="/Pune-to-Mumbai-Taxi" element={<Punetomumbaitaxi />} />
        <Route path="/Pune-to-Lonavala-Taxi" element={<Punetolonavalataxi />} />
        <Route path="/Pune-to-Mahabaleshwar-Taxi" element={<Punetomahabaleshwartaxi />} />
        <Route path="/Pune-to-Aurangabad-Taxi" element={<Punetoaurangbadtaxi />} />
        <Route path="/Pune-to-Nashik-Trimbakeshwar-Taxi" element={<Punetonashiktrimbkeshwer />} />
        <Route path="/Pune-Car-Rental-Services" element={<Punecarrental />} />
        <Route path="/Pune-to-Ashtavinayak-Taxi" element={<Punetoashtavinayak />} />
        <Route path="/Pune-to-Goa-Taxi" element={<Punetogoataxi />} />
        <Route path="/Pune-to-Solapur-Taxi" element={<Punetosolapurtaxi />} />
        <Route path="/Pune-to-Hyderabad-Cab" element={<Punetohyderabadcab />} />
        <Route path="/Pune-to-Kolhapur-Taxi" element={<Punetokohlapur />} />
        <Route path="/Pune-to-Bangalore-Taxi" element={<Punetobanglore />} />
        <Route path="/Pune-to-Indore-Taxi" element={<Punetoindore />} />
        <Route path="/Mumbai-to-Shirdi-Taxi" element={<Mumbaitoshirditaxi />} />
        <Route path="/Borivali-to-Pune-Taxi-Service" element={<Borivalitopunetaxi />} />
        <Route path="/Vasai-to-Pune-Taxi-Service" element={<Vasaitopunetaxiservice />} />
        <Route path="/Dombivali-to-Pune-Taxi-Services" element={<Dombivlitopunetaxi />} />
        <Route path="/Dadar-to-Shirdi-Taxi-Service" element={<Dadartoshirditaxi />} />
        <Route path="/Mumbai-to-Trimbakeshwar-Taxi" element={<Mumbaitotrimbkeshwertaxi />} />
        <Route path="/Mumbai-to-Bhimashankar-Taxi" element={<Mumbaitobhimashankartaxi />} />
        <Route path="/Thane-to-Pune-Taxi-Service" element={<Thanetopunetaxi />} />
        <Route path="/Mumbai-to-Nashik-Taxi" element={<Mumbaitonashiktaxi />} />
        <Route path="/Mumbai-to-Lonavala-Taxi" element={<Mumbaitolonavaltaxi />} />
        <Route path="/Mumbai-Airport-to-Pune-Taxi" element={<Mumbaiairporttopunetaxi />} />
        <Route path="/Kandivali-to-Pune-Taxi-Services" element={<Kandivalitopunetaxi />} />
        <Route path="/NaviMumbai-to-Pune-Taxi-Services" element={<Navimumbaitopunetaxi />} />
        <Route path="/Kalyan-to-Pune-Taxi-Service" element={<Kalyantopunetaxi />} />
        <Route path="/Mumbai-Central-to-Shirdi-Taxi" element={<Mumbaicentraltoshirdi />} />
        <Route path="/Mumbai-Airport-to-Nashik-Taxi" element={<Mumbaiairporttonashiktaxi />} />
        <Route path="/Mumbai-to-Matheran-Taxi" element={<Mumbaitomatherantaxi />} />
        <Route path="/Mumbai-to-Mahabaleshwar-Taxi" element={<Mumbaitomahabaleshwer />} />
        <Route path="/Mumbai-to-Ahmadnagar-Taxi" element={<Mumbaitoahmednagartaxi />} />
        <Route path="/Pune-to-Sambhajinagar-Taxi" element={<Punetoshnbhajinagartaxi />} />
        <Route path="/Pune-Airport-to-Mumbai-Taxi" element={<Puneairporttomumbaitaxi />} />
        <Route path="/Mumbai-to-Solapur-Taxi" element={<Mumbaitosolapurtaxi />} />
        <Route path="/Pune-Cab-Service" element={<Punecabservices />} />
        <Route path="/Pune-Online-Cab-Booking" element={<PuneOnlinecabbooking />} />
        <Route path="/Best-Cab-Service-in-Pune" element={<Bestcabserviceinpune />} />
        <Route path="/Pune-to-Mumbai-Cabs" element={<Punetomumbaicabs />} />
        <Route path="/Pune-to-Nasik-Cabs" element={<Punetonashikcabs />} />
        <Route path="/Pune-to-Mahabaleshwar-Cabs" element={<Punetomahabaleshwer />} />
        <Route path="/Pune-to-Lonavala-Cabs" element={<Punetolonavalacabs />} />
        <Route path="/Pune-to-Shirdi-Cab" element={<Punetoshirdicab />} />
        <Route path="/Pune-to-Lavasa-City-Cabs" element={<Punetolavasacity />} />
        <Route path="/Pune-to-Bhimashankar-Cab" element={<Punetobhimashankarcab />} />
        <Route path="/Mumbai-Central-to-Pune-Taxi" element={<Mumbaicentraltopunetaxi />} />
        <Route path="/Pune-to-Indore-Cabs" element={<Punetoindorecabs />} />
        <Route path="/Pune-to-Konkan-Darshan-Cabs" element={<Punetokonkandarshancabs />} />
        <Route path="/Pune-Outstation-Cabs" element={<Punetooutstationcabs />} />
        <Route path="/Pune-to-Panchgani-Cab-Fare" element={<Punetopanchganicabfare />} />
        <Route path="/Pune-to-Mumbai-International-Airport-Cab" element={<Punetomumbaiinternatinationalairport />} />
        <Route path="/Ashtavinayak-Darshan-Cab" element={<Ashtavinakaydarshancab />} />
        <Route path="/Pune-to-Nagpur-Cabs" element={<Punetonagpurcabs />} />
        <Route path="/Pune-to-Goa-Cabs" element={<Punetogoacabs />} />
        <Route path="/Pune-to-Ajanta-Ellora-Cabs" element={<Punetoanjamtaelloracabs />} />
        <Route path="/Pune-to-Satara-Cabs" element={<Punetosataracabs />} />
        <Route path="/Cabs-Services-Near-Me" element={<Cabservicenearme />} />
        <Route path="/Corporate-Cab-Service-in-Pune" element={<Corporatecabservicesinpune />} />
        <Route path="/Pune-to-Pandharpur-Taxi" element={<Punetopandharpurtaxi />} />
        <Route path="/Tempo-Traveller-On-Rent-in-Pune" element={<Tempotravelleronrentinpune />} />
        <Route path="/Innova-Crysta-On-Rent-in-Pune" element={<Innovacrystaonrentinpune />} />
        <Route path="/Swift-Dzire-On-Rent-in-Pune" element={<Swiftdezireonrentinpune />} />
        <Route path="/Pune-to-Imagica-Taxi" element={<Punetoimagicataxi />} />
        <Route path="/Mini-Bus-On-Rent-in-Pune" element={<Minibusonrentinpune />} />
        <Route path="/Ertiga-On-Rent-in-Pune" element={<Ertigaonrentinpune />} />
        <Route path="/Kia-Carens-On-Rent-in-Pune" element={<KIacarenceonrentinpune />} />
        <Route path="/Pune-to-Sambhaji-Nagar-Taxi-Fare" element={<Punetosambhajinagartaxi />} />
        <Route path="/Pune-to-Ganpatipule-Taxi" element={<Punetoganpatipunetaxi />} />
        <Route path="/Pune-to-Harihareshwar-Taxi" element={<Punetoharihareshwertaxi />} />
        <Route path="/Pune-to-Alibag-Cabs" element={<Punetoalibaugcabs />} />
        <Route path="/Pune-to-Panvel-Cabs" element={<Punetopanvelcabs />} />
        <Route path="/Pune-to-Hyderabad-Cabs" element={<Punetohyderabadcabs />} />
        <Route path="/Pune-to-Bangalore-Taxi-Service" element={<Punetobangloretaxiservice />} />
        <Route path="/One-Way-Cab-Pune" element={<Onewaycabpune />} />
        <Route path="/Taxi-Service-in-Hadapsar" element={<Taxiserviceinhadapsar />} />
        <Route path="/Taxi-Service-in-Lohegaon" element={<Taxiserviceinlohgaon />} />
        <Route path="/Cab-Service-in-Viman-Nagar" element={<Cabservicesinvimannagar />} />
        <Route path="/Cab-Service-in-Kharadi" element={<Cabservicesinkharadi />} />
        <Route path="/Taxi-Service-in-Hinjewadi-Pune" element={<Taxiserviceinhinjewadipune />} />
        <Route path="/Pune-to-Gujarat-Cab-Service" element={<Punetogujratcab />} />
        <Route path="/Pune-to-Thane-Cab" element={<Punetothanecab />} />
        <Route path="/Outstation-Taxi-Service-Pune" element={<Outstationtaxiservice />} />
  

  <Route path="/Pune-To-Nashik-Trimbakeshwar-Cabs" element={<Punetonashiktrimbkeshwercabs />} />
<Route path="/Pune-To-Pandharpur-Cabs" element={<Punetopandharpurcabs />} />
<Route path="/Pune-To-Tuljapur-Cabs" element={<Punetotuljapurcabs />} />
<Route path="/Pune-To-Kolhapur-Cab" element={<Punetokohlapurcab />} />
<Route path="/Pune-To-Ashtavinayak-Tour-Cab-Package" element={<Punetoashtavinayakcab />} />
<Route path="/Pune-To-3-Jyotirlinga-Tour-Package" element={<Puneto3jyotilingatorspackages />} />
<Route path="/Pune-To-Lonavala-Khandala-Cabs" element={<Punetolonavalakhandalacabs />} />
<Route path="/Pune-To-Ganpatipule-Cab-Booking" element={<Punetoganpatipule />} />
<Route path="/Pune-To-Akkalkot-Cab" element={<Punetoakkalkot />} />
<Route path="/Pune-To-Mumbai-Airport-Cab" element={<Punetomumbaiairportcab />} />
<Route path="/Mumbai-Airport-To-Pune-Cab-Service" element={<Mumbaiairporttopunecabservice />} />
<Route path="/Affordable-Cab-Service-in-Pune" element={<Affordablecabserviceinpune />} />
<Route path="/Pune-To-Outstation-Taxi-Service" element={<Punetooutstationtaxi />} />
<Route path="/Online-Cab-Service-Pune" element={<Onlinecabservicepune />} />
<Route path="/Cheapest-Cab-Service-in-Pune" element={<Cheapestcabserviceinpune />} />

        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
