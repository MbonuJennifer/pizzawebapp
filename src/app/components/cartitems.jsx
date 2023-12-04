import React from "react";
import styles from "./cartitems.module.css";
import { inter, montserrat } from "../fonts.jsx";
import Image from "next/image";
import sandwich from "/public/sandwich.png";

const cartitems = () => {
  return (
    <section className="my-5 py-3">
      <div className="container">
        <div className="row my-5 py-3">
          <div className="col-md-8 col-xs-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Extra</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quality</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <Image
                      src={sandwich}
                      alt="Sandwich Photo"
                      width={70}
                      height={70}
                      className="img-fluid"
                    />
                  </th>
                  <td>Burger Pizza</td>
                  <td>-</td>
                  <td>$40</td>

                  <td>4</td>
                  <td>$100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4 col-xs-12">
            <div class={`${styles["cardarea"]} card p-4`}>
              <div class="card-body">
                <h5 class="card-title">CART TOTAL</h5>
                <ul class="card-subtitle my-4 ms-0 ps-0 ">
                  <li
                    className={`my-1 fw-bold text-white ${styles["totalpackage"]}`}
                  >
                    Subtotal:
                    <span className={`ps-2 ${styles["price"]}`}>
                      $160
                    </span>
                  </li>
                  <li
                    className={`my-1 fw-bold text-white ${styles["totalpackage"]}`}
                  >
                    Discount:
                    <span className={`ps-2 ${styles["price"]}`}>
                      $79.60
                    </span>
                  </li>
                  <li
                    className={`my-1 fw-bold text-white ${styles["totalpackage"]}`}
                  >
                    Total:
                    <span className={`ps-2 ${styles["price"]}`}>
                      $160
                    </span>
                  </li>
                </ul>
                <button
                  className={`${styles["mainBtn"]} ${inter["className"]}`}
                >
                  checkout now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cartitems;
