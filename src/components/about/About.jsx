import React from "react";
import "./about.scss";
import logo from "../../assets/photos/logo.png";
import { motion } from "framer-motion";

import cssLogo from "../../assets/photos/css.png";
import htmlLogo from "../../assets/photos/html.png";
import jsLogo from "../../assets/photos/js.png";

const textVariants = {
  initial: {
    x: 300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const About = () => {
  return (
    <div id="about" className="about">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="logos">
          <img style={{width:"100px", height:"100px"}} src={htmlLogo} alt="" />
          <img style={{width:"88px", height:"88px"}} src={cssLogo} alt="" />
          <img style={{width:"77px", height:"77px", marginLeft:"12px"}} src={jsLogo} alt="" />
        </div>
      </div>
      <motion.div
        className="textContainer"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <h2 style={{ color: "white" }}>Hello I'm Umar</h2>
        <p>
          Dedicated and highly motivated React Native and React JS Developer
          with a strong foundation in front-end development. Eager to contribute
          my skills in building dynamic and responsive web and mobile
          applications while continuous ly expanding my knowledge in a
          collaborative team environment.
        </p>
        <div>
          <h3 style={{ color: "white" }}>Education</h3>
          <p>
            MscIT Master in Information Technology (Specialization in Software
            Engineering)
          </p>
          <p>Certification in React Native Development</p>
        </div>
        <ul>
          <h3 style={{ color: "white" }}>Experience</h3>
          <li>
            Developed a mobile-responsive personal portfolio website in
            React.js, incorporating animation features through the use of the
            Framer Motion library.
          </li>
          <li>Created mobile app UI screens using React Native.</li>
          <li>
            Engineered web applications, including a text utility tool, a to-do
            list app, and a news application, all built with React JS.
          </li>
          <li>
            Implemented secure user access methods, including Google and
            Facebook sign-in, email/password authentication using Firebase, and
            phone OTP verification.
          </li>
          <li>
            Designed user-friendly login/sign-up interfaces, implemented form
            validations, and added engaging animations for an enhanced user
            experience.
          </li>
          <li>
            Integrated APIs, Google Maps, and cart functionality for
            location-based features.
          </li>
          <li>
            Managed data storage with Async Storage and utilized Redux for
            global state management.
          </li>
          <li>
            Elevated the user interface by incorporating linear gradients and
            vector icons into React Native projects.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
