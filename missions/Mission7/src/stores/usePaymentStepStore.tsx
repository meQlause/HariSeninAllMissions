import { create } from "zustand";

type Step = "select-payment" | "payment" | "done";

interface PaymentStepStore {
  currentStep: Step;
  isActive: boolean;
  setActive: (status: boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: Step) => void;
}

const stepOrder: Step[] = ["select-payment", "payment", "done"];

export const usePaymentStepStore = create<PaymentStepStore>((set, get) => ({
  currentStep: "select-payment",
  isActive: false,
  setActive: (status: boolean) => {
    set({ isActive: status });
  },
  nextStep: () => {
    const currentIndex = stepOrder.indexOf(get().currentStep);
    if (currentIndex < stepOrder.length - 1) {
      set({ currentStep: stepOrder[currentIndex + 1] });
    }
  },
  prevStep: () => {
    const currentIndex = stepOrder.indexOf(get().currentStep);
    if (currentIndex > 0) {
      set({ currentStep: stepOrder[currentIndex - 1] });
    }
  },
  setStep: (step: Step) => set({ currentStep: step }),
}));
