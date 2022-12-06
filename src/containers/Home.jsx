import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
// import Footer from "../components/Footer";
// import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";

function HomeContainer() {
	return (
		// <> -> ini udah termasuk fragment jadi ga usah import dari react biar simple
		<>
			{/* NAVBAR */}
			<NavBar />

			<div className="container mx-auto px-4 mt-36">
				<Link
					to="/project"
					className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
				>
					Go to Project Route
				</Link>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
}

export default HomeContainer;
