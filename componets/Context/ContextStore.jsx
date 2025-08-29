import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterContextProveder({children}){
    let[count,setCount]= useState(0)
    let[name,setName]= useState("Amel")

    return( <CounterContext.Provider value ={{count,name}}>
        {children}
        </CounterContext.Provider>)
}