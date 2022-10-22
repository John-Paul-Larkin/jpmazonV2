import "./CategorySidebar.css";
import useFetchData from "../../Hooks/useFetchData";
import { startCase } from "lodash";
import { useNavigate } from "react-router-dom";

export default function CategorySidebar({ showSideMenu }) {
  let { data: categories } = useFetchData("https://dummyjson.com/products/categories");

  const navigate = useNavigate();
  const navigateTo = (url) => {
    navigate(url);
  };

  return (
    <div className="category-side-bar">
      {categories &&
        categories.map((category, index) => {
          return (
            <div
              key={index}
              className="category"
              onClick={() => {
                showSideMenu();
                
                navigateTo(`/category/${category}`);
              }}
            >
              {startCase(category)}
            </div>
          );
        })}
    </div>
  );
}
