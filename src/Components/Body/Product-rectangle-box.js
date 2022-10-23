import { useNavigate } from "react-router-dom";

export default function ProductRectangleBox({ products, box }) {
  const navigate = useNavigate();
 

  return (
    <div className={"rectangle-box " + box}>
      {products.map((product) => {
        return (
          <div
            className="individual-image"
            key={product.id}
            onClick={() => {
              navigate(`/product/${product.id}`);
            }}
          >
            <img src={product.thumbnail} alt="thumnail" />
          </div>
        );
      })}
    </div>
  );
}
