import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meet-Me",
  description: "A Advance Meeting Web App",
  icons: {
    icon: "/icons/me.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/meet.png",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
<<<<<<< HEAD
            colorBackground: "#96d099",
            colorInputBackground: "#96d099",
=======
            colorBackground: "#4B0082", //clerk popup color
            colorInputBackground: "#4B0082",
>>>>>>> 794de6e (Updated full project)
            colorInputText: "#fff",
          },
        }}
      >
        
        {/* clerk bg color */}

        <body className={`${inter.className} bg-dark-5`}>  
          <Toaster />
          {children}  
        </body>
      </ClerkProvider>
    </html>
  );
}
