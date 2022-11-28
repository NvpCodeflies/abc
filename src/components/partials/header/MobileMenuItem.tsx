import React from 'react';

interface MobileMenuProppsInterface {
  menu: {
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
  };
  idx: number;
  isMenuToggled: boolean;
  handleToggle: any;
}

const MobileMenuItem: React.FC<MobileMenuProppsInterface> = (props) => {
  const { menu, idx, isMenuToggled, handleToggle } = props;
  return (
    <li key={idx} className={isMenuToggled ? 'toggled' : ''} onClick={() => handleToggle(idx)}>
      <a href={menu.menuLink ? menu.menuLink : '#!'} onClick={(e) => (!menu.menuLink ? e.preventDefault : true)}>
        {menu.menuName}
      </a>
      {menu.submenu && (
        <div className="mobile_menu-dropdown">
          {menu.submenu.map((submenuItem, idx) => (
            <div className="mobile_menu-item" key={idx}>
              <h6>{submenuItem.title}</h6>
              {
                <ul>
                  {submenuItem.submenuLinks.map((submenuLinkItem, idx) => (
                    <li key={idx}>
                      <a href={submenuLinkItem.submenuLink}>
                        <p>{submenuLinkItem.submenuLinkTitle}</p>
                        <span>{submenuLinkItem.submenuLinkSubtitle}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              }
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

export default MobileMenuItem;
