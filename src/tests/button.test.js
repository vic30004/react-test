import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Button from "../components/Button";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("test to make sure button is rendering", () => {
  act(() => {
    ReactDOM.render(<Button />, container);
  });
  let button = container.querySelector(".test-me");
  let buttonTitle = container.querySelector("#btnTitle");
  expect(button.innerHTML).toBe("Click Me!");
  expect(buttonTitle.innerHTML).toBe("test button");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(buttonTitle.innerHTML).toBe("I Was Clicked!");
});
