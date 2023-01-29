import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Topbar() {
  const [name, setName] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    getName();
  }, []);
  const getName = async () => {
    const user = await axios.get("http://localhost:8000/user", {
      headers: {
        Authorization: `${window.localStorage.getItem("token")}`,
      },
    });
    setName(user.data.name);
  };
  console.log(name);
  const logout = () => {
    window.localStorage.removeItem("token");
    nav("/");
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/portal/home"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/portal/cart"
              >
                Cart
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/portal/order"
              >
                Orders
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h6 style={{ color: "white" }}>{name}</h6>
      <button onClick={logout} className="btn btn-danger btn-sm">
        Log out
      </button>
    </nav>
  );
}

export default Topbar;
