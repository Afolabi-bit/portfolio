import { FaCode, FaEye } from "react-icons/fa";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TechStack } from "@/components/ui/tech-icon";

const FeaturedProjectCard = ({ data }) => {
  return (
    <div className="big-card relative bg-transparent border border-[var(--dark-text-alt)] rounded-xl h-[250px] px-[40px] pt-[40px] pb-[50px] flex flex-col justify-between transition-all 4xl:h-[280px] 4xl:p-[60px]">
      <GlowingEffect
        spread={50}
        glow={true}
        disabled={false}
        proximity={80}
        inactiveZone={0.1}
        borderWidth={2}
        movementDuration={0.3}
      />
      <div className="relative z-10">
        <h2 className="text-[20px] text-white font-[700] 4xl:text-[30px] 4xl:mb-[10px]">
          {data.name}
        </h2>
        <div className="my-[15px]">
          <TechStack
            stack={data.stack}
            size="w-5 h-5 4xl:w-6 4xl:h-6"
            gap="gap-3"
          />
        </div>
        <p className="text-[var(--dark-text-alt)] text-[12px] 4xl:text-[14px]">
          {data.description}
        </p>
      </div>

      <div className="relative z-10 text-white flex gap-[30px]">
        {data.code && (
          <a
            href={data.code}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <FaCode className="lg:scale-[1.2] 4xl:scale-[1.5]" />{" "}
            <span className="text-[12px] 4xl:text-[16px]">Code</span>
          </a>
        )}
        {data.live && (
          <a
            href={data.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <FaEye className="lg:scale-[1.2] 4xl:scale-[1.5]" />{" "}
            <span className="text-[12px] 4xl:text-[16px]">Live</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default FeaturedProjectCard;