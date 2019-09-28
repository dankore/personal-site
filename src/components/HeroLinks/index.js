import React from 'react';

import Button from '../Button';
import SocialWrapper from './SocialWrapper';
import SocialMedia from '../SocialMedia';

function HeroLinks(props) {
  return (
    <div>
      <Button href="https://rawcdn.githack.com/dankore/resume/0be9c76da33deb0c8f0698aeb9ae1376ec501dec/src/Adamu_M_Dankore_Resume.pdf">View Resume</Button>
      <SocialWrapper>
        <SocialMedia/>
      </SocialWrapper>
    </div>
  );
}

export default HeroLinks;
