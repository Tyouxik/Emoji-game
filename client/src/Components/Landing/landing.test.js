import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { LandingWrapper, LandingLink } from "./style-landing";

test("it works", () => {
  const tree = renderer.create(<LandingWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("it works", () => {
  const tree = renderer.create(<LandingLink />).toJSON();
  expect(tree).toMatchSnapshot();
});
