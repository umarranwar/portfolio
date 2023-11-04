import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import phoneIcon from "../../assets/icons/phone.gif"
import gitHubIcon from "../../assets/icons/github.png"
import linkedinIcon from "../../assets/icons/linkedin.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Umar Dev
        </motion.span>
        <div className="social">
          <a href="https://github.com/umarranwar">
            <img src={gitHubIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/umarr-anwar/">
            <img src={linkedinIcon} alt="" />
          </a>
          <a href="#Contact">
            <img style={{ borderRadius: "50px" }} src={phoneIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
