import React from 'react';
import { usePromenade } from "@/src/usePromenade";

type PromenadeStepProps = {
  index: number;
  children: React.ReactNode;
}

export const PromenadeStep = ({ index, children }: PromenadeStepProps) => {
  const { index: currentIndex } = usePromenade()

  if (index !== currentIndex) return null

  return <div>{children}</div>;
}
