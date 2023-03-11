import React from "react";
import "./Services.scss";
import { MdOutlineLocalShipping } from "react-icons/md";
import ServicesItem from "./ServicesItem";
import { motion } from "framer-motion";
const data = [
  {
    id: 1,
    title: "Free Shipping",
    subTitel: "When ordering over $100",
    icon: MdOutlineLocalShipping,
  },
  {
    id: 2,
    title: "Free Shipping",
    subTitel: "When ordering over $100",
    icon: MdOutlineLocalShipping,
  },
  {
    id: 3,
    title: "Free Shipping",
    subTitel: "When ordering over $100",
    icon: MdOutlineLocalShipping,
  },
  {
    id: 4,
    title: "Free Shipping",
    subTitel: "When ordering over $100",
    icon: MdOutlineLocalShipping,
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
const Services = () => {
  return (
    <motion.div
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="services"
    >
      <div className="container">
        <div className="services-wrapper">
          {data.map((service) => (
            <ServicesItem service={service} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
