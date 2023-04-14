import React, { useState } from "react";
import Link from "next/link";
import ProductItem from "@/components/ProductItem";
import { Carousel } from "react-responsive-carousel";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  BsFillPersonFill,
  BsFillPeopleFill,
  BsHeadsetVr,
} from "react-icons/bs";
import { HiDesktopComputer } from "react-icons/hi";
import { VscMultipleWindows } from "react-icons/vsc";
import GenreTag from "@/components/GenreTag";

const CategoryHome = () => {
  const [listMenu, setListMenu] = useState("all items");

  return (
    <>
      <h1 className="page-title">CATEGORIES</h1>

      <div className="submenu-con">
        <Link href="/categories/singleplayer">
          <BsFillPersonFill title="Singleplayer category icon" />
          <h3>Singleplayer</h3>
        </Link>

        <Link href="/categories/multiplayer">
          <BsFillPeopleFill title="Multiplayer category icon" />
          <h3>Multiplayer</h3>
        </Link>

        <Link href="/categories/vr_games">
          <BsHeadsetVr title="VR Games category icon" />
          <h3>VR Games</h3>
        </Link>

        <Link href="/categories/software">
          <HiDesktopComputer title="Software category icon" />
          <h3>Software</h3>
        </Link>

        <Link href="/categories/cross_platform">
          <VscMultipleWindows title="Cross Platform category icon" />
          <h3>Cross Platform</h3>
        </Link>
      </div>

      <Carousel className="carousel-wrapper">
        <div className="carousel-item">
          <img
            className="carousel-image"
            src="/Ghost_of_Tsushima_-_hero_image.original.jpg"
            alt="hero image of Ghost of Tsushima"
          />
          <div>
            <h1>Ghost of Tsushima</h1>

            <div className="genres-list">
              <GenreTag genre="Role Playing" size="skinny" />
              <GenreTag genre="Action" size="skinny" />
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
          <img
            className="carousel-image"
            src="/DeadSpace.webp"
            alt="hero image of Ghost of Tsushima"
          />
          <div>
            <h1>Ghost of Tsushima</h1>

            <div className="genres-list">
              <GenreTag genre="Role Playing" size="skinny" />
              <GenreTag genre="Action" size="skinny" />
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
          <img
            className="carousel-image"
            src="/Dead_Cells.jpg"
            alt="hero image of Ghost of Tsushima"
          />

          <div>
            <h1>Ghost of Tsushima</h1>

            <div className="genres-list">
              <GenreTag genre="Role Playing" size="skinny" />
              <GenreTag genre="Action" size="skinny" />
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
          <h3>Singleplayer</h3>
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
          <h3>Multiplayer</h3>
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
          <h3>VR Games</h3>
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
          <h3>Software</h3>
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
          <h3>Cross Platform</h3>
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

export default CategoryHome;
