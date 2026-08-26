import { FaCode, FaEye } from "react-icons/fa";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TechStack } from "@/components/ui/tech-icon";

const FeaturedProjectCard = ({ data }) => {
  return (
    <div className="big-card relative bg-transparent border border-(--dark-text-alt) rounded-xl min-h-[250px] h-auto p-8 pb-8 sm:p-10 sm:pb-10 flex flex-col justify-between gap-6 transition-all 4xl:min-h-[280px] 4xl:p-15">
      {/* Glow Effect */}
      <GlowingEffect
        spread={50}
        glow={true}
        disabled={false}
        proximity={80}
        inactiveZone={0.1}
        borderWidth={2}
        movementDuration={0.3}
      />

      {/* Main Content (Scales naturally with content) */}
      <div className="relative z-10 space-y-3.5">
        <h2 className="text-[22px] text-white font-bold 4xl:text-[30px] leading-tight">
          {data.name}
        </h2>
        <div className="py-1">
          <TechStack
            stack={data.stack}
            size="w-5 h-5 4xl:w-6 4xl:h-6"
            gap="gap-2.5 sm:gap-3"
          />
        </div>
        <p className="text-(--dark-text-alt) text-[13px] 4xl:text-[15px] leading-relaxed max-w-full">
          {data.description}
        </p>
      </div>

      {/* Action Links */}
      <div className="relative z-10 text-white flex gap-6 pt-2">
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