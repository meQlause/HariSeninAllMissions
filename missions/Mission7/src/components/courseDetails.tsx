import { useState } from "react";
import type { CourseDetail } from "../utils/types";

export const CourseDetailsComponent: React.FC<CourseDetail> = ({
  header,
  subHeader,
  isShow = false,
}) => {
  const [isShowSubheader, setShowSubheader] = useState<boolean>(isShow);
  return (
    <div className="mb-4 flex flex-col gap-3">
      <div
        className="flex cursor-pointer flex-row items-center justify-between"
        onClick={() => setShowSubheader(!isShowSubheader)}
      >
        <h3 className="text-bodyLarge font-bold text-[#3ECF4C]">{header}</h3>
        <img
          className={`h-[15px] w-[12px] transition-transform duration-200 ${
            isShowSubheader ? "rotate-0" : "rotate-90"
          }`}
          src="/assets/right-arrow.png"
        />
      </div>
      {Object.entries(subHeader).map((value, index) => (
        <div
          key={index}
          className={`${isShowSubheader ? "flex" : "hidden"} justify-between rounded-md border p-3`}
        >
          {value[0]}
          <div className="hidden gap-5 lg:flex">
            <div className="flex flex-row gap-2">
              <img src="/assets/play.png" />
              <span>{value[1].kind}</span>
            </div>
            <div className="flex flex-row gap-2">
              <img src="/assets/clock-black.png" />
              <span>{value[1].duration}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
