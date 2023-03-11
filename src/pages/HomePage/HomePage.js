import React, { useEffect } from "react";
import {
  ProductList,
  Loader,
  Banner,
  Services,
  Sellers,
} from "../../components/index";

import { STATUS } from "../../utils/status";
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
} from "../../store/productSlice";
import { getAllCategories } from "../../store/categorySlice";
import { useSelector, useDispatch } from "react-redux";
const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, []);
  const products = useSelector(getAllProducts);

  const productStatus = useSelector(getAllProductsStatus);

  //rnadomizing the products in the list
  const tempProducts = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);
      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }
  let catProductOne = () => {
    let catProductOne = products.filter(
      (product) => product.category === categories[0]
    );
    let sliceProduct = catProductOne.slice(0, 4);
    return sliceProduct;
  };

  let catProductTwo = () => {
    let catProductTwo = products.filter(
      (product) => product.category === categories[1]
    );
    let sliceProduct = catProductTwo.slice(0, 4);
    return sliceProduct;
  };
  let catProductThree = () => {
    let catProductThree = products.filter(
      (product) => product.category === categories[2]
    );
    let sliceProduct = catProductThree.slice(0, 4);
    return sliceProduct;
  };
  let catProductFour = () => {
    let catProductFour = products.filter(
      (product) => product.category === categories[3]
    );
    let sliceProduct = catProductFour.slice(0, 4);
    return sliceProduct;
  };

  return (
    <main>
      <Banner />
      <Services />

      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-5">
            <div className="categories-item">
              <div className="title-md">
                <h3>See our products</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={tempProducts} />
              )}
            </div>
            <Sellers />
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[0]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductOne()} />
              )}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[1]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductTwo()} />
              )}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[2]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductThree()} />
              )}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[3]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductFour()} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
