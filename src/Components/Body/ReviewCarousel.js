import "./ReviewCarousel.css";
import StarRating from "../Sitewide/StarRating";
import addDays from "date-fns/addDays";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const limitDescription = (description) => {
  return description.slice(0, 90) + "...";
};

const productPrice = (price) => {
  return price + "." + (Math.floor(Math.random() * 90) + 10);
  //Added ten here so there will be no number below 10, which would be single digit €12.8 instead €12.80
};

const furtherInfo = (stock) => {
  const today = new Date();

  const howManyDayForDelivery = Math.floor(Math.random() * 5) + 1;
  //A random number of days between 1 and 6 for delivery

  let deliveryDate = addDays(today, howManyDayForDelivery);
  deliveryDate = deliveryDate.toString();
  deliveryDate = deliveryDate.slice(0, deliveryDate.indexOf("2022"));
  // Make date object a string and slice off unnecessary parts

  return "Get it as soon as " + deliveryDate;
};

export default function ReviewCarousel({ products }) {
  return (
    <div className="review-carousel-container">
      <div className="review-carousel">
        <Swiper modules={[Navigation]} navigation spaceBetween={10} slidesPerView={3} onSlideChange={() => {}} onSwiper={(swiper) => {}}>
          {products.map((product) => {
            return (
              <SwiperSlide className="box" key={product.id}>
                <img src={product.images[0]} />
                <div className="product-description">{limitDescription(product.description)}</div>
                <StarRating rating={product.rating} />
                <div className="euro">{productPrice(product.price)}</div>
                <div>{furtherInfo(product.stock)}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
