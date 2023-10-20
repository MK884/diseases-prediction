import { Box, Button, Container, Drawer, IconButton, List, Typography } from "@mui/material";
import React from "react";
import Svg from "../Components/Svg";
import CloseIcon from "@mui/icons-material/Close";
import Check from "../Components/Check";


const Home = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Hero Section  */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#447ce4",
          height: "30rem",
          borderRadius: "0rem 0rem 12rem 0rem",
        }}
      >
        <Container>
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "3rem",
                paddingTop: "6rem",
                color: "#fff",
              }}
            >
              Say No to Skin Diseases!
            </Typography>
            <Typography fontWeight={500} fontSize={16} color="#fff">
              Check Your Skin and get instant Result
            </Typography>
          </Box>
          <Box marginTop={20}>
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpen(true)}
              sx={{
                backgroundColor: "rgba( 255, 255, 255, 0.15 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 2.5px )",
                borderRadius: "10px",
                borderColor: "1px solid rgba( 255, 255, 255, 0.18 )",
              }}
            >
              Check your Skin Now
            </Button>
          </Box>
        </Container>
      </Box>
      {/* Hero Section End */}
      <Container
        sx={{
          marginTop: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography fontSize={32} fontWeight={700}>
              What Do you Know in 1 minute?
            </Typography>
            <Typography>
              Risks Detection and Assessment more than 12 diseases:
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="warning"
              onClick={() => setOpen(true)}

              sx={{
                borderRadius: "10px",
                marginTop: 7,
              }}
            >
              Check your Skin Now
            </Button>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: "rgba( 59, 197, 206, 0.95 )",
                boxShadow: "0 8px 32px 0 rgba( 59, 197, 206, 0.95 )",
                backdropFilter: "blur(13px)",
                borderRadius: "10px",
                borderColor: "1px solid rgba( 255, 255, 255, 0.18 )",
                height: "auto",
                width: "25rem",
                padding: "1rem 2rem 1rem 3rem",
                color: "#fff",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Typography sx={{ fontWeight: "bold", width: "65%" }}>
                AI Dermatologist is based on Artificial Intelligence
                technologies
              </Typography>
              <Svg />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "40%",
              display: "flex",
            }}
          >
            <img src="https://ai-derm.com/assets/man-318621c4.webp" />
          </Box>
          <Box>
            <Typography fontSize={32} fontWeight={700}>
              AI Dermatologist can save your life
            </Typography>
            <Typography>
              One of the most dangerous diseases that AI Dermatologist can help
              identify is skin cancer.
            </Typography>
            <Typography fontWeight={700}>
              Skin cancer is the most common cancer in the United States and
              worldwide.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: { width: 700, borderRadius: "15px 0px 0px 15px" },
          }}
        >
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{
              marginRight: "auto",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              margin: "3rem 2rem 2rem 2rem",
            }}
          >
            <Check/>
          </Box>
          </Drawer>
    </>
  );
};

export default Home;
