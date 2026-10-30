import { useEffect, useRef } from 'react'

export default function Lightbox({ items, index, onClose, onMove }) {
  const ref = useRef(null)
  const open = index !== null
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onMove])
  const item = open ? items[index] : null
  return (
    <dialog ref={ref} className="lightbox" onClose={onClose} onClick={(e) => e.target === ref.current && onClose()} aria-label="Photo viewer">
      {item && (
        <div className="lb-inner">
          <img src={item.src} alt={item.alt} />
          <p className="lb-count">{index + 1} of {items.length}</p>
          <div className="lb-bar">
            <button onClick={() => onMove(-1)} aria-label="Previous photo">Previous</button>
            <button onClick={() => onMove(1)} aria-label="Next photo">Next</button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </dialog>
  )
}
