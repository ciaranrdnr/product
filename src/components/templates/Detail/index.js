import { useState } from "react";
import "react-spring-bottom-sheet/dist/style.css";
import Head from "../../components/templates/detail/Head";
import Desc from "../../components/templates/detail/Description";
import Others from "../../components/templates/detail/Recommendation";
import Nav from "../../components/templates/detail/Navbar";
import Footer from "../../components/templates/detail/Footer";

const DetailTemplate = () => {
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
export default DetailTemplate;
