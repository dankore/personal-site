import React from "react";
import Button from "./button";
import ContactContainer from "./contactContainer";
import FormWrapper from "./formWrapper";
import H2 from "./h2";
import Input from "./input";
import Textarea from "./textarea";

function Contact() {
  return (
    <ContactContainer>
      <H2>Get in Touch</H2>
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

export default Contact;

// function Contact() {
//   return (
//     <div id="contact">
//         <h2>Get in Touch</h2>
//         <div id="contact-form">
//             <form method="POST" action="https://formspree.io/adamu@homeawayfromhome.online">
//                 <input type="hidden" name="_subject" value="Contact request from personal website" />
//                 <input type="email" name="_replyto" placeholder="Your email" required />
//                 <textarea name="message" placeholder="Your message" required></textarea>
//                 <button type="submit">Send</button>
//             </form>
// </div>
//   )

// }
