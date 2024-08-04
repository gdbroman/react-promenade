import React from 'react';
import { usePromenade } from "@/src/usePromenade";

type PromenadeStepProps = {
  index: number;
  children: React.ReactNode;
}

export const PromenadeStep = ({ index, children }: PromenadeStepProps) => {
  const { currentStep } = usePromenade()

  if (currentStep !== index) return null

  return <div>{children}</div>;
}
