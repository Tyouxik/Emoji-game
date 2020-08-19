import styled from "styled-components";

const InstructionsWrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1fr; */
  grid-template-rows: 0.3fr 1fr 1fr 1fr 1fr;
  gap: 3px 1px;
  height: 100vh;

  section {
    width: 100vw;
    /* height: 20vh; */
    display: flex;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
  section > div {
    max-width: 40%;
    max-height: 100%;
    padding: 0 2%;
  }
  img {
    height: 100px;
  }

  header {
    grid-row-start: 1;
    grid-column-start: 2;
  }
  #feature-wrapper {
    grid-row-start: 2;
    grid-column-start: 2;
  }
  #instructions-wrapper {
    grid-row-start: 3;
    grid-column-start: 2;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #instructions-wrapper p {
    padding: 0 2%;
  }

  #good-example-wrapper {
    grid-row-start: 4;
    grid-column-start: 2;
  }
  #bad-example-wrapper {
    grid-row-start: 5;
    grid-column-start: 2;
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  /* font-size: 2em; */
`;

export { InstructionsWrapper, FeatureList };
