import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutMePic from "../../../Images/about-me.png";
function AboutMe() {
	return (
		<div id="about-me">
			<Container>
				<Row className="my-3 align-items-center g-3">
					<Col md={5} sm={12}>
						<div className="text-center text-md-start">
							<img src={AboutMePic} alt="me" className="img-fluid" />
						</div>
					</Col>
					<Col md={7} sm={12}>
						<div>
							<h2 className="text-center text-md-start">ABOUT ME</h2>
							<p>
								I'm a professional React web developer who can create any kind
								of website for you using React js. Delivering project in time by
								working hard and satisfying the clients are the most important
								characteristics of me. I'm fully dedicated to learn new
								technology according to the need of projects.
							</p>
							<h5>SKILLS</h5>
							<Row>
								<Col md={6} sm={12}>
									<div>
										<ul>
											<li>HTML (HTML5)</li>
											<li>CSS (CSS3)</li>
											<li>Bootstrap (React Bootstrap)</li>
											<li>Material UI</li>
										</ul>
									</div>
								</Col>
								<Col md={6} sm={12}>
									<div>
										<ul>
											<li>Javascript</li>
											<li>React</li>
											<li>Node (Express)</li>
											<li>MongoDB</li>
										</ul>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default AboutMe;
