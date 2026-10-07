import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
const Galleryy = () => {

  const galleryImages = [
    
    "/images/our-fleet/3.jpg",
    "/images/our-fleet/5.jpg",
    "/images/our-fleet/7.jpg",
    "/images/our-fleet/4.jpg",
    "/images/our-fleet/8.jpg",
    "/images/our-fleet/10.jpg",
    "/images/gallery/1.jpeg",
    "/images/gallery/2.jpeg",
    "/images/gallery/4.jpeg",
    "/images/gallery/3.jpeg",
    "/images/gallery/5.jpeg",
    "/images/gallery/6.jpeg",
    "/images/gallery/7.jpeg",
    "/images/gallery/8.jpeg",
    "/images/gallery/9.jpeg",
    "/images/gallery/16.jpeg",

    "/images/gallery/11.jpeg",
    "/images/gallery/12.jpeg",
    "/images/gallery/10.jpeg",
    "/images/gallery/17.jpeg",
    "/images/gallery/18.jpeg",

    "/images/gallery/13.jpeg",
    "/images/gallery/14.jpeg",
    "/images/gallery/15.jpeg",
   
  ];


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Function to open the modal with the clicked image
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  // Function to go to the next image
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  // Function to go to the previous image
  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <>
    <Helmet>
        <title>Pune to Mumbai cab | Morya Cab | Call: +91 9359401610</title>
        <meta
          name="description"
          content="Book your reliable Pune to Mumbai taxi service with Morya Cabs. We offer one-way, round trip, luxury taxis, and shared cabs for your comfortable journey."
        />
        <meta name="keywords" content="Pune to Mumbai taxi, Pune to Mumbai cab, Pune to Mumbai taxi booking, Pune to Mumbai one-way taxi, Pune to Mumbai round trip, Pune to Mumbai luxury taxi, Pune to Mumbai airport taxi" />
        <meta property="og:title" content="Pune to Mumbai Taxi | Morya Cabs" />
        <meta property="og:description" content="Book affordable and reliable Pune to Mumbai taxi service with Morya Cabs. Choose from one-way, round trip, and luxury taxis for a comfortable ride." />
        <meta property="og:url" content="https://moryacab.com/pune-to-mumbai-taxi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://moryacab.com/img/pune-to-mumbai-taxi.jpg" />
      </Helmet> 


      <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(/img/bg/breadcumb-bg.jpg)' }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Gallery</h1>
            <ul className="breadcumb-menu">
              <li><a href="/">Home</a></li>
              <li>Gallery</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="overflow-hidden space" id="gallery-sec">
        <div className="container">
          
          <div className="row gy-4 gallery-row4">
  {galleryImages.map((image, index) => (
    <div key={index} className="col-md-4 col-sm-6 col-12 ">
      <div className="gallery-box style5">
        <div className="gallery-img global-img Borderr">
          <img
            src={image}
            alt={`gallery image ${index + 1}`}
            onClick={() => openModal(image, index)} // Open modal when clicked
          />
          <a
            href={image}
            className="icon-btn popup-image"
          >
            <i className="fal fa-magnifying-glass-plus"></i>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>

      {/* Modal for viewing the image */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <span className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </span>

            {/* Left navigation button */}
            <button className="modal-nav-btn prev" onClick={prevImage}>
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Modal Image */}
            <img
              src={selectedImage} // Display the selected image
              alt="Selected Gallery"
              className="modal-image"
              onClick={(e) => {
                // If clicked in the center of the image, navigate
                const isLeftSide = e.clientX < window.innerWidth / 2;
                if (isLeftSide) {
                  prevImage();
                } else {
                  nextImage();
                }
              }}
            />

            {/* Right navigation button */}
            <button className="modal-nav-btn next" onClick={nextImage}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Galleryy;
