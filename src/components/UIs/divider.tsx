import type { DividerProps } from "../../utils/types";

export const DividerUI: React.FC<DividerProps> = ({
  isHide = false,
  orientation = "horizontal",
  width = "100%",
  color = "#CCCCC",
  thick = "1px",
}) => {
  const isVertical = orientation === "vertical";
  return (
    <div
      className={`divider mx-auto my-4 rounded-md ${
        isVertical ? "divider-vertical" : "divider-horizontal"
      } ${isHide && "hidden"}`}
      style={
        isVertical
          ? {
              height: width,
              borderRight: `${thick} solid ${color}`,
            }
          : {
              width,
              borderBottom: `${thick} solid ${color}`,
            }
      }
    ></div>
  );
};
