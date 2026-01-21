import { getTechIcon } from "@/utils/techIcons";

export const TechIcon = ({
  techName,
  size = "w-5 h-5",
  showTooltip = true,
}) => {
  const { icon: Icon, color } = getTechIcon(techName);

  return (
    <div className="relative group inline-block">
      <div className="flex items-center justify-center">
        <Icon
          className={`${size} transition-all duration-200 group-hover:scale-110`}
          style={{ color }}
        />
      </div>

      {showTooltip && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1.5 bg-[var(--dark-bg-minimal)] border border-[var(--dark-text-alt)] rounded-md text-white text-xs whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-50">
          {techName}
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-[-1px] border-4 border-transparent border-r-[var(--dark-text-alt)]" />
        </div>
      )}
    </div>
  );
};

export const TechStack = ({ stack, size = "w-5 h-5", gap = "gap-3" }) => {
  return (
    <div className={`flex items-center flex-wrap ${gap}`}>
      {stack.map((tech, index) => (
        <TechIcon key={index} techName={tech} size={size} />
      ))}
    </div>
  );
};
