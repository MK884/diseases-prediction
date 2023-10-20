import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        width="100%"
        sx={{
          bgcolor: "#95BDFF",
        }}
      >
        <Container>
          <Toolbar>
            <Typography fontWeight={800} fontSize={32}>Self Skin Care</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
