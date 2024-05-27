import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Project1 from "../assets/project/shoestock.png";
import Project2 from "../assets/project/inbako.png";
import "animate.css";
import "../App.css";
import { useState, useEffect, useRef } from "react";

export const Projects = () => {
	const [isVisible, setIsVisible] = useState(false);
	const projectRef = useRef(null);

	useEffect(() => {
		const threshold = window.innerWidth < 600 ? 0.3 : 0.7;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold }
		);

		if (projectRef.current) {
			observer.observe(projectRef.current);
		}

		return () => {
			if (projectRef.current) {
				observer.unobserve(projectRef.current);
			}
		};
	}, []);

	const projects = [
		{
			title: "MSIB Final Project | Shoestock",
			description:
				"This is a project I worked on with a team to create an inventory management website for shoes. It was built using Express and Next.js.",
			imgUrl: Project1,
		},
		{
			title: "Final Project in Colleges | Inbako",
			description:
				"The project was created with my team as our final assignment in college. It was built using CodeIgniter 3 to facilitate and manage government aid distribution.",
			imgUrl: Project2,
		},
	];

	return (
		<section
			className={`project ${isVisible ? "visible" : ""}`}
			id="projects"
			ref={projectRef}
		>
			<Container>
				<Row>
					<Col size={12}>
						<h2 className="project-title mt-4">Projects</h2>
						<p className="mt-3 project-text">
							This is a project I have worked on with my team. <br></br> Working
							together as a team is very enjoyable.
						</p>
						<div className="projectimg-card">
							<Row className="justify-content-center mb-5 ">
								{projects.map((project, index) => {
									return <ProjectCard key={index} {...project} />;
								})}
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
