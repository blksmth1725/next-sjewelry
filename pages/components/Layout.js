import React from "react";
import Head from "next/head";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Sheen Jewelry</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Sheen Jewelry</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
