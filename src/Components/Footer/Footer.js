import "./Footer.css";
import { AiOutlineArrowUp } from "react-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#top" className="footer-top">
        <AiOutlineArrowUp />
        Back to top
      </a>
      <div className="footer-middle"></div>
      <div className="footer-bottom">
        <div></div>
        <div></div>
        <div></div>
        <div>© 1982 - 2022 </div>
      </div>
    </footer>
  );
}
