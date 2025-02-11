import ProjectImage1 from "../assets/project/dittseek-off.png";
import ProjectImage2 from "../assets/project/dittseek-on.png";

import { Footer } from "./Footer";
import { NavbarProject } from "./NavbarProject";
import navIcon2 from "../assets/img/github-color.svg";

const DittSeek = () => {
	return (
		<>
			<NavbarProject />
			<div className="container mx-auto py-8 px-4 mt-16 md:mt-36">
				<div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
					<div className="flex-shrink-0 w-full md:w-1/2">
						<img
							src={ProjectImage1}
							alt="simpus"
							className="w-full h-auto rounded-lg shadow-lg object-cover"
						/>
					</div>
					<div className="w-full md:w-1/2 text-center md:text-left">
						<div className="block">
							<h1 className="text-3xl font-bold mb-4">dittseek</h1>
							<p className="text-lg mb-6 text-gray-300">
								dittseek is a website AI Chat using model deepseek-r1
							</p>
							<div className="social-icon">
								<a
									href="https://github.com/dittrmdhn/dittseek-AI-Chat"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={navIcon2} alt="github" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12">
					<h2 className="text-2xl font-semibold mb-4 text-gray-100">
						Project Details
					</h2>
					<p className="text-gray-300 mb-4 ">
						<strong>Technologies Used:</strong> Typescript, React.js, Tailwind
						CSS, and Ollama
					</p>
					<p className="text-gray-300 mb-4">
						This mini project is a chat application built using the Deepseek API
						from Ollama. It simulates an AI-powered conversation, similar to
						popular AI chat applications. The app allows users to interact with
						an AI bot, sending and receiving messages in real-time, utilizing a
						custom backend and front-end technologies like React and Vite. This
						project showcases my ability to integrate third-party APIs and work
						with real-time data streams.{" "}
					</p>
					<i className="text-gray-300">
						To use this project, simply clone the repository and install Ollama
						for API integration with Deepseek.
					</i>

					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
						<div className="flex justify-center">
							<img
								src={ProjectImage1}
								alt="listrik Screenshot"
								className="w-full h-auto rounded-lg shadow-lg object-cover"
							/>
						</div>
						<div className="flex justify-center">
							<img
								src={ProjectImage2}
								alt="Another listrik Screenshot"
								className="w-full h-auto rounded-lg shadow-lg object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
export default DittSeek;
