import React from "react";
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
            <UncontrolledDropdown inNavbar nav>
              <CartSummary></CartSummary>
            </UncontrolledDropdown>
          </Nav>
        
              
             <SignedIn/> 
             <SignedOut/>
           
            
        </Collapse>
      </Navbar>
      </div>
    </div>
  );
}
