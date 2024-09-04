import { ThemeProvider } from "@/components/theme/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Black_Ops_One } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/navigation/site-header";

const inter = Black_Ops_One({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Squirtle BattleBase",
  description: "Welcome to the Game Sites Directory! Discover and explore tactical airsoft and game sites near you. Our platform offers detailed site reviews, ratings, and descriptions to help you find the best places to play. Filter by location, rating, and site type to tailor your search, and use our interactive map to pinpoint your next adventure. Stay informed with the latest updates on airsoft gear and site news."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>

  )
}
