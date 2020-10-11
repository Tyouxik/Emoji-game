import styled from "styled-components";

const Classicsolo = styled.div`
  /* * {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  } */

  .game-box {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: baseline;
  }
  .message-box {
    height: 50px;
    background: white;
    border-radius: 15px;

    /* width: 100% */
  }
  .btn-box {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: baseline;
  }
`;

export { Classicsolo };
