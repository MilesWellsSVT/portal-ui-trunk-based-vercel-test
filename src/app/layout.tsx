import type { Metadata } from "next";
import "@svt/design-system/css";

export const metadata: Metadata = {
  title: `(${process.env.NEXT_PUBLIC_ENV}) Trunk Based Deployment`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
