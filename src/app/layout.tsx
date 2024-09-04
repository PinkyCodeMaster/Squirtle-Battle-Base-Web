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
  description: "Welcome to the Game Sites Directory!",
  openGraph: {
    title: "Squirtle BattleBase",
    description: "Explore tactical airsoft and game sites.",
    url: "https://squirtlebb.co.uk",
    siteName: "Squirtle BattleBase",
    images: [
      {
        url: "https://utfs.io/path/to/your/image.jpg",
        width: 800,
        height: 600,
        alt: "Squirtle BattleBase Image",
      },
    ],
  },
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
