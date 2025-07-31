import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";
import { ButtonUI } from "../components/UIs/button";
import { usePaymentStepStore } from "../stores/usePaymentStepStore";

export const paymentCompletePage = () => {
  const { nextStep } = usePaymentStepStore();
  nextStep();
  return (
    <>
      <HeaderLayout />
      <img
        className="mx-auto mt-10 block w-full max-w-96 px-5 lg:hidden"
        src="/assets/payment-done-stepper-mobile.png"
      />
      <div className="px-standard mx-auto flex flex-col-reverse justify-between gap-5 py-14 lg:flex-row lg:gap-16">
        <DefaultLayout className="flex h-fit w-full flex-col items-center justify-center gap-5 rounded-lg p-5">
          <img className="max-w-96" src="/assets/completed-payment.png" />
          <div className="flex flex-col items-center justify-between gap-2">
            <h2 className="text-heading6 font-bold">Pembayaran berhasil</h2>
            <p className="max-w-96 text-center text-bodyMedium font-normal">
              Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala.
            </p>
          </div>
          <ButtonUI className="max-w-60">Lihat Detail Pesanan</ButtonUI>
        </DefaultLayout>
      </div>
    </>
  );
};
