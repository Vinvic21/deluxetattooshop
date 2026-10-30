import { useState } from 'react'
import { business } from '../data/businessInfo.js'
import WhatsAppButton from './WhatsAppButton.jsx'

const links = [
  { href: '#about', label: 'About' },
  { href: '#styles', label: 'Styles' },
  { href: '#book', label: 'Book' },
  { href: '#visit', label: 'Visit' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>{business.name}</a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" aria-label="Main" className={open ? 'open' : ''}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <WhatsAppButton compact />
        </nav>
      </div>
    </header>
  )
}