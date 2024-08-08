import ProjectImage1 from "../assets/project/inbako.png";
import ProjectImage2 from "../assets/project/inbako2.png";
import ProjectImage3 from "../assets/project/inbako3.png";
import ProjectImage4 from "../assets/project/inbako4.png";
import { Footer } from "./Footer";
import { NavbarProject } from "./NavbarProject";

const Inbako = () => {
	return (
		<>
			<NavbarProject />
			<div className="container mx-auto py-8 px-4 mt-48">
				<div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
					<div className="flex-shrink-0 w-full md:w-1/2">
						<img
							src={ProjectImage1}
							alt="inbako"
							className="w-full h-auto rounded-lg shadow-lg object-cover"
						/>
					</div>
					<div className="w-full md:w-1/2 text-center md:text-left">
						<h1 className="text-3xl font-bold mb-4">Inbako</h1>
						<p className="text-lg mb-6 text-gray-300">
							Inbako is a website designed to assist in managing the
							distribution of basic necessities to the community.
						</p>
					</div>
				</div>

				<div className="mt-12">
					<h2 className="text-2xl font-semibold mb-4 text-gray-100">
						Project Details
					</h2>
					<p className="text-gray-300 mb-4 ">
						<strong>Technologies Used:</strong> Codeigniter 3, MySQL, Bootstrap
					</p>
					<p className="text-gray-300 mb-4">
						In the Web Programming 3 course, my lecturer asked us to create a
						website related to the SDGs. My team and I came up with the idea to
						develop a website for distributing basic necessities, as the
						government was frequently organizing such distributions at the time.
						This website is intended to help manage the distribution process in
						an orderly and transparent manner, especially when reporting.
					</p>

					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
						<div className="flex justify-center">
							<img
								src={ProjectImage2}
								alt="inbako Screenshot"
								className="w-full h-auto rounded-lg shadow-lg object-cover"
							/>
						</div>
						<div className="flex justify-center">
							<img
								src={ProjectImage3}
								alt="Another inbako Screenshot"
								className="w-full h-auto rounded-lg shadow-lg object-cover"
							/>
						</div>
						<div className="flex justify-center">
							<img
								src={ProjectImage4}
								alt="Another inbako Screenshot"
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
export default Inbako;
