import React from "react";
import styles from "./Dish.module.css";
import { inter, montserrat } from "../fonts.jsx";

const Dish = () => {
  return (
    <div className="container my-5 py-3">
      <div className="row text-center fw-bold">
        <span className={inter.className}>
          <h5 className={styles.heading}>Popular Dishes</h5>
          <h2 className={styles.bigHeading}> Browse our Menu</h2>
        </span>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
        <div className="col">
          <div className="card">
            {/* AddImage here */}
            <div className="card-body">
              <div className="card-title d-flex justify-content-between align-items-center">
                <h5 className={inter.className}>Burger Pizza</h5>
                <h5 className={styles.price}>
                  <span className={inter.className}>$20</span>
                </h5>
              </div>
              <p className="card-text">Icon</p>
              <p className="card-text">
                <span className={montserrat.className}>
                  This is a burger pizza.
                </span>
              </p>
              <button className={styles.mainBtn}>
                <span className={inter.className}>Order Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            {/* AddImage here */}
            <div className="card-body">
              <div className="card-title d-flex justify-content-between align-items-center">
                <h5 className={inter.className}>Burger Pizza</h5>
                <h5 className={styles.price}>
                  <span className={inter.className}>$20</span>
                </h5>
              </div>
              <p className="card-text">Icon</p>
              <p className="card-text">
                <span className={montserrat.className}>
                  This is a burger pizza.
                </span>
              </p>
              <button className={styles.mainBtn}>
                <span className={inter.className}>Order Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            {/* AddImage here */}
            <div className="card-body">
              <div className="card-title d-flex justify-content-between align-items-center">
                <h5 className={inter.className}>Burger Pizza</h5>
                <h5 className={styles.price}>
                  <span className={inter.className}>$20</span>
                </h5>
              </div>
              <p className="card-text">Icon</p>
              <p className="card-text">
                <span className={montserrat.className}>
                  This is a burger pizza.
                </span>
              </p>
              <button className={styles.mainBtn}>
                <span className={inter.className}>Order Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            {/* AddImage here */}
            <div className="card-body">
              <div className="card-title d-flex justify-content-between align-items-center">
                <h5 className={inter.className}>Burger Pizza</h5>
                <h5 className={styles.price}>
                  <span className={inter.className}>$20</span>
                </h5>
              </div>
              <p className="card-text">Icon</p>
              <p className="card-text">
                <span className={montserrat.className}>
                  This is a burger pizza.
                </span>
              </p>
              <button className={styles.mainBtn}>
                <span className={inter.className}>Order Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            {/* AddImage here */}
            <div className="card-body">
              <div className="card-title d-flex justify-content-between align-items-center">
                <h5 className={inter.className}>Burger Pizza</h5>
                <h5 className={styles.price}>
                  <span className={inter.className}>$20</span>
                </h5>
              </div>
              <p className="card-text">Icon</p>
              <p className="card-text">
                <span className={montserrat.className}>
                  This is a burger pizza.
                </span>
              </p>
              <button className={styles.mainBtn}>
                <span className={inter.className}>Order Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dish;
