import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
	{
		id: 1,
		type: "mobile",
		title: "Crypto App",
		img: "/crypto.png",
		desc: "A sleek and intuitive mobile app built with React Native that empowers users to stay up-to-date with the latest cryptocurrency prices and market trends. With a clean and modern user interface, this app provides real-time data visualization through interactive charts and graphs, allowing users to track their favorite digital currencies effortlessly.",
		githubLink: "https://github.com/surya758/crypto-app",
	},
	{
		id: 2,
		type: "mobile",
		title: "Movies App",
		img: "/movies.png",
		desc: "The Movies App is a mobile application designed for movie enthusiasts.  The app's core functionalities include browsing through a wide range of movies and facilitating the booking of tickets, offering a comprehensive and user-friendly platform for movie lovers.",
		githubLink: "https://github.com/surya758/MovieCorn",
	},
	{
		id: 3,
		type: "mobile",
		title: "Coffee Shop App",
		img: "/coffee.png",
		desc: "The Coffee Shop App is a versatile, hybrid mobile application designed to enhance the coffee ordering experience, enabling users to effortlessly browse menus, manage their cart, view order history, and make payments through a user-friendly interface. ",
		githubLink: "https://github.com/surya758/Coffee-Shop-App",
	},
	{
		id: 4,
		type: "website",
		title: "OptiSync",
		img: "",
		desc: "A SaaS Automation platform that streamlines automation between different services like Google Drive, Notion, Slack, Discord etc...",
		githubLink: "https://github.com/surya758/saas-automation-app",
		link: "https://optisync.netlify.app",
	},
];

const Single = ({ item, type }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	return (
		<section>
			<div className='container'>
				<div className='wrapper'>
					<div className='imageContainer' ref={ref}>
						{type === "mobile" ? (
							<img src={item.img} alt='' />
						) : (
							<iframe
								src='https://optisync.netlify.app'
								title='OptiSync'
								width='100%'
								height='100%'
								className='website'
							></iframe>
						)}
					</div>
					<motion.div className='textContainer' style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<p className='linkContainer'>
							{item.githubLink && (
								<button>
									<a href={item.githubLink} target='_blank' rel='noreferrer'>
										View Code
									</a>
								</button>
							)}

							{item.link && (
								<button>
									<a href={item.link} target='_blank' rel='noreferrer'>
										See Demo
									</a>
								</button>
							)}
						</p>
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
		<div className='portfolio' ref={ref}>
			<div className='progress'>
				<h1>Featured Works</h1>
				<motion.div style={{ scaleX }} className='progressBar'></motion.div>
			</div>
			{items.map((item) => (
				<Single item={item} key={item.id} type={item.type} />
			))}
		</div>
	);
};

export default Portfolio;
