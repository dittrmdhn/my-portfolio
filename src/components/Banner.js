import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/foto-me.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../App.css";
import { Link } from "react-router-dom";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(200);
	const toRotate = ["Web Developer", "Back End", "SOC Analyst"];
	const [waiting, setWaiting] = useState(false);

	useEffect(() => {
		if (waiting) return;

		const ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text, waiting]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta(100);
		} else {
			setDelta(200);
		}

		if (!isDeleting && updatedText === fullText) {
			setWaiting(true);
			setTimeout(() => {
				setIsDeleting(true);
				setWaiting(false);
				setDelta(100);
			}, 2500);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(200);
		}
	};

	const cvClink = () => {
		window.open(
			"https://drive.google.com/file/d/1vkn90yayUj1ffpevhLFzg7pnhpD_v4ku/view?usp=sharing"
		);
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<span className="tagline">Welcome to my Portfolio</span>
						<h1 className="hello-aditya">
							{`Hello, I'm Aditya`}
							<br></br>
							{"    "}
							<span className="txt-rotate text-danger" dataPeriod="10">
								<span className="wrap text-red-700">{text}</span>
								<span className="cursor !text-red-700">|</span>
							</span>
						</h1>
						<p className="!text-gray-400">
							A software engineering graduate with a strong passion for
							technology and web development. Experienced in full stack
							development and security operations, with solid teamwork and
							problem-solving skills.
						</p>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}
								>
									<button onClick={cvClink}>
										<Link className="text-decoration-none text-white">
											My CV
										</Link>
										<ArrowRightCircle size={25} />
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							<div>
								<img className="img-me" src={headerImg} alt="Header Img" />
							</div>
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
