import styled from "styled-components";
import { smallScreen } from "../../variables";

const ContactContainer = styled.div`
  margin: 0 0 15px 0;
  color: #fff;
  font-weight: 500;

  @media only screen and (max-width: ${smallScreen}) {
    flex: 1 0 100%;
  }
`;

export default ContactContainer;
