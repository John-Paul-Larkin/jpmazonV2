import "./RecommendedPage.css";
import "./ProductRectangle.css";

import ReviewCarousel from "./ReviewCarousel";
import ProductRectangleBox from "./Product-rectangle-box";

export default function RecommendedPage({ products }) {
  let productArray = [];

  const maxNoOfProducts = 100;
  const noProductsOnPage = 50;

  let randomNumberArray = Array(noProductsOnPage)
    .fill()
    .map(() => Math.floor(Math.random() * maxNoOfProducts));

  randomNumberArray = [...new Set(randomNumberArray)];

  randomNumberArray.forEach((number) => {
    productArray.push(products[number]);
  });

  return (
    <div className="product-card-container">
      {/* <ProductRectangleFirst products={products} /> */}
      <div className="product-rectangle-first">
        <ProductRectangleBox products={productArray.splice(0, 4)} box={"one"} />
        <ProductRectangleBox products={productArray.splice(0, 4)} box={"two"} />
        <ProductRectangleBox products={productArray.splice(0, 4)} box={"three"} />
      </div>
      <br />
      <br />
      <br />
      <ReviewCarousel products={productArray.splice(0, 10)} />
    </div>
  );
}
