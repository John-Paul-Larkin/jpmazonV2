import "./Body.css";
import ImageSlider from "./ImageSlider";
import RecommendedPage from "./RecommendedPage";

import useFetchData from "../../Hooks/useFetchData";

export default function Body() {
  const { data: returned } = useFetchData("https://dummyjson.com/products?limit=100");

  return (
    <div>
      {returned && (
        <div className="main-body">
          <ImageSlider />
          <div className="stretcher"></div>
          <RecommendedPage products={returned.products} />
          
        </div>
      )}
    </div>
  );
}
