import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.primary ? "linear-gradient(90deg, #c7c5f4, #776bcc)" : "white"};
  color: ${(props) => (props.primary ? "#fff" : "#075ce6")};

  font-size: 1em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
`;
