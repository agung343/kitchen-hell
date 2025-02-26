'use client'
import {use} from "react"
import { CartContext } from "@/store/cart-context";

export default function AddtoCartButton({ children, item }) {
    const {addItem} = use(CartContext)

    function handleAddToCart() {
        addItem(item)
    }
  return (
    <>
      <button className="py-2 px-4 bg-green-500 hover:bg-green-400 text-stone-100 rounded-lg w-full "
        onClick={handleAddToCart}
      >
        {children}
      </button>
    </>
  );
}
