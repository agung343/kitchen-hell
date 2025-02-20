import MenuItem from "./menu-item";

export default function MenuGrid({menus}) {
    return(
        <ul className="grid grid-cols-4">
            {menus.map((meal, i) => (
                <li key={i}>
                    <MenuItem meal={meal} />
                </li>
            ))}
        </ul>
    )
}