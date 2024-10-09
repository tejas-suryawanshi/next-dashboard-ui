import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GyanSagarPublicSchool | HomePage",
  description: "Next.js School Management System",
  icons: {
    icon: "/favicon-32x32.png" ,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <div></div>


      </body>
    </html>
  );
}
