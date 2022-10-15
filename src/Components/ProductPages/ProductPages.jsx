import { useParams } from "react-router-dom";
import useFetchData from "../../Hooks/useFetchData";
import "./ProductPages.css";

export default function ProductPages() {
  const { id } = useParams();
  const { data: product } = useFetchData(`https://dummyjson.com/products/${id}`);

  return (
    <>
      {product && (
        <div className="product-page-container">
          <div>{product.id}</div>
          <div>{product.title}</div>
          <div>{product.description}</div>
          <div>{product.price}</div>
          <div>{product.discountPercentage}</div>
          <div>{product.rating}</div>
          <div>{product.stock}</div>
          <div>{product.brand}</div>
          <div>{product.category}</div>
          <img src={product.thumbnail} />
          {product.images.map((image, index) => {
            return <img src={image} key={index} />;
          })}
        </div>
      )}
    </>
  );
}
