import Image from "next/image";
import { formatCurrency } from "@/lib/format-currency";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

export default function CartItem({
  meal,
  onAddItem,
  onRemoveItem,
  onClearItem,
}) {
  const mealPrice = meal.price * meal.quantity;
  const subpriceItem = formatCurrency.format(mealPrice);
  return (
    <li className="list-none flex gap-4 w-full items-center my-2 justify-between">
      <div className="object-contain flex gap-4 items-center">
        <Image
          src={meal.image}
          alt={meal.name}
          width={160}
          height={144}
          className="rounded-md"
        />
        <div>
          <h2 className="text-lg md:text-2xl font-semibold">{meal.name}</h2>
          <p>{subpriceItem}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <FaTrash onClick={onClearItem} className="hover:text-grapefruit" />
        <div className="flex gap-2">
          <FaMinus onClick={onRemoveItem} className="hover:cursor-pointer hover:text-tomato" />
          <span>{meal.quantity}</span>
          <FaPlus onClick={onAddItem} className="hover:cursor-pointer hover:text-tomato" />
        </div>
      </div>
    </li>
  );
}
