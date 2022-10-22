import "./Footer.css";
import flag from "../../Assets/IE24.png";
import { useRef } from "react";

export default function Footer() {
  const message = useRef(null);

  const displayNothingWorksMsg = () => {
    message.current.style.display = "flex";

    setTimeout(() => {
      message.current.style.display = "none";
    }, 2300);
  };

  return (
    <footer className="footer" onClick={displayNothingWorksMsg}>
      <a href="#top" className="footer-top">
        Back to top
      </a>
      <div className="footer-middle">
        <div className="nothing-works" ref={message}>
          <div>Oops..... seems like nothing down here works</div>
        </div>
        <div className="info-container">
          <div className="column one">
            <div className="heading">Let us help you</div>
            <div>Covid-23 and JPmazon</div>
            <div>Track packages or view orders</div>
            <div>Delivery rates & policy</div>
            <div>Amazon Prime</div>
            <div>Returns and replacements</div>
            <div>Recycling</div>
            <div>Manage your contenrt and devices</div>
            <div>JPmazon Mobile App</div>
            <div>JPmazon Assistant</div>
            <div>Customer services</div>
            <div>Accessibility</div>
          </div>
          <div className="column two">
            <div className="heading">Make Money on Jpmazon</div>
            <div>Sell on JPmazon</div>
            <div>Sell on JPpmazon Business</div>
            <div>Sell on JPmazon handmade</div>
            <div>Sell on JPmazon launchpad</div>
            <div>Associates program</div>
            <div>Fulfillment by JPmazon</div>
            <div>Seller fulfilled Plime</div>
            <div>Advertise your products</div>
            <div>Publish with JPmazon</div>
            <div>Jpmazon pay</div>
            <div>Host an Jpmazon hub</div>
          </div>
          <div className="column three">
            <div className="heading">JPmazon payment methods</div>
            <div>JPmazon Platinum mastercard</div>
            <div>JPmazon Classic mastercard</div>
            <div>JPmazon Business Ames card</div>
            <div>JPmazon money store</div>
            <div>JPmazon</div>
            <div>Gift cards</div>
            <div>Shop with points</div>
            <div>JPmazon currency conversion</div>
            <div>Top up your account</div>
            <div>Top uo your account in store</div>
          </div>
          <div className="column four">
            <div className="heading">Get to know us</div>
            <div>Careers</div>
            <div>About us</div>
            <div>Sustainability</div>
            <div>JPmazon service</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="country">
          {/* <div>🌐 Anglaise</div> */}
          <div> € EUR - Euro</div>
          <div className="irl">
            <img src={flag} alt="Irish flag" />
            Ireland
          </div>
        </div>

        <div className="switch">Switch Accounts</div>
        <div className="sign-out">Sign out</div>
        <div className="conditions">
          <div>Conditions of use</div>
          <div>Privacy notice</div>
          <div>Cookies notice</div>
          <div>interest based ads notice</div>
        </div>
        <div className="copyright">© 1982 - 2022, JP Larkin inc, or his affiliates</div>
        <br />
        <br />
      </div>
    </footer>
  );
}
