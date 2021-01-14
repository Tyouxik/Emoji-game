import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingWrapper = styled.div`
  /* display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-rows: 0.5fr 3fr 0.5fr;
  gap: 1px 1px; */
  height: 100vh;
  background: linear-gradient(179.61 deg, #ffc600 20.54%, #ffdd66 98.45%),
    #f8c100;
  h1 {
    margin: 10px 0px;
  }
  #landing {
    /* padding: 3%; */
    background: #f8c100;
    /* box-shadow: inset 0px 0px 16px 12px rgba(206, 66, 66, 0.55); */
    border-radius: 11px;
    /* grid-column-start: 2;
    grid-row-start: 2; */
    /* width: 100vh; */
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
  }
  .laugh {
    width: 20%;
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 80%;
    height: 50%;
  }
`;

const LandingLink = styled(Link)`
  text-decoration: none;
  color: black;
  background: white;
  border: 4px solid black;
  box-sizing: border-box;
  //box-shadow: inset 0px 0px 8px 8px rgba(252, 173, 58, 0.76);
  border-radius: 0px;
  padding: 5px 20px;
  margin: 10px auto;
  width: 40%;
  height: 25%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-size: x-large;
`;
export { LandingWrapper, LandingLink };
