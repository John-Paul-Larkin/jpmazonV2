import "./SearchResult.css";
import { useNavigate } from "react-router-dom";

export default function SearchResult({ results, searchTerm, showSearchResult }) {
  const navigate = useNavigate();
  const navigateTo = (url) => {
    navigate(url);
  };

  //The result of the search was always in the order of the array of products
  //which resulted in the same items at the top of the array each time.
  results.products.sort(() => (Math.random() > 0.5 ? 1 : -1));

  //A new array where products whose titles matches the search term are placed at the top
  //rather then matche based on description.
  let sortedTitleResults = [];
  results.products.forEach((product) => {
    if (product.title.includes(searchTerm)) {
      sortedTitleResults.unshift(product);
    } else {
      sortedTitleResults.push(product);
    }
  });

  return (
    <div className="search-results">
      {results &&
        searchTerm &&
        sortedTitleResults.map((product) => {
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
