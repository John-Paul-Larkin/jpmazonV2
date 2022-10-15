import "./CategoryNav.css";
import useFetchData from "../../Hooks/useFetchData";

export default function CategoryNav() {
  const { data: catagories } = useFetchData("https://dummyjson.com/products/categories");

  return (
    <>
      <nav className="category-nav">
        {catagories && (
          <div className="category-scroll">
            {catagories.map((category) => {
              return (
                <div className="categories" data-category={category} key={category}>
                  {category}
                </div>
              );
            })}
          </div>
        )}
      </nav>
      <div className="deliver-to-mobile">
        <i className="fa-solid fa-location-dot"></i>
        <div>Deliver to Jimmy Joe Bob - The shire N17</div>
      </div>
    </>
  );
}
