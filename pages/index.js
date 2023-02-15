import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroBanner from "@/components/HeroBanner";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <HeroBanner />
      </section>

      <section>
        <div className={styles["offers-header"]}>
          <h3>Special Offers</h3>
          <button>
            See All
            <MdKeyboardArrowRight />
          </button>
        </div>
        <div className={styles["games-scroll"]}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Link key={index} href={"/product/Dead-Space"}>
              <img className={styles["product-image"]} src="/DeadSpace.webp" />
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className={styles["offers-header"]}>
          <h3>Most Popular</h3>
          <button>
            See All
            <MdKeyboardArrowRight />
          </button>
        </div>
        <div className={styles["games-scroll"]}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Link key={index} href={"/product/Dead-Space"}>
              <img className={styles["product-image"]} src="/DeadSpace.webp" />
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className={styles["offers-header"]}>
          <h3>Wishlist</h3>
          <button>
            See All
            <MdKeyboardArrowRight />
          </button>
        </div>
        <div className={styles["games-scroll"]}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Link key={index} href={"/product/Dead-Space"}>
              <img className={styles["product-image"]} src="/DeadSpace.webp" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
