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
			className={`education mt-12 transition-transform duration-500`}
			id="educations"
		>
			<Container>
				<h2 className="text-center mb-4 education-title mt-4  fw-bold">
					Educations
				</h2>
				<div
					ref={education1Ref}
					className={`d-flex justify-center mt-12 transition-transform duration-500 `}
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
									Universitas Bina Sarana Informatika
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
