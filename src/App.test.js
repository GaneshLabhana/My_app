import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

// My first test case
//  import { render, screen } from "@testing-library/react"
//  import Card from "./index"
// import { taskCompleted } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions"
// import { executeReducerBuilderCallback } from "@reduxjs/toolkit/dist/mapBuilders"
// test("Card render", () => {
//     render(<Card />)
//     const textElement = screen.getByText("Hello")
//     expect(textElement).toBeInTheDocument()
// })


// Test Driven Development(TDD)
// import { render, screen } from "@testing-library/react"
// import Card from "./index"
// test("Card render", () => {
//     render(<Card />)
//     const textElement = screen.getByText("Hello")
//     expect(textElement).toBeInTheDocument()
// })
// test("Card render with a name", () => {
//     render(<Card name="Ganesh" />)
//     const textElement = screen.getByText("Hello Ganesh")
//     expect(textElement).toBeInTheDocument()
// })

//test.only
// test.only("Card render with a name", () => {
//     render(<Card name="Ganesh" />)
//     const textElement = screen.getByText("Hello Ganesh")
//     expect(textElement).toBeInTheDocument()
// })

//test.skip
// test.skip("Card render with a name", () => {
//     render(<Card name="Ganesh" />)
//     const textElement = screen.getByText("Hello Ganesh")
//     expect(textElement).toBeInTheDocument()
// })

//Grouping Tests
// describe("Card", () => {
//     test("Card render", () => {
//     render(<Card />)
//     const textElement = screen.getByText("Hello")
//     expect(textElement).toBeInTheDocument()
//     })
//     })
// describe("Nested", () => {
//     test("Card render with a name", () => {
//     render(<Card name="Ganesh" />)
//     const textElement = screen.getByText("Hello Ganesh")
//     expect(textElement).toBeInTheDocument()
// })
// })

//Code Coverage
// A Metric that can help you understand how much of your software code is taskCompleted
// 1) Statement coverage: how many of the statements in the software code have been execute
// 2) Branches coverage: how many of the branchres of the control structures (if state for instance) have been excuted
// 3) Function coverage: how many of the functions defined have been called and finally
// 4) Line coverage: how many ofLine of source code have been tested

//RTL Queries
// To find a single element on the pade, we have
// getBy, queryBy, findBy
// To find a multiple element on the pade, we have
// getAllBy, queryAllBy, findAllBy

