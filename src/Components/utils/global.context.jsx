import { createContext, useReducer } from "react";
import axios from 'axios'



export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext();

const reducerFunction = (state, { type }) => {
  switch (type) {
    case "light":
      return {...state, theme: "dark"};
    case "dark":
      return  {...state, theme: "light"};
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducerFunction, initialState)

  

  const store = {
    state,
    dispatch
  }

  return (
    <ContextGlobal.Provider value={store}>
      {children}
    </ContextGlobal.Provider>
  );
};