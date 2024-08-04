import { Progress } from "@nextui-org/react";

import { useFlowModal } from "@/providers/flow/FlowModalProvider";

export const FlowModalSavingIndicator = () => {
  const { isSaving } = useFlowModal();

  if (!isSaving) return <div className="h-1" />;

  return <Progress size="sm" isIndeterminate aria-label="Loading..." />;
};
