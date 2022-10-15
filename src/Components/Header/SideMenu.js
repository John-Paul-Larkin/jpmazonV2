import CategorySidebar from "./CategorySidebar";

import "./SideMenu.css";
export default function SideMenu({ showSideMenu, isShowSideMenu }) {
  return (
    <div className={"side-menu-container"}>
      <div className={isShowSideMenu ? "side-menu transition" : "side-menu"}>
        <i className="closeSide fa-solid fa-x" onClick={showSideMenu}></i>

        <div className="side-menu-header">
          <div className="browse">Browse JPmazon</div>
          <div className="account">
            <div>Jimmy Joe Bob's account</div>
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
        <div className="side-links">
          <h2 className="trending">Trending</h2>
          <div>Best sellers</div>
          <div>New releases</div>
          <div>Movers and shakers</div>
        </div>
        <div className="category-side">
          <h2>Shop by category</h2>
          <CategorySidebar />
        </div>
      </div>

      {isShowSideMenu && <div className="opaque-background" onClick={showSideMenu}></div>}
    </div>
  );
}
