"use client";

import Navbar from "@/components/navbar";
import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/context/articlesContext";
import PageTransition from "@/components/ui/PageTransition";
import { useEffect } from "react";

export default function Blog() {
  const { fetching, articles, refresh, error } = useArticles();

  useEffect(() => {
    if (articles.length === 0 && !fetching) {
      refresh();
    }
  }, []);

  return (
    <PageTransition>
      <main className="bg-(--dark-bg-primary) w-screen min-h-screen md:px-12.5 lg:px-17.5">
        <Navbar />
        <section className="px-5 pt-32.5 pb-15">
        {/* Loading state */}
        {fetching && articles.length === 0 && (
          <div className="w-full h-100 flex justify-center flex-col items-center gap-4">
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
            <span className="text-white font-semibold text-[15px]">
              Loading articles...
            </span>
          </div>
        )}

        {/* Error state */}
        {error && !fetching && (
          <div className="w-full h-100 flex justify-center flex-col items-center gap-4">
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
          <div className="w-full h-100 flex justify-center items-center">
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
    </PageTransition>
  );
}