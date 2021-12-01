import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Logo from "../../../../Images/portfolio_logo.png";
function Navigation() {
	return (
		<div className="sticky-top">
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">
						<img src={Logo} width="150px" alt="logo-img" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto text-center text-md-start">
							<Nav.Link className="active" as={NavHashLink} to="/home#home">
								HOME
							</Nav.Link>
							<Nav.Link
								className="active"
								as={NavHashLink}
								to="/home#portfolio"
							>
								PORTFOLIO
							</Nav.Link>
							<Nav.Link className="active" as={NavHashLink} to="/home#about-me">
								ABOUT ME
							</Nav.Link>
							<Nav.Link className="active" as={NavHashLink} to="/home#contacts">
								CONTACT
							</Nav.Link>
							<Nav.Link className="active" as={Link} to="/blogs">
								BLOGS
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Navigation;
