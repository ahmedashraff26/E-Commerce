import { createContext, useState } from "react";





export const CartItemsContext = createContext(0)

export default function CartItemsContextProvider({ children }) {
    const [counter, setCartItems] = useState(false)

    return <CartItemsContext.Provider value={{ counter, setCartItems }}>
        {children}
    </CartItemsContext.Provider>
}