import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";

const Banner = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isXs = useMediaQuery("(max-width:570px)");

  const renderIndicator = (clickHandler, isSelected, index, label) => {
    const customDot = (
      <Box
        component={FiberManualRecord}
        sx={{
          cursor: "pointer",
          color: isSelected ? "warning.main" : "text.primary",
          mx: 1,
          fontSize: "30px",
        }}
        onClick={clickHandler}
        key={index}
      />
    );
    return customDot;
  };
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      transitionTime={1000}
      renderIndicator={renderIndicator}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "70px",
          minHeight: "350px",
          padding: "20px 0",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="start">
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign="start"
            color="#2B3445"
            fontSize={isXs && "40px"}
          >
            50% Off Your <br /> First Shopping
          </Typography>
          <Box width="250px" display="flex" my={2}>
            <Typography variant="p" textAlign="start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              lobortis consequat eu, quam etiam at quis ut convalliss.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="warning"
            size="large"
            sx={{ zIndex: 1 }}
          >
            Shop Now
          </Button>
        </Box>
        <img
          src="https://bazaar.ui-lib.com/assets/images/products/nike-black.png"
          alt="product"
          style={{ width: isXs ? "200px" : "300px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "70px",
          minHeight: "350px",
          padding: "20px 0",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="start">
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign="start"
            color="#2B3445"
            fontSize={isXs && "40px"}
          >
            50% Off Your <br /> First Shopping
          </Typography>
          <Box width="250px" display="flex" my={2}>
            <Typography variant="p" textAlign="start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              lobortis consequat eu, quam etiam at quis ut convalliss.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="warning"
            size="large"
            sx={{ zIndex: 1 }}
          >
            Shop Now
          </Button>
        </Box>
        <img
          src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=1920&q=75"
          alt="product"
          style={{ width: isXs ? "200px" : "300px" }}
        />
      </div>
    </Carousel>
  );
};

export default Banner;
