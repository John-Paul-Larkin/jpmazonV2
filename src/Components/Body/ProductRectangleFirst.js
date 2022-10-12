import "./ProductRectangleFirst.css";

export default function ProductRectangleFirst({ products }) {
  let productArray = [];
  let productArray2 = [];
  let productArray3 = [];

  (() => {
    for (let i = 0; i < 4; i++) {
      productArray.push(products[Math.floor(Math.random() * 100)]);
    }
    for (let i = 0; i < 4; i++) {
      productArray2.push(products[Math.floor(Math.random() * 100)]);
    }
    for (let i = 0; i < 4; i++) {
      productArray3.push(products[Math.floor(Math.random() * 100)]);
    }
  })();

  return (
    <div className="product-rectangle-first">
      <div className="rectangle-box one">
        {productArray &&
          productArray.map((product) => {
            return (
              <div>
                <div className="individual-image" key={product.id}>
                  <img src={product.images[0]} />
                  {/* <div className="product-title">{product.title}</div> */}
                </div>
              </div>
            );
          })}
      </div>
      <div className="rectangle-box two">
        {productArray2 &&
          productArray2.map((product) => {
            return (
              <div>
                <div className="individual-image" key={product.id}>
                  <img src={product.images[0]} />
                  {/* <div className="product-title">{product.title}</div> */}
                </div>
              </div>
            );
          })}
      </div>
      <div className="rectangle-box three">
        {productArray3 &&
          productArray3.map((product) => {
            return (
              <div>
                <div className="individual-image" key={product.id}>
                  <img src={product.images[0]} />
                  {/* <div className="product-title">{product.title}</div> */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
