import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Header from "../components/Header";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("Test that the header renders", () => {
  act(() => {
    ReactDOM.render(<Header />, container);
  });
  let h1 = container.querySelector("h1");
  expect(h1.innerHTML).toBe("Welcome!");
});
