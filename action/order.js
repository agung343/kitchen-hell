"use server";
import { storeOrder } from "@/lib/orders";
import { redirect } from "next/navigation";

export async function actionOrder(prevState, formData) {
  const name = formData.get("name");
  const address = formData.get("address");
  const phone = formData.get("phone");
  const cart = JSON.parse(formData.get("cart"));
  const totalPrice = parseInt(
    formData.get("totalPrice").replace(/[^\d]/g, "").slice(0, -2)
  );
  //validate form
  let errMsg = {};

  if (!name || name.trim().length === 0) {
    errMsg.name = "Mohon nama di isi";
  }

  if (!address || address.trim().length === 0) {
    errMsg.address = "Mohon alamat di isi";
  }

  try {
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone)) {
      errMsg.phone = "Nomor HP minimal 10 angka";
    }

    if (!cart || cart.length === 0) {
      errMsg.cart = "Keranjang masih kosong";
    }

    if (Object.keys(errMsg).length > 0) {
      return { errMsg };
    }

    const orderDetails = cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }))

    await storeOrder({
      name, address, phone, orderDetails, totalPrice
    })
    
    return {name, address, phone, orderDetails, totalPrice}
  } catch (error) {
    console.error("Error processing order", error);
    throw new Error("Gagal memproses pesanan");
  }
}
