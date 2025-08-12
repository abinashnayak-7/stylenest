import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, User, Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/collection', label: 'Collections' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/admindashboard', label: 'Admin' },
  ]

  return (
    <nav className="bg-neutral-beige shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="font-bold text-2xl font-display text-gray-600">
              StyleNest
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-soft-black hover:text-yellow-600 transition-colors duration-300 ${isActive ? 'font-semibold border-b-2 border-accent-gold' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/cart" className="text-soft-black hover:text-accent-gold">
              <ShoppingCart className="h-6 w-6" />
            </NavLink>
            <NavLink to="/login" className="text-soft-black hover:text-accent-gold">
              <User className="h-6 w-6" />
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-soft-black hover:text-accent-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-beige">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-2 text-soft-black hover:text-accent-gold transition-colors duration-300 ${isActive ? 'font-semibold bg-warm-gray/20' : ''
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/cart"
              className="block px-3 py-2 text-soft-black hover:text-accent-gold"
              onClick={() => setIsOpen(false)}
            >
              Cart
            </NavLink>
            <NavLink
              to="/login"
              className="block px-3 py-2 text-soft-black hover:text-accent-gold"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar