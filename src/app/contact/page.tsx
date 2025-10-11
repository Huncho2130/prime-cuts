'use client'
import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a')
    
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href')
        if (href && href !== window.location.pathname) {
          const linkElement = document.createElement('link')
          linkElement.rel = 'prefetch'
          linkElement.href = href
          document.head.appendChild(linkElement)
        }
      }, { once: true })
    })
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    const message = `*NEW CUSTOMER MESSAGE*%0A%0A*👤 Name:* ${data.first_name} ${data.last_name}%0A*📧 Email:* ${data.email}%0A*📞 Phone:* ${data.phone || 'Not provided'}%0A*💬 Message:*%0A${data.message}%0A%0A*📍 Sent via Prime Cuts Website*`;
    
    window.open(`https://wa.me/254799691784?text=${message}`, '_blank');
    e.currentTarget.reset();
    alert('✅ Message ready! Opening WhatsApp to send...');
  };

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
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
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '🥩';
                    parent.style.fontSize = '24px';
                    parent.style.color = '#36454F';
                    parent.style.display = 'flex';
                    parent.style.alignItems = 'center';
                    parent.style.justifyContent = 'center';
                  }
                }}
              />
            </div>
            
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
                📍 City Market, Nairobi CBD
              </p>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '20px' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>HOME</a>
            <a href="/products" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>PRODUCTS</a>
            <a href="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>ABOUT</a>
            <a href="/contact" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>CONTACT</a>
          </nav>
        </div>
        
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
        position: 'relative',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }} />
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(128, 0, 32, 0.70) 0%, rgba(54, 69, 79, 0.70) 100%)',
          zIndex: 2
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold',
            marginBottom: '20px',
            lineHeight: '1.1',
            textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
          }}>
            GET IN TOUCH
          </h1>
          <p style={{ 
            fontSize: '1.3rem',
            margin: '0 auto',
            lineHeight: '1.6',
            maxWidth: '600px',
            textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
            opacity: '0.95'
          }}>
            We're here to serve you with the finest cuts and exceptional service. 
            Reach out anytime!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '60px'
          }}>
            {/* Contact Information */}
            <div>
              <h2 style={{ 
                fontSize: '2.2rem',
                fontWeight: 'bold',
                color: '#36454F',
                marginBottom: '30px'
              }}>
                Contact Information
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                    padding: '12px',
                    borderRadius: '12px',
                    color: '#36454F'
                  }}>
                    📍
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#36454F',
                      margin: '0 0 5px 0'
                    }}>
                      Visit Our Store
                    </h3>
                    <p style={{ 
                      color: '#4a5568',
                      margin: '0',
                      lineHeight: '1.5'
                    }}>
                      City Market, Nairobi CBD<br />
                      Ground Floor, Stall 63<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    padding: '12px',
                    borderRadius: '12px',
                    color: 'white'
                  }}>
                    💬
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#36454F',
                      margin: '0 0 5px 0'
                    }}>
                      Call or WhatsApp
                    </h3>
                    <a 
                      href="https://wa.me/254799691784"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: '#25D366',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '1.1rem'
                      }}
                    >
                      +254 799 691784
                    </a>
                    <p style={{ 
                      color: '#4a5568',
                      margin: '5px 0 0 0',
                      fontSize: '14px'
                    }}>
                      Fastest way to reach us. We respond within minutes!
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #800020 0%, #600018 100%)',
                    padding: '12px',
                    borderRadius: '12px',
                    color: 'white'
                  }}>
                    ✉️
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#36454F',
                      margin: '0 0 5px 0'
                    }}>
                      Email Us
                    </h3>
                    <a 
                      href="mailto:info@primecuts.co.ke"
                      style={{ 
                        color: '#800020',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '1.1rem'
                      }}
                    >
                      info@primecuts.co.ke
                    </a>
                    <p style={{ 
                      color: '#4a5568',
                      margin: '5px 0 0 0',
                      fontSize: '14px'
                    }}>
                      For inquiries and bulk orders
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #36454F 0%, #2a363f 100%)',
                    padding: '12px',
                    borderRadius: '12px',
                    color: 'white'
                  }}>
                    🕒
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#36454F',
                      margin: '0 0 5px 0'
                    }}>
                      Business Hours
                    </h3>
                    <p style={{ 
                      color: '#4a5568',
                      margin: '0',
                      lineHeight: '1.5'
                    }}>
                      Monday - Saturday: 7:00 AM - 8:00 PM<br />
                      Sunday: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
            }}>
              <h2 style={{ 
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#36454F',
                marginBottom: '30px'
              }}>
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div>
                    <input 
                      type="text"
                      name="first_name"
                      placeholder="First Name *"
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '10px',
                        fontSize: '15px',
                        background: 'white'
                      }}
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="text"
                      name="last_name"
                      placeholder="Last Name *"
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '10px',
                        fontSize: '15px',
                        background: 'white'
                      }}
                      required
                    />
                  </div>
                </div>
                
                <input 
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    fontSize: '15px',
                    background: 'white'
                  }}
                  required
                />
                
                <input 
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    fontSize: '15px',
                    background: 'white'
                  }}
                />
                
                <textarea 
                  name="message"
                  placeholder="Your Message *"
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    fontSize: '15px',
                    background: 'white',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  required
                />
                
                <button 
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    color: 'white',
                    padding: '18px',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  💬 Send via WhatsApp
                </button>
                
                <p style={{ 
                  textAlign: 'center', 
                  color: '#666', 
                  fontSize: '14px', 
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  We'll open WhatsApp with your message ready to send.<br />
                  Just tap "Send" to deliver it directly to our team!
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section style={{ padding: '60px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#36454F',
            marginBottom: '40px'
          }}>
            Visit Our Store
          </h2>
          
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '2px solid rgba(212, 175, 55, 0.2)',
            height: '400px'
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817476559441!2d36.82021457568751!3d-1.2830994356517475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d43db7d6a9%3A0x4a37c6aded9a7d1c!2sCity%20Market%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prime Cuts Kenya Location"
            />
          </div>
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
  )
}




