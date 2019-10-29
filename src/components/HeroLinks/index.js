import React from 'react';

import Button from '../Button';
import SocialWrapper from './SocialWrapper';
import SocialMedia from '../SocialMedia';

function HeroLinks(props) {
  return (
    <div>
      <Button href="https://rawcdn.githack.com/dankore/resume/820f94d95c4fbde986a570ae84516bf9a5fb03c0/Adamu_M_Dankore_Resume.pdf">View Resume</Button>
      <SocialWrapper>
        <SocialMedia/>
      </SocialWrapper>
    </div>
  );
}

export default HeroLinks;
