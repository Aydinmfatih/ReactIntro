import React, { Component } from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";

export default class Dashboard extends Component {
  render() {
    return (
    <div>
       <Navi/>
       <div className="row">
         <div className="col-3">
           <Categories/>
         </div>
         <div className="col-9">
            <ProductList/>
         </div>
       </div>
     
     
    </div>
    ) ;
  }
}
