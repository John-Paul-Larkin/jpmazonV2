import { useState } from "react";
import "./ShoppingBasket.css";

import { useNavigate } from "react-router-dom";

import { ShoppingBasketContext } from "../../Hooks/useContext";
import { useContext } from "react";

export default function ShoppingBasketItems({ item }) {
  const { basket, setBasket } = useContext(ShoppingBasketContext);

  const [quantity, setQuantity] = useState(item.quantity);

  const navigate = useNavigate();

  const removeItemsFromBasket = () => {
    const newBasket = basket.filter((basketItem) => basketItem.id !== item.id);
    localStorage.setItem("JpmazonBasket", JSON.stringify(newBasket));
    setBasket([...newBasket]);
  };

  const updateQuantity = (e) => {
    item.quantity = e.target.value;

    basket.map((eachItem) => {
      if (eachItem.id === item.id) {
        eachItem.quantity = e.target.value;
      }
      return eachItem;
    });

    localStorage.setItem("JpmazonBasket", JSON.stringify(basket));
    setBasket([...basket]);
    setQuantity(e.target.value);
  };

  return (
    <>
      <div className="item">
        <div className="img-container">
          {/* CLicking on image takes you from cart to that product */}
          <img
            src={item.thumbnail}
            alt="item basket pic"
            onClick={() => {
              navigate(`/product/${item.id}`);
            }}
          />
        </div>
        <div className="order-details">
          <div className="title-container">
            <div className="title">{item.title}</div>
            <span className="price-container">
              <span className="price">EUR {item.price}.00</span>
              {item.quantity > 1 && <div className="subtotal">Sub-total {item.price * item.quantity}.00</div>}
            </span>
          </div>

          <div className="stock">In stock</div>
          <div className="eligible">Eligible for FREE shipping</div>
          <div className="quantity-container">
            <select
              className="quantity"
              name="Qty"
              value={quantity}
              onChange={(e) => {
                updateQuantity(e);
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
                removeItemsFromBasket();
              }}
            >
              Delete
            </div>
            <div
              className="save"
              onClick={() => {
                //possibly add save list functionality at a later date
                removeItemsFromBasket();
              }}
            >
              Save for later
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
