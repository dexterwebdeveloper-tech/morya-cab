
const tours = [
  {
    title: "Outstation Cab Services",
    image: "/images/oststation.avif",
    rating: "A perfect hill station with breathtaking viewpoints and strawberry farms.",
  },
  {
    title: "Corporate Event Cab Service in Pune",
    image: "/images/keyword/63.jpg",
    rating: "The city of dreams, known for Marine Drive, Bollywood, and historical landmarks.",
  },
  {
    title: "Pune to Mumbai International Airport Cab",
    image: "/images/keyword/55.jpg",
    rating: "A sacred Jyotirlinga temple surrounded by lush green forests and wildlife.",
  },
];

export default function TourSection() {
  return (
    <section
      className="tour-area position-relative bg-top-center overflow-hidden py-5"
      id="service-sec"
      style={{ backgroundImage: "url(/img/bg/tour_bg_1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <span className="sub-title">Best Places For You</span>
            <h2 className="sec-title">Most Popular Tours</h2>
            <p className="sec-text">
            Explore the best travel destinations with Morya Cab!
            Enjoy seamless rides, comfort, and affordability on your journey. Book now for a hassle-free travel experience!
            </p>
          </div>
        </div>

        <div className="tour-cards">
          <div className="row">
            {tours.map((tour, index) => (
              <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-stretch" key={index}>
                <div className="tour-box text-center w-100">
                  <div className="tour-box_img global-img">
                    <img src={tour.image} alt={tour.title} className="img-fluid" />
                  </div>
                  <div className="tour-content p-3">
                    <h3 className="box-title">
                      <a href="#">{tour.title}</a>
                    </h3>
                    <div className="tour-rating">
                      <span>{tour.rating}</span>
                    </div>
                    <div className="tour-action mt-3">
                      <a href="/booking" className="th-btn style4 th-icon">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
