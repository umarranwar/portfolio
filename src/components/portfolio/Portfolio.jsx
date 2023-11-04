import React, { useRef } from "react";
import "./portfolio.scss";

import portfolioImg from "../../assets/photos/portfolio.webp";
import shoppingImg from "../../assets/photos/shopping-app.jpg";
import ecommerceImg from "../../assets/photos/ecommerce.jpg";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: "1",
    title: "React Portfolio Website",
    img: portfolioImg,
    desc: "A captivating React portfolio site demonstrating your expertise in React and responsive design.",
  },
  {
    id: "2",
    title: "Mobile App Shopping UI",
    img: shoppingImg,
    desc: "User-friendly shopping app interface with seamless e-commerce integration.",
  },
  {
    id: "3",
    title: "React Native App Development",
    img: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Cross-platform mobile app development for Android and iOS with a native feel.",
  },
  {
    id: "4",
    title: "E-commerce Website Development",
    img: ecommerceImg,
    desc: "Robust e-commerce platforms for an enhanced online shopping experience.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
