import { useState } from "react";
import { useIsMobile } from "../utils/useIsMobile";
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

  return (
    <>
      <div className={`grid w-full ${width} gap-0 ${showCategory ? "gap-2" : "gap-0"}`}>
        <div
          className="flex cursor-pointer items-center justify-between md:cursor-default"
          onClick={() => setShowCategory(!showCategory)}
        >
          <div className={`text-heading6 font-bold ${titleClassName}`}>{title}</div>
          <img className={`block h-[15px] md:hidden`} src="/assets/right-arrow.png" alt="Logo" />
        </div>
        <ul
          className={`${showCategory ? "block gap-3" : "hidden gap-0"} ${isMobile && "flex"} mt-4 flex-col md:flex md:gap-3`}
        >
          {Object.entries(content).map((value, index) => (
            <li
              key={`${value[1]}-${index}`}
              className={`text-bodyMedium font-normal md:whitespace-nowrap ${contentClassName}`}
            >
              <a href={value[0]}>{value[1]}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
