import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Tictoctoe from "../../img/tictoctoe.png";
import Consolidate from "../../img/IT2.png";
import WebScrape from "../../img/WebScrape.png";
import SocialMedia from "../../img/SocialMedia.png";
import Natours from "../../img/Natours.png";
import Ecommerce from "../../img/ecomm.png";
import LM from "../../img/LM.png"
import ShopAI from "../../img/ShopAI6.png"
import Telecom from "../../img/Telecom.png"
import { themeContext } from "../../Context";
import "swiper/css";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={WebScrape} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Consolidate} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SocialMedia} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tictoctoe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Natours} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LM} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ShopAI} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Telecom} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

