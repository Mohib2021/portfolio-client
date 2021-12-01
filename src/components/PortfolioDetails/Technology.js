import React from "react";
import { ListGroup } from "react-bootstrap";

function Technology({ tech }) {
	return (
		<ListGroup>
			<ListGroup.Item className="fw-bold">{tech}</ListGroup.Item>
		</ListGroup>
	);
}

export default Technology;
