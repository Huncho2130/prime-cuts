
'use client'
import { useCart } from '@/context/cartContext'


import { ShoppingCart, Phone, MapPin } from 'lucide-react'

export default function Header() {
  //const { itemCount, toggleCart } = useCart()

const { itemCount } = useCart()


  return (
    <header className="bg-premium-charcoal text-white sticky top-0 z-50 shadow-2xl">
      {/* Top Bar */}
      <div className="bg-premium-gold text-premium-charcoal py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-1" />
              <span>+254 799 691784</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>City Market, Nairobi CBD</span>
            </div>
          </div>
          <div className="text-sm">
            Premium Quality • Fresh Daily • Expert Butchers
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <h1 className="text-3xl font-serif font-bold text-premium-gold">
              PRIME CUTS KENYA
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="hover:text-premium-gold transition-colors font-semibold">HOME</a>
              <a href="/products" className="hover:text-premium-gold transition-colors font-semibold">PRODUCTS</a>
              <a href="/about" className="hover:text-premium-gold transition-colors font-semibold">ABOUT</a>
              <a href="/contact" className="hover:text-premium-gold transition-colors font-semibold">CONTACT</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              //onClick={toggleCart}
              className="relative p-2 hover:bg-premium-burgundy rounded-lg transition-colors"
            >
              <ShoppingCart size={24} className="text-premium-gold" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-premium-burgundy text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}