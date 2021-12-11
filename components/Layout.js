import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";

import useStyles from "../utils/styles";

const Layout = ({ title, children }) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Sheen Jewelry` : "Sheen Jewelry"}
        </title>
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link style={{ textDecoration: "none", color: "white" }}>
              <Typography className={classes.brand}>
                Sheen Jewelry
              </Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link
                style={{ textDecoration: "none", color: "white" }}
              >
                Cart
              </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All Rights Reserved. Sheen Jewelry</Typography>
      </footer>
    </div>
  );
};

export default Layout;
