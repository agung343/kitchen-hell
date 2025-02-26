"use client";
import { use, useActionState, useRef } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/store/cart-context";
import CartItem from "./cart-item";
import { formatCurrency } from "@/lib/format-currency";

export default function FormMenu({serverAction}) {
  const router = useRouter()
  const { items, addItem, removeItem, clearItem, clearCart } = use(CartContext);
  const [state, formAction] = useActionState(serverAction, {})
  const paymentInitiate = useRef(false)

  const cartTotalPrice = items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const totalPrice = formatCurrency.format(cartTotalPrice);

  if (state?.name && state?.address && state?.phone && state?.orderDetails && state?.totalPrice && !paymentInitiate.current) {
    paymentInitiate.current = true 
    async function handlePayment() {
      try {
        const response = await fetch('/api/tokenizer', {
          method: "POST",
          body: JSON.stringify({
            totalPrice: state.totalPrice,
            items: state.orderDetails,
            customer: { name: state.name, address: state.address, phone: state.phone },
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("No response");

        const data = await response.json();

        console.log(data)

        // Redirect to Midtrans payment page
        if (window.snap) {
          window.snap.pay(data.token, {
            onSuccess: () => {
              clearCart()
              router.push("/");
            },
            onClose: () => {
              clearCart()
              router.push("/");
            },
          });
        }
      } catch (error) {
        console.error("Error processing payment:", error);
      }
    };

    handlePayment();
  }

  return (
    <>
      <form className="w-2/3 mx-auto my-8 bg-light-greenish-green rounded-lg" action={formAction} >
        <div className="mx-2 p-4">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            {state?.errMsg?.name && <p className="text-tomato text-xs">{state.errMsg.name}</p>}
          </div>
          <div className="form-control">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" />
            {state?.errMsg?.address && <p className="text-tomato text-xs">{state.errMsg.address}</p>}
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" pattern="\d{10,}" />
            {state?.errMsg?.phone && <p className="text-tomato text-xs">{state.errMsg.phone}</p>}
          </div>
          <div className="form-order">
            <label htmlFor="order">Order</label>
            {items.map((item) => (
              <CartItem
                meal={item}
                key={item.id}
                onAddItem={() => addItem(item)}
                onRemoveItem={() => removeItem(item.id)}
                onClearItem={() => clearItem(item.id)}
              />
            ))}
            {state?.errMsg?.cart && <p className="text-tomato text-xs">{state.errMsg.cart}</p>}
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Total: {totalPrice}</h2>
          </div>
          <input
            type="hidden"
            id="cart"
            name="cart"
            value={JSON.stringify(items)}
          />
          <input type="hidden" id="totalPrice" name="totalPrice" value={totalPrice} />
          <div className="flex items-end gap-4">
            <button
              onClick={() => clearCart()}
              type="reset"
              className="bg-transparent py-2 px-4"
            >
              Hapus
            </button>
            <button className="bg-blue-secondary hover:bg-blue-primary py-2 px-4 text-white rounded-lg">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
