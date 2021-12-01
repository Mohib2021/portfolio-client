import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowPortfolio from "./ShowPortfolio";

function Portfolio() {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch("https://boiling-basin-51406.herokuapp.com/portfolio")
			.then((res) => res.json())
			.then((data) => setProjects(data));
	}, []);
	console.log(projects);
	return (
		<div className="my-5" id="portfolio">
			<Container>
				<div className="text-center mb-4">
					<h2>LATEST PORTFOLIO</h2>
				</div>
				<Row className="g-4">
					{projects.map((project) => (
						<ShowPortfolio key={project._id} project={project} />
					))}
				</Row>
			</Container>
		</div>
	);
}

export default Portfolio;
