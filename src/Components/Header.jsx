import React from "react";
import travel from "../assets/travel.png";

export default function Header() {
  return (
    <nav className="nav">
      <img src={travel} alt="" width="40px" className="header-icon" />
      <h1 className="header-title">My Travel Journal</h1>
    </nav>
  );
}
