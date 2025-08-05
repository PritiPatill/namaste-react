import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

test('Should load contact component', () => {
    render(<ContactUs />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
})

test('Should load contact component', () => {
    render(<ContactUs />)

    const heading = screen.getByRole('button')

    expect(heading).toBeInTheDocument()
})

test('Should load submit button', () => {
    render(<ContactUs />)

    const heading = screen.getByText('Submit')

    expect(heading).toBeInTheDocument()
})

test('Should load input', () => {
    render(<ContactUs />)

    const input = screen.getByPlaceholderText('Name')

    expect(input).toBeInTheDocument()
})

test('Should load all input', () => {
    render(<ContactUs />)

    const input = screen.getAllByRole('textbox')

    expect(input.length).toBe(2)
})