import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Vitor Daniel",
  description: "Desenvolvedor Full Stack, apaixonado por tecnologia e inovação."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" data-theme="mocha">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://umami.vitordaniel.com/script.js"
          data-website-id="144e064e-3088-45fb-b202-c0cadc65cac9"
        />
      </body>
    </html>
  )
}
