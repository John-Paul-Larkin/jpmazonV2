import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPages from "./Components/ProductPages/ProductPages";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/product/:id" element={<ProductPages />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
