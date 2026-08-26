import React from "react";
import { getTechIcon } from "@/utils/techIcons";

export const TechIcon = ({
  techName,
  size = "w-5 h-5",
  showTooltip = true,
}) => {
  const { icon: Icon, color } = getTechIcon(techName);

  return (
    <div className="relative group inline-flex items-center justify-center">
      <div className="flex items-center justify-center p-1 rounded-md transition-colors hover:bg-white/10 cursor-pointer">
        <Icon
          className={`${size} transition-all duration-200 group-hover:scale-110`}
          style={{ color }}
        />
      </div>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#141518] border border-white/20 rounded-full text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none z-[100] shadow-2xl backdrop-blur-md">
          {techName}
        </div>
      )}
    </div>
  );
};

export const TechStack = ({ stack, size = "w-5 h-5", gap = "gap-2 sm:gap-2.5" }) => {
  if (!stack || !Array.isArray(stack)) return null;

  return (
    <div className={`flex items-center flex-wrap ${gap} relative z-20`}>
      {stack.map((tech, index) => (
        <TechIcon key={index} techName={tech} size={size} />
      ))}
    </div>
  );
};