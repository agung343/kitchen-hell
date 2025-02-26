import MenuGrid from "./menu-grid";
import { getMenus } from "@/lib/menu";

export default async function MenuList() {
  const menus = await getMenus()
  const meals = menus.filter((meal) => meal.category === "meals");
  const beverages = menus.filter(
    (beverage) => beverage.category === "beverage"
  );
  const snackes = menus.filter((snack) => snack.category === "snack");

  return (
    <>
      <div>
        <details open className="accordion">
          <summary>
            <p>Meals</p>
            <svg
              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>
          <MenuGrid menus={meals} />
        </details>
        <details className="accordion">
          <summary>
            <p>Beverages</p>
            <svg
              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>
          <MenuGrid menus={beverages} />
        </details>
        <details className="accordion">
          <summary>
            <p>Snackes</p>
            <svg
              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>
          <MenuGrid menus={snackes} />
        </details>
      </div>
    </>
  );
}
