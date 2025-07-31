import { useNavigate } from "react-router-dom";
import { DefaultLayout } from "../layouts/default";
import { usePaymentStepStore } from "../stores/usePaymentStepStore";
import type { CardDetailsProp } from "../utils/types";
import { ButtonUI } from "./UIs/button";
import { useAuth } from "../services/hooks/useAuth";
import { useAddPendingTx } from "../services/api/addPendingData";

export const CardDetailsComponent: React.FC<CardDetailsProp> = ({ data }) => {
  const { isActive } = usePaymentStepStore();
  const { addPendingTx } = useAddPendingTx();
  const { uid } = useAuth();
  const navigate = useNavigate();

  const getDiscountPrice = (price: string, discount: number): string => {
    const priceInteger = Number(price.split(" ").at(-1)?.slice(0, -1)) * (discount / 100);
    return `Rp ${priceInteger}K`;
  };

  const addTx = async () => {
    if (uid) {
      await addPendingTx(uid, String(data.id));
      navigate(`/select-payment-method/${data.id}`);
    }
  };
  return (
    <DefaultLayout className="flex h-fit flex-col gap-2 rounded-lg p-5 lg:w-[351px] lg:min-w-[350px]">
      <h2 className="mb-3 text-heading6 font-bold">{data.title}</h2>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-start gap-2">
          <p className="text-bodyMedium font-bold text-[#3ECF4C]">{data.price}</p>
          <p className="text-bodyMediumfont-bold text-[#7b7c7b] line-through">
            {getDiscountPrice(data.price, 50)}
          </p>
        </div>
        <div className="max-w-24 rounded-md bg-[#ffbd3a] p-1 text-bodySmall font-thin text-white">
          Diskon 50%
        </div>
      </div>
      <p className="text-bodyMedium font-thin text-[#0980E2]">
        Penawaran spesial tersisa 2 hari lagi!
      </p>
      {!isActive && (
        <ButtonUI onClick={addTx} className="font-bold">
          Beli Sekarang
        </ButtonUI>
      )}
      <div className="mt-2 flex w-full flex-col">
        <h3 className="mb-1 text-bodyMedium font-bold"> Kelas ini sudah termasuk</h3>
        <div className="grid grid-cols-2">
          <div className="py-2 text-bodySmall font-thin">
            <div className="flex flex-row gap-2">
              <img src="/assets/book-check.png" />
              Ujian Akhir
            </div>
          </div>
          <div className="py-2 text-bodySmall font-thin">
            <div className="flex flex-row gap-2">
              <img src="/assets/camera.png" />
              49 Video
            </div>
          </div>
          <div className="py-2 text-bodySmall font-thin">
            <div className="flex flex-row gap-2">
              <img src="/assets/book.png" />7 Dokumen
            </div>
          </div>
          <div className="py-2 text-bodySmall font-thin">
            <div className="flex flex-row gap-2">
              <img src="/assets/certificate.png" />
              Sertifikat
            </div>
          </div>
          <div className="py-2 text-bodySmall font-thin">
            <div className="flex flex-row gap-2">
              <img src="/assets/book-edit.png" />
              Pretest
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          <h3 className="mb-1text-bodyMedium font-bold"> Bahasa Pengantar</h3>
          <div className="grid grid-cols-2">
            <div className="py-2 text-bodySmall font-thin">
              <div className="flex flex-row gap-2">
                <img src="/assets/world.png" />
                Bahasa Indonesia
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
