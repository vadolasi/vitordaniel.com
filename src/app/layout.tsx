import * as Sentry from "@sentry/nextjs"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export function generateMetadata(): Metadata {
  return {
    title: "Vitor Daniel",
    description:
      "Desenvolvedor Full Stack, apaixonado por tecnologia e inovação.",
    metadataBase: new URL("https://vitordaniel.com"),
    keywords: [
      "Vitor Daniel",
      "Desenvolvedor Full Stack",
      "Tecnologia",
      "Inovação",
      "Programação",
      "JavaScript",
      "React",
      "Next.js"
    ],
    openGraph: {
      siteName: "Vitor Daniel",
      type: "website",
      locale: "pt_BR"
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      googleBot: "index, follow"
    },
    alternates: {
      types: {
        "application/rss+xml": "https://vitordaniel.com/rss.xml"
      }
    },
    applicationName: "Vitor Daniel",
    appleWebApp: {
      title: "Vitor Daniel",
      statusBarStyle: "default",
      capable: true
    },
    other: {
      ...Sentry.getTraceData()
    }
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" data-theme="mocha" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
