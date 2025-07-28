import Script from "next/script"
import type { PropsWithChildren } from "react"

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Script
        defer
        strategy="afterInteractive"
        src="https://umami.vitordaniel.com/script.js"
        data-website-id="a84bb8af-0050-47fc-99b0-d96a7256bfb5"
      />
    </>
  )
}

export default Layout
