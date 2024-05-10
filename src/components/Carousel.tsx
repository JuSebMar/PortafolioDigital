import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import img from "../assets/eCommerce.png";
import img2 from "../assets/GiftApp.png";
import img3 from "../assets/BlackJack.png";
import { Link } from "react-router-dom";

export function Carousel() {
  return (
    <Box
      id="carousel"
      sx={{
        alignItems: "center",
        backgroundColor: "black",
        padding: { xs: 2, sm: 10 },
      }}>
      <Swiper
        style={{
          display: "flex",
          textAlign: "center",
          minHeight: "150px",
          color: "white",
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
          <Link to={"https://stately-malabi-a7d545.netlify.app"}>
            <img
              src={img}
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"https://gifexpertaapp.netlify.app"}>
            <img
              src={img2}
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"https://kaleidoscopic-begonia-67c03b.netlify.app"}>
            <img
              src={img3}
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Typography sx={{ fontSize: { xs: "10px", sm: "30px" } }}>
            Estoy trabajando en nuevos proyectos, por favor mire los que ya hay
            ,sea paciente y ademas...
          </Typography>
        </SwiperSlide>
        <SwiperSlide>
          <Typography sx={{ fontSize: { xs: "10px", sm: "30px" } }}>
            Contrateme....
          </Typography>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
