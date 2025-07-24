import Script from "next/script"
import type { PropsWithChildren } from "react"

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Script
        defer
        strategy="afterInteractive"
        src={process.env.UMAMI_SCRIPT_SRC}
        data-website-id={process.env.UMAMI_SCRIPT_ID}
      />
    </>
  )
}

export default Layout
