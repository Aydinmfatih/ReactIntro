import React, { Component } from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import CardDetail from "../pages/CardDetail";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navi />
        <div className="row">
          <div className="col-3">
            <Categories />
          </div>
          <div className="col-9">
            <BrowserRouter>
              <Routes>
              <Route exact path="/products" element={<ProductList/>}></Route>
              <Route exact path="/products/1" element={<ProductDetail/>}></Route>
              <Route  path="/card" element={<CardDetail/>}></Route>
              </Routes>
            </BrowserRouter>
            
          </div>
        </div>
      </div>
    );
  }
}
