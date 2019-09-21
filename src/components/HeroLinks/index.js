import React from 'react';

import Button from '../Button';
import SocialWrapper from './SocialWrapper';
import SocialMedia from '../SocialMedia';

function HeroLinks(props) {
  return (
    <div>
      <Button href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A45480876-c88b-4266-9df1-96ba0f963944">View Resume</Button>
      <SocialWrapper>
        <SocialMedia/>
      </SocialWrapper>
    </div>
  );
}

export default HeroLinks;
