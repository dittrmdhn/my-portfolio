import ProjectImage1 from "../assets/project/listrik.png";
import ProjectImage2 from "../assets/project/listrik2.png";
import ProjectImage3 from "../assets/project/listrik3.png";
import ProjectImage4 from "../assets/project/listrik4.png";
import { Footer } from "./Footer";
import { NavbarProject } from "./NavbarProject";
import navIcon2 from "../assets/img/github-color.svg";

const MyListrik = () => {
	return (
		<>
			<NavbarProject />
			<div className="container mx-auto py-8 px-4 mt-16 md:mt-36">
				<div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
					<div className="flex-shrink-0 w-full md:w-1/2">
						<img
							src={ProjectImage1}
							alt="mylistrik"
							className="w-full h-auto rounded-lg shadow-lg object-cover"
						/>
					</div>
					<div className="w-full md:w-1/2 text-center md:text-left">
						<div className="block">
							<h1 className="text-3xl font-bold mb-4">My Listrik</h1>
							<p className="text-lg mb-6 text-gray-300">
								My Listrik is a website for making electricity payments and
								managing data such as rates, customers, bills, and payments.
							</p>
							<div className="social-icon">
								<a
									href="https://github.com/dittrmdhn/web-pembayaran-listrik"
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
						<strong>Technologies Used:</strong> ExpressJS, ReactJS, Tailwind,
						MySQL, Prisma
					</p>
					<p className="text-gray-300 mb-4">
						Here’s a sentence you can use to describe the details of your
						electricity payment website: My Listrik is a comprehensive platform
						designed to streamline the process of electricity payments. The
						website allows users to manage various aspects, including
						electricity rates, customer information, billing, and payment
						records, all in one place. This system aims to simplify the
						management and tracking of electricity-related data, ensuring an
						efficient and user-friendly experience for both customers and
						administrators.
					</p>

					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
						<div className="flex justify-center">
							<img
								src={ProjectImage2}
								alt="listrik Screenshot"
								className="w-full h-auto rounded-lg shadow-lg object-cover"
							/>
						</div>
						<div className="flex justify-center">
							<img
								src={ProjectImage3}
								alt="Another listrik Screenshot"
								className="w-full h-auto rounded-lg shadow-lg object-cover"
							/>
						</div>
						<div className="flex justify-center">
							<img
								src={ProjectImage4}
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
export default MyListrik;
