import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/foto-me.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../App.css";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(200);
	const [index, setIndex] = useState(1);
	const toRotate = ["Web Developer", "Back End"];
	const period = 2000;
	const [waiting, setWaiting] = useState(false); // tambahan state untuk mengelola jeda

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
			"https://drive.google.com/file/d/1dIlFqgL_Ebo8BaHD4vnzsQulfFn_gyyA/view?usp=sharing",
			"_blank"
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
							<span
								className="txt-rotate text-danger"
								dataPeriod="10"
								data-rotate='[ "Web Developer", "Back End" ]'
							>
								<span className="wrap text-run">{text}</span>
								<span className="cursor">|</span>
							</span>
						</h1>
						<p>
							A software engineering student with a passion for technology,
							especially programming. Working in a team is something I find very
							enjoyable.
						</p>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}
								>
									<button onClick={cvClink}>
										My CV <ArrowRightCircle size={25} />
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
