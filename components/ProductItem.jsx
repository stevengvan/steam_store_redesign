import React from "react";
import Link from "next/link";

const ProductItem = () => {
  return (
    <div>
      <Link href={"/product/Dead-Space"}>
        <img
          className="product-image"
          src="/DeadSpace.webp"
          alt="Product image"
        />
      </Link>
      <h3>Dead Space</h3>
      <p>$59.99</p>
    </div>
  );
};

export default ProductItem;
