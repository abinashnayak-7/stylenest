function ProductCard({ image, name, price }) {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-soft-black">{name}</h3>
        <p className="text-warm-gray">₹{price}</p>
        <button className="mt-2 w-full bg-accent-gold text-muted-white py-2 rounded-full hover:bg-soft-black transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard