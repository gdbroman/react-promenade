import { ComponentType, ReactNode } from "react";

type FlowModalStep = {
  title: string;
  subtitle: string;
  body: ReactNode;
};

export type FlowModalConfig = {
  steps: FlowModalStep[];
  Wrapper: ComponentType<{ children: ReactNode }>;
  onNext?: (newStep: number) => void;
  onFinish?: () => void;
};

// Define the context shape
export type FlowModalContextType = {
  isOpen: boolean;
  Wrapper: ComponentType<{ children: ReactNode }>;

  activeStep: FlowModalStep | null;
  activeStepIdx: number;
  numberOfSteps: number;

  isSaving: boolean;
  setIsSaving: (isSaving: boolean) => void;

  isNextDisabled: boolean;
  setIsNextDisabled: (disabled: boolean) => void;

  isLastStep: boolean;
  isFirstStep: boolean;
  isFinishing: boolean;

  onClickStart: (config: FlowModalConfig) => void;
  onClickClose: () => void;
  onClickBack: () => void;
  onClickNext: () => void;
};
