import React from "react";
import Product from "../Product/Product";
import "./ProductList.scss";
import { motion } from "framer-motion";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const ProductList = ({ products }) => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="product-lists grid bg-whitesmoke my-3"
    >
      {products.map((product) => {
        let discountedPrice =
          product.price - product.price * (product.discountPercentage / 100);
        return (
          <Product key={product.id} product={{ ...product, discountedPrice }} />
        );
      })}
    </motion.div>
  );
};

export default ProductList;
