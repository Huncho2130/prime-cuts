'use client'
import { useEffect } from 'react'

export default function Contact() {
  // ADD PRELOAD EFFECT HERE
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Create formatted message for WhatsApp
    const message = `*NEW CUSTOMER MESSAGE*%0A%0A*👤 Name:* ${data.first_name} ${data.last_name}%0A*📧 Email:* ${data.email}%0A*📞 Phone:* ${data.phone || 'Not provided'}%0A*💬 Message:*%0A${data.message}%0A%0A*📍 Sent via Prime Cuts Website*`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/254799691784?text=${message}`, '_blank');
    
    // Reset form
    e.currentTarget.reset();
    
    // Show success message
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

      {/* Rest of your contact page code remains exactly the same */}
      {/* Hero Section - UPDATED WITH SOFTER DESIGN */}
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
        {/* Background Image Layer */}
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
          zIndex: 1,
          transition: 'transform 0.8s ease'
        }} />
        
        {/* Softer Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(128, 0, 32, 0.70) 0%, rgba(54, 69, 79, 0.70) 100%)',
          zIndex: 2,
          backdropFilter: 'blur(1px)'
        }} />
        
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '800px',
          margin: '0 auto',
          transition: 'transform 0.5s ease'
        }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold',
            marginBottom: '20px',
            lineHeight: '1.1',
            textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
            transition: 'all 0.5s ease'
          }}>
            GET IN TOUCH
          </h1>
          <p style={{ 
            fontSize: '1.3rem',
            margin: '0 auto',
            lineHeight: '1.6',
            maxWidth: '600px',
            textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
            opacity: '0.95',
            transition: 'all 0.5s ease'
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
                {/* Location */}
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

                {/* Phone */}
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

                {/* Email */}
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

                {/* Business Hours */}
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

              {/* Social Media */}
              <div style={{ marginTop: '40px' }}>
                <h3 style={{ 
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#36454F',
                  marginBottom: '20px'
                }}>
                  Follow Us
                </h3>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  {/* Social media buttons remain the same */}
                  <a 
                    href="https://www.facebook.com/profile.php?id=61564890268110" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      background: '#1877F2',
                      color: 'white',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>

{/* Instagram */}
  <a 
    href="https://www.instagram.com/primecutskenya" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      background: 'linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)',
      color: 'white',
      padding: '12px 16px',
      borderRadius: '10px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease'
    }}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.75-.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5z"/>
    </svg>
    Instagram
  </a>

  {/* TikTok */}
  <a 
    href="https://www.tiktok.com/@user30739739049823" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      background: '#000000',
      color: 'white',
      padding: '12px 16px',
      borderRadius: '10px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease'
    }}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 2.002c.838 0 1.522.684 1.522 1.522v10.274a2.743 2.743 0 1 1-2.743-2.742c.37 0 .734.08 1.071.23V7.262a6.054 6.054 0 1 0 4.984 5.955V9.744a5.56 5.56 0 0 0 3.727 1.37V7.989a3.964 3.964 0 0 1-3.727-3.953v-.534A1.522 1.522 0 0 0 15.312 2h-3.31z"/>
    </svg>
    TikTok
  </a>

  {/* X (Twitter) */}
  <a 
    href="https://twitter.com/primecutskenya" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      background: '#000000',
      color: 'white',
      padding: '12px 16px',
      borderRadius: '10px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease'
    }}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.162 2H17.9l-5.2 7.252L7.8 2H1.838l6.87 9.634L1.9 22h5.26l4.095-6.016L15.45 22h5.146l-6.843-9.366L22.162 2z"/>
    </svg>
    X
  </a>












                  
                  {/* Add other social media buttons here */}
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
                        transition: 'all 0.3s ease',
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
                        transition: 'all 0.3s ease',
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
                    transition: 'all 0.3s ease',
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
                    transition: 'all 0.3s ease',
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
                    transition: 'all 0.3s ease',
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
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
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

      {/* Rest of your contact page remains the same */}
      {/* ... Google Maps section ... */}
      {/* ... Footer ... */}
    </div>
  )
}

