import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const poppinsRegular = Poppins({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-poppins-regular",
});

const poppinsMedium = Poppins({
  weight: '500',
  subsets: ["latin"],
  variable: "--font-poppins-medium",
});

const poppinsSemiBold = Poppins({
  weight: '600',
  subsets: ["latin"],
  variable: "--font-poppins-semibold",
});

const poppinsBold = Poppins({
  weight: '700',
  subsets: ["latin"],
  variable: "--font-poppins-bold",
});

export const metadata: Metadata = {
  title: "MyLoca - Location Management",
  description: "MyLoca Web - Gérez vos locations facilement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppinsRegular.variable} ${poppinsMedium.variable} ${poppinsSemiBold.variable} ${poppinsBold.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
