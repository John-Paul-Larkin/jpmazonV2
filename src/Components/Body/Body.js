import "./Body.css";
import ImageSlider from "./ImageSlider";
import RecommendedPage from "./RecommendedPage";

export default function Body({ products }) {
  return (
    <div className="main-body">
      <ImageSlider />
      <RecommendedPage products={products} />
    </div>
  );
}
