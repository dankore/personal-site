import React from 'react';

import Button from '../Button';
import SocialWrapper from './SocialWrapper';
import SocialMedia from '../SocialMedia';

function HeroLinks(props) {
  return (
    <div>
      <Button href="https://cdn.statically.io/gh/dankore/resume/820f94/Adamu_M_Dankore_Resume.pdf">View Resume</Button>
      <SocialWrapper>
        <SocialMedia/>
      </SocialWrapper>
    </div>
  );
}

export default HeroLinks;
