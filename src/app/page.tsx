
'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Preload other pages when user hovers over nav links
    const navLinks = document.querySelectorAll('nav a')
    
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href')
        if (href && href !== window.location.pathname) {
          // Prefetch the page
          const linkElement = document.createElement('link')
          linkElement.rel = 'prefetch'
          linkElement.href = href
          document.head.appendChild(linkElement)
        }
      }, { once: true })
    })
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      {/* Header */}
      <header style={{
        background: '#36454F',
        color: 'white',
        padding: '15px 20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 40
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Logo and Brand Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* Logo Image */}
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#D4AF37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #D4AF37',
              flexShrink: 0
            }}>
              <img 
                src="/logo.png" 
                alt="Prime Cuts Kenya Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            {/* Brand Name and Location */}
            <div>
              <h1 style={{ 
                fontSize: '1.8rem', 
                fontWeight: 'bold',
                color: '#D4AF37',
                margin: 0,
                lineHeight: '1.2'
              }}>
                PRIME CUTS KENYA
              </h1>
              <p style={{
                color: 'white',
                fontSize: '14px',
                margin: '2px 0 0 0',
                fontWeight: '500',
                opacity: '0.9'
              }}>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav style={{ display: 'flex', gap: '20px' }}>
            <a href="/" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>HOME</a>
            <a href="/products" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>PRODUCTS</a>
            <a href="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>ABOUT</a>
            <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>CONTACT</a>
          </nav>
        </div>
        
        {/* Top Info Bar - Updated */}
<div style={{
  background: '#2f3a42', // dark variant of header
  color: '#D4AF37',
  padding: '6px 20px',
  fontSize: '13px',
  fontWeight: '500',
  textAlign: 'center',
}}>
  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '5px',
  }}>
    <span>🥩 Premium Quality Meats</span>
    <span>📞 +254 799 691784</span>
    <span>⭐ 5-Star Rated Service</span>
  </div>
</div>


        
      </header>

      {/* Hero Section - DEBUGGED AND FIXED */}
      <section style={{
        position: 'relative',
        color: 'white',
        padding: '120px 20px',
        textAlign: 'center',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        
        {/* Background Image Layer */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/hero-bgg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}>
        </div>

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(128, 0, 32, 0.40) 0%, rgba(54, 69, 79, 0.40) 100%)',
          zIndex: 2
        }}>
        </div>
        
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{ 
            fontSize: '3.8rem', 
            fontWeight: 'bold',
            marginBottom: '25px',
            lineHeight: '1.1',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            ELEVATE YOUR<br />
            <span style={{ color: '#D4AF37' }}>CULINARY EXPERIENCE</span>
          </h1>
          <p style={{ 
            fontSize: '1.4rem',
            margin: '0 auto 50px',
            lineHeight: '1.6',
            maxWidth: '600px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Nairobi's premier destination for premium meats and seafood. 
            Where quality meets sophistication.
          </p>
          <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/products" style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
              color: '#36454F',
              padding: '18px 35px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '17px',
              boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-block'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(212, 175, 55, 0.6)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.4)';
            }}
            >
              🛒 SHOP PREMIUM CUTS
            </a>
            <a href="/about" style={{
              border: '2px solid #D4AF37',
              color: '#D4AF37',
              padding: '18px 35px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '17px',
              background: 'transparent',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              display: 'inline-block'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#D4AF37';
              e.currentTarget.style.color = '#36454F';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#D4AF37';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              📖 DISCOVER OUR STORY
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1a202c',
        color: 'white',
        padding: '30px 20px',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Prime Cuts Kenya. All rights reserved.</p>
      </footer>
    </div>
  )
}             
