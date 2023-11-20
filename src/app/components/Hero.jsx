import React from "react";
import styles from "./Hero.module.css";
import { inter, montserrat } from "../fonts.jsx";

const Hero = () => {
  return (
    <div className="container">
      <div className="row align-items-center g-5 py-5">
        <div className="col-md-6 col-xs-12">
          <h1 className="display-5 fw-bold text-body-emphasis lh-2 mb-3">
            <span className={inter.className}>
              Handmade, with an Extra Pinch of
              <span className={styles.love}> Love</span>
            </span>
          </h1>
          <p className={styles.paraHero}>
            <span className={montserrat.className}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              obcaecati soluta iste sequi optio, corrupti, perferendis
              reprehenderit recusandae quod, distinctio provident suscipit velit
              voluptate dolorem aliquid! Vitae, laudantium eaque et dolorum
              illum minus nulla ad maiores blanditiis deleniti totam rerum?
            </span>
          </p>
          <button className={styles.mainBtn}>Order Now</button>
        </div>
        <div className="col-xs-12 col-md-6">{/* Image goes here */}</div>
      </div>
    </div>
  );
};

export default Hero;
