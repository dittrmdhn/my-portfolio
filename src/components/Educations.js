import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const Educations = () => {
	const [isVisible, setIsVisible] = useState(false);
	const educationRef = useRef(null);

	useEffect(() => {
		const threshold = window.innerWidth < 600 ? 0.3 : 0.7;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold }
		);

		if (educationRef.current) {
			observer.observe(educationRef.current);
		}

		return () => {
			if (educationRef.current) {
				observer.unobserve(educationRef.current);
			}
		};
	}, []);
	return (
		<section
			className={`education 	mb-5 ${isVisible ? "visible" : ""}`}
			id="educations"
			ref={educationRef}
		>
			<Container>
				<h2 className="text-center mb-4 education-title mt-4  fw-bold">
					Educations
				</h2>
				<div className="d-flex justify-content-center">
					<div className="d-fjustify-content-center education-level">
						<div className="education-item-step ">{/* tangga tingkatan */}</div>
						<div className="education-item-step2 ">
							{/* tangga tingkatan */}
						</div>
					</div>
					<Row className="justify-content-center mt-5">
						<Col md={12} className="mb-4">
							<div className="education-item text-center mt-2 education-desc">
								<h3 className="text-edu fw-bold mb-4 ">
									Universitas Bina Sarana Informatika
								</h3>
								<p className="education-text">Software Engeneering</p>
								<p className="education-text">2021 - Present</p>
							</div>
						</Col>
						<Col md={12} className="mb-4">
							<div className="education-item text-center education-desc">
								<h3 className="text-edu fw-bold mb-4">
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
