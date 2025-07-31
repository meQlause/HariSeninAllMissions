import type { DividerProps } from "../../utils/types";

export const DividerUI: React.FC<DividerProps> = ({
  width = "100%",
  color = "#CCCCC",
  thick = "1px",
}) => {
  return (
    <div
      className="divider mx-auto my-4 rounded-b-md"
      style={{ width, borderBottom: `${thick} solid ${color}` }}
    ></div>
  );
};
