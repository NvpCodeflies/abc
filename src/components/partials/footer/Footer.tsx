import React from 'react';
import footerData from '../../../data/footerData';
import Button from '../../Button';
import '../../partials/footer/footer.css';

const Footer = () => {
  const { menus } = footerData;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_row">
          {menus &&
            menus.map((menuItem, idx) => (
              <div className="footer_item" key={idx}>
                <h4 className="footer_title">{menuItem.menuTitle}</h4>
                <ul className="footer_links">
                  {menuItem.menuItems &&
                    menuItem.menuItems.map((menuLinks, idx) => (
                      <li key={idx}>
                        <a href={menuLinks.menuItemURL} target="_blank">
                          {menuLinks.menuItemName}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}

          <div className="footer_item">
            {footerData.button && (
              <Button
                buttonText={footerData.button.buttonText}
                buttonUrl={footerData.button.buttonURL}
                openLinkInNewTab={true}
              />
            )}

            {footerData.logo && (
              <a href={footerData.logo.logoLink} className="footer_logo">
                <img src={footerData.logo.logoURL} alt="" />
              </a>
            )}

            <ul className="footer_social-links">
              {footerData.socialLinks &&
                footerData.socialLinks.map((socialLinks, idx) => (
                  <li key={idx}>
                    <a href={socialLinks.socialLinkURL} target="_blank">
                      <img src={socialLinks.socialLinkImg} alt="" />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="footer_copyright">
          <div className="row">
            <div className="col-6">
              <p> {footerData?.copyright?.privacyPolicy.privacyText && (
                <a href={footerData.copyright.privacyPolicy.privacyURL} target="_blank">
                  {footerData.copyright.privacyPolicy.privacyText}
                </a>
              )}</p>
            </div>

            <div className="col-6">
              <p>
                {footerData?.copyright?.termsAndConditions.termsAndConditionsText && (
                  <a href={footerData.copyright.termsAndConditions.termsAndConditionsURL} target="_blank">
                    {footerData.copyright.termsAndConditions.termsAndConditionsText}
                  </a>
                )}
              </p>
            </div>
            <div className="col-12">
              <p>{footerData?.copyright?.copyRightText }</p>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
