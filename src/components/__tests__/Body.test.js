import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/reasCardList.json"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() => {
    return Promise.resolved({
        json: () => {
            Promise.resolved(MOCK_DATA)
        }
    })
})

test("should render the body component", async () => {

    await act(async () => render(<Body />))

    const searchButton = screen.getByRole("button", {name : "Search"})

    expect(searchButton).toBeInTheDocument()
    
})


test("should render the body component with search", async () => {

    await act(async () => render(<Body />))

    const searchButton = screen.getByRole("button", {name : "Search"})

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, { target: {value: "Burgers"}})

    fireEvent.click(searchButton)

    const card = screen.getAllByTestId("resCard")

    expect(card.length).toBe(4)
    
})

test("should render the body component with top rated restaurant", async () => {

    await act(async () => render(
        <BrowserRouter>
         <Body />
        </BrowserRouter>
   ))

    const cardBeforeSearch = screen.getAllByTestId("resCard")

    expect(cardBeforeSearch.length).toBe(20)

    const searchButton = screen.getByRole("button", {name : "Filter Top Restaurants"})

    fireEvent.click(searchButton)

    const card = screen.getAllByTestId("resCard")

    expect(card.length).toBe(13)
    
})