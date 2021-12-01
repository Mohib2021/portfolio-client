import React from "react";
import { Col } from "react-bootstrap";

function ShowImg({ img }) {
	return (
		<Col md={6} sm={12}>
			<div className="" style={{ boxShadow: "5px 5px 12px gray" }}>
				<img className="img-fluid rounded" src={img} alt="details-img" />
			</div>
		</Col>
	);
}

export default ShowImg;
