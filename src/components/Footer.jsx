import { business, mapsLink } from '../data/businessInfo.js'

export default function Footer() {
  const a = business.address
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <p><strong>{business.name}</strong></p>
        <address>
          {a.street}, {a.city}, {a.region} {a.postalCode}<br />
          <a href={business.phoneHref}>{business.phoneDisplay}</a>
        </address>
        <p><a href={mapsLink} target="_blank" rel="noopener noreferrer">Directions (opens Google Maps)</a></p>
        <p className="small">&copy; {new Date().getFullYear()} {business.name}</p>
      </div>
    </footer>
  )
}
