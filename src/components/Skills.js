import "react-multi-carousel/lib/styles.css";
import { ReactComponent as CssLogo } from "../assets/logo/css3-color.svg";
import { ReactComponent as HtmlLogo } from "../assets/logo/html5-color.svg";
import { ReactComponent as JavascriptLogo } from "../assets/logo/javascript-color.svg";
import { ReactComponent as BootstrapLogo } from "../assets/logo/bootstrap-color.svg";
import { ReactComponent as NodeLogo } from "../assets/logo/nodedotjs-color.svg";
import { ReactComponent as ExpressLogo } from "../assets/logo/express-color.svg";
import { ReactComponent as PostgreSql } from "../assets/logo/postgresql-color.svg";
import { ReactComponent as TailwindLogo } from "../assets/logo/tailwindcss-color.svg";
import { ReactComponent as MySQL } from "../assets/logo/mysql-color.svg";
import { ReactComponent as Postman } from "../assets/logo/postman-color.svg";
import { ReactComponent as React } from "../assets/logo/react-color.svg";
import { ReactComponent as Prisma } from "../assets/logo/prisma-color.svg";
import "../App.css";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const Skills = () => {
	const [hasScrolled, setHasScrolled] = useState(false);

	const { ref: skillRef, inView: skillInView } = useInView({
		triggerOnce: false, // Set to false to allow checking visibility multiple times
		threshold: 0.1,
		onChange: (inView) => {
			if (inView && hasScrolled) {
				setHasScrolled(true); // Set state to true when the element is in view
			}
		},
	});
	const { ref: skillIconRef, inView: skillIconInView } = useInView({
		triggerOnce: false,
		threshold: 0.1,
		onChange: (inView) => {
			if (inView && hasScrolled) {
				setHasScrolled(true); // Set state to true when the element is in view
			}
		},
	});
	console.log("hasScrolled: ", skillInView);

	return (
		<section
			ref={skillRef}
			className={`skill mt-12 transition-transform duration-500 ${
				hasScrolled || skillInView
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-20"
			}`}
			id="skills"
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
								<div
									ref={skillIconRef}
									className={`row justify-center mt-12 transition-transform duration-500 ${
										hasScrolled || skillIconInView
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-20"
									}`}
								>
									<div className="col-6 col-md-3 mt-5 flex flex-col items-center">
										<div className="item flex flex-col items-center">
											<HtmlLogo width="100" />
											<h5 className="text-skill mt-2 text-center">HTML</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5 flex flex-col items-center">
										<div className="item flex flex-col items-center">
											<CssLogo width="100" />
											<h5 className="text-skill mt-2 text-center">CSS</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5 flex flex-col items-center">
										<div className="item flex flex-col items-center">
											<JavascriptLogo width="100" />
											<h5 className="text-skill mt-2 text-center">
												Javascript
											</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5 flex flex-col items-center">
										<div className="item flex flex-col items-center">
											<TailwindLogo width="100" />
											<h5 className="text-skill mt-2 text-center">Tailwind</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5 flex flex-col items-center">
										<div className="item flex flex-col items-center">
											<BootstrapLogo width="100" />
											<h5 className="text-skill mt-2 text-center">Bootstrap</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5 flex flex-col items-center">
										<div className="item flex flex-col items-center">
											<NodeLogo width="100" />
											<h5 className="text-skill mt-2 text-center">NodeJS</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5 flex flex-col items-center">
										<div className="item flex flex-col items-center">
											<ExpressLogo width="100" />
											<h5 className="text-skill mt-2 text-center">Express</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5 flex flex-col items-center">
										<div className="item flex flex-col items-center">
											<PostgreSql width="100" />
											<h5 className="text-skill mt-2 text-center">
												PostgreSQL
											</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5 flex flex-col items-center">
										<div className="item flex flex-col items-center">
											<MySQL width="100" />
											<h5 className="text-skill mt-2 text-center">MySQL</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5 flex flex-col items-center">
										<div className="item flex flex-col items-center">
											<Postman width="100" />
											<h5 className="text-skill mt-2 text-center">Postman</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5 flex flex-col items-center">
										<div className="item flex flex-col items-center">
											<React width="100" />
											<h5 className="text-skill mt-2 text-center">React</h5>
										</div>
									</div>
									<div className="col-6 col-md-3 mt-5 flex flex-col items-center">
										<div className="item flex flex-col items-center">
											<Prisma width="100" />
											<h5 className="text-skill mt-2 text-center">Prisma</h5>
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
