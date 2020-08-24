import styled from "styled-components";
import { Link } from "react-router-dom";

const InstructionsWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.3fr 1fr 1fr 1fr 1fr 1fr;
  gap: 3px 1px;
  width: 100vw;
  background-color: #fdd140;

  h1 {
    padding-top: 10px;
    text-align: center;
    text-shadow: 1px 1px 2px #fe0404;
  }

  section {
    background: #fe0404;
    width: 100vw;
    color: white;
    text-shadow: 1px 1px 2px black;
    display: flex;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 3% 0;
  }

  section > div {
    max-width: 40%;
    max-height: 100%;
  }
  img {
    width: 40%;
    border: 2px solid black;
    border-radius: 20px;
  }
  /* Positions all the elements in grid */
  header {
    grid-row-start: 1;
  }
  #feature-wrapper {
    grid-row-start: 2;
  }
  #instruction1-wrapper {
    grid-row-start: 3;
  }
  .instructions {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #good-example-wrapper {
    grid-row-start: 4;
  }

  #instruction2-wrapper {
    grid-row-start: 5;
  }

  #bad-example-wrapper {
    grid-row-start: 6;
  }
  .instructions span:hover {
    font-size: 2em;
    transition-duration: 2s;
  }
  span {
    font-size: 1.5em;
  }
  h3 {
    font-size: 2em;
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  span {
    font-style: italic;
    font-size: 0.5em;
  }
`;

const InstructLink = styled(Link)`
  text-decoration: none;
  color: black;
  background: #fdd140;
  border: 1px solid #f77d41;
  box-sizing: border-box;
  box-shadow: inset 0px 0px 8px 8px rgba(252, 173, 58, 0.76);
  border-radius: 11px;
  /* padding: 5px 20px; */
  /* margin: 10px auto; */
  /* width: 40%; */
  /* height: 25%; */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export { InstructionsWrapper, FeatureList, InstructLink };
