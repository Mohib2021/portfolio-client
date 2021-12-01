import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import HeroSection from "./HeroSection/HeroSection";
import Portfolio from "./Portfolio/Portfolio";

function Home() {
	return (
		<div>
			<HeroSection />
			<Portfolio />
			<AboutMe />
			<ContactMe />
		</div>
	);
}

export default Home;
