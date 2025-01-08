import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import "../App.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export const Experience = () => {
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
			title: "Full Stack Developer",
			description: "PT Ciptadra Softindo",
			duration: "3 Months",
		},
	];

	return (
		<section
			ref={projectRef}
			className={`project mt-30 transition-transform duration-500 ${
				hasScrolled || projectView
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-20"
			}`}
			id="projects"
		>
			<Container>
				<h2 className="project-title mt-4 mb-10 text-center text-2xl font-bold">
					Experience
				</h2>

				{projects.map((project, index) => (
					<Row
						key={index}
						ref={projectImageRef}
						className={`project-card align-items-center mb-10 transition-transform duration-500 ${
							hasScrolled || projectImageInView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-20"
						}`}
					>
						<Col md={12} className="mb-4">
							<div className="education-item text-center mt-8 education-desc">
								<h3 className="fw-bold mb-4 text-red-700">{project.title}</h3>
								<h4 className="">{project.description}</h4>
								<p className="education-text">
									{project.duration} (internship)
								</p>
							</div>
						</Col>
					</Row>
				))}
			</Container>
		</section>
	);
};
