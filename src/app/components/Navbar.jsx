import Link from "next/link";
import React from "react";
import { inter, montserrat } from "../fonts.jsx";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "/public/pizza-logo.png";
import tomato from "/public/pizza-header.png";
import { HiOutlineSearch, HiShoppingCart } from "react-icons/hi";

function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top bg-white ${inter["className"]} ${styles["NavBox"]}`}
    >
      <div className="container-fluid">
        <Link className={`navbar-brand`} href="/">
          <Image src={logo} alt="Brand Logo" width={70} height={70} />
        </Link>
        <Image
          src={tomato}
          alt="Picture of a Tomato"
          width={160}
          height={100}
        />
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
              <Link className={`nav-link ${styles["navLink"]}`} href="/">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles["navLink"]}`} href="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles["navLink"]}`} href="/">
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles["navLink"]}`} href="/">
                Contact
              </Link>
            </li>
          </ul>
          <HiOutlineSearch className={`mx-3 ${styles["searchicon"]}`} />
          <Link href="/">
            <button
              className={`ms-3 border-0 bg-white text-primary position-relative`}
            >
              <HiShoppingCart
                className={`border-none me-1 ${styles["carticon"]}`}
              />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
