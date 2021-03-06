import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  outline: 1px solid rgba(255, 255, 255, 0);
  margin-bottom: 10px;
  background: #16527a;
  color: #fff;
  font-weight: bold;
  -webkit-transition: 0.5s ease all;
  transition: 0.5s ease all;

  ::-webkit-input-placeholder {
    color: #fff;
  }
  :-moz-placeholder {
    color: #fff;
    opacity: 1;
  }
  ::-moz-placeholder {
    color: #fff;
    opacity: 1;
  }
  :-ms-input-placeholder {
    color: #fff;
  }

  &:focus {
    background: #0a293d;
  }
`;

export default Input;
