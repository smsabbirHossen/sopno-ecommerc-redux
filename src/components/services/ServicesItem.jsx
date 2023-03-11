import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
const ServicesItem = ({ service }) => {
  const { title, subTitel, icon } = service;
  return (
    <div className="services-item">
      <div>
        <MdOutlineLocalShipping size={50} color="#FF6433" />
      </div>
      <div>
        <p className="title">{title}</p>
        <p className="sub-titel">{subTitel}</p>
      </div>
    </div>
  );
};

export default ServicesItem;
