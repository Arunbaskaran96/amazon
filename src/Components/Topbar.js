import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
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
    </nav>
  );
}

export default Topbar;
