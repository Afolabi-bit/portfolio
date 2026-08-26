import { FaCode, FaEye } from "react-icons/fa";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TechStack } from "@/components/ui/tech-icon";

export const Card = ({ data, screen }) => {
  return (
    <div
      className={
        screen !== "desktop"
          ? `card relative bg-(--dark-bg-minimal) border border-white/10 shadow-lg rounded-xl w-full min-h-[260px] h-auto p-5 pb-6 sm:p-6 sm:pb-7 flex flex-col justify-between gap-4 transition-all`
          : `card relative bg-transparent border border-(--dark-text-alt) rounded-xl w-full p-8 pb-10 flex flex-col justify-between min-h-[280px] h-auto gap-6 transition-all`
      }
    >
      {screen === "desktop" && (
        <GlowingEffect
          spread={50}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.1}
          borderWidth={2}
          movementDuration={0.3}
        />
      )}
      <div className="relative z-10 space-y-3">
        <h4 className="text-white text-[22px] font-semibold jakarta lg:text-[20px] lg:font-bold 4xl:text-[26px] leading-tight">
          {data.name}
        </h4>
        <div className="py-0.5">
          <TechStack
            stack={data.stack}
            size="w-4.5 h-4.5 lg:w-5 lg:h-5 4xl:w-6 4xl:h-6"
            gap="gap-2 sm:gap-2.5"
          />
        </div>
        {data.description && (
          <p className="text-(--dark-text-alt) text-[12px] lg:text-[13px] 4xl:text-[16px] leading-relaxed">
            {data.description}
          </p>
        )}
      </div>

      <div className="relative z-10 text-white flex gap-5 pt-2">
        {data.code && (
          <a
            href={data.code}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <FaCode className="lg:scale-[1.2] 4xl:scale-[1.3]" />
            <span className="text-[12px] lg:text-[13px] 4xl:text-[14px]">
              Code
            </span>
          </a>
        )}
        {data.live && (
          <a
            href={data.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 4xl:scale-[1.2] hover:text-white/80 transition-colors"
          >
            <FaEye className="lg:scale-[1.2]" />
            <span className="text-[12px] lg:text-[13px] 4xl:text-[14px]">
              Live
            </span>
          </a>
        )}
      </div>
    </div>
  );
};