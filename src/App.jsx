import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticlesProvider } from "./context/articlesContext";

const Home = lazy(() => import("./pages/home"));
const Projects = lazy(() => import("./pages/projects"));
const Blog = lazy(() => import("./pages/articles"));
const ArticlesDetails = lazy(() => import("./pages/ArticlesDetails"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen bg-[var(--dark-bg-primary)]">
    <span className="loader"></span>
  </div>
);

function App() {
  return (
    <ArticlesProvider>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:title" element={<ArticlesDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </ArticlesProvider>
  );
}

export default App;
