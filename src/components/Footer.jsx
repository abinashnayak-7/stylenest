import { NavLink } from 'react-router-dom'
import { Instagram, Twitter, Facebook } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display mb-4">Style Nest</h3>
            <p className="text-white">
              Your destination for modern fashion and timeless elegance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-display mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="hover:text-accent-gold transition-colors">About</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-accent-gold transition-colors">Contact</NavLink></li>
              <li><NavLink to="/collection" className="hover:text-accent-gold transition-colors">Collections</NavLink></li>
              <li><NavLink to="/products" className="hover:text-accent-gold transition-colors">Products</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-display mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-gold transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-warm-gray/80">
          <p>&copy; {new Date().getFullYear()} Style Nest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer