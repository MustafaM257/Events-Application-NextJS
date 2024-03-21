// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Event Manager",
//   description: "Event Management Platform",
//   icons: {
//     icon: "/assets/images/logo.svg",
//   },
// };

import Hero from "@/components/home/Hero";

export default function RootLayout() {
  return (
    <>
      <Hero />
    </>
  );
}
