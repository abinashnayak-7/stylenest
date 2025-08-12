import { NavLink } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative bg-white h-[calc(100vh-4rem)] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1675627451054-99b6c760b6d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2JqZWN0JTIwaW4lMjByaWdodCUyMGNvcm5lcnxlbnwwfDB8MHx8fDA%3D')" }}
      ></div>
      <div className="relative text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-soft-black-light dark:text-soft-black-dark mb-6">
          Discover Your Style
        </h1>
        <p className="text-lg sm:text-xl text-warm-gray-light dark:text-warm-gray-dark mb-8">
          Explore the curated collection of fashion-forward designs
        </p>
        <NavLink
          to="/products"
          className="inline-block bg-accent-gold text-muted-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-soft-black transition-all duration-300 transform hover:scale-105"
        >
          Shop Now
        </NavLink>
      </div>
    </section>
  )
}

export default Hero