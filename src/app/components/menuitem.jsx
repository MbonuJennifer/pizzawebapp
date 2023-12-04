import React from "react";
import styles from "./menuitem.module.css";
import { inter, montserrat } from "../fonts.jsx";
import { BsFilter } from "react-icons/bs";
import { HiStar, HiShoppingCart } from "react-icons/hi";
import Image from "next/image";
import sandwich from "/public/sandwich.png";
import npizza from "/public/newpizza.png";
import gpizza from "/public/smallheroimage.png";

const menuitem = () => {
  return (
    <section className={`${styles["displaybox"]}`}>
      <div className="container">
        <div className={`${inter["className"]} row fw-bold mt-5`}>
          <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
            <button className={`${inter["className"]} ${styles["mainBtn"]}`}>
              <BsFilter className={`${styles["carticon"]}`} />
              Filter
            </button>
            <div className="d-flex justify-content-center align-items-center">
              <div className="fw-bold">
                <h6>Showing all 4 results</h6>
              </div>
              <div className="ms-5">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Default Sorting</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
          <div className="col">
            <div className="card">
              <Image
                src={sandwich}
                alt="Sandwich Photo"
                width={250}
                height={300}
                className="img-fluid mx-auto d-block"
              />
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h5 className={`${inter["className"]}`}>Burger Pizza</h5>
                  <h5 className={`${styles["price"]} ${inter["className"]}`}>
                    $20
                  </h5>
                </div>
                <div className="card-text">
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                </div>
                <p className={`card-text ${montserrat["className"]}`}>
                  This is a burger pizza.
                </p>
                <button
                  className={`${inter["className"]} ${styles["mainBtn"]}`}
                >
                  <HiShoppingCart className={styles.cartIcon} />
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src={sandwich}
                alt="Sandwich Photo"
                width={250}
                height={300}
                className="img-fluid mx-auto d-block"
              />
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h5 className={`${inter["className"]}`}>Burger Pizza</h5>
                  <h5 className={`${styles["price"]} ${inter["className"]}`}>
                    $20
                  </h5>
                </div>
                <div className="card-text">
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                </div>
                <p className={`card-text ${montserrat["className"]}`}>
                  This is a burger pizza.
                </p>
                <button
                  className={`${inter["className"]} ${styles["mainBtn"]}`}
                >
                  <HiShoppingCart className={styles.cartIcon} />
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src={npizza}
                alt="New Pizza Photo"
                width={250}
                height={200}
                className="img-fluid mx-auto d-block"
              />
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h5 className={`${inter["className"]}`}>New Pizza</h5>
                  <h5 className={`${styles["price"]} ${inter["className"]}`}>
                    $10
                  </h5>
                </div>
                <div className="card-text">
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                </div>
                <p className={`card-text ${montserrat["className"]}`}>
                  This is a new pizza.
                </p>
                <button
                  className={`${inter["className"]} ${styles["mainBtn"]}`}
                >
                  <HiShoppingCart className={styles.cartIcon} />
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src={gpizza}
                alt="Greek Pizza Photo"
                width={250}
                height={300}
                className="img-fluid mx-auto d-block"
              />
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h5 className={`${inter["className"]}`}>Greek Pizza</h5>
                  <h5 className={`${styles["price"]} ${inter["className"]}`}>
                    $40
                  </h5>
                </div>
                <div className="card-text">
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                  <HiStar className={styles.icons} />
                </div>
                <p className={`card-text ${montserrat["className"]}`}>
                  This is a greek pizza.
                </p>
                <button
                  className={`${inter["className"]} ${styles["mainBtn"]}`}
                >
                  <HiShoppingCart className={styles.cartIcon} />
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default menuitem;
