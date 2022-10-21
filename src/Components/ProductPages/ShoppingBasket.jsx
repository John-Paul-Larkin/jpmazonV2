import { ShoppingBasketContext } from "../../Hooks/useContext";
import { useContext } from "react";
import ShoppingBasketItems from "./ShoppingBasketItems";

export default function ShoppingBasket() {
  const { basket } = useContext(ShoppingBasketContext);

  return (
    <div className="shopping-basket">
      <h2>Shopping basket</h2>
      {basket[0] &&
        basket.map((item) => {
          return <ShoppingBasketItems item={item} key={item.id} />;
        })}
    </div>
  );
}
