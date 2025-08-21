import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { div } from "motion/react-client";

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

					const {
						id,
						body_markdown: body,
						url,
						cover_image: image,
						comments_count,
						positive_reactions: likes,
						description,
						page_views_count: views,
						reading_time_minutes: reading_time,
						title,
					} = article;

					return (
						<div
							key={id}
							className="bg-[var(--dark-bg-minimal)] w-full min-h-[300px] rounded-[10px] p-[20px]"
						>
							<img
								className="rounded-[10px] object-cover object-center w-full h-[150px]"
								src={image}
								alt="aticle cover image"
							/>

							<div className="pt-[10px]">
								<h1 className="text-white text-[23px] font-[600] jakarta lg:text-[20px] lg:font-[700] 4xl:text-[26px]">
									{title}
								</h1>
								<p className="text-[var(--dark-text-alt)] text-[12px] lg:text-[12px] 4xl:text-[16px]">
									{description}
								</p>
							</div>

							<div></div>
						</div>
					);
				})}
			</section>
		</main>
	);
}

export default Blog;
