import type { DefaultLayoutProps } from "../utils/interfaces";

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, className = "" }) => {
  return <div className={`bg-white shadow ${className}`}>{children}</div>;
};
