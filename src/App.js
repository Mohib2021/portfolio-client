import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Navigation from "./components/Shared/Header/Navigation/Navigation";
import Blogs from "./components/Blogs/Blogs";
import PortfolioDetails from "./components/PortfolioDetails/PortfolioDetails";
function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/details" element={<Home />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/home/:_id" element={<PortfolioDetails />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
