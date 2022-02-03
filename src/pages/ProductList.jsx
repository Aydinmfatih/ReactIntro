import React, { useState ,useEffect} from "react";
import { Table } from "reactstrap";
import ProductService from "../services/productService";
export default function ProductList() {
  const [p, setProducts] = useState([])
  useEffect(()=>{
    let productService = new ProductService()
    productService.getProducts().then(result=>setProducts((result.data.data)).catch()
  )})
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Kullanıcı id </th>
            <th>No</th>
            <th>Başlık</th>
            <th>Konu</th>
          </tr>
        </thead>
        <tbody>
          {p.map(p => (
            <tr key={p.id} >
              <th>{p.userId} </th>
              <th>{p.id} </th>
              <th>{p.title} </th>
              <th>{p.body} </th>
             
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
