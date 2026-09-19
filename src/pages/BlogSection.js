import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const blogPosts = [
  {
    id: 1,
    date: 'July 05 2024',
    readTime: 'Lonavala, a picturesque hill station near Pune and Mumbai, is famous for its lush green valleys, misty hills, and stunning waterfalls. Known for attractions like Tiger’s Leap, Bhushi Dam, and Karla Caves, it’s a perfect getaway for nature lovers and adventure seekers. Do not forget to try the famous Lonavala chikki while enjoying the scenic beauty! 🌿⛰️',
    title: 'Pune to Lonavala Taxi',
    image: '/images/keyword/4.jpg',
    link: '/services',
  },
  {
    id: 2,
    date: 'July 06 2024',
    readTime: 'Konkan, a breathtaking coastal region in Maharashtra, is known for its pristine beaches, lush greenery, and rich cultural heritage. From the serene shores of Ganpatipule and Tarkarli to the historical forts of Sindhudurg, it offers a perfect blend of nature, adventure, and history. The region is also famous for its delicious seafood and authentic Konkani cuisine. 🌊🌴',
    title: 'Konkan Darshan',
    image: '/images/keyword/52.jpg',
    link: '/services',
  },
  {
    id: 3,
    date: 'July 09 2024',
    readTime: 'Ganpatipule, a serene coastal town in Maharashtra, is famous for its pristine beaches and the revered Ganpatipule Temple dedicated to Lord Ganesha. The turquoise waters, golden sands, and lush hills make it a perfect spiritual and leisure destination. Visitors can also explore nearby attractions like Aare-Ware Beach and Jaigad Fort for a scenic and cultural experience. 🌊🙏',
    title: 'Pune to Ganpatipule Taxi',
    image: '/images/keyword/79.jpg',
    link: '/services',
  },
  {
    id: 4,
    date: 'July 10 2024',
    readTime: 'Pandharpur, known as the spiritual capital of Maharashtra, is famous for the revered Vitthal-Rukmini Temple, attracting millions of devotees, especially during the Ashadi Ekadashi Yatra. Situated on the banks of the Chandrabhaga River, this holy town is deeply rooted in Bhakti tradition and the Warkari movement. The peaceful atmosphere and rich cultural heritage make it a must-visit pilgrimage destination. 🙏✨',
    title: ' Pune to Pandharpur Taxi',
    image: '/images/keyword/66.jpg',
    link: '/services',
  },

];

const BlogSection = () => {
  return (
    <section className="bg-smoke overflow-hidden py-4" id="blog-sec">
      <div className="container">
        <div className="mb-30 text-center text-md-start">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7">
              <div className="title-area mb-md-0">
                <span className="sub-title">Our Latest Tours</span>
                {/* <h2 className="sec-title">News & Articles From Tourm</h2> */}
              </div>
            </div>
            <div className="col-md-auto">
              <a href="/services" className="th-btn style4 th-icon">See More Articles</a>
            </div>
          </div>
        </div>

        <div className="slider-area">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="th-slider has-shadow"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="blog-box th-ani">
                  <div className="blog-img global-img">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-box_content colorr ">
                    <h3 className="box-title ">
                      <a href={post.link}>{post.title}</a>
                    </h3>
                    <p className=''>{post.readTime}</p>
                    {/* <a href={post.link} className="th-btn style4 th-icon">Read More</a> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
