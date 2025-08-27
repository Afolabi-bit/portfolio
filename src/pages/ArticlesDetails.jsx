import { useParams } from "react-router-dom";
import { useArticles } from "../context/articlesContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import "prismjs/themes/prism-tomorrow.css";
import remarkBreaks from "remark-breaks";

import { IoMdHeart } from "react-icons/io";
import { FaComment } from "react-icons/fa6";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

const ArticlesDetails = () => {
	const { articles, refresh } = useArticles();
	const { title } = useParams();

	const article = Array.isArray(articles)
		? articles.find((a) => a.slug === title)
		: null;

	if (!article) {
		refresh();
		return (
			<main className="w-screen h-screen bg-[var(--dark-bg-primary)] flex items-center justify-center">
				<p className="text-white">Article loading...</p>
			</main>
		);
	}

	const {
		body_markdown: body,
		url,
		cover_image: image,
		comments_count: comments,
		public_reactions_count: likes,
		description,
		page_views_count: views,
		reading_time_minutes: reading_time,
		title: heading,
		slug,
	} = article;

	return (
		<main className="w-screen min-h-screen flex justify-center px-4 py-10 bg-">
			<article className="prose prose-invert lg:prose-xl max-w-3xl w-full whitespace-pre-line">
				<img
					src={image}
					alt="article cover image"
					className="w-full h-[300px] object-fit object-center rounded-[10px] mb-[20px] md:h-[400px]"
				/>
				<h1 className="mb-[10px] font-bold text-[30px] md:text-[40px]">
					{heading}
				</h1>
				<p className="text-[16px] md:text-[20px]">
					Read time: {reading_time} mins
				</p>
				<div className="flex justify-between">
					<div className="flex justify-between h-[30px] mt-[10px] w-full mb-[30px]">
						<a
							href={url}
							className="flex gap-[10px] items-center px-[20px]"
						>
							<IoMdHeart className="text-red-600 text-[28px]" />
							<span className="text-black">{likes}</span>
						</a>
						<a
							href={url}
							className="flex gap-[10px] items-center px-[20px]"
						>
							<FaComment className="text-[#a1a1a1] text-[25px]" />
							<span className="text-black">{comments}</span>
						</a>
						<a
							href={url}
							className="flex gap-[10px] items-center px-[20px]"
						>
							<BiSolidBarChartAlt2 className="text-gray-700 text-[25px]" />
							<span className="text-black">{views}</span>
						</a>
					</div>
				</div>
				<ReactMarkdown
					remarkPlugins={[remarkGfm, remarkBreaks]}
					rehypePlugins={[rehypePrism]}
					components={{
						code({ className, children, inline, ...props }) {
							const match = /language-(\w+)/.exec(className || "");

							return match ? (
								<code
									className="bg-gray-200 text-gray-800 px-1.5 py-0.5 rounded text-sm inline-block"
									{...props}
								>
									{children}
								</code>
							) : (
								<pre className="rounded-xl w-full overflow-x-auto bg-gray-200 text-black p-4 my-4">
									<code
										className=" text-black px-1.5 py-0.5 rounded"
										{...props}
									>
										{children}
									</code>
								</pre>
							);
						},
					}}
				>
					{body}
				</ReactMarkdown>
			</article>
		</main>
	);
};

export default ArticlesDetails;
