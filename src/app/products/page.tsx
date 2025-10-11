
'use client'
import { CartProvider, useCart } from '@/context/cartContext'
import Cart from '@/components/Cart'
import { useEffect, useState } from 'react'

const products = [
  // Beef
  { id: '1', name: 'Rib Eye Steak', price: 1399, category: 'Beef' },
  { id: '2', name: 'Beef Steak', price: 799, category: 'Beef' },
  { id: '3', name: 'Beef on Bone', price: 680, category: 'Beef' },
  
  // Goat & Mutton
  { id: '4', name: 'Goat Meat', price: 750, category: 'Goat & Mutton' },
  
  // Chicken
  { id: '5', name: 'Whole Chicken', price: 650, category: 'Chicken' },
  { id: '6', name: 'Chicken Breast', price: 650, category: 'Chicken' },
  { id: '7', name: 'Chicken Drumstick', price: 650, category: 'Chicken' },
  { id: '8', name: 'Chicken Gizzard', price: 550, category: 'Chicken' },
  
  // Seafood
  { id: '9', name: 'Fish Fillet', price: 999, category: 'Seafood' },
  { id: '10', name: 'Tuna', price: 1349, category: 'Seafood' },
  { id: '11', name: 'Kingfish', price: 1199, category: 'Seafood' },
  { id: '12', name: 'Mackerel', price: 749, category: 'Seafood' },
  { id: '13', name: 'Nile Perch', price: 600, category: 'Seafood' },
  { id: '14', name: 'Salmon Fillet', price: 5500, category: 'Seafood' },
]

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '25px',
      textAlign: 'center',
      boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
      border: '1px solid rgba(212, 175, 55, 0.1)',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)';
    }}
    >
      {/* Premium Badge */}
      <div style={{
        position: 'absolute',
        top: '15px',
        right: '15px',
        background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
        color: '#36454F',
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 'bold',
        boxShadow: '0 2px 8px rgba(212, 175, 55, 0.3)'
      }}>
        PREMIUM
      </div>

      {/* Product Image Area */}
      <div style={{
        height: '180px',
        background: `url('/${product.name.toLowerCase().replace(/\s+/g, '-')}.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        marginBottom: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(2px)',
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <span style={{ 
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: '16px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <h3 style={{ 
        color: '#36454F', 
        marginBottom: '12px', 
        fontSize: '20px',
        fontWeight: '700',
        minHeight: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {product.name}
      </h3>
      
      <p style={{ 
        color: '#D4AF37', 
        fontSize: '1.75rem', 
        fontWeight: 'bold', 
        marginBottom: '20px',
        textShadow: '0 2px 4px rgba(212, 175, 55, 0.2)'
      }}>
        KSh {product.price.toLocaleString()}
      </p>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingTop: '15px',
        borderTop: '1px solid rgba(0,0,0,0.1)'
      }}>
        <span style={{
          background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
          color: '#4a5568',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: '600',
          border: '1px solid #e2e8f0'
        }}>
          {product.category}
        </span>
        
        <button 
          onClick={() => addToCart(product)}
          style={{
            background: 'linear-gradient(135deg, #800020 0%, #600018 100%)',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            boxShadow: '0 4px 15px rgba(128, 0, 32, 0.3)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #800020 0%, #600018 100%)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(128, 0, 32, 0.3)';
          }}
        >
          <span>🛒</span>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

function ProductsContent() {
  const { cart, itemCount } = useCart()
  const [isMounted, setIsMounted] = useState(false)

  // ADD PRELOAD EFFECT HERE
  useEffect(() => {
    setIsMounted(true)
    
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

  // Prevent hydration by not rendering cart-dependent UI until mounted
  if (!isMounted) {
    return (
      <div style={{ minHeight: '100vh', background: '#f7fafc' }}>
        {/* Simple loading header */}
        <header style={{
          background: '#36454F',
          color: 'white',
          padding: '15px 20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                background: '#D4AF37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #D4AF37'
              }}>
                🥩
              </div>
              <div>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#D4AF37', margin: 0 }}>
                  PRIME CUTS KENYA
                </h1>
                <p style={{ color: 'white', fontSize: '14px', margin: '2px 0 0 0', fontWeight: '500' }}>
                
                </p>
              </div>
            </div>
          </div>
        </header>
        
        {/* Loading content */}
        <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🥩</div>
          <p>Loading premium selection...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f7fafc' }}>
      {/* Header */}
      <header style={{
        background: '#36454F',
        color: 'white',
        padding: '15px 20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
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
                📍 City Market, Nairobi CBD
              </p>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>HOME</a>
            <a href="/products" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>PRODUCTS</a>
            <a href="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>ABOUT</a>
            <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>CONTACT</a>
            
            {itemCount > 0 && (
              <div style={{
                background: '#D4AF37',
                color: '#36454F',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {itemCount}
              </div>
            )}
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
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
            <span>📍 City Market, Nairobi CBD</span>
            <span>📞 +254 799 691784</span>
            <span>⭐ Premium Quality Guaranteed</span>
          </div>
        </div>
      

      {/* Main Content */}
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            color: '#36454F',
            marginBottom: '15px',
            fontWeight: 'bold'
          }}>
            OUR PREMIUM SELECTION
          </h1>
          <p style={{ 
            fontSize: '1.2rem',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Handpicked cuts of the finest quality, curated for discerning palates
          </p>
          
          {cart.length > 0 && (
            <div style={{
              background: '#D4AF37',
              color: '#36454F',
              padding: '10px 20px',
              borderRadius: '5px',
              marginTop: '20px',
              display: 'inline-block',
              fontWeight: '600'
            }}>
              🛒 {cart.length} item(s) in cart - Checkout panel appears on the bottom right!
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>


{/* Halal Logo Section */}
<div
  style={{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '20px 40px',
    marginTop: '40px'
  }}
>
  <img
    src="/halal.png"
    alt="Halal Certified"
    style={{
      width: '90px',
      height: '90px',
      objectFit: 'contain',
      opacity: 0.9,
      transition: 'all 0.3s ease',
      filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.2))',
    }}
    onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
    onMouseOut={(e) => (e.currentTarget.style.opacity = '0.9')}
  />
</div>



      
      {/* Footer */}
      <footer style={{
        background: '#1a202c',
        color: 'white',
        padding: '30px 20px',
        textAlign: 'center',
        marginTop: '50px'
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Prime Cuts Kenya. All rights reserved.</p>
        <p style={{ margin: '10px 0 0 0', color: '#D4AF37', fontSize: '14px' }}>
          Premium Meats & Seafood • Nairobi's Finest Butcher
        </p>
      </footer>

      <Cart />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <CartProvider>
      <ProductsContent />
    </CartProvider>
  )
      







