import { createContext, useEffect, useMemo, useContext, useState } from "react";

const ArticlesContext = createContext({ articles: [] });

export function ArticlesProvider({ children }) {
	const [articles, setArticles] = useState([]);
	const [fetching, setFetching] = useState(false);

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
			setFetching(true);
			const data = await getArticles();
			setArticles(data);
			setFetching(false);
		};
		fetchAndSetArticles();
	}, []);

	const values = useMemo(
		() => ({ fetching, articles, refresh: () => getArticles }),
		[articles, fetching],
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
