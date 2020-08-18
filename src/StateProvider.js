import React, { createContext, useReducer, useContext } from "react";

// this is the data layer
export const StateContext = createContext();

//build provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
