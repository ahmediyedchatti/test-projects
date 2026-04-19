import { useState } from 'react'

const ForgotPassword = ({ onRequestSent, onBackToLogin }) => {
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
    <div style={{
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'linear-gradient(to bottom right, #00c6ff, #6a11cb, #2575fc)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <h1 style={{
        color: 'white',
        fontSize: 32,
        fontWeight: 700,
        marginBottom: 24,
        letterSpacing: '-0.5px',
        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
      }}>
        Testing Challenge
      </h1>

      <form onSubmit={handleSubmit} style={{
        width: 400,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25), inset 0 0 0 0.5px rgba(255,255,255,0.3)',
        borderRadius: 24,
        padding: 36,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}>
        <h2 style={{ color: 'white', margin: '0 0 8px', textAlign: 'center' }}>Forgot Password</h2>

        {error && <p role="alert" style={{ color: '#ff6b6b', margin: 0 }}>{error}</p>}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <label htmlFor="email" style={{ color: 'white', fontSize: 14 }}>Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              height: 40,
              borderRadius: 8,
              border: 'none',
              padding: '0 12px',
              fontSize: 15,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.4)',
              outline: 'none',
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <button
          type="submit"
          disabled={!email || loading}
          style={{
            height: 42,
            borderRadius: 8,
            border: 'none',
            backgroundColor: 'rgba(255,255,255,0.25)',
            color: 'white',
            fontSize: 15,
            cursor: !email || loading ? 'not-allowed' : 'pointer',
            marginTop: 8,
            backdropFilter: 'blur(5px)',
            transition: 'background-color 0.2s',
          }}
        >
          {loading ? 'Sending...' : 'Send reset link'}
        </button>

        <button
          type="button"
          onClick={onBackToLogin}
          style={{
            background: 'none',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            borderRadius: 8,
            padding: '8px 20px',
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Back to Login
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword