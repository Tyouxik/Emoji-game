import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { LocationDisplay, App } from "./app";

describe("full app rendering/navigating", () => {
  test("renders <Landing/>", () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(container.querySelector("#title").innerHTML).toMatch("Emoji Set");
  });

  test("renders <Game/> when click on NewGame link", () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(container.querySelector("#title").innerHTML).toMatch("Emoji Set");

    fireEvent.click(getByText(/game/i));

    // // check that the content changed to the new page
    expect(container.querySelector("#title").innerHTML).toMatch("Game On");
  });
  test("renders <Instructions/> when click on Instructions link", () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    fireEvent.click(getByText(/instructions/i));
    expect(container.querySelector("#title").innerHTML).toMatch("Instructions");
  });
});
