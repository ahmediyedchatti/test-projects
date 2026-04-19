import { useState } from 'react'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import './App.css'

function App() {
  const [challenge, setChallenge] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isResetSent, setIsResetSent] = useState(false)

  return (
    <main className="app-main">
      {challenge === 'login' ? (
        !isLoggedIn ? (
          <Login
            onLoginSuccess={() => setIsLoggedIn(true)}
            onForgotPassword={() => setChallenge('forgot-password')}
          />
        ) : (
          <div className="success-card">
            <h1 className="success-title">Testing Challenge</h1>
            <div className="glass-card">
              <p role="status" className="success-message">
                Welcome! You are now logged in.
              </p>
              <button className="back-button" onClick={() => setIsLoggedIn(false)}>
                Back to Login
              </button>
            </div>
          </div>
        )
      ) : !isResetSent ? (
        <ForgotPassword
          onRequestSent={() => setIsResetSent(true)}
          onBackToLogin={() => setChallenge('login')}
        />
      ) : (
        <div className="success-card">
          <h1 className="success-title">Testing Challenge</h1>
          <div className="glass-card">
            <p role="status" className="success-message">
              Reset link sent. Please check your email.
            </p>
            <button
              className="back-button"
              onClick={() => { setIsResetSent(false); setChallenge('login') }}
            >
              Back to Login
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default App