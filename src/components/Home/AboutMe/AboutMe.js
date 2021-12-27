import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutMePic from "../../../Images/about-me.png";
function AboutMe() {
	return (
		<div id="about-me">
			<Container>
				<div style={{ boxShadow: "0px 0px 20px gray", padding: "2rem" }}>
					<Row className="my-3 align-items-center g-3">
						<Col md={5} sm={12}>
							<div
								style={{ boxShadow: "0px 0px 15px gray" }}
								className="text-center rounded"
							>
								<img src={AboutMePic} alt="me" className="img-fluid" />
							</div>
						</Col>
						<Col md={7} sm={12}>
							<div>
								<h2 className="text-center text-md-start">ABOUT ME</h2>
								<p>
									I'm a professional React web developer who can create any kind
									of website for you using React js. Delivering project in time
									by working hard and satisfying the clients are the most
									important characteristics of me. I'm fully dedicated and
									passionate to give you my best service so that you can get the
									best production from me.
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
				</div>
			</Container>
		</div>
	);
}

export default AboutMe;
