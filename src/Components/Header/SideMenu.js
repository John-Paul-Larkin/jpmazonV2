import "./SideMenu.css";
export default function SideMenu({ showSideMenu, isShowSideMenu }) {
  return (
    <div className={"side-menu-container"}>
      <div className="opaque-background"></div>

      <div className={isShowSideMenu ? "side-menu transition" : "side-menu"}>
        <i className="closeSide fa-solid fa-x" onClick={showSideMenu}></i>

        <div className="side-menu-header">
          <div className="browse">Browse JPmazon</div>
          <div className="account">
            <div>Jimmy Joe Bob's account</div>
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
