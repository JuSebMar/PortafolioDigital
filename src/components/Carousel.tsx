import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import img from "../assets/Ecommerce.svg";

export function Carousel() {
  return (
    <Box
      id="carousel"
      sx={{
        display: "flex",
        maxWidth: "100%",
        minHeight: "500px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}>
      <Swiper
        style={{
          display: "flex",
          textAlign: "center",
          background: "greenyellow",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          width: "50%",
          minHeight: "400px",
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        <SwiperSlide>
          <img src={img} style={{ width: "100px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <Typography>
            Estoy trabajando en nuevos proyectos, por favor mire los que ya hay
            ,sea paciente y ademas...
          </Typography>
        </SwiperSlide>
        <SwiperSlide>
          <Typography>Contrateme....</Typography>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
