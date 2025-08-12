import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Collection from './pages/Collection.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Orders from './pages/Orders.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Products from './pages/Products.jsx'
import Signup from './pages/Signup.jsx'
import AdminDashboard from './pages/Admindashboard.jsx'


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-muted-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App