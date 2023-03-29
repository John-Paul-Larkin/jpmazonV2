import imgJPinterview from "../../Assets/primeInterview.png";
import imgVan from "../../Assets/primeVan.jpg";
import "./ImageSlider.css";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider() {
  const slides = [
    { url: imgJPinterview, title: "img1" },

    { url: imgVan, title: "img3" },
  ];

  return (
    <div className="image-slider-container">
      <div className="image-slider">
        <Swiper className="main-image" autoplay={{ delay: 2500 }} modules={[Pagination, Autoplay]} pagination={true}>
          {slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <a href="https://portfolio-jpl.netlify.app/index.html#email">
                  <img src={slide.url} alt="" />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
