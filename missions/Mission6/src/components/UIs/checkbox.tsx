import { useState } from "react";
import type { CheckboxUIProps } from "../../utils/types";

export const CheckboxUI = ({ variant = "square", id = "" }: CheckboxUIProps) => {
  const [checked, setChecked] = useState(false);

  const roundedClass = variant === "round" ? "rounded-full" : "rounded-sm";
  const backgroundClass = checked ? "bg-[#3ECF4C]" : "bg-[#E2FCD9CC]";
  const borderClass = checked ? "border-[#1C8C2D]" : "border-[#3ECF4C]";

  return (
    <div
      id={id}
      onClick={() => setChecked((prev) => !prev)}
      className={`h-4 w-4 cursor-pointer border ${roundedClass} ${borderClass} ${backgroundClass} transition-all duration-150`}
    ></div>
  );
};
