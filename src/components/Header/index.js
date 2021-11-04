import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={logo} alt="itemku" width="123px" height="auto" />
      </Link>
    </div>
  );
};
export default Header;
