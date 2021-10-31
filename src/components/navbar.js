import IconCart from "../assets/icon/cart.js";
import IconShare from "../assets/icon/share.js";
import IconBack from "../assets/icon/back.js";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <div className={props.bg ? "Nav Nav-bg" : "Nav"}>
      <Link to="/">
        <div className="Btn-back">
          <button className="Btn-icon  ">
            <IconBack />
          </button>
        </div>
      </Link>

      <div className="BtnTop-right">
        <button className="Btn-icon">
          <IconShare />
        </button>
        <button className="Btn-icon">
          <IconCart />
          {props.numCart > 0 ? (
            <div className="Circle">{props.numCart}</div>
          ) : (
            <></>
          )}
        </button>
      </div>
    </div>
  );
};
export default Nav;
