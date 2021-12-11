import React from "react";
import { useRouter } from "next/router";
import { Button, Link } from "@mui/material";
import NextLink from "next/link";
import data from "../../utils/data";
import Layout from "../../components/Layout";

import useStyles from "../../utils/styles";
import { color } from "@mui/system";

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  const classes = useStyles();

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Button variant="contained" sx={{ background: "#203040" }}>
            <Link style={{ textDecoration: "none", color: "white" }}>
              Back to products page
            </Link>
          </Button>
        </NextLink>
      </div>
    </Layout>
  );
};

export default ProductScreen;
