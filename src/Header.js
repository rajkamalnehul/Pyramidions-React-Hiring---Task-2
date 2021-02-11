/** @format */

import React from "react";
import "./header.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Header() {
  const [{ restaurants }] = useStateValue();
  return (
    <div className="container mb-5 header">
      <div className="header_items">
        <Link to="/" style={{ textDecoration: "none", color: "#b8b8b6" }}>
          <h5>{restaurants.length} RESTAURANTS</h5>
        </Link>
      </div>
      <div className="header_items">
        <h5>RELEVANCE</h5>
      </div>
      <div className="header_items">
        <h5>FILTER</h5>
      </div>
    </div>
  );
}

export default Header;
