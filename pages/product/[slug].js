import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GenreTag from "@/components/GenreTag";
import ProductItem from "@/components/ProductItem";
import { FaSteam } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import styles from "@/styles/Product.module.css";
import { BiWindow } from "react-icons/bi";
import { BsApple } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const [screenSize, setScreenSize] = useState("small");
  const [toggleImage, setToggleImage] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [pageMenu, setPageMenu] = useState("desc");
  const [specMenu, setSpecMenu] = useState("windows");

  const handleResize = () => {
    if (window.innerWidth < 1120) {
      setPageMenu("desc");
      setScreenSize("small");
    } else {
      setPageMenu("product");
      setScreenSize("wide");
    }
  };
  useEffect(() => {
    if (window.innerWidth > 1120) {
      setPageMenu("product");
    }
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
        <button alt="Go back to previous page" onClick={() => router.back()}>
          <IoChevronBack title="go back button icon" />
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
          alt="Product hero image"
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
          tabIndex={0}
          alt="product image sample"
          className={styles["list-image"]}
          src="/Ghost_of_Tsushima_1.webp"
        />
        <img
          onClick={() => {
            setToggleImage(true);
            setImageIndex(2);
          }}
          tabIndex={0}
          alt="product image sample"
          className={styles["list-image"]}
          src="/Ghost_of_Tsushima_2.webp"
        />
        <img
          onClick={() => {
            setToggleImage(true);
            setImageIndex(3);
          }}
          tabIndex={0}
          alt="product image sample"
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
        <section>
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
        <section>
          <div className={styles["game-products"]}>
            <div className="editions-section">
              <h2 className={styles["editions-header"]}>Game Editions</h2>
              <div className={styles["editions-list"]}>
                <div className={styles["edition-con"]}>
                  <span className={styles["edition-header"]}>
                    <h5 className={styles["edition-tag"]}>Base Game</h5>
                    <h2>Ghost of Tsushima</h2>
                    <BiWindow title="Microsoft Windows icon" />
                    <BsApple title="Apple Mac icon" />
                    <FaSteam title="Steam icon" />
                  </span>
                  <div className={styles["edition-purchase-con"]}>
                    <div className={styles["edition-price"]}>
                      <span>$59.99</span>
                    </div>
                    <button
                      className={`purchase-btn ${styles["edition-purchase-btn"]}`}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>

                <div className={styles["edition-con"]}>
                  <span className={styles["edition-header"]}>
                    <h5 className={styles["edition-tag"]}>Edition</h5>
                    <h2>Ghost of Tsushima DIRECTOR’S CUT</h2>
                    <BiWindow title="Microsoft Windows icon" />
                    <BsApple title="Apple Mac icon" />
                    <FaSteam title="Steam icon" />
                  </span>
                  <div className={styles["edition-purchase-con"]}>
                    <div className={styles["edition-price"]}>
                      <h2>29%</h2>
                      <span>
                        <p className={styles["edition-price-original"]}>
                          $69.99
                        </p>
                        <p>$49.99</p>
                      </span>
                    </div>
                    <button
                      className={`purchase-btn ${styles["edition-purchase-btn"]}`}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="additional-section">
              <div className={styles["additional-header"]}>
                <h2>Additional Content</h2> <button>Browse All</button>
              </div>
              <ul className={styles["additional-list"]}>
                <li>
                  <button className={styles["additional-item"]}>
                    Bonus Content
                  </button>
                </li>
                <li>
                  <button className={styles["additional-item"]}>
                    Iki Island Expansion
                  </button>
                </li>
                <li>
                  <button className={styles["additional-item"]}>
                    Digital mini art book
                  </button>
                </li>
              </ul>
              <div className={styles["additional-purchase-con"]}>
                <div className={styles["additional-purchase-price"]}>$9.99</div>
                <button
                  className={`purchase-btn ${styles["additional-purchase-btn"]}`}
                >
                  Add all to cart
                </button>
              </div>
            </div>
          </div>

          <div className="recommended-games">
            <h1>Games like this</h1>
            <div className={styles["recommended-list"]}>
              {Array.from({ length: 5 }).map((_, index) => (
                <ProductItem key={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {pageMenu === "spec" && (
        <section className={styles["product-spec"]}>
          <ul className={styles["system-menu"]}>
            <li>
              <button
                className={
                  specMenu === "windows"
                    ? styles["system-menu-selected"]
                    : styles["system-menu-btn"]
                }
                onClick={() => setSpecMenu("windows")}
              >
                Windows
              </button>
            </li>
            <li>
              <button
                className={
                  specMenu === "mac"
                    ? styles["system-menu-selected"]
                    : styles["system-menu-btn"]
                }
                onClick={() => setSpecMenu("mac")}
              >
                macOS
              </button>
            </li>
            <li>
              <button
                className={
                  specMenu === "linux"
                    ? styles["system-menu-selected"]
                    : styles["system-menu-btn"]
                }
                onClick={() => setSpecMenu("linux")}
              >
                SteamOS + Linux
              </button>
            </li>
          </ul>

          <div className={styles["system-desc-con"]}>
            <div className={styles["system-desc-min"]}>
              <p>MINIMUM:</p>
              <p>
                <span>OS:</span> Windows 7 SP1 or later
              </p>
              <p>
                <span>Processor:</span> Intel Dual-Core 2 GHz (or AMD
                equivalent)
              </p>
              <p>
                <span>Memory:</span> 2 GB RAM
              </p>
              <p>
                <span>Graphics:</span> DirectX 10.1, Shader Model 4 GPU with
                1024MB VRAM
              </p>
              <p>
                <span>DirectX:</span> Version 9.0c
              </p>
              <p>
                <span>Storage:</span> 2 GB available space
              </p>
              <p>
                <span>Additional Notes:</span> If you are on or around the min
                spec then you may need to run with Low graphics options and at a
                lower resolution.
              </p>
            </div>

            <div className={styles["system-desc-rec"]}>
              <p>RECOMMENDED:</p>
              <p>
                <span>OS:</span> Windows 10 or later, 64 Bit
              </p>
              <p>
                <span>Processor:</span> Intel Quad Core i5 @ 2.5 GHz (or AMD
                equivalent)
              </p>
              <p>
                <span>Memory:</span> 3 GB RAM
              </p>
              <p>
                <span>Graphics:</span> DirectX 11, Shader Model 5 GPU with
                2048MB VRAM
              </p>
              <p>
                <span>DirectX:</span> Version 11
              </p>
              <p>
                <span>Storage:</span> 2 GB available space
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
