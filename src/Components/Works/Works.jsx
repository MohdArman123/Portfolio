import React, { useContext } from "react";
import "./Works.css";
import Tevetro from "../../img/tevetro-img.png";
import Hexnbit from "../../img/hexn-logo.jpeg";
import Imarticus from "../../img/imarticus-logo.png";
import Inzint from "../../img/inzint-img.webp";
import Unicompiler from "../../img/uni_logo.jpeg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            "I have had the privilege of working with a diverse range of brands
            and clients, including
            <br />
            Inzint, Hexnbit EdTech Pvt, Unicompiler, Tevetron Technologies Pvt,
            and Imarticus Learning..
            <br />
            My experience with these esteemed companies has honed my skills in
            <br />
            AI/ML development, full stack solutions, and cloud integration,
            <br />
            enabling me to deliver top-notch services and innovative solutions."
          </span>

          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img src={Tevetro} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Hexnbit} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Inzint} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Unicompiler} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Imarticus} alt="" />
            </div>
          </motion.div>
        </div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
