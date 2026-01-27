import { FaCode, FaEye } from "react-icons/fa";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TechStack } from "@/components/ui/tech-icon";

export const Card = ({ data, screen }) => {
  return (
    <div
      className={
        screen != "desktop"
          ? `card bg-[var(--dark-bg-minimal)]  w-full h-[220px]  px-[20px] pt-[30px] pb-[50px] flex flex-col justify-between lg:h-[260px] lg:px-[30px]`
          : "card relative bg-transparent border border-[var(--dark-text-alt)] rounded-xl w-full px-[40px] pt-[40px] pb-[50px] flex flex-col justify-between h-[270px] transition-all"
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
      <div className="pointer-events-none">
        <h4 className="text-white text-[23px] font-[600] jakarta lg:text-[20px] lg:font-[700] 4xl:text-[26px]">
          {data.name}
        </h4>
        <div className="my-[8px]">
          <TechStack
            stack={data.stack}
            size="w-4 h-4 lg:w-5 lg:h-5 4xl:w-6 4xl:h-6"
            gap="gap-2 lg:gap-3"
          />
        </div>
        {data.description && (
          <p className="text-[var(--dark-text-alt)] text-[12px] lg:text-[12px] 4xl:text-[16px]">
            {data.description}
          </p>
        )}
      </div>

      <div className="text-white flex gap-[20px]">
        {data.code && (
          <a href={data.code} className="flex items-center gap-2">
            <FaCode className="lg:scale-[1.2] 4xl:scale-[1.3]" />{" "}
            <span className="text-[12px] lg:text-[13px] 4xl:text-[14px]">
              Code
            </span>
          </a>
        )}
        {data.live && (
          <a
            href={data.live}
            className="flex items-center gap-2 4xl:scale-[1.2]"
          >
            <FaEye className="lg:scale-[1.2]" />{" "}
            <span className="text-[12px] lg:text-[13px] 4xl:text-[14px]">
              Live
            </span>
          </a>
        )}
      </div>
    </div>
  );
};
