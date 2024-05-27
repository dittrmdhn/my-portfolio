import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
	return (
		<footer className="footer d-flex justify-content-center align-items-center">
			<Container>
				<Row className="justify-content-center">
					<Col xs="auto p-4">
						<p className="mb-2 mt-2 fw-bold ">&copy; Copyright 2024</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
