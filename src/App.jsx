import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticlesProvider } from "./context/articlesContext";

const Home = lazy(() => import("./pages/home"));
const Projects = lazy(() => import("./pages/projects"));
const Blog = lazy(() => import("./pages/articles"));
const ArticlesDetails = lazy(() => import("./pages/ArticlesDetails"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen bg-[var(--dark-bg-primary)]">
    <div className="flex gap-2">
      <div
        className="w-3 h-3 bg-white rounded-full animate-bounce"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="w-3 h-3 bg-white rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-3 h-3 bg-white rounded-full animate-bounce"
        style={{ animationDelay: "0.4s" }}
      ></div>
    </div>
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
