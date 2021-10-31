import Indicator from "./indicator";
import imgApex from "../assets/game-1.png";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to="/detail">
      <div className="Card">
        <div className="Card-header Img-mask">
          <img src={imgApex} alt="product" />
        </div>
        <div className="Card-body">
          <p className="Card-title">{props.title}</p>
          <p className="Card-game Grey-text">{props.game}</p>
          <div>
            <Indicator
              titleFront="Stok"
              num="999+"
              titleBack=""
              outline="Outline-green"
              fill=""
            />
          </div>
          <div>
            <Indicator
              titleFront=""
              num="99%"
              titleBack=""
              outline=""
              fill="Fill-red"
            />
            <span className="Sale-price">Rp200.000</span>
          </div>
          <p className="Card-price">Rp100.000</p>
          <Indicator
            titleFront=""
            num="10"
            titleBack="Menit Kirim"
            outline=""
            fill="Fill-green"
          />
         
        </div>
        <div className="Card-footer">
          <p className="Grey-text">1000 produk terjual</p>
        </div>
      </div>
    </Link>
  );
};
export default Card;
