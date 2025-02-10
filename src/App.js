import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shoestock from "./components/Shoestock";
import Main from "./Main";
import Inbako from "./components/Inbako";
import MyListrik from "./components/MyListrik";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Simpus from "./components/Simpus";
import DittSeek from "./components/Dittseek";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/project/shoestock" element={<Shoestock />} />
					<Route path="/project/inbako" element={<Inbako />} />
					<Route path="/project/mylistrik" element={<MyListrik />} />
					<Route path="/project/simpus" element={<Simpus />} />
					<Route path="/project/dittseek" element={<DittSeek />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
