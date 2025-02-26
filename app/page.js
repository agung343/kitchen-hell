import Carousel from "@/components/carousel";
import MenuList from "@/components/menu/menu-dropdown";

export const metadata = {
  title: "Kitchen Hell - Online Delivery Food Order",
  description: "The best online kitchen in Hell"
}

export default function Home() {
  return (
    <div className="my-8 min-h-screen bg-gray-100">
      <section id="cta" className="flex justify-center">
        <Carousel />
      </section>
      <section id="menu" className="my-8">
        <MenuList />
      </section>
    </div>
  );
}
