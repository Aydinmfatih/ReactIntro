import React, { Component } from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";

export default class Dashboard extends Component {
  render() {
    return (
    <div>
        <Navi/>
      <Categories/>
      <ProductList/>
    </div>
    ) ;
  }
}
