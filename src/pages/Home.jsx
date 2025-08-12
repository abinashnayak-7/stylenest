import Hero from '../components/Hero.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { NavLink } from 'react-router-dom'

function Home() {
  const featuredProducts = [
   { id: 1, name: 'T-Shirts', price: 399, image: 'https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Formal Wear', price: 799, image: 'https://images.unsplash.com/photo-1625178494269-c91109fcc711?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Shorts', price: 299, image: 'https://images.unsplash.com/photo-1617952385804-1da4f8d71ba9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob3J0c3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 4, name: 'Jeans', price: 1199, image: 'https://plus.unsplash.com/premium_photo-1727942418440-d085b3b5f065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGRlbmltfGVufDB8fDB8fHww' },
  ]

  return (
    <div className=" bg-gray-100 ">
      <Hero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-display font-medium text-soft-black mb-8 text-center">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <NavLink
            to="/products"
            className="inline-block bg-accent-gold text-muted-white px-8 py-3 text-lg font-semibold rounded-full border-gray-400 border border-warm-gray-light/50 hover:bg-yellow-300 transition-all duration-300"
          >
            View All Products
          </NavLink>
        </div>
      </section>
      <section className="bg-neutral-beige py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display text-soft-black mb-4">
            Why Style Nest?
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto mb-8">
            Discover curated fashion that blends elegance and modernity, crafted for your unique style.
          </p>
          <NavLink
            to="/about"
            className="inline-block bg-soft-black text-muted-white px-8 py-3 text-lg font-semibold rounded-full border-gray-400 border border-warm-gray-light/50 hover:bg-yellow-300 transition-all duration-300"
          >
            Learn More
          </NavLink>
        </div>
      </section>
    </div>
  )
}

export default Home