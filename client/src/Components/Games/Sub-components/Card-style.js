import styled from "styled-components";

const CardImg = styled.img`
  max-width: 20%;

  border: ${(props) =>
    props.isSelected ? "2px solid red" : "1px solid black"};

  animation: ${(props) =>
    props.showHint && props.isHint
      ? "shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)both;"
      : "none"};

  border-radius: 20px;
`;

export { CardImg };
