import { IoMdHeart } from "react-icons/io";
import { FaComment } from "react-icons/fa6";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

const ArticleCard = ({ article }) => {
	const {
		body_markdown: body,
		url,
		cover_image: image,
		comments_count: comments,
		public_reactions_count: likes,
		description,
		page_views_count: views,
		reading_time_minutes: reading_time,
		title,
	} = article;

	return (
		<div className="bg-[var(--dark-bg-minimal)] w-full min-h-[300px] rounded-[10px] p-[20px]">
			<img
				className="rounded-[10px] object-cover object-center w-full h-[150px]"
				src={image}
				alt="article cover image"
				loading="lazy"
			/>

			<div className="pt-[10px]">
				<h1 className="text-white text-[23px] font-[600] jakarta  mb-[10px] lg:text-[20px] lg:font-[700] 4xl:text-[26px]">
					{title}
				</h1>
				<p className="text-[var(--dark-text-alt)] text-[12px] lg:text-[12px] 4xl:text-[16px]">
					{description}
				</p>
			</div>

			<div className="flex justify-between h-[30px] mt-[20px] ">
				<button className="flex gap-[10px] items-center px-[20px]">
					<IoMdHeart className="text-red-600 text-[25px]" />
					<span className="text-white">{likes}</span>
				</button>
				<button className="flex gap-[10px] items-center px-[20px]">
					<FaComment className="text-gray-300" />
					<span className="text-white">{comments}</span>
				</button>
				<button className="flex gap-[10px] items-center px-[20px]">
					<BiSolidBarChartAlt2 className="text-gray-300" />
					<span className="text-white">{views}</span>
				</button>
			</div>
		</div>
	);
};

export default ArticleCard;
