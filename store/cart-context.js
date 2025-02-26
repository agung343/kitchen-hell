'use client'
import { createContext, useReducer } from "react"

export const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    clearItem: (id) => { }, // remove selected item
    clearCart: () => { } // remove all items in cart
})

function cartReducer(state, action) {
    if (action.type === "ADD") {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const updatedItems = [...state.items]

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems.push({
                ...action.item,
                quantity: 1
            })
        }

        return { ...state, items: updatedItems }
    }

    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedItems = [...state.items]

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1)
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            }

            updatedItems[existingCartItemIndex] = updatedItem
        }

        return { ...state, items: updatedItems }
    }

    if (action.type === "CLEAR_ITEM") {
        const updatedItems = state.items.filter(item => item.id !== action.id)
        return {
            ...state,
            items: updatedItems
        }
    }

    if (action.type === "CLEAR_ALL") {
        return {
            ...state, items: []
        }
    }

    return state
}

export default function CartContextProvider({ children }) {
    const [cartState, dispatch] = useReducer(cartReducer, { items: [] })

    function addItem(item) {
        dispatch({
            type: "ADD", item
        })
    }

    function removeItem(id) {
        dispatch({
            type: "REMOVE", id
        })
    }

    function clearItem(id) {
        dispatch({ type: "CLEAR_ITEM", id })
    }

    function clearCart() {
        dispatch({ type: "CLEAR_ALL" })
    }

    const cartContext = {
        items: cartState.items,
        addItem, removeItem, clearItem, clearCart
    }

    return <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
}