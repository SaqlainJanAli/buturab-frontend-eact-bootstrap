import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import PagesList from "./../data/NavPages";
import { Link } from "react-router-dom";
import ButurabAppLogo from "./../../resources/images/BUTURAB_LOGO_PLUS_NAME.png";

const NavBar = () => {
  return (
    <>
      {/* <div style={{ paddingTop: "25px" }}> */}
      <Navbar
        // bg="primary"
        variant="light"
        style={{
          background: "none",
          color: "black",
          border: "2",
          borderColor: "black",
          marginTop: "50",
        }}
      >
        <Container>
          <Navbar.Brand className="buturab-brand-name">
            <img
              src={ButurabAppLogo}
              className
              alt="Logo"
              height={90}
              width={300}
            />
          </Navbar.Brand>

          <Nav
            // className="me-auto"
            style={{
              background: "none",
              color: "black",
              border: "2",
              borderColor: "black",
            }}
          >
            {PagesList.map((itemPage) =>
              itemPage.isDropDown && itemPage.childItems.length > 0 ? (
                <NavDropdown
                  title={itemPage.title}
                  className="text-black"
                  style={{ color: "black" }}
                  id="basic-nav-dropdown"
                >
                  {itemPage.childItems.map((childItem) => (
                    <NavDropdown.Item
                      className="text-black"
                      href={childItem.link}
                    >
                      {childItem.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link className="text-black" href={itemPage.link}>
                  {itemPage.title}
                </Nav.Link>
              )
            )}
          </Nav>
        </Container>
      </Navbar>
      {/* </div> */}
    </>
  );
};

export default NavBar;
