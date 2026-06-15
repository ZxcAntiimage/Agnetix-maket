"use client"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  if (process.env.NODE_ENV === 'development') {
    useEffect(() => {
      const badConsoleError = console.error;
      console.error = (...args) => {
        const errorMessage = String(args[0] || '');
        if (errorMessage.includes('Encountered a script tag while rendering React component')) {
          return;
        }
        badConsoleError(...args);
      };

      return () => {
        console.error = badConsoleError;
      };
    }, []);
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body className="bg-[#120F17] min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
