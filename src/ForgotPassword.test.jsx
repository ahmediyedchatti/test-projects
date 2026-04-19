import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ForgotPassword from './ForgotPassword'

describe('ForgotPassword', () => {
  test('renders heading, email input, and send reset link button', () => {
    render(<ForgotPassword onRequestSent={jest.fn()} />)

    expect(screen.getByRole('heading', { name: 'Forgot Password' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send reset link' })).toBeInTheDocument()
  })

  test('disables submit until email is provided', async () => {
    const user = userEvent.setup()
    render(<ForgotPassword onRequestSent={jest.fn()} />)

    const submitBtn = screen.getByRole('button', { name: 'Send reset link' })

    expect(submitBtn).toBeDisabled()

    await user.type(screen.getByLabelText('Email'), 'user@example.com')
    expect(submitBtn).toBeEnabled()
  })

  test('shows loading state and calls onRequestSent after submit', async () => {
    const user = userEvent.setup()
    const onRequestSent = jest.fn()
    render(<ForgotPassword onRequestSent={onRequestSent} />)

    await user.type(screen.getByLabelText('Email'), 'user@example.com')
    await user.click(screen.getByRole('button', { name: 'Send reset link' }))

    expect(screen.getByRole('button', { name: 'Sending...' })).toBeDisabled()

    await waitFor(() => expect(onRequestSent).toHaveBeenCalledTimes(1))
  })
})