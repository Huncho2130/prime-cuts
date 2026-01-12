'use client'

import { useEffect, useState } from 'react'

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const navLinks = document.querySelectorAll('nav a')

    navLinks.forEach(link => {
      link.addEventListener(
        'mouseenter',
        () => {
          const href = link.getAttribute('href')
          if (href && href !== window.location.pathname) {
            const linkElement = document.createElement('link')
            linkElement.rel = 'prefetch'
            linkElement.href = href
            document.head.appendChild(linkElement)
          }
        },
        { once: true }
      )
    })
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    const message = `*NEW CUSTOMER MESSAGE*%0A%0A*👤 Name:* ${data.first_name} ${data.last_name}%0A*📧 Email:* ${data.email}%0A*📞 Phone:* ${data.phone || 'Not provided'}%0A*💬 Message:*%0A${data.message}%0A%0A*📍 Sent via Prime Cuts Website*`

    window.open(`https://wa.me/254799691784?text=${message}`, '_blank')
    e.currentTarget.reset()
    alert('✅ Message ready! Opening WhatsApp to send...')
  }

  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      {/* Header */}
      <header style={{ background: '#36454F', color: 'white', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#D4AF37' }}>PRIME CUTS KENYA</h1>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <a href="/">HOME</a>
            <a href="/products">PRODUCTS</a>
            <a href="/about">ABOUT</a>
            <a href="/contact" style={{ color: '#D4AF37' }}>CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Contact Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(350px,1fr))', gap: '60px' }}>

          {/* Contact Information */}
          <div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '30px' }}>Contact Information</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <p>📍 City Market, Nairobi CBD</p>
              <a href="https://wa.me/254799691784">📞 +254 799 691784</a>
              <a href="mailto:info@primecuts.co.ke">✉️ info@primecuts.co.ke</a>

              <div style={{ marginTop: '40px', textAlign: isMobile ? 'center' : 'left' }}>
                <h3>Follow Us</h3>
                <div style={{ display: 'flex', gap: '15px', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                  <a href="https://www.facebook.com/profile.php?id=61585754352814" target="_blank">Facebook</a>
                  <a href="https://www.instagram.com" target="_blank">Instagram</a>
                  <a href="https://tiktok.com/@user30739739049823" target="_blank">TikTok</a>
                  <a href="https://twitter.com/th" target="_blank">X</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '20px' }}>
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input name="first_name" placeholder="First Name" required />
              <input name="last_name" placeholder="Last Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Message" required />
              <button type="submit">💬 Send via WhatsApp</button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section style={{ padding: '60px 20px', background: '#f8fafc' }}>
        <iframe
          title="Prime Cuts Location"
          src="https://www.google.com/maps?q=City+Market+Nairobi&output=embed"
          style={{ width: '100%', height: '400px', border: 0 }}
          loading="lazy"
        />
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px', textAlign: 'center', background: '#1a202c', color: 'white' }}>
        <p>© 2025 Prime Cuts Kenya. All rights reserved.</p>
      </footer>
    </div>
  )
}
