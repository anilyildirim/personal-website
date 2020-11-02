import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="navigation">
          <Link to="/">
            <h3 className="main-logo">Anil Yildirim</h3>
          </Link>
          <nav>
            <ul>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about/">About</ListLink>
              <ListLink to="/about-css/">About CSS</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
            </ul>
          </nav>
        </div>
      </header>
      <div className="page-content">
        {children}
      </div>
      <footer className="footer">
        <nav>
          <ul className="footer__inner">
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/about-css/">About CSS</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </nav>
      </footer>
    </div>
  )
}