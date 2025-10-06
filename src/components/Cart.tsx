
'use client'
import { useCart } from '@/context/cartContext'
import { MessageCircle, X, ShoppingBag } from 'lucide-react'
import { useState, useEffect } from 'react'

interface CustomerDetails {
  name: string
  phone: string
  email: string
  address: string
  instructions: string
}

export default function Cart() {
  const { cart } = useCart()
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: '',
    phone: '',
    email: '',
    address: '',
    instructions: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

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

  // Calculate total from cart
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const sendWhatsAppOrder = async () => {
    if (!customerDetails.name || !customerDetails.phone || !customerDetails.address) {
      alert('Please fill in your name, phone number, and delivery address')
      return
    }

    setIsProcessing(true)

    try {
      // 1. Generate order number
      const orderNumber = `PC${Date.now().toString().slice(-6)}`
      
      // 2. Format order message for YOUR WhatsApp (business)
      const orderDetails = `
*PRIME CUTS KENYA - NEW ORDER*

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
  `• ${item.name} x${item.quantity} - KSh ${(item.price * item.quantity).toLocaleString()}`
).join('\n')}

*💰 TOTAL: KSh ${total.toLocaleString()}*

Please confirm availability and delivery time. Thank you! 🥩
      `.trim()

      // 3. Send order to YOUR WhatsApp number
      const businessPhone = '254799691784'
      window.open(`https://wa.me/${businessPhone}?text=${encodeURIComponent(orderDetails)}`, '_blank')
      
      // 4. Send automated confirmations to customer
      await sendCustomerConfirmations(orderNumber)
      
      // 5. Reset form after successful order
      setTimeout(() => {
        setCustomerDetails({
          name: '',
          phone: '',
          email: '',
          address: '',
          instructions: ''
        })
        setIsProcessing(false)
        alert('✅ Order sent successfully! Check your WhatsApp for confirmation.')
      }, 2000)
      
    } catch (error) {
      setIsProcessing(false)
      alert('❌ Error sending order. Please try again or call us directly.')
    }
  }

  const sendCustomerConfirmations = async (orderNumber: string) => {
    // Create a ready-to-send confirmation message that YOU can quickly send
    const confirmationMessage = `*✅ ORDER CONFIRMED - PRIME CUTS KENYA*%0A%0A*Dear ${customerDetails.name},*%0A%0AThank you for your order! We've received it and are preparing your premium cuts.%0A%0A*📋 Order Summary*%0A• Order #: ${orderNumber}%0A• Total: KSh ${total.toLocaleString()}%0A• Items: ${cart.reduce((sum, item) => sum + item.quantity, 0)}%0A• Delivery: ${customerDetails.address}%0A%0A*⏰ Next Steps*%0A• Order being prepared: 1-2 hours%0A• Delivery to: ${customerDetails.address}%0A• We'll notify you when ready%0A%0A_Thank you for choosing Prime Cuts Kenya!_ 🥩`
    
    // Open a new tab with the confirmation message ready to send to customer
    if (customerDetails.phone) {
      setTimeout(() => {
        const customerPhone = customerDetails.phone.replace(/\D/g, '')
        // This opens WhatsApp with the customer's number and pre-filled confirmation
        window.open(`https://wa.me/${customerPhone}?text=${confirmationMessage}`, '_blank')
      }, 2000)
    }

    // Email confirmation
    if (customerDetails.email) {
      setTimeout(() => {
        const emailSubject = `Order Confirmation #${orderNumber} - Prime Cuts Kenya`
        const emailBody = `ORDER CONFIRMED - PRIME CUTS KENYA\n\nDear ${customerDetails.name},\n\nThank you for your order! We've received it and are preparing your premium cuts.\n\nORDER SUMMARY:\n• Order #: ${orderNumber}\n• Total: KSh ${total.toLocaleString()}\n• Delivery: ${customerDetails.address}\n\nORDER ITEMS:\n${cart.map(item => `• ${item.name} x${item.quantity} - KSh ${(item.price * item.quantity).toLocaleString()}`).join('\n')}\n\nNEXT STEPS:\n• Preparation: 1-2 hours\n• We'll contact you when ready\n\nThank you for choosing Prime Cuts Kenya!\n📞 +254 799 691784`
        
        window.open(`mailto:${customerDetails.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`, '_blank')
      }, 3500)
    }
  }

  // For now, let's just show a simple cart that appears when items are added
  if (cart.length === 0) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px', // CHANGED TO BOTTOM
      right: '20px',
      zIndex: 9999,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
      padding: '20px',
      width: isMobile ? 'calc(100% - 40px)' : '350px',
      maxHeight: '60vh',
      overflowY: 'auto',
      border: '2px solid rgba(128, 0, 32, 0.1)',
    }}>
      {/* Header - Ultra Compact */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '15px',
        paddingBottom: '10px',
        borderBottom: '2px solid rgba(128, 0, 32, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #800020 0%, #600018 100%)',
            padding: '6px',
            borderRadius: '8px',
            color: 'white'
          }}>
            <ShoppingBag size={16} />
          </div>
          <div>
            <h2 style={{ 
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: '#800020',
              margin: 0
            }}>
              Your Order
            </h2>
            <p style={{
              color: '#666',
              fontSize: '12px',
              margin: 0,
              fontWeight: '500'
            }}>
              {cart.length} item{cart.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <button 
          onClick={() => window.location.reload()}
          style={{
            background: 'rgba(128, 0, 32, 0.1)',
            color: '#800020',
            border: 'none',
            padding: '4px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#800020';
            e.currentTarget.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(128, 0, 32, 0.1)';
            e.currentTarget.style.color = '#800020';
          }}
        >
          <X size={14} />
        </button>
      </div>

      {/* Cart Items - Compact */}
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{
          fontSize: '0.9rem',
          fontWeight: '600',
          color: '#800020',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ background: '#800020', color: 'white', padding: '2px 4px', borderRadius: '4px', fontSize: '10px' }}>📦</span>
          Order Items
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {cart.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '8px',
              border: '2px solid rgba(128, 0, 32, 0.1)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
            }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ 
                  fontWeight: '600',
                  color: '#36454F',
                  margin: '0 0 2px 0',
                  fontSize: '13px'
                }}>
                  {item.name}
                </h4>
                <p style={{ 
                  color: '#800020',
                  fontWeight: 'bold',
                  margin: 0,
                  fontSize: '12px'
                }}>
                  KSh {item.price.toLocaleString()} × {item.quantity}
                </p>
              </div>
              <p style={{ 
                fontWeight: 'bold',
                color: '#800020',
                margin: 0,
                fontSize: '13px',
                background: 'rgba(128, 0, 32, 0.1)',
                padding: '3px 8px',
                borderRadius: '6px'
              }}>
                KSh {(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Total - Compact */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '1rem',
        marginBottom: '15px',
        padding: '12px',
        background: 'linear-gradient(135deg, #800020 0%, #600018 100%)',
        borderRadius: '8px',
        color: 'white',
        boxShadow: '0 4px 12px rgba(128, 0, 32, 0.3)'
      }}>
        <span>Total:</span>
        <span>KSh {total.toLocaleString()}</span>
      </div>

      {/* Customer Details Form - Compact */}
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ 
          fontSize: '0.9rem',
          fontWeight: '600',
          color: '#800020',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ background: '#800020', color: 'white', padding: '2px 4px', borderRadius: '4px', fontSize: '10px' }}>🚚</span>
          Delivery Info
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input 
            type="text"
            value={customerDetails.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '13px',
              transition: 'all 0.3s ease',
              background: 'white'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#800020';
              e.target.style.boxShadow = '0 0 0 3px rgba(128, 0, 32, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="Full Name *"
            required
          />

          <input 
            type="tel"
            value={customerDetails.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '13px',
              transition: 'all 0.3s ease',
              background: 'white'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#800020';
              e.target.style.boxShadow = '0 0 0 3px rgba(128, 0, 32, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="Phone Number *"
            required
          />

          <input 
            type="email"
            value={customerDetails.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '13px',
              transition: 'all 0.3s ease',
              background: 'white'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#800020';
              e.target.style.boxShadow = '0 0 0 3px rgba(128, 0, 32, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="Email (Optional)"
          />

          <textarea 
            value={customerDetails.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            rows={2}
            style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '13px',
              transition: 'all 0.3s ease',
              background: 'white',
              resize: 'vertical',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#800020';
              e.target.style.boxShadow = '0 0 0 3px rgba(128, 0, 32, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="Delivery Address *"
            required
          />

          <textarea 
            value={customerDetails.instructions}
            onChange={(e) => handleInputChange('instructions', e.target.value)}
            rows={1}
            style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '13px',
              transition: 'all 0.3s ease',
              background: 'white',
              resize: 'vertical',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#800020';
              e.target.style.boxShadow = '0 0 0 3px rgba(128, 0, 32, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="Special Instructions"
          />
        </div>
      </div>

      {/* Order Button - Compact */}
      <button 
        onClick={sendWhatsAppOrder}
        disabled={isProcessing}
        style={{
          width: '100%',
          background: isProcessing 
            ? '#ccc' 
            : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: 'white',
          padding: '12px',
          borderRadius: '8px',
          fontWeight: 'bold',
          border: 'none',
          cursor: isProcessing ? 'not-allowed' : 'pointer',
          fontSize: '14px',
          boxShadow: isProcessing 
            ? 'none' 
            : '0 4px 15px rgba(16, 185, 129, 0.4)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}
        onMouseOver={(e) => {
          if (!isProcessing) {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.6)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
          }
        }}
        onMouseOut={(e) => {
          if (!isProcessing) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.4)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
          }
        }}
      >
        {isProcessing ? (
          <>⏳ Processing...</>
        ) : (
          <>
            <MessageCircle size={16} />
            <span>Complete Order</span>
          </>
        )}
      </button>

      {/* Confirmation Note - Compact */}
      <p style={{
        textAlign: 'center',
        color: '#666',
        fontSize: '10px',
        marginTop: '10px',
        fontStyle: 'italic',
        background: 'rgba(128, 0, 32, 0.05)',
        padding: '6px',
        borderRadius: '4px',
        lineHeight: '1.3'
      }}>
        ✅ Confirmations via WhatsApp{customerDetails.email ? ' & Email' : ''}
        <br />
        🔒 Sent directly to our whatsApp. No upfront payment required
      </p>
    </div>
  )
}