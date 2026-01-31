import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/component/shared/Sidebar";
import Navbar from "@/component/shared/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Call dashboard",
  description: "Call management dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="h-screen overflow-hidden">
          <div className="flex h-full">
            <aside className="hidden lg:block lg:w-[16%] bg-[#111B3C] border-r border-white h-full">
              <Sidebar />
            </aside>

            <main className="w-full lg:w-[84%] bg-[#193560] text-white h-full flex flex-col">
              <Navbar />

              <div className="flex-1 overflow-y-auto">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
