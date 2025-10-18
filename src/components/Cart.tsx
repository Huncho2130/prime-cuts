

'use client'
import { useCart } from '@/context/cartContext'
import { useState, useEffect } from 'react'

interface CustomerDetails {
  name: string
  phone: string
  email: string
  address: string
  instructions: string
}

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isOpen,
    setIsOpen,
    totalPrice,
    totalKilos,
    itemCount
  } = useCart()

  const [isProcessing, setIsProcessing] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showCustomerForm, setShowCustomerForm] = useState(false)
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: '',
    phone: '',
    email: '',
    address: '',
    instructions: ''
  })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleInputChange = (field: keyof CustomerDetails, value: string) => {
    setCustomerDetails(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const sendWhatsAppOrder = async () => {
    if (!customerDetails.name || !customerDetails.phone || !customerDetails.address) {
      alert('Please fill in your name, phone number, and delivery address')
      return
    }

    setIsProcessing(true)

    try {
      // Generate order number
      const orderNumber = `MC${Date.now().toString().slice(-6)}`
      
      // Format order message for WhatsApp
      const orderDetails = `
*THE MEATRIX CO. - NEW ORDER*

*Order #:* ${orderNumber}
*Date:* ${new Date().toLocaleString()}

*👤 CUSTOMER DETAILS*
• Name: ${customerDetails.name}
• Phone: ${customerDetails.phone}
• Email: ${customerDetails.email || 'Not provided'}
• Address: ${customerDetails.address}
• Instructions: ${customerDetails.instructions || 'None'}

*📦 ORDER SUMMARY*
${cart.map(item => 
  `• ${item.name} - ${item.quantity}kg - KSh ${(item.price * item.quantity).toLocaleString()}`
).join('\n')}

*💰 TOTAL: KSh ${totalPrice.toLocaleString()}*
*⚖️ TOTAL WEIGHT: ${totalKilos}kg*

Please confirm availability and delivery time. Thank you! 🥩
      `.trim()

      // Send to your WhatsApp number
      const businessPhone = '254707636105'
      window.open(`https://wa.me/${businessPhone}?text=${encodeURIComponent(orderDetails)}`, '_blank')
      
      // Reset after successful order
      setTimeout(() => {
        clearCart()
        setCustomerDetails({
          name: '',
          phone: '',
          email: '',
          address: '',
          instructions: ''
        })
        setShowCustomerForm(false)
        setIsProcessing(false)
        setIsOpen(false)
        alert('✅ Order sent successfully! We will contact you shortly.')
      }, 2000)
      
    } catch (error) {
      setIsProcessing(false)
      alert('❌ Error sending order. Please try again or call us directly.')
    }
  }

  return (
    <>
      {/* Floating Cart Toggle Button - ALWAYS VISIBLE */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #D4AF37, #B8941F)',
          color: '#36454F',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        }}
      >
        🛒
        {itemCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            background: '#800020',
            color: 'white',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart Panel - Only shows when isOpen is true */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px', // Position above the toggle button
          right: '20px',
          width: isMobile ? 'calc(100% - 40px)' : '400px',
          maxWidth: '90vw',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          zIndex: 1000,
          border: '2px solid #D4AF37',
          maxHeight: '70vh',
          overflowY: 'auto'
        }}>
          {/* Cart Header */}
          <div style={{
            background: 'linear-gradient(135deg, #36454F 0%, #2f3a42 100%)',
            color: 'white',
            padding: '20px',
            borderRadius: '14px 14px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
              🛒 Your Cart ({cart.length} items)
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                padding: '5px',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'none';
              }}
            >
              ✕
            </button>
          </div>

          {/* Cart Items */}
          <div style={{ maxHeight: '300px', overflowY: 'auto', padding: '20px' }}>
            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#666', padding: '40px 20px' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>🛒</div>
                <p>Your cart is empty</p>
                <p style={{ fontSize: '14px', marginTop: '5px' }}>Add some premium cuts to get started!</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px 0',
                  borderBottom: '1px solid #eee'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', color: '#36454F' }}>{item.name}</div>
                    <div style={{ fontSize: '14px', color: '#D4AF37', fontWeight: '600' }}>
                      KSh {item.price.toLocaleString()}/kg
                    </div>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 0.5)}
                      style={{
                        background: '#800020',
                        color: 'white',
                        border: 'none',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      -
                    </button>
                    
                    <span style={{
                      minWidth: '50px',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: '#36454F'
                    }}>
                      {item.quantity} kg
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 0.5)}
                      style={{
                        background: '#25D366',
                        color: 'white',
                        border: 'none',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      +
                    </button>
                  </div>
                  
                  <div style={{ textAlign: 'right', minWidth: '80px' }}>
                    <div style={{ fontWeight: 'bold', color: '#36454F' }}>
                      KSh {(item.price * item.quantity).toLocaleString()}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#dc2626',
                        cursor: 'pointer',
                        fontSize: '12px',
                        marginTop: '5px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#b91c1c';
                        e.currentTarget.style.textDecoration = 'underline';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '#dc2626';
                        e.currentTarget.style.textDecoration = 'none';
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '0 0 14px 14px',
              borderTop: '1px solid #eee'
            }}>
              {/* Customer Details Form */}
              {!showCustomerForm ? (
                <button
                  onClick={() => setShowCustomerForm(true)}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    marginBottom: '15px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} 
                  />
                  Add Delivery Details & Checkout
                </button>
              ) : (
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ marginBottom: '15px', color: '#36454F', fontSize: '16px', fontWeight: 'bold' }}>Delivery Information</h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input
                      type="text"
                      value={customerDetails.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Full Name *"
                      style={{ padding: '10px', borderRadius: '8px', border: '2px solid #e5e7eb', fontSize: '14px' }}
                      required
                    />
                    
                    <input
                      type="tel"
                      value={customerDetails.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Phone Number *"
                      style={{ padding: '10px', borderRadius: '8px', border: '2px solid #e5e7eb', fontSize: '14px' }}
                      required
                    />
                    
                    <input
                      type="email"
                      value={customerDetails.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Email (Optional)"
                      style={{ padding: '10px', borderRadius: '8px', border: '2px solid #e5e7eb', fontSize: '14px' }}
                    />
                    
                    <textarea
                      value={customerDetails.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Delivery Address *"
                      rows={2}
                      style={{ padding: '10px', borderRadius: '8px', border: '2px solid #e5e7eb', fontSize: '14px', resize: 'vertical' }}
                      required
                    />
                    
                    <textarea
                      value={customerDetails.instructions}
                      onChange={(e) => handleInputChange('instructions', e.target.value)}
                      placeholder="Special Instructions (optional)"
                      rows={2}
                      style={{ padding: '10px', borderRadius: '8px', border: '2px solid #e5e7eb', fontSize: '14px', resize: 'vertical' }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <button
                      onClick={() => setShowCustomerForm(false)}
                      style={{
                        flex: 1,
                        background: '#6c757d',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = '#5a6268';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = '#6c757d';
                      }}
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#36454F' }}>Total Weight:</span>
                <span style={{ fontWeight: 'bold', color: '#D4AF37' }}>{totalKilos} kg</span>
              </div>

              {/* Total */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #800020, #600018)',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                  fontWeight: 600,
                }}
              >
                <span>Total ({totalKilos.toFixed(1)} kg)</span>
                <span>KSh {totalPrice.toLocaleString()}</span>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={clearCart}
                  style={{
                    flex: 1,
                    background: '#6c757d',
                    color: 'white',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#5a6268';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#6c757d';
                  }}
                >
                  Clear Cart
                </button>
                
                {/* Order button - Only show when customer form is filled */}
                {showCustomerForm && (
                  <button
                    onClick={sendWhatsAppOrder}
                    disabled={isProcessing || !customerDetails.name || !customerDetails.phone || !customerDetails.address}
                    style={{
                      flex: 2,
                      background: isProcessing || !customerDetails.name || !customerDetails.phone || !customerDetails.address
                        ? '#ccc'
                        : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      color: 'white',
                      padding: '12px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      border: 'none',
                      cursor: isProcessing || !customerDetails.name || !customerDetails.phone || !customerDetails.address ? 'not-allowed' : 'pointer',
                      fontSize: '14px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      if (!isProcessing && customerDetails.name && customerDetails.phone && customerDetails.address) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isProcessing && customerDetails.name && customerDetails.phone && customerDetails.address) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    {isProcessing ? '⏳ Processing...' : '📩 Complete Order via WhatsApp'}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
