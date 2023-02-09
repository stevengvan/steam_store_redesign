import React from "react";
import HeroBanner from "@/components/HeroBanner";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <HeroBanner /> */}

      <h3>Special Offers</h3>
      <div className={styles["games-scroll"]}></div>

      <h3>Most Popular</h3>
      <div className={styles["games-scroll"]}></div>

      <h3>Wishlist</h3>
      <div className={styles["games-scroll"]}></div>
    </div>
  );
}
