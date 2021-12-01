import React from "react";
import { ListGroup } from "react-bootstrap";

function Tools({ tool }) {
	return (
		<ListGroup>
			<ListGroup.Item className="fw-bold">{tool}</ListGroup.Item>
		</ListGroup>
	);
}

export default Tools;
