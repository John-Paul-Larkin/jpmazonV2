import "./ImageSlider.css";
import imgJPinterview from "../../Assets/primeInterview.png";
import sliderImg2 from "../../Assets/prime2.jpg";
import imgVan from "../../Assets/primeVan.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

export default function ImageSlider() {
  const slides = [
    { url: imgJPinterview, title: "img1" },
    // { url: sliderImg2, title: "img2" },
    { url: imgVan, title: "img3" },
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
