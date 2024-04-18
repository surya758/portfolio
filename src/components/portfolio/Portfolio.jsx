import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Crypto App",
    img: "/crypto.png",
    desc: "A sleek and intuitive mobile app built with React Native that empowers users to stay up-to-date with the latest cryptocurrency prices and market trends. With a clean and modern user interface, this app provides real-time data visualization through interactive charts and graphs, allowing users to track their favorite digital currencies effortlessly.",
  },
  {
    id: 2,
    title: "Coffee Shop App",
    img: "/coffee.png",
    desc: "The Coffee Shop App is a versatile, hybrid mobile application designed to enhance the coffee ordering experience, enabling users to effortlessly browse menus, manage their cart, view order history, and make payments through a user-friendly interface. ",
  },
  {
    id: 3,
    title: "Movies App",
    img: "/movies.png",
    desc: "The Movies App is a mobile application designed for movie enthusiasts.  The app's core functionalities include browsing through a wide range of movies and facilitating the booking of tickets, offering a comprehensive and user-friendly platform for movie lovers.",
  },
  {
    id: 4,
    title: "HeadsUp",
    img: "/headsup.png",
    desc: `HeadsUp helps in communication with your neighbours, finding people from your neighbourhood, planning events, helping in emergencies at the last minute, getting updates about what's happening in the neighbourhood and more.`,
    link: "https://apps.apple.com/in/app/headsup-city-connecting-locals/id1629723024"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });


  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {
              item.link && <button>
              <a href={item.link}>
              See Demo
              </a>
              </button>
            }
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
