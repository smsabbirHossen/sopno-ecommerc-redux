import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Footer.scss";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import paymentImg from "../../assets/images/payment-getways.png";

const Footer = () => {
  const data = [
    {
      id: 1,
      title: "Featured",
      links: ["About Us", "Trems & Conditions", "Best Products"],
    },
    {
      id: 2,
      title: "General Links",
      links: ["Blog", "Tracking Order", "Become Seller"],
    },
    {
      id: 3,
      title: "Healfull",
      links: ["Flash Sale", "FAQ", "Support"],
    },
  ];
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="footer-top-img">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="footer-middle">
            <div className="middle-item">
              <h2>About us</h2>
              <p>
                We know there are a lot of threa developers our but we pride
                into a firm in the industry.
              </p>
            </div>
            {data.map((item) => {
              return (
                <div className="middle-item" key={item.id}>
                  <h2>{item.title}</h2>
                  <ul>
                    {item.links.map((link, i) => {
                      return (
                        <li key={i}>
                          <Link to="/">
                            <span>{link}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="footer-bottom">
            <div className="content">
              <div className="icons">
                <FaFacebookF size={20} color="#9a9a9a" />
                <AiOutlineInstagram size={20} color="#9a9a9a" />
                <FaLinkedinIn size={20} color="#9a9a9a" />
              </div>
              <p>copyrigh @ Sabbir Hossain</p>
            </div>
            <div className="payment-img">
              <img src={paymentImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
