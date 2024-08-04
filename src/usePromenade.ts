import { useContext } from 'react';
import { PromenadeContext } from "@/src/PromenadeContext";

export const usePromenade = () => {
  const context = useContext(PromenadeContext);
  if (!context) {
    throw new Error('usePromenade must be used within a PromenadeProvider');
  }
  return context;
};
