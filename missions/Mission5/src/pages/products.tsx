import { CategoryComponent } from "../components/category";
import { CheckboxUI } from "../components/UIs/checkbox";
import { TextInput } from "../components/UIs/input";
import { DefaultLayout } from "../layouts/default";
import { FooterLayout } from "../layouts/footer";
import { HeaderLayout } from "../layouts/header";
import { ShowProductComponent } from "../components/showProduct";
import { PaginationUI } from "../components/UIs/pagination";

export const ProductsPage = () => {
  const categoryContent: Record<string, React.ReactNode> = {
    "1": (
      <div className="ml-1 flex flex-row items-center justify-start gap-5">
        <CheckboxUI />
        Pemasaran
      </div>
    ),
    "2": (
      <div className="ml-1 flex flex-row items-center justify-start gap-5">
        <CheckboxUI />
        Digital & Teknologi
      </div>
    ),
    "3": (
      <div className="ml-1 flex flex-row items-center justify-start gap-5">
        <CheckboxUI />
        Pengembangan Diri
      </div>
    ),
    "4": (
      <div className="ml-1 flex flex-row items-center justify-start gap-5">
        <CheckboxUI />
        Manajemen Bisnis
      </div>
    ),
  };

  const contents = [
    {
      id: 1,
      contentImage: "assets/contents/content1.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar1.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 2,
      contentImage: "assets/contents/content2.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar2.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 3,
      contentImage: "assets/contents/content3.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar3.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 4,
      contentImage: "assets/contents/content4.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar4.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 5,
      contentImage: "assets/contents/content5.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar5.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 6,
      contentImage: "assets/contents/content6.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar6.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
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
                content={categoryContent}
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
          <ShowProductComponent contents={contents} />
          <PaginationUI />
        </div>
      </div>
      <FooterLayout />
    </>
  );
};
