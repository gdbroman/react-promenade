import {
  createContext,
  Fragment,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";

import { FlowModal } from "@/components/flow-modal/FlowModal";
import { FlowModalConfig, FlowModalContextType } from "@/providers/flow/types";

// Create the context with a default undefined value
const FlowModalContext = createContext<FlowModalContextType | undefined>(
  undefined,
);

type Props = {
  children: ReactNode;
};

export const FlowModalProvider = ({ children }: Props) => {
  const [config, setConfig] = useState<FlowModalConfig | null>(null);

  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const [isSaving, setIsSaving] = useState(false);
  const [isFinishing, startTransition] = useTransition();

  const isFirstStep = useMemo(() => activeStepIdx === 0, [activeStepIdx]);
  const isLastStep = useMemo(() => {
    if (!config) return false;

    return activeStepIdx === config.steps.length - 1;
  }, [activeStepIdx, config]);
  const activeStep = useMemo(() => {
    if (!config) return null;

    return config.steps[activeStepIdx];
  }, [activeStepIdx, config]);
  const numberOfSteps = useMemo(() => {
    if (!config) return 0;

    return config.steps.length;
  }, [config]);

  const resetState = useCallback(() => {
    // Reset state
    setConfig(null);
    setIsSaving(false);
    setActiveStepIdx(0);
    setIsNextDisabled(true);
  }, []);

  const onClickStart = useCallback(
    (config: FlowModalConfig) => {
      resetState();
      setConfig(config);
    },
    [resetState],
  );

  const onClickBack = useCallback(() => {
    if (isFirstStep) return resetState();

    setActiveStepIdx((prevStep) => prevStep - 1);
  }, [isFirstStep, resetState]);

  const onClickNext = useCallback(async () => {
    if (isLastStep) {
      startTransition(() => {
        config?.onFinish?.();
        resetState();
      });
    } else {
      setActiveStepIdx((prevStep) => {
        const newStep = prevStep + 1;
        return newStep;
      });
    }
  }, [config, isLastStep, resetState]);

  useEffect(() => {
    // reset state on unmount
    return () => {
      resetState();
    };
  }, [resetState]);

  return (
    <FlowModalContext.Provider
      value={{
        isOpen: config !== null,
        Wrapper: config ? config.Wrapper : Fragment,

        activeStep,
        activeStepIdx,
        numberOfSteps,

        isSaving,
        setIsSaving,

        isNextDisabled,
        setIsNextDisabled,

        isFirstStep,
        isLastStep,
        isFinishing,

        onClickStart,
        onClickClose: resetState,
        onClickBack,
        onClickNext,
      }}
    >
      {children}
      <FlowModal />
    </FlowModalContext.Provider>
  );
};

// Custom hook to use the FlowModalContext
export const useFlowModal = () => {
  const context = useContext(FlowModalContext);
  if (context === undefined) {
    throw new Error("useFlowModal must be used within FlowModalProvider");
  }
  return context;
};
