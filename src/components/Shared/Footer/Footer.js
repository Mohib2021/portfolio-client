import React from "react";

function Footer() {
	return (
		<div className="bg-dark py-4 text-center text-white">
			<p>All &copy; copyright reserved {new Date().getFullYear()}</p>
		</div>
	);
}

export default Footer;
