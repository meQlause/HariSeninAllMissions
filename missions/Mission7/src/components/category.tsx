import { useState } from "react";
import { useIsMobile } from "../services/hooks/useIsMobile";
import type { CategoryProps } from "../utils/types";

export const CategoryComponent: React.FC<CategoryProps> = ({
  forceShow = false,
  width = "",
  title,
  titleClassName = "",
  content,
  contentClassName = "",
  listClassName = "",
  showCategoryDefault = false,
}) => {
  const [showCategory, setShowCategory] = useState<boolean>(showCategoryDefault);
  const isMobile = useIsMobile();

  const handleCategoryToggle = () => {
    setShowCategory(!showCategory);
  };

  return (
    <>
      <div className={`grid w-full ${width} gap-3`}>
        <div
          className={`flex cursor-pointer items-center ${titleClassName} justify-between ${!forceShow && "md:cursor-default"}`}
          onClick={handleCategoryToggle}
        >
          <div className="text-heading6 font-bold">{title}</div>
          <img
            className={`${showCategory ? "rotate-0" : "rotate-90"} block h-[15px] transition-transform duration-200 ${!forceShow && "md:hidden"}`}
            src="/assets/right-arrow.png"
            alt="Logo"
          />
        </div>
        <ul
          className={`${listClassName} ${showCategory ? "flex gap-3" : "hidden gap-0"} ${isMobile && "flex"} flex-col ${!forceShow && "md:flex"} md:gap-3`}
        >
          {Object.entries(content).map((value, index) => (
            <li
              key={index}
              className={`text-bodyMedium font-normal md:whitespace-nowrap ${contentClassName}`}
            >
              <button className="w-full" onClick={value[1].func}>
                {value[1].element}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
