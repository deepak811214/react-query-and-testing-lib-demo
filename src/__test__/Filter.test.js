import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../screens/Home";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const MockList = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

describe("Verify filter result ", () => {
  it("should show the genre of each movie matches the applied filter", async () => {
    render(<MockList />);
    const filterTypeBtn = screen.getByTestId(/genre/i);
    fireEvent.click(filterTypeBtn);
    const selectedOption = screen.getByText(/comedy/i)
    fireEvent.click(selectedOption);
    const totelCardElements = await screen.findAllByTestId(/item/i)
    const divElement = await screen.findAllByText(/comedy/i)
    expect(divElement.length).toBe(totelCardElements.length + 1)
  })
})

