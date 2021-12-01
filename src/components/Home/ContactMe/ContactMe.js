import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactMeImg from "../../../Images/hire-me.jpg";
import emailjs from "emailjs-com";
function ContactMe() {
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_5cumtrx",
				"template_0ixim59",
				e.target,
				"user_sZJENxGlPwg19kg3e4Mj1"
			)
			.then((res) => {
				console.log(res);
				e.target.reset();
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="my-5" id="contacts">
			<Container>
				<Row className="align-items-center">
					<Col md={7} sm={12}>
						<div>
							<img
								src={ContactMeImg}
								alt="ContactMeImg"
								className="img-fluid"
							/>
						</div>
					</Col>
					<Col md={5} sm={12}>
						<div>
							<h2 className="my-3 text-center text-md-start">
								CONTACT WITH ME
							</h2>

							<form onSubmit={sendEmail}>
								<p>
									<input
										type="text"
										placeholder="Your Name"
										name="name"
										className="form-control"
										required
									/>
								</p>
								<p>
									<input
										type="email"
										name="email"
										placeholder="Your Email"
										className="form-control"
										required
									/>
								</p>
								<p>
									<input
										type="text"
										name="subject"
										placeholder="Write a Subject"
										className="form-control"
										required
									/>
								</p>
								<p>
									<textarea
										placeholder="Your Message"
										className="form-control"
										name="message"
										cols="30"
										rows="5"
										required
									></textarea>
								</p>
								<input
									type="submit"
									value="MESSAGE"
									className="btn btn-danger"
								/>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ContactMe;
