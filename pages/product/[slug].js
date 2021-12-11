import React from "react";
import { useRouter } from "next/router";
import { Link } from "@mui/material";
import NextLink from "next/link";
import data from "../../utils/data";
import Layout from "../../components/Layout";

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <Layout title={product.name}>
      <div>
        <NextLink href="/" passHref>
          <Link>Back to products page</Link>
        </NextLink>
      </div>
    </Layout>
  );
};

export default ProductScreen;
