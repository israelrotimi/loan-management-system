import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Mock authentication API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email === 'test@example.com' && password === 'pass@123') {
      navigate("/dashboard/users")
    } else {
      setError('Invalid email or password')
    }

    setLoading(false)
  }

  return (
    <div className="login-form">
      <h2>Welcome!</h2>
      <p>Enter details to login.</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="username"
          id="username"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <small style={{ color: 'red' }}>{error}</small>}
        <small><a href="#">FORGOT PASSWORD?</a></small>
        <button type="submit" className="btn-large" disabled={loading}>
          {loading ? 'Logging in...' : 'LOG IN'}
        </button>
      </form>
    </div>
  )
}

export default LoginForm