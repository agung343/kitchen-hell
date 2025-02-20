import Image from "next/image"
import {FaCartPlus} from "react-icons/fa"

export default function MenuItem({meal}) {
    return (<>
        <article className="p-4 rounded-md bg-stone-200">
            <header className="flex flex-col gap-2">
                <Image src={meal.image} alt={meal.title} height={144} width={144} />
                <h1 className="text-2xl text-center font-bold">{meal.title}</h1>
            </header>
            <main className="flex flex-col gap-2">
                <p className="text-stone-200 text-base">{meal.summary}</p>
                <p className="text-stone-200 text-lg font-bold">{meal.price}</p>
            </main>
            <button className="py-2 px-4 bg-green-500 hover:bg-green-400 text-stone-100">
                <FaCartPlus className="text-lg" />
            </button>
        </article>
    </>)
}