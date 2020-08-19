import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { LocationDisplay, App } from "./app";

describe("full app rendering/navigating", () => {
  test("full app rendering/navigating", () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(container.querySelector("#landing-title").innerHTML).toMatch(
      "Emoji Set"
    );

    //fireEvent.click(getByText(/about/i));

    // // check that the content changed to the new page
    // expect(container.innerHTML).toMatch('You are on the about page')
  });
});
