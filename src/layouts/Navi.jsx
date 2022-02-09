import React, { useState } from "react";
import CartSummary from "./CartSummary";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Nav,
  UncontrolledDropdown,
} from "reactstrap";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  function handleSignOut() {
    setIsAuthenticated(false);
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <div className="row">
        <Navbar container color="light" expand="md" light>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              
            </Nav>
            <UncontrolledDropdown inNavbar Nav>
                <CartSummary></CartSummary>
              </UncontrolledDropdown>
            {isAuthenticated? <SignedIn signOut={handleSignOut} /> : <SignedOut SignIn={handleSignIn} />}
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}
