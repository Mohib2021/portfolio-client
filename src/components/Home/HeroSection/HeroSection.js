import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HeroSection.css";

import Resume from "../../../Images/Md-Mohibulla-Sheikh.pdf";
import Me from "../../../Images/me.png";
function HeroSection() {
	return (
		<div className="hero-section " id="home">
			<Container>
				<Row className="align-items-center text-white">
					<Col
						className="mt-5 mt-md-0"
						md={6}
						sm={12}
						style={{ lineHeight: "2.5rem" }}
					>
						<h6 style={{ color: "lightgray" }}>Welcome To My Portfolio</h6>
						<h1>I'm Md. Mohibulla Sheikh</h1>
						<h3> A Front-End React Web Developer</h3>

						<a href={Resume} download>
							<button className="btn btn-danger">RESUME</button>
						</a>
						<div className="icons mt-2">
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://www.linkedin.com/in/md-mohibulla-sheikh-86120b202/"
							>
								<i className="fab fa-linkedin"></i>
							</a>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://www.facebook.com/sm.muhibbulla.1"
							>
								<i className="fab fa-facebook-square ms-3"></i>
							</a>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://github.com/Mohib2021"
							>
								<i className="fab fa-github-square ms-3"></i>
							</a>
						</div>
					</Col>
					<Col md={6} sm={12}>
						<img src={Me} alt="Me" className="img-fluid" />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default HeroSection;
