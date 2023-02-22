import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";
import ProductItem from "@/components/ProductItem";
import styles from "@/styles/Category.module.css";
import { Carousel } from "react-responsive-carousel";
import GenreTag from "@/components/GenreTag";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <h1 className="page-title">
        {String(slug).replace(/_/g, " ").toUpperCase()}
      </h1>

      <Carousel className={styles["carousel-wrapper"]}>
        <div className={styles["carousel-item"]}>
          <img
            className={styles["carousel-image"]}
            src="/Ghost_of_Tsushima_-_hero_image.original.jpg"
          />
          <div>
            <h1>Ghost of Tsushima</h1>

            <div className={styles["genres-list"]}>
              <GenreTag genre="Role Playing" size="skinny" />
              <GenreTag genre="Actiong" size="skinny" />
              <GenreTag genre="Stealth" size="skinny" />
            </div>

            <h2>$59.99</h2>

            <p>
              Forge a new path and wage an unconventional war for the freedom of
              Tsushima. Challenge opponents with your katana, master the bow to
              eliminate distant threats, develop stealth tactics to ambush
              enemies and explore a new story on Iki Island.
            </p>

            <Link href={`/product/ghost-of-tsushima`}>
              <button className="purchase-btn">
                <span>Add to Cart</span>
              </button>
            </Link>
          </div>
        </div>

        <div className={styles["carousel-item"]}>
          <img className={styles["carousel-image"]} src="/DeadSpace.webp" />
          <div>
            <h1>Ghost of Tsushima</h1>

            <div className={styles["genres-list"]}>
              <GenreTag genre="Role Playing" size="skinny" />
              <GenreTag genre="Actiong" size="skinny" />
              <GenreTag genre="Stealth" size="skinny" />
            </div>

            <h2>$59.99</h2>

            <p>
              Forge a new path and wage an unconventional war for the freedom of
              Tsushima. Challenge opponents with your katana, master the bow to
              eliminate distant threats, develop stealth tactics to ambush
              enemies and explore a new story on Iki Island.
            </p>

            <Link href={`/product/ghost-of-tsushima`}>
              <button className="purchase-btn">
                <span>Add to Cart</span>
              </button>
            </Link>
          </div>
        </div>

        <div className={styles["carousel-item"]}>
          <img className={styles["carousel-image"]} src="/Dead_Cells.jpg" />

          <div>
            <h1>Ghost of Tsushima</h1>

            <div className={styles["genres-list"]}>
              <GenreTag genre="Role Playing" size="skinny" />
              <GenreTag genre="Actiong" size="skinny" />
              <GenreTag genre="Stealth" size="skinny" />
            </div>

            <h2>$59.99</h2>

            <p>
              Forge a new path and wage an unconventional war for the freedom of
              Tsushima. Challenge opponents with your katana, master the bow to
              eliminate distant threats, develop stealth tactics to ambush
              enemies and explore a new story on Iki Island.
            </p>

            <Link href={`/product/ghost-of-tsushima`}>
              <button className="purchase-btn">
                <span>Add to Cart</span>
              </button>
            </Link>
          </div>
        </div>
      </Carousel>

      <div className={styles["products-list"]}>
        {Array.from({ length: 9 }).map((_, index) => (
          <div className={styles["product-container"]}>
            <ProductItem key={index} />
            <h3>Dead Space</h3>
            <p>$59.99</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
