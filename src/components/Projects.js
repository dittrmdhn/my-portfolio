import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Project1 from "../assets/project/shoestock.png";
import Project2 from "../assets/project/inbako.png";
import Project3 from "../assets/project/listrik.png";
import "animate.css";
import "../App.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export const Projects = () => {
	const [hasScrolled, setHasScrolled] = useState(false);
	const { ref: projectRef, inView: projectView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		onChange: (inView) => {
			if (inView && hasScrolled) {
				setHasScrolled(true);
			}
		},
	});

	const { ref: projectImageRef, inView: projectImageInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		onChange: (inView) => {
			if (inView && hasScrolled) {
				setHasScrolled(true);
			}
		},
	});

	const projects = [
		{
			title: "MSIB Final Project | Shoestock",
			description:
				"This is a project I worked on with a team to create an inventory management website for shoes. It was built using Express and Next.js.",
			imgUrl: Project1,
			isImageLeft: true,
			detailUrl: "/project/shoestock",
		},
		{
			title: "Final Project in Colleges | Inbako",
			description:
				"The project was created with my team as our final assignment in college. It was built using CodeIgniter 3 to facilitate and manage government aid distribution.",
			imgUrl: Project2,
			isImageLeft: false,
			detailUrl: "/project/inbako",
		},
		{
			title: "Sertificate Project in Colleges | My Listrik",
			description:
				"This is my project during my certification at college. I created an electricity payment website called My Listrik, built using Express and React.",
			imgUrl: Project3,
			isImageLeft: true,
			detailUrl: "/project/mylistrik",
		},
	];

	return (
		<section
			ref={projectRef}
			className={`project mt-40 transition-transform duration-500 ${
				hasScrolled || projectView
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-20"
			}`}
			id="projects"
		>
			<Container>
				<h2 className="project-title mt-4 text-center">Projects</h2>
				<p className="mt-3 project-text text-center">
					This is a project I have worked on with my team. <br /> Working
					together as a team is very enjoyable.
				</p>
				<div
					ref={projectImageRef}
					className={`project-card align-items-center mb-5 mt-5 transition-transform duration-500 ${
						hasScrolled || projectImageInView
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-20"
					}`}
				>
					{projects.map((project, index) => {
						return (
							<Row key={index} className="my-20">
								{project.isImageLeft ? (
									<>
										<Col md={6}>
											<Link to={project.detailUrl} className="block">
												<img
													src={project.imgUrl}
													alt={project.title}
													className="img-fluid max-h-72  object-cover object-top w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
												/>
											</Link>
										</Col>
										<Col
											md={6}
											className="justify-start text-center text-md-start my-auto"
										>
											<Link
												to={project.detailUrl}
												className="block text-decoration-none"
											>
												<h3 className="mt-3 fw-bold text-white">
													{project.title}
												</h3>
											</Link>
											<p className="text-center text-md-start">
												{project.description}
											</p>
										</Col>
									</>
								) : (
									<>
										<Col md={6} className="order-md-2 text-right">
											<Link to={project.detailUrl} className="block">
												<img
													src={project.imgUrl}
													alt={project.title}
													className="img-fluid max-h-72  object-cover object-top w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
												/>
											</Link>
										</Col>
										<Col
											md={6}
											className="order-md-1 text-center text-md-end justify-end my-auto"
										>
											<Link
												to={project.detailUrl}
												className="block text-decoration-none"
											>
												<h3 className="mt-3 fw-bold text-white">
													{project.title}
												</h3>
											</Link>
											<p className="text-center text-md-end">
												{project.description}
											</p>
										</Col>
									</>
								)}
							</Row>
						);
					})}
				</div>
			</Container>
		</section>
	);
};
