import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { additem, addTotal } from "../Redux/Reducer/CartSlice";
import { addproducts } from "../Redux/Reducer/ProductSlice";

function Home() {
  const [value, setValue] = useState("");
  const products = useSelector((state) => state.Products.item);
  const dispatcher = useDispatch();

  let addtocart = async (item) => {
    let cartitems = await axios.post(
      "https://amazonclone-8bxv.onrender.com/cart",
      item,
      {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`,
        },
      }
    );
    console.log("working...");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const user = await axios.get(
      "https://amazonclone-8bxv.onrender.com/products",
      {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`,
        },
      }
    );
    dispatcher(addproducts(user.data));
  };

  const onchange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <div style={{ marginTop: "20px" }} className="row">
        <div className="col-lg-6 col-sm-6">
          <input
            type="text"
            placeholder="search here...."
            value={value}
            onChange={onchange}
          ></input>
        </div>
      </div>
      <div style={{ marginTop: "20px" }} className="row">
        {products.length > 0 ? (
          products
            .filter((values) => {
              if (value === "") {
                return values;
              } else if (
                values.name.toLowerCase().includes(value.toLowerCase())
              ) {
                return values;
              }
            })
            .map((item) => {
              if (item) {
                return (
                  <div className="col-lg-3 col-sm-6 main-container">
                    <div className="img-div">
                      <img className="imgs" src={item.img} />
                    </div>
                    <div className="content-div">
                      <h5>{item.name}</h5>
                      <p>{item.des}</p>
                      <h5>{item.price}</h5>
                    </div>
                    <div className="btn-div">
                      <button onClick={() => addtocart(item)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                );
              } else {
                <h5>sdsdsd</h5>;
              }
            })
        ) : (
          <h6>No product found</h6>
        )}
      </div>
    </div>
  );
}

export default Home;
