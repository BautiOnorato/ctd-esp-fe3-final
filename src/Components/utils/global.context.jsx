import { createContext, useReducer, useEffect, useMemo } from "react";
import axios from 'axios'


export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext();

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "light":
      return {...state, theme: "dark"};
    case "dark":
      return {...state, theme: "light"};
    case "API_HOME":
      return action.payload;
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducerFunction, initialState)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      dispatch({
        type: "API_HOME",
        payload: {
          ...state,
          data: res.data,
        }
      })
    })
  }, [])

  const store = {
    state, 
    dispatch, 
  }

  return (
    <ContextGlobal.Provider value={store}>
      {children}
    </ContextGlobal.Provider>
  );
};