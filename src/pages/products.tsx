import { CategoryComponent } from "../components/category";
import { CheckboxUI } from "../components/UIs/checkbox";
import { TextInput } from "../components/UIs/input";
import { DefaultLayout } from "../layouts/default";
import { FooterLayout } from "../layouts/footer";
import { HeaderLayout } from "../layouts/header";
import { ShowProductComponent } from "../components/showProduct";
import { PaginationUI } from "../components/UIs/pagination";
import { getData } from "../services/api/getData";
import type { CategoryContent, Content } from "../utils/types";
import { useState } from "react";

export const ProductsPage = () => {
  const { contents } = getData();
  if (!contents) return <>Error</>;

  const [data, setData] = useState<Content[]>(contents.getRandomizeData(8).data);

  const filter = (filter: string, id: string) => {
    console.log(filter);
    setData(contents.getRandomizeData(8).data);
    document.getElementById(id)?.click();
  };

  const categoryContent: CategoryContent[] = [
    {
      element: (
        <div className="ml-1 flex flex-row items-center justify-start gap-5">
          <CheckboxUI id="1" />
          Pemasaran
        </div>
      ),
      func: () => filter("pemasaran", "1"),
    },
    {
      element: (
        <div className="ml-1 flex flex-row items-center justify-start gap-5">
          <CheckboxUI id="2" />
          Digital & Teknologi
        </div>
      ),
      func: () => filter("digital dan teknologi", "2"),
    },
    {
      element: (
        <div className="ml-1 flex flex-row items-center justify-start gap-5">
          <CheckboxUI id="3" />
          Pengembangan Diri
        </div>
      ),
      func: () => filter("pengembangan diri", "3"),
    },
    {
      element: (
        <div className="ml-1 flex flex-row items-center justify-start gap-5">
          <CheckboxUI id="4" />
          Manajemen Bisnis
        </div>
      ),
      func: () => filter("manajemen bisnis", "4"),
    },
  ];

  const durasiContent: CategoryContent[] = [
    {
      element: (
        <div className="ml-1 flex flex-row items-center justify-start gap-5">
          <CheckboxUI id="5" variant="round" />
          Kurang dari 4 Jam
        </div>
      ),
      func: () => filter("< 4", "5"),
    },
    {
      element: (
        <div className="ml-1 flex flex-row items-center justify-start gap-5">
          <CheckboxUI id="6" variant="round" />4 - 8 Jam
        </div>
      ),
      func: () => filter("4 < x < 8", "6"),
    },
    {
      element: (
        <div className="ml-1 flex flex-row items-center justify-start gap-5">
          <CheckboxUI id="7" variant="round" />
          Lebih dari 8 Jam
        </div>
      ),
      func: () => filter("> 8", "7"),
    },
  ];

  return (
    <>
      <HeaderLayout />
      <div className="px-standard flex flex-col gap-5 py-14 md:flex-row">
        <DefaultLayout className="h-fit w-full rounded-md p-5 md:max-w-80">
          <div className="mb-3 flex w-full flex-row items-center justify-between">
            <h6 className="text-heading6 font-bold">Filter</h6>
            <h6 className="text-heading6 font-bold text-red-500">Reset</h6>
          </div>
          <DefaultLayout className="mb-5 w-full rounded-xl p-5">
            <div className="flex flex-col justify-between">
              <CategoryComponent
                title={
                  <div className="flex flex-row items-center gap-3">
                    <img className="h-[18px] w-[20px]" src="/assets/notebook.png" />
                    <h6 className="text-heading6 font-bold">Bidang Studi</h6>
                  </div>
                }
                titleClassName="text-[#3ECF4C]"
                content={categoryContent}
                contentClassName="text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none"
              />
            </div>
          </DefaultLayout>
          <DefaultLayout className="w-full rounded-xl p-5">
            <div className="flex flex-col justify-between">
              <CategoryComponent
                title={
                  <div className="flex flex-row items-center gap-3">
                    <img className="h-[18px] w-[20px]" src="/assets/shopping-bag.png" />
                    <h6 className="text-heading6 font-bold">Harga</h6>
                  </div>
                }
                titleClassName="text-[#3ECF4C]"
                content={categoryContent}
                contentClassName="text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none"
              />
            </div>
          </DefaultLayout>
          <DefaultLayout className="mt-5 w-full rounded-xl p-5">
            <div className="flex flex-col justify-between">
              <CategoryComponent
                title={
                  <div className="flex flex-row items-center gap-3">
                    <img className="h-[18px] w-[20px]" src="/assets/clock.png" />
                    <h6 className="text-heading6 font-bold">Durasi</h6>
                  </div>
                }
                titleClassName="text-[#3ECF4C]"
                content={durasiContent}
                contentClassName="text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none"
              />
            </div>
          </DefaultLayout>
        </DefaultLayout>
        <div className="flex w-full flex-col">
          <div className="flex flex-row justify-center gap-3 md:justify-end" aria-disabled>
            <div className="relative">
              <TextInput
                className="pointer-events-none max-w-36 cursor-default bg-white"
                placeholder="Urutkan"
                disabled
              />
              <img className="absolute right-2 top-[9px]" src="/assets/down.png" />
            </div>
            <div className="relative">
              <TextInput placeholder="Cari Kelas" />
              <img className="absolute right-3 top-[9px]" src="/assets/search.png" />
            </div>
          </div>
          <ShowProductComponent contents={data} />
          <PaginationUI />
        </div>
      </div>
      <FooterLayout />
    </>
  );
};
