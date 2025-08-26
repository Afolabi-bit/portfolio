import React, { useContext } from "react";
import ArticlesContext from "../context/articlesContext";

const ArticlesDetails = () => {
	const { articles } = useContext(ArticlesContext);
	console.log(articles);
	return (
		<main className="w-screen h-screen bg-[var(--dark-bg-primary)]">
			ArticlesDetails
		</main>
	);
};

export default ArticlesDetails;
