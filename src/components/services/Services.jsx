import React, { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import peopleImg from "../../assets/photos/people.png";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const isWideScreen = window.matchMedia("(min-width: 1024px)").matches;
  return (
    <div style={{ height: "100%", width: "100%" }}>
      {isWideScreen ? <WideScreenComponent /> : <SmallScreenComponent />}
    </div>
  );
};
export default Services;

const WideScreenComponent = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={peopleImg} alt="peopleImg" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          variants={variants}
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Portfolio Website</h2>
          <p>
            I provide professional services, crafting stunning, animated
            personal portfolio websites that effectively showcase individuals'
            work and experience.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          variants={variants}
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mobile App</h2>
          <p>
            In my portfolio services, I specialize in custom mobile app
            development, ensuring tailored solutions that enhance user
            experiences on both Android and iOS platforms.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          variants={variants}
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>E-commerce Website</h2>
          <p>
            I specialize in crafting user-centric E-commerce websites that offer
            seamless shopping experiences, secure transactions, and engaging
            design.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          variants={variants}
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Shopping App</h2>
          <p>
            I specialize in crafting shopping apps that prioritize intuitive
            user experiences, elegant design, and seamless navigation, enhancing
            the retail experience for customers.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SmallScreenComponent = () => {
  return (
    <div className="services">
      <div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </div>
      <div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b whileHover={{ color: "orange" }}>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b whileHover={{ color: "orange" }}>For Your</b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </div>
      <div className="listContainer" variants={variants}>
        <div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>
          <button>Go</button>
        </div>
        <div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>
          <button>Go</button>
        </div>
        <div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>
          <button>Go</button>
        </div>
        <div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>
          <button>Go</button>
        </div>
      </div>
    </div>
  );
};
