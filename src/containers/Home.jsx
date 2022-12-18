import React from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";

function HomeContainer() {
	return (
		// <> -> ini udah termasuk fragment jadi ga usah import dari react biar simple
		<>
			{/* NAVBAR */}
			<NavBar />
			<Header />
			<AboutMe />
		
		
			
		</>
	);
}

export default HomeContainer;
