function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-display text-soft-black mb-8 text-center">Contact Us</h1>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-soft-black">Name:</label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border-gray-400 border border-warm-gray-light/50 :ring-accent-gold"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-soft-black">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border-gray-400 border border-warm-gray-light/50 :ring-accent-gold"

            />
          </div>
          <div>
            <label htmlFor="message" className="block text-soft-black">Message:</label>
            <textarea
              id="message"
              className="w-full rounded-md border-gray-400 border border-warm-gray-light/50 :ring-accent-gold"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-accent-gold text-muted-white py-2 rounded-full border-gray-400 border border-warm-gray-light/50 hover:bg-yellow-300 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact