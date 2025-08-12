function PlaceOrder() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-display text-soft-black mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-soft-black mb-4">Shipping Address</h2>
          <p className="text-warm-gray">123 Fashion Street, Style City</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-soft-black mb-4">Payment Details</h2>
          <p className="text-warm-gray">Card ending in •••• 1234</p>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder