import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { useInView } from "react-intersection-observer";

const Educations = () => {
	const [hasScrolled, setHasScrolled] = useState(false);
	const { ref: educationRef, inView: educationView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		onChange: (inView) => {
			if (inView && hasScrolled) {
				setHasScrolled(true);
			}
		},
	});

	const { ref: education1Ref, inView: education1InView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		onChange: (inView) => {
			if (inView && hasScrolled) {
				setHasScrolled(true);
			}
		},
	});
	return (
		<section
			ref={educationRef}
			className={`education transition-transform duration-500 ${
				hasScrolled || educationView
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-20"
			}`}
			id="educations"
		>
			<Container>
				<h2 className="text-center education-title fw-bold">Educations</h2>
				<div
					ref={education1Ref}
					className={`d-flex justify-center  transition-transform duration-500 ${
						hasScrolled || education1InView
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-20"
					}`}
				>
					<div className="d-fjustify-content-center education-level ">
						<div className="education-item-step"></div>
						<div className="education-item-step2 ">
							{/* tangga tingkatan */}
						</div>
					</div>
					<Row className="justify-content-center mt-5 ">
						<Col md={12} className="mb-4 ">
							<div className="education-item text-center mt-2 education-desc">
								<h3 className="fw-bold mb-4 text-red-700">
									Bina Sarana Informatika University
								</h3>
								<p className="education-text">Software Engeneering</p>
								<p className="education-text">2021 - Present</p>
							</div>
						</Col>
						<Col md={12} className="mb-4">
							<div className="education-item text-center education-desc">
								<h3 className="fw-bold mb-4 text-red-700">
									MSIB Bootcamp Rakamin Academy
								</h3>
								<p className="education-text">
									Full Stack Web Development Bootcamp
								</p>
								<p className="education-text">August - December 2023</p>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	);
};

export default Educations;
