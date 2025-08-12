import ProductCard from '../components/ProductCard.jsx'

function Products() {
  const products = [
    { id: 1, name: 'T-Shirts', price: 399, image: 'https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Formal Wear', price: 799, image: 'https://images.unsplash.com/photo-1625178494269-c91109fcc711?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Shorts', price: 299, image: 'https://images.unsplash.com/photo-1617952385804-1da4f8d71ba9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob3J0c3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 4, name: 'Jeans', price: 1199, image: 'https://plus.unsplash.com/premium_photo-1727942418440-d085b3b5f065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGRlbmltfGVufDB8fDB8fHww' },
    { id: 5, name: 'Accessories', price: 159, image: 'https://images.unsplash.com/photo-1664285612706-b32633c95820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbiUyMGFjY2Vzc29yaWVzJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 6, name: 'Innerwear', price: 219, image: 'https://images.unsplash.com/photo-1656587132121-aaccc57589cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1lbnMlMjBpbm5lcndlYXJ8ZW58MHx8MHx8fDA%3D' },
    { id: 7, name: 'Ethinic Wear', price: 799, image: 'https://images.unsplash.com/photo-1622780432053-767528938f34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3VydGF8ZW58MHx8MHx8fDA%3D' },
    { id: 8, name: 'Suits', price: 2999, image: 'https://plus.unsplash.com/premium_photo-1661425828618-f48a8beb4f6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9ybWFsJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-display text-soft-black mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Products