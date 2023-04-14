import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import GenreTag from "./GenreTag";

const HeroBanner = () => {
  return (
    <div className={styles["hero-banner-container"]}>
      <Link href={"/product/ghost-of-tsushima"}>
        <img
          className={styles["hero-banner-image"]}
          alt="Hero banner image"
          src="/Ghost_of_Tsushima_-_hero_image.original.jpg"
        />
      </Link>

      <div className={styles["hero-banner-info-container"]}>
        <div className={styles["banner-texts"]}>
          <h1>Ghost of Tsushima</h1>
          <h4>Sucker Punch Productions</h4>
        </div>

        <div className={styles["banner-genres"]}>
          <GenreTag genre="Role Playing" size="normal" />
          <GenreTag genre="Action" size="normal" />
          <GenreTag genre="Stealth" size="normal" />
        </div>

        <Link href={`/product/ghost-of-tsushima`}>
          <button className="purchase-btn">
            <span>$69.99</span>
            <span>Purchase</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
