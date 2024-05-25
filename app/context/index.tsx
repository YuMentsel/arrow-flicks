'use client';

import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { LS_RATED_MOVIES_KEY } from '../constants';

export const RatedContext = createContext<RatedContextData>({
  ratedData: '{}',
  setRatedData: () => {},
});

export function RatedContextProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [ratedDataLS, setRatedDataLS] = useState('{}');

  const setRatedData = (value: string) => {
    setRatedDataLS(value);
  };

  useEffect(() => {
    if (window !== undefined) {
      setRatedDataLS(localStorage.getItem(LS_RATED_MOVIES_KEY) ?? '{}');
    }
  }, []);

  const value = useMemo(() => ({ ratedData: ratedDataLS, setRatedData }), [ratedDataLS]);

  return <RatedContext.Provider value={value}>{children}</RatedContext.Provider>;
}
