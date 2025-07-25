import Link from "next/link"

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-screen min-h-screen bg-base-300 text-base-content">
      <div className="max-w-xl mx-auto px-4 py-8">
        <header className="mb-16">
          <nav>
            <Link href="/">Home</Link>
            <span className="mx-2">|</span>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        {children}
      </div>
    </div>
  )
}

export default Layout
