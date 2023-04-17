import React from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <Container>
        <NavBar isSticky={props.isSticky} />
      </Container>
    </>
  );
};

export default Header;
