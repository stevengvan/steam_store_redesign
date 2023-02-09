import React from "react";

const Product = () => {
  return (
    <div className={styles["product-container"]}>
      <Link href="/">
        <img
          className={styles["product-image"]}
          src={"images/DeadSpace.webp"}
        />
      </Link>

      <div className={styles["product-texts"]}>
        <span>Dead Space</span>
        <GenreTag genre="Horror" size="skinny" />
      </div>
    </div>
  );
};

export default Product;
