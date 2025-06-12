import "./global.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";
import AppProvider from "@/components/AppProvider";

export const metadata: Metadata = {
  title: "Next.js MDX Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
