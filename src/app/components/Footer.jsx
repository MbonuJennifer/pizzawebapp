import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
import { inter, montserrat } from "../fonts.jsx";

const Footer = () => {
  return (
    <main className={styles.footer}>
      <div className="container-fluid px-0 mb-0">
        <footer className="py-5 ps-4">
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <h5 className={styles.heading}>Information</h5>
              <ul className="nav flex-column">
                <li className="nav-item my-3">
                  <Link href="/" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Home</span>
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="/" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>About us</span>
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="/" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Menu</span>
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="/menu" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Testimonials</span>
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="/menu" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-12">
              <h5 className={styles.heading}>Top Items</h5>
              <ul className="nav flex-column">
                <li className="nav-item my-3">
                  <Link href="/" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Pepperoni</span>
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="/" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Swiss Mushroom</span>
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="/" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Barbeque Chicken</span>
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="/menu" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Vegetarian</span>
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="/menu" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Ham & Chesse</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-12">
              <h5 className={styles.heading}>Others</h5>
              <ul className="nav flex-column">
                <li className="nav-item my-3">
                  <Link href="/" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Checkout</span>
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="/" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Cart</span>
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="/" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Menu</span>
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="/menu" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Location</span>
                  </Link>
                </li>
                <li className="nav-item mb-3">
                  <Link href="/menu" className="nav-link p-0 fw-bold">
                    <span className={styles.items}>Legal</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-12 mb-2">
              <h5 className={styles.heading}>Social Media</h5>
              <ul className="nav flex-column">
                <li className="nav-item my-3">
                  <Link href="/" className="nav-link p-0">
                    Home
                  </Link>
                </li>
                <p className={styles.subscribePara}>
                  Sign up and get exclusive offers and coupon codes
                </p>
                <button className={styles.mainBtn}>Sign up</button>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Footer;
