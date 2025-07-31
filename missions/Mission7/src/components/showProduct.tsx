import { DefaultLayout } from "../layouts/default";
import type { showProductProps } from "../utils/interfaces";
import { useIsMobile } from "../services/hooks/useIsMobile";
import { StarRatingUi } from "./UIs/stars";
import { useNavigate } from "react-router-dom";

export const ShowProductComponent: React.FC<showProductProps> = ({ contents }) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const redirect = (id: number) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="mt-5 box-border grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 py-[20px_10px]">
      {!isMobile
        ? contents.map((item) => (
            <DefaultLayout key={item.id} className="rounded-md">
              <div
                className="flex cursor-pointer flex-col gap-1 p-4"
                onClick={() => {
                  redirect(item.id);
                }}
              >
                <img
                  className="mb-5 h-[200px] w-auto rounded-md object-cover"
                  src={item.contentImage}
                  alt={item.title}
                />
                <h3 className="text-heading5 font-bold">{item.title}</h3>
                <p className="text-bodyMedium">{item.description}</p>
                <div className="mt-5 flex items-center gap-5">
                  <img className="h-10 w-10 rounded-sm" src={item.details.tutordetails[0].avatar} />
                  <div className="flex flex-col">
                    <h4 className="text-heading6 font-bold">{item.details.tutordetails[0].name}</h4>
                    <p className="text-bodyMedium font-medium">
                      {item.details.tutordetails[0].position.split(" at ").slice(0, -1).join(" ")}{" "}
                      <strong>{item.details.tutordetails[0].position.split(" at ").at(-1)}.</strong>
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-2">
                    <StarRatingUi rating={item.rating} size={20} />
                    <p className="text-bodyMedium font-medium">
                      {item.rating} ({item.reviewCount})
                    </p>
                  </div>
                  <p className="text-heading4 font-bold text-[#3ECF4C]">{item.price}</p>
                </div>
              </div>
            </DefaultLayout>
          ))
        : contents.map((item) => (
            <DefaultLayout key={item.id} className="rounded-md p-4">
              <div
                className="flex cursor-pointer flex-row gap-3"
                onClick={() => {
                  navigate(`/product-details/${item.id}`);
                }}
              >
                <img
                  className="h-[86px] w-[85px] rounded-md object-cover"
                  src={item.contentImage}
                  alt={item.title}
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-heading6 font-bold">{item.title}</h3>
                  <div className="flex items-center gap-3">
                    <img className="h-8 w-8 rounded-sm" src={item.details.tutordetails[0].avatar} />
                    <div className="flex flex-col">
                      <h4 className="text-bodyMedium font-bold">
                        {item.details.tutordetails[0].name}
                      </h4>
                      <p className="text-bodySmall font-medium">
                        {item.details.tutordetails[0].position.split(" ").slice(0, -2).join(" ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <StarRatingUi rating={item.rating} size={20} />
                  <p className="text-bodyMedium font-medium">
                    {item.rating} ({item.reviewCount})
                  </p>
                </div>
                <p className="text-heading4 font-bold text-[#3ECF4C]">{item.price}</p>
              </div>
            </DefaultLayout>
          ))}
    </div>
  );
};
