import Navbar from "../components/navbar";
import ArticleCard from "../components/ArticleCard";
import { useArticles } from "../context/articlesContext";
import { useEffect } from "react";

function Blog() {
  const { fetching, articles, refresh, error } = useArticles();

  useEffect(() => {
    if (articles.length === 0 && !fetching) {
      refresh();
    }
  }, []);

  return (
    <main className="bg-[var(--dark-bg-primary)] w-screen min-h-screen md:px-[50px] lg:px-[70px] xl:hidden">
      <Navbar />
      <section className="px-[20px] pt-[130px] pb-[60px]">
        {/* Loading state */}
        {fetching && articles.length === 0 && (
          <div className="w-full h-[400px] flex justify-center flex-col items-center gap-4">
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
            <span className="text-white font-[600] text-[15px]">
              Loading articles...
            </span>
          </div>
        )}

        {/* Error state */}
        {error && !fetching && (
          <div className="w-full h-[400px] flex justify-center flex-col items-center gap-4">
            <span className="text-red-400 font-semibold text-[15px]">
              Failed to load articles.
            </span>
            <button onClick={refresh} className="text-white underline text-sm">
              Try again
            </button>
          </div>
        )}

        {/* Empty state */}
        {!fetching && !error && articles.length === 0 && (
          <div className="w-full h-[400px] flex justify-center items-center">
            <span className="text-white font-semibold text-[15px]">
              No articles found.
            </span>
          </div>
        )}

        {/* Articles */}
        {articles.length > 0 &&
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
      </section>
    </main>
  );
}

export default Blog;
