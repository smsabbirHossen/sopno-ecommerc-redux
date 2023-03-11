import React from "react";
import "./Banner.scss";
import { motion } from "framer-motion";
import banner1 from "../../assets/images/banner-1.png";
import banner2 from "../../assets/images/banner-2.png";
import banner3 from "../../assets/images/banner-3.png";
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
const Banner = () => {
  return (
    <div className="hero-banner" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="hero-banner-wrapper">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="left"
          >
            <img style={{ overflow: "hidden" }} src={banner1} alt="" />
          </motion.div>

          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="right"
          >
            <div style={{ overflow: "hidden" }}>
              <img src={banner2} alt="" />
            </div>
            <div style={{ overflow: "hidden" }}>
              <img src={banner3} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
