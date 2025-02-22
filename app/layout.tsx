import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Zhamira's Art & Tales",
  description: "for creativity and arts and crafts, thinking minds. for kids and adults.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
