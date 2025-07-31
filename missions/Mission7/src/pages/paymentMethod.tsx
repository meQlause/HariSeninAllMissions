import { useNavigate, useParams } from "react-router-dom";
import { CardDetailsComponent } from "../components/cardDetails";
import { CategoryComponent } from "../components/category";
import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";
import { getData } from "../services/api/getData";
import type { CategoryContent } from "../utils/types";
import { DividerUI } from "../components/UIs/divider";
import { ButtonUI } from "../components/UIs/button";
import { useEffect, useState } from "react";
import { FooterLayout } from "../layouts/footer";
import { usePaymentStepStore } from "../stores/usePaymentStepStore";

export const paymentMethodPage = () => {
  const { contents } = getData();
  const { id } = useParams<{ id: string }>();
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const navigate = useNavigate();
  const { nextStep, setActive, isActive } = usePaymentStepStore();

  useEffect(() => {
    if (!isActive) {
      setActive(!isActive);
    }
  }, []);

  const next = () => {
    nextStep();
    navigate(`/payment/${selectedPayment}/${id}`);
  };

  const idNumber = Number(id);
  if (isNaN(idNumber)) {
    navigate("/");
  }

  if (!contents) return <>Error</>;
  const data = contents.getId(idNumber).data[0];

  const filter = (filter: string, id: string) => {
    console.log(filter);
    setSelectedPayment(id);
  };

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

  const TransferBankContent: CategoryContent[] = [
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <img src="/assets/paymentMethods/BCA.png" /> Bank BCA
          </div>
          <img className={selectedPayment !== "bca" ? "hidden" : ""} src="/assets/selected.png" />
        </div>
      ),
      func: () => filter("Bank BCA", "bca"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <img src="/assets/paymentMethods/BNI.png" /> Bank BNI
          </div>
          <img className={selectedPayment !== "bni" ? "hidden" : ""} src="/assets/selected.png" />
        </div>
      ),
      func: () => filter("Bank BNI", "bni"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <img src="/assets/paymentMethods/BRI.png" /> Bank BRI
          </div>
          <img className={selectedPayment !== "bri" ? "hidden" : ""} src="/assets/selected.png" />
        </div>
      ),
      func: () => filter("Bank BRI", "bri"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <img className="h-2" src="/assets/paymentMethods/mandiri.png" /> Bank Mandiri
          </div>
          <img
            className={selectedPayment !== "mandiri" ? "hidden" : ""}
            src="/assets/selected.png"
          />
        </div>
      ),
      func: () => filter("Bank Mandiri", "mandiri"),
    },
  ];

  const eWalletContent: CategoryContent[] = [
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <img src="/assets/paymentMethods/dana.png" /> Dana
          </div>
          <img className={selectedPayment !== "dana" ? "hidden" : ""} src="/assets/selected.png" />
        </div>
      ),
      func: () => filter("Dana", "dana"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <img src="/assets/paymentMethods/ovo.png" /> OVO
          </div>
          <img className={selectedPayment !== "ovo" ? "hidden" : ""} src="/assets/selected.png" />
        </div>
      ),
      func: () => filter("OVO", "ovo"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <img src="/assets/paymentMethods/link.png" /> LinkAja
          </div>
          <img className={selectedPayment !== "link" ? "hidden" : ""} src="/assets/selected.png" />
        </div>
      ),
      func: () => filter("LinkAja", "link"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <img src="/assets/paymentMethods/shoope.png" /> ShoopePay
          </div>
          <img
            className={selectedPayment !== "shoope" ? "hidden" : ""}
            src="/assets/selected.png"
          />
        </div>
      ),
      func: () => filter("ShoopePay", "shoope"),
    },
  ];

  const kartuKreditDebitContent: CategoryContent[] = [
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center justify-center">
            <img src="/assets/paymentMethods/CC.png" />
          </div>
          <img className={selectedPayment !== "cc" ? "hidden" : ""} src="/assets/selected.png" />
        </div>
      ),
      func: () => filter("cc", "19"),
    },
  ];
  return (
    <>
      <HeaderLayout />
      <img
        className="mx-auto mt-10 block w-full max-w-96 px-5 lg:hidden"
        src="/assets/payment-method-stepper-mobile.png"
      />
      <div className="px-standard flex flex-col-reverse justify-between gap-5 py-14 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-5">
          <DefaultLayout className="flex h-fit w-full flex-col gap-5 rounded-lg p-5">
            <h2 className="text-heading6 font-bold">Metode Pembayaran</h2>
            <div className="flex flex-col justify-between">
              <CategoryComponent
                forceShow={true}
                showCategoryDefault={true}
                title={
                  <div className="flex flex-row items-center gap-3">
                    <h6 className="text-heading6 font-bold">Transfer Bank</h6>
                  </div>
                }
                titleClassName="border px-4 py-2 rounded-md"
                content={TransferBankContent}
                contentClassName="border px-4 py-2 rounded-md text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none flex items-center"
              />
            </div>
            <div className="flex flex-col justify-between">
              <CategoryComponent
                forceShow={true}
                title={
                  <div className="flex flex-row items-center gap-3">
                    <h6 className="text-heading6 font-bold">E-Wallet</h6>
                  </div>
                }
                titleClassName="border px-4 py-2 rounded-md"
                content={eWalletContent}
                contentClassName="flex items-center border px-4 py-2 rounded-md text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none"
              />
            </div>
            <div className="flex flex-col justify-between">
              <CategoryComponent
                forceShow={true}
                title={
                  <div className="flex flex-row items-center gap-3">
                    <h6 className="text-heading6 font-bold">Kartu Kredit/Debit</h6>
                  </div>
                }
                titleClassName="border px-4 py-2 rounded-md"
                content={kartuKreditDebitContent}
                contentClassName="flex items-center border px-4 py-2 rounded-md text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none"
              />
            </div>
          </DefaultLayout>
          <DefaultLayout className="flex h-fit w-full flex-col gap-5 rounded-lg p-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-heading6 font-bold">Ringkasan Pesanan</h2>
              <div className="flex flex-row justify-between gap-2">
                <p className="text-bodyMedium font-thin lg:pr-[10vh]">{data.description}</p>
                <p className="whitespace-nowrap text-right text-bodyLarge font-thin">
                  Rp. {transfromToNumber(data.price)}
                </p>
              </div>
              <div className="flex flex-row justify-between gap-2">
                <p className="text-bodyMedium font-thin">Biaya Admin</p>
                <p className="whitespace-nowrap text-bodyLarge font-thin">Rp 7.000</p>
              </div>
              <DividerUI />
              <div className="flex flex-row justify-between gap-2">
                <p className="text-bodyMedium font-bold">Total Pembayaran</p>
                <p className="whitespace-nowrap text-bodyLarge font-bold text-[#3ecf4c]">
                  Rp {add(data.price, 7000)}
                </p>
              </div>
            </div>
            <ButtonUI onClick={next} disabled={selectedPayment === ""}>
              Beli Sekarang
            </ButtonUI>
          </DefaultLayout>
        </div>
        <CardDetailsComponent data={data} />
      </div>
      <FooterLayout />
    </>
  );
};
