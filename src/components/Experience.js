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
			title: "Store Crew",
			description: "PT Albany Corona Lestari",
			duration: "April 2020 - Oktober 2021",
		},
		{
			title: "Full Stack Developer",
			description: "PT Ciptadra Softindo",
			duration: "Oktober - Desember 2024 (Internship)",
		},
		{
			title: "Security Operation Center (SOC) Analyst",
			description: "PT Systema Global Solusindo",
			duration: "April - September 2025 (Internship)",
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
			id="experience"
		>
			<Container>
				<h2 className="project-title mb-4 text-center text-2xl font-bold">
					Experience
				</h2>

				{projects.map((project, index) => (
					<Row
						key={index}
						ref={projectImageRef}
						className={`project-card align-items-center transition-transform duration-500 ${
							hasScrolled || projectImageInView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-20"
						}`}
					>
						<Col md={12}>
							<div className="rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
								<h3 className="text-xl font-bold text-red-700 mb-2">
									{project.title}
								</h3>
								<h4 className="text-gray-700 dark:text-gray-300 mb-4">
									{project.description}
								</h4>
								<p className="text-gray-500 dark:text-gray-400 italic">
									{project.duration}
								</p>
							</div>
						</Col>
					</Row>
				))}
			</Container>
		</section>
	);
};
