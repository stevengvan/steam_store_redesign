import React from "react";
import styles from "@/styles/Wishlist.module.css";

const WishlistSort = ({ setDropdown, setSort }) => {
  return (
    <div className={styles["sort-dropdown-menu"]}>
      <button
        onClick={() => {
          setSort("YOUR RANK");
          setDropdown("");
        }}
      >
        YOUR RANK
      </button>
      <button
        onClick={() => {
          setSort("NAME");
          setDropdown("");
        }}
      >
        NAME
      </button>
      <button
        onClick={() => {
          setSort("PRICE");
          setDropdown("");
        }}
      >
        PRICE
      </button>
      <button
        onClick={() => {
          setSort("DISCOUNT");
          setDropdown("");
        }}
      >
        DISCOUNT
      </button>
      <button
        onClick={() => {
          setSort("DATE ADDED");
          setDropdown("");
        }}
      >
        DATE ADDED
      </button>
      <button
        onClick={() => {
          setSort("TOP SELLING");
          setDropdown("");
        }}
      >
        TOP SELLING
      </button>
      <button
        onClick={() => {
          setSort("RELEASED DATE");
          setDropdown("");
        }}
      >
        RELEASE DATE
      </button>
      <button
        onClick={() => {
          setSort("REVIEW SCORE");
          setDropdown("");
        }}
      >
        REVIEW SCORE
      </button>
    </div>
  );
};

export default WishlistSort;
