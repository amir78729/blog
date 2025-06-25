import AppProvider from "@/components/AppProvider.tsx";
import "highlight.js/styles/github-dark.css"; // or any other theme you prefer
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Blog | Amirhossein Alibakhshi",
  description: "Amirhossein Alibakhshi's blog page.",
  keywords: ["Amirhossein", "Alibakhshi", "Amirhossein Alibakhshi", "blog"],
  authors: [
    {
      name: "Amirhossein Alibakhshi",
      url: "https://amirhosseinalibakhshi.com",
    },
  ],
  openGraph: {
    title: "Blog | Amirhossein Alibakhshi",
    description: "Insights and thoughts from Amirhossein Alibakhshi.",
    // url: "https://blog.amirhosseinalibakhshi.com",
    siteName: "Amirhossein Alibakhshi",
    // images: [
    //   {
    //     url: "https://amirhosseinalibakhshi.com/og-image.jpg", // Replace with your OG image URL
    //     width: 1200,
    //     height: 630,
    //     alt: "Amirhossein Alibakhshi Blog Cover",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://amirhosseinalibakhshi.com"),
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
