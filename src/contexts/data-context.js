import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();
const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const initialState = { watchlater: [], playlists: [], history: [] };

  const dataReducer = (state, action) => {
    switch (action.type) {
      case "SET_WATCHLATER":
        return { ...state, watchlater: action.payload };
      case "CLEAR_ALL":
        return initialState;
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
