import React from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
export default function CartSummary() {
  return (
  <div>
      <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
  </div>
  );
}
