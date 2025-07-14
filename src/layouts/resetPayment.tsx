import { useEffect } from "react";
import { usePaymentStepStore } from "../stores/usePaymentStepStore";
import { Outlet } from "react-router-dom";
import { useRemovePendingTx } from "../services/api/removePendingData";
import { useAuth } from "../services/hooks/useAuth";

export const ResetPaymentLayout = () => {
  const { setActive, isActive } = usePaymentStepStore();
  const { uid } = useAuth();
  const { removePendingTx } = useRemovePendingTx();
  useEffect(() => {
    console.log(uid);
    if (uid) {
      removePendingTx(uid);
    }

    if (isActive) {
      setActive(!isActive);
    }
  }, [uid]);

  return <Outlet />;
};
