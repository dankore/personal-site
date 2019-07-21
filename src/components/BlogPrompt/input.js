import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  background: #3498db;
  color: #fff;
  -webkit-transition: 0.5s ease all;
  transition: 0.5s ease all;

  &:focus {
    outline: none;
    background: #16527a;
  }
`;

export default Input;
