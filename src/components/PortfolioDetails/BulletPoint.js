import React from "react";
import { ListGroup } from "react-bootstrap";

function BulletPoint({ point }) {
	return (
		<ListGroup>
			<ListGroup.Item>{point}</ListGroup.Item>
		</ListGroup>
	);
}

export default BulletPoint;
