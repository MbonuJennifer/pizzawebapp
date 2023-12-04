import React from "react";
import styles from "./Strength.module.css";
import { inter, montserrat } from "../fonts.jsx";
import Image from "next/image";
import rice from "/public/all-kinds-of-foods_rice.png";
import fan from "/public/all-kinds-of-foods_fan.png";
import smiley from "/public/all-kinds-of-foods_smiley.png";
import location from "/public/all-kinds-of-foods_location.png";
import slice from "/public/ourstrength.png";

const Strength = () => {
  return (
    <section className={styles.mainBox}>
      <div className="container-fluid px-0">
        <div className={`row fw-bold ${inter["className"]}`}>
          <div className={`d-flex justify-content-between align-items-center`}>
            <div>
              <h5 className={styles.heading}>Our Strength</h5>
              <h2 className={styles.bigHeading}>Why We Are The Best?</h2>
            </div>
            <div>
              <Image
                src={slice}
                alt="Sandwich Photo"
                width={250}
                height={200}
                className="img-fluid d-inline mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-0 my-4">
          <div className="col">
            <div className="border-0">
              <Image
                src={rice}
                alt="Sandwich Photo"
                width={50}
                height={50}
                className="img-fluid mb-3"
              />
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h5 className={inter.className}>All Kinds of Foods</h5>
                </div>
                <p
                  className={`card-text ${montserrat["className"]} ${styles["para"]}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  omnis rerum amet sed dignissimos facilis?
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="border-0">
              <Image
                src={fan}
                alt="Sandwich Photo"
                width={50}
                height={50}
                className="img-fluid mb-3"
              />
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h5 className={inter.className}>All Kinds of Foods</h5>
                </div>
                <p
                  className={`card-text ${montserrat["className"]} ${styles["para"]}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  omnis rerum amet sed dignissimos facilis?
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="border-0">
              <Image
                src={smiley}
                alt="Sandwich Photo"
                width={50}
                height={50}
                className="img-fluid mb-3"
              />
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h5 className={inter.className}>All Kinds of Foods</h5>
                </div>
                <p
                  className={`card-text ${montserrat["className"]} ${styles["para"]}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  omnis rerum amet sed dignissimos facilis?
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="border-0">
              <Image
                src={location}
                alt="Sandwich Photo"
                width={50}
                height={50}
                className="img-fluid mb-3"
              />
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h5 className={inter.className}>All Kinds of Foods</h5>
                </div>
                <p
                  className={`card-text ${montserrat["className"]} ${styles["para"]}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  omnis rerum amet sed dignissimos facilis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strength;
