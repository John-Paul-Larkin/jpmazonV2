import "./RecommendedPage.css";

import ProductRectangleFirst from "./ProductRectangleFirst";

export default function RecommendedPage({ products }) {
  return (
    <div className="product-card-container">
      <ProductRectangleFirst products={products} />
    </div>
  );
}
