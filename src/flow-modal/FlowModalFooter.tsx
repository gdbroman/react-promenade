import { Button, ModalFooter } from "@nextui-org/react";
import { useMemo } from "react";

import { useFlowModal } from "@/providers/flow/FlowModalProvider";

export const FlowModalFooter = () => {
  const {
    isFirstStep,
    isLastStep,
    isFinishing,
    isNextDisabled,
    onClickBack,
    onClickNext,
  } = useFlowModal();

  const onBackLabel = useMemo(
    () => (isFirstStep ? "Cancel" : "Back"),
    [isFirstStep],
  );
  const onNextLabel = useMemo(
    () => (isLastStep ? "Finish" : "Next"),
    [isLastStep],
  );

  return (
    <ModalFooter>
      <div className="w-full flex items-center justify-end gap-3">
        <Button variant="flat" onClick={onClickBack}>
          {onBackLabel}
        </Button>
        <Button
          variant="solid"
          color="primary"
          isDisabled={isNextDisabled}
          isLoading={isFinishing}
          onClick={onClickNext}
        >
          {onNextLabel}
        </Button>
      </div>
    </ModalFooter>
  );
};
