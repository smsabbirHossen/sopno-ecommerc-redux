import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarStatus, setSidebarOff } from "../../store/slidebarSlice";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Slidebar.scss";
import {
  fetchAsyncCategories,
  getAllCategories,
} from "../../store/categorySlice";

const Slidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);
  return (
    <aside className={`sidebar ${isSidebarOn ? "hide-sidebar" : ""}`}>
      <button
        type="button"
        className="sidebar-hide-btn"
        onClick={() => dispatch(setSidebarOff())}
      >
        <AiOutlineClose />
      </button>
      <div className="sidebar-cnt">
        <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">
          All Categories
        </div>
        <ul className="cat-list">
          {categories.map((category, idx) => {
            return (
              <li key={idx} onClick={() => dispatch(setSidebarOff())}>
                <Link
                  to={`category/${category}`}
                  className="cat-list-link text-capitalize"
                >
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Slidebar;
