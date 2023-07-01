import React from "react";
import { render,fireEvent, screen } from "@testing-library/react";
import Counter from "./index";

describe("Counter", () => {
    test("render count correctly", () => {
        render(<Counter />);
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    })
    test('increments count when the increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  test('decrements count when the decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

})