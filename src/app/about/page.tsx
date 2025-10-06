
'use client'
import { CartProvider } from '@/context/cartContext'
import { useEffect } from 'react'

export default function About() {
  // MOVED useEffect INSIDE the component function
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
    <CartProvider>
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
            <h1 style={{ 
              fontSize: '1.8rem', 
              fontWeight: 'bold',
              color: '#D4AF37',
              margin: 0
            }}>
              PRIME CUTS KENYA
            </h1>
            <nav style={{ display: 'flex', gap: '20px' }}>
              <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>HOME</a>
              <a href="/products" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>PRODUCTS</a>
              <a href="/about" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>ABOUT</a>
              <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>CONTACT</a>
            </nav>
          </div>
          
          {/* Top Info Bar */}
          <div style={{
            background: '#D4AF37',
            color: '#36454F',
            padding: '8px 20px',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'center'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
              <span>📍 City Market, Nairobi CBD</span>
              <span>📞 +254 799 691784</span>
              <span>⭐ Premium Quality Guaranteed</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section style={{
          background: `linear-gradient(135deg, 
            rgba(128, 0, 32, 0.85) 0%, 
            rgba(54, 69, 79, 0.85) 100%),
            url('https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 20px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold',
              marginBottom: '20px',
              lineHeight: '1.1'
            }}>
              CRAFTING CULINARY<br />
              <span style={{ color: '#D4AF37' }}>EXCELLENCE</span>
            </h1>
            <p style={{ 
              fontSize: '1.3rem',
              margin: '0 auto 40px',
              lineHeight: '1.6',
              maxWidth: '600px'
            }}>
              For over a decade, we've been Nairobi's trusted source for premium meats, 
              where every cut tells a story of quality and passion.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section style={{ padding: '80px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '60px',
              alignItems: 'center'
            }}>
              <div>
                <h2 style={{ 
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#36454F',
                  marginBottom: '20px'
                }}>
                  Our Journey
                </h2>
                <p style={{ 
                  fontSize: '1.1rem',
                  color: '#4a5568',
                  lineHeight: '1.7',
                  marginBottom: '30px'
                }}>
                  Starting from a small stall in City Market, we've grown into Nairobi's premier butcher 
                  by staying true to one principle: uncompromising quality. Our expert butchers bring 
                  generations of knowledge to every cut.
                </p>
                <div style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                  color: '#36454F',
                  padding: '15px 25px',
                  borderRadius: '10px',
                  display: 'inline-block',
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  🥩 Serving Nairobi Since 2020
                </div>
              </div>
              
              <div style={{
                background: `linear-gradient(135deg, 
                  rgba(128, 0, 32, 0.1) 0%, 
                  rgba(54, 69, 79, 0.1) 100%),
                  url('/about-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }} />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          padding: '80px 20px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#36454F',
              marginBottom: '60px'
            }}>
              Why Choose Prime Cuts
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px'
            }}>
              <div style={{
                background: 'white',
                padding: '40px 30px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                textAlign: 'center'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '28px'
                }}>
                  🥩
                </div>
                <h3 style={{ 
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#36454F',
                  marginBottom: '15px'
                }}>
                  Premium Selection
                </h3>
                <p style={{ 
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  Hand-selected cuts from trusted local sources, ensuring superior quality and flavor.
                </p>
              </div>

              <div style={{
                background: 'white',
                padding: '40px 30px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                textAlign: 'center'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #800020 0%, #600018 100%)',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '28px',
                  color: 'white'
                }}>
                  👨‍🍳
                </div>
                <h3 style={{ 
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#36454F',
                  marginBottom: '15px'
                }}>
                  Expert Butchers
                </h3>
                <p style={{ 
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  Master craftsmen with decades of experience in perfecting every cut to your preference.
                </p>
              </div>

              <div style={{
                background: 'white',
                padding: '40px 30px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                textAlign: 'center'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #36454F 0%, #2a363f 100%)',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '28px',
                  color: 'white'
                }}>
                  🚚
                </div>
                <h3 style={{ 
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#36454F',
                  marginBottom: '15px'
                }}>
                  CBD Delivery
                </h3>
                <p style={{ 
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  Fresh delivery to your doorstep within Nairobi CBD. Quality guaranteed, always.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          background: 'linear-gradient(135deg, #36454F 0%, #2a363f 100%)',
          color: 'white',
          padding: '80px 20px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              Ready to Taste the Difference?
            </h2>
            <p style={{ 
              fontSize: '1.2rem',
              marginBottom: '40px',
              opacity: '0.9'
            }}>
              Experience why Nairobi's finest restaurants and homes trust us for their premium meat needs.
            </p>
            <a 
              href="/products"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                color: '#36454F',
                padding: '18px 40px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                display: 'inline-block',
                boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)',
                transition: 'all 0.3s ease'
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
              🛒 SHOP OUR PREMIUM SELECTION
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          background: '#1a202c',
          color: 'white',
          padding: '40px 20px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '1rem' }}>
            &copy; 2025 Prime Cuts Kenya. All rights reserved.
          </p>
          <p style={{ 
            margin: '10px 0 0 0', 
            color: '#D4AF37', 
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Premium Meats & Seafood • Nairobi's Trusted Butcher Since 2020
          </p>
        </footer>
      </div>
    </CartProvider>
  )
}