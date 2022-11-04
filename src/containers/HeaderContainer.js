import React, { useState } from 'react';
import links from '../constants/routes/nav-links';
import { HeaderWrapper, Banner, Jumbotron } from '../components';
import wpp from '../images/wpp.png';
import logo from '../images/logo.png';
import login from '../images/login.png';

import { AdvancedSearchContainer, SideNavigationContainer } from './index';

const HeaderContainer = ({ bg, source }) => {
  const [sideNavShown, setSideNavShown] = useState(false);
  const [sideNavHidden, setSideNavHidden] = useState(true);
  const [fixed, setFixed] = useState(false);

  const changeBackgroundColorAndPosition = () => {
    if (window.pageYOffset > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener('scroll', changeBackgroundColorAndPosition);

  const handleSideNavigation = () => {
    setSideNavHidden((prevState) => !prevState);
    setSideNavShown((prevState) => !prevState);
  };
  return (
    <Banner bg={bg} source={source}>
      <HeaderWrapper bg={bg} fixed={fixed}>
        <HeaderWrapper.Container>
          <HeaderWrapper.Title bg={bg}>
            <HeaderWrapper.Link bg={bg} fixed={fixed} to="/">
              <img
                src={wpp}
                alt=""
                style={{ position: 'relative', width: '30px', top: '7px' }}
              />
              (55) 9 9999 9999
            </HeaderWrapper.Link>
            <HeaderWrapper.LoginImg bg={bg} fixed={fixed} to="/">
              <a bg="false" class="headerwrapper__ListAnchor-sc-1podsgm-9 hGVNod" href="/login"><img src={login} alt=""/></a> 
            </HeaderWrapper.LoginImg>
          </HeaderWrapper.Title>
        </HeaderWrapper.Container>
        <HeaderWrapper.Container>
          <HeaderWrapper.Logotipo>
            <img src={logo} alt="" />
          </HeaderWrapper.Logotipo>
        </HeaderWrapper.Container>
      </HeaderWrapper>
      {bg === 'true' && (
        <Jumbotron>
          <Jumbotron.Centro>
            <Jumbotron.Title>Pampa Imoveis</Jumbotron.Title>
            <Jumbotron.Text>Aqui você vive com conforto.</Jumbotron.Text>
          </Jumbotron.Centro>
          <Jumbotron.Right>
            <AdvancedSearchContainer />
          </Jumbotron.Right>
        </Jumbotron>
      )}
      <SideNavigationContainer
        sideNavShown={sideNavShown}
        sideNavHidden={sideNavHidden}
        setSideNavHidden={setSideNavHidden}
        setSideNavShown={setSideNavShown}
      />
    </Banner>
  );
};

export default HeaderContainer;
