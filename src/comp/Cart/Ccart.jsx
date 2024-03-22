import "./Ccart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, removeFromCart, decrement } from "../Redux/cartSlice";

const Ccart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const getData = (state) => state.cart;
  const products = useSelector(getData);
  console.log(cartItems);
  const dispatch = useDispatch();
  let total = 0;
  products.cart.forEach((pro) => {
    total += pro.totalprice;
    console.log(total);
  });
  return (
    <div>
      {cartItems.map((pro) => {
        return (
          <div className="cart-section">
            <div className="container-cart">
              <div className="item-img">
                <img src={pro.image} alt="" />
              </div>
              <div className="item-dec">
                <h5>{pro.description}</h5>

                <div className="item-info">
                  <h2>
                    {" "}
                    <i>category :</i> {pro.category}
                  </h2>
                  <div>
                    <span>
                      {" "}
                      <i>price : </i> {pro.price}$
                    </span>
                  </div>
                  <div className="item-qty">
                    <button className="qty-btn"
                      onClick={() => {
                        dispatch(increment(pro.id));
                      }}
                    >
                      +
                    </button>
                    <span>({pro.quantity}_items)</span>
                    <button className="qty-btn"
                      onClick={() => {
                        dispatch(decrement(pro.id));
                      }}
                    >
                      -
                    </button>
                  </div>
                  <button className="delete-btn"
                  onClick={() => {
                    dispatch(removeFromCart(pro.id));
                  }}
                >
                  delete item
                </button>
                </div>

                
              </div>
            </div>
          </div>
        );
      })}
            <span className="total">total price: {total} $</span>

    </div>
  );
};

export default Ccart;
