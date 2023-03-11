import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";

import { Box } from "@mui/material";
import CarouselCard from "../../components/card/CarouselCard";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const FlashCarousel = () => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const sliderRef = useRef();

  const handleSlideChange = (params) => {
    setIsFirstSlide(params.isBeginning);
    setIsLastSlide(params.isEnd);
  };

  const handleNext = () => {
    sliderRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    sliderRef.current.swiper.slidePrev();
  };
  return (
    <Box
      width="90%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      my={3}
    >
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Pagination, Navigation]}
        slidesPerView="1"
        spaceBetween={30}
        onSlideChange={(params) => handleSlideChange(params)}
        ref={sliderRef}
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
      </Swiper>
      <Box
        position="absolute"
        left="0%"
        top="50%"
        width="40px"
        height="40px"
        borderRadius="50%"
        bgcolor="#0F3460"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="#fff"
        zIndex="1"
        sx={{
          transform: "translate(-50%, -50%)",
          cursor: isFirstSlide ? "not-allowed" : "pointer",
        }}
        onClick={handlePrev}
      >
        <ArrowBack />
      </Box>
      <Box
        position="absolute"
        right="-2.5%"
        top="50%"
        width="40px"
        height="40px"
        borderRadius="50%"
        bgcolor="#0F3460"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="#fff"
        zIndex="1"
        sx={{
          transform: "translate(-50%, -50%)",
          cursor: isLastSlide ? "not-allowed" : "pointer",
        }}
        onClick={handleNext}
      >
        <ArrowForward />
      </Box>
    </Box>
  );
};

export default FlashCarousel;
