import "./ImageSlider.css";
import imgJPinterview from "../../Assets/primeInterview.png";
import imgVan from "../../Assets/primeVan.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

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
                <img src={slide.url} alt="?" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
