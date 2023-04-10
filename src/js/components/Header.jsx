import React from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <div
        style={{
          overflow: "visible",
          minHeight: "40px",
        }}
      >
        <NavBar isSticky={props.isSticky} />
      </div>
    </>
  );
};

export default Header;
