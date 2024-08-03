import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Project1 from "../assets/project/shoestock.png";
import Project2 from "../assets/project/inbako.png";
import "animate.css";
import "../App.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
	const [hasScrolled, setHasScrolled] = useState(false);
	const { ref: projectRef, inView: projectView } = useInView({
		triggerOnce: false,
		threshold: 0.1,
		onChange: (inView) => {
			if (inView && hasScrolled) {
				setHasScrolled(true);
			}
		},
	});

	const { ref: projectImageRef, inView: projectImageInView } = useInView({
		triggerOnce: false,
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
			ref={projectRef}
			className={`project mt-12 transition-transform duration-500 ${
				hasScrolled || projectView
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-20"
			}`}
			id="projects"
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
							<Row
								ref={projectImageRef}
								className={`justify-content-center mb-5 mt-12 transition-transform duration-500 ${
									hasScrolled || projectImageInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-20"
								}`}
							>
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
