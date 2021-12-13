import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";

import useStyles from "../utils/styles";
import { ThemeProvider } from "@mui/private-theming";

const Layout = ({ title, children, description }) => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.2rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.1rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      type: "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Sheen Jewelry` : "Sheen Jewelry"}
        </title>
        {description && (
          <meta name="decription" content={description}></meta>
        )}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar className={classes.navbar} position="static">
          <Toolbar>
            <NextLink href="/" passHref>
              <Link
                style={{ textDecoration: "none", color: "white" }}
              >
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
      </ThemeProvider>
    </div>
  );
};

export default Layout;
