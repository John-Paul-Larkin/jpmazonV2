import { useState, useContext } from "react";
import "./MainNav.css";
import SideMenu from "./SideMenu";
import useFetchData from "../../Hooks/useFetchData";
import { ShoppingBasketContext } from "../../Hooks/useContext";

import { Link } from "react-router-dom";
import SearchResult from "./SearchResult";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

export default function MainNav() {
  const [isShowSideMenu, setIsShowSideMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const { data: searchResult } = useFetchData(`https://dummyjson.com/products/search?&q=${searchTerm}`);

  const { basket } = useContext(ShoppingBasketContext);

  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => setIsShowSideMenu(true),
  });

  const showSearchResult = () => {
    if (showSearch) {
      setShowSearch(false);
      setSearchTerm("");
    } else {
      setShowSearch(true);
    }
  };

  const searchInput = (e) => {
    const searchFor = e.target.value;
    setSearchTerm(searchFor);
  };

  const showSideMenu = () => {
    isShowSideMenu ? setIsShowSideMenu(false) : setIsShowSideMenu(true);
  };

  const navigate = useNavigate();
  const navigateTo = (url) => {
    navigate(url);
  };

  return (
    <nav {...handlers} className="main-nav-container">
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
            <input className="input" type="text" value={searchTerm} placeholder="  Search JPmazon.ie" onChange={searchInput} onFocus={showSearchResult} />
            <button
              onClick={(e) => {
                e.preventDefault();
                if (searchResult.products[0]) {
                  navigateTo(`/product/${searchResult.products[0].id}`);
                }
                setSearchTerm("");
              }}
              className="magnifying-glass"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            {showSearch && <SearchResult results={searchResult} searchTerm={searchTerm} showSearchResult={showSearchResult} />}
          </form>
        </div>
        <div className="currency">dr</div>
        <div
          className="basket-container"
          onClick={() => {
            navigateTo("/basket");
          }}
        >
          <i className="fa-solid fa-cart-shopping">{basket.length > 0 && <div className="no-items-in-cart"> {basket.length} </div>}</i>
          <div className="basket">Basket</div>
        </div>
      </div>
    </nav>
  );
}
