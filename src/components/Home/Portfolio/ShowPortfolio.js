import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ShowPortfolio({ project }) {
	const { name, image, description, _id } = project;

	return (
		<Col md={4} sm={12}>
			<div className="p-2 rounded" style={{ boxShadow: "3px 3px 10px gray" }}>
				<img
					src={image}
					style={{ height: "200px" }}
					className="img-fluid rounded"
					alt="project"
				/>
				<h4 className="mt-2">{name.toUpperCase()}</h4>
				<p>{description}</p>
				<Link to={`/home/${_id}`}>
					<button className="btn btn-dark">Details</button>
				</Link>
			</div>
		</Col>
	);
}

export default ShowPortfolio;
