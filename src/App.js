import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import ProductPages from "./Components/ProductPages/ProductPages";
import Footer from "./Components/Footer/Footer";
import CategoryPage from "./Components/ProductPages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Body />} />
          <Route path="/product/:id" element={<ProductPages />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
