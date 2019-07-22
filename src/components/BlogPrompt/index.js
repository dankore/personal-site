import React from "react";

import Button from "./button";
import ContactContainer from "./contactContainer";
import FormWrapper from "./formWrapper";
import H2 from "./h2";
import Input from "./input";
import Textarea from "./textarea";

function BlogPrompt() {
  return (
    <ContactContainer>
      <FormWrapper>
        <form
          method="POST"
          action="https://formspree.io/adamu@homeawayfromhome.online"
        >
          <Input
            type="hidden"
            name="_subject"
            value="Contact request from personal website"
          />
          <Input
            type="email"
            name="_replyto"
            placeholder="Your email"
            required
          />
          <Textarea name="message" placeholder="Your message" required />
          <Button type="submit">Send</Button>
        </form>
      </FormWrapper>
    </ContactContainer>
  );
}

export default BlogPrompt;
