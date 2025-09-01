import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import Header from "../Header"
import '@testing-library/jest-dom'

test('Should display header component', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />  
            </Provider>
        </BrowserRouter>
    )

    const button = screen.getByRole('button', {name: 'Login'})

    expect(button).toBeInTheDocument()
})

test('Should display cart item', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />  
            </Provider>
        </BrowserRouter>
    )

    // const cart = screen.getByText(/Cart/)
    const cart = screen.getByText('Cart (0 Items)')

    expect(cart).toBeInTheDocument()
})

test('Should display logout button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />  
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', {name: 'Login'})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole('button', {name: 'Logout'})

    expect(logoutButton).toBeInTheDocument()
})