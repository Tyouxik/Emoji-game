import styled from "styled-components";

const CardImg = styled.img`
  width: 20%;
  border: ${(props) =>
    props.isSelected ? "2px solid red" : "1px solid black"};
  border-radius: 20px;
`;

export { CardImg };
