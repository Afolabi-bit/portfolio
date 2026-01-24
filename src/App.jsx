import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";
import Blog from "./pages/articles";
import ArticlesDetails from "./pages/ArticlesDetails";
import { ArticlesProvider } from "./context/articlesContext";
import { DemoOne } from "./components/ui/demo";

function App() {
  return (
    <ArticlesProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />

          <Route path="projects" element={<Projects />} />

          <Route path="blog" element={<DemoOne />} />
          <Route path="blog/:title" element={<ArticlesDetails />} />
        </Routes>
      </Router>
    </ArticlesProvider>
  );
}

export default App;
