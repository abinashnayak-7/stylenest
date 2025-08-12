import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock credentials (replace with API call in a real app)
    const validUsername = 'admin'
    const validPassword = 'password123'

    if (username === validUsername && password === validPassword) {
      setError('')
      // Simulate login success (in a real app, set auth token and redirect)
      navigate('/')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-muted-white-light dark:bg-muted-white-dark flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%23D4A017%22 fill-opacity=%220.1%22 d=%22M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192V320H1392H1344H1248H1152H1056H960H864H768H672H576H480H384H288H192H96H48H0V64Z%22/%3E%3C/svg%3E')] bg-no-repeat bg-bottom opacity-50 pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-md p-8 bg-white dark:bg-neutral-beige-dark rounded-xl shadow-lg flex flex-col items-center">
        <h1 className="text-2xl font-display text-soft-black-light dark:text-soft-black-dark mb-2">Sign in to your account</h1>
        <p className="text-warm-gray-light dark:text-warm-gray-dark text-sm mb-6">Welcome back! Login with your credentials</p>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md border-gray-400 border dark:border-warm-gray-dark/50 focus:ring-accent-gold-light dark:focus:ring-accent-gold-dark bg-muted-white-light dark:bg-muted-white-dark text-soft-black-light dark:text-soft-black-dark py-2 px-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border-gray-400 border dark:border-warm-gray-dark/50 focus:ring-accent-gold-light dark:focus:ring-accent-gold-dark bg-muted-white-light dark:bg-muted-white-dark text-soft-black-light dark:text-soft-black-dark py-2 px-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-accent-gold-light dark:bg-accent-gold-dark text-muted-white-light dark:text-muted-white-dark rounded-full py-2 hover:bg-soft-black-light dark:hover:bg-soft-black-dark transition-colors border-gray-600 bg-yellow-300"
          >
            Sign in
          </button>
        </form>
        <button className="w-full bg-white dark:bg-muted-white-dark border border-warm-gray-light/50 dark:border-warm-gray-dark/50 text-soft-black-light dark:text-soft-black-dark rounded-full py-2 mt-4 flex items-center justify-center hover:bg-warm-gray-light/20 dark:hover:bg-warm-gray-dark/20 transition-colors">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Sign in with Google
        </button>
        <button className="w-full bg-white dark:bg-muted-white-dark border border-warm-gray-light/50 dark:border-warm-gray-dark/50 text-soft-black-light dark:text-soft-black-dark rounded-full py-2 mt-2 flex items-center justify-center hover:bg-warm-gray-light/20 dark:hover:bg-warm-gray-dark/20 transition-colors">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v4.8c4.56-.93 8-4.96 8-9.8z" fill="#3B5998"/>
          </svg>
          Sign in with Facebook
        </button>
        <p className="text-warm-gray-light dark:text-warm-gray-dark text-sm mt-4">
          Don’t have an account?{' '}
          <NavLink to="/signup" className="text-accent-gold-light dark:text-accent-gold-dark hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default Login