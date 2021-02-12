import { render, screen } from '@testing-library/react'
import Main from './main.component'

describe('<Main />', () => {
  it('should render test', () => {
    const { container } = render(<Main />)
    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
