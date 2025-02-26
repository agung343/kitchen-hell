import { getMenus } from "@/lib/menu";
import CarouselButton from "./carousel-button";

export default async function Carousel() {
  const menus = await getMenus()

  return (
    <>
      <div className="w-11/12 overflow-hidden rounded-lg shadow-lg">
        <CarouselButton slides={menus} />
      </div>
    </>
  );
}
