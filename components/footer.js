import Link from "next/link";
import {FaFacebook, FaTiktok, FaInstagram, FaEnvelope, FaWhatsapp, FaEvernote} from "react-icons/fa"

export default function Footer() {
    return (<>
        <footer className="flex justify-around pt-2 pb-4 px-8 mx-auto bg-pumpkin rounded-t-md">
            <div>
                <h1 className="text-2xl font-monomakh font-bold">Kitchen Hell</h1>
                <address className="text-sm">
                    <p>Jalan Neraka No. 66</p>
                    <p>Kecamatan Pedas, Kota Sambal</p>
                    <p>Jakarta 12345</p>
                    <p>Indonesia</p>
                </address>
            </div>
            <div>
                <h1 className="text-2xl">Contact Us</h1>
                <div>
                    <p className="flex gap-2 items-center">
                        <FaEvernote /><span> kitchenhell@example.com</span>
                    </p>
                    <Link href={"https://www.whatapp.com"} className="flex gap-2 items-center">
                        <FaWhatsapp /><span>0812-3456-789</span>
                    </Link>
                </div>
            </div>
            <nav className="flex flex-col items-center">
                <h1 className="text-2xl">Follow Us</h1>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Link href={"https://www.facebook.com"} className="text-blue-primary rounded-md flex items-center">
                            <FaFacebook className="text-xl" /> <span>kitchen Hell</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://www.instagram.com"} className="text-pink-600 rounded-md flex items-center">
                            <FaInstagram className="text-xl" /> <span>kitchen_hell</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://www.tiktok.com"} className="text-stone-700 rounded-md flex items-center">
                            <FaTiktok className="text-xl" /><span>kitchen_hell</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    </>)
}