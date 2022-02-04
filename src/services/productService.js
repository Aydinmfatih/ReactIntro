import axios from "axios";

export default class ProductService{
    async getProducts() {
        return await axios.get("https://jsonplaceholder.typicode.com/comments");
      }
}