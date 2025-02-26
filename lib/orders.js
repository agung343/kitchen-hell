import { query } from "./db";

export async function storeOrder({name, address, phone, orderDetails, totalPrice}) {
    try {
        await query("BEGIN")

        const customerResult = await query(
            `INSERT INTO customers (name, address, phone)
             VALUES ($1, $2, $3)
             RETURNING id;
            `, [name, address, phone]
        )
        const customerId = customerResult[0].id

        const orderResult = await query(
            'INSERT INTO orders(customer_id, totalPrice) VALUES ($1, $2) RETURNING id;', [customerId, totalPrice]
        )
        const orderId = orderResult[0].id

        const orderValues = orderDetails.flatMap(({id, quantity}) => [orderId, id, quantity])
        const placeholders = orderDetails.map((_, i) => `($1, $${i * 2 + 2}, $${i * 2 + 3})`).join(", ");
        
        if (orderDetails.length > 0) {
            await query(
                `INSERT INTO order_items (order_id, meal_id, quantity)
                 VALUES ${placeholders};`,
                [orderId, ...orderValues]
            );
        }

        await query("COMMIT"); // Commit transaction
        return { success: true, message: "Order saved successfully!" };
    } catch (error) {
        await query("ROLLBACK")
        console.error("Database error", error.message)
    }
}