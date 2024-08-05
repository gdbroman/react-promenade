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
   * The total number of steps in the flow
   */
  stepCount: number;
  /**
   * Whether the next button should be disabled
   * @default () => false
   */
  isNextDisabled?: (index: number) => boolean;
  /**
   * Whether the back button should be disabled
   * @default () => false
   */
  isBackDisabled?: (index: number) => boolean;
  /**
   * Callback for when the user clicks the back button
   */
  onBack?: (index: number) => void;
  /**
   * Callback for when the user clicks the next button
   */
  onNext?: (index: number) => void;
};

export const PromenadeProvider = ({
  children,
  stepCount,
  isNextDisabled = () => false,
  isBackDisabled = () => false,
  onBack,
  onNext
}: PromenadeProviderProps) => {
  const [index, setIndex] = useState(0);

  const goForward = useCallback(() => {
    if (isNextDisabled(index)) return;

    onNext?.(index);

    if (index < stepCount - 1) {
      setIndex(index + 1);
    }
  }, [isNextDisabled, index, stepCount, onNext]);

  const goBack = useCallback(() => {
    if (isBackDisabled(index)) return;

    onBack?.(index);

    if (index > 0) {
      setIndex(index - 1);
    }
  }, [isBackDisabled, index, stepCount, onBack]);

  const cancelFlow = useCallback(() => {
    setIndex(0);
  }, []);

  return (
    <PromenadeContext.Provider
      value={{
        index,
        stepCount,

        isNextDisabled: isNextDisabled(index),
        isBackDisabled: isBackDisabled(index),

        goForward,
        goBack,
        cancelFlow,
      }}
    >
      {children}
    </PromenadeContext.Provider>
  );
};
