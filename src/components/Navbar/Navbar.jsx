import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOn } from "../../store/slidebarSlice";
import { getAllCategories } from "../../store/categorySlice";
import { fetchAsyncCategories } from "../../store/categorySlice";
import { CartModal } from "../index";
import logo from "../../assets/images/logo.svg";
import {
  getAllCarts,
  getCartItemCount,
  getCartTotal,
} from "../../store/cartSlice";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemCount);
  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, []);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);
  const categories = useSelector(getAllCategories);

  return (
    <nav className="navbar">
      <div className="navbar-cnt flex align-center">
        <div className="brand-and-toggler flex align-center">
          <button
            type="button"
            className="sidebar-show-btn text-dark"
            onClick={() => dispatch(setSidebarOn())}
          >
            <FaBars />
          </button>
          <Link to="/" className="navbar-brand flex align-center">
            <span className="navbar-brand-ico">
              <HiShoppingBag />
            </span>
            <span className="navbar-brand-txt mx-2">
              <img src={logo} alt="" />
              {/* <span className="fw-7">Snap</span>Up. */}
            </span>
          </Link>
        </div>
        <div className="navbar-collapse w-100">
          <div className="navbar-search bg-white">
            <div className="flex align-center">
              <input
                type="text"
                className="form-control fs-14"
                onChange={(e) => handleSearchTerm(e)}
                placeholder="Search your preferred items here"
              />
              <Link
                to={`search/${searchTerm}`}
                className="text-white search-btn flex align-center justify-center"
              >
                <HiMagnifyingGlass />
              </Link>
            </div>
          </div>
          <ul className="navbar-nav flex align-center fs-12 fw-4 font-manrope">
            {
              // taking only first 8 categories
              categories.slice(0, 8).map((category, idx) => (
                <li className="nav-item no-wrap" key={idx}>
                  <Link
                    to={`category/${category}`}
                    className="nav-link nav-text text-capitalize"
                  >
                    {category}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="navbar-cart flex align-center">
          <div className="cart-btn">
            <FiShoppingCart />
            <div className="cart-items-value">{itemsCount}</div>
            <CartModal carts={carts} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
