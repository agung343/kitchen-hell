"use client";
import { useEffect} from "react";
import FormMenu from "@/components/form-menus";
import { actionOrder } from "@/action/order";

export default function CartPage() {
  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.MIDTRANS_CLIENT_KEY;

    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <h1 className="text-4xl text-center font-bold">Your Order</h1>
      <FormMenu serverAction={actionOrder} />
    </>
  );
}
