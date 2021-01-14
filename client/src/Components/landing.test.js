import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { BrowserRouter as Router } from 'react-router-dom';
import { LandingWrapper, LandingLink } from "./style-landing";


describe('check the style of Landing component', () => {

  test("check style of LandingWrapper", () => {
    const tree = renderer.create(<LandingWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("check style of LandingLink to Game", () => {
    const tree = renderer.create(<Router><LandingLink to="/game" /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("check style of LandingLink to Instructions", () => {
    const tree = renderer.create(<Router><LandingLink to="/instructions" /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });

})



