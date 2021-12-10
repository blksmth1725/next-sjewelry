import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return <h1>{product.name}</h1>;
};

export default ProductScreen;
