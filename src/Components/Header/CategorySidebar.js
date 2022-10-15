import useFetchData from "../../Hooks/useFetchData";

export default function CategorySidebar() {
  let { data: catagories } = useFetchData("https://dummyjson.com/products/categories");

  return <div></div>;
}
