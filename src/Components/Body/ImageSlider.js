import "./ImageSlider.css";
import { useState } from "react";
import prime from "../../Assets/prime.jpg";
import prime2 from "../../Assets/prime2.jpg";
import offJP from "../../Assets/100Off.jpg";

export default function ImageSlider() {
  const slides = [
    { url: prime, title: "prime" },
    { url: offJP, title: "OffJP" },
    { url: prime2, title: "prime2" },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const changeIndex = () => {
    currentIndex == 0 ? setCurrentIndex(1) : setCurrentIndex(0);
  };

  setInterval(changeIndex, 2000);

  const styles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundSize: "clamp(100%, 150%, 200%)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    maxWidth: "100%",
    minWidth: "430px",
    height: "30vh",
    backgroundColor: "#1798fe",
  };

  return (
    <div className="image-slider">
      <div style={styles}></div>
    </div>
  );
}
