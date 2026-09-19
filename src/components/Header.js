import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false); // To track if user is scrolling

  // Function to handle scroll events
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Get current scroll position
    if (scrollPosition > 100) { // Adjust the scroll position value as per your need
      setScrolling(true); // If scrolled down more than 100px, set scrolling to true
    } else {
      setScrolling(false); // If scrolled up, reset scrolling to false
    }
  };

  // Add event listener on component mount and clean up on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // const toggleSearch = () => {
  //   setIsSearchOpen(!isSearchOpen);
  // };

  return (
    <header className={`header ${scrolling ? 'sticky-header' : ''}`}>
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-xl-between align-items-center">
            <div className="col-auto">
              <div className="header-top-contact">
                <ul className='anchor d-md-flex'>
                  <li className='px-md-5 fw-bold'>
                    <a href="tel:+919371304510 fw-bold">
                      <i className="fas fa-phone-volume text-white"></i> +91 9371304510
                    </a>
                  </li>
                  <li className='px-md-5 fw-bold'>
                    <a href="tel:+918379975860 ">
                      <i className="fas fa-phone-volume text-white"></i> +91 8379975860
                    </a>
                  </li>
                  <li>
                    <a href="mailto:booking@moryacab.com">
                      <i className="far fa-envelope"></i>
                      <span className='text-white fw-bold'> booking@moryacab.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-navigation">
        <Navbar expand="lg">
          <Container>
            <img src="/images/logo.jpg" className='logoo' alt="logo" />
            <Navbar.Toggle aria-controls="main_nav" onClick={toggleNav}>
              <i className="fas fa-bars darkcolor"></i> {/* Mobile Menu Icon */}
            </Navbar.Toggle>

            <Navbar.Collapse id="main_nav" className={isNavOpen ? "show" : ""}>
              <Nav className="mx-auto">
                <Nav.Link href="/" className='fw-bold nav-item'>Home</Nav.Link>
                <NavDropdown title="About Us" id="about-us-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/about" className='fw-bold nav-item'>About Us</NavDropdown.Item>
                  <NavDropdown.Item href="/term-condition" className='fw-bold nav-item'>Term & Condition</NavDropdown.Item>
                  <NavDropdown.Item href="/privacy-policy" className='fw-bold '>Privacy Policy</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/services" className='fw-bold nav-item'>Services</Nav.Link>
                <Nav.Link href="/our-fleet" className='fw-bold nav-item'>Our Fleet</Nav.Link>
                <Nav.Link href="/packages" className='fw-bold nav-item'>Packages</Nav.Link>
                <Nav.Link href="/booking" className='fw-bold nav-item'>Booking</Nav.Link>
                <Nav.Link href="/gallery" className='fw-bold nav-item'>Gallery</Nav.Link>
                <NavDropdown title="Contact Us" id="contact-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/contact-us" className='fw-bold nav-item'>Contact Us</NavDropdown.Item>
                  <NavDropdown.Item href="/enquiry" className='fw-bold'>Enquiry</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/blog" className='fw-bold nav-item'>Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Search Area */}
      {isSearchOpen && (
        <div className="search-area">
          <form action="#">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Type Keyword..." />
              <button type="submit" className="search-icon-btn">
                <i className="far fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;






