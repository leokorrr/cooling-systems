import Home from '@/app/page'
import { Navbar } from '@/components/Navbar'
import { render, screen } from '@testing-library/react'
import { SessionProvider } from 'next-auth/react'

const renderApp = () =>
  render(
    <SessionProvider>
      <Navbar />
      <Home />
    </SessionProvider>
  )

describe('App...', () => {
  test('renders correctly', () => {
    renderApp()

    const appHeader = screen.getByText(/coolingsystems/i)
    expect(appHeader).toBeInTheDocument()

    const signInButton = screen.getByRole('button', {
      name: /sign in with github/i
    })
    expect(signInButton).toBeInTheDocument()
  })
})
