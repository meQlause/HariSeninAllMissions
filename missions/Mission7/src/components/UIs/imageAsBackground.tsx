import type { ImageProps } from "../../utils/types";

export const ImageAsBackgroudUI: React.FC<ImageProps> = ({ children, src, className = "" }) => {
  return (
    <>
      <div className={`${className} relative mx-auto h-fit w-full max-w-[1100px]`}>
        <img
          src={src}
          className="absolute z-10 h-full w-full overflow-hidden rounded-xl object-cover brightness-[.3]"
        />
        {children}
      </div>
    </>
  );
};
