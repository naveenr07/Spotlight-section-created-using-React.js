import React from "react";
import "../../../App.css";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} width="150px" alt="logo" />
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
                <a class="nav-link active" aria-current="page" href="/summary">
                  Summary
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/product">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/hotselling">
                  Hot Sellings
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/order">
                  Manage Order
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/payment">
                  Payments
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="settings">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
