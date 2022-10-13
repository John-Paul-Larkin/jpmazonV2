export default function ProductRectangleBox({ products, box }) {
  return (
    <div className={"rectangle-box " + box}>
      {products.map((product) => {
        return (
          <div className="individual-image" key={product.id}>
            <img src={product.images[0]} />
            {/* <div className="product-title">{product.title}</div> */}
          </div>
        );
      })}
    </div>
  );
}
