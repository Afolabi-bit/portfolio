import { useEffect, useState } from "react";

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

	return <div></div>;
}

export default Blog;
