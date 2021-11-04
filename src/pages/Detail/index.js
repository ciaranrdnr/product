import { useState } from "react";
import "react-spring-bottom-sheet/dist/style.css";
import Head from "./head";
import Desc from "./desc";
import Others from "./others";
import Nav from "../../components/Navbar";
import Footer from "./footer";

const Detail = () => {
  const [bg, setBg] = useState(false);
  let [numCart, setNumCart] = useState(0);
  const showBg = () => {
    if (window.scrollY > 20) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  window.addEventListener("scroll", showBg);
  return (
    <div className="Detail">
      <Nav numCart={numCart} bg={bg} />
      <Head />
      <Desc />
      <Others />
      <Footer numCart={numCart} setNumCart={setNumCart} />
    </div>
  );
};
export default Detail;
