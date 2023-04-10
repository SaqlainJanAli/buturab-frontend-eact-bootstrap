import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import PagesList from "./../data/NavPages";
import { Link } from "react-router-dom";
// import ButurabAppLogo from "./../../resources/images/BUTURAB_LOGO_PLUS_NAME.png";
import ButurabAppLogo from "./../../resources/images/Buturab_logo_with_name_png.png";

const NavBar = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleNavBar = () => {
    setToggle(!toggle);
  };
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
          // marginTop: props.isSticky === true ? "50" : "0",
        }}
        className="pb-2 "
        onToggle={toggleNavBar}
      >
        <Navbar.Brand className="d-none d-sm-block">
          <img
            src={ButurabAppLogo}
            // className="float-left"
            alt="Logo"
            height={120}
            width={300}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
          className="mt-4"
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="full-width">
            <div
              className={`d-flex ${toggle === true ? "bg-white" : "bg-none"} `}
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
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* </div> */}
    </>
  );
};

export default NavBar;
