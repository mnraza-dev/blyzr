import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Blyzr App",
  description: "build apps in balzing fast speed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar/>
         <main className="mx-8 px-2  py-4 max-w-8xl">
         {children}
         </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
