import Link from "next/link";
import React from "react";
import { inter, montserrat } from "../fonts.jsx";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "/public/pizza-logo.png";
import tomato from "/public/pizza-header.png";

function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top bg-white ${inter["className"]} ${styles["NavBox"]}`}
    >
      <div className="container-fluid">
        <Link className={`navbar-brand`} href="/">
          <Image src={logo} alt="Brand Logo" width={70} height={70} />
        </Link>
        <Image src={tomato} alt="Picture of a Tomato" width={160} height={100}/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${styles["navLink"]}`} href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles["navLink"]}`} href="/menu">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles["navLink"]}`} href="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles["navLink"]}`} href="/menu">
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles["navLink"]}`} href="/menu">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
