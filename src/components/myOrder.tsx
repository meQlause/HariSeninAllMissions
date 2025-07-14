import { getData } from "../services/api/getData";
import { useIsMobile } from "../services/hooks/useIsMobile";
import { DividerUI } from "./UIs/divider";
import React from "react";

type OrderListProp = {
  data: any[];
};

export const MyOrderListComponent: React.FC<OrderListProp> = ({ data }) => {
  const isMobile = useIsMobile();
  const { contents } = getData();

  const transfromToNumber = (price: string): string => {
    return parseInt(price.split(" ").at(-1)?.split("K")["0"].concat("000")!).toLocaleString(
      "id-ID"
    );
  };

  const add = (basevalue: string, value: number): string => {
    return (parseInt(transfromToNumber(basevalue).replace(/\./g, "")) + value).toLocaleString(
      "id-ID"
    );
  };
  if (!data) return <>Error</>;
  return (
    <>
      {data.map((d, index) => (
        <div key={index} className="my-4 flex flex-col rounded-lg border">
          <div className="flex flex-col items-start justify-start gap-2 rounded-t-lg border-b bg-[#E2FCD933] px-5 py-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-row items-center gap-2">
              <span className="hidden lg:block lg:text-bodyMedium">NO. Invoice:</span>
              <span className="text-bodySmall lg:text-bodyMedium">HEL/VI/10062023</span>
              <span className="hidden lg:block lg:text-bodyMedium">Waktu Pembayaran: </span>
              <span className="text-bodySmall lg:text-bodyMedium">10 Juni 2023, 14.17</span>
            </div>
            <div className="rounded-md bg-[#E0FDDF] px-2 text-bodySmall text-[#38D189]">
              Berhasil
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-2 p-5 lg:flex-row lg:items-center lg:gap-5">
            <div className="flex flex-row items-center gap-3">
              <img
                src={
                  contents
                    ? contents.getId(
                        Number(d.mapValue.fields.data.arrayValue.values[0].stringValue)
                      ).data[0].contentImage
                    : ""
                }
                className="h-14 w-14 rounded-lg"
              />
              <h6 className="text-bodyMedium font-bold lg:text-heading6">
                {contents &&
                  contents.getId(Number(d.mapValue.fields.data.arrayValue.values[0].stringValue))
                    .data[0].description}
              </h6>
            </div>

            <div className="flex flex-row gap-5">
              <DividerUI
                isHide={isMobile}
                orientation="vertical"
                width="50px"
                color="#3A35411F"
                thick="1px"
              />
              <div className="flex flex-col items-start">
                <span>Harga</span>
                <span className="whitespace-nowrap font-bold">
                  Rp{" "}
                  {contents &&
                    transfromToNumber(
                      contents.getId(
                        Number(d.mapValue.fields.data.arrayValue.values[0].stringValue)
                      ).data[0].price
                    )}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between rounded-b-lg border-t bg-[#E2FCD933] px-5 py-3">
            <span>Total Pembayaran</span>
            <span className="text-[#3ECF4C]">
              Rp{" "}
              {contents &&
                add(
                  contents.getId(Number(d.mapValue.fields.data.arrayValue.values[0].stringValue))
                    .data[0].price,
                  7000
                )}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
