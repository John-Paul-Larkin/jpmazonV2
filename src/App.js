import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import useFetchData from "./Hooks/useFetchData";
function App() {
  const { data: returned } = useFetchData("https://dummyjson.com/products?limit=100");

  return (
    <div className="App">
      <Header />
      {returned && <Body products={returned.products} />}
    </div>
  );
}

export default App;
