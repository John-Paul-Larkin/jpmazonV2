import "./BuyItBox.css";
export default function BuyItBox({ product }) {
  const oldPrice = () => {
    return Math.round((product.price / 85) * 100 * 100) / 100;
  };

  return (
    <div className="buy-it-box">
      <div className="price">{product.price}</div>
      <div className="discount">-15%</div>
      <div>
        <span>RRP</span>
        <span className="old-price">{oldPrice()}</span>
      </div>
      <div className="delivery"></div>
      <div className="fastest-delivery"></div>
      <div className="deliver-to">
        <i className="fa-solid fa-location-dot"></i>
        <span>Deliver to Jimmy Joe Bob - The shire N17</span>
      </div>
      <div className="Stock">In stock</div>

      <select className="quantity" name="Qty">
        <option value="Qty: 1">Qty:1</option>
      </select>
      <div className=""></div>
      <div className=""></div>
      <button className="add-to-basket">Add to Basket</button>
      <button className="buy-now">Buy now</button>
    </div>
  );
}
