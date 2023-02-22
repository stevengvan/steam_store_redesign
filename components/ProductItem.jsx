import React from "react";
import Link from "next/link";

const ProductItem = () => {
  return (
    <Link href={"/product/Dead-Space"}>
      <img className="product-image" src="/DeadSpace.webp" />
    </Link>
  );
};

export default ProductItem;
