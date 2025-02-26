import { query } from "./db"

export async function getMenus() {
    return await query("SELECT * FROM menus", [])
}