import { createContext, useEffect, useMemo, useContext, useState } from "react";

const ArticlesContext = createContext({ articles: [] });

export function ArticlesProvider({ children }) {
	const [articles, setArticles] = useState([]);

	const getArticles = async () => {
		try {
			const res = await fetch(
				"https://portfolio-backend-0e49.onrender.com/my-articles",
			);

			const data = await res.json();
			return data;
		} catch (err) {
			console.error("Error fetching articles:", err);
		}
	};

	useEffect(() => {
		const fetchAndSetArticles = async () => {
			const data = await getArticles();
			setArticles(data);
		};
		fetchAndSetArticles();
	}, []);

	const values = useMemo(
		() => ({ articles, refresh: () => getArticles }),
		[articles],
	);

	return (
		<ArticlesContext.Provider value={values}>
			{children}
		</ArticlesContext.Provider>
	);
}

// Custom hook
export function useArticles() {
	return useContext(ArticlesContext);
}

export default ArticlesContext;
