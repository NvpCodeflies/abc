import React, { useEffect, useRef, useState } from 'react';
import headerData from '../../../data/headerData';
import headerNotificationData from '../../../data/headerNotificationStripData';
import './header.css';
import MobileHeader from './MobileHeader';
import NotificationStrip from '../../notificationStrip/NotificationStrip';
import Button from '../../Button';
import NavMenus from './NavMenus';

import pxStringRemover from '../../../utils/pxStringRemover';
import throttleFunction from '../../../utils/throttleFunction';

const Header: React.FC = () => {
  const headerRef: React.RefObject<HTMLBodyElement> = useRef(null);
  const mobileHeaderRef: React.RefObject<HTMLBodyElement> = useRef(null);
  const [isHeaderFixed, setisHeaderFixed] = useState(false);

  const headerHeight = () => {
    const body = document.querySelector('body')!;
    const headerHeight = `${headerRef.current ? headerRef.current.getBoundingClientRect().height : '0'}px`;
    const mobileHeaderHeight = `${
      mobileHeaderRef.current ? mobileHeaderRef.current.getBoundingClientRect().height : '0'
    }px`;
    const setHeight = pxStringRemover(headerHeight) || pxStringRemover(mobileHeaderHeight);

    body.style.paddingTop = `${setHeight}px`;
  };

  useEffect(() => {
    headerHeight();

    window.addEventListener(
      'resize',
      throttleFunction(function (e: React.UIEvent<Window>) {
        headerHeight();
      }, 100),
    );

    window.addEventListener(
      'scroll',
      throttleFunction(function (e: React.UIEvent<Window>) {
        headerHeight();

        if (window.scrollY > 150) {
          setisHeaderFixed(true);
        } else {
          setisHeaderFixed(false);
        }
      }, 100),
    );
  }, []);

  const { logoLink, logoURL } = headerData.logo;
  const { menus } = headerData;

  return (
    <>
      <header className={'header ' + (isHeaderFixed ? 'effect' : '')} ref={headerRef}>
        <NotificationStrip notificationList={headerNotificationData} headerHeight={headerHeight} />
        <div className="container">
          <div className="header_row">
            <div className="header_left">
              <a href={logoLink} className="header_logo">
                <img src={logoURL} alt="" />
              </a>

              <NavMenus menus={menus} />
            </div>
            <div className="header_right">
              <ul className="top_links">
                {headerData.topNav.length &&
                  headerData.topNav.map((topMenu, idx) => (
                    <li key={idx}>
                      <a href={topMenu.linkURL}>{topMenu.linkName}</a>
                    </li>
                  ))}
              </ul>
              <Button buttonText={headerData.buttonRight.buttonText} buttonUrl={headerData.buttonRight.buttonURL} />
            </div>
          </div>
        </div>
      </header>
      <MobileHeader isHeaderFIxed={isHeaderFixed} headerHeight={headerHeight} headRef={mobileHeaderRef} />
    </>
  );
};

export default Header;
