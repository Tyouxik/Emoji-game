import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-rows: 0.5fr 3fr 0.5fr;
  gap: 1px 1px;
  height: 100vh;

  #landing {
    padding: 3%;
    background: #fe0404;
    box-shadow: inset 0px 0px 16px 12px rgba(206, 66, 66, 0.55);
    border-radius: 11px;
    grid-column-start: 2;
    grid-row-start: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
  }
  .laugh {
    width: 50%;
  }

  .links {
    display: flex;
    flex-direction: column;
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
  background: #fdd140;
  border: 1px solid #f77d41;
  box-sizing: border-box;
  box-shadow: inset 0px 0px 8px 8px rgba(252, 173, 58, 0.76);
  border-radius: 11px;
  padding: 5px 20px;
  margin: 10px auto;
  width: 80%;
  height: 25%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-size: x-large;
`;
export { LandingWrapper, LandingLink };
