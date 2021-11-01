import Indicator from "./indicator";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to="/detail">
      <div className="Card">
        <div className="Card-header Img-mask">
          <img src={props.src} alt="product" />
        </div>
        <div className="Card-body">
          <p className="Card-title">{props.title}</p>
          <p className="Card-game Grey-text">{props.game}</p>
          <div>
            <Indicator
              titleFront="Stok"
              num={props.stok > 999 ? "999+" : props.stok}
              titleBack=""
              outline={props.stok > 999 ? "Outline-green" : "Outline-orange"}
              fill=""
            />
          </div>
          <div>
            <Indicator
              titleFront=""
              num={props.disc + "%"}
              titleBack=""
              outline=""
              fill="Fill-red"
            />
            <span className="Sale-price">
              Rp{props.price * (props.disc / 100)}
            </span>
          </div>
          <p className="Card-price">Rp{props.price}</p>
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
