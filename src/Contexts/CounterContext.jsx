import { createContext, useState } from "react";





export const CounterContext = createContext(0)

export default function CounterContextProvider({ children }) {
    const [counter, setCounter] = useState(false)

    return <CounterContext.Provider value={{ counter, setCounter }}>
        {children}
    </CounterContext.Provider>
}