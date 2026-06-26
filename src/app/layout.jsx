import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "@/index.css";
import { ArticlesProvider } from "@/context/articlesContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Fenigma - Afolabi Joseph",
  description: "Afolabi Joseph's portfolio, articles, and software projects.",
  icons: {
    icon: "/favicon.png",
  },
};

async function getArticles() {
  try {
    const res = await fetch("https://portfolio-backend-0e49.onrender.com/my-articles", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (err) {
    console.error("Error prefetching articles:", err);
    return [];
  }
}

export default async function RootLayout({ children }) {
  const initialArticles = await getArticles();

  return (
    <html lang="en" className={`${manrope.variable} ${jakarta.variable}`}>
      <body className="manrope antialiased">
        <ArticlesProvider initialArticles={initialArticles}>
          {children}
        </ArticlesProvider>
      </body>
    </html>
  );
}
