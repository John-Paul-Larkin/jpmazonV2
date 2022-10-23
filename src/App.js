import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ShoppingBasketContext } from "./Hooks/useContext";

import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import ProductPages from "./Components/ProductPages/ProductPages";
import CategoryPage from "./Components/ProductPages/CategoryPage";
import ShoppingBasket from "./Components/ProductPages/ShoppingBasket";
import Footer from "./Components/Footer/Footer";

function App() {
  const [basket, setBasket] = useState([]);

  const localStoreBasket = JSON.parse(localStorage.getItem("JpmazonBasket"));
  console.log(localStoreBasket);
  useEffect(() => {
    if (localStoreBasket) {
      setBasket(localStoreBasket);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // added because i eslint was giving a warning
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <ShoppingBasketContext.Provider value={{ basket, setBasket }}>
          <Header />
          <Routes>
            <Route path="/" exact element={<Body />} />
            <Route path="/product/:id" element={<ProductPages />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/basket" element={<ShoppingBasket />} />
          </Routes>

          <Footer />
        </ShoppingBasketContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
