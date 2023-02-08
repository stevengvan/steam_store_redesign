import React from "react";
import styles from "@/styles/Home.module.css";
import { AiOutlineTag } from "react-icons/ai";
import GenreTag from "./GenreTag";

const HeroBanner = () => {
  return (
    <div className={styles["hero-banner-container"]}>
      <img
        className={styles["hero-banner-image"]}
        src="/images/Ghost of Tsushima/Ghost_of_Tsushima_-_hero_image.original.jpg"
      />

      <div className={styles["hero-banner-info-container"]}>
        <div className={styles["banner-texts"]}>
          <h1>Ghost of Tsushima</h1>
          <h4>Sucker Punch Productions</h4>
        </div>

        <div className={styles["banner-genres"]}>
          <GenreTag genre="Roleplaying" />
          <GenreTag genre="Action" />
          <GenreTag genre="Stealth" />
        </div>

        <button className={styles["purchase-btn"]}>
          <span>$69.99</span>
          <span>Purchase</span>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
