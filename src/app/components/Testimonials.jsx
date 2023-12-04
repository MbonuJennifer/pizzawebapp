import React from "react";
import styles from "./Testimonial.module.css";
import { inter, montserrat } from "../fonts.jsx";
import Image from "next/image";
import leaf from "/public/left.png";
import stestimonial from "/public/greenClient.jpg";
import ftestimonial from "/public/redClient.jpg";
import ttestimonial from "/public/purpleClient.jpg";

const Testimonials = () => {
  return (
    <section className="my-5 py-3">
      <div className="container">
        <div className={`${inter["className"]} row fw-bold`}>
          <div>
            <Image
              src={leaf}
              alt="Leaf Photo"
              width={100}
              height={70}
              className="img-fluid"
            />
          </div>
          <h5 className={styles.heading}>Customer Feedback</h5>
          <h2 className={styles.bigHeading}>Client Testimonials</h2>
        </div>
        <div class="row row-cols-1 row-cols-md-4 my-2 g-4">
          <div class="col">
            <div class="card text-center">
              <Image
                src={ftestimonial}
                alt="Leaf Photo"
                width={100}
                height={100}
                className={`img-fluid mx-auto d-block mt-3 ${styles["clientImg"]}`}
              />
              <div class="card-body">
                <h5 class="card-title">Takar Bowa</h5>
                <p
                  class={`card-text ${styles["para"]} ${montserrat["className"]}`}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi culpa delectus, iure harum perspiciatis repellat
                  doloribus? Doloremque saepe similique id adipisci commodi quos
                  numquam possimus?
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card text-center">
              <Image
                src={stestimonial}
                alt="Leaf Photo"
                width={100}
                height={100}
                className={`img-fluid mx-auto d-block mt-3 ${styles["clientImg"]}`}
              />
              <div class="card-body">
                <h5 class="card-title">Takar Bowa</h5>
                <p
                  class={`card-text ${styles["para"]} ${montserrat["className"]}`}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi culpa delectus, iure harum perspiciatis repellat
                  doloribus? Doloremque saepe similique id adipisci commodi quos
                  numquam possimus?
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card text-center">
              <Image
                src={ftestimonial}
                alt="Leaf Photo"
                width={100}
                height={100}
                className={`img-fluid mx-auto d-block mt-3 ${styles["clientImg"]}`}
              />
              <div class="card-body">
                <h5 class="card-title">Takar Bowa</h5>
                <p
                  class={`card-text ${styles["para"]} ${montserrat["className"]}`}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi culpa delectus, iure harum perspiciatis repellat
                  doloribus? Doloremque saepe similique id adipisci commodi quos
                  numquam possimus?
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card text-center">
              <Image
                src={ttestimonial}
                alt="Leaf Photo"
                width={100}
                height={100}
                className={`img-fluid mx-auto d-block mt-3 ${styles["clientImg"]}`}
              />
              <div class="card-body">
                <h5 class="card-title">Takar Bowa</h5>
                <p
                  class={`card-text ${styles["para"]} ${montserrat["className"]}`}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi culpa delectus, iure harum perspiciatis repellat
                  doloribus? Doloremque saepe similique id adipisci commodi quos
                  numquam possimus?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
