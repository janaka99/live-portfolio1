import { createContext, useState, useContext } from "react";

const LoadingContext = createContext();

export const useSetLoadingContext = () => {
  const loadingContext = useContext(LoadingContext);

  return loadingContext;
};

export const LoadingProvider = (props) => {
  const [loading, setloading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setloading }}>
      {props.children}
    </LoadingContext.Provider>
  );
};
