import { neon } from "@neondatabase/serverless";

if (!process.env.NEON_URI) {
    throw new Error("Database has not setup yet!!")
}

const sql = neon(process.env.NEON_URI)

export async function query(text, params = []) {
    try {
        return await sql(text, params)
    } catch (err) {
        console.error("Database Error: ", err)
        throw new Error("Failed to executed")
    } 
}