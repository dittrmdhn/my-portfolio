import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-color.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);
	const [isScrolling, setIsScrolling] = useState(false);
	const [timeoutId, setTimeoutId] = useState(null);
	const [hovered, setHovered] = useState(false);
	const [expanded, setExpanded] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleToggle = () => setExpanded(!expanded);
	const closeNavbar = () => setExpanded(false);

	useEffect(() => {
		const onScroll = () => {
			setIsScrolling(true);
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			const newTimeoutId = setTimeout(() => {
				if (window.innerWidth > 766) {
					setIsScrolling(false);
				}
			}, 1000);
			setTimeoutId(newTimeoutId);
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [timeoutId]);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
		closeNavbar(); // Close navbar after clicking a link
	};

	const navbarRef = useRef(null);

	useEffect(() => {
		const handleMouseEnter = () => setHovered(true);
		const handleMouseLeave = () => setHovered(false);
		const navbarElement = navbarRef.current;

		if (navbarElement && windowWidth > 765) {
			navbarElement.addEventListener("mouseenter", handleMouseEnter);
			navbarElement.addEventListener("mouseleave", handleMouseLeave);
		}

		return () => {
			if (navbarElement && windowWidth > 765) {
				navbarElement.removeEventListener("mouseenter", handleMouseEnter);
				navbarElement.removeEventListener("mouseleave", handleMouseLeave);
			}
		};
	}, [windowWidth]);

	return (
		<Router>
			<Navbar
				ref={navbarRef}
				expand="md"
				expanded={expanded}
				onToggle={handleToggle}
				className={`${
					scrolled
						? isScrolling
							? "scrolled scrolling"
							: "scrolled stopped"
						: ""
				} ${hovered && windowWidth > 765 ? "hovered" : ""} ${
					windowWidth <= 765 ? "navbar-red" : ""
				}`}
			>
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto">
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav>
							<Nav.Link
								as={NavLink}
								href="#home"
								className={
									activeLink === "home" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("home")}
							>
								Home
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								href="#skills"
								className={
									activeLink === "skills" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("skills")}
							>
								Skills
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								href="#projects"
								className={
									activeLink === "projects"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() => onUpdateActiveLink("projects")}
							>
								Projects
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								href="#educations"
								className={
									activeLink === "educations"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() => onUpdateActiveLink("educations")}
							>
								Education
							</Nav.Link>
						</Nav>

						<span className="navbar-text ms-auto">
							<div className="social-icon">
								<a
									href="https://www.linkedin.com/in/aditya-ramadhan-1b8bab167/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={navIcon1} alt="linkedin" />
								</a>
								<a
									href="https://github.com/dittrmdhn"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={navIcon2} alt="github" />
								</a>
								<a
									href="https://instagram.com/dittrmdhn"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={navIcon3} alt="instagram" />
								</a>
							</div>
							<a
								href={`mailto:adityaramadhan63.ar@gmail.com?subject=Hiring Inquiry`}
							>
								<button className="vvd">
									<span>Hire Me</span>
								</button>
							</a>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	);
};
