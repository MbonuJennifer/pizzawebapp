import React from "react";
import styles from "./Strength.module.css";
import { inter, montserrat } from "../fonts.jsx";

const Strength = () => {
  return (
    <section className={styles.mainBox}>
      <div className="container-fluid px-0">
        <div className="row text-center fw-bold">
          <span className={inter.className}>
            <h5 className={styles.heading}>Our Strength</h5>
            <h2 className={styles.bigHeading}>Why We Are The Best?</h2>
          </span>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-0 my-4">
          <div className="col">
            <div className="border-0">
              {/* AddImage here */}
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h5 className={inter.className}>All Kinds of Foods</h5>
                </div>
                <p className="card-text">
                  <span className={montserrat.className}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis omnis rerum amet sed dignissimos facilis?
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="border-0">
              {/* AddImage here */}
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h5 className={inter.className}>All Kinds of Foods</h5>
                </div>
                <p className="card-text">
                  <span className={montserrat.className}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis omnis rerum amet sed dignissimos facilis?
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="border-0">
              {/* AddImage here */}
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h5 className={inter.className}>All Kinds of Foods</h5>
                </div>
                <p className="card-text">
                  <span className={montserrat.className}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis omnis rerum amet sed dignissimos facilis?
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="border-0">
              {/* AddImage here */}
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h5 className={inter.className}>All Kinds of Foods</h5>
                </div>
                <p className="card-text">
                  <span className={montserrat.className}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis omnis rerum amet sed dignissimos facilis?
                  </span>
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
