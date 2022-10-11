import { useCallback, useEffect, useState } from "react";
import "./RecommendedPage.css";
import useFetchData from "../../Hooks/useFetchData";

export default function RecommendedPage() {
  const [images, setImages] = useState([]);

  const { data: data } = useFetchData(`https://dummyjson.com/products?limit=100`);

  let productsArr = [];

  const pickRandom = () => {
    for (let i = 0; i < 10; i++) {
      const randomProductNumber = Math.floor(Math.random() * 100);
      productsArr.push(data.products[randomProductNumber]);
    }
  };

  {
    data && pickRandom();
  }

  const styles = { backgroundSize: "contain", position: "relative" };

  return (
    <div className="product-card-container">
      {productsArr &&
        productsArr.map((products) => {
          return (
            <div className="product-card" data-productID={products.id} key={products.id} style={{ ...styles, backgroundImage: `url(${products.images[0]})` }}>
              <span className="title">{products.title}</span>
            </div>
          );
        })}
    </div>
  );
}

// useFetchData("https://dummyjson.com/products/categories"
