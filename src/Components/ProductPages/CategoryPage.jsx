import "./CategoryPage.css";
import { useParams } from "react-router-dom";
import useFetchData from "../../Hooks/useFetchData";
import StarRating from "../Sitewide/StarRating";
import { useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const { category } = useParams();
  const { data } = useFetchData(`https://dummyjson.com/products/category/${category}`);

  const navigate = useNavigate();
  const navigateTo = (url) => {
    navigate(url);
  };

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
                  navigateTo(`/product/${product.id}`);
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
      </div>
    </div>
  );
}
