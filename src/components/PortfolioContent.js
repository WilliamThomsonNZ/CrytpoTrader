import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioGain from "./microComponents/PortfolioGain";
import ProfileWorth from "./microComponents/ProfileWorth";
import PortfolioChart from "./microComponents/PortfolioChart";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "../app.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const PortfolioContent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <ProfileWorth />
        <PortfolioChart />
      </SwiperSlide>
      <SwiperSlide>
        <PortfolioGain />
      </SwiperSlide>
    </Swiper>
  );
};

export default PortfolioContent;
