import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ProductItem from "@/components/ProductItem";
import { Carousel } from "react-responsive-carousel";
import { MdKeyboardArrowRight } from "react-icons/md";
import GenreTag from "@/components/GenreTag";

const Wishlist = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <h1 className="page-title">WISHLIST</h1>

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
            <div>
              <ProductItem key={index} />
              <h3>Dead Space</h3>
              <p>$59.99</p>
            </div>
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
            <div>
              <ProductItem key={index} />
              <h3>Dead Space</h3>
              <p>$59.99</p>
            </div>
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
            <div>
              <ProductItem key={index} />
              <h3>Dead Space</h3>
              <p>$59.99</p>
            </div>
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
            <div>
              <ProductItem key={index} />
              <h3>Dead Space</h3>
              <p>$59.99</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Wishlist;
