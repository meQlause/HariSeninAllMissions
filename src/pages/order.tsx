import { TextInput } from "../components/UIs/input";
import { DefaultLayout } from "../layouts/default";
import { FooterLayout } from "../layouts/footer";
import { HeaderLayout } from "../layouts/header";
import { useEffect, useRef, useState } from "react";
import { DividerUI } from "../components/UIs/divider";
import { mousePointerTracking, touchTracking } from "../utils/funtions";
import { useGetTransactionHistory } from "../services/api/getTransactionHistory";
import { useAuth } from "../services/hooks/useAuth";
import { MyOrderListComponent } from "../components/myOrder";

export const OrderPage = () => {
  const { uid } = useAuth();
  const ulRef = useRef<HTMLUListElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Pesanan");
  const { getTxHistory, data } = useGetTransactionHistory();
  const selectCategory = (selected: string) => {
    setSelectedCategory(selected);
  };

  useEffect(() => {
    const pollData = async () => {
      if (uid) {
        await getTxHistory(uid);
      }
    };

    pollData();
  }, [uid]);

  return (
    <>
      <HeaderLayout />
      <div className="px-standard flex flex-col gap-5 py-14 lg:flex-row">
        <div className="flex w-full flex-col gap-4 md:max-w-64">
          <div className="flex flex-col gap-1">
            <h6 className="text-heading6 font-bold">Daftar Pesanan</h6>
            <p className="text-bodyMedium font-light">Informasi terperinci mengenai pembelian</p>
          </div>
          <DefaultLayout className="h-fit rounded-md p-5">
            <div className="flex w-full flex-col justify-between gap-1">
              <button className="flex flex-row items-center justify-start gap-3 rounded-lg p-3 text-left text-heading6 font-bold text-[#3A354161]">
                <img src="/assets/profile-icon.png" />
                Profile Saya
              </button>
              <button className="flex flex-row items-center justify-start gap-3 rounded-lg p-3 text-left text-heading6 font-bold text-[#3A354161]">
                <img src="/assets/book-profile.png" />
                Kelas Saya
              </button>
              <button className="flex flex-row items-center justify-start gap-3 rounded-lg border border-[#FFBD3A] bg-[#FFF7D7CC] p-3 text-left text-heading6 font-bold text-[#FFBD3A]">
                <img src="/assets/bag-profile.png" />
                Pesanan Saya
              </button>
            </div>
          </DefaultLayout>
        </div>
        <DefaultLayout className="w-full rounded-lg p-5">
          <div className="flex w-full flex-col">
            <div
              className="flex flex-col items-center justify-between gap-3 lg:flex-row"
              aria-disabled
            >
              <div className="flex w-full max-w-[425px] flex-row justify-between gap-2">
                <ul
                  className="scrollbar-hide mt-5 flex touch-pan-x flex-row gap-10 overflow-x-auto overflow-y-hidden"
                  style={{ WebkitOverflowScrolling: "touch" }}
                  ref={ulRef}
                  onMouseDown={(e) => {
                    if (ulRef.current) {
                      mousePointerTracking(e.nativeEvent, ulRef.current);
                    }
                  }}
                  onTouchStart={(e) => {
                    if (ulRef.current) {
                      touchTracking(e.nativeEvent, ulRef.current);
                    }
                  }}
                >
                  {["Semua Pesanan", "Menunggu", "Berhasil", "Gagal"].map((category) => (
                    <li
                      key={category}
                      className={`cursor-pointer whitespace-nowrap font-sans font-medium hover:text-red-600 ${selectedCategory ? category === selectedCategory && "text-red-600" : category === "Semua Kelas" && "text-red-600"} flex flex-col gap-3`}
                      onClick={() => selectCategory(category)}
                    >
                      {category}
                      <div
                        className={
                          selectedCategory
                            ? category === selectedCategory
                              ? "block"
                              : "hidden"
                            : category === "Semua Kelas"
                              ? "block"
                              : "hidden"
                        }
                      >
                        <DividerUI width="30px" color="#dc2626" thick="5px" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-row gap-3">
                <div className="relative">
                  <TextInput placeholder="Cari Kelas" />
                  <img className="absolute right-3 top-[9px]" src="/assets/search.png" />
                </div>
                <div className="relative">
                  <TextInput
                    className="pointer-events-none max-w-36 cursor-default bg-white"
                    placeholder="Urutkan"
                    disabled
                  />
                  <img className="absolute right-2 top-[9px]" src="/assets/down.png" />
                </div>
              </div>
            </div>
          </div>
          <MyOrderListComponent data={data} />
        </DefaultLayout>
      </div>
      <FooterLayout />
    </>
  );
};
