import { whatsapp } from '../data/businessInfo.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

// Opens WhatsApp with the ready-made booking message filled in.
export default function WhatsAppButton({ large = false, compact = false }) {
  return (
    <a
      className={`btn btn-wa${large ? ' btn-wa-lg' : ''}${compact ? ' btn-wa-compact' : ''}`}
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon size={large ? 28 : 22} />
      <span>Book on WhatsApp</span>
      <span className="sr-only"> (opens WhatsApp)</span>
    </a>
  )
}