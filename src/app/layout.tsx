import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../providers/ThemeProvider";
const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://renaemariz.github.io";

export const metadata: Metadata = {
  title: "Renae Mariz Cariño",
  description: "Portfolio",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Renae Mariz Cariño",
    description: "Frontend Developer",
    url: baseUrl,
    siteName: "Portfolio",
    images: [
      {
        url: `${baseUrl}/banner.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-full overflow-x-hidden bg-primary transition-colors duration-500">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
