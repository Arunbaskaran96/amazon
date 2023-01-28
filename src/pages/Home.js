import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { additem, addTotal } from "../Redux/Reducer/CartSlice";
import { addproducts } from "../Redux/Reducer/ProductSlice";

function Home() {
  const products = useSelector((state) => state.Products.item);
  const dispatcher = useDispatch();

  let addtocart = async (item) => {
    let cartitems = await axios.post("http://localhost:8000/cart", item, {
      headers: {
        Authorization: `${window.localStorage.getItem("token")}`,
      },
    });
    console.log("working...");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const user = await axios.get("http://localhost:8000/products", {
      headers: {
        Authorization: `${window.localStorage.getItem("token")}`,
      },
    });
    dispatcher(addproducts(user.data));
  };
  return (
    <div className="container">
      <div className="row">
        {products.map((item) => {
          return (
            <div className="col-3 main-container">
              <div className="img-div">
                <img className="imgs" src={item.img} />
              </div>
              <div className="content-div">
                <h5>{item.name}</h5>
                <p>{item.des}</p>
                <h5>{item.price}</h5>
              </div>
              <div className="btn-div">
                <button onClick={() => addtocart(item)}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
