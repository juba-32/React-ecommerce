import "./Products.css";
// import img from "../../assets/th.jpg";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
const Products = () => {
  // Managing data state ===
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  //*===
  const dispatch = useDispatch();
  //  Fetching data from API ===
  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const dataa = await res.json();
      setData(dataa);
    })();
  }, []);
  //*=

  //=== Filtering products based on category ===

  const filteredProducts = () => {
    if (category === null) {
      return data; // Return all products if no category is specified
    } else {
      return data
        .filter((product) => {
          return product.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
        .filter((product) => {
          return product.category === category;
        });
    }
  };
  // Handler function for category filtering
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <h1 className="title">ALL PRODUCTS</h1>
      <input
        className="search"
        type="text"
        placeholder="Search Products"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <FormControl sx={{ ml: "50px" }}>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            checked={category === "men's clothing"}
            onChange={handleChange}
            value="men's clothing"
            control={<Radio />}
            label="Men's Clothing"
          />
          <FormControlLabel
            checked={category === "women's clothing"}
            onChange={handleChange}
            value="women's clothing"
            control={<Radio />}
            label="Women's Clothing"
          />
          <FormControlLabel
            checked={category === "jewelery"}
            onChange={handleChange}
            value="jewelery"
            control={<Radio />}
            label="Jewelery"
          />
          <FormControlLabel
            checked={category === "electronics"}
            onChange={handleChange}
            value="electronics"
            control={<Radio />}
            label="Electronics"
          />
        </RadioGroup>
      </FormControl>

      <div className="products">
        {filteredProducts()?.map((pro) => {
          return (
            <div className="container">
              <article className="product">
                <img key={pro.id} src={pro.image} alt="sssss" />
                <div className="pro-info">
                  <div className="pro-about">
                    <h2 className="pro-title">{pro.title}</h2>
                    <p className="pro-price">{pro.price} $</p>
                  </div>
                  <button
                    className="btn"
                    onClick={() => {
                      dispatch(addToCart(pro));
                    }}
                  >
                    add to cart
                  </button>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
