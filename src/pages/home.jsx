import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Static from "../components/static";
import { DesktopProjects } from "./projects";
import AnimatedCursor from "react-animated-cursor";

const Home = () => {
	return (
		<>
			<main
				id="mobile-container"
				className="w-screen bg-[color:var(--dark-bg-primary)] flex place-items-center justify-center relative xl:hidden"
			>
				<Navbar />
				<div className="container mx-auto px-4">
					<Hero />
				</div>
				<Footer />
			</main>

			<main
				id="desktop-container"
				className="hidden overflow-hidden bg-[var(--dark-bg-primary)] h-screen w-full  justify-center xl:flex"
			>
				<AnimatedCursor
					innerSize={8}
					outerSize={35}
					innerScale={1}
					outerScale={2}
					outerAlpha={0}
					hasBlendMode={true}
					innerStyle={{
						backgroundColor: "var(--cursor-color)",
					}}
					outerStyle={{
						border: "3px solid var(--cursor-color)",
					}}
				/>
				<div className="width-container  h-screen w-full">
					<div className="relative w-full mx-auto h-full">
						<Static />
						<div
							style={{
								width: "calc(50% + 20px)",
							}}
							className="pl-[25px] h-full absolute right-0 top-0 overflow-y-scroll overflow-x-visible scrollbar"
						>
							<DesktopProjects />
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
