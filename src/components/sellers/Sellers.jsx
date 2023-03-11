import React from "react";
import saller1 from "../../assets/images/saller-1.png";
import saller2 from "../../assets/images/saller-2.png";
import saller3 from "../../assets/images/saller-3.png";
import saller4 from "../../assets/images/saller-4.png";
import saller5 from "../../assets/images/saller-5.png";
import saller6 from "../../assets/images/saller-6.png";
import ads1 from "../../assets/images/ads-1.png";
import ads2 from "../../assets/images/ads-2.png";
import "./Sellers.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
const data = [
  {
    id: 1,
    img: saller1,
    name: "Sopno Bd",
  },
  {
    id: 2,
    img: saller2,
    name: "Sopno Bd",
  },
  {
    id: 3,
    img: saller3,
    name: "Sopno Bd",
  },
  {
    id: 4,
    img: saller4,
    name: "Sopno Bd",
  },
  {
    id: 5,
    img: saller5,
    name: "Sopno Bd",
  },
  {
    id: 6,
    img: saller6,
    name: "Sopno Bd",
  },
];

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
const Sellers = () => {
  return (
    <section className="sellers">
      <div className="container">
        <div className="seller-top">
          <h2 className="title">Best saller</h2>
          <button className="seller-btn">
            View More
            <AiOutlineArrowRight size={25} />
          </button>
        </div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="sellers-wrapper"
        >
          {data.map((seller) => {
            return (
              <div className="seller" key={seller.id}>
                <div className="seller-img">
                  <img src={seller.img} alt="" />
                </div>
                <p className="saller-name">{seller.name}</p>
              </div>
            );
          })}
        </motion.div>
        <div className="seller-ads">
          <motion.img
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            src={ads1}
            alt=""
          />
          <motion.img
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            src={ads2}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Sellers;
