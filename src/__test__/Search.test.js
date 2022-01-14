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

describe("Verify search result ", () => {
  it("should contain search text in title property of list item", async () => {
    render(<MockList />);
    const searchBox = screen.getByTestId(/searchBox/i);
    const searchBtn = screen.getByTestId(/searchBtn/i);
    fireEvent.change(searchBox, { target: { value: "titanic" } });
    fireEvent.click(searchBtn);
    const totelCardElements = await screen.findAllByTestId(/media-item/i)
  console.log(totelCardElements)
    const divElement = await screen.findAllByText(/titanic/i)
    expect(divElement.length).toBe(totelCardElements.length)
  })
})


