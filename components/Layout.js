import React from "react";
import Head from "next/head";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

import useStyles from "../utils/styles";

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Sheen Jewelry</title>
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography>Sheen Jewelry</Typography>
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
