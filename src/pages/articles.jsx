import Navbar from "../components/navbar";
import ArticleCard from "../components/ArticleCard";
import { useArticles } from "../context/articlesContext";

function Blog() {
	const { fetching, articles, refresh } = useArticles();

	if (!fetching && !articles) {
		refresh();
	}

	return (
		<main className="bg-[var(--dark-bg-primary)] w-screen min-h-screen md:px-[50px] lg:px-[70px]">
			<Navbar />
			<section className="px-[20px] pt-[130px] pb-[60px]">
				{articles.length < 1 && (
					<p className="w-full h-[400px] flex justify-center flex-col items-center ">
						<span className="loader"></span>
						<span className="text-white py-[30px] font-[600px] text-[15px] ">
							Loading articles...
						</span>
					</p>
				)}
				{articles.length > 0 &&
					articles.map((article) => {
						// ******************
						return (
							<ArticleCard
								key={article.id}
								article={article}
							/>
						);
					})}
			</section>
		</main>
	);
}

export default Blog;
