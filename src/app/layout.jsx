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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${jakarta.variable}`}>
      <body className="manrope antialiased">
        <ArticlesProvider>
          {children}
        </ArticlesProvider>
      </body>
    </html>
  );
}
