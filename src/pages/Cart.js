import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  additem,
  addTotal,
  remove,
  subTotal,
} from "../Redux/Reducer/CartSlice";

function Cart() {
  const item = useSelector((state) => state.Cart.item);
  // const [item, setItem] = useState([]);
  const total = useSelector((state) => state.Cart.total);
  const dispatcher = useDispatch();
  console.log(item);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    const cartItems = await axios.get("http://localhost:8000/usercart", {
      headers: {
        Authorization: `${window.localStorage.getItem("token")}`,
      },
    });
    dispatcher(additem(cartItems.data.data));
    dispatcher(addTotal(cartItems.data.data));
  };

  let removeItem = (product) => {
    dispatcher(remove(product));
    dispatcher(subTotal(product));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="row" style={{ marginTop: "30px" }}>
            {item.length > 0 ? (
              item.map((product) => {
                return (
                  <div className="cart-container">
                    <div>
                      <img className="cart-img" src={product.products.img} />
                    </div>
                    <div>
                      <h5>Name:{product.products.name}</h5>
                      <h6>Price:{product.products.price}</h6>
                    </div>
                    <div>
                      <button
                        onClick={() => removeItem(product)}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h5>No items in cart</h5>
            )}
          </div>
        </div>
        {/* <div className="col-4">
          {item &&
            item.map((product) => {
              return (
                <div className="cart-container">
                  <h6 style={{ marginRight: "10px" }}>
                    {product.products.name}--
                  </h6>
                  <p>{product.products.price}</p>
                </div>
              );
            })}
          <h5>Total-{total}</h5>
        </div> */}
      </div>
    </div>
  );
}

export default Cart;
