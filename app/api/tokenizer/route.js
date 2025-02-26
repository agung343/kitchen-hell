import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

let snap = new Midtrans.Snap({
  isProduction: false,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
});

export async function POST(request) {
  const { totalPrice, items, customer } = await request.json();

  try {
    // Prepare Midtrans payload
    const parameter = {
      transaction_details: {
        order_id: Math.floor(Math.random()*100000),
        gross_amount: totalPrice,
      },
      item_details: items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      customer_details: {
        first_name: customer.name,
        phone: customer.phone,
        address: customer.address,
      },
    };

    // Generate payment token
    const token = await snap.createTransactionToken(parameter);

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Error generating payment token:", error);
    return Response.json(
      { error: "Failed to generate payment token" },
      { status: 500 }
    );
  }
}
