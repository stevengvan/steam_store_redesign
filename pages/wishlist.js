import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import GenreTag from "@/components/GenreTag";
import styles from "@/styles/Wishlist.module.css";
import WishlistOptions from "@/components/WishlistOptions";
import WishlistSort from "@/components/WishlistSort";

const Wishlist = () => {
  const [dropdown, setDropdown] = useState("");
  const [sort, setSort] = useState("YOUR RANK");

  return (
    <>
      <h1 className="page-title">WISHLIST</h1>

      <div className={styles["header-con"]}>
        <div className={styles["wishlist-header"]}>
          <input type={"text"} />

          <span>
            <button
              className={
                dropdown === "options" ? styles["dropdown-selected"] : ""
              }
              onClick={() => {
                if (dropdown === "options") {
                  setDropdown("");
                } else {
                  setDropdown("options");
                }
              }}
            >
              <h3>OPTIONS</h3>
              <MdKeyboardArrowDown />
            </button>

            <div className={styles["sort-dropdown-con"]}>
              <button
                className={
                  dropdown === "sort" ? styles["dropdown-selected"] : ""
                }
                onClick={() => {
                  if (dropdown === "sort") {
                    setDropdown("");
                  } else {
                    setDropdown("sort");
                  }
                }}
              >
                <p>SORT BY: </p> <h3>{sort}</h3>
                <MdKeyboardArrowDown />
              </button>
              {dropdown === "sort" && (
                <WishlistSort setDropdown={setDropdown} setSort={setSort} />
              )}
            </div>
          </span>
        </div>

        {dropdown === "options" && <WishlistOptions />}
      </div>

      {Array.from({ length: 20 }).map((_, index) => (
        <Link
          key={index}
          href="/product/ghost-of-tsushima"
          className="games-list-item"
        >
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
      ))}
    </>
  );
};

export default Wishlist;
