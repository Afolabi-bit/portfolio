import {
  createContext,
  useCallback,
  useMemo,
  useContext,
  useState,
} from "react";

const ArticlesContext = createContext({
  articles: [],
  fetching: false,
  refresh: () => {},
});

export function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [hasAttemptedFetch, setHasAttemptedFetch] = useState(false);

  const getArticles = useCallback(async () => {
    if (fetching) return;
    try {
      setFetching(true);
      const res = await fetch(
        "https://portfolio-backend-0e49.onrender.com/my-articles",
      );

      const data = await res.json();
      setArticles(data);
      setHasAttemptedFetch(true);
      return data;
    } catch (err) {
      console.error("Error fetching articles:", err);
      setHasAttemptedFetch(true);
    } finally {
      setFetching(false);
    }
  }, [fetching]);

  const refresh = useCallback(() => {
    if (!hasAttemptedFetch && !fetching) {
      getArticles();
    }
  }, [hasAttemptedFetch, fetching, getArticles]);

  const values = useMemo(
    () => ({ fetching, articles, refresh }),
    [articles, fetching, refresh],
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
