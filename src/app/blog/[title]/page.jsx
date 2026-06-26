"use client";

import { useParams } from "next/navigation";
import { useArticles } from "@/context/articlesContext";
import ReactMarkdown from "react-markdown";
import { memo, useEffect } from "react";
import Image from "next/image";
import PageTransition from "@/components/ui/PageTransition";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import "prismjs/themes/prism-tomorrow.css";
import remarkBreaks from "remark-breaks";

import { IoMdHeart } from "react-icons/io";
import { FaComment } from "react-icons/fa6";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

// Memoize markdown component to prevent re-parsing on every render
const MemoizedMarkdown = memo(({ body }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm, remarkBreaks]}
    rehypePlugins={[rehypePrism]}
    components={{
      code({ className, children, inline, ...props }) {
        const match = /language-(\w+)/.exec(className || "");

        return match ? (
          <pre className="rounded-xl w-full overflow-x-auto bg-[var(--dark-bg-minimal)] text-white border border-white/5 p-4 my-4">
            <code className={className} {...props}>
              {children}
            </code>
          </pre>
        ) : (
          <code
            className="bg-[var(--dark-bg-minimal)] text-white px-1.5 py-0.5 rounded text-sm inline-block"
            {...props}
          >
            {children}
          </code>
        );
      },
    }}
  >
    {body}
  </ReactMarkdown>
));

MemoizedMarkdown.displayName = "MemoizedMarkdown";

export default function ArticlesDetails() {
  const { articles, refresh } = useArticles();
  const { title } = useParams();

  useEffect(() => {
    if (articles.length === 0) {
      refresh();
    }
  }, [title, articles.length, refresh]);

  const article = Array.isArray(articles)
    ? articles.find((a) => a.slug === title)
    : null;

  if (!article) {
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
  } = article;

  return (
    <PageTransition>
      <main className="w-screen min-h-screen flex justify-center px-4 py-10 bg-[var(--dark-bg-primary)]">
      <article className="prose prose-invert lg:prose-xl max-w-3xl w-full whitespace-pre-line">
        <div className="relative w-full h-[300px] rounded-[10px] mb-[20px] md:h-[400px] overflow-hidden">
          <Image
            src={image}
            alt="article cover image"
            className="object-cover object-center"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        <h1 className="mb-[10px] font-bold text-[30px] md:text-[40px] text-white">
          {heading}
        </h1>
        <p className="text-[var(--dark-text)] text-[16px] md:text-[20px]">
          Read time: {reading_time} mins
        </p>
        <div className="flex justify-between">
          <div className="flex justify-between h-[30px] mt-[10px] w-full mb-[30px]">
            <a href={url} className="flex gap-[10px] items-center px-[20px]">
              <IoMdHeart className="text-red-600 text-[28px]" />
              <span className="text-[var(--dark-text)]">{likes}</span>
            </a>
            <a href={url} className="flex gap-[10px] items-center px-[20px]">
              <FaComment className="text-[#a1a1a1] text-[25px]" />
              <span className="text-[var(--dark-text)]">{comments}</span>
            </a>
            <a href={url} className="flex gap-[10px] items-center px-[20px]">
              <BiSolidBarChartAlt2 className="text-gray-700 text-[25px]" />
              <span className="text-[var(--dark-text)]">{views}</span>
            </a>
          </div>
        </div>
        <MemoizedMarkdown body={body} />
      </article>
    </main>
    </PageTransition>
  );
}
