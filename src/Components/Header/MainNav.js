import { useState } from "react";
import "./MainNav.css";
import SideMenu from "./SideMenu";
import useFetchData from "../../Hooks/useFetchData";

import { Link } from "react-router-dom";

export default function MainNav() {
  const [isShowSideMenu, setIsShowSideMenu] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const { data: searchResult } = useFetchData(`https://dummyjson.com/products/search?q=${searchTerm}`);

  console.log(searchResult);

  const searchInput = (e) => {
    const searchFor = e.target.value;
    setSearchTerm(searchFor);
  };

  const showSideMenu = () => {
    isShowSideMenu ? setIsShowSideMenu(false) : setIsShowSideMenu(true);
  };

  return (
    <nav className="main-nav-container">
      <SideMenu showSideMenu={showSideMenu} isShowSideMenu={isShowSideMenu} />

      <div className="nav-top">
        <div className="burger" onClick={showSideMenu}>
          <i className="fa-solid fa-bars"></i>
          <span className="all">All</span>
        </div>

        <Link to="/" style={{ color: "white", textDecoration: "none" }} className="logo">
          JPmazon.ie
        </Link>
        <div className="flex-divider-mobile"></div>
        <div className="account-mobile">
          <span>Jimmy Joe Bob </span>
          <i className="fa-solid fa-chevron-right"></i>
          <i className="fa-regular fa-user"></i>
        </div>
        <div className="address-container">
          <i className="fa-solid fa-location-dot"></i>
          <div>
            <div className="deliver-to">Deliver to Jimmy Joe Bob</div>
            <div className="address">The shire N17</div>
          </div>
        </div>

        <div className="search-container">
          <form className="search-form">
            <input className="input" type="text" value={searchTerm} placeholder="  Search JPmazon.ie" onChange={searchInput} />
            <div className="magnifying-glass">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </form>
        </div>
        <div className="currency">dr</div>
        <div className="basket-container">
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="basket">Basket</div>
        </div>
      </div>
    </nav>
  );
}
