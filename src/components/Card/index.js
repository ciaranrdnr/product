import Indicator from "../Indicator";
import { Link } from "react-router-dom";

const Card = (props) => {
  const money = (number) => {
    return new Intl.NumberFormat("id-IN", {
      maximumSignificantDigits: 3,
    }).format(number);
  };
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
          {props.disc > 0 ? (
            <>
              <div>
                <Indicator
                  titleFront=""
                  num={`${props.disc}%`}
                  titleBack=""
                  outline=""
                  fill="Fill-red"
                />
                <span className="Sale-price">Rp{money(props.price)}</span>
              </div>
              <p className="Card-price">
                Rp{money(props.price * (props.disc / 100))}
              </p>
            </>
          ) : (
            <p className="Card-price">Rp{money(props.price)}</p>
          )}
          {props.badge ? (
            <Indicator
              titleFront=""
              num="10"
              titleBack="Menit Kirim"
              outline=""
              fill="Fill-green"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="Card-footer">
          <p className="Grey-text">1000 produk terjual</p>
        </div>
      </div>
    </Link>
  );
};
export default Card;
