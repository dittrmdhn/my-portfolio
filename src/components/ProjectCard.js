import { Col } from "react-bootstrap";
import "../App.css";

export const ProjectCard = ({ title, description, imgUrl }) => {
	return (
		<Col xs={12} md={6}>
			<div className="proj-imgbx mt-5">
				<img src={imgUrl} className="proj-img" />
				<div className="proj-txtx">
					<h4>{title}</h4>
					<span>{description}</span>
				</div>
			</div>
		</Col>
	);
};
