import React from "react";
import styles from "./about.module.css";
import { inter, montserrat } from "../fonts.jsx";

const about = () => {
  return (
    <div className="container">
      <div className="row align-items-center g-5 py-5">
        <div className="col-xs-12 col-md-4">{/* Image goes here */}</div>
        <div className="col-md-5 col-xs-12">
          <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-3">
            <span className={inter.className}>
              Daily Fresh and Always Tasty
            </span>
          </h1>
          <p className={styles.paraAbout}>
            <span className={montserrat.className}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              obcaecati soluta iste sequi optio, corrupti, perferendis
              reprehenderit recusandae quod, distinctio provident suscipit velit
              voluptate dolorem aliquid! Vitae, laudantium eaque et dolorum
              illum minus nulla ad maiores blanditiis deleniti totam rerum?
            </span>
          </p>
        </div>
        <div className="col-xs-12 col-md-3">{/* Image goes here */}</div>
      </div>
    </div>
  );
};

export default about;
