import React from "react";
import "../../../App.css";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Business
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Summary
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Hot Sellings
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Manage Order
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Payments
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Settings
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
