import ProjectImage1 from "../assets/project/shoestock.png";
import ProjectImage2 from "../assets/project/shoestock2.png";
import ProjectImage3 from "../assets/project/shoestock3.png";
import ProjectImage4 from "../assets/project/shoestock4.png";
import { Footer } from "./Footer";
import { NavbarProject } from "./NavbarProject";
import navIcon2 from "../assets/img/github-color.svg";

const Shoestock = () => {
	return (
		<>
			<NavbarProject />
			<div className="container mx-auto py-8 px-4 mt-16 md:mt-36">
				<div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
					<div className="flex-shrink-0 w-full md:w-1/2">
						<img
							src={ProjectImage1}
							alt="Shoestock"
							className="w-full h-auto rounded-lg shadow-lg object-cover"
						/>
					</div>
					<div className="w-full md:w-1/2 text-center md:text-left">
						<div className="block">
							<h1 className="text-3xl font-bold mb-4">Shoestock</h1>
							<p className="text-lg mb-6 text-gray-300">
								Shoestock is an innovative inventory management system for
								shoes. Developed as part of a team project, it aims to
								streamline shoe inventory management with an intuitive
								interface.
							</p>
							<div className="social-icon">
								<a
									href="https://github.com/dittrmdhn/final-project-inventory-web"
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
						<strong>Technologies Used:</strong> Express, Next.js, Tailwind CSS,
						and PostgreSQL
					</p>
					<p className="text-gray-300 mb-4">
						Currently, shoes are no longer just a necessity but a hobby for many
						people, as many collect shoes. Local shoe brands are now competing
						with international brands. Observing the high demand for shoes, my
						team and I collaborated to build a shoe inventory management
						website. This website is dedicated to recording and managing shoe
						product inventories. This project was designed to provide a
						comprehensive solution for shoe inventory management. This project
						is the final project that I worked on with my team during the MSIB
						Study Independent Batch 5.
					</p>

					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
						<div className="flex justify-center">
							<img
								src={ProjectImage2}
								alt="shoestock Screenshot"
								className="w-full h-auto rounded-lg shadow-lg object-cover"
							/>
						</div>
						<div className="flex justify-center">
							<img
								src={ProjectImage3}
								alt="Another shoestock Screenshot"
								className="w-full h-auto rounded-lg shadow-lg object-cover"
							/>
						</div>
						<div className="flex justify-center">
							<img
								src={ProjectImage4}
								alt="Another shoestock Screenshot"
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
export default Shoestock;
