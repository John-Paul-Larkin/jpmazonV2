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
          {/* strethcer adds mediaQ based space between elements so hero displays correctly */}
          <RecommendedPage products={returned.products} />
          <br />
          <br />
          <br />
        </div>
      )}
    </div>
  );
}
