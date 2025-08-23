import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";
import Blog from "./pages/articles";
// import AnimatedCursor from "react-animated-cursor";

function App() {
	return (
		<Router>
			<div className=" "></div>
			<Routes>
				<Route
					exact
					path="/"
					element={<Home />}
				></Route>
				<Route
					path="/projects"
					element={<Projects />}
				></Route>
				<Route
					path="/blog"
					element={<Blog />}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
