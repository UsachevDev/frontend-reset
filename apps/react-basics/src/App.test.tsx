import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders title', () => {
    render(<App />)
    // Ищем именно заголовок <h1>
    expect(
      screen.getByRole('heading', { name: /vite \+ react/i })
    ).toBeInTheDocument()
  })

  it('shows counter button', () => {
    render(<App />)
    // Кнопка из шаблона Vite
    expect(
      screen.getByRole('button', { name: /count is/i })
    ).toBeInTheDocument()
  })
})
