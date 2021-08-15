import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./productComponent";
import axios from "axios";
import { setProducts } from "./../redux/actions/productsActions";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    console.log(response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(products);
  return (
    <div className="ui grid container" style={{ marginTop: "20px" }}>
      <ProductComponent />
    </div>
  );
};

export default ProductList;
