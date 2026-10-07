import React from 'react';


const tourData = [
  {
    title: "Swift Desire",
    image: "/images/our-fleet/3.jpg",
    seater: "4+1",
    driverAllowance: "₹500",
    perKm: "₹12",
    extraHr: "₹150",
    nightHalt: "₹250",
  },
  {
    title: "Ertiga",
    image: "/images/our-fleet/5.jpg",
    seater: "6+1",
    driverAllowance: "₹500",
    perKm: "₹15",
    extraHr: "₹150",
    nightHalt: "₹250",
  },
  {
    title: "Innova Crysta ",
    image: "/images/our-fleet/7.jpg",
    seater: "6+1",
    driverAllowance: "₹500",
    perKm: "₹22",
    extraHr: "₹150",
    nightHalt: "₹250",
  },
  {
    title: "Kia Carens",
    image: "/images/our-fleet/4.jpg",
    seater: "6+1",
    driverAllowance: "₹500",
    perKm: "₹17",
    extraHr: "₹150",
    nightHalt: "₹250",
  },
  {
    title: "Innova Cab ",
    image: "/images/our-fleet/8.jpg",
    seater: "6+1",
    driverAllowance: "₹500",
    perKm: "₹18",
    extraHr: "₹150",
    nightHalt: "₹250",
  },
  {
    title: "Tempo Traveller",
    image: "/images/our-fleet/10.jpg",
    seater: "17",
    driverAllowance: "₹500",
    perKm: "₹24",
    extraHr: "₹150",
    nightHalt: "₹250",
  },

];

const Booking = () => {
  const handleBookNow = (tourTitle) => {
    const phoneNumber = "+919822344091";
    const message = `I want to Book ${tourTitle} With Morya Cab. Request you Please Send More Details or Call Me. Thank you. `;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(/img/bg/breadcumb-bg.jpg)' }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Booking</h1>
            <ul className="breadcumb-menu">
              <li><a href="/">Home</a></li>
              <li>Booking</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <div className="row">
            {tourData.map((tour, index) => (
              <div key={index} className="col-md-4 py-4">
                <div className="tour-box th-ani">
                  <div className="tour-box_img global-img ">
                    <img src={tour.image} alt={tour.title} />
                  </div>
                  <div className="tour-content bg-darkk">
                    <h3 className="box-title">
                      <h4 href={tour.detailLink} className='darkcolor text-center'>{tour.title}</h4>
                    </h3>
                    <div className="tour-details">
                      <div className="tour-detail-item">
                        <span className="detail-label"><strong>Seater:</strong></span>
                        <span className="detail-value">{tour.seater.replace('+', ' + ')}</span>
                      </div>
                      <div className="tour-detail-item">
                        <span className="detail-label"><strong>Per Km:</strong></span>
                        <span className="detail-value">{tour.perKm.replace(/(\d)(₹)/, '$1 $2')}</span>
                      </div>
                      <div className="tour-detail-item">
                        <span className="detail-label"><strong>Extra Hr:</strong></span>
                        <span className="detail-value">{tour.extraHr.replace(/(\d)(₹)/, '$1 $2')}</span>
                      </div>
                      <div className="tour-detail-item">
                        <span className="detail-label"><strong>Night Halt:</strong></span>
                        <span className="detail-value">{tour.nightHalt.replace(/(\d)(₹)/, '$1 $2')}</span>
                      </div>
                    </div>

                    <div className="tour-action text-center">
                      <button
                        onClick={() => handleBookNow(tour.title)}
                        className="th-btn  "
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
