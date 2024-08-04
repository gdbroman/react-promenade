import { Modal, ModalContent } from "@nextui-org/react";

import { FlowModalBody } from "@/components/flow-modal/FlowModalBody";
import { FlowModalFooter } from "@/components/flow-modal/FlowModalFooter";
import { FlowModalHeader } from "@/components/flow-modal/FlowModalHeader";
import { FlowModalSavingIndicator } from "@/components/flow-modal/FlowModalSavingIndicator";
import { useFlowModal } from "@/providers/flow/FlowModalProvider";

export const FlowModal = () => {
  const { isOpen, Wrapper, onClickClose } = useFlowModal();

  return (
    <Modal
      size="lg"
      classNames={{
        base: "overflow-hidden",
        header: "px-4 sm:px-6",
        body: "px-4 sm:px-6 min-h-96 max-h-96 overflow-hidden",
        footer: "px-4 sm:px-6",
      }}
      hideCloseButton
      isOpen={isOpen}
      onOpenChange={onClickClose}
    >
      <ModalContent>
        <Wrapper>
          <FlowModalSavingIndicator />
          <FlowModalHeader />
          <FlowModalBody />
          <FlowModalFooter />
        </Wrapper>
      </ModalContent>
    </Modal>
  );
};
