import React, { useState } from 'react';
import headerData from '../../../data/headerData';
import headerNotificationData from '../../../data/headerNotificationStripData';
import NotificationStrip from '../../notificationStrip/NotificationStrip';
import MobileMenu from './MobileMenu';

const MobileHeader = ({
  isHeaderFIxed,
  headerHeight,
  headRef,
}: {
  isHeaderFIxed: boolean;
  headerHeight: Function;
  headRef: React.Ref<HTMLBodyElement>;
}) => {
  const { logo } = headerData;
  const [isHeaderToggled, setIsHeaderToggled] = useState(false);

  const handleClick = () => setIsHeaderToggled(!isHeaderToggled);

  return (
    <header
      className={'mobile_header ' + (isHeaderToggled ? ' toggled ' : '') + (isHeaderFIxed ? ' effect ' : ' ')}
      ref={headRef}
    >
      <NotificationStrip notificationList={headerNotificationData} headerHeight={headerHeight} />
      <div className="mobile_header_row">
        <a href={logo.logoLink} className="mobile_header-logo">
          <img src={logo.logoURL} alt="" />
        </a>
        <button className="mobile_menu-trigger" onClick={handleClick}>
          <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect id="top" width="30" height="4" rx="2" fill="#2de298"></rect>
            <rect id="center" y="8" width="30" height="4" rx="2" fill="#2de298"></rect>
            <rect id="bottom" y="16" width="30" height="4" rx="2" fill="#2de298"></rect>
          </svg>
        </button>
      </div>
      <div className="mobile_header-wrapper">
        <MobileMenu menus={headerData.menus} buttonData={headerData.buttonRight} />
      </div>
    </header>
  );
};

export default MobileHeader;
