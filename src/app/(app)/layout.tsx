import { Analytics } from "@vercel/analytics/next"
import type { PropsWithChildren } from "react"

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Analytics />
    </>
  )
}

export default Layout
