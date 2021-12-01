import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import BulletPoint from "./BulletPoint";
import ShowImg from "./ShowImg";
import Technology from "./Technology";
import Tools from "./Tools";

function PortfolioDetails() {
	const { _id } = useParams();
	const [portfolio, setPortfolio] = useState({});
	useEffect(() => {
		fetch(`https://boiling-basin-51406.herokuapp.com/portfolio/${_id}`)
			.then((res) => res.json())
			.then((data) => setPortfolio(data));
	}, [_id]);

	const {
		name,
		image,
		liveSite,
		ServerSide,
		ClientSide,
		bulletPoint,
		technology,
		tools,
		description,
	} = portfolio;

	return (
		<div className="my-3 my-md-4">
			<Container>
				<h2 className="text-center mb-4">{name && name.toUpperCase()}</h2>
				<Row className="g-4">
					{image?.length &&
						image.map((singleImg, index) => (
							<ShowImg key={index} img={singleImg} />
						))}
				</Row>
				<Row className="g-4 mt-4">
					<Col md={6} sm={12}>
						<div>
							<div className="mb-3">
								<h5 className="fw-bold mb-3">Key Features :</h5>
								{bulletPoint?.length &&
									bulletPoint.map((point, index) => (
										<BulletPoint key={index} point={point} />
									))}
							</div>
							<h5 className="fw-bold mb-3">Description :</h5>
							<p>{description}</p>
							<a rel="noopener noreferrer" href={liveSite} target={"_blank"}>
								<button className="btn btn-dark">Live Website</button>
							</a>
							<a rel="noopener noreferrer" href={ClientSide} target="_blank">
								<button className="ms-2 btn btn-dark">Client Side Code</button>
							</a>
							{ServerSide && (
								<a rel="noopener noreferrer" href={ServerSide} target="_blank">
									<button className="ms-0 ms-md-2 mt-2 mt-md-0 btn btn-dark">
										Server Side Code
									</button>
								</a>
							)}
						</div>
					</Col>
					<Col md={6} sm={12}>
						<div>
							<div>
								<h5 className="fw-bold mb-3">Used Technology :</h5>
								{technology?.length &&
									technology.map((tech, index) => (
										<Technology key={index} tech={tech} />
									))}
							</div>
							<div>
								<h5 className="fw-bold my-3">Used Tools :</h5>
								{tools?.length &&
									tools.map((tool, index) => <Tools key={index} tool={tool} />)}
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default PortfolioDetails;
