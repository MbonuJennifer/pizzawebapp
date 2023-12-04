import React from "react";
import styles from "./about.module.css";
import { inter, montserrat } from "../fonts.jsx";
import Image from "next/image";
import pizzapan from "/public/dailypizza.png";
import garlic from "/public/garlic.png";

const about = () => {
  return (
    <div className="container">
      <div className="row align-items-center g-5 py-5">
        <div className="col-xs-12 col-md-4">
          <Image
            src={pizzapan}
            alt="Picture of a Pizza in a pan"
            width={400}
            height={400}
          />
        </div>
        <div className="col-md-5 col-xs-12">
          <h3
            className={`fw-bold lh-2 mb-3 ${inter["className"]}`}
          >
            Daily Fresh and Always Tasty
          </h3>
          <p className={`${styles["paraAbout"]} ${montserrat["className"]}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            obcaecati soluta iste sequi optio, corrupti, perferendis
            reprehenderit recusandae quod, distinctio provident suscipit velit
            voluptate dolorem aliquid! Vitae, laudantium eaque et dolorum illum
            minus nulla ad maiores blanditiis deleniti totam rerum?
          </p>
        </div>
        <div className="col-xs-12 col-md-3">
          <Image
            src={garlic}
            alt="Picture of a Pizza in a pan"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default about;
