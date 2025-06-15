import AppProvider from "@/components/AppProvider.tsx";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Blog | Amirhossein Alibakhshi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
