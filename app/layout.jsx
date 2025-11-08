import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import LayoutWrapper from "./(components)/LayoutWrapper"; // Client wrapper

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://kuzaasset.com"),
  title: "Kuza Asset Management Ltd",
  description: "Invest in Kuza products such as Kuza Money Market Fund KES, Kuza Fixed Income Fund, Kuza Momentum Special Fund, etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          {/* Client wrapper for sidebar/drawer interactivity */}
          <LayoutWrapper>{children}</LayoutWrapper>
        </Provider>
      </body>
    </html>
  );
}
