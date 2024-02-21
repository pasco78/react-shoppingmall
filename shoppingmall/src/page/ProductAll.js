import React, { useEffect, useState } from "react";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getproducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    getproducts();
  }, []);
  return <div></div>;
};

export default ProductAll;
