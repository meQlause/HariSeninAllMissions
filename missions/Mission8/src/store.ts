import { configureStore } from "@reduxjs/toolkit";
import paymentStepReducer from "./slices/paymentStepSlice";
import dataReducer from "./slices/getDataSlice";
export const store = configureStore({
  reducer: {
    paymentStep: paymentStepReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
