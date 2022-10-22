import { useState } from "react";
import "./ShoppingBasket.css";

import { ShoppingBasketContext } from "../../Hooks/useContext";
import { useContext } from "react";

export default function ShoppingBasketItems({ item }) {
  const { basket, setBasket } = useContext(ShoppingBasketContext);

  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <>
      <div className="item">
        <div className="img-container">
          <img src={item.thumbnail} alt="item basket pic" />
        </div>
        <div className="order-details">
          <div className="title-container">
            <div className="title">{item.title}</div>
            <span className="price">EUR {item.price}.00</span>
          </div>

          <div className="stock">In stock</div>
          <div className="eligible">Eligible for FREE shipping</div>
          <div className="quantity-container">
            <select
              className="quantity"
              name="Qty"
              value={quantity}
              onChange={(e) => {
                item.quantity = e.target.value;

                basket.map((eachItem) => {
                  if (eachItem.id === item.id) {
                    eachItem.quantity = e.target.value;
                  }
                  return eachItem;
                });

                //test..............
                localStorage.setItem("JpmazonBasket", JSON.stringify(basket));

                setBasket([...basket]);
                setQuantity(e.target.value);
              }}
            >
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
              <option value="6">Qty: 6</option>
              <option value="7">Qty: 7</option>
              <option value="8">Qty: 8</option>
              <option value="9">Qty: 9</option>
              <option value="10">Qty: 10</option>
            </select>
            <div
              className="delete"
              onClick={() => {
                const newBasket = basket.filter((basketItem) => basketItem.id !== item.id);
                //test..............
                localStorage.setItem("JpmazonBasket", JSON.stringify(newBasket));
                setBasket([...newBasket]);
              }}
            >
              Delete
            </div>
            <div>Save for later</div>
          </div>
        </div>
      </div>
    </>
  );
}
