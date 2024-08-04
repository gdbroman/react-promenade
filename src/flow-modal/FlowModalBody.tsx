import { ModalBody } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useFlowModal } from "@/providers/flow/FlowModalProvider";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export const FlowModalBody = () => {
  const { activeStep, activeStepIdx } = useFlowModal();

  const [prevStepIdx, setPrevStepIdx] = useState(activeStepIdx);
  const direction = activeStepIdx > prevStepIdx ? 1 : -1;

  useEffect(() => {
    setPrevStepIdx(activeStepIdx);
  }, [activeStepIdx]);

  if (!activeStep) return null;

  return (
    <motion.div
      className="min-h-96"
      transition={{ type: "spring", stiffness: 300, damping: 0 }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeStepIdx}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute size-full"
        >
          <ModalBody>{activeStep.body}</ModalBody>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
