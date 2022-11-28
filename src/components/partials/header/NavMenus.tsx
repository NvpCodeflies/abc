import React from 'react';
import Button from '../../Button';

interface NavMenusInterface {
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
    headerRight?: {
      imgURL: string;
      title: string;
      subtitle: string;
      buttonURL: string;
      buttonText: string;
    };
  }[];
}

const NavMenus = (props: NavMenusInterface) => {
  const { menus } = props;

  return (
    <nav>
      <ul>
        {menus.length &&
          menus.map((menu, idx) => (
            <li key={idx}>
              <a
                href={menu.menuLink ? menu.menuLink : '#'}
                onClick={(e) => (!menu.menuLink ? e.preventDefault() : false)}
              >
                {menu.menuName}
              </a>
              {menu.submenu && (
                <div className="header_mega-menu">
                  <div className="header_mega-menu-row">
                    <div className="header_mega-menu-left">
                      <div className="header_mega-menu-links">
                        {menu.submenu &&
                          menu.submenu.map((submenu, idx) => (
                            <div className="header_mega-menu-item" key={idx}>
                              <h6>{submenu.title}</h6>
                              <ul>
                                {submenu.submenuLinks &&
                                  submenu.submenuLinks.map((submenuLink, idx) => (
                                    <li key={idx}>
                                      <a href={submenuLink.submenuLink}>
                                        <p>
                                          {submenuLink.submenuLinkTitle}{' '}
                                          {submenuLink.submenuLabel && (
                                            <span className="free-label">{submenuLink.submenuLabel}</span>
                                          )}
                                        </p>
                                        <span>{submenuLink.submenuLinkSubtitle}</span>
                                      </a>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="header_mega-menu-right">
                      <img src={menu.headerRight?.imgURL} alt="" />
                      <h4>{menu.headerRight?.title}</h4>
                      <p>{menu.headerRight?.subtitle}</p>

                      <Button
                        buttonText={menu.headerRight?.buttonText}
                        buttonUrl={menu.headerRight?.buttonURL}
                        openLinkInNewTab={false}
                      />
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavMenus;
