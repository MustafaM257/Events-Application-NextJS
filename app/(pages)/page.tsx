import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Event Manager",
//   description: "Event Management Platform",
//   icons: {
//     icon: "/assets/images/logo.svg",
//   },
// };

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
