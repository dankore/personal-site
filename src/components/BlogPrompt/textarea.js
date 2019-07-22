import styled from "styled-components";

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  background: #16527a;
  color: #fff;
  -webkit-transition: 0.5s ease all;
  transition: 0.5s ease all;
  height: 150px;
  resize: none;
  font-weight: bold;

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

export default Textarea;
