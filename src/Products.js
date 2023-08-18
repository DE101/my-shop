import { useEffect, useState } from "react";
import Product from "./Product";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      (async () => {
        let response = await fetch("https://dummyjson.com/products");
        response = await response.json();
        setProducts(response.products);
      })();
      return () => {

      };
    }, []);
  
    return (
      <div className="container">
      <div className="row">
        {products.map((data, index) => {
          return <Product key={index} data={data}></Product>;
        })}
        </div>
      </div>
    );
}