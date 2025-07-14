import { useState } from "react";
import { useIsMobile } from "../services/hooks/useIsMobile";
import type { CategoryProps } from "../utils/types";

export const CategoryComponent = ({
  width = "",
  title,
  titleClassName = "",
  content,
  contentClassName = "",
}: CategoryProps) => {
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const handleCategoryToggle = () => {
    setShowCategory(!showCategory);
  };

  return (
    <>
      <div className={`grid w-full ${width} gap-3`}>
        <div
          className="flex cursor-pointer items-center justify-between md:cursor-default"
          onClick={handleCategoryToggle}
        >
          <div className={`text-heading6 font-bold ${titleClassName}`}>{title}</div>
          <img
            className={`${showCategory ? "rotate-0" : "rotate-90"} block h-[15px] transition-transform duration-200 md:hidden`}
            src="/assets/right-arrow.png"
            alt="Logo"
          />
        </div>
        <ul
          className={`${showCategory ? "block gap-3" : "hidden gap-0"} ${isMobile && "flex"} mt-4 flex-col md:flex md:gap-3`}
        >
          {Object.entries(content).map((value, index) => (
            <li
              key={index}
              className={`text-bodyMedium font-normal md:whitespace-nowrap ${contentClassName}`}
            >
              <button onClick={value[1].func}>{value[1].element}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
