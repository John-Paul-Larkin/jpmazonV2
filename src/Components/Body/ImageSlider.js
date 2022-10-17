import "./ImageSlider.css";
import { useState } from "react";
import prime from "../../Assets/prime.jpg";
import prime2 from "../../Assets/prime2.jpg";
import offJP from "../../Assets/100Off.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

export default function ImageSlider() {
  const slides = [
    { url: prime, title: "prime" },
    { url: offJP, title: "OffJP" },
    { url: prime2, title: "prime2" },
  ];

  return (
    <div className="image-slider-container">
      <div className="image-slider">
        <Swiper className="main-image" autoplay={{ delay: 2000 }} modules={[Pagination, Autoplay]} pagination={true}>
          {slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={slide.url} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

// const changeIndex = () => {
//   currentIndex == 0 ? setCurrentIndex(1) : setCurrentIndex(0);
// };

// setInterval(changeIndex, 2000);

// const styles = {
//   backgroundImage: `url(${slides[currentIndex].url})`,
//   backgroundSize: "clamp(100%, 150%, 200%)",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center top",
//   maxWidth: "100%",
//   minWidth: "430px",
//   height: "30vh",
//   minHeight: "50px",
//   objectFit: "cover",
//   backgroundColor: "#1798fe",
// };
