import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={props.link}>
      <div className="Card">
       {props.children}
      </div>
    </Link>
  );
};
export default Card;
