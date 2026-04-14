import { useState } from 'react'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import './App.css'

function App() {
  const [challenge, setChallenge] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isResetSent, setIsResetSent] = useState(false)

  return (
    <main style={{ maxWidth: 420, margin: '40px auto', padding: '0 16px' }}>
      <h1>Testing Challenge</h1>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button
          type="button"
          onClick={() => setChallenge('login')}
          aria-pressed={challenge === 'login'}
        >
          Login screen
        </button>
        <button
          type="button"
          onClick={() => setChallenge('forgot-password')}
          aria-pressed={challenge === 'forgot-password'}
        >
          Forgot password screen
        </button>
      </div>

      {challenge === 'login' ? (
        !isLoggedIn ? (
          <Login onLoginSuccess={() => setIsLoggedIn(true)} />
        ) : (
          <p role="status">Welcome! You are now logged in.</p>
        )
      ) : !isResetSent ? (
        <ForgotPassword onRequestSent={() => setIsResetSent(true)} />
      ) : (
        <p role="status">Reset link sent. Please check your email.</p>
      )}
    </main>
  )
}

export default App
