import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GenreTag from "@/components/GenreTag";
import { BsPeople } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import styles from "@/styles/Product.module.css";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";

export default function Product() {
  const { menu } = useStateContext();
  const [toggleImage, setToggleImage] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [pageMenu, setPageMenu] = useState("desc");
  const [screenSize, setScreenSize] = useState("small");

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 1120) {
      setPageMenu("desc");
      setScreenSize("small");
    } else {
      setPageMenu("product");
      setScreenSize("wide");
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [screenSize]);

  return (
    <>
      {toggleImage && (
        <div className={styles["images-modal"]}>
          <IoClose
            onClick={() => {
              setToggleImage(false);
              setImageIndex(0);
            }}
          />
          <Carousel className={styles.carousel} selectedItem={imageIndex - 1}>
            <div>
              <img
                className={styles["carousel-image"]}
                src="/Ghost_of_Tsushima_1.webp"
              />
            </div>
            <div>
              <img
                className={styles["carousel-image"]}
                src="/Ghost_of_Tsushima_2.webp"
              />
            </div>
            <div>
              <img
                className={styles["carousel-image"]}
                src="/Ghost_of_Tsushima_3.webp"
              />
            </div>
          </Carousel>
        </div>
      )}

      <section className={styles["product-header"]}>
        <button>
          <Link href={menu}>
            <IoChevronBack />
          </Link>
        </button>
        <span>
          <button>Add to your wishlist</button>
          <button>Follow</button>
          <button>Ignore</button>
        </span>
      </section>

      <h1 className={styles["product-name"]}>Ghost of Tsushima</h1>

      <section className={styles["product-hero"]}>
        <img
          className={styles["product-hero-image"]}
          src="/Ghost_of_Tsushima_-_hero_image.original.jpg"
        />

        <div className={styles["product-hero-info"]}>
          <p className={styles["product-description-text"]}>
            Forge a new path and wage an unconventional war for the freedom of
            Tsushima. Challenge opponents with your katana, master the bow to
            eliminate distant threats, develop stealth tactics to ambush enemies
            and explore a new story on Iki Island.
          </p>

          <div className={styles["product-other-info"]}>
            <p>
              <b>Developer:</b> Sucker Punch Productions
            </p>
            <p>
              <b>Publisher:</b> Sony Interactive Entertainment
            </p>
            <p>
              <b>Rlease Date:</b> July 17, 2020
            </p>
          </div>
          <div className={styles["genres-list"]}>
            <GenreTag genre="Roleplaying" size="skinny" />
            <GenreTag genre="Action" size="skinny" />
            <GenreTag genre="Stealth" size="skinny" />
          </div>

          <button className={`purchase-btn ${styles["purchase-btn"]}`}>
            <span>$69.99</span>
            <span>Add to cart</span>
          </button>
        </div>
      </section>

      <section className={styles["images-list"]}>
        <img
          onClick={() => {
            setToggleImage(true);
            setImageIndex(1);
          }}
          className={styles["list-image"]}
          src="/Ghost_of_Tsushima_1.webp"
        />
        <img
          onClick={() => {
            setToggleImage(true);
            setImageIndex(2);
          }}
          className={styles["list-image"]}
          src="/Ghost_of_Tsushima_2.webp"
        />
        <img
          onClick={() => {
            setToggleImage(true);
            setImageIndex(3);
          }}
          className={styles["list-image"]}
          src="/Ghost_of_Tsushima_3.webp"
        />
      </section>

      <section className={styles["page-menu"]}>
        <button
          onClick={() => setPageMenu("desc")}
          className={
            pageMenu === "desc"
              ? `${styles["menu-selected"]} ${styles["page-menu-desc"]}`
              : styles["page-menu-desc"]
          }
        >
          Description
        </button>
        <button
          onClick={() => setPageMenu("product")}
          className={pageMenu === "product" ? styles["menu-selected"] : ""}
        >
          Products
        </button>
        <button
          onClick={() => setPageMenu("spec")}
          className={pageMenu === "spec" ? styles["menu-selected"] : ""}
        >
          Specifications
        </button>
      </section>

      {pageMenu === "desc" && (
        <section className={styles["product-desc"]}>
          <p className={styles["product-description-text"]}>
            Forge a new path and wage an unconventional war for the freedom of
            Tsushima. Challenge opponents with your katana, master the bow to
            eliminate distant threats, develop stealth tactics to ambush enemies
            and explore a new story on Iki Island.
          </p>

          <div className={styles["product-other-info"]}>
            <p>
              <b>Developer:</b> Sucker Punch Productions
            </p>
            <p>
              <b>Publisher:</b> Sony Interactive Entertainment
            </p>
            <p>
              <b>Rlease Date:</b> July 17, 2020
            </p>
          </div>

          <div className={styles["genres-list"]}>
            <GenreTag genre="Roleplaying" size="skinny" />
            <GenreTag genre="Action" size="skinny" />
            <GenreTag genre="Stealth" size="skinny" />
          </div>

          <button className={`purchase-btn ${styles["purchase-btn"]}`}>
            <span>$69.99</span>
            <span>Add to cart</span>
          </button>
        </section>
      )}

      {pageMenu === "product" && (
        <section className={styles["products-list"]}>
          <div>
            <h3>Standard Edition</h3>
            <h3></h3>
          </div>
        </section>
      )}
    </>
  );
}
