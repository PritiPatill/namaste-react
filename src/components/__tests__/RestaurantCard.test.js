import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

test("Should render the restaurant card component", () => {
    render(<RestaurantCard data={MOCK_DATA} />)

    const name = screen.getByText("Adil Hotel")

    expect(name).toBeInTheDocument()
})

test("Should render the restaurant card with promoted label", () => {
    const WrappedCard = withPromotedLabel(RestaurantCard);
    render(<WrappedCard  data={MOCK_DATA} />);
    expect(screen.getByText("Promoted")).toBeInTheDocument();
})