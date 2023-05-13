import Home from '@/app/page'
import { Navbar } from '@/components/Navbar'
import { render, screen } from '@testing-library/react'
import { SessionProvider } from 'next-auth/react'
import '@testing-library/jest-dom'
import { useSession } from 'next-auth/react'
import userEvent from '@testing-library/user-event/'

jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react')
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: 'admin' }
  }
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return { data: mockSession, status: 'authenticated' } // return type is [] in v3 but changed to {} in v4
    })
  }
})

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


    const titleInput = screen.getByRole('textbox', {
      name: /title:/i
    })
    expect(titleInput).toBeInTheDocument()

    const descriptionInput = screen.getByRole('textbox', {
      name: /description:/i
    })
    expect(descriptionInput).toBeInTheDocument()


    const priceInput = screen.getByRole('spinbutton', {
      name: /price:/i
    })
    expect(priceInput).toBeInTheDocument()

    const addButton = screen.getByRole('button', {
      name: /add/i
    })
    expect(addButton).toBeInTheDocument()
  })
})
