import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroBanner from "@/components/HeroBanner";
import ProductItem from "@/components/ProductItem";

export default function Home() {
  return (
    <>
      <section>
        <HeroBanner />
      </section>

      <section>
        <div className="offers-header">
          <h3>Special Offers</h3>
          <button>
            See All
            <MdKeyboardArrowRight />
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
            <MdKeyboardArrowRight />
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
          <h3>Wishlist</h3>
          <button>
            See All
            <MdKeyboardArrowRight />
          </button>
        </div>
        <div className="games-grid">
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductItem key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
