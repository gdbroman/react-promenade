import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { PromenadeContext } from "@/src/PromenadeContext";
import { PromenadeStep } from "@/src/PromenadeStep";

type PromenadeProviderProps = {
  /**
   * The children of the PromenadeProvider should be PromenadeStep components
   */
  children: ReactNode;
  /**
   * Whether the next button should be disabled
   * @default () => false
   */
  isNextDisabled?: (currentStep: number) => boolean;
  /**
   * Whether the back button should be disabled
   * @default () => false
   */
  isBackDisabled?: (currentStep: number) => boolean;
  /**
   * Callback for when the user clicks the back button
   */
  onBack?: (currentStep: number, totalNumberOfSteps: number) => void;
  /**
   * Callback for when the user clicks the next button
   */
  onNext?: (currentStep: number, totalNumberOfSteps: number) => void;
};

export const PromenadeProvider = ({
  children,
  isNextDisabled = () => false,
  isBackDisabled = () => false,
  onBack,
  onNext
}: PromenadeProviderProps) => {
  const steps = useMemo(() => {
    return React.Children.toArray(children).filter(
      (child): child is ReactElement => React.isValidElement(child) && child.type === PromenadeStep
    );
  }, [children]);

  const totalNumberOfSteps = useMemo(() => steps.length, [steps.length]);

  const [currentStep, setCurrentStep] = useState(0);

  const goForward = useCallback(() => {
    if (isNextDisabled(currentStep)) return;

    if (currentStep < totalNumberOfSteps - 1) {
      onNext?.(currentStep, totalNumberOfSteps);
      setCurrentStep(currentStep + 1);
    }
  }, [isNextDisabled, currentStep, totalNumberOfSteps, onNext]);

  const goBack = useCallback(() => {
    if (isBackDisabled(currentStep)) return;

    if (currentStep > 0) {
      onBack?.(currentStep, totalNumberOfSteps);
      setCurrentStep(currentStep - 1);
    }
  }, [isBackDisabled, currentStep, totalNumberOfSteps, onBack]);

  const cancelFlow = useCallback(() => {
    setCurrentStep(0);
  }, []);

  return (
    <PromenadeContext.Provider
      value={{
        currentStep,
        totalNumberOfSteps,

        isNextDisabled: isNextDisabled(currentStep),
        isBackDisabled: isBackDisabled(currentStep),

        goForward,
        goBack,
        cancelFlow,
      }}
    >
      {steps}
    </PromenadeContext.Provider>
  );
};
