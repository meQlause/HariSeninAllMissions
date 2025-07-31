import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Step = "select-payment" | "payment" | "done";

interface PaymentStepState {
  currentStep: Step;
  isActive: boolean;
}

const stepOrder: Step[] = ["select-payment", "payment", "done"];

const initialState: PaymentStepState = {
  currentStep: "select-payment",
  isActive: false,
};

const paymentStepSlice = createSlice({
  name: "paymentStep",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
    nextStep: (state) => {
      const currentIndex = stepOrder.indexOf(state.currentStep);
      if (currentIndex < stepOrder.length - 1) {
        state.currentStep = stepOrder[currentIndex + 1];
      } else {
        state.currentStep = "select-payment";
        state.isActive = false;
      }
    },
    reset: (state) => {
      state.isActive = false;
      state.currentStep = "select-payment";
    },
  },
});

export const { setActive, nextStep, reset } = paymentStepSlice.actions;
export default paymentStepSlice.reducer;
