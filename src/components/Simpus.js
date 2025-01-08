import ProjectImage1 from "../assets/project/simpus-login.png";
import ProjectImage2 from "../assets/project/simpus-dashboard.png";
import ProjectImage3 from "../assets/project/simpus-daftarpasien.png";
import ProjectImage4 from "../assets/project/simpus-daftarkunjungan.png";
import ProjectImage5 from "../assets/project/simpus-pasien.png";

import { Footer } from "./Footer";
import { NavbarProject } from "./NavbarProject";
import navIcon2 from "../assets/img/github-color.svg";

const Simpus = () => {
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
							<h1 className="text-3xl font-bold mb-4">Simpus</h1>
							<p className="text-lg mb-6 text-gray-300">
								Simpus is a website for managing health center data such as
								patient records, visit records, and staff information.
							</p>
							{/* <div className="social-icon">
								<a
									href="https://github.com/dittrmdhn/web-pembayaran-listrik"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={navIcon2} alt="github" />
								</a>
							</div> */}
						</div>
					</div>
				</div>

				<div className="mt-12">
					<h2 className="text-2xl font-semibold mb-4 text-gray-100">
						Project Details
					</h2>
					<p className="text-gray-300 mb-4 ">
						<strong>Technologies Used:</strong> Golang, Next.js, Tailwind CSS,
						and MySQL
					</p>
					<p className="text-gray-300 mb-4">
						SIMPUS Depok is an innovative digital platform designed to support
						healthcare data management and services for community health centers
						(Puskesmas) in Depok City. The system integrates various features,
						including patient medical record management, visit scheduling,
						medication stock tracking, and comprehensive operational reporting.
						Leveraging cutting-edge technologies, SIMPUS Depok aims to enhance
						efficiency, accuracy, and accessibility of healthcare services for
						the community while providing an organized and user-friendly
						solution for healthcare staff to manage information seamlessly.{" "}
						<i>
							This project is currently under development to ensure it meets the
							highest standards of functionality and usability.
						</i>
					</p>

					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
						<div className="flex justify-center">
							<img
								src={ProjectImage5}
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
								src={ProjectImage2}
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
export default Simpus;
