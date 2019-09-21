import React from 'react';

import Button from '../Button';
import SocialWrapper from './SocialWrapper';
import SocialMedia from '../SocialMedia';

function HeroLinks(props) {
  return (
    <div>
      <Button href="https://onedrive.live.com/view.aspx?cid=0DB427265D439DE3&authKey=%21AIJTlKhS4GwYZag&resid=DB427265D439DE3%2175653&ithint=%2Epdf&open=true&app=WordPdf">View Resume</Button>
      <SocialWrapper>
        <SocialMedia/>
      </SocialWrapper>
    </div>
  );
}

export default HeroLinks;
