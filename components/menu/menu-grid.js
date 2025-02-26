import MenuItem from "./menu-item";

export default function MenuGrid({menus}) {
    return(
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 w-5/6 mx-auto">
            {menus.map((meal) => (
                <li key={meal.id}>
                    <MenuItem meal={meal} key={meal.id} />
                </li>
            ))}
        </ul>
    )
}