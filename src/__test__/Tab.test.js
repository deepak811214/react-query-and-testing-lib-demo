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

describe("Total count of media verification", () => {

  it("should render 20 cards on click of Newest tab", async () => {
    render(<MockList />);
    const newestTab = screen.getByTestId(/newest/i);
    fireEvent.click(newestTab);
    const totelCardElements = await screen.findAllByTestId("media-item")
    expect(totelCardElements.length).toBe(20)
  })

  it("should render 20 cards on click of Popular tab", async () => {
    render(<MockList />);
    const popularTab = screen.getByTestId(/popular/i);
    fireEvent.click(popularTab);
    const totelCardElements = await screen.findAllByTestId("media-item")
    expect(totelCardElements.length).toBe(20)
  })

  it("should render 20 cards on click of Trend tab", async () => {
    render(<MockList />);
    const trendTab = screen.getByTestId(/trend/i);
    fireEvent.click(trendTab);
    const totelCardElements = await screen.findAllByTestId("media-item")
    expect(totelCardElements.length).toBe(20)
  })

  it("should render 20 cards on click of Top Rated tab", async () => {
    render(<MockList />);
    const topratedTab = screen.getByTestId(/toprated/i);
    fireEvent.click(topratedTab);
    const totelCardElements = await screen.findAllByTestId("media-item")
    expect(totelCardElements.length).toBe(20)
  })
})