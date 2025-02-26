import "./globals.css";
import MainNavigation from "@/components/main-header";
import Footer from "@/components/footer";
import CartContextProvider from "@/store/cart-context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartContextProvider>
          <MainNavigation />
          {children}
        </CartContextProvider>
        <Footer />
      </body>
    </html>
  );
}
