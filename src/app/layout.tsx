import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Neuton } from "next/font/google";
import Script from "next/script";

const open = Neuton({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alves & Ikejiri Advogados",
  description:
    "Assessoria jurídica especializada em desbloqueio de valores em conta bancária.",
  icons: {
    icon: "/assets/icon.png",
  },
};
const gAdsId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/assets/icon.png"
          sizes="32x32"
        ></link>
        <link rel="apple-touch-icon" href="/assets/icon.png"></link>
      </head>

      <body className={open.className}>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gAdsId}`}
        ></Script>
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gAdsId}');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
