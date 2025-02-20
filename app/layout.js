import "./globals.css"
import MainNavigation from "@/components/main-header";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
