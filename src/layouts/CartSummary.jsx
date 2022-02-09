import React from "react";




import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
export default function CartSummary() {
  return (
    <div>
     
   
        <DropdownToggle caret nav>
          Options
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Acer Laptop</DropdownItem>
          <DropdownItem>Del laptop</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Asus laptop</DropdownItem>
          <DropdownItem divider />
          <DropdownItem> Sepete git</DropdownItem>
          
        </DropdownMenu>
      
    </div>
  );
}
