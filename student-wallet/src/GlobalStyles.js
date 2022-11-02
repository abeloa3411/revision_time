import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#075ce6" : "white")};
  color: ${(props) => (props.primary ? "#fff" : "#075ce6")};

  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid #075ce6;
  border-radius: 6px;
`;
