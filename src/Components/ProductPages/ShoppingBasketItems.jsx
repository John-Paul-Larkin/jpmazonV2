import "./ShoppingBasket.css";

export default function ShoppingBasketItems({ item }) {
  return (
    <>
      <div className="item">
        <div className="img-container">
          <img src={item.thumbnail} alt="item basket pic" />
          {item.quantity}
        </div>
        <div className="order-details">f</div>
      </div>
    </>
  );
}
