import { IoMdHeart } from "react-icons/io";
import { FaComment } from "react-icons/fa6";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { IoBook } from "react-icons/io5";
import { Link } from "react-router-dom";

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
		slug,
	} = article;

	return (
		<Link
			to={`${slug}`}
			className="bg-[var(--dark-bg-minimal)] w-full min-h-[320px] rounded-[10px] p-[20px] block relative md:w-[375px]"
		>
			<span className="absolute right-[30px] top-[30px] w-[100px] h-[25px] bg-black bg-opacity-60 text-white flex items-center gap-[7px] justify-center ">
				<IoBook />
				{reading_time} mins
			</span>
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
		</Link>
	);
};

export default ArticleCard;
