import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { div } from "motion/react-client";
const ArticleCard = React.lazy(() => import("../components/ArticleCard"));

function Blog() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const getArticles = async () => {
			try {
				const res = await fetch(
					"https://portfolio-backend-0e49.onrender.com/my-articles",
				);

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
				{articles.length < 1 && (
					<p className="w-full h-[400px] flex justify-center flex-col items-center ">
						<span class="loader"></span>
						<span className="text-white py-[30px] font-[600px] text-[15px] ">
							Loading articles...
						</span>
					</p>
				)}
				{articles &&
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
