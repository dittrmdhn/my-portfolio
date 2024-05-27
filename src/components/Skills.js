import "react-multi-carousel/lib/styles.css";
import { ReactComponent as CssLogo } from "../assets/logo/css3-color.svg";
import { ReactComponent as HtmlLogo } from "../assets/logo/html5-color.svg";
import { ReactComponent as JavascriptLogo } from "../assets/logo/javascript-color.svg";
import { ReactComponent as BootstrapLogo } from "../assets/logo/bootstrap-color.svg";
import { ReactComponent as NodeLogo } from "../assets/logo/nodedotjs-color.svg";
import { ReactComponent as ExpressLogo } from "../assets/logo/express.svg";
import { ReactComponent as PostgreSql } from "../assets/logo/postgresql-color.svg";
import { ReactComponent as TailwindLogo } from "../assets/logo/tailwindcss-color.svg";
import { ReactComponent as MySQL } from "../assets/logo/mysql-color.svg";
import { ReactComponent as Postman } from "../assets/logo/postman-color.svg";
import { ReactComponent as React } from "../assets/logo/react-color.svg";
import "../App.css";
import { useState, useEffect, useRef } from "react";

export const Skills = () => {
	const [isVisible, setIsVisible] = useState(false);
	const skillsRef = useRef(null);

	useEffect(() => {
		const threshold = window.innerWidth < 600 ? 0.1 : 0.3;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold }
		);

		if (skillsRef.current) {
			observer.observe(skillsRef.current);
		}

		return () => {
			if (skillsRef.current) {
				observer.unobserve(skillsRef.current);
			}
		};
	}, []);

	return (
		<section
			className={`skill ${isVisible ? "visible" : ""}`}
			id="skills"
			ref={skillsRef}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn mt-2">
							<h2 className="skill-title mt-4">Skills</h2>
							<p className="skill-text mt-3">
								Mastering JavaScript programming skills, capable of working as a
								full-stack developer<br></br> but with a deeper focus on the
								backend
							</p>
							<div className="skill-slider mb-5">
								<div className="row justify-content-center">
									<div className="col-6 col-md-3 mt-5">
										<div className="item">
											<HtmlLogo width="100" />
											<h5 className="text-skill mt-2">HTML</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5">
										<div className="item">
											<CssLogo width="100" />
											<h5 className="text-skill mt-2">CSS</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5">
										<div className="item">
											<JavascriptLogo width="100" />
											<h5 className="text-skill mt-2">Javascript</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5">
										<div className="item">
											<TailwindLogo width="100" />
											<h5 className="text-skill mt-2">Tailwind</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5">
										<div className="item">
											<BootstrapLogo width="100" />
											<h5 className="text-skill mt-2">Bootstrap</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5">
										<div className="item">
											<NodeLogo width="100" />
											<h5 className="text-skill mt-2">NodeJS</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5">
										<div className="item">
											<ExpressLogo width="100" />
											<h5 className="text-skill mt-2">Express</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5">
										<div className="item">
											<PostgreSql width="100" />
											<h5 className="text-skill mt-2">PostgeSQL</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5">
										<div className="item">
											<MySQL width="100" />
											<h5 className="text-skill mt-2">MySQL</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5">
										<div className="item">
											<Postman width="100" />
											<h5 className="text-skill mt-2">Postman</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5">
										<div className="item">
											<React width="100" />
											<h5 className="text-skill mt-2">React</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <img className="background-image-left" src={background} alt="Image" /> */}
		</section>
	);
};
