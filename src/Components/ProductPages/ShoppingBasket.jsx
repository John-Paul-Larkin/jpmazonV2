import { ShoppingBasketContext } from "../../Hooks/useContext";
import { useContext } from "react";

import ShoppingBasketItems from "./ShoppingBasketItems";

export default function ShoppingBasket() {
  const { basket } = useContext(ShoppingBasketContext);

  const totalQuantityOfItems = () => {
    if (basket.length === 0) {
      return 0;
    } else {
      let total = 0;
      basket.forEach((item) => (total += parseInt(item.quantity)));
      return total;
    }
  };

  const totalValue = () => {
    if (basket.length === 0) {
      return "0.00";
    } else {
      let total = 0;
      basket.forEach((item) => {
        total += item.quantity * item.price;
      });
      return total + ".00";
    }
  };

  return (
    <div className="shopping-basket">
      <h2>Shopping basket</h2>
      {basket[0] &&
        basket.map((item) => {
          return <ShoppingBasketItems item={item} key={item.id} />;
        })}
      {!basket[0] && <div className="empty">Nothing here. Go spend some money!</div>}

      <div className="sub-total-container">
        <div className="subtotal">
          Subtotal ({totalQuantityOfItems()} items) <span className="eur">EUR {totalValue()}</span>
        </div>
      </div>
    </div>
  );
}
