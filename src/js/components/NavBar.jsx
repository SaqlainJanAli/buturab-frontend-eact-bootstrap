import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import PagesList from "./../data/NavPages";
import { Link } from "react-router-dom";
import ButurabAppLogo from "./../../resources/images/BUTURAB_LOGO_PLUS_NAME.png";

const NavBar = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Navbar
        expand="sm"
        variant="light"
        style={{
          background: "none",
          color: "black",
          border: "2",
          borderColor: "black",
          marginTop: props.isSticky === true ? "50" : "0",
        }}
        onToggle={setToggle(true)}
      >
        <Navbar.Brand className="buturab-brand-name d-none d-sm-block">
          <img src={ButurabAppLogo} alt="Logo" height={90} width={300} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
          className="bg-yellow mt-4 float-right"
        />

        <Navbar.Collapse id="navbarScroll" className="navbar-right">
          <Container className={`${toggle === true ? "bg-white" : "bg-none"}`}>
            <Nav
              className="navbar-right"
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
                  <Nav.Link
                    className="text-black"
                    href={itemPage.link}
                    style={{
                      backgroundColor:
                        props.isSticky === true ? "white" : "transparent",
                    }}
                  >
                    {itemPage.title}
                  </Nav.Link>
                )
              )}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
      {/* </div> */}
    </>
  );
};

export default NavBar;
