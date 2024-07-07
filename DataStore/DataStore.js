import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

export const DataStoreContext = createContext(initialState);

export const DataStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </DataStoreContext.Provider>
  );
};

export const useDataStore = () => {
  const context = useContext(DataStoreContext);
  if (!context) throw new Error("Something Went Wrong");
  return context;
};
