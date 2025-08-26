import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";
import Blog from "./pages/articles";
import ArticlesDetails from "./pages/ArticlesDetails";
import { ArticlesProvider } from "./context/articlesContext";
// import AnimatedCursor from "react-animated-cursor";

function App() {
	return (
		<ArticlesProvider>
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
					<Route
						path="/blog/:title"
						element={<ArticlesDetails />}
					></Route>
				</Routes>
			</Router>
		</ArticlesProvider>
	);
}

export default App;
