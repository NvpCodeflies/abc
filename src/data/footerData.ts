import logo from '../assets/img/logo.png';
import facebookIcon from '../assets/icons/facebook.png';
import linkedInIcon from '../assets/icons/linkedIn.png';
import slackIcon from '../assets/icons/slack.png';
import twitterIcon from '../assets/icons/twitter.png';

interface FooterInterface {
  logo: {
    logoURL: string;
    logoLink: string;
  };
  menus: {
    menuTitle: string;
    menuItems?: {
      menuItemName: string;
      menuItemURL: string;
    }[];
  }[];
  button: {
    buttonText: string;
    buttonURL: string;
  };
  socialLinks: {
    socialLinkImg: string;
    socialLinkURL: string;
  }[];
  copyright?: {
    privacyPolicy: {
      privacyText: string;
      privacyURL: string;
    };
    termsAndConditions: {
      termsAndConditionsText: string;
      termsAndConditionsURL: string;
    };
    copyRightText?:string;
  };
}

const footerData: FooterInterface = {
  logo: {
    logoURL: `${logo}`,
    logoLink: 'https://vulcan.io',
  },
  menus: [
    {
      menuTitle: 'Platform',
      menuItems: [
        {
          menuItemName: 'Remediation Orchestration',
          menuItemURL: 'https://vulcan.io/platform/',
        },
        {
          menuItemName: 'Integrations',
          menuItemURL: 'https://vulcan.io/integrations/',
        },
        {
          menuItemName: 'Remedy Cloud',
          menuItemURL: '#',
        },
       
      ],
    },
    {
      menuTitle: 'Community',
    },
    {
      menuTitle: 'Blog'
    },
    {
      menuTitle: 'Company',
      menuItems: [
        {
          menuItemName: 'About',
          menuItemURL: 'https://vulcan.io/about/',
        },
        {
          menuItemName: 'Careers',
          menuItemURL: 'https://vulcan.io/careers/',
        },
        {
          menuItemName: 'Partners',
          menuItemURL: 'https://vulcan.io/partners/',
        },
        {
          menuItemName: 'Contact us',
          menuItemURL: 'https://vulcan.io/contact-us/',
        },
      ],
    },
  ],
  button: {
    buttonText: 'get fix done',
    buttonURL: 'https://vulcan.io/lp/demo/',
  },
  socialLinks: [
    {
      socialLinkImg: `${linkedInIcon}`,
      socialLinkURL: 'https://www.linkedin.com/company/vulcancyber/?_l=en_US',
    },
    {
      socialLinkImg: `${facebookIcon}`,
      socialLinkURL: 'https://www.facebook.com/Vulcan-Cyber-185468708946883/',
    },
    {
      socialLinkImg: `${twitterIcon}`,
      socialLinkURL: 'https://twitter.com/VulcanCyber',
    },
    {
      socialLinkImg: `${slackIcon}`,
      socialLinkURL: 'https://cyber-risk-community.slack.com/ssb/redirect',
    },
  ],
  copyright: {
    privacyPolicy: {
      privacyText: 'Privacy Policy',
      privacyURL: 'https://vulcan.io/privacy-policy/',
    },
    termsAndConditions: {
      termsAndConditionsText: 'Terms of Use',
      termsAndConditionsURL: 'https://vulcan.io/terms-of-service/',
    },
    copyRightText:"Copyright© 2022 Vulcan. All rights reserved."
  },
};

export default footerData;
