import React from "react";
import styles from "./Hero.module.css";
import { inter, montserrat } from "../fonts.jsx";
import Image from "next/image";
import pizza from "/public/heropizza.png";
import onion from "/public/onions.png";
import leafypizza from "/public/smallheroimage.png";
import { HiShoppingCart } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center g-5 py-5">
        <div className="col-md-6 col-xs-12">
          <h1
            className={`${inter["className"]} display-5 fw-bold text-body-emphasis lh-2 mb-3`}
          >
            Handmade, with an Extra Pinch of
            <span className={styles.love}> Love</span>
          </h1>
          <p className={`${montserrat["className"]} ${styles["paraHero"]}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            obcaecati soluta iste sequi optio, corrupti, perferendis
            reprehenderit recusandae quod, distinctio provident suscipit velit
            voluptate dolorem aliquid! Vitae, laudantium eaque et dolorum illum
            minus nulla ad maiores blanditiis deleniti totam rerum?
          </p>
          <button className={`${styles["mainBtn"]} ${inter["className"]}`}>
            <HiShoppingCart className={styles.cartIcon} />
            Order Now
          </button>
        </div>
        <div className="col-xs-12 col-md-6">
          <Image
            src={pizza}
            alt="Picture of a Pizza"
            width={400}
            height={400}
            className={`${styles["realhero"]} mx-auto d-lg-none img-fluid`}
          />
          <div>
            <div
              className={`${styles["left"]} float-end d-none d-lg-block`}
            ></div>
            
              <Image
                src={pizza}
                alt="Picture of a Pizza"
                width={400}
                height={400}
                className={`${styles["hero1"]} img-fluid d-none d-lg-block`}
              />
              <Image
                src={onion}
                alt="Picture of an onion"
                width={50}
                height={50}
                className={`${styles["hero2"]} img-fluid d-none d-lg-block`}
              />
              <Image
                src={leafypizza}
                alt="Picture of a delicious pizza"
                width={150}
                height={150}
                className={`${styles["hero3"]} img-fluid d-none d-lg-block`}
              />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
