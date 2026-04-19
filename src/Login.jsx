import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Login = ({ onLoginSuccess, onForgotPassword }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onLoginSuccess()
    } catch (err) {
      setError('Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      width: '100%',
      height: '100vh',
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
        <h2 style={{ color: 'white', margin: '0 0 8px', textAlign: 'center' }}>Login</h2>

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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <label htmlFor="password" style={{ color: 'white', fontSize: 14 }}>Password</label>
          <div style={{ position: 'relative' }}>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                height: 40,
                borderRadius: 8,
                border: 'none',
                padding: '0 40px 0 12px',
                fontSize: 15,
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.4)',
                outline: 'none',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            <button
              type="button"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              onClick={() => setShowPassword((prev) => !prev)}
              style={{
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.7)',
                padding: 0,
              }}
            >
              {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!email || !password || loading}
          style={{
            height: 42,
            borderRadius: 8,
            border: 'none',
            backgroundColor: 'rgba(255,255,255,0.25)',
            color: 'white',
            fontSize: 15,
            cursor: !email || !password || loading ? 'not-allowed' : 'pointer',
            marginTop: 8,
            backdropFilter: 'blur(5px)',
            transition: 'background-color 0.2s',
          }}
        >
          {loading ? 'Logging in...' : 'Submit'}
        </button>
        <button
          type="button"
          onClick={onForgotPassword}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.7)',
            cursor: 'pointer',
            fontSize: 13,
            marginTop: 4,
          }}
        >
          Forgot password?
        </button>
      </form>
    </div>
  )
}

export default Login