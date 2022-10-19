import "./SearchResult.css";
import { useNavigate } from "react-router-dom";

export default function SearchResult({ results, searchTerm, showSearchResult }) {
  const navigate = useNavigate();
  const navigateTo = (url) => {
    navigate(url);
  };
  results.products.sort(() => (Math.random() > 0.5 ? 1 : -1));

  return (
    <div className="search-results">
      {results &&
        searchTerm &&
        results.products.map((product) => {
          return (
            <div
              className="individual-search"
              key={product.id}
              onClick={() => {
                navigateTo(`/product/${product.id}`);
                showSearchResult();
              }}
            >
              {product.title}
            </div>
          );
        })}
    </div>
  );
}
