import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Arman_ML.pdf";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          "I provide cutting-edge AI and ML solutions, full stack development,
          <br />
          and expert project management. From crafting advanced models to
          <br />
          building scalable web solutions and ensuring smooth deployments,
          <br />I deliver excellence at every stage."
        </span>

        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"AI/ML Expertise"}
            detail={
              "AI/ML models; skilled in GANs, NLP, Langchain, LLama-Index, RAG etc."
            }
          />
        </motion.div>
        <motion.div style={{ top: "-11rem", left: "12rem" }}>
          <Card
            emoji={Glasses}
            heading={"Full Stack Development"}
            detail={
              "HTML, CSS, JavaScript, React. Backend: Python, SQL, MongoDB, RESTful API."
            }
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Cloud & Tools"}
            detail={
              "Docker, Flask, Streamlit, Git, AWS (EC2, S3, Lambda, SageMaker, DynamoDB, IAM)."
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
