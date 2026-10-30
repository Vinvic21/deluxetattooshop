import { whatsapp } from '../data/businessInfo.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

// Fixed bottom-right button that stays visible while scrolling.
export default function FloatingWhatsApp() {
  return (
    <a
      className="wa-float"
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp (opens WhatsApp)"
    >
      <WhatsAppIcon size={32} />
      <span className="wa-float-label">Book on WhatsApp</span>
    </a>
  )
}