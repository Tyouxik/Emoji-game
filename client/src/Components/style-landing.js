import styled from "styled-components";
import { Link } from "react-router-dom";
import { pink, grey, orange } from "../../color";

const LandingWrapper = styled.div`
  .grid-container {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 2fr 0.5fr;
    gap: 0px 0px;
    grid-template-areas:
      "Navbar Navbar Navbar Navbar"
      "Main Main Main Main"
      "Footer Footer Footer Footer";

    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );
  }
  h1 {
    font-family: "Overpass";
    color: black;
    width: fit-content;
    margin: 0 auto;
    font-size: 2em;
  }

  .Navbar {
    grid-area: Navbar;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .Footer {
    grid-area: Footer;
  }

  .Main {
    grid-area: Main;
  }

  .mainBox {
    width: 200px;
    height: 200px;
  }
`;

const LandingLink = styled(Link)`
  background-color: #fca863;
  color: white;
  text-decoration: none;
  font-size: 1.5 rem;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: 10px;
  border: 2px solid white;
`;
export { LandingWrapper, LandingLink };
