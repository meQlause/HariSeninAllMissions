import { TextInput } from "../components/UIs/input";
import { DefaultLayout } from "../layouts/default";
import { FooterLayout } from "../layouts/footer";
import { HeaderLayout } from "../layouts/header";
import { ShowProductComponent } from "../components/showProduct";
import { PaginationUI } from "../components/UIs/pagination";
import { getData } from "../services/api/getData";
import type { Content } from "../utils/types";
import { useEffect, useState } from "react";
import { DividerUI } from "../components/UIs/divider";

export const OrderPage = () => {
  const { contents } = getData();
  const [data, setData] = useState<Content[]>([]);

  useEffect(() => {
    if (contents) {
      setData(contents.getAllData().data);
    }
  }, [contents]);

  if (!contents) return <>Error</>;

  return (
    <>
      <HeaderLayout />
      <div className="px-standard flex flex-col gap-5 py-14 md:flex-row">
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
            <div className="flex flex-row justify-between gap-3" aria-disabled>
              <div className="flex w-full max-w-[425px] flex-row justify-between gap-2">
                <div className="flex flex-col items-start justify-start gap-2">
                  <button className="text-left text-[#F64920]">Semua Pesanan</button>
                  <DividerUI width="30px" color="#dc2626" thick="5px" />
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <button className="text-left text-[#333333AD]">Menunggu</button>
                  <DividerUI isHide={true} width="30px" color="#dc2626" thick="5px" />
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <button className="text-left text-[#333333AD]">Berhasil</button>
                  <DividerUI isHide={true} width="30px" color="#dc2626" thick="5px" />
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <button className="text-left text-[#333333AD]">Gagal</button>
                  <DividerUI isHide={true} width="30px" color="#dc2626" thick="5px" />
                </div>
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
          <div className="my-4 flex flex-col rounded-lg border">
            <div className="flex flex-row items-center justify-between rounded-t-lg border-b bg-[#E2FCD933] px-5 py-3">
              <div className="flex flex-row gap-2">
                <span>
                  NO. Invoice: <span>HEL/VI/10062023</span>
                </span>
                <span>Waktu Pembayaran: 10 Juni 2023, 14.17</span>
              </div>
              <div className="rounded-md bg-[#E0FDDF] px-2 text-[#38D189]">Berhasil</div>
            </div>
            <div className="flex flex-row items-center justify-between gap-5 p-5">
              <div className="flex flex-row items-center gap-3">
                <img src="/assets/contents/content1.jpg" className="h-14 w-14 rounded-lg" />
                <h6 className="text-heading6 font-bold">
                  Belajar Microsoft Office dan Google Workspace untuk Pemula
                </h6>
              </div>
              <div className="flex flex-row gap-5">
                <DividerUI orientation="vertical" width="50px" color="#3A35411F" thick="1px" />
                <div className="flex flex-col items-start">
                  <span>Harga</span>
                  <span>Rp 300.000</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between rounded-b-lg border-t bg-[#E2FCD933] px-5 py-3">
              <span>Total Pembayaran</span>
              <span className="text-[#3ECF4C]">Rp. 300.000</span>
            </div>
          </div>
        </DefaultLayout>
      </div>
      <FooterLayout />
    </>
  );
};
