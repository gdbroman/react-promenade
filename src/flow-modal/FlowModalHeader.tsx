import { ModalHeader } from "@nextui-org/react";

import { useFlowModal } from "@/providers/flow/FlowModalProvider";

const FlowModalTitle = ({ text = "" }) => (
  <h3 className="font-bold text-lg">{text}</h3>
);

const FlowModalSubtitle = ({ text = "" }) => (
  <p className="font-normal text-xs text-white-400/50">{text}</p>
);

export const FlowModalHeader = () => {
  const { activeStep, activeStepIdx, numberOfSteps } = useFlowModal();

  if (!activeStep) return null;

  return (
    <ModalHeader className="pt-6 flex flex-col gap-1">
      <FlowModalTitle text={activeStep.title} />
      <FlowModalSubtitle text={activeStep.subtitle} />
      <div className="absolute top-1.5 right-2 text-white-400/25 text-sm leading-6 font-normal tracking-widest">
        {activeStepIdx + 1}/{numberOfSteps}
      </div>
    </ModalHeader>
  );
};
