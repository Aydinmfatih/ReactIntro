import React from "react";
import { NavItem, NavLink, Nav, } from "reactstrap";
export default function Categories() {
  return (
    <div>
      
        <Nav className="col-3" vertical>
          <NavItem>
            <NavLink href="#">component</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </NavItem>
          
        </Nav>
      
    </div>
  );
}
