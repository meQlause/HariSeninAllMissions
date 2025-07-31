import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRemovePendingTx } from "../services/api/removePendingData";
import { useAuth } from "../services/hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { reset } from "../slices/paymentStepSlice";

export const ResetPaymentLayout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isActive } = useSelector((state: RootState) => state.paymentStep);

  const { uid } = useAuth();
  const { removePendingTx } = useRemovePendingTx();
  useEffect(() => {
    console.log(uid);
    if (uid) {
      removePendingTx(uid);
    }

    if (isActive) {
      dispatch(reset());
    }
  }, [uid]);

  return <Outlet />;
};
