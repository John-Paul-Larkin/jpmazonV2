import { ShoppingBasketContext } from "../../Hooks/useContext";
import { useContext, useEffect } from "react";
//components
import ShoppingBasketItems from "./ShoppingBasketItems";

export default function ShoppingBasket() {
  const { basket } = useContext(ShoppingBasketContext);

  const calculateTotalQuantityOfItems = () => {
    if (basket.length === 0) {
      return 0;
    } else {
      let totalQuantity = 0;
      basket.forEach((item) => (totalQuantity += parseInt(item.quantity)));
      return totalQuantity;
    }
  };

  //calculates the total value and adds .00 for aesthetics
  const calculateTotalValue = () => {
    if (basket.length === 0) {
      return "0.00"; //If basket is empty
    } else {
      let total = 0;
      basket.forEach((item) => {
        total += item.quantity * item.price;
      });
      return total + ".00";
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shopping-basket">
      <h2>Shopping basket</h2>
      {basket[0] &&
        basket.map((item) => {
          return <ShoppingBasketItems item={item} key={item.id} />;
        })}
      {!basket[0] && <div className="empty">Nothing in your basket. Go spend some money!</div>}

      <div className="sub-total-container">
        <div className="subtotal">
          Subtotal ({calculateTotalQuantityOfItems()} items) <span className="eur">EUR {calculateTotalValue()}</span>
        </div>
      </div>
    </div>
  );
}
