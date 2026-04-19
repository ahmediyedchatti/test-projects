import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login'

describe('Login', () => {
  test('renders form fields and submit button', () => {
    render(<Login onLoginSuccess={jest.fn()} />)

    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  test('disables submit until both fields are filled', async () => {
    const user = userEvent.setup()
    render(<Login onLoginSuccess={jest.fn()} />)

    const submitBtn = screen.getByRole('button', { name: 'Submit' })

    expect(submitBtn).toBeDisabled()

    await user.type(screen.getByLabelText('Email'), 'user@example.com')
    expect(submitBtn).toBeDisabled()

    await user.type(screen.getByLabelText('Password'), 'secret123')
    expect(submitBtn).toBeEnabled()
  })

  test('shows loading state and calls success callback on submit', async () => {
    const user = userEvent.setup()
    const onLoginSuccess = jest.fn()
    render(<Login onLoginSuccess={onLoginSuccess} />)

    await user.type(screen.getByLabelText('Email'), 'user@example.com')
    await user.type(screen.getByLabelText('Password'), 'secret123')

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByRole('button', { name: 'Logging in...' })).toBeDisabled()

    await waitFor(() => expect(onLoginSuccess).toHaveBeenCalledTimes(1))
  })

  test('password visibility toggle shows and hides the password', async () => {
    const user = userEvent.setup()
    render(<Login onLoginSuccess={jest.fn()} />)

    const passwordInput = screen.getByLabelText('Password')

    expect(passwordInput).toHaveAttribute('type', 'password')

    await user.click(screen.getByRole('button', { name: 'Show password' }))
    expect(passwordInput).toHaveAttribute('type', 'text')

    await user.click(screen.getByRole('button', { name: 'Hide password' }))
    expect(passwordInput).toHaveAttribute('type', 'password')
  })
})