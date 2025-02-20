import { DUMMY } from "@/dummy";
import MenuGrid from "./menu-grid";

export default function MenuGrid() {
  const meals = DUMMY.filter((meal) => meal.category === "meal");
  const beverages = DUMMY.filter(
    (beverage) => beverage.category === "beverage"
  );
  const snackes = DUMMY.filter((snack) => snack.category === "snack");

  return (
    <>
      <div>
        <details open className="dropdown">
          <summary>
            {meals.map((meal) => (
              <MenuGrid menus={meal} key={meal.id} />
            ))}
          </summary>
        </details>
        <details className="dropdown">
          <summary>
            {beverages.map((drink) => (
              <MenuGrid menus={drink} key={drink.id} />
            ))}
          </summary>
        </details>
        <details className="dropdown">
          <summary>
            {snackes.map((snack) => (
              <MenuGrid menus={snack} key={snack.id} />
            ))}
          </summary>
        </details>
      </div>
    </>
  );
}
