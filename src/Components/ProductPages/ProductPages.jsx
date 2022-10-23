import useFetchData from "../../Hooks/useFetchData";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./ProductPages.css";

import StarRating from "../Sitewide/StarRating";
import BuyItBox from "./BuyItBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { FreeMode, Thumbs } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProductPages() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { id } = useParams();
  const { data: product } = useFetchData(`https://dummyjson.com/products/${id}`);

  const [isShowMore, setIsShowMore] = useState(false);

  const showMoreDescription = () => {
    if (isShowMore) {
      setIsShowMore(false);
    } else {
      setIsShowMore(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {product && (
        <div>
          <br />
          <br />
          <div className="product-page-container">
            <div className="title-rating-container">
              <h1 className="title">{product.title}</h1>
              <div className="rating-container">
                <div className="brand">Visit the {product.brand} store</div>
                <StarRating rating={product.rating} />
              </div>
              <div>{product.description}</div>
            </div>
            <br />
            <div className="images-container">
              {" "}
              <Swiper className="main-image" modules={[FreeMode, Thumbs, Pagination]} pagination={true} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}>
                {product.images.map((image, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={image} alt="product" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <br />
              <Swiper modules={[FreeMode, Thumbs]} freeMode={true} slidesPerView={product.images.length} onSwiper={setThumbsSwiper}>
                {product.images.map((image, index) => {
                  return (
                    <SwiperSlide key={index} className="thumb-swipe">
                      <img src={image} alt="product" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className="description-container">
              <p className="description">
                <span>
                  This is truly an amazing product. Although there are many competitors in the generic product category, this generic product, in particular, is the best that money can buy. It is perfectly
                  sized, compact enough to store away, yet large enough that it wont get lost down the back of the couch. It is also made from a NASA researched, space age material, making it light enough to
                  pop in your bun-bag, yet heavy enough that you could use it to bonk a bear on the head.
                  <br />
                </span>
                {isShowMore && (
                  <span>
                    Bear attacks are increasingly common, so for your protection, and the protection of your loved ones, click that buy button right now. It is colourful without being flashy. It is rounded, but
                    also boxy. It is a little bit Ooh and a little bit Aah, just like the hit 90's tune. What a banger that was. Truly your life is not complete unless you buy this thing right now. You will be
                    the envy of your friends. They will wish they also owned this generic product. People you are attracted to will be suitably impressed. What more can one write about such a unique item?
                  </span>
                )}
              </p>
              <button onClick={showMoreDescription}>
                <i className="fa-solid fa-angles-down"></i>
              </button>
            </div>

            <BuyItBox product={product} />
          </div>
        </div>
      )}
      {!product && <div className="loading-skeleton"></div>}
    </>
  );
}
