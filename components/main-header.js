import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/kitchen-hell.png";

export default function MainNavigation() {
  return (
    <header className="w-full py-4 px-16 flex items-center justify-between mb-4 bg-blue-200">
      <div>
        <Link href={"/"} className="relative">
          <Image src={logo.src} alt="Meals-Store" width={64} height={64} className="rounded-lg" />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link href={"/"} className="text-xl py-2 px-4">
              Beranda
            </Link>
          </li>
          <li>
            <Link href={"/cart"} className="text-2xl">
              <FaShoppingCart />
              <div className="relative">
                <span className="absolute -bottom-2 -right-2 bg-red-500 rounded-full text-center text-xs font-bold p-1">
                  0
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
