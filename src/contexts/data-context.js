import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();
const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const initialState = { watchlater: [], playlists: [], history: [] };

  const dataReducer = (state, action) => {
    switch (action.type) {
      case "GET_WATCHLATER":
        return { ...state, watchlater: action.payload };
      case "ADD_TO_WATCHLATER":
        return { ...state, watchlater: action.payload };
      case "REMOVE_FROM_WATCHLATER":
        return { ...state, watchlater: action.payload };
      default:
        return state;
    }
  };

  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export { useData, DataProvider };
