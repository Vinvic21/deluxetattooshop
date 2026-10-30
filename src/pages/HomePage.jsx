import { useState, useCallback } from 'react'
import { business, mapsLink, styles, images, gallery } from '../data/businessInfo.js'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'

const ticker = ['Open every day', '12 pm to 8 pm', '1459 W Irving Park Rd', 'Chicago, IL', business.phoneDisplay]

function Letters({ text, start = 0 }) {
  return text.split('').map((c, i) => (
    <span key={i} className="ltr" style={{ animationDelay: `${(start + i) * 60}ms` }} aria-hidden="true">{c}</span>
  ))
}

export default function HomePage() {
  const a = business.address
  const [lb, setLb] = useState(null)
  const move = useCallback((d) => setLb((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)), [])

  return (
    <>
      <section id="top" className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1 aria-label="Deluxe Tattoo">
              <span className="h1-a"><Letters text="DELUXE" /></span>
              <span className="h1-b"><Letters text="TATTOO" start={6} /></span>
            </h1>
            <p className="lead">A tattoo shop on Irving Park Road in Chicago, open every day from noon to 8 pm.</p>
            <div className="actions">
              <a className="btn btn-dark" href={business.phoneHref}>Call {business.phoneDisplay}</a>
              <a className="btn btn-line" href="#work">See the work</a>
            </div>
          </div>
          <div className="hero-art">
            <img className="sign-img" src={images.sign.src} alt={images.sign.alt} width={images.sign.w} height={images.sign.h} fetchPriority="high" />
            <svg className="badge" viewBox="0 0 200 200" role="img" aria-label="Open daily, 12 to 8 pm">
              <defs><path id="ring" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" /></defs>
              <circle cx="100" cy="100" r="96" fill="#c8321e" stroke="#151210" strokeWidth="6" />
              <g className="badge-ring">
                <text fontFamily="Impact, Arial Narrow Bold, sans-serif" fontSize="19" fill="#fbf6e6" letterSpacing="3">
                  <textPath href="#ring">OPEN DAILY * OPEN DAILY * OPEN DAILY *</textPath>
                </text>
              </g>
              <text x="100" y="116" textAnchor="middle" fontFamily="Impact, Arial Narrow Bold, sans-serif" fontSize="44" fill="#fbf6e6">12 - 8</text>
            </svg>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((n) => (
            <ul key={n}>{ticker.map((t) => <li key={t + n}>{t}</li>)}</ul>
          ))}
        </div>
      </div>

      <section id="about" className="section">
        <div className="wrap about-grid">
          <Reveal className="about-text">
            <h2>About the shop</h2>
            <p>
              Deluxe Tattoo is a tattoo shop at {a.street} in {a.city}. The counter, the walls and the
              windows are covered in flash sheets and framed art, and the doors are open seven days a week.
            </p>
            <p>To ask about a tattoo idea or an appointment, call the shop or stop by.</p>
            <a className="btn btn-dark" href={business.phoneHref}>Call the shop</a>
          </Reveal>
          <Reveal className="about-photos" delay={150}>
            <img className="tilt-l" src={images.counter.src} alt={images.counter.alt} width={images.counter.w} height={images.counter.h} loading="lazy" />
            <img className="tilt-r" src={images.floor.src} alt={images.floor.alt} width={images.floor.w} height={images.floor.h} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section id="styles" className="section section-tint">
        <div className="wrap">
          <Reveal><h2>Styles of tattoo work</h2></Reveal>
          <ul className="flash">
            {styles.map((s, i) => (
              <Reveal as="li" key={s.name} delay={i * 90} className="flash-card">
                <div className="flash-img"><img src={s.img.src} alt={s.img.alt} loading="lazy" /></div>
                <div className="flash-body">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className="section">
        <div className="wrap">
          <Reveal><h2>Recent work</h2><p className="sub">Tap a photo to see it larger.</p></Reveal>
          <ul className="grid">
            {gallery.map((g, i) => (
              <Reveal as="li" key={g.alt} delay={(i % 3) * 90}>
                <button className="tile" onClick={() => setLb(i)} aria-label={`View larger: ${g.alt}`}>
                  <img src={g.src} alt="" width={g.w} height={g.h} loading="lazy" />
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="visit" className="section section-dark">
        <div className="wrap visit-grid">
          <Reveal>
            <h2>Visit or call</h2>
            <address>
              <strong>{business.name}</strong><br />
              {a.street}<br />
              {a.city}, {a.region} {a.postalCode}
            </address>
            <p>Phone: <a href={business.phoneHref}>{business.phoneDisplay}</a></p>
            {business.email && <p>Email: <a href={`mailto:${business.email}`}>{business.email}</a></p>}
            <div className="actions">
              <a className="btn btn-sign" href={business.phoneHref}>Call the shop</a>
              <a className="btn btn-ghost" href={mapsLink} target="_blank" rel="noopener noreferrer">Get directions (opens Google Maps)</a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h3>Opening hours</h3>
            <table className="hours">
              <tbody>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((d) => (
                  <tr key={d}><th scope="row">{d}</th><td>{business.hours.time}</td></tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <Lightbox items={gallery} index={lb} onClose={() => setLb(null)} onMove={move} />
    </>
  )
}
