import { useState } from "react";
import "./MainNav.css";
import SideMenu from "./SideMenu";

export default function MainNav() {
  const [isShowSideMenu, setIsShowSideMenu] = useState(false);

  return (
    <nav className="main-nav-container">
      {isShowSideMenu && <SideMenu />}

      <div className="nav-top">
        <div
          className="burger"
          onClick={() => {
            isShowSideMenu ? setIsShowSideMenu(false) : setIsShowSideMenu(true);
            console.log(isShowSideMenu);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        <div className="logo">JPmazon.ie </div>
        <div className="flex-divider-mobile"></div>
        <div className="account-mobile">
          <span>Jimmy Joe Bob </span>
          <i className="fa-solid fa-chevron-right"></i>
          <i className="fa-regular fa-user"></i>
        </div>

        <div className="address-container">sd</div>
        <div className="search-container">dy</div>
        <div className="currency">dr</div>
        <div className="basket">
          <i className="fa-solid fa-cart-shopping"></i>
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
