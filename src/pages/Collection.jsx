function Collection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-display text-soft-black mb-8">Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-soft-black">Summer Collection</h3>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-soft-black">Winter Collection</h3>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-soft-black">Formal Wear</h3>
        </div>
      </div>
    </div>
  )
}

export default Collection