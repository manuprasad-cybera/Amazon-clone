import React, {createContext, useContext, useReducer } from "react";
 
//Prepares the dataLaye
export const StateContext = createContext();

//wrap aur app provide the Data layer 
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


//pull information from data Layer 
export const UseStateValue = () => useContext(StateContext);
