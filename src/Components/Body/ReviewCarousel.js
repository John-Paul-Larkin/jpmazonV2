import "./ReviewCarousel.css";
import StarRating from "../Sitewide/StarRating";
import addDays from "date-fns/addDays";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const limitDescription = (description) => {
  return description.slice(0, 90) + "...";
};

const productPrice = (price) => {
  return price + "." + (Math.floor(Math.random() * 90) + 10);
  //Added ten here so there will be no number below 10, which would be single digit €12.8 instead €12.80
};

const getItemBy = () => {
  const today = new Date();

  const howManyDayForDelivery = Math.floor(Math.random() * 5) + 1;
  //A random number of days between 1 and 6 for delivery

  let deliveryDate = addDays(today, howManyDayForDelivery);
  deliveryDate = deliveryDate.toString();
  deliveryDate = deliveryDate.slice(0, deliveryDate.indexOf("2022"));
  // Make date object a string and slice off unnecessary parts

  return "Get it as soon as " + deliveryDate;
};

const leftInStock = (stock) => {
  if (stock < 10) {
    return `Only ${stock} left in stock.`;
  } else if (stock < 50) {
    return `${stock} in stock.`;
  } else if (stock > 50) {
    return `50+ in stock.`;
  }

  // had planned to do if less then, but numbers all too high
};

export default function ReviewCarousel({ products }) {
  const navigate = useNavigate();
  const navigateTo = (url) => {
    navigate(url);
  };

  return (
    <div className="review-carousel-container">
      <div className="review-carousel">
        <Swiper modules={[Navigation]} navigation spaceBetween={10} slidesPerView={"auto"} onSlideChange={() => {}} onSwiper={(swiper) => {}}>
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id} className="box">
                <div
                  onClick={() => {
                    const id = product.id;
                    navigateTo(`/product/${id}`);
                  }}
                >
                  <div className="product-description">{limitDescription(product.description)}</div>
                  <img src={product.thumbnail} />
                  <StarRating className="rating" rating={product.rating} />
                  <div className="price">
                    <span className="eur">EUR</span>
                    <span className="euro">{productPrice(product.price)}</span>
                  </div>
                  <div className="get-item-by">{getItemBy()}</div>
                  <div className="left-in-stock">{leftInStock(product.stock)}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
