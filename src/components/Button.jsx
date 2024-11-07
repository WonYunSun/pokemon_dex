import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: ${(props) => props.fontSize || "14px"};
  cursor: pointer;
  border-radius: 5px;
  background-color: #e62914;
  color: white;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(185, 23, 23);
  }
`;

function Button({ text, onClick, fontSize }) {
  return (
    <StyledButton fontSize={fontSize} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;
