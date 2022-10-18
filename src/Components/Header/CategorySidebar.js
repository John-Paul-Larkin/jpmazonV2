import "./CategorySidebar.css";
import useFetchData from "../../Hooks/useFetchData";
import { startCase } from "lodash";

export default function CategorySidebar() {
  let { data: categories } = useFetchData("https://dummyjson.com/products/categories");

  return (
    <div className="category-side-bar">
      {categories &&
        categories.map((category, index) => {
          return (
            <div key={index} className="category">
              {startCase(category)}
            </div>
          );
        })}
    </div>
  );
}
