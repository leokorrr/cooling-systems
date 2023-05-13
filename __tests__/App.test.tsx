import Home from '@/app/page'
import { Navbar } from '@/components/Navbar'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event/'
import { SessionProvider } from 'next-auth/react'

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
      return { data: mockSession, status: 'authenticated' }
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

  test('user can type', async () => {
    userEvent.setup()

    renderApp()

    const titleInput = screen.getByRole('textbox', {
      name: /title:/i
    })
    await userEvent.type(titleInput, 'title')
    expect(titleInput).toHaveValue('title')

    const descriptionInput = screen.getByRole('textbox', {
      name: /description:/i
    })
    await userEvent.type(descriptionInput, 'description')
    expect(descriptionInput).toHaveValue('description')

    const priceInput = screen.getByRole('spinbutton', {
      name: /price:/i
    })
    await userEvent.type(priceInput, '10')
    expect(priceInput).toHaveValue(10)
  })

  test('should render 1 storage item', () => {
    renderApp()

    const storageElement = screen.getByTestId('storage-item')
    expect(storageElement).toBeInTheDocument()
  })

  test('error messages should display if nothing is typed', async () => {
    userEvent.setup()

    renderApp()

    const addButton = screen.getByRole('button', {
      name: /add/i
    })
    await userEvent.click(addButton)

    const titleEmptyError = screen.getByText(/title is required/i)
    expect(titleEmptyError).toBeInTheDocument()

    const descriptionEmptyError = screen.getByText(/description is required/i)
    expect(descriptionEmptyError).toBeInTheDocument()

    const priceEmptyError = screen.getByText(/price is required/i)
    expect(priceEmptyError).toBeInTheDocument()
  })
})
