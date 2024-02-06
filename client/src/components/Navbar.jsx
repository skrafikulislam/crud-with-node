import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      <Link
        to="/"
        style={{
          color: "black",
          fontSize: "34px",
          fontWeight: "600",
          textDecoration: "none",
          marginBottom: "2rem",
        }}
      >
        {" "}
        Home
      </Link>
      <Link
        style={{
          color: "black",
          fontSize: "34px",
          fontWeight: "600",
          textDecoration: "none",
        }}
        to="/register"
      >
        Register
      </Link>
      <Link
        style={{
          color: "black",
          fontSize: "34px",
          fontWeight: "600",
          textDecoration: "none",
        }}
        to="/login"
      >
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
