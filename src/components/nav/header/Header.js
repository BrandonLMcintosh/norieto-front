import React from "react";
import {
  Nav,
  NavbarBrand,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Collapse,
} from "reactstrap";

function Header() {
  return (
    <div>
      <Navbar>
        <NavbarBrand>Norieto</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav>
            <NavItem>
              <NavLink></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
