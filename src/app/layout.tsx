import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Neuton } from "next/font/google";

const open = Neuton({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alves & Ikejiri Advogados",
  description: "Página de advogados dedicada a liberação de valores bloqueados",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
