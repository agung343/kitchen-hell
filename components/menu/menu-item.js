import { formatCurrency } from "@/lib/format-currency";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import AddtoCartButton from "./addToCartButton";

export default function MenuItem({ meal }) {
  const currency = formatCurrency.format(meal.price);
  return (
    <>
      <article className="p-4 rounded-md bg-stone-200 flex flex-col items-center shadow-menu">
        <header className="flex flex-col gap-2 ">
          <Image
            src={meal.image}
            alt={meal.name}
            width={200}
            height={200}
            className="rounded-md"
          />

          <h1 className="text-xl text-center text-nowrap font-bold">
            {meal.name}
          </h1>
        </header>
        <main className="flex justify-center items-center text-center flex-col gap-2">
          <p className="text-stone-700 text-base">{meal.summary}</p>
          <p className="text-stone-700 text-lg font-semibold text-center">{currency}</p>
        </main>
        <AddtoCartButton item={meal}>
          <FaCartPlus className="text-sm inline-flex" /><span className="text-sm"> Tambah Keranjang</span>
        </AddtoCartButton>
      </article>
    </>
  );
}
