import React from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Container style={{ overflow: "visible", height: "100px" }}>
        <NavBar />
      </Container>
    </>
  );
};

export default Header;
