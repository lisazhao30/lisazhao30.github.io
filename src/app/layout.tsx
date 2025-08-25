import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Create a soft pastel theme
const theme = createTheme({
  primaryColor: "blue",
  colors: {
    background: [
      "#f8f9fa",
      "#f1f3f4",
      "#e8eaed",
      "#dadce0",
      "#bdc1c6",
      "#9aa0a6",
      "#80868b",
      "#5f6368",
      "#3c4043",
      "#202124",
    ],
    soft: [
      "#fef7f0",
      "#fef2e8",
      "#fdecd6",
      "#fce5c4",
      "#fbdeb2",
      "#fad7a0",
      "#f9d08e",
      "#f8c97c",
      "#f7c26a",
      "#f6bb58",
    ],
  },
  fontFamily: geistSans.style.fontFamily,
});

export const metadata: Metadata = {
  title: "Lisa Zhao - Systems Design Engineering",
  description:
    "Personal website of Lisa Zhao, Systems Design Engineering student",
  icons: {
    icon: "/FaviconIcon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/FaviconIcon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
