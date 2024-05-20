import Providers from "@/util/Providers";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StoreProvider from "@/lib/StoreProvider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Frontend Challenge",
  description: "MKS Frontend Challenge",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
              {children}
          </Providers>
        </body>
      </html >
    </StoreProvider>
  );
}
