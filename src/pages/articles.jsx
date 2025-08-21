import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { div } from "motion/react-client";
import ArticleCard from "../components/ArticleCard";

function Blog() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const getArticles = async () => {
			try {
				const res = await fetch("http://localhost:5000/my-articles");
				const data = await res.json();
				setArticles(data);

				console.log(data);
			} catch (err) {
				console.error("Error fetching articles:", err);
			}
		};

		getArticles();
	}, []);

	return (
		<main className="bg-[var(--dark-bg-primary)] w-screen min-h-screen">
			<Navbar />
			<section className="px-[20px] pt-[130px] pb-[60px]">
				{articles.map((article) => {
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
