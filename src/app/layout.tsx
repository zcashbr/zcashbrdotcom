import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zcash Brasil",
  description: "Stay Shielded.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Adicionei scroll-smooth para os links da navbar deslizarem suavemente
    <html lang="pt-BR" className="scroll-smooth">
      <body
        // Mudamos para bg-black text-white para ser o padrão do site todo
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-black text-white`}
      >
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}