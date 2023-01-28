import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portal from "./Components/Portal";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const products = [];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/portal" element={<Portal />}>
            <Route path="home" element={<Home products={products} />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="order" element={<Orders />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
