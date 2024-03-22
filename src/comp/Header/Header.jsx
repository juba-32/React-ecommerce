import { Link } from "react-router-dom";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
const Header = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <>
      <header>
        <div className="logo">
          <h1>E-commerce</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>
            <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
          <div className="cart">
            <Link to="/cart"><ShoppingCartIcon /> {totalAmount}</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
