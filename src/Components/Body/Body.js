import "./Body.css";
import ImageSlider from "./ImageSlider";
import RecommendedPage from "./RecommendedPage";

export default function Body() {
  return (
    <div className="main-body">
      <ImageSlider />
      <RecommendedPage />
    </div>
  );
}
