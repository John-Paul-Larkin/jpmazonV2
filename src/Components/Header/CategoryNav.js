import "./CategoryNav.css";
import useFetchData from "../../Hooks/useFetchData";

export default function CategoryNav() {
  const catagories = useFetchData("https://dummyjson.com/products/categories");

  return (
    <>
      <nav className="category-nav">
        <div className="cat-nav-container">
          {catagories && (
            <>
              {catagories.map((category) => {
                return (
                  <div className="categories" data-category={category} key={category}>
                    {category}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </nav>
      <div className="deliver-to-mobile">
        <i className="fa-solid fa-location-dot"></i>
        <div>Deliver to Jimmy Joe Bob - The shire B17</div>
      </div>
    </>
  );
}
