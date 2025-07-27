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
        data-website-id="df133723-4642-4634-bbb9-b839a0f205fa"
      />
    </>
  )
}

export default Layout
