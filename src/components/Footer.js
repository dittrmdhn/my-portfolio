import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="footer d-flex justify-content-center align-items-center">
			<Container>
				<Row className="justify-content-center">
					<Col xs="auto p-3 w-100 text-center">
						<div className="border-top w-4/5 mx-auto"></div>
						<p className="mb-2 mt-4 fw-bold mx-auto">
							{currentYear} &copy; All Rights Reserved.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
