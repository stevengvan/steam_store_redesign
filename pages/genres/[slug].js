import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ProductItem from "@/components/ProductItem";
import { Carousel } from "react-responsive-carousel";
import { MdKeyboardArrowRight } from "react-icons/md";
import GenreTag from "@/components/GenreTag";

const Genres = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [listMenu, setListMenu] = useState("all items");

  return (
    <>
      <h1 className="page-title">
        {String(slug).replace(/_/g, " ").toUpperCase()}
      </h1>

      <Carousel className="carousel-wrapper">
        <div className="carousel-item">
          <img
            className="carousel-image"
            src="/Ghost_of_Tsushima_-_hero_image.original.jpg"
          />
          <div>
            <h1>Ghost of Tsushima</h1>

            <div className="genres-list">
              <GenreTag genre="Role Playing" size="skinny" />
              <GenreTag genre="Action" size="skinny" />
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

        <div className="carousel-item">
          <img className="carousel-image" src="/DeadSpace.webp" />
          <div>
            <h1>Ghost of Tsushima</h1>

            <div className="genres-list">
              <GenreTag genre="Role Playing" size="skinny" />
              <GenreTag genre="Action" size="skinny" />
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

        <div className="carousel-item">
          <img className="carousel-image" src="/Dead_Cells.jpg" />

          <div>
            <h1>Ghost of Tsushima</h1>

            <div className="genres-list">
              <GenreTag genre="Role Playing" size="skinny" />
              <GenreTag genre="Action" size="skinny" />
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

      <section>
        <div className="offers-header">
          <h3>Special Offers</h3>
          <button>
            See All
            <MdKeyboardArrowRight title="See all icon" />
          </button>
        </div>
        <div className="games-grid">
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductItem key={index} />
          ))}
        </div>
      </section>

      <section>
        <div className="offers-header">
          <h3>Most Popular</h3>
          <button>
            See All
            <MdKeyboardArrowRight title="See all icon" />
          </button>
        </div>
        <div className="games-grid">
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductItem key={index} />
          ))}
        </div>
      </section>

      <section>
        <div className="offers-header">
          <h3>New Releases</h3>
          <button>
            See All
            <MdKeyboardArrowRight title="See all icon" />
          </button>
        </div>
        <div className="games-grid">
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductItem key={index} />
          ))}
        </div>
      </section>

      <section>
        <div className="offers-header">
          <h3>Recommended</h3>
          <button>
            See All
            <MdKeyboardArrowRight title="See all icon" />
          </button>
        </div>
        <div className="games-grid">
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductItem key={index} />
          ))}
        </div>
      </section>

      <section className="games-list-con">
        <div className="games-list-menu">
          <button
            className={
              listMenu === "all items" ? "games-list-menu-selected" : ""
            }
            onClick={() => setListMenu("all items")}
          >
            All Items
          </button>
          <button
            className={
              listMenu === "new and trending" ? "games-list-menu-selected" : ""
            }
            onClick={() => setListMenu("new and trending")}
          >
            New & Trending
          </button>
          <button
            className={
              listMenu === "top sellers" ? "games-list-menu-selected" : ""
            }
            onClick={() => setListMenu("top sellers")}
          >
            Top Sellers
          </button>
          <button
            className={
              listMenu === "top rated" ? "games-list-menu-selected" : ""
            }
            onClick={() => setListMenu("top rated")}
          >
            Top Rated
          </button>
          <button
            className={
              listMenu === "discounted" ? "games-list-menu-selected" : ""
            }
            onClick={() => setListMenu("discounted")}
          >
            Discounted
          </button>
          <button
            className={
              listMenu === "popular upcoming" ? "games-list-menu-selected" : ""
            }
            onClick={() => setListMenu("popular upcoming")}
          >
            Popular Upcoming
          </button>
        </div>

        <Link href="/product/ghost-of-tsushima" className="games-list-item">
          <img src="/Dead_Cells.jpg" alt="product image of Dead Cells" />

          <div>
            <h4>Dead Cells</h4>
            <div className="genres-list">
              <GenreTag genre="Adventure" size="skinny" />
              <GenreTag genre="Action" size="skinny" />
            </div>
            <h5>Aug 6, 2018</h5>
            <h5>Overwhelmingly Positive | 36,222 User Reviews</h5>
          </div>
          <span>$24.99</span>
        </Link>

        <Link href="/product/ghost-of-tsushima" className="games-list-item">
          <img src="/Dead_Cells.jpg" alt="product image of Dead Cells" />

          <div>
            <h4>Dead Cells</h4>
            <div className="genres-list">
              <GenreTag genre="Adventure" size="skinny" />
              <GenreTag genre="Action" size="skinny" />
            </div>
            <h5>Aug 6, 2018</h5>
            <h5>Overwhelmingly Positive | 36,222 User Reviews</h5>
          </div>
          <span>$24.99</span>
        </Link>

        <Link href="/product/ghost-of-tsushima" className="games-list-item">
          <img src="/Dead_Cells.jpg" alt="product image of Dead Cells" />

          <div>
            <h4>Dead Cells</h4>
            <div className="genres-list">
              <GenreTag genre="Adventure" size="skinny" />
              <GenreTag genre="Action" size="skinny" />
            </div>
            <h5>Aug 6, 2018</h5>
            <h5>Overwhelmingly Positive | 36,222 User Reviews</h5>
          </div>
          <span>$24.99</span>
        </Link>
      </section>
    </>
  );
};

export default Genres;
