import React, { useEffect, useState } from 'react';
import headerData from '../../../data/headerData';
import Button from '../../Button';
import MobileMenuItem from './MobileMenuItem';
import MobileMiniNavigation from './MobileMiniNavigation';

interface MobileMenuPropsInterface {
  menus: {
    menuName: string;
    menuLink?: string;
    submenu?: {
      title: string;
      submenuLinks: {
        submenuLabel?: string;
        submenuLink: string;
        submenuLinkTitle: string;
        submenuLinkSubtitle: string;
      }[];
    }[];
  }[];
  buttonData: {
    buttonURL: string;
    buttonText: string;
  };
}

const MobileMenu: React.FC<MobileMenuPropsInterface> = (props) => {
  const { menus, buttonData } = props;
  const [isMenuToggled, setIsMenuToggled] = useState(new Array(menus.length).fill(false));

  const handleToggle = (idx: number) => {
    if (isMenuToggled[idx] === true) {
      setIsMenuToggled((currentState) => currentState.map((_) => false));
    } else {
      setIsMenuToggled((currentState) => currentState.map((_, index) => (index == idx ? true : false)));
    }
  };

  return (
    <>
      <div className="mobile_menu_navigation">
        <ul>
          {menus.map((menu, idx) => (
            <MobileMenuItem
              menu={menu}
              idx={idx}
              isMenuToggled={isMenuToggled[idx]}
              handleToggle={handleToggle}
              key={idx}
            />
          ))}
        </ul>
      </div>
      <MobileMiniNavigation topNav={headerData.topNav} />
      <Button buttonText={buttonData.buttonText} buttonUrl={buttonData.buttonText} type="secondary" />
    </>
  );
};

export default MobileMenu;
