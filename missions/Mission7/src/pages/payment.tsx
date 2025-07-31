import { useNavigate, useParams } from "react-router-dom";
import { CardDetailsComponent } from "../components/cardDetails";
import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";
import { getData } from "../services/api/getData";
import { DividerUI } from "../components/UIs/divider";
import { ButtonUI } from "../components/UIs/button";
import { FooterLayout } from "../layouts/footer";
import { usePaymentStepStore } from "../stores/usePaymentStepStore";
import { useAuth } from "../services/hooks/useAuth";
import { useAddOwnedProduct } from "../services/api/ownedProducts";

export const paymentPage = () => {
  const { contents } = getData();
  const { payment, id } = useParams<{ payment: string; id: string }>();
  const { uid } = useAuth();
  const { putPendingTx } = useAddOwnedProduct();
  const navigate = useNavigate();
  const { nextStep } = usePaymentStepStore();

  const paymentImage: Record<string, any> = {
    bca: { image: "/assets/paymentMethods/BCA.png", name: "BCA" },
    bni: { image: "/assets/paymentMethods/BNI.png", name: "BNI" },
    bri: { image: "/assets/paymentMethods/BRI.png", name: "BRI" },
    mandiri: { image: "/assets/paymentMethods/mandiri.png", name: "Mandiri" },
    dana: { image: "/assets/paymentMethods/dana.png", name: "Dana" },
    ovo: { image: "/assets/paymentMethods/ovo.png", name: "OVO" },
    link: { image: "/assets/paymentMethods/link.png", name: "LinkAja" },
    shoope: { image: "/assets/paymentMethods/shoope.png", name: "ShoopePay" },
    cc: { image: "/assets/paymentMethods/CC.png", name: "Kartu Kredit/Debit" },
  };

  const idNumber = Number(id);
  if (isNaN(idNumber)) {
    navigate("/");
  }

  if (!contents) return <>Error</>;
  const data = contents.getId(idNumber).data[0];

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

  const addOwnedProducts = () => {
    if (uid) {
      putPendingTx(uid, String(data.id));
      nextStep();
      navigate(`/payment-completed`);
    }
  };

  return (
    <>
      <HeaderLayout />
      <img
        className="mx-auto mt-10 block w-full max-w-96 px-5 lg:hidden"
        src="/assets/payment-stepper-mobile.png"
      />
      <div className="px-standard flex flex-col-reverse justify-between gap-5 py-14 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-5">
          <DefaultLayout className="flex h-fit w-full flex-col gap-5 rounded-lg p-5">
            <h2 className="text-heading6 font-bold">Metode Pembayaran</h2>
            <DefaultLayout className="flex flex-col items-center justify-center gap-4 rounded-md p-5">
              <img className="w-11" src={payment && paymentImage[payment].image} />
              <p className="text-heading6 font-thin">
                Bayar Melalui Virtual Account {payment && paymentImage[payment].name}
              </p>
              <div className="flex flex-row items-center gap-2">
                <p className="text-heading6 font-thin">11739 081234567890</p>
                <button className="bg-transparent text-[#F64920]">Salin</button>
              </div>
            </DefaultLayout>
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
            <div className="flex flex-col gap-5 lg:flex-row">
              <ButtonUI variant="secondary"> Ganti Metode Pembayaran</ButtonUI>
              <ButtonUI onClick={addOwnedProducts}> Bayar Sekarang </ButtonUI>
            </div>
          </DefaultLayout>
        </div>
        <CardDetailsComponent data={data} />
      </div>
      <FooterLayout />
    </>
  );
};
