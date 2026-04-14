import { useState } from 'react'

const ForgotPassword = ({ onRequestSent }) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onRequestSent()
    } catch (err) {
      setError('Reset request failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      {error && <p role="alert">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit" disabled={!email || loading}>
        {loading ? 'Sending...' : 'Send reset link'}
      </button>
    </form>
  )
}

export default ForgotPassword
