import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export function useLoadingContext() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  return (
    <LoadingContext.Provider value={{ isFirstLoad, setIsFirstLoad }}>
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingContext;
