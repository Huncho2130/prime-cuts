'use client'
import { CartProvider } from '@/context/cartContext'
import { useEffect, useState, useCallback } from 'react'

/* ICONS — INLINE, NO IMPORTS */
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.98.52 3.91 1.5 5.61L2 22l4.61-1.59a9.9 9.9 0 005.43 1.6h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.5c-.24.68-1.39 1.3-1.92 1.38-.5.07-1.12.1-1.8-.12-.41-.13-.94-.3-1.62-.59-2.85-1.22-4.7-4.06-4.84-4.25-.13-.19-1.15-1.53-1.15-2.92s.72-2.07.98-2.35c.26-.28.56-.35.75-.35h.54c.17 0 .41-.06.64.49.24.56.82 1.95.89 2.09.07.14.11.3.02.49-.09.19-.13.3-.26.46-.13.17-.27.37-.39.5-.13.13-.27.27-.12.54.15.27.67 1.11 1.44 1.8.99.88 1.82 1.15 2.09 1.28.27.13.43.11.59-.07.17-.19.68-.79.86-1.06.18-.27.36-.22.61-.13.26.09 1.63.77 1.91.91.28.14.46.22.53.35.07.13.07.77-.17 1.45z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

const SmsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>
)

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false)
  const [submitMethod, setSubmitMethod] = useState<'whatsapp' | 'email' | 'sms'>('whatsapp')

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <CartProvider>
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>

          {/* LEFT */}
          <div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#36454F', marginBottom: '30px' }}>
              Contact Information
            </h2>

            {/* SOCIALS */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a style={{ background: '#25D366', color: 'white', padding: '12px 16px', borderRadius: '10px', display: 'flex', gap: '8px', fontWeight: 600 }}>
                <WhatsAppIcon /> WhatsApp
              </a>
              <a style={{ background: '#800020', color: 'white', padding: '12px 16px', borderRadius: '10px', display: 'flex', gap: '8px', fontWeight: 600 }}>
                <EmailIcon /> Email
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ background: '#f9fafb', padding: '40px', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#36454F', marginBottom: '30px' }}>
              Send Us a Message
            </h2>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{
                background: submitMethod === 'whatsapp' ? '#25D366' : '#e5e7eb',
                color: 'white',
                padding: '12px 16px',
                borderRadius: '8px',
                display: 'flex',
                gap: '8px'
              }}>
                <WhatsAppIcon /> WhatsApp
              </button>

              <button style={{
                background: submitMethod === 'email' ? '#800020' : '#e5e7eb',
                color: 'white',
                padding: '12px 16px',
                borderRadius: '8px',
                display: 'flex',
                gap: '8px'
              }}>
                <EmailIcon /> Email
              </button>

              <button style={{
                background: submitMethod === 'sms' ? '#36454F' : '#e5e7eb',
                color: 'white',
                padding: '12px 16px',
                borderRadius: '8px',
                display: 'flex',
                gap: '8px'
              }}>
                <SmsIcon /> SMS
              </button>
            </div>
          </div>

        </div>
      </section>
    </CartProvider>
  )
}
