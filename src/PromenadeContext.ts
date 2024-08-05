import { createContext } from "react";

/**
 * The context shape for PromenadeProvider
 */
type PromenadeContextType = {
  /**
   * The current step index
   */
  index: number;
  /**
   * The total number of steps in the flow
   */
  stepCount: number;
  /**
   * Whether the next button should be disabled
   * @default false
   */
  isNextDisabled: boolean;
  /**
   * Whether the back button should be disabled
   * @default false
   */
  isBackDisabled: boolean;
  /**
   * Function to go forward to the next step.
   */
  goForward: () => void;
  /**
   * Function to go back to the previous step.
   */
  goBack: () => void;
  /**
   * Function to cancel the flow and reset the state.
   */
  cancelFlow: () => void;
};

export const PromenadeContext = createContext<PromenadeContextType | undefined>(
  undefined,
);
