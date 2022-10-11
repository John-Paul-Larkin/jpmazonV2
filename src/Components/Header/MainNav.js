import { useState } from "react";
import "./MainNav.css";
import SideMenu from "./SideMenu";

export default function MainNav() {
  const [isShowSideMenu, setIsShowSideMenu] = useState(false);

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

        <div className="logo">JPmazon.ie</div>
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
            <div className="address">The shire B17</div>
          </div>
        </div>
        <div className="search-container">
          <form className="search-form">
            <input className="input" type="text" placeholder="  Search JPmazon.ie" />
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
      <div className="search-container-mobile">
        <form className="search-form">
          <input className="input" type="text" placeholder="  Search JPmazon.ie" />
          <div className="magnifying-glass">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
      </div>
    </nav>
  );
}
