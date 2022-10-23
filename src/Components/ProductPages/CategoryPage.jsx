import "./CategoryPage.css";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import useFetchData from "../../Hooks/useFetchData";
import StarRating from "../Sitewide/StarRating";

export default function CategoryPage() {
  const { category } = useParams();
  const { data } = useFetchData(`https://dummyjson.com/products/category/${category}`);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h2 className="category-heading"> {category}</h2>
      <div className="category-page">
        {data &&
          data.products.map((product) => {
            return (
              <div
                className="category-page-individual-container"
                key={product.id}
                onClick={() => {
                  navigate(`/product/${product.id}`);
                }}
              >
                <div className="container-internal">
                  <div className="title">{product.title}</div>
                  <StarRating className="rating" rating={product.rating} />
                  <img src={product.thumbnail} alt="thumb" />
                </div>
                <div className="description">{product.description}</div>
              </div>
            );
          })}
        {!data && <div className="loading-skeleton"></div>}
      </div>
    </div>
  );
}
