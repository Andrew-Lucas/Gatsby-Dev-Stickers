import { Link } from 'gatsby'
import * as React from 'react'

interface ILayoutProps {
  pageTitle: string
  children?: any
}
export default function Layout({ pageTitle, children }: ILayoutProps) {
  return (
    <main className="container">
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/blogs">Blogs</Link>
        </div>
        <div>
          <Link to="/about-us">About Us</Link>
        </div>
      </nav>
      <h1>{pageTitle}</h1>
      <main>{children}</main>
    </main>
  )
}
