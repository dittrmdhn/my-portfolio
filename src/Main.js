import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import Educations from "./components/Educations";

const Main = () => {
	return (
		<>
			<NavBar />
			<Banner />
			<Skills />
			<Projects />
			<Educations />
			<Footer />
		</>
	);
};

export default Main;
